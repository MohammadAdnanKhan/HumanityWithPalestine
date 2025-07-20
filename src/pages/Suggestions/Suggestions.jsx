import { useState } from 'react';
import { SERVICES } from './data/services';

// const BACKEND_BASE_URL = 'https://hackforpalestine.onrender.com';
const BACKEND_BASE_URL = 'https://hackforpalestineapi.onrender.com/';

function Suggestions() {
  const [selectedService, setSelectedService] = useState(null);
  const [domain, setDomain] = useState('');
  const [alternatives, setAlternatives] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("selectedService", selectedService);
    try {
      const res = await fetch(`${BACKEND_BASE_URL}/service`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: selectedService.Service_Name,
          type: selectedService.Service_Type,
          domain,
        }),
      });
      const data = await res.json();
      setAlternatives([...data]);
    } catch (err) {
      console.error('Error fetching service alternatives:', err);
      setAlternatives(null);
    }
  };

  return (
    <div className="min-h-screen px-4 md:px-10 py-10 flex flex-col lg:flex-row gap-10 justify-center bg-[#101827]">
      {/* Left: Form */}
      <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-xl h-fit text-white">
        <h1 className="text-2xl md:text-3xl font-serif font-bold text-blue-200 mb-2">
          Ethical Service Suggestions
        </h1>
        <p className="text-sm text-gray-300 mb-6">
          Get alternatives to unethical products or services based on your domain.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Autocomplete Input */}
          <div>
            <label className="block text-sm font-medium text-blue-100 mb-1">
              Product/Service to Divest From
            </label>
            <select
              value={
                selectedService
                  ? SERVICES.findIndex(
                    s =>
                      s.Service_Name === selectedService.Service_Name &&
                      s.Service_Type === selectedService.Service_Type
                  ) : ""
              }
              onChange={(e) => setSelectedService(SERVICES[Number(e.target.value)])}
              required
              className="w-full bg-white text-sm font-mono text-gray-800 px-3 py-2 rounded-md border border-gray-300"
            >
              <option value="">-- Select Service --</option>
              {SERVICES.map((s, idx) => (
                <option key={idx} value={idx}>
                  {s.Service_Name} ({s.Service_Type})
                </option>
              ))}
            </select>
          </div>

          {/* Display Features */}
          {(selectedService?.Top_B_Feature_1 || selectedService?.Top_B_Feature_2) && (
            <div className="bg-zinc-800/60 border border-zinc-600 p-4 rounded-lg text-sm text-gray-200">
              <h3 className="font-bold mb-2">
                Features of <span className="text-blue-300">{selectedService.Service_Name}</span>
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {selectedService.Top_B_Feature_1 && <li>{selectedService.Top_B_Feature_1}</li>}
                {selectedService.Top_B_Feature_2 && <li>{selectedService.Top_B_Feature_2}</li>}
              </ul>
            </div>
          )}

          {/* Domain Dropdown */}
          <div>
            <label className="block text-sm font-medium text-blue-100 mb-1">
              Your Organization's Domain
            </label>
            <select
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              required
              className="w-full bg-white text-sm font-mono text-gray-800 px-3 py-2 rounded-md border border-gray-300"
            >
              <option value="">-- Select Domain --</option>
              <option value="education">Education</option>
              <option value="health">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="tech">Technology</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={!selectedService || !domain}
            className={`w-full bg-[#5C6BC0] hover:bg-[#4e5db3] text-white font-semibold py-2 px-4 rounded-md transition duration-200 ${(!selectedService || !domain)
              ? 'cursor-not-allowed'
              : 'cursor-pointer'
              }`}
          >
            Get Suggestions
          </button>
        </form>
      </div>

      {/* Right: Suggestions */}
      <div className="w-full max-w-xl">
        {alternatives?.length === 0 && (
          <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl text-center text-gray-300">
            No ethical alternatives found.
          </div>
        )}
        {alternatives?.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-blue-200 font-serif mb-2">
              Ethical Alternatives
            </h2>
            {alternatives.map((alt, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 backdrop-blur-xl p-4 rounded-xl text-sm text-white space-y-2 shadow-md"
              >
                <p className="text-base font-mono font-semibold text-blue-300">
                  {alt.Service_Name}
                  {alt.Score <= 10 && (
                    <span className="ml-2 px-2 py-0.5 text-xs rounded bg-green-500/20 text-green-300">
                      ({alt.Score}) Ethical
                    </span>
                  )}
                  {alt.Score > 10 && alt.Score <= 20 && (
                    <span className="ml-2 px-2 py-0.5 text-xs rounded bg-yellow-500/20 text-yellow-300">
                      ({alt.Score}) Caution
                    </span>
                  )}
                  {alt.Score > 20 && (
                    <span className="ml-2 px-2 py-0.5 text-xs rounded bg-red-500/20 text-red-400">
                      ({alt.Score}) Avoid
                    </span>
                  )}
                </p>
                <p className="text-gray-300 font-mono">{alt.Description}</p>
                <p className="text-blue-200 text-xs">
                  Avg. Monthly Cost: ${alt.average_monthly_running_cost}
                </p>
                {alt.Feature_1 && <p className="text-gray-200">• {alt.Feature_1}</p>}
                {alt.Feature_2 && <p className="text-gray-200">• {alt.Feature_2}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Suggestions;
