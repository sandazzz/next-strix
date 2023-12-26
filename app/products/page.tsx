import { fetchProducts } from "../lib/data"
import cardProduct from "../ui/products/card-product"

export default async function Products() {
  const products = await fetchProducts()
  console.log(products)
    return (
      <main>
        <section id="product-container" className="flex flex-col md:flex-row md:justify-center md:gap-7 md:flex-wrap p-12 place-content-center m-auto bg-[#4B105E] md:bg-gradient-to-tr from-blue-900 via-indigo-900 to-purple-900">
          <h1>Produits</h1>
          {products.map}
        </section>
      </main>
    )
  }
  