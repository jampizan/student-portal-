import React, { useState } from 'react';

const BookRequest = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentId: '',
    bookTitle: '',
    author: '',
    reason: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Request Sent Successfully!');
  };

  return (
    <div className="container mt-4">
      <h2>Book Request Form</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        
        <div className="mb-3">
          <label className="form-label">Student Name</label>
          <input 
            type="text" 
            name="studentName" 
            className="form-control" 
            value={formData.studentName} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Student ID</label>
          <input 
            type="text" 
            name="studentId" 
            className="form-control" 
            value={formData.studentId} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Book Title</label>
          <input 
            type="text" 
            name="bookTitle" 
            className="form-control" 
            value={formData.bookTitle} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Author</label>
          <input 
            type="text" 
            name="author" 
            className="form-control" 
            value={formData.author} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Reason</label>
          <textarea 
            name="reason" 
            className="form-control" 
            rows={3} 
            value={formData.reason} 
            onChange={handleChange} 
            required 
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit Request</button>
      </form>
    </div>
  );
};

export default BookRequest;