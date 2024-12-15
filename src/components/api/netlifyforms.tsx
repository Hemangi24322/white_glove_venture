
import { NextApiRequest, NextApiResponse } from 'next';
export default async function handler( req: NextApiRequest, res: NextApiResponse) {
    // Handle only POST requests
    if (req.method === 'POST') {
        try {
          // Extract form data from the request
          const formData = req.body;
    
          // Handle form submission logic (e.g., send an email, store in a database)
          // For example, you could use Netlify's serverless functions to post to Google Sheets
    
          return res.status(200).json({ message: 'Form submission successful!' });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ message: 'Something went wrong!' });
        }
      } else {
        return res.status(405).json({ message: 'Method Not Allowed' });
      }

  }
  