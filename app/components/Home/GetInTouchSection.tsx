import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import usePortfolioDataStore from "~/data/zustand";

function GetInTouchSection() {
  const { email, linkedIn_account } = usePortfolioDataStore(state => state.user);

  return (
    <div className="min-h-80 flex flex-col gap-4 items-center justify-center">
      <div className="flex flex-col gap-2 items-center">
        <p className="relative w-fit text-h2 font-accent font-bold border-b-4 border-accent-2 px-1">
          Get In Touch
        </p>
        <p className="text-paragraph text-description">Want to chat with me</p>
      </div>
      <div className="flex items-center justify-center gap-1 text-h2">
        <p>Just</p>
        <a href={`mailto:${email}`}>
          <IoMdMail className="text-accent-2" />
        </a>
        <p>me or dm me on</p>
        <a href={linkedIn_account}>
          {" "}
          <FaLinkedin className="text-accent-2" />
        </a>
      </div>
    </div>
  );
}

export default GetInTouchSection;
