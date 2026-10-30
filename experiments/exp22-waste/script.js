import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP22",
  "number": 22,
  "title": "Solid Waste Management",
  "slug": "waste",
  "folder": "exp22-waste",
  "category": "Community",
  "mode": "cases",
  "brand": "Clean Circle",
  "tagline": "A cleaner neighbourhood, together.",
  "icon": "♻",
  "label": "Collection bins",
  "features": [
    "Bin management",
    "Driver route",
    "Load updates",
    "Public complaints"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Adyar Collection Point",
      "category": "Organic",
      "price": 499,
      "stock": 8,
      "location": "Adyar",
      "description": "Adyar Collection Point — a fictional organic listing for the Clean Circle academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Velachery Green Bin",
      "category": "Recyclable",
      "price": 899,
      "stock": 9,
      "location": "Velachery",
      "description": "Velachery Green Bin — a fictional recyclable listing for the Clean Circle academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "OMR Recycling",
      "category": "Recyclable",
      "price": 1499,
      "stock": 10,
      "location": "OMR",
      "description": "OMR Recycling — a fictional recyclable listing for the Clean Circle academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Marina Collection Point",
      "category": "Mixed",
      "price": 2499,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Marina Collection Point — a fictional mixed listing for the Clean Circle academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "22",
  "page": 21,
  "pages": [
    21
  ],
  "source": "22.Solid waste management can be broadly categorized as segregation, collection, and\ntransportation. Theserver will collect the data and store them only a database. This data \nwill beanalyzedanddisplayedontwodifferentdashboardsthatcanbeaccessedby\ntheworkforceandclients. Usingdata analytics, reports will be generated which can be \nmonitored by the adminsthroughthe admin dashboard. Basedon the data collected, \ngarbage trucks can be given routes generated throughvarious algorithms and google \nmaps API to efficiently route through all necessarygarbagebinsandfinally reach the\ndumping siteEffectiveusageof dustbins.\nAdministrator\n➢Login\n➢CreateGarbagebin\n➢Update/Deletegarbagebin\n➢Assignbest routefordrivers\n➢Managedriver\n➢ViewGarbageReport\n➢Viewcomplaintsfrompublic\nGeneralPublic\n➢Register\n➢Login\n➢Registercomplaint\n➢Mycomplaint&status\nDriver\n➢Login\n➢Checkdailywork updates\n➢Choosebest route\n➢Updategarbageload",
  "hue": 212
};
mount(experiment);
