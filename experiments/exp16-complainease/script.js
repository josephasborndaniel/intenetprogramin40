import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP16",
  "number": 16,
  "title": "Complaint Management — ComplainEase",
  "slug": "complainease",
  "folder": "exp16-complainease",
  "category": "Services",
  "mode": "cases",
  "brand": "ComplainEase",
  "tagline": "Your voice. A visible resolution.",
  "icon": "☏",
  "label": "Common issues",
  "features": [
    "Submit complaint",
    "Officer assignment",
    "Proof of work",
    "Status tracking"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Streetlight repair",
      "category": "Utilities",
      "price": 499,
      "stock": 8,
      "location": "Adyar",
      "description": "Streetlight repair — a fictional utilities listing for the ComplainEase academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Water supply",
      "category": "Water",
      "price": 899,
      "stock": 9,
      "location": "Velachery",
      "description": "Water supply — a fictional water listing for the ComplainEase academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Road maintenance",
      "category": "Roads",
      "price": 1499,
      "stock": 10,
      "location": "OMR",
      "description": "Road maintenance — a fictional roads listing for the ComplainEase academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Sanitation request",
      "category": "Sanitation",
      "price": 2499,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Sanitation request — a fictional sanitation listing for the ComplainEase academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "16",
  "page": 14,
  "pages": [
    14,
    15
  ],
  "source": "16.ComplainEase is a robust online platform designed to streamline the process of \nregistering and managing complaints. The website allows users to easily submit \ncomplaints by filling out a detailed form that includes categories, descriptions, and \nsupporting documents. Key functionalities include user registration and login, \nreal-time complaint tracking, and status updates via email or SMS. Users can view \ntheir complaint history, receive feedback from resolution teams, and provide \nadditional information or evidence if needed. The platform also includes a search \nfeature for browsing common issues and solutions, and a dashboard for managing \nand resolving complaints efficiently. ComplainEase aims to improve \nresponsiveness and transparency in handling user grievances, ensuring a smooth \nand effective resolution process.\nUSER\nLogin\nRegister\nPostComplaint\nLocationMarkinGoogle Map\nViewcomplaintstatus\nFeedback\nGetAdminContactdetails\nOFFICER\nRegister\nLogin\nViewComplaint\nUpdatestatus\nUpdateproofofwork\nADMIN\nGenerateid&passwordforofficer\nTheadministrator hasfull-fledged rightsoverthe OES.\nCancreate/delete anaccount.\nCanviewtheaccounts.\nCanchangethepassword.\nCanhideany kindof featuresfromboth ofusers.\nInsert the information of available on OES.\nCanaccess alltheaccountsof the officer.",
  "hue": 350
};
mount(experiment);
