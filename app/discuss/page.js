import PageHeader from "@/components/PageHeader";
import Posts from "@/components/Posts";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";

export default async function Discuss() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/");
    }
    
    return (
        <div className="font-sans items-center justify-items-center bg-[#d7d8d9] min-h-screen]">
            <main className="flex flex-col items-center min-h-screen">
                <PageHeader />
                <h1 className="text-7xl font-semibold mt-8 mb-20">
                    Discussion Board
                </h1>
                <div className="w-[80vw]">
                    <Posts />
                </div>
            </main>
        </div>
    );
}