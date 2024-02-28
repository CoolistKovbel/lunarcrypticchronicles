
import { redirect } from "next/navigation";
import HeaderNav from "../components/header-nav";
import MainFooter from "../components/main-footer";
import { getSession } from "../lib/action";


export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/");
  }

  const user = { ...session };

  return (
    <main>
      <HeaderNav user={user} />
      {children}
      <MainFooter />
    </main>
  );
}
