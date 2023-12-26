export async function fetchProducts() {
  const jsonData = await fetch("/public/data.json");
  const data = await jsonData.json();

  console.log(data); // Utilisez vos données JSON comme nécessaire
}
