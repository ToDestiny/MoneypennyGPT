import SideBar from "@/components/SideBar";
import { SessionProvider } from "../components/SessionProvider";
import { getServerSession } from "next-auth";
import "./globals.css";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SessionProvider session={session}>
          <div className="flex">
            <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem] ">
              <SideBar />
            </div>
            {/* Client provider - Notifications  */}
            <div className="bg-[#343541] flex-1">{children}</div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
