import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP33",
  "number": 33,
  "title": "KodaikanalEats / Restaurant and Room Booking",
  "slug": "kodaikanaleats",
  "folder": "exp33-kodaikanaleats",
  "category": "Travel",
  "mode": "booking",
  "brand": "KodaikanalEats",
  "tagline": "Good food. Misty views. Stay awhile.",
  "icon": "♨",
  "label": "Dining and stays",
  "features": [
    "Dining reservations",
    "Room availability",
    "Seasonal stays",
    "Room staff"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Pinewood Table",
      "category": "Restaurant",
      "price": 1200,
      "stock": 8,
      "location": "Adyar",
      "description": "Pinewood Table — a fictional restaurant listing for the KodaikanalEats academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Lakeview Kitchen",
      "category": "Restaurant",
      "price": 2400,
      "stock": 9,
      "location": "Velachery",
      "description": "Lakeview Kitchen — a fictional restaurant listing for the KodaikanalEats academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Single Hill Room",
      "category": "Single room",
      "price": 3800,
      "stock": 10,
      "location": "OMR",
      "description": "Single Hill Room — a fictional single room listing for the KodaikanalEats academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Double Valley Room",
      "category": "Double room",
      "price": 6500,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Double Valley Room — a fictional double room listing for the KodaikanalEats academic demonstration.",
      "rating": 4.6
    },
    {
      "id": "item-5",
      "name": "Deluxe Mist Suite",
      "category": "Deluxe room",
      "price": 1200,
      "stock": 12,
      "location": "Adyar",
      "description": "Deluxe Mist Suite — a fictional deluxe room listing for the KodaikanalEats academic demonstration.",
      "rating": 4.7
    }
  ],
  "printed": "33",
  "page": 31,
  "pages": [
    31
  ],
  "source": "33. KodaikanalEats is a sleek online platform designed to simplify restaurant bookings in the picturesque \ntown of Kodaikanal. The website features an extensive list of local dining options, including fine dining, \ncasual eateries, and specialty restaurants. Keyfunctionalities include a search and filter system to find \nrestaurants based on cuisine, location, and ratings, as well as an easy-to-use booking system where users can \nreserve tables, select dining times, and view available slots. The site also provides detailed restaurant profiles \nwith menus, photos, and customer reviews. Additional features include real-time booking confirmations, a \n\"Special Offers\" section for exclusive deals, and a \"Contact Us\" page for customer support and inquiries. \nKodaikanalEats aims to enhance the dining experience by providing a convenient and efficient way to explore \nand book restaurants in Kodaikanal.\n1) Admin detail –Login, Registration form detail\n2) Suit detail and cost–single room, double rooms, deluxe rooms\n3) Rooms availability detail\n4) Online booking system detail-Seasonal / Non-seasonal\n5) Room boys availably detail\n6) Customer detail",
  "hue": 259
};
mount(experiment);
