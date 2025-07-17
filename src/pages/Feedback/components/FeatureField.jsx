export default function FeatureField({ formData, setFormData }) {
  return (
    <div class="font-mono">
      <div>
        <label className="block text-sm font-medium text-blue-200">
          Please Describe the feature you'd like
        </label>
        <textarea
          // placeholder="Describe the feature you'd like"
          value={formData.feature.description}
          onChange={(e) =>
            setFormData(
              {
                ...formData,
                feature: {
                  ...formData.feature,
                  description: e.target.value
                }
              }
            )}
          className="mt-1 w-full px-3 py-2 border rounded-md bg-zinc-50 text-gray-800"
          rows={4}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-blue-200">
          Where would this apply?
        </label>
        <select
          value={formData.feature.where}
          onChange={(e) =>
            setFormData(
              {
                ...formData,
                feature: {
                  ...formData.feature,
                  where: e.target.value
                }
              }
            )}
          required
          className="mt-1 w-full px-3 py-2 border rounded-md bg-zinc-50 text-gray-800"
        >
          <option value="">Select a type</option>
          <option value="Dashboard">Dashboard</option>
          <option value="Company Page">Company Page</option>
          <option value="Comparison Tool">Comparison Tool</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>
  )
}