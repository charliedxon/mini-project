import React, { useState } from "react";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      client: "Taylor",
      job: "Web Developer",
      experience: "5 years",
      review: "Excellent developer with a strong skillset.",
    },
    {
      id: 2,
      client: "James",
      job: "Graphic Designer",
      experience: "3 years",
      review: "Talented designer with a creative approach.",
    },
  ]);

  const [newReview, setNewReview] = useState({
    client: "",
    job: "",
    experience: "",
    review: "",
  });

  const [editReview, setEditReview] = useState(null);

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [reviewToDelete, setReviewToDelete] = useState(null);

  const handleAddReview = () => {
    setReviews((prevReviews) => [
      ...prevReviews,
      { id: Date.now(), ...newReview },
    ]);
    setNewReview({ client: "", job: "", experience: "", review: "" });
  };

  const handleDeleteReview = (id) => {
    const review = reviews.find((review) => review.id === id);
    setReviewToDelete(review);
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    if (reviewToDelete) {
      const idToDelete = reviewToDelete.id;
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review.id !== idToDelete)
      );
      setShowDeleteConfirmation(false);
    }
  };

  const handleEditReview = (review) => {
    setEditReview(review);
  };

  const handleSaveReview = (id) => {
    const updatedReviews = [...reviews];
    const reviewIndex = updatedReviews.findIndex((review) => review.id === id);
    updatedReviews[reviewIndex] = { ...updatedReviews[reviewIndex], ...newReview };
    setReviews(updatedReviews);
    setEditReview(null);
  };

  return (
    <div id="resume" className="max-w-[1040px] mx-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] py-4">Review Section</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <li
            key={review.id}
            className="bg-gray-200 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 border border-gray-400"
          >
            {editReview === review ? (
              <div>
                <input
                  type="text"
                  placeholder="Client"
                  value={newReview.client}
                  onChange={(e) => setNewReview({ ...newReview, client: e.target.value })}
                  className="border border-blue-400 bg-white rounded-md p-2 focus:outline-none mb-2 text-black"
                />
                <input
                  type="text"
                  placeholder="Job"
                  value={newReview.job}
                  onChange={(e) => setNewReview({ ...newReview, job: e.target.value })}
                  className="border border-blue-400 bg-white rounded-md p-2 focus:outline-none mb-2 text-black"
                />
                <input
                  type="text"
                  placeholder="Experience"
                  value={newReview.experience}
                  onChange={(e) => setNewReview({ ...newReview, experience: e.target.value })}
                  className="border border-blue-400 bg-white rounded-md p-2 focus:outline-none mb-2 text-black"
                />
                <textarea
                  placeholder="Review"
                  value={newReview.review}
                  onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                  className="border border-blue-400 bg-white rounded-md p-2 focus:outline-none mb-2 text-black"
                />
                <div className="flex justify-end mt-2">
                  <button
                    onClick={() => handleSaveReview(review.id)}
                    className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none"
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <strong>Client Name:</strong> {review.client}
                <br />
                <strong>Job:</strong> {review.job}
                <br />
                <strong>Experience:</strong> {review.experience}
                <br />
                <strong>Review:</strong> {review.review}
              </div>
            )}
            <div className="mt-2">
              {editReview === review ? null : (
                <button
                  onClick={() => handleEditReview(review)}
                  className="bg-[#001b5e] text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none align-text-bottom"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => handleDeleteReview(review.id)}
                className="bg-red-900 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none ml-2 align-text-bottom"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {showDeleteConfirmation && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-xl font-bold mb-4">
              Are you sure you want to delete this review?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setShowDeleteConfirmation(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded-md"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Add New Review</h2>
        <input
          type="text"
          placeholder="Client"
          value={newReview.client}
          onChange={(e) => setNewReview({ ...newReview, client: e.target.value })}
          className="border border-gray-400 bg-gray-100 rounded-lg p-2 focus:outline-none mb-2 flex text-black"
        />
        <input
          type="text"
          placeholder="Job"
          value={newReview.job}
          onChange={(e) => setNewReview({ ...newReview, job: e.target.value })}
          className="border border-gray-400 bg-gray-100 rounded-md p-2 focus:outline-none mb-2 flex text-black"
        />
        <input
          type="text"
          placeholder="Experience"
          value={newReview.experience}
          onChange={(e) => setNewReview({ ...newReview, experience: e.target.value })}
          className="border border-gray-400 bg-gray-100 rounded-md p-2 focus:outline-none mb-2 flex text-black"
        />
        <textarea
          placeholder="Review"
          value={newReview.review}
          onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
          className="border border-gray-400 bg-gray-100 rounded-md p-2 focus:outline-none mb-2 text-black flex flex-col"
        />
        <button
          onClick={handleAddReview}
          className="bg-[#1B4079] text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Add Review
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
