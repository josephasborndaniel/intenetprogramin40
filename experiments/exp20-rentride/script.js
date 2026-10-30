import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP20",
  "number": 20,
  "title": "Vehicle Rental — RentRide",
  "slug": "rentride",
  "folder": "exp20-rentride",
  "category": "Travel",
  "mode": "booking",
  "brand": "RentRide",
  "tagline": "The right ride for every plan.",
  "icon": "🚗",
  "label": "Vehicles",
  "features": [
    "Date availability",
    "Vehicle filters",
    "Booking approval",
    "Rental history"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Swift City Hatchback",
      "category": "Car",
      "price": 1200,
      "stock": 8,
      "location": "Adyar",
      "description": "Swift City Hatchback — a fictional car listing for the RentRide academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Terrain SUV",
      "category": "SUV",
      "price": 2400,
      "stock": 9,
      "location": "Velachery",
      "description": "Terrain SUV — a fictional suv listing for the RentRide academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Cargo Mini Truck",
      "category": "Truck",
      "price": 3800,
      "stock": 10,
      "location": "OMR",
      "description": "Cargo Mini Truck — a fictional truck listing for the RentRide academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Family Sedan",
      "category": "Car",
      "price": 6500,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Family Sedan — a fictional car listing for the RentRide academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "20",
  "page": 18,
  "pages": [
    18,
    19
  ],
  "source": "20.RentRide is a modern online platform designed for convenient vehicle rentals. The website \nallows users to browse a diverse fleet of vehicles, including cars, trucks, and SUVs, based on \ntheir needs and preferences. Key functionalities include user registration and login, a search \nfeature with filters for vehicle type, rental duration, and location, and detailed vehicle \ndescriptions with photos and pricing. Customers can book vehicles, manage their reservations, \nand view rental history through a personalized dashboard. The platform supports secure \npayment methods, provides real-time booking confirmations, and offers 24/7 customer support \nfor any rental issues. RentRide aims to simplify the vehicle rental process, ensuring a seamless \nand efficient experience for users.KeyFeatures\nSearchModule\nAppointmentBooking\nCheck-informSubmitting\nAppointmentmanagement\nScheduleatiming\nPastappointmentManagement\nReviews\nAdmin\nLogin\nAddVehicle\nManageVehicledetails\nType,Price,Etc\nManageBookingdetails\nApproveUserBooking\nMy profile\nUser\nRegister\nLogin\nSearchVehicledetails\nSelectVehicle& Make Booking\nName,CustomerNo, Address,Type\nViewBooking Status\nMyprofile",
  "hue": 138
};
mount(experiment);
