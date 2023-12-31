import { NextApiRequest, NextApiResponse } from 'next';
import stripe from 'stripe';

const YOUR_DOMAIN = 'http://localhost:3000'; // Remplacez par l'URL de votre site Next.js
const stripeInstance = new stripe('sk_test_51O1oofEkyNcc8YhbBVbpSFAOX7GUcElLZD0dZbAXdyOPQr3h4h4REmIfMrqQB5l3agmE350WMQQk6d1FzkMc58I800PnWrQRP5');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { line_items } = req.body;
      console.log("reçu")
      // Extract price IDs from the received line_items
      const priceIds = line_items.map((item: any) => item.price); // Assurez-vous du format des données

      // Create a Stripe session using the extracted price IDs
      const session = await stripeInstance.checkout.sessions.create({
        line_items: line_items.map((item: any) => ({
          price: item.price,
          quantity: item.quantity,
        })),
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/success.html`,
        cancel_url: `${YOUR_DOMAIN}/cancel.html`,
      });

      res.status(200).json({ url: session.url });
    } catch (error) {
      console.error('Erreur lors de la création de la session de paiement avec Stripe:', error);
      res.status(500).json({ error: 'Erreur lors de la création de la session de paiement' });
    }
  } else {
    res.status(405).end(); // Méthode non autorisée
  }
}
