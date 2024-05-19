import type { NextComponentType } from "next";

import {
  BsSpotify,
  MdEmail,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "../Misc/Icons.collection";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";

import { Icon } from "../Misc/Icon.component";

const Contact: NextComponentType = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <p className="text-3xl font-bold text-blue-500">Get in touch</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">

        <Icon
          icon={<FaLinkedin />}
          url="https://www.linkedin.com/in/mohitd137/"
        />

        <Icon
          icon={<FaSquareXTwitter />}
          url="https://x.com/mohitd137"
        />

        <Icon icon={<MdEmail />} url="mailto:mohitd2288@gmail.com" />

        <Icon
          icon={<FaSquareInstagram />}
          url="https://www.instagram.com/_moh1t.do_/"
        />
      </div>
    </div>
  );
};

export default Contact;
