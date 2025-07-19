import React, { useState, useEffect } from "react";
import Papa from "papaparse";

function Education({ csvUrl }) {
  const [articles, setArticles] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!csvUrl) return;

    Papa.parse(csvUrl, {
      download: true,
      header: true,
      complete: (results) => setArticles(results.data),
      error: (err) => console.error("CSV Parse Error:", err),
    });
  }, [csvUrl]);

  return (
    <div className="min-h-screen font-mono text-[#D7CCC8] px-4 py-12 md:px-20 space-y-10">
      <h1 className="text-4xl md:text-5xl font-bold font-serif text-[#5C6BC0] mb-6">
        Education Page
      </h1>

      <p className="text-base leading-relaxed">
        So we know that there are many people who are unaware of what’s
        happening in Palestine and the reality behind the situation. Through
        this page, we aim to provide brief, accessible context about key events
        that have shaped this ongoing crisis.
      </p>

      <div className="flex overflow-x-auto space-x-4 p-6 snap-x snap-mandatory">
        {articles.map((article, idx) => (
        <div
          key={idx}
          onClick={() => setActive(article)}
          className="relative min-w-[90vw] md:min-w-[60vw] h-[60vw] sm:h-[40vw] md:h-[25vw] lg:h-[20vw] snap-start cursor-pointer rounded-2xl overflow-hidden shadow-lg group"
        >
        <img
          src={article.img}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-60 group-hover:scale-105 transition-transform duration-700"
        />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-xs" />
            <div className="relative z-10 p-4 md:p-6 space-y-2 md:space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                {article.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-300">Click to read more</p>
            </div>
          </div>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/70 p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white/5 text-white rounded-2xl border border-white/10 p-6 md:p-10 shadow-2xl space-y-6 overflow-y-auto max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${active.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(20px)",
                opacity: 0.15,
              }}
            />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">{active.title}</h2>
              <div
                className="prose prose-invert text-gray-200 text-sm md:text-base max-w-none"
                dangerouslySetInnerHTML={{ __html: active.description }}
              />
              <a
                href={active.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm font-semibold text-[#5C6BC0] underline hover:text-white transition-colors"
              >
                {active.textforlink}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* BOOK SECTION */}
      <h2 className="text-3xl tinos-bold text-[#5C6BC0] mt-20 mb-6">Recommended Reading</h2>

      {/* Book Components */}
      {[
        {
          title: "The Hundred Years' War on Palestine",
          url: "https://us.macmillan.com/books/9781627798556/thehundredyearswaronpalestine/",
          img: "https://m.media-amazon.com/images/I/71vo0-PuxHS._UF1000,1000_QL80_.jpg",
          desc: `Rashid Khalidi frames Zionism as a settler colonial project backed by imperial powers...`,
          reverse: false
        },
        {
          title: "The Ethnic Cleansing of Palestine",
          url: "https://www.simonandschuster.com/books/The-Ethnic-Cleansing-of-Palestine/Ilan-Pappe/9781851685554",
          img: "https://m.media-amazon.com/images/I/810yW7YkKIL.jpg",
          desc: `Ilan Pappé argues the 1948 Palestinian expulsion was a deliberate campaign of ethnic cleansing...`,
          reverse: true
        },
        {
          title: "A History of Zionism",
          url: "https://www.goodreads.com/en/book/show/173399.A_History_of_Zionism",
          img: "https://m.media-amazon.com/images/I/71e9V25bSPL._UF1000,1000_QL80_.jpg",
          desc: `Walter Laqueur offers a comprehensive account of Zionism’s evolution from Enlightenment-era Europe...`,
          reverse: false
        },
        {
          title: "The Question of Palestine",
          url: "https://www.goodreads.com/book/show/57546.The_Question_of_Palestine",
          img: "https://m.media-amazon.com/images/I/81oMX57M-GL.jpg",
          desc: `Edward Said critically analyzes Zionism and U.S. foreign policy...`,
          reverse: true
        }
      ].map((book, idx) => (
        <div
          key={idx}
          className={`flex flex-col ${
            book.reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-6 bg-[#2A2A2A] border border-[#90A4AE] p-6 rounded-lg shadow-lg mt-6`}
        >
          <img src={book.img} alt={book.title} className="w-48 rounded" />
          <div>
            <h3 className="text-xl text-[#5C6BC0] tinos-bold">
              <a href={book.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {book.title}
              </a>
            </h3>
            <p className="text-sm leading-relaxed mt-2">{book.desc}</p>
          </div>
        </div>
      ))}

      {/* VIDEO SECTION */}
      <h2 className="text-3xl tinos-bold text-[#5C6BC0] mt-20 mb-6">Educational Videos</h2>

      <div className="carousel w-full">
        {[
          {
            id: "video1",
            src: "https://www.youtube.com/embed/H7FML0wzJ6A",
            title: "Al-Nakba: The Palestinian Catastrophe"
          },
          {
            id: "video2",
            src: "https://www.youtube.com/embed/yBjMbe24Vu0",
            title: "Animated History of the Question of Palestine"
          },
          {
            id: "video3",
            src: "https://www.youtube.com/embed/HV9rLVLQcEM",
            title: "Zionism: Israel's Revolutionary Dream"
          },
          {
            id: "video4",
            src: "https://www.youtube.com/embed/wH8Ip1cvlRY",
            title: "Rashid Khalidi – Hundred Years' War on Palestine"
          }
        ].map((video, idx, arr) => (
          <div key={video.id} id={video.id} className="carousel-item relative w-full justify-center">
            <iframe
              className="w-full h-[450px] md:h-[600px] rounded-lg"
              src={video.src}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={`#${arr[(idx - 1 + arr.length) % arr.length].id}`} className="btn btn-circle">❮</a>
              <a href={`#${arr[(idx + 1) % arr.length].id}`} className="btn btn-circle">❯</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
