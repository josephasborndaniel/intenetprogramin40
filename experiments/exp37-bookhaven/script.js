import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP37",
  "number": 37,
  "title": "Online Bookstore — BookHaven",
  "slug": "bookhaven",
  "folder": "exp37-bookhaven",
  "category": "Shopping",
  "mode": "shop",
  "brand": "BookHaven",
  "tagline": "A good day begins with a good book.",
  "icon": "▥",
  "label": "Books",
  "features": [
    "Book filters",
    "Cart",
    "Reviews",
    "Book recommendations"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "The Quiet Atlas",
      "category": "Fiction",
      "price": 499,
      "stock": 8,
      "location": "Adyar",
      "description": "The Quiet Atlas — a fictional fiction listing for the BookHaven academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Practical JavaScript",
      "category": "Academic",
      "price": 899,
      "stock": 9,
      "location": "Velachery",
      "description": "Practical JavaScript — a fictional academic listing for the BookHaven academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Wild Garden",
      "category": "Non-fiction",
      "price": 1499,
      "stock": 10,
      "location": "OMR",
      "description": "Wild Garden — a fictional non-fiction listing for the BookHaven academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Stories of Chennai",
      "category": "Fiction",
      "price": 2499,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Stories of Chennai — a fictional fiction listing for the BookHaven academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "36",
  "page": 34,
  "pages": [
    34
  ],
  "source": "36.\"BookHaven\" is a sleek and user-friendly online bookstore designed to provide a comprehensive and \nenjoyable shopping experience for book lovers. The homepage features a visually appealing layout with \ncurated book collections, bestsellers, and new arrivals.Key static pages include an \"About Us\" section that \nshares the bookstore’s mission and values, a \"Contact Us\" page with customer service details, and a \"FAQ\" \nsection addressing common inquiries about orders, shipping, and returns. The website also offers a detailed \n\"Category\" page where users can browse books by genre, author, or publication date. Each book listing \nprovides a cover image, synopsis, customer reviews, and purchase options. The \"Cart\" and \"Checkout\" \npages are designed for easy navigation, ensuring a smooth and secure purchasing process. Additionally, a \n\"Blog\" page shares book recommendations, reviews, and author interviews, enhancing the overall customer \nexperience.\n1.Home Page: Features a visually appealing layout with a carousel of bestsellers and new arrivals, \nsearch functionality, and highlighted categories like fiction, non-fiction, and academic books.\n2.About Us Page: Provides an overview of BookHaven’s mission, history, and values, introducing \nthe team and detailing the store’s commitment to quality and customer satisfaction.\n3.Catalog Page: Showcases a well-organized listing of books with filters for genres, authors, and \nprice ranges, allowing users to browse and discover titles easily.\n4.Contact Us Page: Includes a contact form, email address, phone number, and physical store \nlocation (if applicable), enabling customers to get in touch with the bookstore for support or \ninquiries.\n5.FAQs Page: Offers answers to common questions regarding shipping, returns, and account \nmanagement, helping customers find information quickly.\n6.Privacy Policy Page: Details the store’s policies on data collection, usage, and protection, \nensuring transparency and compliance with privacy regulations.\nBookHaven aims to provide a seamless and engaging online shopping experience, with easy navigation \nand clear information for customers.",
  "hue": 47
};
mount(experiment);
