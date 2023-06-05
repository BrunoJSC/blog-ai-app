import Link from "next/link";
import SocialLinks from "./SocialLinks";
import Image from "next/image";

import ad1 from "/public/assets/ad-1.jpg";

export default function Navbar() {
  return (
    <header className="mb-5">
      <nav className="flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4">
        <div className="hidden sm:block">
          <SocialLinks />
        </div>
        <div className="flex justify-between items-center gap-10">
          <Link href="/">Home</Link>
          <Link href="/trending">Trending</Link>
          <Link href="/about">About</Link>
        </div>

        <div>
          <p>Sign In</p>
        </div>
      </nav>

      <div className="flex justify-between gap-8 mt-5 mb-4 mx-10">
        <div className="basis-2/3 md:mt-3">
          <h1 className="font-bold text-3xl md:text-5xl">BLOG OF THE FUTURE</h1>
          <p className="mt-3 text-sm">
            Blog dedicated towards AI and generation and job animation
          </p>
        </div>
        <div className="basis-full relative w-auto h32 bg-wh-500">
          <Image
            src={ad1}
            alt="Advert-1"
            fill
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1060px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </div>
      <hr className="border-1 mx-10" />
    </header>
  );
}
