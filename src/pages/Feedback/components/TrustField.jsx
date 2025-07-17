export default function TrustField({ formData, setFormData }) {
  return (
    <>
      <div>
        <label className="block text-sm font-medium text-blue-200">
          Which company/product?
        </label>
        <input
          type='text'
          value={formData.trustConcern.issueWith}
          onChange={(e) =>
            setFormData(
              {
                ...formData,
                trustConcern: {
                  ...formData.trustConcern,
                  issueWith: e.target.value
                }
              }
            )}
          className="mt-1 w-full px-3 py-2 border rounded-md bg-zinc-50 text-gray-800"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-blue-200">
          What makes this info feel untrustworthy?
        </label>
        <textarea
          value={formData.trustConcern.why}
          onChange={(e) =>
            setFormData(
              {
                ...formData,
                trustConcern: {
                  ...formData.trustConcern,
                  why: e.target.value
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
          Suggest a better source or correction
        </label>
        <input
          type="text"
          placeholder="http://example.com"
          value={formData.trustConcern.link}
          onChange={(e) =>
            setFormData(
              {
                ...formData,
                trustConcern: {
                  ...formData.trustConcern,
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