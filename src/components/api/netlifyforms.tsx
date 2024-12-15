
import { NextApiRequest, NextApiResponse } from 'next';
export default async function handler( req: NextApiRequest, res: NextApiResponse) {
    // Handle only POST requests
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
  
      // Simple validation (you can add more if needed)
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
      }
  
      // Optionally, process the form data (e.g., save to a database, send email, etc.)
      // For now, we'll just log the form data to the console
      console.log('Form Data:', { name, email, message });
  
      // Send a success response (Netlify expects a 2xx status)
      return res.status(200).json({ message: 'Form submitted successfully!' });
    }
  
    // If the request method is not POST, return an error
    res.status(405).json({ error: 'Method Not Allowed' });
  }
  