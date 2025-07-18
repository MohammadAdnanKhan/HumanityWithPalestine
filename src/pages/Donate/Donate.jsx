import React from "react";

function Donate() {
  const donationLinks = [
    {
      name: "Muslim Relief UK",
      url: "https://muslimrelief.org.uk/appeals/palestine-emergency/",
      description:
        "UK-based charity providing urgent humanitarian assistance and medical relief to Gaza.",
      image: "https://www.muslimrelief.org.uk/wp-content/uploads/2021/12/og.jpg",
    },
    {
      name: "Medical Aid for Palestinians (MAP)",
      url: "https://www.map.org.uk/",
      description:
        "Delivering vital medical services and health care in Palestinian territories since 1984.",
      image: "https://pbs.twimg.com/profile_images/1920159450729500672/ciaL12Bp_400x400.jpg",
    },
    {
      name: "Humanity Increased",
      url: "https://humanityincreased.org/appeals/gaza-emergency/",
      description:
        "Grassroots organization mobilizing emergency aid for families affected in Gaza.",
      image: "https://www.feelingblessed.org/images/org/logo/2024-08-08-22-13-38-7fYfZW.webp",
    },
    {
      name: "Humanity First",
      url: "https://donate.humanityfirst.org/",
      description:
        "Global relief charity active in over 50 countries, offering food, shelter, and emergency support.",
      image: "https://humanityfirstusa.org/wp-content/uploads/2024/03/Humanity-First-Blue-Logo.jpg",
    },
    {
      name: "Palestine Children’s Relief Fund (PCRF)",
      url: "https://pcrf1.app.neoncrm.com/forms/gaza-recovery",
      description:
        "Leading nonprofit providing free medical care to injured and sick Palestinian children.",
      image: "https://www.pcrf.net/cached_uploads/full/og-default.jpg",
    },
  ];

  return (
    <div className="min-h-screen text-white px-6 py-12 font-mono">
      <div className="max-w-7xl mx-auto space-y-16">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#5C6BC0] font-serif">
            Donate for Palestine 🍉
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-[#B0BEC5]">
            Support urgent aid efforts for Gaza. Your donations fund food,
            medical care, and hope for families in crisis.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {donationLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group rounded-xl overflow-hidden shadow-lg border border-[#5C6BC0]/40 hover:scale-[1.02] transition-transform duration-300 min-h-[250px]"
              style={{
                backgroundImage: `url(${link.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm group-hover:bg-black/60 transition duration-300" />

              <div className="relative p-6 z-10 h-full flex flex-col justify-end">
                <h2 className="text-md font-serif font-bold text-white group-hover:text-[#5C6BC0] bg-black/40 px-3 py-1 rounded-md inline-block backdrop-blur-sm transition-all duration-300 group-hover:bg-black/80">
                  {link.name}
                </h2>

                <p className="text-sm text-[#CFD8DC] mt-2">
                  {link.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center text-[#CFD8DC] max-w-2xl mx-auto text-sm mt-10">
          Every watermelon 🍉 is a symbol of resistance. Every penny is a step
          toward justice. Your support will save lives in sha Allah.
        </div>

        <p className="text-center text-xs italic text-[#90A4AE] max-w-xl mx-auto mt-4">
          Kindly confirm the authenticity and current status of donation pages
          before contributing. Transparency is must.
        </p>

      </div>
    </div>
  );
}

export default Donate;