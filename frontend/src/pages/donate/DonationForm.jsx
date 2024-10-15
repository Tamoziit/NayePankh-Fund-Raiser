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
    <form action="http://localhost:5000/np/api/v1/payment/pay" method='post'>
      <div>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Phone Number:
          <input type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Amount:
          <input type="number" name="price" value={formData.price} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Reference Code:
          <input type="text" name="referenceCode" value={formData.referenceCode} readOnly />
        </label>
      </div>
      <input type='submit'
        className='w-[250px] h-[40px] bg-[#005eff] rounded-md text-white italic cursor-pointer hover:bg-blue-800'
        onClick={handlePay} value="CONTINUE TO PAY WITH PAYPAL" />
    </form>
  );
};

export default PaymentForm;
