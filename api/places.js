import { promises as fs } from 'fs';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const fileContent = await fs.readFile('backend/data/places.json', 'utf-8');
    const placesData = JSON.parse(fileContent);
    res.status(200).json({ places: placesData });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
} 