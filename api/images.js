import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const { name } = req.query;
  if (!name) {
    res.status(400).json({ message: 'Image name is required' });
    return;
  }
  const imagePath = path.join(process.cwd(), 'backend/images', name);
  try {
    const imageBuffer = await fs.readFile(imagePath);
    const ext = path.extname(name).toLowerCase();
    let contentType = 'image/jpeg';
    if (ext === '.png') contentType = 'image/png';
    res.setHeader('Content-Type', contentType);
    res.status(200).send(imageBuffer);
  } catch (err) {
    res.status(404).json({ message: 'Image not found' });
  }
} 