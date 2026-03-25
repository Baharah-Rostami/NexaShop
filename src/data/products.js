const products = [
  {
    id: 1,
    title: "UltraBook Pro X",
    category: "Laptop",
    price: 1200,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: 2,
    title: "NexaBook Air",
    category: "Laptop",
    price: 999,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },
  {
    id: 3,
    title: "Gaming Beast GX",
    category: "Laptop",
    price: 1500,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
  },
  {
    id: 4,
    title: "SmartPhone Elite",
    category: "Mobile",
    price: 800,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 5,
    title: "Wireless Headphones X",
    category: "Accessories",
    price: 199,
    image: "https://i.rtings.com/assets/products/9Ep3Q2x3/logitech-g-pro-x-2-lightspeed-wireless/design-medium.jpg?format=auto",
  },
  {
    id: 6,
    title: "4K Ultra Monitor",
    category: "Monitor",
    price: 400,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
  },
  {
    id: 7,
    title: "Mechanical Keyboard Pro",
    category: "Accessories",
    price: 150,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: 8,
    title: "Gaming Mouse RGB",
    category: "Accessories",
    price: 80,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
  },
  {
    id: 9,
    title: "Tablet Plus",
    category: "Tablet",
    price: 600,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
  },
  {
    id: 10,
    title: "Smartwatch NexaFit",
    category: "Wearable",
    price: 250,
    image: "https://www.myg.in/images/detailed/114/10_8184cfcf-85aa-4077-bf51-90191c5b03df-removebg-preview.png",
  },
];

export function getProducts(){
    return products
};