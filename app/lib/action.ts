"use server";

import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { compare, hash } from "bcryptjs";
import { writeFile } from "fs/promises";

import { User } from "../models/User";
import { WaitList } from "../models/WaitList";
import dbConnect from "./db";
import { CreateBlogSchema, SendContactEmail } from "./schema";
import { sendMail } from "./mail";
import { SessionData, defaultSession, sessionOptions } from "./forge";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

export async function whiteList(formData: FormData) {
  const email = formData.get("email");

  try {
    await dbConnect();

    const NewMember = new WaitList({
      email: email,
    });

    await NewMember.save();

    return { status: true };
  } catch (error) {
    console.log(error);
    return { status: false };
  }
}

export async function RegisterUser(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await dbConnect();

    const { username, password, email, preference } =
      Object.fromEntries(formData);

    const userExust = await User.findOne({ email: email as string });

    if (userExust) {
      console.log("user exists error baby girl");
      return "user exists";
    }

    const hashPassword = await hash(password as string, 10);

    const newUser = new User({
      username,
      password: hashPassword,
      email,
      preference,
    });

    await newUser.save();

    return "Authentication success";
  } catch (error) {
    console.log(error);
    return "error im sorry but this entire form";
  }
}

const hadleImageUpload = async (image: any) => {
  const fileBuffer = await (image as File).arrayBuffer();
  const buffer = Buffer.from(fileBuffer);

  const path = `${process.cwd()}/public/blogheaders/${
    crypto.randomUUID() + image.name
  }`;

  await writeFile(path, buffer);

  return path.split(`${process.cwd()}/public/`)[1];
};

export async function CreateBlogPost(
  id: string,
  prevState: string | object | undefined,
  formData: FormData
) {
  try {
    // const { title, description, content, image, category } =
    //   Object.fromEntries(formData);

    const data = Object.fromEntries(formData.entries());

    const validatedFields = CreateBlogSchema.safeParse(data);

    if (!validatedFields.success) {
      return {
        message: "Missing Fields. Faileded to createblog try again.",
      };
    }

    const { title, description, content, image, category } =
      validatedFields.data;

    let rest;

    if (image.size !== 0) {
      console.log("There is an image");
      rest = await hadleImageUpload(image);
    }

    const payload = {
      title,
      description,
      content,
      category,
      image: rest,
    };

    console.log(payload);

    return { message: "Authentication success" };
  } catch (error) {
    console.log(error);
    return { message: "Sorry ders an err" };
  }
}

export async function ContactEmail(
  id: string,
  prevState: string | object | undefined,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());

  try {
    const validatedFields = SendContactEmail.safeParse(data);

    const existingUser = await User.findOne({ _id: id });

    if (!validatedFields.success) {
      return {
        message: "seemed to have not worked properly, try again.",
      };
    }

    const { to, name, subject, content } = validatedFields.data;

    await sendMail({
      to: process.env.SMTP_EMAIL as string,
      name: (existingUser?.username as string) || name,
      subject,
      content,
    });

    return {
      message: `${
        name || existingUser?.username
      } your message has been sent, if you cant wait... call`,
    };
  } catch (error) {
    console.log(error);
    return { message: "I am sorry but the request failed.... you got denied" };
  }
}

export async function Login(prevState: string | undefined, formData: FormData) {
  const { password, email } = Object.fromEntries(formData);

  try {
    await dbConnect();

    const session = await getSession();

    const userExust = await User.findOne({ email: email as string });

    if (!userExust) {
      return "user doesnt exists";
    }

    const PasswordCompared = await compare(
      password as string,
      userExust.password
    );

    if (!PasswordCompared) return "You failed";

    session.userId = userExust._id.toString();
    session.username = userExust.username;
    session.email = userExust.email;
    session.preference = userExust.preference;
    session.image = userExust.image || null;
    session.role = userExust.role;
    session.metaAddress = userExust.metaAddress || null;
    session.signature = userExust.signature || null;
    session.isLoggedIn = true;

    await session.save();

    return "success";

  } catch (error) {
    
    console.log(error);
    return "error im sorry but this entire form";
  }
}

export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};

const test = async (image: File) => {
  const fileBuffer = await (image as File).arrayBuffer();
  const buffer = Buffer.from(fileBuffer);

  const path = `${process.cwd()}/public/profileImages/${
    crypto.randomUUID() + image.name
  }`;

  await writeFile(path, buffer);

  return path.split(`${process.cwd()}/public`)[1];
};

export const UpdateUserProfile = async (
  userId: string,
  prevState: string | undefined,
  formData: FormData
) => {
  const { username, password, email, preference } =
    Object.fromEntries(formData);
  const image = formData.get("image") as File;

  let newHASH;
  let imageUrl;

  try {
    await dbConnect();
    const session = await getSession();

    if (password !== null) {
      newHASH = await hash(password as string, 10);
    }

    if (image.size !== 0) {
      imageUrl = await test(image);
    }

    const fieldsToCheck = [
      { field: "username", value: username },
      { field: "password", value: newHASH },
      { field: "email", value: email },
      { field: "preference", value: preference },
      { field: "image", value: imageUrl },
    ];

    const updatedFields: Record<string, string | null | undefined> = {};

    fieldsToCheck.forEach(({ field, value }) => {
      if (typeof value === "string" && value !== "") {
        updatedFields[field] = value;
      }
    });

    // Use findOneAndUpdate to find and update the user document
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { $set: updatedFields }
    );

    if (updatedUser) {
      console.log("User updated successfully:", updatedUser);

      session.username = updatedUser.username;
      session.email = updatedUser.email;
      session.preference = updatedUser.preference;
      session.image = updatedUser.image;

      await session.save();

      return "Success update";
    } else {
      console.log("User not found");
      return "User not found";
    }
  } catch (error) {
    console.error("Error updating user:", error);
    return "Error updating user";
  } finally {
    // Assuming revalidatePath and redirect are defined elsewhere
    revalidatePath(`/profile/${userId}`);
    redirect(`/profile/${userId}`);
  }
};
