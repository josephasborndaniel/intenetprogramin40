import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP04",
  "number": 4,
  "title": "Train Reservation",
  "slug": "train",
  "folder": "exp04-train",
  "category": "Travel",
  "mode": "transport",
  "brand": "Rail & Roam",
  "tagline": "Take the scenic route.",
  "icon": "🚆",
  "label": "Trains",
  "features": [
    "PNR lookup",
    "Class and route",
    "Seat selection",
    "Cancellation refunds"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Southern Express",
      "category": "Sleeper",
      "price": 1200,
      "stock": 8,
      "location": "Adyar",
      "description": "Southern Express — a fictional sleeper listing for the Rail & Roam academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Blue Mountain Rail",
      "category": "AC",
      "price": 2400,
      "stock": 9,
      "location": "Velachery",
      "description": "Blue Mountain Rail — a fictional ac listing for the Rail & Roam academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Coromandel Express",
      "category": "Chair",
      "price": 3800,
      "stock": 10,
      "location": "OMR",
      "description": "Coromandel Express — a fictional chair listing for the Rail & Roam academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Valley Passenger",
      "category": "General",
      "price": 6500,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Valley Passenger — a fictional general listing for the Rail & Roam academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "4",
  "page": 4,
  "pages": [
    4
  ],
  "source": "4.The online train reservation system allows users to search for trains by route, date, and time, \nand view available seats and classes. Users can register, log in, and manage their reservations \nthrough a personal dashboard. The booking process involves selecting seats, entering passenger \ndetails, and making secure payments via an integrated payment gateway. Admins can manage \ntrain schedules, seat availability, and user accounts through a comprehensive admin panel. \nUsers receive booking confirmation emails andcan view their booking history and print tickets \nfrom their dashboard. The website features real-time seat availability updates and is fully \nresponsive for seamless use on all devices.\nTheReservationsystemshouldcontainthefollowingfeatures:\n1.If a passenger wants to reserve ticket(s), firstly, he/she has to log in to the Railway\nsystem with valid credentials. Then, the passenger has to provide his/her detailswith \nthe date of the journey, names of the passengers and their details, originstation\ndetails,destinationstationdetails,andtheclasstypeoftherequiredticket(s).\n2.The Railway Reservation System will provide the available Train-list, and Seat-\navailability,via-details.\n3.To book a ticket passengers can pay through online/offline mode. After successful\npayment of the ticket fare the System will generate the ticket and PNR no. will be\ngiven to the passenger. The System also keeps the payment details and sends them\ntothesystemAdmin.\n4.The Passenger can check PNR status (confirmed, RAC, waiting list) by enteringthe\nPNRno.intotheReservationsystem.",
  "hue": 266
};
mount(experiment);
