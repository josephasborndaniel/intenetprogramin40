import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP24",
  "number": 24,
  "title": "Travel Agency — Wanderlust Travels",
  "slug": "wanderlust",
  "folder": "exp24-wanderlust",
  "category": "Travel",
  "mode": "booking",
  "brand": "Wanderlust Travels",
  "tagline": "Collect moments, not miles.",
  "icon": "☀",
  "label": "Trips",
  "features": [
    "Trip search",
    "Accommodation",
    "Food and routes",
    "Booking management"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Kodaikanal Escape",
      "category": "Mountains",
      "price": 1200,
      "stock": 8,
      "location": "Adyar",
      "description": "Kodaikanal Escape — a fictional mountains listing for the Wanderlust Travels academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Coorg Coffee Trail",
      "category": "Nature",
      "price": 2400,
      "stock": 9,
      "location": "Velachery",
      "description": "Coorg Coffee Trail — a fictional nature listing for the Wanderlust Travels academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Mysore Heritage",
      "category": "Heritage",
      "price": 3800,
      "stock": 10,
      "location": "OMR",
      "description": "Mysore Heritage — a fictional heritage listing for the Wanderlust Travels academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Pondicherry Weekend",
      "category": "Coast",
      "price": 6500,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Pondicherry Weekend — a fictional coast listing for the Wanderlust Travels academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "24",
  "page": 22,
  "pages": [
    22,
    23
  ],
  "source": "24.Wanderlust Travels is a comprehensive online travel agency platform designed to make trip \nplanning and booking effortless. The website features a wide range of travel options, including \nflights, hotels, car rentals, and vacation packages. Key functionalities include user registration \nand login, a powerful search engine for finding travel deals, and detailed descriptions of \ndestinations, accommodations, and itineraries. Customers can book and manage their travel \narrangements, receive booking confirmations, and access travel guides and recommendations. \nThe platform also offers secure payment options, customer support for pre-and post-booking \nqueries, and personalized travel suggestions based on user preferences. Wanderlust Travels \naims to provide a seamless, one-stop solution for all travel needs, ensuring an enjoyable and \nhassle-free experience. Thesystem allows one to easily access the relevant information and \nmake necessary travelarrangements. Users can decide about places they want to visit and make \nbookings online fortraveland accommodation.\nUser\nAdmin\nUSER\nRegister\nLogin\nViewFoodDetails\nViewHostelDetails\nViewRouteDetails\nMyBookAccommodation\nADMIN\nLogin\nPostTourismDetails\nManageFoodDetails\nManageHotelDetails\nManageRouteDetails\nViewBookingDetails",
  "hue": 286
};
mount(experiment);
