import React, { useState } from 'react';
import './CheckoutForm.css'

const CheckoutForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="checkoutForm" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        required
        autoComplete="name"
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
        autoComplete="email"
      />
      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        required
        autoComplete="tel"
      />
      <label htmlFor="address">Address:</label>
      <textarea
        id="address"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        required
        autoComplete="street-address"
      />
      <button type="submit">Place Order</button>
    </form>
  );
}

export default CheckoutForm;
