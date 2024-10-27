import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

export const contacts = [
  {
    id: 0,
    title: "Phone",
    text: (
      <>
        <span className="text-texture">+</span>38(097)159-97-90
      </>
    ),
  },
  {
    id: 1,
    title: "Email",
    text: (
      <>
        2003valuyga2003@gmail<span className="text-texture">.</span>com
      </>
    ),
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
    text: (
      <a href="https://t.me/whyME_3" className="underline decoration-texture">
        https://t.me/whyME_3
      </a>
    ),
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
    text: (
      <a
        href="https://www.linkedin.com/in/vladislav-valiuha-546327231/"
        className="underline decoration-texture"
      >
        https://www.linkedin.com/in/vladislav-valiuha-546327231/
      </a>
    ),
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
    text: (
      <a
        href="https://github.com/TeDdi-pixel"
        className="underline decoration-texture"
      >
        https://github.com/TeDdi-pixel
      </a>
    ),
  },
];
