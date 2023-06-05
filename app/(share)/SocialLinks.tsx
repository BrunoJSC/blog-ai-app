import Twitter from "/public/assets/social_twitter.png";
import Facebook from "/public/assets/social_facebook.png";
import Instagram from "/public/assets/social_instagram.png";
import Google from "/public/assets/social_google.png";
import Discord from "/public/assets/social_discord.png";

import Image from "next/image";

interface Props {
  isDark?: boolean;
}

export default function SocialLinks({ isDark = false }: Props) {
  return (
    <div className="flex justify-between items-center gap-7">
      <a href="https://twitter.com/" target="_blank" rel="noreferrer">
        <Image
          src={Twitter}
          alt="Twitter"
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          width={20}
          height={20}
        />
      </a>

      <a href="https://facebook.com/" target="_blank" rel="noreferrer">
        <Image
          src={Facebook}
          alt="Facebook"
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          width={20}
          height={20}
        />
      </a>

      <a href="https://instagram.com/" target="_blank" rel="noreferrer">
        <Image
          src={Instagram}
          alt="Instagram"
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          width={20}
          height={20}
        />
      </a>

      <a href="https://google.com/" target="_blank" rel="noreferrer">
        <Image
          src={Google}
          alt="Google"
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          width={20}
          height={20}
        />
      </a>

      <a href="https://discord.com/" target="_blank" rel="noreferrer">
        <Image
          src={Discord}
          alt="Discord"
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          width={20}
          height={20}
        />
      </a>
    </div>
  );
}
