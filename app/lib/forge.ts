import { SessionOptions } from "iron-session";

export interface SessionData {
    userId?: string;
    username?: string;
    email?: string;
    preference?: string;
    image?: string | null;
    role?: string;
    isPro?: boolean;
    isLoggedIn?: boolean;
    metaAddress?: string | null;
    signature?: string | null;
}

export const defaultSession:SessionData =  {
    isLoggedIn: false
}

export const sessionOptions: SessionOptions = {
    password: process.env.AUTH_SECRET!,
    cookieName: "hateMyLife",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV  === "production"
    }
} 