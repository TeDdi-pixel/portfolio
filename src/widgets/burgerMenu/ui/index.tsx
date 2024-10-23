import useWidth from "../../../hooks/useWidth";
import { links } from "../../header/config";

type Props = {
  open: boolean;
  setOpen: (status: boolean) => void;
};

export const BurgerMenu = ({ open, setOpen }: Props) => {
  const { active } = useWidth(767);
  return (
    <>
      <div
        id="nav-icon2"
        className={`${open ? "open" : ""} ${
          active ? "right-[15px]" : "right-[30px]"
        }`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`${
          open ? "fixed top-0 left-0 h-[100vh] w-full z-30 opacity-1" : "opacity-0 fixed -z-30"
        }`}
      >
        <ul>
          {links.map((link) => (
            <li key={link.text} className="text-accent">
              {link.text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
