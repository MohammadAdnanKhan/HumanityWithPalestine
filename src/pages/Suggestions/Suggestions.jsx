import { useState } from 'react';
import { SERVICES } from './data/services';
import BACKEND_URL from '../constants';

function Suggestions() {
  const [selectedService, setSelectedService] = useState(null);
  const [domain, setDomain] = useState('');
  const [alternatives, setAlternatives] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BACKEND_URL}/service`, {
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
    <div className="min-h-screen font-mono px-4 py-12 text-white">
      <div className="max-w-7xl mx-auto space-y-12">

        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#5C6BC0] mb-3">
            Ethical Service Suggestions
          </h1>
          <p className="text-[#90A4AE] font-mono text-base md:text-lg">
            Discover ethical alternatives tailored to your organization’s needs and domain.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/2 bg-[#1A1A1A] border border-[#37474F] rounded-2xl p-6 shadow-2xl transition hover:shadow-[#5C6BC0]/30">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block text-sm font-medium text-[#90A4AE] mb-1 font-mono">
                  Product/Service to Divest From
                </label>
                <select
                  value={
                    selectedService
                      ? SERVICES.findIndex(
                        (s) =>
                          s.Service_Name === selectedService.Service_Name &&
                          s.Service_Type === selectedService.Service_Type
                      )
                      : ''
                  }
                  onChange={(e) => setSelectedService(SERVICES[Number(e.target.value)])}
                  required
                  className="w-full bg-[#2A2A2A] text-white font-mono px-4 py-2 rounded-md border border-[#546E7A]"
                >
                  <option value="">-- Select Service --</option>
                  {SERVICES.map((s, idx) => (
                    <option key={idx} value={idx}>
                      {s.Service_Name} ({s.Service_Type})
                    </option>
                  ))}
                </select>
              </div>

              {(selectedService?.Top_B_Feature_1 || selectedService?.Top_B_Feature_2) && (
                <div className="bg-[#5C6BC0]/10 border border-[#546E7A] p-4 rounded-lg text-sm text-[#ECEFF1] font-mono">
                  <h3 className="font-semibold text-[#7986CB] mb-2">
                    Features of {selectedService.Service_Name}
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedService.Top_B_Feature_1 && <li>{selectedService.Top_B_Feature_1}</li>}
                    {selectedService.Top_B_Feature_2 && <li>{selectedService.Top_B_Feature_2}</li>}
                  </ul>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-[#90A4AE] mb-1 font-mono">
                  Your Organization's Domain
                </label>
                <select
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  required
                  className="w-full bg-[#2A2A2A] text-white font-mono px-4 py-2 rounded-md border border-[#546E7A]"
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
                className={`w-full bg-[#5C6BC0] hover:bg-[#7986CB] text-white font-mono font-semibold py-2 px-4 rounded-md transition duration-200 ${(!selectedService || !domain) && 'cursor-not-allowed opacity-50'
                  }`}
              >
                Get Suggestions
              </button>
            </form>
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            {alternatives?.length === 0 && (
              <div className="bg-[#1A1A1A] border border-[#37474F] p-6 rounded-xl text-center text-[#CFD8DC] font-mono shadow-lg">
                No ethical alternatives found.
              </div>
            )}
            {alternatives?.length > 0 && (
              <>
                <h2 className="text-2xl font-serif font-semibold text-[#5C6BC0] mb-2">
                  Ethical Alternatives
                </h2>
                {alternatives.map((alt, idx) => (
                  <div
                    key={idx}
                    className="bg-[#5C6BC0]/10 border border-[#546E7A] rounded-xl p-5 shadow-md space-y-2 hover:border-[#7986CB] transition"
                  >
                    <p className="font-serif font-semibold text-[#90A4AE] text-lg">
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
                    <p className="text-sm font-mono text-[#ECEFF1]">{alt.Description}</p>
                    <p className="text-blue-200 text-xs font-mono">
                      Avg. Monthly Cost: ${alt.average_monthly_running_cost}
                    </p>
                    {alt.Feature_1 && (
                      <p className="text-sm font-mono text-[#CFD8DC]">• {alt.Feature_1}</p>
                    )}
                    {alt.Feature_2 && (
                      <p className="text-sm font-mono text-[#CFD8DC]">• {alt.Feature_2}</p>
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
