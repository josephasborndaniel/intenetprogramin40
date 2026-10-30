import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP05",
  "number": 5,
  "title": "Flight Reservation",
  "slug": "flight",
  "folder": "exp05-flight",
  "category": "Travel",
  "mode": "transport",
  "brand": "Cloudline",
  "tagline": "Your next horizon awaits.",
  "icon": "✈",
  "label": "Flights",
  "features": [
    "Flight search",
    "Seat inventory",
    "E-tickets",
    "Feedback and reports"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Chennai to Delhi",
      "category": "Economy",
      "price": 1200,
      "stock": 8,
      "location": "Adyar",
      "description": "Chennai to Delhi — a fictional economy listing for the Cloudline academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Chennai to Mumbai",
      "category": "Business",
      "price": 2400,
      "stock": 9,
      "location": "Velachery",
      "description": "Chennai to Mumbai — a fictional business listing for the Cloudline academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Bengaluru to Kochi",
      "category": "Economy",
      "price": 3800,
      "stock": 10,
      "location": "OMR",
      "description": "Bengaluru to Kochi — a fictional economy listing for the Cloudline academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Chennai to Hyderabad",
      "category": "Premium",
      "price": 6500,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Chennai to Hyderabad — a fictional premium listing for the Cloudline academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "5",
  "page": 4,
  "pages": [
    4,
    5
  ],
  "source": "5.The Reservation system should store all train details, fare details (by zone, class,\nand date wise), PNR no, date of trains, etc. This maintenance should be controlled\nbytheAdmin.\n6.The System also has refund rules which have a date of reservation, ticket fare, and\nrefundable percentage. The passenger can simply cancel the ticket(s) by entering\nthe PNR no and a cancel ticket request. After cancellation, the admin will pass the\nrefundable amount to the System and the System will give the refundable amount\ntothepassenger.\n5.The online flight reservation system enables users to search for flights by \ndestination, date, and class, displaying available options with real-time seat availability. \nUsers can register, log in, and manage their reservations via a personal dashboard. The\nbooking process includes selecting flights, choosing seats, entering passenger details, and \nmaking secure payments through an integrated payment gateway. Admins can manage \nflight schedules, seat inventory, and user accounts using an advanced admin panel. Users \nreceive booking confirmation emails with e-tickets and can view their booking history and \ntravel itineraries. The website is fully responsive, ensuring an optimal experience on all \ndevices.The airline reservation system is a web-based system that helps in consolidating \nflight data -flight schedules, seat availability, flight fares and reservations from all \nairlines with the help of global distribution systems and provides real-time inventory and \nrates for customers and travel agents to book flight tickets online.\nAdministratorUserLoginPage\nForgotPasswordPage\nSearchFlightPage\nBookTicketPage\nTicketPaymentPage\nMyTicketPage\nCancelTicketPage\nCustomerFeedback\nAdminReport\nSearch FlightPage\nViewBooking Status Page\nPrintTicketPage",
  "hue": 303
};
mount(experiment);
