import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP07",
  "number": 7,
  "title": "Beauty Parlour Appointments",
  "slug": "salon",
  "folder": "exp07-salon",
  "category": "Health",
  "mode": "booking",
  "brand": "Petal Studio",
  "tagline": "Make a little time for you.",
  "icon": "✂",
  "label": "Services",
  "features": [
    "Stylist selection",
    "Slot calendar",
    "Rescheduling",
    "Deposit simulation"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Signature Haircut",
      "category": "Hair",
      "price": 1200,
      "stock": 8,
      "location": "Adyar",
      "description": "Signature Haircut — a fictional hair listing for the Petal Studio academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Botanical Facial",
      "category": "Skin",
      "price": 2400,
      "stock": 9,
      "location": "Velachery",
      "description": "Botanical Facial — a fictional skin listing for the Petal Studio academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Bridal Styling",
      "category": "Bridal",
      "price": 3800,
      "stock": 10,
      "location": "OMR",
      "description": "Bridal Styling — a fictional bridal listing for the Petal Studio academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Classic Manicure",
      "category": "Nails",
      "price": 6500,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Classic Manicure — a fictional nails listing for the Petal Studio academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "7",
  "page": 7,
  "pages": [
    7
  ],
  "source": "7.The online beauty parlour appointment booking system allows users to browse \navailable services, view stylist profiles, and check appointment slots in real-time. Users \ncan register, log in, and manage their appointments through a personal dashboard. \nThe booking process includes selecting services, choosing a stylist, selecting a date and \ntime, and making secure payments via an integrated payment gateway. Admins can \nmanage service offerings, stylist schedules, and user accounts through a comprehensive \nadmin panel. Users receive appointment confirmation emails and reminders, with the \noption to reschedule or cancel appointments through their dashboard. The website is \nfully responsive, ensuring an optimal experience on all devices. Thiswebsite helps \ncustomers to search for any beauty parlour and book appointments as they preferable \ndate and time.\nHavereservationscalendar\n➢Create,edit,and cancelreservations\n➢Lockoutunavailablehours\n➢Get the crucial information for each date on the calendar\nCustomers’personal account page\n➢Upcomingreservations\n➢Reservationshistory\n➢Personaldata\nSalonmanagerandstaffmemberinordertocontrolandmanagereservations.\n➢Upcomingreservations\n➢Reservationscalendar\n➢Addreservation\n➢Editreservations\n➢SendanSMSor calltothecustomer\n➢customersleave feedbackabouttheir experiences andlearnfromtheirsuggestions.\nAccept online payments as a whole payment or as a partial deposit with Stripe or PayPal or\nwithone ofthe availablepayments\n➢Requirefull paymentoradeposit\n➢AcceptPayPalorStripe\n➢Automaticcancellationofunpaidreservations\n➢Wehavemorethan twentydifferent payments platforms integration add-ons",
  "hue": 17
};
mount(experiment);
