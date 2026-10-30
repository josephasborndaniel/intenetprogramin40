import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP14",
  "number": 14,
  "title": "Second-Hand Marketplace — ReNewMarket",
  "slug": "renewmarket",
  "folder": "exp14-renewmarket",
  "category": "Shopping",
  "mode": "shop",
  "brand": "ReNewMarket",
  "tagline": "Good things deserve another chapter.",
  "icon": "♻",
  "label": "Listings",
  "features": [
    "Seller listings",
    "Price offers",
    "Logistics status",
    "Category management"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Preloved City Bicycle",
      "category": "Outdoors",
      "price": 499,
      "stock": 8,
      "location": "Adyar",
      "description": "Preloved City Bicycle — a fictional outdoors listing for the ReNewMarket academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Oak Study Desk",
      "category": "Furniture",
      "price": 899,
      "stock": 9,
      "location": "Velachery",
      "description": "Oak Study Desk — a fictional furniture listing for the ReNewMarket academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Vintage Camera",
      "category": "Electronics",
      "price": 1499,
      "stock": 10,
      "location": "OMR",
      "description": "Vintage Camera — a fictional electronics listing for the ReNewMarket academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Denim Jacket",
      "category": "Clothing",
      "price": 2499,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Denim Jacket — a fictional clothing listing for the ReNewMarket academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "14",
  "page": 13,
  "pages": [
    13
  ],
  "source": "14.ReNewMarket, a dynamic online marketplace, connects buyers and sellers of second-\nhand goods with ease. The website features a broad range of categories, including \nelectronics, furniture, clothing, and collectibles. Key functionalities include user \nregistration and login, a user-friendly listing creation tool for sellers, and advanced search \nand filtering options for buyers. Listings include detailed descriptions, photos, and pricing \ninformation, with the option to negotiate prices directly with sellers. Users can track their \ntransactions, leave feedback, and manage their favorite items and notifications. The \nplatform also provides secure payment options and a simple process for arranging item \npick-ups or deliveries. ReNewMarket aims to provide a reliable andconvenient space for \nexchanging pre-loved items while promoting sustainability\n➢UserManagement\nThesystemloginsuccessfullyand thenetwork connectionisworking.\n✓Theadministratorsetloginaccountandpassword.\n✓EditingUser\n✓DeletingUser\n➢CategoryManagement\n✓Addcategoryinformation.\n✓Deletecategoryinformation\n➢CommodityManagement\n✓EditingCommodity\n✓deletingCommodity\n➢OrderManagement\n✓Changelogisticsstatus:(Shipped/Received)\n✓DeleteOrder",
  "hue": 276
};
mount(experiment);
