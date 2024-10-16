import axios from "axios";
import prices from "../controllers/payment.controller.js";

async function generateAccessToken() {
    const response = await axios({
        url: process.env.PAYPAL_BASE_URL + "/v1/oauth2/token",
        method: "post",
        data: "grant_type=client_credentials",
        auth: {
            username: process.env.PAYPAL_CLIENT_ID,
            password: process.env.PAYPAL_SECRET
        }
    });
    return response.data.access_token;
}

const createOrder = async () => {
    const accessToken = await generateAccessToken();

    const latestEntry = prices[prices.length - 1];
    const totalPrice = latestEntry.price;

    const items = [{
        name: "Service/Product Name",
        description: "Complete",
        quantity: 1,
        unit_amount: {
            currency_code: "USD",
            value: totalPrice
        }
    }];

    const requestBody = {
        intent: "CAPTURE",
        purchase_units: [{
            items: items,
            amount: {
                currency_code: "USD",
                value: totalPrice,
                breakdown: {
                    item_total: {
                        currency_code: "USD",
                        value: totalPrice
                    },
                    shipping: {
                        currency_code: "USD",
                        value: 0
                    },
                }
            }
        }],
        application_context: {
            return_url: `http://localhost:5000/complete-order/${encodeURIComponent(latestEntry.name)}/${encodeURIComponent(latestEntry.email)}/${encodeURIComponent(latestEntry.mobileNo)}/${encodeURIComponent(latestEntry.referenceCode)}/${encodeURIComponent(latestEntry.price)}`,
            cancel_url: "http://localhost:5000/cancel-order",
            user_action: "PAY_NOW",
            brand_name: ""
        }
    };

    console.log('Request Body for PayPal:', JSON.stringify(requestBody, null, 2));

    const response = await axios({
        url: process.env.PAYPAL_BASE_URL + "/v2/checkout/orders",
        method: "post",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        },
        data: requestBody
    });

    return response.data.links.find(link => link.rel === "approve").href;
};

export default createOrder;
