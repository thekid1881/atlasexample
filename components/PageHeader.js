import Image from "next/image";
import Link from "next/link";
import SignOutButton from "./SignOutButton";

export default function PageHeader() {
    return (
        <div className="flex flex-row font-sans bg-[#89dff0] rounded-md border-1 border-gray-300 w-screen mb-12 min-h-32">
          <div className="font-sans absolute top-8 right-8">
            <SignOutButton />
          </div>
          <Link
            href="/"
            className="font-sans"
          >
            <Image
              src="/atlasicon.png"
              href="/"
              width={75}
              height={75}
              alt="globe"
              className="absolute top-5 left-5"
            />
            <h1 className="font-sans font-bold absolute top-5 left-28 mt-4 text-start text-4xl">
                Atlas Fired
            </h1>
          </Link>
        </div>
    );
}