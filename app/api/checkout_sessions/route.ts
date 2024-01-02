import { NextApiRequest, NextApiResponse } from "next";

const stripe = require('stripe')('sk_test_51OACd6D72PzL52RmteorfV4aTi9ndYv6T4JOJr5XKa0q4Rf5r3XF1OvzLBVUoBjomR2gLkqj4fuEHuUQnrDyhmwI00iJC2ugOv');

export async function POST(req: NextApiRequest, res:NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: 'price_1OTTSMD72PzL52Rm2AFAsRd7',
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err: any) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
