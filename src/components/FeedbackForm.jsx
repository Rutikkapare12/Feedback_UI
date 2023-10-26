import { useState } from 'react';

const FeedbackForm = () => {
  const [selectedRating, setSelectedRating] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    if (selectedRating !== '') {
      setSubmitted(true)
    }
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <h1 className="heading">Feedback UI</h1>
      <div className="ratings-container">
        <div className={`rating ${selectedRating === 'Unhappy' ? 'active' : ''}`} onClick={() => handleRatingClick('Unhappy')}>
          <img src="https://cdn-icons-png.flaticon.com/512/166/166527.png" alt="Unhappy" />
          <small>Unhappy</small>
        </div>
        <div className={`rating ${selectedRating === 'Neutral' ? 'active' : ''}`} onClick={() => handleRatingClick('Neutral')}>
          <img src="https://cdn-icons-png.flaticon.com/512/1791/1791385.png" alt="Neutral" />
          <small>Neutral</small>
        </div>
        <div className={`rating ${selectedRating === 'Satisfied' ? 'active' : ''}`} onClick={() => handleRatingClick('Satisfied')}>
          <img src="https://cdn-icons-png.flaticon.com/512/166/166538.png" alt="Satisfied" />
          <small>Satisfied</small>
        </div>
      </div>
      {submitted ? (
        <div>
          <strong>Thank you!</strong>
          <br />
          <br />
          <strong>Feedback: {selectedRating}</strong>
          <p>We&apos;ll use your feedback to improve our customer support.</p>
          <button className="btn-reload" onClick={handleReload}>Go back</button>
        </div>
      ) : (
        <button className="btn" onClick={handleSubmit}>Send Review</button>
      )}
    </div>
  );
};

export default FeedbackForm;
