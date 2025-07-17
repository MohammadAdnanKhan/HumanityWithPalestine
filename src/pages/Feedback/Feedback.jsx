import { useState } from 'react'
import ContentField from './components/ContentField'
import FeatureField from './components/FeatureField'
import TrustField from './components/TrustField'
import UiField from './components/UiField'

function Feedback() {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contentIss: {
      name: '',
      description: '',
      type: '',
      link: ''
    },
    feature: {
      description: '',
      where: '',
    },
    uiIss: {
      work: '',
      wrong: '',
      device: ''
    },
    trustConcern: {
      issueWith: '',
      why: '',
      link: '',
    },
    other: {
      message: ''
    },
  });

  const handleNext = (e) => {
    e.preventDefault();
    if (page === 1 && category) {
      setPage(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedbackObj = {
      category,
      ...formData
    };

    console.log('Submitted data:', feedbackObj);

    setPage(3);
    // setFormData({
    //   name: '',
    //   email: '',
    //   contentIss: {
    //     name: '',
    //     description: '',
    //     type: '',
    //     link: ''
    //   },
    //   feature: {
    //     description: '',
    //     where: '',
    //   },
    //   uiIss: {
    //     work: '',
    //     wrong: '',
    //     device: ''
    //   },
    //   trustConcern: {
    //     issueWith: '',
    //     why: '',
    //     link: '',
    //   },
    //   other: {
    //     message: ''
    //   },
    // });
    setCategory('');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6">
      <div className="bg-zinc-700/80 p-8 rounded-lg shadow-sm shadow-zinc-300 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-100 mb-4">
          {page === 2 ? category : 'We value your feedback'}
        </h1>

        {page === 1 && (
          <form onSubmit={handleNext} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-blue-200">
                What type of feedback is this?
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border rounded-md bg-zinc-50 text-gray-800"
              >
                <option value="">Select a category</option>
                <option value="Content Issue">Content Issue</option>
                <option value="Feature Request">Feature Request</option>
                <option value="UI/UX Problem">UI/UX Problem</option>
                <option value="Trustworthiness Concern">Trustworthiness Concern</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#5C6BC0] text-white py-2 px-4 rounded-md hover:bg-[#5C6BC0]/80 transition"
            >
              Next ➡️
            </button>
          </form>
        )}

        {page === 2 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-blue-200">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="mt-1 w-full px-3 py-2 border rounded-md bg-zinc-50 text-gray-800"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-200">
                Email (optional)
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="mt-1 w-full px-3 py-2 border rounded-md bg-zinc-50 text-gray-800"
              />
            </div>

            {/* Dynamic Section */}
            {category === 'Content Issue' &&
              <ContentField formData={formData} setFormData={setFormData} />}

            {category === 'Feature Request' &&
              <FeatureField formData={formData} setFormData={setFormData} />}

            {category === 'UI/UX Problem' &&
              <UiField formData={formData} setFormData={setFormData} />}

            {category === 'Trustworthiness Concern' &&
              <TrustField formData={formData} setFormData={setFormData} />}

            {category === 'Other' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-blue-200">
                    Feel free to provide us with your insightful feedback
                  </label>
                  <textarea
                    placeholder="Your feedback"
                    value={formData.other.message}
                    onChange={(e) =>
                      setFormData(
                        {
                          ...formData,
                          other: {
                            ...formData.other,
                            message: e.target.value
                          }
                        }
                      )}
                    className="mt-1 w-full px-3 py-2 border rounded-md bg-zinc-50 text-gray-800"
                    rows={4}
                    required
                  />
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full bg-[#57b560] text-white py-2 px-4 rounded-md hover:bg-[#57b560]/80 transition"
            >
              Submit Feedback
            </button>
            <button
              type="button"
              onClick={() => setPage(1)}
              className="w-full bg-[#5C6BC0] text-white py-2 px-4 rounded-md hover:bg-[#5C6BC0]/80 transition"
            >
              ⬅️ Change category
            </button>
          </form>
        )}

        {page === 3 && (
          <p className="text-green-600 font-medium">
            ✅ Thank you{formData.name
              ? <span>
                <span>,</span>
                <span className=''>{formData.name}</span>
              </span>
              : ''} for your feedback!
          </p>
        )}
      </div>
    </div>
  );
}

export default Feedback
