import React, { useState } from "react";

const events = [
  { year: "1917", title: "Balfour Declaration", description: "British government expresses support for a 'national home for the Jewish people' in Palestine." },
  { year: "1947", title: "UN Partition Plan", description: "UN proposes to partition Palestine into separate Jewish and Arab states." },
  { year: "1948", title: "Nakba / Israeli Independence", description: "State of Israel is declared; over 700,000 Palestinians are displaced." },
  { year: "1967", title: "Six-Day War", description: "Israel occupies the West Bank, Gaza Strip, East Jerusalem, Sinai, and Golan Heights." },
  { year: "1987", title: "First Intifada", description: "Palestinian uprising against Israeli occupation begins." },
  { year: "1993", title: "Oslo Accords", description: "Peace talks begin; creation of the Palestinian Authority." },
  { year: "2000", title: "Second Intifada", description: "Second major Palestinian uprising begins." },
  { year: "2006", title: "Hamas Wins Elections", description: "Hamas wins Palestinian legislative elections, leading to internal division." },
  { year: "2012", title: "UN Recognizes Palestine", description: "Palestine gains non-member observer state status at the UN." },
  { year: "2021", title: "Sheikh Jarrah & Gaza Conflict", description: "Tensions in Jerusalem lead to another major conflict between Israel and Hamas." },
  { year: "2023", title: "Israeli Judicial Crisis & West Bank Tensions", description: "Rising violence and political instability in both Israel and Palestine." },
  { year: "2024", title: "Continued Conflict and International Debate", description: "Ongoing Gaza conflict, increasing humanitarian crisis, and global calls for ceasefire." },
];

const getDecades = (events) => {
  const decades = [...new Set(events.map(e => `${e.year.slice(0, 3)}0s`))];
  return ["All", ...decades];
};

const PalestineTimeline = () => {
  const [selectedDecade, setSelectedDecade] = useState("All");

  const filteredEvents = selectedDecade === "All"
    ? events
    : events.filter(event => event.year.startsWith(selectedDecade.slice(0, 3)));

  return (
    <div className="min-h-screen text-white font-sans px-4">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-[#5C6BC0] font-serif">Key Events in Palestinian History</h1>
        <p className="text-gray-400 mt-2 font-mono">From 1917 to Present</p>
      </header>

      <div className="max-w-md mx-auto font-mono mb-10">
        <select
          onChange={(e) => setSelectedDecade(e.target.value)}
          value={selectedDecade}
          className="w-full p-2 rounded border border-[#90A4AE] bg-[#2A2A2A] text-white focus:outline-none focus:ring-2 focus:ring-[#5C6BC0]">
          {getDecades(events).map((decade) => (
            <option key={decade} value={decade}>{decade}</option>
          ))}
        </select>
      </div>

      <section className="relative max-w-5xl mx-auto">
        <div className="border-l-4 border-[#5C6BC0] ml-4">
          {filteredEvents.map((event, index) => (
            <div key={index} className="mb-10 ml-6 relative">
              <span className="flex absolute -left-5 top-1 font-serif justify-center items-center w-8 h-8 bg-[#5C6BC0] rounded-full ring-4 ring-[#1A1A1A]">
                <span className="text-sm font-bold text-white">{event.year}</span>
              </span>

              <div className="bg-[#2A2A2A] border border-[#90A4AE] rounded-lg p-4 shadow">
                <h3 className="text-lg font-serif font-semibold text-[#5C6BC0]">{event.title}</h3>
                <p className="text-gray-300 font-mono mt-2">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PalestineTimeline;