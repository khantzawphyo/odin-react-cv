import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-neutral-900 px-6 py-20 text-neutral-300 after:absolute after:bottom-0 after:left-0 after:h-2.5 after:w-full after:bg-linear-to-r after:from-amber-500 after:via-red-500 after:to-fuchsia-600 sm:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-end gap-8 sm:grid-cols-2">
        <div className="text-center sm:text-left">
          <h3 className="font-display mb-2 text-lg font-bold text-white">
            CVBuilder{" "}
            <span className="text-sm font-sans font-light">
              &mdash; A Learning Project
            </span>
          </h3>
          <p className="">
            Built with ❤️ by{" "}
            <span className="relative cursor-pointer font-medium text-neutral-300 transition after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-amber-500 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:text-white hover:after:origin-bottom-left hover:after:scale-x-100">
              Khant Zaw Phyo
            </span>
          </p>
          <p className="mt-1 text-sm text-neutral-500">
            © {currentYear} All rights reserved.
          </p>
        </div>

        <div className="text-center sm:text-right">
          <h3 className="mb-3 text-sm font-semibold tracking-wider uppercase">
            Get in touch
          </h3>

          <div className="flex justify-center gap-6 sm:justify-end">
            <a
              href="https://facebook.com/khantzawphy0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="cursor-pointer transition hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faFacebook} size="xl" />
            </a>
            <a
              href="https://instagram.com/wills_365"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="cursor-pointer transition hover:text-pink-500"
            >
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
            <a
              href="https://t.me/khantzawphyo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="cursor-pointer transition hover:text-sky-400"
            >
              <FontAwesomeIcon icon={faTelegram} size="xl" />
            </a>
            <a
              href="https://github.com/khantzawphyo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="cursor-pointer transition hover:text-white"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
