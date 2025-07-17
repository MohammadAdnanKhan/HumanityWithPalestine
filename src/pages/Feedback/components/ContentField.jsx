export default function ContentField({ formData, setFormData }) {
  return (
    <>
      <div>
        <label className="block text-sm font-medium text-blue-200">
          Affected company or product
        </label>
        <input
          type="text"
          placeholder="Affected company/product"
          value={formData.contentIss.name}
          onChange={(e) =>
            setFormData(
              {
                ...formData,
                contentIss: {
                  ...formData.contentIss,
                  name: e.target.value
                }
              }
            )}
          className="mt-1 w-full px-3 py-2 border rounded-md bg-zinc-50 text-gray-800"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-blue-200">
          Please describe the issue
        </label>
        <textarea
          placeholder="Describe the content issue"
          value={formData.contentIss.description}
          onChange={(e) =>
            setFormData(
              {
                ...formData,
                contentIss: {
                  ...formData.contentIss,
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
          Type of issue
        </label>
        <select
          value={formData.contentIss.type}
          onChange={(e) =>
            setFormData(
              {
                ...formData,
                contentIss: {
                  ...formData.contentIss,
                  type: e.target.value
                }
              }
            )}
          required
          className="mt-1 w-full px-3 py-2 border rounded-md bg-zinc-50 text-gray-800"
        >
          <option value="">Select a type</option>
          <option value="Outdated info">Outdated info</option>
          <option value="Wrong boycott">Wrong boycott</option>
          <option value="Wrong alternative">Wrong alternative</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-blue-200">
          Link to source or proof
        </label>
        <input
          type="text"
          placeholder="http://example.com"
          value={formData.contentIss.link}
          onChange={(e) =>
            setFormData(
              {
                ...formData,
                contentIss: {
                  ...formData.contentIss,
                  link: e.target.value
                }
              }
            )}
          className="mt-1 w-full px-3 py-2 border rounded-md bg-zinc-50 text-gray-800"
          required
        />
      </div>
    </>
  )
}