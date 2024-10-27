import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

export const contacts = [
  {
    id: 0,
    title: "Phone",
    text: "+38(097)159-97-90",
  },
  {
    id: 1,
    title: "Email",
    text: "2003valuyga2003@gmail.com",
  },
  {
    id: 2,
    title: (
      <div className="flex items-center gap-5">
        Telegram{" "}
        <span>
          <FaTelegram />
        </span>
      </div>
    ),
    link: "https://t.me/whyME_3",
    linkText: "https://t.me/whyME_3",
  },
  {
    id: 3,
    title: (
      <div className="flex items-center gap-5">
        LinkedIn{" "}
        <span>
          <FaLinkedin />
        </span>
      </div>
    ),
    link: "https://www.linkedin.com/in/vladislav-valiuha-546327231/",
    linkText: "https://www.linkedin.com/in/vladislav-valiuha-546327231/",
  },
  {
    id: 4,
    title: (
      <div className="flex items-center gap-5">
        GitHub{" "}
        <span>
          <FaGithub />
        </span>
      </div>
    ),
    link: "https://github.com/TeDdi-pixel",
    linkText: "https://github.com/TeDdi-pixel",
  },
];
