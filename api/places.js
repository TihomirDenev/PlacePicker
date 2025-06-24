import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const filePath = path.join(process.cwd(), 'backend/data/places.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const placesData = JSON.parse(fileContent);
    res.status(200).json({ places: placesData });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
} 