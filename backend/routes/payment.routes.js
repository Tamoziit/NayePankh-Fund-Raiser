import express from "express";
import { completeOrderHandler, paymentHandler, priceHandler } from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/price", priceHandler);
router.post("/pay", paymentHandler);
router.post("/payment-resolve", completeOrderHandler);

export default router;