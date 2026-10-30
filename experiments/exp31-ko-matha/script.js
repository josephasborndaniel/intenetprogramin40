import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP31",
  "number": 31,
  "title": "Dairy Farm — Ko-Matha",
  "slug": "ko-matha",
  "folder": "exp31-ko-matha",
  "category": "Shopping",
  "mode": "shop",
  "brand": "Ko-Matha",
  "tagline": "Fresh from our fictional farm.",
  "icon": "❧",
  "label": "Dairy products",
  "features": [
    "Online orders",
    "Stock reports",
    "Vendor records",
    "Cow maintenance"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Fresh Milk",
      "category": "Milk",
      "price": 60,
      "stock": 8,
      "location": "Adyar",
      "description": "Fresh Milk — a fictional milk listing for the Ko-Matha academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Farm Curd",
      "category": "Curd",
      "price": 45,
      "stock": 9,
      "location": "Velachery",
      "description": "Farm Curd — a fictional curd listing for the Ko-Matha academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Golden Ghee",
      "category": "Ghee",
      "price": 680,
      "stock": 10,
      "location": "OMR",
      "description": "Golden Ghee — a fictional ghee listing for the Ko-Matha academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Sweet Cova",
      "category": "Sweets",
      "price": 220,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Sweet Cova — a fictional sweets listing for the Ko-Matha academic demonstration.",
      "rating": 4.6
    },
    {
      "id": "item-5",
      "name": "Cultured Butter",
      "category": "Butter",
      "price": 180,
      "stock": 12,
      "location": "Adyar",
      "description": "Cultured Butter — a fictional butter listing for the Ko-Matha academic demonstration.",
      "rating": 4.7
    }
  ],
  "printed": "31",
  "page": 29,
  "pages": [
    29
  ],
  "source": "31.Ko-Matha Dairy Farm, a pioneering smart dairy operation, has launched an innovative website \nto enhance customer engagement and streamline its services. The website showcases the farm’s \ncommitment to high-quality products sourced from Indian A1 cow holders,known for their \nsuperior milk. Key features include a \"Products\" section where customers can purchase fresh milk, \ncurd, cova-sweet, butter, and ghee, with detailed descriptions and pricing. The \"Farm\" section \nprovides insights into the farm’s practices, the benefits of A1 cow milk, and the technology used to \nensure quality. Additional menus include \"Order Online\" for convenient delivery scheduling, \n\"About Us\" for farm history and values, and \"Contact\" for customer inquiries and support. Ko-\nMatha Dairy Farm’s website aims to connect customers with wholesome dairy products while \npromoting transparency and convenience.The website should contain home page, about us, contact \nus and so on with following data maintenance: \nThey are\n1)The administrator detail\nRegistration form\nLogin form\n2)Stock detail\nStock entry form\nDaily report\nMonthly report\nYearly report\n3)Customer detail\nPurchase detail\nCustomer online purchase order\n4)Milk vender detail\nVendors information \nCow detail maintenance",
  "hue": 185
};
mount(experiment);
