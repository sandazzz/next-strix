const { db } = require("@vercel/postgres");
const { products } = require("../lib/placeholder-data");

async function seedProducts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "products" table if it doesn't exist
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS products (
          id SERIAL PRIMARY KEY,
          image VARCHAR(255) NOT NULL,
          name VARCHAR(255) NOT NULL,
          game VARCHAR(255) NOT NULL,
          description TEXT NOT NULL,
          lite_plan INT NOT NULL,
          standard_plan INT NOT NULL,
          extended_plan INT NOT NULL,
          lite_stripe_price VARCHAR(255) NOT NULL,
          standard_stripe_price VARCHAR(255) NOT NULL,
          extended_stripe_price VARCHAR(255) NOT NULL
        );
      `;

    console.log(`Created "products" table`);

    // Insert data into the "products" table
    const insertedProducts = await Promise.all(
      products.map(
        (product) => client.sql`
            INSERT INTO products (image, name, game, description, lite_plan, standard_plan, extended_plan, lite_stripe_price, standard_stripe_price, extended_stripe_price)
            VALUES (${product.image}, ${product.name},${product.game}, ${product.description}, ${product.lite_plan}, ${product.standard_plan}, ${product.extended_plan}, ${product.lite_stripe_price}, ${product.standard_stripe_price}, ${product.extended_stripe_price})
            ON CONFLICT (id) DO NOTHING;
        `,
      ),
    );

    console.log(`Seeded ${insertedProducts.length} products`);

    return {
      createTable,
      products: insertedProducts,
    };
  } catch (error) {
    console.error("Error seeding products:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedProducts(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err,
  );
});
