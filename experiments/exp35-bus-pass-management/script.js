import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP35",
  "number": 35,
  "title": "Bus Pass Management",
  "slug": "bus-pass-management",
  "folder": "exp35-bus-pass-management",
  "category": "Travel",
  "mode": "pass",
  "brand": "Route & Ready",
  "tagline": "Make the everyday journey easier.",
  "icon": "▣",
  "label": "Routes",
  "features": [
    "Student and route passes",
    "Renewals",
    "QR simulation",
    "Arrival estimate"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "North Campus Route",
      "category": "Student",
      "price": 499,
      "stock": 8,
      "location": "Adyar",
      "description": "North Campus Route — a fictional student listing for the Route & Ready academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "South Campus Route",
      "category": "Route",
      "price": 899,
      "stock": 9,
      "location": "Velachery",
      "description": "South Campus Route — a fictional route listing for the Route & Ready academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "City Loop",
      "category": "Student",
      "price": 1499,
      "stock": 10,
      "location": "OMR",
      "description": "City Loop — a fictional student listing for the Route & Ready academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Station Connector",
      "category": "Route",
      "price": 2499,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Station Connector — a fictional route listing for the Route & Ready academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "35",
  "page": 32,
  "pages": [
    32,
    33
  ],
  "source": "35. The bus pass will differ for different types of users. In this bus pass, all the required details such \nas candidate’s name, address, date of birth, mail id, name of the school, validity period, the amount \npaid (free for government school students) and photocopy of the candidate are provided. Instead of \nschool details, working organization details will be provided in route bus pass. The renewal process \ncan be done monthly as per user wish. Based on that renewal period amount will be deducted. \n1.Admin: \n• Login \n• Manage student & route pass \n• Manage conductor login \n• Approve bus pass \n• Generate QR Code \n• Create Bus details \n• Create Route Information \no From to , Time , Route Stopping \n2.User: \n• Register \n• Login \n• Add Money –eWallet \n• Buy Bus eTicket \n• Apply New bus pass \n• Renewal bus pass \n• Apply Student & Route pass \n• Get QR Code for Bus pass \n• Calculate expected time to reach \n3.Conductor : \no Login o Scan QR \no Verify bus pass ID\no Verify Bus ticket \no Update bus location",
  "hue": 333
};
mount(experiment);
