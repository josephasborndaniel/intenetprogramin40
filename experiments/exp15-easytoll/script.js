import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP15",
  "number": 15,
  "title": "Online Toll Payment — EasyToll",
  "slug": "easytoll",
  "folder": "exp15-easytoll",
  "category": "Finance",
  "mode": "pass",
  "brand": "EasyToll",
  "tagline": "Less waiting. More moving.",
  "icon": "↗",
  "label": "Toll gates",
  "features": [
    "Wallet",
    "Advance tickets",
    "Pass approval",
    "Pass verification"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Coastal Toll Gate",
      "category": "Car",
      "price": 499,
      "stock": 8,
      "location": "Adyar",
      "description": "Coastal Toll Gate — a fictional car listing for the EasyToll academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Garden Toll Plaza",
      "category": "Bus",
      "price": 899,
      "stock": 9,
      "location": "Velachery",
      "description": "Garden Toll Plaza — a fictional bus listing for the EasyToll academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Valley Toll Gate",
      "category": "Truck",
      "price": 1499,
      "stock": 10,
      "location": "OMR",
      "description": "Valley Toll Gate — a fictional truck listing for the EasyToll academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Ring Road Plaza",
      "category": "Car",
      "price": 2499,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Ring Road Plaza — a fictional car listing for the EasyToll academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "15",
  "page": 13,
  "pages": [
    13,
    14
  ],
  "source": "15.EasyToll, an advanced online toll payment system, simplifies the process of managing \ntoll fees for drivers. The website allows users to register and log in to access their toll \naccount, where they can view and pay outstanding toll charges from various toll gates. \nKey functionalities include real-time toll balance updates, automatic payment options, \nand the ability to add or update vehicle details. Users can view detailed transaction \nhistory, set up recurring payments for frequent routes, and receive notifications for \nupcoming toll charges. The platform also supports secure payment methods and \nprovides a user-friendly interface for managing toll accounts and reviewing payment \nsummaries. EasyToll aims to enhance the convenience of toll payments and reduce wait \ntimes at toll booths,Thiswebsite should help the user to pay toll in advance therefore \nnot to wait in queue while travelling.\nAdmin:\nLogin\nManageUser & Toll pass\nManageTolllogin\nApprovetollpass\nGenerateQRCode\nCreateTolldetails\nUser:\nRegister\nLogin\nAddMoney–eWallet\nBuyTolleTicket\nApplyNewtollpass\nRenewaltollpass\nApplyToll pass\nGetQR CodeforToll pass\nTollGateUser:\nLogin\nScanQR\nVerifytollpassID\nVerifyTollticket\nUpdatetolllocation",
  "hue": 313
};
mount(experiment);
