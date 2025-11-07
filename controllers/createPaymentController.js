require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const createPayment = async (req, res, next) => {
  try {
    const { amount, currency } = req.body; // Use body instead of headers
    console.log("Received:", amount, currency);

    if (!amount || !currency) {
      return res.status(400).json({ error: "Amount and currency are required." });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Stripe expects amount in cents
      currency,
      automatic_payment_methods: { enabled: true }, // Optional, recommended
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Payment error:", error);
    next(error);
  }
};

module.exports = { createPayment };
