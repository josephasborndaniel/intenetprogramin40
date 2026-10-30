import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP11",
  "number": 11,
  "title": "Real Estate — Home Finder",
  "slug": "home-finder",
  "folder": "exp11-home-finder",
  "category": "Services",
  "mode": "property",
  "brand": "Home Finder",
  "tagline": "Find a place that feels like you.",
  "icon": "⌂",
  "label": "Properties",
  "features": [
    "Saved searches",
    "Property viewings",
    "Mortgage calculator",
    "Agent enquiries"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Adyar Garden Apartment",
      "category": "Apartment",
      "price": 5800000,
      "stock": 8,
      "location": "Adyar",
      "description": "Adyar Garden Apartment — a fictional apartment listing for the Home Finder academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Velachery Family Home",
      "category": "House",
      "price": 9200000,
      "stock": 9,
      "location": "Velachery",
      "description": "Velachery Family Home — a fictional house listing for the Home Finder academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "OMR Studio",
      "category": "Studio",
      "price": 3400000,
      "stock": 10,
      "location": "OMR",
      "description": "OMR Studio — a fictional studio listing for the Home Finder academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Anna Nagar Office",
      "category": "Commercial",
      "price": 12500000,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Anna Nagar Office — a fictional commercial listing for the Home Finder academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "11",
  "page": 10,
  "pages": [
    10
  ],
  "source": "11.DisplayItemDetails\n12.Logout\n13.Leave asite\n11.Home Finder, an innovative online real estate platform, is designed to simplify the \nproperty search and transaction process for buyers, sellers, and renters. The website \nfeatures a comprehensive database of residential and commercial properties, with \nadvanced search filters for location, price, type, and amenities. Key functionalities include \nuser registration and login, detailed property listings with high-quality images and virtual \ntours, and interactive maps to explore neighborhood features. Users can schedule \nproperty viewings, save favorite listings, and receive notifications for new or updated \nproperties matching their criteria. The platform also offers tools for property valuation, \nmortgage calculators, and direct communication with real estate agents. Home Finder \naims to make the property search process efficient and transparent, providing users with \nvaluable.Thiswebsite helps the user to search and book lands/houses in their required \narea in their budget.\n➢Providealoginpageforbuyersandstoretheir usernameandpasswordinthedatabase\nandcan savethe searchcriteriaforthebuyers.\n➢Helpsthebuyerstousethesamesearchcriteriaratherthancreatinganewcriterion\neverytimethe buyer performs the search.\n➢Addmoreadvertisements onthewebsiteor linksto anotherwebsite.\n➢Addagentandcompany search functionality.\n➢Displayingthesearch resultsonGoogleMaps andlocatingtheareawheretheproperty\nlistingis located.\n➢Itshouldbefriendlyand pretty\n➢Storeandgivedetailsof properties\n➢Maintainrecordofcustomersvisitedthewebsite",
  "hue": 165
};
mount(experiment);
