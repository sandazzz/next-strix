import { NextResponse } from "next/server";
//const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export async function POST(request: Request, res: any) {
  const requestBody = await request.json();
  //console.log(requestBody);
  console.log("Connecting with Stripe...");
  const session = await stripe.checkout.sessions.create({
    line_items: requestBody,
    mode: "subscription",
    success_url: `http://localhost:3000/cart`,
    cancel_url: `http://localhost:3000/cart`,
  });
  return NextResponse.json(session.url);
}
