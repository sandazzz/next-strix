const products = [
  {
    id: 1,
    image: "/assets/pexels-yan-krukau-9072305.jpg",
    name: "Coach 1",
    game: "Valorant",
    description: "This is a description",
    lite_plan: 25,
    standard_plan: 75,
    extended_plan: 150,
    lite_stripe_price: "price_1O29P1EkyNcc8Yhbrvc5FieJ",
    standard_stripe_price: "price_1O29P1EkyNcc8YhbcixYvblu",
    extended_stripe_price: "price_1O29P2EkyNcc8YhbpDU54GoY",
  },
  {
    id: 2,
    image: "/assets/pexels-yan-krukau-9072305.jpg",
    name: "Coach 2",
    game: "Apex Legends",
    description: "This is a description",
    lite_plan: 25,
    standard_plan: 75,
    extended_plan: 150,
    lite_stripe_price: "price_1O29PiEkyNcc8YhbJfS6n6KD",
    standard_stripe_price: "price_1O29PiEkyNcc8Yhbx1Cf0eV4",
    extended_stripe_price: "price_1O29PiEkyNcc8YhbF2uWUKHo",
  },
  {
    id: 3,
    image: "/assets/pexels-yan-krukau-9072305.jpg",
    name: "Coach 3",
    game: "Rocket League",
    description: "This is a description",
    lite_plan: 25,
    standard_plan: 75,
    extended_plan: 150,
    lite_stripe_price: "price_1O29TaEkyNcc8YhbvwihUkug",
    standard_stripe_price: "price_1O29TaEkyNcc8YhbVWSKCRS7",
    extended_stripe_price: "price_1O29TaEkyNcc8YhbJBT6k8Q6",
  },
  {
    id: 4,
    image: "/assets/pexels-yan-krukau-9072305.jpg",
    name: "Coach 4",
    game: "Valorant",
    description: "This is a description",
    lite_plan: 25,
    standard_plan: 75,
    extended_plan: 150,
    lite_stripe_price: "price_1O29V2EkyNcc8Yhb468k4Exf",
    standard_stripe_price: "price_1O29V2EkyNcc8Yhbbz6G9ck0",
    extended_stripe_price: "price_1O29V3EkyNcc8YhbTC3E8Wkl",
  },
  {
    id: 5,
    image: "/assets/pexels-yan-krukau-9072305.jpg",
    name: "Coach 5",
    game: "LoL",
    description: "This is a description",
    lite_plan: 25,
    standard_plan: 75,
    extended_plan: 150,
    lite_stripe_price: "price_1O29VmEkyNcc8Yhb619VE5rp",
    standard_stripe_price: "price_1O29VmEkyNcc8YhbU9hAibCq",
    extended_stripe_price: "price_1O29VmEkyNcc8YhbrDEiqOOR",
  },
  {
    id: 6,
    image: "/assets/pexels-yan-krukau-9072305.jpg",
    name: "Coach 6",
    game: "Apex Legends",
    description: "This is a description",
    lite_plan: 25,
    standard_plan: 75,
    extended_plan: 150,
    lite_stripe_price: "price_1O29WNEkyNcc8YhbDcDULnmd",
    standard_stripe_price: "price_1O29WNEkyNcc8YhbJxQpO8WH",
    extended_stripe_price: "price_1O29WNEkyNcc8YhbfxKgGkUg",
  },
  {
    id: 7,
    image: "/assets/pexels-yan-krukau-9072305.jpg",
    name: "Coach 7",
    game: "Apex Legends",
    description: "This is a description",
    lite_plan: 25,
    standard_plan: 75,
    extended_plan: 150,
    lite_stripe_price: "price_1O29WxEkyNcc8YhbRZFNidxU",
    standard_stripe_price: "price_1O29WxEkyNcc8Yhb22EgMpx7",
    extended_stripe_price: "price_1O29WxEkyNcc8YhbaCasdU9w",
  },
  {
    id: 8,
    image: "/assets/pexels-yan-krukau-9072305.jpg",
    name: "Coach 8",
    game: "Rocket League",
    description: "This is a description",
    lite_plan: 25,
    standard_plan: 75,
    extended_plan: 150,
    lite_stripe_price: "price_1O29XTEkyNcc8YhbGQ4QLx04",
    standard_stripe_price: "price_1O29XTEkyNcc8Yhb5vp4R5l2",
    extended_stripe_price: "price_1O29XTEkyNcc8YhbJhHtSy1v",
  },
  {
    id: 9,
    image: "/assets/pexels-yan-krukau-9072305.jpg",
    name: "Coach 9",
    game: "CS:GO",
    description: "This is a description",
    lite_plan: 25,
    standard_plan: 75,
    extended_plan: 150,
    lite_stripe_price: "price_1O29YBEkyNcc8YhboavzN6ln",
    standard_stripe_price: "price_1O29YBEkyNcc8YhbcBaSvz5B",
    extended_stripe_price: "price_1O29YBEkyNcc8YhbOnOMJfBu",
  },
  {
    id: 10,
    image: "/assets/pexels-yan-krukau-9072305.jpg",
    name: "Coach 10",
    game: "LoL",
    description: "This is a description",
    lite_plan: 25,
    standard_plan: 75,
    extended_plan: 150,
    lite_stripe_price: "price_1O29YeEkyNcc8YhbonHZYZyK",
    standard_stripe_price: "price_1O29YeEkyNcc8YhbeX7dz0um",
    extended_stripe_price: "price_1O29YeEkyNcc8YhbaqXni6Mi",
  },
  {
    id: 11,
    image: "/assets/pexels-yan-krukau-9072305.jpg",
    name: "Coach 11",
    game: "CS:GO",
    description: "This is a description",
    lite_plan: 25,
    standard_plan: 75,
    extended_plan: 150,
    lite_stripe_price: "price_1O29ZAEkyNcc8Yhb0kv8opew",
    standard_stripe_price: "price_1O29ZAEkyNcc8Yhbvz8Pk9XT",
    extended_stripe_price: "price_1O29ZCEkyNcc8YhbIGxKoofA",
  },
  {
    id: 12,
    image: "/assets/pexels-yan-krukau-9072305.jpg",
    name: "Coach 12",
    game: "CS:GO",
    description: "This is a description",
    lite_plan: 25,
    standard_plan: 75,
    extended_plan: 150,
    lite_stripe_price: "price_1O29ZdEkyNcc8YhbcLhStwWa",
    standard_stripe_price: "price_1O29ZdEkyNcc8Yhb9Nwb6R7P",
    extended_stripe_price: "price_1O29ZdEkyNcc8Yhb2vf5v9Xf",
  },
  {
    id: 13,
    image: "/assets/pexels-yan-krukau-9072305.jpg",
    name: "Coach 13",
    game: "Apex Legends",
    description: "This is a description",
    lite_plan: 25,
    standard_plan: 75,
    extended_plan: 150,
    lite_stripe_price: "price_1O29a2EkyNcc8YhbyaDFuNZf",
    standard_stripe_price: "price_1O29a2EkyNcc8YhbTBWRgGZW",
    extended_stripe_price: "price_1O29a2EkyNcc8Yhbei199Sjt",
  },
  {
    id: 14,
    image: "/assets/pexels-yan-krukau-9072305.jpg",
    name: "Coach 14",
    game: "LoL",
    description: "This is a description",
    lite_plan: 25,
    standard_plan: 75,
    extended_plan: 150,
    lite_stripe_price: "price_1O29afEkyNcc8YhbAuAO9NSa",
    standard_stripe_price: "price_1O29afEkyNcc8YhbyQMsyyiA",
    extended_stripe_price: "price_1O29afEkyNcc8YhbfLGQL4WV",
  },
  {
    id: 15,
    image: "/assets/pexels-yan-krukau-9072305.jpg",
    name: "Coach 15",
    game: "Rocket League",
    description: "This is a description",
    lite_plan: 25,
    standard_plan: 75,
    extended_plan: 150,
    lite_stripe_price: "price_1O29b7EkyNcc8YhblQJF3yLh",
    standard_stripe_price: "price_1O29b7EkyNcc8Yhb3U7mHuMT",
    extended_stripe_price: "price_1O29b7EkyNcc8Yhb9KCK25fr",
  },
  {
    id: 16,
    image: "/assets/pexels-yan-krukau-9072305.jpg",
    name: "Coach 16",
    game: "Valorant",
    description: "This is a description",
    lite_plan: 25,
    standard_plan: 75,
    extended_plan: 150,
    lite_stripe_price: "price_1O29beEkyNcc8YhbJI8fGqzn",
    standard_stripe_price: "price_1O29beEkyNcc8Yhb6ij9DpuC",
    extended_stripe_price: "price_1O29beEkyNcc8YhbOfnQbDzH",
  },
];

module.exports = {
  products,
};