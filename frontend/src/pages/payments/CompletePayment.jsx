import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import usePaymentHandler from '../../hooks/usePaymentHandler';

const CompletePayment = () => {
    const location = useLocation();
    const { loading, handlePayment } = usePaymentHandler();
    const [paramsData, setParamsData] = useState({
        token: '',
        payerId: '',
        name: '',
        email: '',
        mobileNo: '',
        referenceCode: '',
        amount: 0
    });

    const resolvePaymentToDB = async () => {
        const queryParams = new URLSearchParams(location.search);
        const token = queryParams.get('token');
        const payerId = queryParams.get('PayerID');
        const pathParts = location.pathname.split('/');

        const name = decodeURIComponent(pathParts[2]);
        const email = decodeURIComponent(pathParts[3]);
        const mobileNo = decodeURIComponent(pathParts[4]);
        const referenceCode = decodeURIComponent(pathParts[5]);
        const amount = decodeURIComponent(pathParts[6]);

        const updatedData = {
            token,
            payerId,
            name,
            email,
            mobileNo,
            referenceCode,
            amount,
        };

        setParamsData(updatedData);
        console.log(paramsData);
        await handlePayment(updatedData);
    };

    return (
        <div>
            <h2>Just One Step Behind</h2>
            <button className='bg-blue-500' onClick={resolvePaymentToDB} disabled={loading}>Press to confirm Donation</button>
        </div>
    );
};

export default CompletePayment;
