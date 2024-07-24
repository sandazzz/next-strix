export type Product = {
    id: number;
    image: string;
    name: string;
    game: string;
    description: string;
    lite_plan: number;
    standard_plan: number;
    extended_plan: number;
    lite_stripe_price: string;
    standard_stripe_price: string;
    extended_stripe_price: string;
}