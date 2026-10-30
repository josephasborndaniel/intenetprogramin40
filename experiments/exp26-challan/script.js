import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP26",
  "number": 26,
  "title": "Traffic Police Challan Management",
  "slug": "challan",
  "folder": "exp26-challan",
  "category": "Community",
  "mode": "cases",
  "brand": "Traffic Desk",
  "tagline": "Clear records. Safer streets.",
  "icon": "⚑",
  "label": "Rules",
  "features": [
    "Fictional cases",
    "Proof metadata",
    "Fine receipts",
    "Daily reports"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Helmet violation",
      "category": "Safety",
      "price": 499,
      "stock": 8,
      "location": "Adyar",
      "description": "Helmet violation — a fictional safety listing for the Traffic Desk academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Signal violation",
      "category": "Signals",
      "price": 899,
      "stock": 9,
      "location": "Velachery",
      "description": "Signal violation — a fictional signals listing for the Traffic Desk academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Parking violation",
      "category": "Parking",
      "price": 1499,
      "stock": 10,
      "location": "OMR",
      "description": "Parking violation — a fictional parking listing for the Traffic Desk academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Speed violation",
      "category": "Speed",
      "price": 2499,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Speed violation — a fictional speed listing for the Traffic Desk academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "26",
  "page": 24,
  "pages": [
    24,
    25
  ],
  "source": "26.This web site provides traffic police to create online FIR with the vehicle owner and \nvehiclephoto as proof, user side receives the fir receipt with fine details. In this \napplication, user canto see the penalty imposed on the owner of the vehicle. By doing \nthis the tendency of gettingawaywithoutbeingpenalizedwillreduce andsubsequently\nthe traffic violationwillbemitigated without industrious use of human resources. \nTraffic Squad: Penalty Collection &management-basedwebApplication\nUser\nRegister\nLogin\nViewChallan\nViewCaseFiled\nPolice\nLogin\nRules\nCreateCase\nUploadproofphoto\nManage\nLiveinformation oftrafficreport–Newupdates\nGooglemap traffic–Link\nAdmin\nManagePoliceLogin\nViewDailyReport",
  "hue": 0
};
mount(experiment);
