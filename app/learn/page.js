import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default async function Learn() {
  return (
    <div className="items-center justify-items-center bg-[#d7d8d9] min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center">
        <PageHeader />
        <div className="min-h-56 text-center justify-items-center text-7xl font-semibold">
          <h1>
            About IPV
          </h1>
        </div>
        <div className="flex flex-row justify-items-center">
          <Link
            href="/"
            className="flex flex-row font-bold text-center justify-self-center text-2xl p-4 border-solid border-2 border-orange-400 bg-[#f5d984] rounded-md hover:border-transparent hover:bg-gray-500 hover:text-white m-4"
          >
            Placeholder
          </Link>
          <Link
            href="/"
            className="flex flex-row font-bold text-center justify-self-center text-2xl p-4 border-solid border-2 border-orange-400 bg-[#f5d984] rounded-md hover:border-transparent hover:bg-gray-500 hover:text-white m-4"
          >
            Placeholder
          </Link>
          <Link
            href="/"
            className="flex flex-row font-bold text-center justify-self-center text-2xl p-4 border-solid border-2 border-orange-400 bg-[#f5d984] rounded-md hover:border-transparent hover:bg-gray-500 hover:text-white m-4"
          >
            Placeholder
          </Link>
        </div>
      </main>
    </div>
  );
}