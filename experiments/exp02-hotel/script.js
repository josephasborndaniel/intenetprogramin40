import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP02",
  "number": 2,
  "title": "Hotel Room Booking",
  "slug": "hotel",
  "folder": "exp02-hotel",
  "category": "Travel",
  "mode": "booking",
  "brand": "The Fern House",
  "tagline": "A little escape. A better stay.",
  "icon": "🛎",
  "label": "Rooms",
  "features": [
    "Date availability",
    "Room reservations",
    "Three-day changes",
    "Room inventory"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Garden Single",
      "category": "Single",
      "price": 1200,
      "stock": 8,
      "location": "Adyar",
      "description": "Garden Single — a fictional single listing for the The Fern House academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Courtyard Double",
      "category": "Double",
      "price": 2400,
      "stock": 9,
      "location": "Velachery",
      "description": "Courtyard Double — a fictional double listing for the The Fern House academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Hillview Deluxe",
      "category": "Deluxe",
      "price": 3800,
      "stock": 10,
      "location": "OMR",
      "description": "Hillview Deluxe — a fictional deluxe listing for the The Fern House academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Heritage Suite",
      "category": "Suite",
      "price": 6500,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Heritage Suite — a fictional suite listing for the The Fern House academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "2",
  "page": 1,
  "pages": [
    1,
    2
  ],
  "source": "2.The online hotel room booking website allows users to search for hotels based on destination, \ndates, and number of guests, offering detailed listings with room options, prices, amenities, and \nreviews. Users can create accounts, log in, and manage their bookings through a user-friendly \ndashboard. The booking process includes checking room availability, filling out a booking form, \nand completing secure payments via an integrated payment gateway. Post-booking, users \nreceive confirmation emails and can leave reviews and ratings. Admins manage hotel listings, \nroom availability, and user accounts through a dedicated admin panel. The website is fully \nresponsive, ensuring seamless access on all devices.\nFunctionalities:\nUsers.\n1.Userscanregister at thehotel andthentheycanviewormodifytheir profile.\n2.Userscanbook aroomonany specificdate.",
  "hue": 192
};
mount(experiment);
