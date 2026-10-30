import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP47",
  "number": 47,
  "title": "Phone Bill Payment",
  "slug": "phone-bill",
  "folder": "exp47-phone-bill",
  "category": "Finance",
  "mode": "phone",
  "brand": "Hello Account",
  "tagline": "Keep your connections simple.",
  "icon": "☎",
  "label": "Plans",
  "features": [
    "Partial payments",
    "Late fines",
    "Billing periods",
    "Receipt history"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Everyday Mobile",
      "category": "Mobile",
      "price": 499,
      "stock": 8,
      "location": "Adyar",
      "description": "Everyday Mobile — a fictional mobile listing for the Hello Account academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Family Connect",
      "category": "Family",
      "price": 899,
      "stock": 9,
      "location": "Velachery",
      "description": "Family Connect — a fictional family listing for the Hello Account academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Home Broadband",
      "category": "Broadband",
      "price": 1499,
      "stock": 10,
      "location": "OMR",
      "description": "Home Broadband — a fictional broadband listing for the Hello Account academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Talk More",
      "category": "Voice",
      "price": 2499,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Talk More — a fictional voice listing for the Hello Account academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "46",
  "page": 42,
  "pages": [
    42,
    43
  ],
  "source": "46.A customer accesses the online phone bill payment website to manage their monthly phone bill payments. \nUpon logging in, the customer is directed to their account dashboard, where they can view their current bill \ndetails, including the due date, outstanding amount, and any previous payments. The customer can choose \nto pay the entire bill or a custom amount, selecting from various payment options such as credit/debit cards, \nnet banking, or mobile wallets. After entering their payment information, they confirm the transaction, and \nthe system processes the payment securely. Upon successful completion, a confirmation message is displayed, \nand a receipt is emailed to the customer. The website also offers features like setting up recurring payments, \nviewing detailed billing history, and enabling notifications for upcoming due dates.\nADMIN\n•Login page\n•Page updated every month (Duration by start and end date), last date of payment \nFine amount calculation (each date after the last date Rs.10 will be added as fine)\nCUSTOMER\n•Registration Page\n•Login Page\n•Bill payment by any one payment method",
  "hue": 57
};
mount(experiment);
