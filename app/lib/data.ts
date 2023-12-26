export async function fetchProducts() {
  const jsonData = await fetch('http://localhost:3000/data.json');
  //const jsonData = await fetch('/data.json'); (URL FAUSSE)
  const data = await jsonData.json();
  console.log(data);
  return(data)
}
