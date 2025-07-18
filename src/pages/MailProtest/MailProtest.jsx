import React, { useState, useEffect } from "react";
import Papa from "papaparse";

function MailProtest({ csvUrl }) {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    fetch(csvUrl)
      .then((res) => res.text())
      .then((text) => {
        Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => setCompanies(result.data),
        });
      });
  }, [csvUrl]);

  const handleSendMail = () => {
    if (!selectedCompany || !userName) return;

    const subject = encodeURIComponent(selectedCompany.Subject || "");
    const body = encodeURIComponent(
      `${selectedCompany.Mailbody || ""}\n\nRegards,\n${userName}`
    );
    const email = selectedCompany["Contact Email"];

    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="min-h-screen text-white font-mono px-6 py-16 ">
      <div className="max-w-3xl mx-auto space-y-5 relative">
        <h1 className="text-4xl font-bold text-center font-serif text-[#5C6BC0]">
          Mail Protest for Palestine 🍉
        </h1>

        <p className="text-center text-gray-400 text-sm">
          Speak up with a single click. Choose a company, and send a message of protest.
        </p>

        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center filter blur-sm scale-105"
            style={{
              backgroundImage: `url('https://www.transcend.org/tms/wp-content/uploads/2024/08/gaza-israel-genocide-palestine-30.jpg')`,
            }}
          ></div>

          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <div className="relative z-10 p-6 md:p-8 backdrop-blur-xs border border-white/10 rounded-xl space-y-6">
            <div>
              <label className="block mb-1 text-sm text-[#90A4AE]">Your Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg border border-white/10 text-white bg-white/10 focus:outline-none focus:ring focus:border-[#5C6BC0]"
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-[#90A4AE]">Select Company</label>
            <select
              className="w-full p-3 rounded-lg border border-white/10 text-white bg-white/10 focus:outline-none focus:ring focus:border-[#5C6BC0]"
              onChange={(e) =>
                setSelectedCompany(
                  companies.find((c) => c["Company Name"] === e.target.value)
                )
              }
              value={selectedCompany?.["Company Name"] || ""}
            >
              <option value="" disabled hidden>
                Choose a company
              </option>
              {companies.map((company, idx) => (
                <option
                  key={idx}
                  value={company["Company Name"]}
                  className="bg-[#5C6BC0] text-white"
                >
                  {company["Company Name"]}
                </option>
              ))}
            </select>
            </div>

            <button
              disabled={!userName || !selectedCompany}
              onClick={handleSendMail}
              className="w-full bg-[#5C6BC0] hover:bg-[#3949AB] transition-colors duration-300 text-white font-semibold py-3 rounded-lg disabled:cursor-not-allowed shadow-md"
            >
              Send Protest Email
            </button>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 italic max-w-xl mx-auto">
          We’re currently focusing on companies complicit in the ongoing genocide i.e.
          particularly those supplying arms or technology used against civilians.
        </div>
      </div>
    </div>
  );
}

export default MailProtest;