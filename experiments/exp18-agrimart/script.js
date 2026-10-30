import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP18",
  "number": 18,
  "title": "Agriculture Marketplace — AgriMart",
  "slug": "agrimart",
  "folder": "exp18-agrimart",
  "category": "Shopping",
  "mode": "shop",
  "brand": "AgriMart",
  "tagline": "Growing better, together.",
  "icon": "❧",
  "label": "Supplies",
  "features": [
    "Farmer inventory",
    "Wallet",
    "Orders",
    "Shipping status"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Heritage Tomato Seeds",
      "category": "Seeds",
      "price": 499,
      "stock": 8,
      "location": "Adyar",
      "description": "Heritage Tomato Seeds — a fictional seeds listing for the AgriMart academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Organic Compost",
      "category": "Fertilizers",
      "price": 899,
      "stock": 9,
      "location": "Velachery",
      "description": "Organic Compost — a fictional fertilizers listing for the AgriMart academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Garden Tool Kit",
      "category": "Tools",
      "price": 1499,
      "stock": 10,
      "location": "OMR",
      "description": "Garden Tool Kit — a fictional tools listing for the AgriMart academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Drip Irrigation Set",
      "category": "Equipment",
      "price": 2499,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Drip Irrigation Set — a fictional equipment listing for the AgriMart academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "18",
  "page": 16,
  "pages": [
    16,
    17
  ],
  "source": "18.AgriMart is a comprehensive online platform catering to farmers and agricultural enthusiasts \nwith a wide range of products and services. The website features categories such as seeds, \nfertilizers, pesticides, farming equipment, and tools. Key functionalities include user \nregistration and login, product search and filtering, detailed product descriptions, and high-\nresolution images. Customers can place orders directly, track their shipments, and access \npersonalized recommendations based on their purchase history. The platform also offers secure \npayment options and customer support for product inquiries and order issues. AgriMart aims \nto provide a convenient and efficient shopping experience, helping users access essential \nagricultural supplies and resources with ease.’\nFARMER\nLogin\nRegister\nOTPVerification\nManageOrders\nUpdateorderStatus\nAddProduct\nUpdate/Deleteproduct\nUploadimages\nMySales\nUpdateShipping Status\nLogout\nPUBLIC\nRegister\nLogin\nOTPVerification\nMyAccount\nManageWalletBalance\nViewproductdetails\nSearchproduct\nAddtocart\nEdit/DeleteCart\nAdd/EditShippingAddress\nOrderProduct\nMyOrderstatus\nViewShipping Status",
  "hue": 64
};
mount(experiment);
