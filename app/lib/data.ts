/*export async function fetchProducts() {
  const jsonData = await fetch('http://localhost:3000/data.json');
  //const jsonData = await fetch('/data.json'); (URL FAUSSE)
  const data = await jsonData.json();
  //console.log(data);
  return(data)
}
*/

import path from 'path';
import fs from 'fs';

export async function fetchProducts() {
  // Construire le chemin absolu vers data.json dans le dossier public
  const filePath = path.join(process.cwd(), 'public', 'data.json');

  // Lire le contenu du fichier JSON
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData);

  console.log(data); // Utilisez vos données JSON comme nécessaire
  return data;
}
