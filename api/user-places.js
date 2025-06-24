import { promises as fs } from 'fs';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const fileContent = await fs.readFile('backend/data/user-places.json', 'utf-8');
    const places = JSON.parse(fileContent);
    res.status(200).json({ places });
  } else if (req.method === 'PUT') {
    const { placeId } = req.body;
    const fileContent = await fs.readFile('backend/data/places.json', 'utf-8');
    const placesData = JSON.parse(fileContent);
    const place = placesData.find((place) => place.id === placeId);
    const userPlacesFileContent = await fs.readFile('backend/data/user-places.json', 'utf-8');
    const userPlacesData = JSON.parse(userPlacesFileContent);
    let updatedUserPlaces = userPlacesData;
    if (!userPlacesData.some((p) => p.id === place.id)) {
      updatedUserPlaces = [...userPlacesData, place];
    }
    await fs.writeFile('backend/data/user-places.json', JSON.stringify(updatedUserPlaces));
    res.status(200).json({ userPlaces: updatedUserPlaces });
  } else if (req.method === 'DELETE') {
    const { id: placeId } = req.query;
    const userPlacesFileContent = await fs.readFile('backend/data/user-places.json', 'utf-8');
    const userPlacesData = JSON.parse(userPlacesFileContent);
    const placeIndex = userPlacesData.findIndex((place) => place.id === placeId);
    let updatedUserPlaces = userPlacesData;
    if (placeIndex >= 0) {
      updatedUserPlaces.splice(placeIndex, 1);
    }
    await fs.writeFile('backend/data/user-places.json', JSON.stringify(updatedUserPlaces));
    res.status(200).json({ userPlaces: updatedUserPlaces });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
} 