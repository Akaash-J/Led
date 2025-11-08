// Vercel Serverless Function to handle LED control
let ledValue = '0'; // Store the LED state

module.exports = function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Handle POST request - receive '1' from website
  if (req.method === 'POST') {
    try {
      let body = {};
      if (typeof req.body === 'string') {
        body = JSON.parse(req.body);
      } else {
        body = req.body;
      }
      
      const { value } = body;
      if (value === '1') {
        ledValue = '1';
        return res.status(200).json({ success: true, value: ledValue });
      }
      return res.status(200).json({ success: true, value: ledValue });
    } catch (error) {
      return res.status(200).json({ value: ledValue });
    }
  }

  // Handle GET request - Arduino polls this
  if (req.method === 'GET') {
    return res.status(200).json({ value: ledValue });
  }

  // Method not allowed
  return res.status(405).json({ error: 'Method not allowed' });
};

