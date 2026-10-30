import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP03",
  "number": 3,
  "title": "Bus Ticket Booking",
  "slug": "bus",
  "folder": "exp03-bus",
  "category": "Travel",
  "mode": "transport",
  "brand": "Miles & More",
  "tagline": "Good journeys start here.",
  "icon": "🚌",
  "label": "Buses",
  "features": [
    "Route search",
    "Seat selection",
    "Ticket printing",
    "Bus management"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Coastal Volvo",
      "category": "Volvo",
      "price": 1200,
      "stock": 8,
      "location": "Adyar",
      "description": "Coastal Volvo — a fictional volvo listing for the Miles & More academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Night Sleeper",
      "category": "Sleeper",
      "price": 2400,
      "stock": 9,
      "location": "Velachery",
      "description": "Night Sleeper — a fictional sleeper listing for the Miles & More academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "City Express",
      "category": "AC",
      "price": 3800,
      "stock": 10,
      "location": "OMR",
      "description": "City Express — a fictional ac listing for the Miles & More academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Sunrise Coach",
      "category": "Seater",
      "price": 6500,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Sunrise Coach — a fictional seater listing for the Miles & More academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "3",
  "page": 2,
  "pages": [
    2,
    3
  ],
  "source": "3.Userscan viewall their bookinghistory atthehotel.\n4.Userscanchangethebookingat anytime3 daysbeforethearrivaldate.\n5.Userscancancelthe bookingatany time3daysbeforethe arrivaldate.\n6.Userscancheck theroomavailability atthehotel beforetheybook aroom.\nAdministrator\n7.Administratorscanchangethe quantityandpriceofallfour typesofrooms.\n8.Administratorscan changeany specificbooking details.\n9.Administratorscan cancel anyspecificbooking.\n10.Administratorscanmodifythedetailsofstatic pagesincludingroominformation,aboutus\ninformation, contact us information, customer service Q&A details, local travel and shipping\nguide,and privacy policyafter login.\n11.Itshouldalsocontainabasicroomtypeintroduction,contactinformation,customerservice\nQ&A,local traveland shipping guide, andaprivacypolicy\n3.The online bus ticket booking system enables users to search for buses by route, date, and time, \nand view available seats. Users can create an account, log in, and manage their bookings \nthrough a personal dashboard. The booking process includes selecting seats, filling out \npassenger details, and making secure payments via an integrated payment gateway. Admins \ncan manage bus schedules, seat availability, and user accounts through an admin panel. Users \nreceive booking confirmation emails and can view their booking history. The website is mobile-\nresponsive, ensuring easy access on all devices.\nAdmin\nInthissystem,theadmincanmaintainalltheBusinformationandmaintainBuscategory,\ncommentsetc.\nInthissystem,theadmincanmaintaintheregisteredusers,managenews,andtheadmincangenerate\nreports and managethe wholesystem.\nLogin:\nLoginModuleincludesvariousutilitieslikeUserAuthentication,Change PasswordandForgot\nPassword.\nRegistration:\nThis website providessomefacilities users canbeRegistered in thiswebsite.user canusethisfacility\nso user can make aregistration\n.\nBooktheTicket:\nInthismodule,theadmincanaddanewbuscategoryusingthismodule.BusCategorycontains\nlikeVolvo, Slipper coach, coachetc.\nUpdateBusInformation:\nInthismodule,theadmincanaddorUpdateBususing thismodule.Itcontainsinformation\nabouttheBustype, photo, description,Locationofthetour,AvailableSeats inBus etc.\nCanceltheBookingTicket:\nInthisModule,theUser cancancelthebooking Ticket.\nComments:\nInthisModule,Users canPostCommentson aparticularBus.\nReportGeneration:\nThismodule is usedto generateareport.",
  "hue": 229
};
mount(experiment);
