import { useState } from 'react'
import ContentField from './components/ContentField'
import FeatureField from './components/FeatureField'
import TrustField from './components/TrustField'
import UiField from './components/UiField'
import validateForm from './utils/validateForm'
import BACKEND_URL from '../constants'
const SUPPORT_EMAIL = "humanitywithpalestine@proton.me";

const initialFormData = {
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
};

function Feedback() {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('');
  const [submitError, setSubmitError] = useState(null);
  const [formData, setFormData] = useState({ ...initialFormData });

  const handleNext = (e) => {
    e.preventDefault();
    if (page === 1 && category) {
      setPage(2);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateForm({ formData, category });
    if (error) {
      setSubmitError(error);
      setTimeout(() => setSubmitError(null), 3000);
      return;
    }

    // user passed validation
    const feedbackObj = {
      category,
      ...formData
    };

    try {
      const response = await fetch(`${BACKEND_URL}/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedbackObj)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();

      // After successful submission
      setPage(3);
      setCategory('');
      setFormData({ ...initialFormData });

    } catch (error) {
      setSubmitError(error.message);
      setTimeout(() => setSubmitError(null), 3000);
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6">
      <div className="bg-zinc-700/80 p-8 rounded-lg shadow-sm shadow-zinc-300 w-full max-w-md">
        <h1 className="text-2xl font-serif font-bold text-gray-100 mb-4">
          {page === 1 && 'We value your feedback'}
          {page === 2 && category}
          {page === 3 && 'Feedback Submitted'}
        </h1>

        {page === 1 && (
          <form onSubmit={handleNext} className="space-y-4">
            <div>
              <label className="block text-sm font-mono font-medium text-blue-200">
                What type of feedback is this?
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="mt-5 block font-mono w-full px-3 py-2 border rounded-md bg-zinc-50 text-gray-800"
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
              className="w-full font-mono cursor-not-allowed bg-[#5C6BC0] text-white py-2 px-4 rounded-md hover:bg-[#5C6BC0]/80 transition"
            >
              Next
            </button>
          </form>
        )}

        {page === 2 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-mono text-sm font-medium text-blue-200">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="mt-1 w-full font-mono px-3 py-2 border rounded-md bg-zinc-50 text-gray-800"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-mono font-medium text-blue-200">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="mt-1 w-full px-3 py-2 border rounded-md bg-zinc-50 text-gray-800"
                required
              />
            </div>

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
                  <label className="block text-sm font-mono font-medium text-blue-200">
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
                    className="mt-1 w-full font-mono px-3 py-2 border rounded-md bg-zinc-50 text-gray-800"
                    rows={4}
                    required
                  />
                </div>
              </>
            )}

            {submitError &&
              <div className='font-mono text-red-500 bg-red-700/40 p-2 rounded text-md text-center capitalize'>
                {submitError}
              </div>
            }
            <button
              type="submit"
              className="w-full bg-[#D7CCC8] font-mono text-black py-2 px-4 rounded-md hover:bg-[#5C6BC0]/80 transition"
            >
              Submit Feedback
            </button>
            <button
              type="button"
              onClick={() => setPage(1)}
              className="w-full bg-[#5C6BC0] font-mono text-white py-2 px-4 rounded-md hover:bg-[#5C6BC0]/80 transition"
            >
              Change category
            </button>
          </form>
        )}
        <div className="mt-6 p-4 border border-[#5C6BC0]/30 bg-zinc-800/50 rounded-md text-xs text-blue-100 text-center font-mono">
        <p className="mb-1">
          ⚠️ Having trouble submitting the form?
        </p>
        <p>
          You can always reach us directly at{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-[#EF9A9A] hover:underline font-semibold"
          >
            {SUPPORT_EMAIL}
          </a>
        </p>
        <p className="italic text-[11px] text-gray-400 mt-1">
          We'd love to hear from you since no issue is too small 🍉
        </p>
      </div>

        {page === 3 && (
          <p className="text-green-600 font-serif font-medium">
            Thank you{formData.name
              ? <>
                <span>, </span>
                <span className=''>{formData.name}</span>
              </>
              : ''} for your feedback!
          </p>
        )}
      </div>
    </div>
  );
}

export default Feedback
