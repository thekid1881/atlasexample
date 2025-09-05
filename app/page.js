import HomeHeader from "@/components/HomeHeader";
import FadeInSection from "@/components/FadeInSection";
import Link from "next/link";
import Image from "next/image";
import { FaBookReader } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="items-center justify-items-center bg-[#d7d8d9] min-h-screen font-[family-name:var(--font-outfit)]">
      <main className="flex flex-col items-center">
        <HomeHeader />
        <section className="mb-24">
          <div className="flex flex-col items-center mx-8">
            <h3 className="text-4xl font-semibold mb-8 text-gray-500">
              From burden to bullet.
            </h3>
            <p className="flex-col text-2xl text-center">
              Giving power back to victims of intimate partner violence <br />
              by turning silent suffering into vocal vindication
            </p>
          </div>
        </section>
        <FadeInSection className="bg-[#f5d984] p-12 rounded-lg shadow-md min-w-screen min-h-48 mb-12 mx-4">
          <h2 className="text-2xl font-semibold text-center pb-8">
            COVID.  Food Insecurity.  Depression.  Alcoholism.  Infertility.
          </h2>
          <p className="flex flex-col text-3xl font-bold text-center pb-8">
            Intimate Partner Violence.
          </p>
          <p className="flex flex-col text-xl font-medium text-center">
            These all affect 1 in 8 people.* Who's talking about IPV?
          </p>
          <Link
            href="/learn"
            className="flex flex-row text-xl font-semibold text-center justify-self-center border-solid border-2 border-orange-400 hover:border-transparent rounded-md hover:bg-gray-400 hover:text-white hover:underline p-4 mt-14"
          >
            <FaBookReader />
            <p className="ml-4">
              Learn About IPV
            </p>
          </Link>
        </FadeInSection>
        <FadeInSection className="flex flex-col justify-items-center items-center bg-[#89dff0] p-12 rounded-lg shadow-md min-w-screen min-h-48 mb-12 mx-4">
          <div className="flex flex-row justify-items-center items-center">
            <Image
              src="/100people.png"
              alt="100 people stat"
              width={500}
              height={400}
            />
            <div className="text-2xl justify-center mt-12 ml-12 pb-12">
              <h3 className="text-3xl font-bold text-center mb-8">
                Out of 100 IPV Victims
              </h3>
              <ul className="justify-items-center">
                <li>57 will not report anything to officials.</li>
                <li>43 will report what happened...</li>
                <li className="font-bold">Only 5 will receive victim services</li>
              </ul>
            </div>
          </div>
          <Link
            href="/resources"
            className="flex flex-row text-xl font-semibold text-center justify-center border-solid border-2 border-[#030382] hover:border-transparent rounded-md hover:bg-gray-400 hover:text-white hover:underline p-4 mt-12 max-w-fit mx-134"
          >
            <FaHandHoldingHeart />
            <p className="ml-4">
              Resources for Victims
            </p>
          </Link>
        </FadeInSection>
      </main>
    </div>
  );
}
