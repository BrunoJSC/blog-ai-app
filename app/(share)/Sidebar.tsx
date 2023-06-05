import Image from "next/image";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";

import ad2 from "/public/assets/ad-2.png";
import AboutProfile from "/public/assets/about-profile.jpg";

export default function Sidebar() {
  return (
    <section>
      <h4 className="bg-wh-500 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        Subscribe and Follow
      </h4>
      <div className="my-5 mx-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />

      <Image
        src={ad2}
        alt="Advert-2"
        width={500}
        height={1000}
        className="hidden md:block my-8 w-full"
      />
      <h4 className="bg-wh-500 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        About the Blog
      </h4>
      <div className="flex justify-center">
        <Image
          src={AboutProfile}
          alt="Advert-2"
          className="object-cover w-[500px] h-[250px]"
        />
      </div>
      <h4 className="py-3 px-5 text-wh-500 font-bold text-center">
        Geoffrey Epstein
      </h4>
      <p className="text-wh-500 text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        nemo at, omnis nihil, dolore.
      </p>
    </section>
  );
}
