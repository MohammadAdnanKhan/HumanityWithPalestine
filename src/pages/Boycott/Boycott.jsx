import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { capitalise } from './utils';

const Boycott = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!query.trim()) {
      setError("Please enter a brand or product name.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("https://hackforpalestineapi.onrender.com/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: query.trim() }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error("Fetch error:", err.message);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white px-4 py-10">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#5C6BC0] mb-6">
          Don't buy Apartheid!
        </h1>

        <p className="text-[#90A4AE] font-mono mb-4 text-base sm:text-lg">
          Find out if a company follow unethical practices and what you can use instead.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-2"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter a product or brand..."
            className="w-full font-mono sm:w-80 px-4 py-2 rounded-md border border-[#90A4AE] bg-[#2A2A2A] text-white focus:outline-none focus:ring-2 focus:ring-[#5C6BC0]"
            required
          />
          <button
            type="submit"
            className="bg-[#5C6BC0] hover:bg-[#7986CB] font-mono text-white px-6 py-2 rounded-md font-medium transition"
          >
            {loading ? "Checking..." : "Check"}
          </button>
        </form>

        <p className="text-[#D7CCC8] text-xs italic mb-6">
          Search for a boycotted company, the reason for boycott, and safer alternatives<br/>Kindly wait, since our API is deployed on free tier, it may take a while.
        </p>

        {error && <div className="text-red-400 font-medium mt-4">{error}</div>}

        {result && (
          <div className="mt-8 cursor-crosshair">
            {"result" in result ? (
              <div className="bg-[#2A2A2A] border border-[#90A4AE] rounded-lg p-6 shadow-lg">
                <p className="text-[#D7CCC8] text-lg">{result.result}</p>
              </div>
            ) : (
              <div
                className="relative rounded-lg overflow-hidden border border-[#90A4AE] shadow-lg"
                style={{
                  backgroundImage: `url('https://www.amnesty.org/en/wp-content/uploads/2024/12/GettyImages-2182380031-scaled-e1733253256526-1468x710.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm" />

                <div className="relative z-10 p-6 space-y-4 text-left">
                  <div className="flex items-center gap-4">
                    {result.data.logo_url && (
                      <img
                        src={result.data.logo_url}
                        alt={result.data.name}
                        className="h-12 w-12 object-contain bg-white rounded p-1"
                      />
                    )}
                    <h2 className="text-2xl font-serif font-semibold text-[#5C6BC0]">
                      {result.data.name}
                    </h2>
                  </div>

                  <p className="text-sm font-mono text-[#90A4AE]">
                    <strong>Status:</strong>{" "}
                    <span className="capitalize text-red-400">
                      {result.data.status}
                    </span>
                  </p>

                  {result.data.description && (
                    <div className="prose font-mono prose-invert text-sm text-[#D7CCC8] max-w-none">
                      <ReactMarkdown>
                        {result.data.description
                          .replace(/\[\^.*?\]:*/g, "") 
                          .replace(/(https?:\/\/[^\s]+)/g, "") 
                        }
                      </ReactMarkdown>
                      <a
                        href={result.data.description.slice(
                          result.data.description.search(/(https?:\/\/[^\s]+)/g)
                        )}
                        className="text-indigo-300 font-mono bg-slate-700 p-2 inline-block mt-2 rounded hover:bg-slate-700/70 transition-all duration-200"
                      >
                        Reference
                      </a>
                    </div>
                  )}

                  {result.data.alternatives_text && (
                    <div>
                      <h3 className="text-[#90A4AE] font-serif font-medium mb-1">
                        Alternatives:
                      </h3>
                      <ul className="list-disc list-inside font-mono text-sm text-[#D7CCC8]">
                        {result.data.alternatives_text
                          .split("\n")
                          .map((alt, index) => (
                            <li key={index}>{alt}</li>
                          ))}
                      </ul>
                    </div>
                  )}

                  <div className="text-xs text-[#90A4AE] font-mono">
                    {result.data.categories && `Category: ${capitalise(result.data.categories)} | `}
                    {result.data.countries && `Countries: ${capitalise(result.data.countries)}`}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {!result && !loading && (
        <div
          className="mt-12 lg:ml-20 lg:mr-20 md:ml-10 relative rounded-2xl overflow-hidden border border-[#90A4AE] shadow-lg"
          style={{
            backgroundImage: `url('https://www.transcend.org/tms/wp-content/uploads/2024/08/gaza-israel-genocide-palestine-30.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className=" absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm" />

          <div className="relative cursor-crosshair z-10 p-6 space-y-6 text-left">
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#5C6BC0] mb-2">Why Boycott?</h2>
              <p className="text-[#D7CCC8] font-mono text-sm sm:text-base leading-relaxed">
                Some companies fund or support systems that contribute to the suffering of innocent civilians including children, old people and women. Choose not to support these companies till they stop their unethical practices in the genocide.
              </p>
              <p className="text-[#D7CCC8] font-mono text-sm sm:text-base leading-relaxed mt-2">
                This tool helps you make informed choices by identifying brands linked to injustice using authentic references and offering more ethical alternatives, so your money doesn't fund the genocide.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold font-serif text-[#90A4AE] mb-2">Try Searching:</h3>
              <ul className="grid font-mono grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2 text-[#D7CCC8] text-sm list-none">
                {["Starbucks", "Google", "Microsoft", "Intel", "Loreal", "Amazon"].map((brand, idx) => (
                  <li key={idx} className="before:content-['🔍'] before:mr-2">{brand}</li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1A1A1A] font-mono border border-[#5C6BC0] rounded-xl p-4 text-sm text-[#90A4AE] italic">
              
              This project is part of a global movement to support justice and human rights through conscious consumer action.
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Boycott;
