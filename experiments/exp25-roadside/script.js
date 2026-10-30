import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP25",
  "number": 25,
  "title": "Roadside Breakdown Assistance",
  "slug": "roadside",
  "folder": "exp25-roadside",
  "category": "Services",
  "mode": "cases",
  "brand": "Roadside Buddy",
  "tagline": "A helping hand, down the road.",
  "icon": "⚒",
  "label": "Mechanics",
  "features": [
    "Mechanic search",
    "Business approval",
    "Assistance requests",
    "Feedback"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Arun Auto Care",
      "category": "Adyar",
      "price": 499,
      "stock": 8,
      "location": "Adyar",
      "description": "Arun Auto Care — a fictional adyar listing for the Roadside Buddy academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Coastal Motor Works",
      "category": "OMR",
      "price": 899,
      "stock": 9,
      "location": "Velachery",
      "description": "Coastal Motor Works — a fictional omr listing for the Roadside Buddy academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Greenway Garage",
      "category": "Velachery",
      "price": 1499,
      "stock": 10,
      "location": "OMR",
      "description": "Greenway Garage — a fictional velachery listing for the Roadside Buddy academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "City Wheel Service",
      "category": "Anna Nagar",
      "price": 2499,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "City Wheel Service — a fictional anna nagar listing for the Roadside Buddy academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "25",
  "page": 24,
  "pages": [
    24
  ],
  "source": "25.OnRoadVehicleBreakdownAssistancesystemcansearchforlistofmechanicsatany\nlocationor the nearby locationswhichwillhelptheminanunexpected situationraised\nbythemechanical issues of their vehicles. Only the licensed mechanics can get listed \nhere while thesearch. Road assistance for car and there isavailable mechanic who can \ncome and repair themechanicalissues in theuser’svehicle.\nUsermodules:\nRegister\nLogin\nSearchMechanicDetails\nViewGoogle geolocation\nPostfeedback\nMyprofile\nAdminmodules:\nProvideApproval\nMechanicmodules:\nRegister\nLogin\nPost Business\nManageBusiness\nViewfeedback",
  "hue": 323
};
mount(experiment);
