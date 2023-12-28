//import { useRouter } from 'next/router';

export default function ProductDetail({ params,}: {params: {productId: number}}) {
  //const router = useRouter();
  //const { productId } = router.query; // Récupère l'ID du produit de l'URL
  console.log(params.productId)

  return (
    <main>
      <section>
        <h1>ID du produit : {params.productId}</h1>
      </section>
    </main>
  );
}
