import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP32",
  "number": 32,
  "title": "Laptop Sales and Service — Ram Infotech",
  "slug": "ram-infotech",
  "folder": "exp32-ram-infotech",
  "category": "Shopping",
  "mode": "shop",
  "brand": "Ram Infotech",
  "tagline": "Better tools. Dependable support.",
  "icon": "▱",
  "label": "Laptops",
  "features": [
    "Laptop store",
    "Service requests",
    "Rental agreements",
    "Stock maintenance"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Atlas Pro 14",
      "category": "Professional",
      "price": 24999,
      "stock": 8,
      "location": "Adyar",
      "description": "Atlas Pro 14 — a fictional professional listing for the Ram Infotech academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Nova Student 15",
      "category": "Student",
      "price": 58999,
      "stock": 9,
      "location": "Velachery",
      "description": "Nova Student 15 — a fictional student listing for the Ram Infotech academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Studio Creator 16",
      "category": "Creator",
      "price": 3499,
      "stock": 10,
      "location": "OMR",
      "description": "Studio Creator 16 — a fictional creator listing for the Ram Infotech academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Everyday Air 13",
      "category": "Everyday",
      "price": 18999,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Everyday Air 13 — a fictional everyday listing for the Ram Infotech academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "32",
  "page": 30,
  "pages": [
    30
  ],
  "source": "32. Ram Infotech has launched a comprehensive website to cater to both laptop sales and service \nneeds. The website features a user-friendly interface for browsing and purchasing a wide range of \nlaptops, including detailed specifications, customer reviews, and competitive pricing. Key \nfunctionalities include an \"Online Store\" section for selecting and buying laptops, a \"Service \nCenter\" section where customers can schedule repairs, track service status, and access \ntroubleshooting guides. The site also includes an\"About Us\" page detailing the company’s history \nand mission, a \"Contact\" page for customer support, and a \"FAQ\" section addressing common \nqueries. Ram Infotech’s website aims to provide a seamless experience for both acquiring and \nmaintaining laptops, ensuring quality service and customer satisfaction.\n1) Admin detail –Login, Registration form detail\n2) Sales –Laptop detail, model, configuration \n3) Services –Laptop services information\n4) Customer information –Purchase / Services \n5) Laptop renal agreement detail\n6) Stock maintenance in the shop.",
  "hue": 222
};
mount(experiment);
