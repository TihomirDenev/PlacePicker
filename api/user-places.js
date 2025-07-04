import { promises as fs } from 'fs';
import path from 'path';

const isProd = process.env.NODE_ENV === 'production';
const userPlacesPath = isProd
  ? '/tmp/user-places.json'
  : path.join(process.cwd(), 'backend/data/user-places.json');
const placesPath = path.join(process.cwd(), 'backend/data/places.json');

async function ensureTmpUserPlacesFile() {
  if (isProd) {
    try {
      await fs.access(userPlacesPath);
    } catch {
      const original = path.join(process.cwd(), 'backend/data/user-places.json');
      const data = await fs.readFile(original, 'utf-8');
      await fs.writeFile(userPlacesPath, data);
    }
  }
}

export default async function handler(req, res) {
  await ensureTmpUserPlacesFile();

  if (req.method === 'GET') {
    const fileContent = await fs.readFile(userPlacesPath, 'utf-8');
    const places = JSON.parse(fileContent);
    res.status(200).json({ places });
  } else if (req.method === 'PUT') {
    const { placeId } = req.body;
    const fileContent = await fs.readFile(placesPath, 'utf-8');
    const placesData = JSON.parse(fileContent);
    const place = placesData.find((place) => place.id === placeId);
    const userPlacesFileContent = await fs.readFile(userPlacesPath, 'utf-8');
    const userPlacesData = JSON.parse(userPlacesFileContent);
    let updatedUserPlaces = userPlacesData;
    if (!userPlacesData.some((p) => p.id === place.id)) {
      updatedUserPlaces = [...userPlacesData, place];
    }
    await fs.writeFile(userPlacesPath, JSON.stringify(updatedUserPlaces));
    res.status(200).json({ userPlaces: updatedUserPlaces });
  } else if (req.method === 'DELETE') {
    const { id: placeId } = req.query;
    const userPlacesFileContent = await fs.readFile(userPlacesPath, 'utf-8');
    const userPlacesData = JSON.parse(userPlacesFileContent);
    const placeIndex = userPlacesData.findIndex((place) => place.id === placeId);
    let updatedUserPlaces = userPlacesData;
    if (placeIndex >= 0) {
      updatedUserPlaces.splice(placeIndex, 1);
    }
    await fs.writeFile(userPlacesPath, JSON.stringify(updatedUserPlaces));
    res.status(200).json({ userPlaces: updatedUserPlaces });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
} 