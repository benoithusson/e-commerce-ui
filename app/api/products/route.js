// Fonction qui gère les requêtes HTTP de type GET
export async function GET(request) {
  // Liste de produits
  const products = [
    {
      id: 1,
      name: "Ski Jacket",
      price: 199.99,
      rating: 4.5,
      path: "baudrier.webp",
    },
    {
      id: 2,
      name: "Snowboard Boots",
      price: 149.99,
      rating: 4.2,
      path: "descendeur.webp",
    },
    {
      id: 3,
      name: "Ski Poles",
      price: 49.99,
      rating: 4.8,
      path: "chaussette.webp",
    },
    {
      id: 4,
      name: "Snowboard",
      price: 299.99,
      rating: 4.7,
      path: "doudoune.webp",
    },
    {
      id: 5,
      name: "Ski Goggles",
      price: 89.99,
      rating: 4.3,
      path: "chaussure.webp",
    },
    {
      id: 6,
      name: "Thermal Gloves",
      price: 39.99,
      rating: 4.6,
      path: "chaussure_rando.webp",
    },
    {
      id: 7,
      name: "Base Layer Pants",
      price: 59.99,
      rating: 4.4,
      path: "sac_noir.webp",
    },
    { id: 8, name: "Ski Boots", price: 249.99, rating: 4.9, path: "sac.webp" },
  ];

  // Retourner une réponse HTTP au format JSON
  return new Response(JSON.stringify(products), {
    headers: { "Content-Type": "application/json" },
  });
}
