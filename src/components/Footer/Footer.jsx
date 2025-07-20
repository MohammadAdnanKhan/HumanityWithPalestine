import { useState, useEffect } from "react";
import logo from "../../assets/logo1.png";
import { FaInstagram, FaGlobe, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import BACKEND_URL from "../../pages/constants";

function Footer() {
  const [visitors, setVisitors] = useState(null);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/visits`);
        const data = await res.json();
        // console.log(data);
        if (data.total_visits) {
          setVisitors(data.total_visits);
        }
      } catch (error) {
        console.error("Err occurred while setting up visitors", error);
      }
    };

    fetchVisitors();
  }, []);

  return (
    <footer className="bg-gradient-to-br cursor-crosshair font-mono from-black via-[#0F1115] to-[#1A1C20] text-gray-300 px-6 pt-16 pb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 items-start">

        <div className="flex flex-col justify-center md:justify-start">
          <img
            src={logo}
            alt="Palestine Symbol"
            title="Free Palestine!"
            className="w-40 ml-10 animate-bounceSlow h-auto hover:drop-shadow-[0_0_12px_#5C6BC0] transition"
          />
          {visitors !== null && (
            <div className="mx-auto mt-6 w-fit rounded-xl border-2 border-indigo-300 bg-indigo-800 px-6 py-3 text-center text-slate-200 shadow-md">
              <span className="mr-2 text-lg font-medium tracking-wide">Visitors:</span>
              <span className="inline-block rounded bg-indigo-900 px-3 py-1 text-slate-100 text-sm font-semibold">
                {visitors}
              </span>
            </div>
          )}

        </div>

        <div className="space-y-4 text-sm">
          <h3 className="text-md font-semibold text-[#5C6BC0] font-serif">
            Humanity With Palestine 🍉
          </h3>
          <p className="leading-relaxed text-[#90A4AE] text-sm">
            Started by students with a voice and a heart, Humanity With Palestine stands to amplify truth, share hope, and remind the world that silence in the face of injustice is not an option.
          </p>
          <div className="bg-[#5C6BC0]/10 border border-[#5C6BC0]/20 rounded-xl p-3 italic backdrop-blur-md mt-4 text-xs text-[#90A4AE]">
            “Where there is oppression there is resistance 🍉”
          </div>
        </div>

        <div>
          <h4 className="text-md font-semibold text-[#5C6BC0] font-serif mb-3">Explore</h4>
          <ul className="space-y-2 text-[#90A4AE] text-sm">
            {[
              { label: "Home", to: "/" },
              { label: "Boycott", to: "/boycott" },
              { label: "MailProtest", to: "/mailprotest" },
              { label: "Suggestions", to: "/suggestions" },
              { label: "Donate", to: "/donate" },
              { label: "About", to: "/about" },
              { label: "Contact", to: "/feedback" },
            ].map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  className="hover:text-white hover:drop-shadow-[0_0_6px_#5C6BC0] transition duration-200"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 text-sm">
          <p className="leading-relaxed text-[#90A4AE]">
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
