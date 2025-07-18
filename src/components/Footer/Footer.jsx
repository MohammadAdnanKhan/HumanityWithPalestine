import React from "react";
import logo from "../../assets/logo1.png";
import { FaInstagram, FaGlobe, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-br cursor-crosshair font-mono from-black via-[#0F1115] to-[#1A1C20] text-gray-300 px-6 pt-16 pb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 items-start">

        <div className="flex justify-center md:justify-start">
          <img
            src={logo}
            alt="Palestine Symbol"
            className="w-40 ml-10 animate-bounceSlow h-auto hover:drop-shadow-[0_0_12px_#5C6BC0] transition"
          />
        </div>

        <div className="space-y-4 text-sm">
          <h3 className="text-md font-semibold text-[#5C6BC0] font-serif">
            Humanity With Palestine 🍉
          </h3>
          <p className="leading-relaxed text-gray-400 text-sm">
            Started by students with a voice and a heart, Humanity With Palestine stands to amplify truth, share hope, and remind the world that silence in the face of injustice is not an option.
          </p>
          <div className="bg-[#5C6BC0]/10 border border-[#5C6BC0]/20 rounded-xl p-3 italic backdrop-blur-md mt-4 text-xs text-gray-300">
            “Where there is oppression there is resistance 🍉”
          </div>
        </div>

        <div>
          <h4 className="text-md font-semibold text-[#5C6BC0] font-serif mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", href: "/" },
              { label: "Boycott", href: "/boycott" },
              { label: "MailProtest", href: "/mailprotest" },
              { label: "Suggestions", href: "/suggestions" },
              { label: "Donate", href: "/donate" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-white hover:drop-shadow-[0_0_6px_#5C6BC0] transition duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 text-sm">
          <p className="leading-relaxed text-gray-400">
            This platform curates authentic relief efforts supporting Palestinian lives.
            We stand for dignity, justice, and awareness through digital action.
          </p>
          <div className="flex gap-4 mt-2 text-[#5C6BC0] text-lg">
            <a href="https://chat.whatsapp.com/JGgUSvZE6PrEuCd6ILR8Ks" className="hover:text-white hover:drop-shadow-[0_0_8px_#5C6BC0] transition"><FaWhatsapp /></a>
            <a href="https://www.instagram.com/humanitywith_palestine" className="hover:text-white hover:drop-shadow-[0_0_8px_#5C6BC0] transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="mt-14 border-t border-zinc-800 pt-6 text-center text-xs text-gray-500 tracking-wide">
        &copy; {new Date().getFullYear()} 🍉 Humanity With Palestine
        <br />
      </div>
    </footer>
  );
}

export default Footer;
