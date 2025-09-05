import Image from "next/image";
import Link from "next/link";
import SignInButton from "./SignInButton";

export default function HomeHeader() {
    return (
      <div className="bg-[#89dff0] rounded-md border-transparent w-screen mb-8">
        <Link
          href="/"
        >
          <Image
            src="/atlasicon.png"
            href="/"
            width={200}
            height={200}
            alt="globe"
            className="justify-self-center mt-8"
          />
        </Link>
        <h1 className="text-center text-8xl font-medium mt-8 mb-8">
          Atlas Fired
        </h1>
        <div className="text-center justify-self-center mb-6">
          <SignInButton />
        </div>
      </div>
    );
}