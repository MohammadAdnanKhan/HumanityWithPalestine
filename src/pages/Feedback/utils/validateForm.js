const validateForm = ({ formData, category }) => {
  switch (category) {
    case 'Content Issue':
      if (!formData.contentIss.name.trim()) return 'Content name is required.';
      if (!formData.contentIss.description.trim()) return 'Description is required.';
      if (!formData.contentIss.type.trim()) return 'Type is required.';
      break;

    case 'Feature Request':
      if (!formData.feature.description.trim()) return 'Feature description is required.';
      if (!formData.feature.where.trim()) return 'Feature location is required.';
      break;

    case 'UI/UX Problem':
      if (!formData.uiIss.work.trim()) return 'What works well is required.';
      if (!formData.uiIss.wrong.trim()) return 'What went wrong is required.';
      if (!formData.uiIss.device.trim()) return 'Device info is required.';
      break;

    case 'Trustworthiness Concern':
      if (!formData.trustConcern.issueWith.trim()) return 'Trust concern issue is required.';
      if (!formData.trustConcern.why.trim()) return 'Explanation is required.';
      break;

    case 'Other':
      if (!formData.other.message.trim()) return 'Message is required.';
      break;

    default:
      return 'Please select a feedback category.';
  }

  if (!formData.name.trim()) return 'Name is required.';
  if (!formData.email.trim()) return 'Email is required.';

  return null;
};

export default validateForm;