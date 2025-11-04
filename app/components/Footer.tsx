import { FaCopyright } from "react-icons/fa6";

function Footer() {
  return (
    <div className="w-full py-2 flex gap-1 justify-start items-center text-description ">
      <FaCopyright className="text-accent-2"/>
      <p>2025 Bipin Koirala -- Portfolio</p>
    </div>
  );
}

export default Footer;
