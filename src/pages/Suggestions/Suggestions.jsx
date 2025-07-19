import { useState } from 'react'
import AsyncSelect from 'react-select/async';

// const BACKEND_BASE_URL = 'https://hackforpalestine.onrender.com';
const BACKEND_BASE_URL = 'http://localhost:5000';

function Suggestions() {
  const [selectedService, setSelectedService] = useState(null);
  const [domain, setDomain] = useState('');
  const [alternatives, setAlternatives] = useState(null);

  // fetch suggestions dynamically
  const loadOptions = async (inputValue) => {
    if (inputValue.length < 3) return [];
    try {
      const res = await fetch(`${BACKEND_BASE_URL}/service?name=${encodeURIComponent(inputValue)}`);
      const data = await res.json();

      return data.map(s => ({
        label: `${s.Service_Name} (${s.Service_Type})`,
        value: s.Service_Name,
        raw: s, // stored original object needed later
      }));
    } catch (err) {
      console.error('Error loading service suggestions:', err);
      return [];
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Selected Service:", selectedService);
    console.log("Domain:", domain);
    // Do the POST /service here if needed

    try {
      const res = await fetch(`${BACKEND_BASE_URL}/service`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "name": selectedService.raw.Service_Name,
          "type": selectedService.raw.Service_Type,
          "domain": domain
        })
      });
      const data = await res.json();
      console.log(data);
      setAlternatives([...data]);
    } catch (error) {
      console.error('Error fetching service alternatives:', err);
      setAlternatives(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-row justify-center gap-4 mt-6 pb-6">
      <div className="bg-zinc-700/80 p-8 rounded-lg shadow-sm shadow-zinc-300 w-full h-fit max-w-md">
        <h1 className="text-2xl font-serif font-bold text-gray-100">
          Get Detailed Suggestions
        </h1>
        <p className='text-sm mb-4'>On how to Divest from an unethical product</p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* service name autocomplete */}
          <div>
            <label className="block text-sm font-mono font-medium text-blue-200">
              Enter the name of the service/product you want to divest from
            </label>
            <AsyncSelect
              cacheOptions
              defaultOptions
              loadOptions={loadOptions}
              onChange={setSelectedService}
              placeholder="Start typing..."
              className="text-sm text-slate-900"
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: 'white',
                  fontFamily: 'monospace',
                  borderColor: '#d1d5db',
                }),
                menu: (base) => ({
                  ...base,
                  zIndex: 999,
                }),
              }}
            />
          </div>
          {(selectedService?.raw?.Feature_1 || selectedService?.raw?.Feature_2) && (
            <div className="mt-4 px-4 py-2 bg-zinc-800/50 border border-zinc-300 rounded-md shadow-sm">
              <h3 className="text-md font-mono font-semibold text-gray-100 mb-2">
                Services Provided by <span className="text-blue-300">{selectedService.value}</span>
              </h3>
              <ul className="list-disc list-inside text-sm text-zinc-200 space-y-1">
                {selectedService.raw.Feature_1 && <li>{selectedService.raw.Feature_1}</li>}
                {selectedService.raw.Feature_2 && <li>{selectedService.raw.Feature_2}</li>}
              </ul>
            </div>
          )}

          {/* domain selection */}
          <div>
            <label className="block text-sm font-mono font-medium text-blue-200">
              Enter the Primary domain of your organization
            </label>
            <select
              aria-placeholder='type'
              value={domain}
              onChange={e => setDomain(e.target.value)}
              required
              className="mt-1 block font-mono w-full px-3 py-2 border rounded-md bg-zinc-50 text-gray-800"
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
            className="w-full font-mono bg-[#5C6BC0] text-white py-2 px-4 rounded-md hover:bg-[#5C6BC0]/80 transition"
          >
            Next
          </button>
        </form>
      </div>

      {alternatives?.length == 0 && (
        <div className="w-full max-w-md bg-zinc-700/80 p-6 rounded-lg shadow-sm shadow-zinc-300 text-gray-100">
          No data avb
        </div>
      )}
      {alternatives?.length > 0 && (
        <div className="w-full max-w-md bg-zinc-700/80 p-6 rounded-lg shadow-sm shadow-zinc-300 text-gray-100">
          <h2 className="text-xl font-serif font-bold mb-4 text-blue-200">Suggested Ethical Alternatives</h2>
          <ul className="space-y-3 text-sm">
            {alternatives.map((alt, idx) => (
              <li key={idx} className="bg-zinc-800/60 p-3 rounded-md border border-zinc-600">
                <p className="font-mono text-blue-300">{alt.Service_Name}
                  {alt.Score <= 10 && <span className='text-green-400'> ({alt.Score}) Yes</span>}
                  {alt.Score > 10 && alt.Score <= 20 && <span className='text-yellow-400'> ({alt.Score}) Maybe</span>}
                  {alt.Score > 20 && <span className='text-red-400'> ({alt.Score}) Avoid</span>}
                </p>
                <p className="font-mono text-sm text-blue-200">{alt.Description}</p>
                <p className="font-mono text-sm text-blue-500">
                  Average Monthly Running Costs: ${alt.average_monthly_running_cost}
                </p>
                {alt.Feature_1 && <p className="text-zinc-200 mt-1">• {alt.Feature_1}</p>}
                {alt.Feature_2 && <p className="text-zinc-200">• {alt.Feature_2}</p>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Suggestions
