import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP40",
  "number": 40,
  "title": "Online Store",
  "slug": "online-store",
  "folder": "exp40-online-store",
  "category": "Shopping",
  "mode": "shop",
  "brand": "Everyday Objects",
  "tagline": "Simple things, thoughtfully chosen.",
  "icon": "◒",
  "label": "Products",
  "features": [
    "Product catalog",
    "Cart quantities",
    "Checkout",
    "Order tracking"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Desk Lamp",
      "category": "Home",
      "price": 499,
      "stock": 8,
      "location": "Adyar",
      "description": "Desk Lamp — a fictional home listing for the Everyday Objects academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Cotton Overshirt",
      "category": "Clothing",
      "price": 899,
      "stock": 9,
      "location": "Velachery",
      "description": "Cotton Overshirt — a fictional clothing listing for the Everyday Objects academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Wireless Speaker",
      "category": "Electronics",
      "price": 1499,
      "stock": 10,
      "location": "OMR",
      "description": "Wireless Speaker — a fictional electronics listing for the Everyday Objects academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Everyday Tote",
      "category": "Accessories",
      "price": 2499,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Everyday Tote — a fictional accessories listing for the Everyday Objects academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "39",
  "page": 37,
  "pages": [
    37
  ],
  "source": "39.  user visits an online store that features a clean and straightforward product catalog, allowing \nthem to easily browse and purchase items. The homepage displays a selection of featured products \nalong with categories for quick navigation. Each product listing includes a clear image, description, \nprice, and available options such as size or color. Users can add items to their shopping cart with a \nsingle click and view their cart at any time to adjust quantities or remove items. The website also \nincludes a search bar for finding specific products and a filter option to refine results by price, \nbrand, or popularity. Once the user is ready to check out, they can proceed to a secure checkout \npage where they enter shipping and payment details. The website also provides an order summary \nand confirmation, with the option to track their order status through their account.\n1.Homepage:\n•Design a visually appealing homepage that introduces the online store and showcases featured \nproducts.\n•Include a search bar, navigation menu, and clear calls to action to encourage users to explore the \nproduct catalog.\n2.Product Listings:\n•Create individual pages for each product, complete with product descriptions, images, pricing, and \navailability status.\n•Organize products into categories (e.g., electronics, clothing, accessories) for easy navigation.\n•Implement filters or sorting options to allow users to refine their product search.\n3.Shopping Cart:\n•Develop a shopping cart system that allows users to add products, view the contents of their cart, \nand adjust quantities.\n•Calculate and display the total price of items in the cart.\n•Provide options to remove items from the cart and clear the cart entirely.\n4.User Accounts (Optional):\n•Create user accounts that enable users to save their shipping and billing information for future \npurchases.\n•Allow registered users to view their order history and check the status of their orders.\n5.Checkout Process:\n•Design a simple and intuitive checkout process that collects necessary customer information.\n•Include a secure payment gateway to process payments for purchased items.\n6.Order Confirmation and Email Notifications:\n•Send order confirmation emails to customers after they complete a purchase.\n•Provide email notifications to users about the status of their orders, including shipping and delivery \nupdates.                                 ",
  "hue": 158
};
mount(experiment);
