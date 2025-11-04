import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function GetInTouchSection() {
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
        <a href="mailto:bipinkoirala2061@gmail.com">
          <IoMdMail className="text-accent-2" />
        </a>
        <p>me or dm me on</p>
        <a href="https://www.linkedin.com/in/bipin-koirala-6b616636a/">
          {" "}
          <FaLinkedin className="text-accent-2" />
        </a>
      </div>
    </div>
  );
}

export default GetInTouchSection;
