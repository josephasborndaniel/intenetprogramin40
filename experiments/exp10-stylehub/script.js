import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP10",
  "number": 10,
  "title": "Fashion Shopping — StyleHub",
  "slug": "stylehub",
  "folder": "exp10-stylehub",
  "category": "Shopping",
  "mode": "shop",
  "brand": "StyleHub",
  "tagline": "Wear your own story.",
  "icon": "✦",
  "label": "Collections",
  "features": [
    "Sizes and colours",
    "Style filters",
    "Returns and exchanges",
    "Order history"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Linen Everyday Shirt",
      "category": "Men",
      "price": 499,
      "stock": 8,
      "location": "Adyar",
      "description": "Linen Everyday Shirt — a fictional men listing for the StyleHub academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Terracotta Dress",
      "category": "Women",
      "price": 899,
      "stock": 9,
      "location": "Velachery",
      "description": "Terracotta Dress — a fictional women listing for the StyleHub academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "City Sneakers",
      "category": "Footwear",
      "price": 1499,
      "stock": 10,
      "location": "OMR",
      "description": "City Sneakers — a fictional footwear listing for the StyleHub academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Canvas Weekender",
      "category": "Accessories",
      "price": 2499,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Canvas Weekender — a fictional accessories listing for the StyleHub academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "10",
  "page": 9,
  "pages": [
    9,
    10
  ],
  "source": "10.BrowseOrderHistory\n11.DisplayItemDetails\n12.Logout\n13.Leave asite\n10.StyleHub, a premier online fashion retailer, introduces its comprehensive e-commerce \nplatform designed to cater to fashion enthusiasts. The website offers an extensive \ncollection of clothing, footwear, and accessories for men, women, and children, with \ncategories such as casual wear, formal attire, and seasonal collections. Key functionalities \ninclude user registration and login, advanced search and filtering options, detailed \nproduct descriptions with high-resolution images, customer reviews, and size guides. The \nplatform supports secure payment methods, order tracking, and an easy return and \nexchange policy. Customers can create wish lists, receive personalized style \nrecommendations, and enjoy exclusive online discounts and flash sales. StyleHub aims to \nprovide a seamless and enjoyable shopping experience, keeping users up-to-date with the \nlatest fashion trends.The core of an online shop is the product catalogue and the cart. The \nusers browse products which are grouped in categories and add the desired ones to the \ncart. Next, there is transaction handling, which in its simplest form consists in the order \nbeing sent via e-mail to the seller, but most often it takes the whole buying process through \nseparate order statuses.\n➢The key to helping customers find the products they need quickly is to offer a user-\nfriendlynavigationsystem.\n➢Productsshouldbelogicallycategorized,withthe mostpopularcategories listed first.\n➢Displayalltheavailable categories forshoppingonthehomepage.\n➢Displayallthesubcategoriesonthehomepage,thatareassociatedwithanyparticular\nitem.\n➢Adminhastheauthorityto addnewparticularstotheitemslistwheneverneeded.\n➢Permissiontotheadministratortoremoveitems,anytime.\n➢Allowstheadminto modifythepriceofeachitem,whenever requiredor feltlike.\n➢Adminhastheauthority toupdatethe descriptionofeachitem.\n➢Permissiontotheadmintoviewinformationabouteachcustomerwhocheckoutsthe\nitems list.\nUseCases\n2.Visita site\n2.Login\n3.SearchforItems\n4.CheckAvailabilityofItems\n5.AddItemstoShoppingCart\n6.EditItemsintheShopping Cart\n7.remove ItemsfromtheShoppingCart\n8.CheckouttheShoppingCart\n9.CheckOrderStatus\n10.BrowseOrderHistory",
  "hue": 128
};
mount(experiment);
