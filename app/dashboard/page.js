import PageHeader from "@/components/PageHeader";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import Link from "next/link";
import { GiDiscussion } from "react-icons/gi";
import { FaBookReader } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <div className="items-center justify-items-center bg-[#d7d8d9] min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center">
        <PageHeader />
        <div className="min-h-56 text-center justify-items-center text-7xl font-semibold">
          <p className="text-3xl font-medium mb-6">
            Welcome, {session.user.name}!
          </p>
          <h1>
            Dashboard
          </h1>
        </div>
        <div className="flex flex-row justify-items-center">
          <Link
            href="/resources"
            className="flex flex-row font-bold text-center justify-self-center text-2xl p-4 border-solid border-2 border-orange-400 bg-[#f5d984] rounded-md hover:border-transparent hover:bg-gray-500 hover:text-white m-4"
          >
            <FaHandHoldingHeart
              className="text-4xl mr-4"
            />
            Resources
          </Link>
          <Link
            href="/discuss"
            className="flex flex-row font-bold text-center justify-self-center text-2xl p-4 border-solid border-2 border-orange-400 bg-[#f5d984] rounded-md hover:border-transparent hover:bg-gray-500 hover:text-white m-4"
          >
            <GiDiscussion 
              className="text-4xl mr-4"
            />
            Discussion Board
          </Link>
          <Link
            href="/learn"
            className="flex flex-row font-bold text-center justify-self-center text-2xl p-4 border-solid border-2 border-orange-400 bg-[#f5d984] rounded-md hover:border-transparent hover:bg-gray-500 hover:text-white m-4"
          >
            <FaBookReader
              className="text-4xl mr-4"
            />
            About IPV
          </Link>
        </div>
      </main>
    </div>
  );
}