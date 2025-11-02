import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function GetInTouchSection() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-col gap-2 items-center">
        <p className="relative w-fit text-h2 font-accent font-bold border-b-4 border-accent-2 px-1">
          Get In Touch
        </p>
        <p className="text-paragraph text-description">Want to chat with me</p>
      </div>
      <p>Just <IoMdMail /> me or dm me on <FaLinkedin /> </p>
    </div>
  );
}

export default GetInTouchSection;
