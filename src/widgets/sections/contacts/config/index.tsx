import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

export const contacts = [
  {
    id: 0,
    title: (
      <div className="flex items-center gap-5">
        Email{" "}
        <span>
          <BiLogoGmail />
        </span>
      </div>
    ),
    text: "2003valuyga2003@gmail.com",
  },
  {
    id: 1,
    title: (
      <div className="flex items-center gap-5">
        Telegram{" "}
        <span>
          <FaTelegram />
        </span>
      </div>
    ),
    linkText: "https://t.me/whyME_3",
  },
  {
    id: 2,
    title: (
      <div className="flex items-center gap-5">
        LinkedIn{" "}
        <span>
          <FaLinkedin />
        </span>
      </div>
    ),
    linkText: "https://www.linkedin.com/in/vladislav-valuga-546327231/",
  },
  {
    id: 3,
    title: (
      <div className="flex items-center gap-5">
        GitHub{" "}
        <span>
          <FaGithub />
        </span>
      </div>
    ),
    linkText: "https://github.com/TeDdi-pixel",
  },
];
