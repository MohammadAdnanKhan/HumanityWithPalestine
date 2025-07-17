export default function UiField({ formData, setFormData }) {
  const browsers = [
    'Chrome',
    'Edge',
    'Safari',
    'Firefox',
    'Opera',
    'Internet Explorer',
    'Chrome for Android',
    'Safari on iOS',
    'Samsung Internet',
    'Opera Mini',
    'Opera Mobile',
    'Tor',
  ];

  return (
    <>
      <div>
        <label className="block text-sm font-medium text-blue-200">
          What were you trying to do?
        </label>
        <textarea
          value={formData.uiIss.work}
          onChange={(e) =>
            setFormData(
              {
                ...formData,
                uiIss: {
                  ...formData.uiIss,
                  work: e.target.value
                }
              }
            )}
          className="mt-1 w-full px-3 py-2 border rounded-md bg-zinc-50 text-gray-800"
          rows={2}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-blue-200">
          What went wrong or felt confusing?
        </label>
        <textarea
          value={formData.uiIss.wrong}
          onChange={(e) =>
            setFormData(
              {
                ...formData,
                uiIss: {
                  ...formData.uiIss,
                  wrong: e.target.value
                }
              }
            )}
          className="mt-1 w-full px-3 py-2 border rounded-md bg-zinc-50 text-gray-800"
          rows={2}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-blue-200">
          What Browser are you using?
        </label>
        <select
          value={formData.uiIss.device}
          onChange={(e) =>
            setFormData(
              {
                ...formData,
                uiIss: {
                  ...formData.uiIss,
                  device: e.target.value
                }
              }
            )}
          required
          className="mt-1 w-full px-3 py-2 border rounded-md bg-zinc-50 text-gray-800"
        >
          <option value="">Select a type</option>
          {browsers.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>
    </>
  )
}