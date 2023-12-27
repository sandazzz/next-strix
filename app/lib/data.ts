import path from 'path';
import fs from 'fs';
import { Product } from '../lib/interfaces'; 

export async function fetchProducts() : Promise<Product[]> {
  // Construire le chemin absolu vers data.json dans le dossier public
  const filePath = path.join(process.cwd(), 'public', 'data.json');

  // Lire le contenu du fichier JSON
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data: Product[] = JSON.parse(jsonData);
  //console.log(data);
  return data;
}