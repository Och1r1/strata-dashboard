async function submitIssueForm(values) {
  try {
    const response = await fetch('/api/submit-issue', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    const data = await response.json();
    console.log('Server response:', data);

    if (!response.ok) {
      throw new Error(data.message || 'Failed to submit issue');
    }

    alert('Issue submitted successfully!');
  } catch (error) {
    console.error('Error submitting issue:', error);
    alert('There was a problem submitting your request.');
  }
}
