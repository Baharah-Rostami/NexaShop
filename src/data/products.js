const products = [
  {
    id: 1,
    title: "UltraBook Pro X",
    category: "Laptop",
    price: 1200,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFevUGWmHfdhpyFZWpC2HInq9Abr0v3ypP8A&s",
    description:
      "A powerful ultrabook with a sleek design, perfect for professionals and everyday productivity.",
  },
  {
    id: 2,
    title: "MacBook Air",
    category: "Laptop",
    price: 999,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    description:
      "Lightweight and portable laptop with long battery life, ideal for students and remote work.",
  },
  {
    id: 3,
    title: "Gaming Beast GX",
    category: "Laptop",
    price: 1500,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
    description:
      "High-performance gaming laptop with powerful graphics and fast processing for intense gameplay.",
  },
  {
    id: 4,
    title: "SmartPhone Elite",
    category: "Mobile",
    price: 800,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    description:
      "A premium smartphone with a stunning display, fast processor, and advanced camera system.",
  },
  {
    id: 5,
    title: "Wireless Headphones X",
    category: "Accessories",
    price: 199,
    image: "https://i.rtings.com/assets/products/9Ep3Q2x3/logitech-g-pro-x-2-lightspeed-wireless/design-medium.jpg?format=auto",
    description:
      "Noise-cancelling wireless headphones delivering immersive sound and all-day comfort.",
  },
  {
    id: 6,
    title: "4K Ultra Monitor",
    category: "Monitor",
    price: 400,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
    description:
      "Crystal-clear 4K monitor with vibrant colors, perfect for design, gaming, and multitasking.",
  },
  {
    id: 7,
    title: "Mechanical Keyboard Pro",
    category: "Accessories",
    price: 150,
    image: "https://cdn.shopify.com/s/files/1/0631/9590/6271/files/1_41556193-6100-460e-979f-5a1893b19db8.jpg?v=1651267139",
    description:
      "Durable mechanical keyboard with responsive keys, ideal for typing and gaming enthusiasts.",
  },
  {
    id: 8,
    title: "Gaming Mouse RGB",
    category: "Accessories",
    price: 80,
    image: "https://cdn.shopify.com/s/files/1/0012/4957/4961/files/Redragon_M616_RGB_Gaming_Mouse_7.jpg?v=1736930058",
    description:
      "Ergonomic gaming mouse with customizable RGB lighting and precision tracking.",
  },
  {
    id: 9,
    title: "Tablet Plus",
    category: "Tablet",
    price: 600,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREnK0xixhneJpB-ay3_vWJFJIbU-3vAx6vWA&s",
    description:
      "Versatile tablet with a large display, perfect for entertainment, reading, and light work.",
  },
  {
    id: 10,
    title: "Smartwatch NexaFit",
    category: "Wearable",
    price: 250,
    image: "https://www.myg.in/images/detailed/114/10_8184cfcf-85aa-4077-bf51-90191c5b03df-removebg-preview.png",
    description:
      "Smart fitness watch with health tracking, notifications, and a stylish modern design.",
  },
];

export function getProducts(){
    return products;
};
export function getProductsID(id){
    return products.find((p) => p.id === Number(id))
};