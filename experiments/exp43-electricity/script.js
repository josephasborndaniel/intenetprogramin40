import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP43",
  "number": 43,
  "title": "Electricity Bill Payment",
  "slug": "electricity",
  "folder": "exp43-electricity",
  "category": "Finance",
  "mode": "electricity",
  "brand": "Current & Clear",
  "tagline": "A brighter way to manage bills.",
  "icon": "ϟ",
  "label": "Connections",
  "features": [
    "Progressive tariffs",
    "Late fines",
    "Bill payments",
    "Configurable rates"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Domestic Connection",
      "category": "Domestic",
      "price": 499,
      "stock": 8,
      "location": "Adyar",
      "description": "Domestic Connection — a fictional domestic listing for the Current & Clear academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Commercial Connection",
      "category": "Commercial",
      "price": 899,
      "stock": 9,
      "location": "Velachery",
      "description": "Commercial Connection — a fictional commercial listing for the Current & Clear academic demonstration.",
      "rating": 4.4
    }
  ],
  "printed": "42",
  "page": 39,
  "pages": [
    39,
    40
  ],
  "source": "42.A customer visits the online electricity bill payment website to conveniently manage their \nelectricity payments. After logging in, they are directed to the dashboard, where they can view their \ncurrent bill amount, due date, and payment history. The customer enters their payment details, \nselects a preferred payment method (e.g., credit card, debit card, net banking, or digital wallet), and \nconfirms the transaction. Upon successful payment, a receipt is generated, which can be downloaded \nor emailed. The website also offers options for setting up automatic payments and sending bill \nreminders via SMS or email.\nADMIN\noLogin page\noUpdating the formula for the calculation of bill for each customer with respect to   \nthe given constraints,\noIf the type of the EB connection is domestic, Calculate the amount to be paid as follows\noFirst 100 units –Rs. 1 per unit\no101-200 units –Rs. 2.50 per unit\no201-500 Its –Rs. 4 per unit\no501 units –Rs. 6 per unit\noIf the type of the EB connection is commercial, Calculate the amount to be paid as follows\noFirst 100 units –Rs. 2 per unit\no101-200 units –Rs. 4.50 per unit\no201-500 its –Rs. 6 per unit\no501 units –Rs. 7 Per unit\noPage updated every two months (Duration by start and end date), last date of payment \noFine amount calculation (each date after the last date Rs.10 will be added as fine.\nCUSTOMER\noRegistration Page\noLogin Page\noBill payment by any one payment method",
  "hue": 269
};
mount(experiment);
