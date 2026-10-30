import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP13",
  "number": 13,
  "title": "Flowers and Gifts — BlossomGifts",
  "slug": "blossomgifts",
  "folder": "exp13-blossomgifts",
  "category": "Shopping",
  "mode": "shop",
  "brand": "BlossomGifts",
  "tagline": "Say it beautifully.",
  "icon": "❀",
  "label": "Gifts",
  "features": [
    "Occasion filters",
    "Scheduled delivery",
    "Cart",
    "Inventory management"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Peach Rose Bouquet",
      "category": "Flowers",
      "price": 499,
      "stock": 8,
      "location": "Adyar",
      "description": "Peach Rose Bouquet — a fictional flowers listing for the BlossomGifts academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Celebration Hamper",
      "category": "Hampers",
      "price": 899,
      "stock": 9,
      "location": "Velachery",
      "description": "Celebration Hamper — a fictional hampers listing for the BlossomGifts academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Orchid Arrangement",
      "category": "Flowers",
      "price": 1499,
      "stock": 10,
      "location": "OMR",
      "description": "Orchid Arrangement — a fictional flowers listing for the BlossomGifts academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Personalised Keepsake",
      "category": "Gifts",
      "price": 2499,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Personalised Keepsake — a fictional gifts listing for the BlossomGifts academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "13",
  "page": 12,
  "pages": [
    12
  ],
  "source": "13.BlossomGifts, a user-friendly online platform, offers a seamless experience for ordering \nflowers and gifts for any occasion. The website features a diverse selection of floral \narrangements, gift baskets, and personalized gifts, all organized by occasion, recipient, \nand price range. Key functionalities include user registration and login, a customizable \norder system with options for delivery dates and times, and detailed product descriptions \nwith high-quality images. Customers can track their orders in real-time, schedule future \ndeliveries, and receive order confirmations via email or SMS. The platform also supports \nsecure payment methods and provides special promotions and discounts for loyal \ncustomers. BlossomGifts aims to make sending thoughtful gifts and flowers easy and \nconvenient, ensuring timely delivery and customer satisfaction.\n➢Thekeytohelpingcustomersfindtheproductstheyneedquicklyistoofferauser-\nfriendlynavigationsystem.\n➢Productsshouldbelogicallycategorized,withthe mostpopularcategories listedfirst.\n➢Displayalltheavailable categories forshoppingonthehomepage.\n➢Displayallthesubcategoriesonthehomepage,thatareassociatedwithanyparticular\nitem.\n➢Adminhastheauthority toaddnew particularstotheitems listwheneverneeded.\n➢Permissiontotheadministratortoremoveitems,anytime.\n➢Allowstheadminto modifythepriceofeachitem,whenever requiredor feltlike.\n➢Permissiontotheadmintoviewinformationabouteachcustomerwhocheckoutsthe\nitems list.\nUseCases\nEdit(Change,Delete)CustomerInfo\nInquireabout ... viaemail\nMaintain(add,change,delete)Inventory\nViewOrder Summary\nVisita site\nLogin Search for Items\nCheck Availability of Items\nAddItemstoShoppingCart\nEdit Items in the Shopping Cart\nremoveItemsfromtheShoppingCart\nCheckout theShopping Cart\nCheck Order Status\nBrowseOrderHistory\nDisplay Item Details\nLogout\nLeave asite",
  "hue": 239
};
mount(experiment);
