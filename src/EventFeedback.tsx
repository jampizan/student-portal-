import React, { useState } from 'react';

const BookRequest = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email:'',
    Feedback:'',
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
      <h2>Event Feedback</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input 
            type="text" 
            name="Name" 
            className="form-control" 
            value={formData.Name} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input 
            type="text" 
            name="Email" 
            className="form-control" 
            value={formData.Email} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Feedback</label>
          <input 
            type="text" 
            name="Feedback" 
            className="form-control" 
            value={formData.Email} 
            onChange={handleChange} 
            required 
          />
        </div>


        <button type="submit" className="btn btn-primary">Submit Feedback</button>
      </form>
    </div>
  );
};

export default BookRequest;