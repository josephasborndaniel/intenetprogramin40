import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP27",
  "number": 27,
  "title": "Online Bus Pass",
  "slug": "bus-pass",
  "folder": "exp27-bus-pass",
  "category": "Travel",
  "mode": "pass",
  "brand": "Campus Commute",
  "tagline": "Your everyday journey, simplified.",
  "icon": "▣",
  "label": "Routes",
  "features": [
    "Pass applications",
    "Monthly renewal",
    "Wallet",
    "Conductor verification"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Adyar to SIMATS",
      "category": "Student",
      "price": 499,
      "stock": 8,
      "location": "Adyar",
      "description": "Adyar to SIMATS — a fictional student listing for the Campus Commute academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Tambaram to SIMATS",
      "category": "Route",
      "price": 899,
      "stock": 9,
      "location": "Velachery",
      "description": "Tambaram to SIMATS — a fictional route listing for the Campus Commute academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Velachery to SIMATS",
      "category": "Student",
      "price": 1499,
      "stock": 10,
      "location": "OMR",
      "description": "Velachery to SIMATS — a fictional student listing for the Campus Commute academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Central to SIMATS",
      "category": "Route",
      "price": 2499,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Central to SIMATS — a fictional route listing for the Campus Commute academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "27",
  "page": 25,
  "pages": [
    25,
    26
  ],
  "source": "27.The bus pass will differ for different types of users. In this bus pass, all the required \ndetailssuch as candidate’s name, address, date of birth, mail id, name of the school, \nvalidity period,the amount paid (free for government school students) and photocopy \nof the candidate areprovided. Instead of school details, working organization details \nwill be provided in route buspass.Therenewalprocesscanbedonemonthlyasperuser\nwish.Basedonthatrenewalperiodamountwill bededucted.\nAdmin:\nLogin\nManagestudent& routepass\nManageconductorlogin\nApprovebuspass\nGenerateQRCode\nCreateBusdetails\nCreateRouteInformation\noFrom to, Time, RouteStopping\nUser:\nRegister\nLogin\nAddMoney–eWallet\nBuyBuseTicket\nApplyNewbuspass\nRenewalbuspass\nApplyStudent&Routepass\nGetQR CodeforBus pass\nCalculateexpectedtimetoreach\nConductor:\nLogin\nScanQR\nVerifybuspassID\nVerifyBusticket\nUpdatebuslocation",
  "hue": 37
};
mount(experiment);
