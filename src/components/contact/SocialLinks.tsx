import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const socialMedia = [
  {
    icon: <FaInstagram className="text-xl" />,
    href: "https://www.instagram.com/coffeeconnect_br",
    label: "Instagram",
  },
  {
    icon: <FaFacebookF className="text-xl" />,
    href: "https://www.facebook.com/coffeeconnect_br",
    label: "Facebook",
  },
  {
    icon: <FaTwitter className="text-xl" />,
    href: "https://twitter.com/coffeeconnect_br",
    label: "Twitter",
  },
  {
    icon: <FaEnvelope className="text-xl" />,
    href: "mailto:contato@coffeeconnect.com",
    label: "Email",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-6">
      {socialMedia.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target={social.label !== "Email" ? "_blank" : undefined}
          rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
          aria-label={social.label}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d9b08c] text-[#8b5e3c] transition hover:scale-110 hover:bg-white"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
