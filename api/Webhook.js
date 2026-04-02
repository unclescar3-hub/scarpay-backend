// SCARPAY BACKEND v1.0 - FENG INDUSTRIES
export default function handler(req, res) {
  if (req.method === 'POST') {
    // This catches the 'ping' from the bank/gateway
    const { amount, currency, status } = req.body;

    if (status === 'completed') {
      console.log(`Payment Alert: Received ${amount} ${currency}`);
      // This is where we will eventually trigger a notification to the merchant
    }

    // Tell the bank the message was received successfully
    res.status(200).json({ received: true, gateway: "ScarPay" });
  } else {
    // If someone tries to just visit the link in a browser, show this:
    res.status(405).json({ message: 'ScarPay Webhook Active. Waiting for POST.' });
  }
}
