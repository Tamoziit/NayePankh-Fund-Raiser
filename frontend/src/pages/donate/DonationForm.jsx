import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PaymentForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNo: '',
    price: '',
    referenceCode: id
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePay = async () => {
    try {
        const priceBreakdown = [{ totalPrice: formData.price }];
        console.log('Form Data:', formData);

        await axios.post(`http://localhost:5000/np/api/v1/payment/price`, { priceBreakdown });
    } catch (err) {
        console.log('Error in handlePay:', err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form action="http://localhost:5000/np/api/v1/payment/pay" method='post' className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Full Name:
        </label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Email Address:
        </label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Phone:
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-100 text-gray-600 rounded-l-md">
            +91
          </span>
          <input 
            type="tel" 
            name="mobileNo" 
            value={formData.mobileNo} 
            onChange={handleChange} 
            required 
            className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          <input type="checkbox" className="mr-2" />
          Do you wish to receive Tax Exemption?
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">
          Reference Code (if available):
        </label>
        <input 
          type="text" 
          name="referenceCode" 
          value={formData.referenceCode} 
          readOnly 
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">
          Donation Amount:
        </label>
        <input 
          type="text" 
          name="price" 
          value={formData.price} 
          onChange={handleChange} 
          required 
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <input 
        type='submit'
        className='w-full h-[40px] bg-red-500 rounded-md text-white font-semibold cursor-pointer hover:bg-red-600'
        onClick={handlePay} 
        value="Donate"
      />
    </form>
    </div>
  );
};

export default PaymentForm;
