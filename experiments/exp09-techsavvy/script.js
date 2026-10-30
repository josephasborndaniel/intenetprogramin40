import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP09",
  "number": 9,
  "title": "Electronics Shopping — TechSavvy",
  "slug": "techsavvy",
  "folder": "exp09-techsavvy",
  "category": "Shopping",
  "mode": "shop",
  "brand": "TechSavvy",
  "tagline": "Thoughtful tech. Everyday possibilities.",
  "icon": "⌘",
  "label": "Products",
  "features": [
    "Catalog filters",
    "Cart and checkout",
    "Wish lists",
    "Admin inventory"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Nova Smartphone",
      "category": "Phones",
      "price": 24999,
      "stock": 8,
      "location": "Adyar",
      "description": "Nova Smartphone — a fictional phones listing for the TechSavvy academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Atlas Laptop",
      "category": "Laptops",
      "price": 58999,
      "stock": 9,
      "location": "Velachery",
      "description": "Atlas Laptop — a fictional laptops listing for the TechSavvy academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Echo Headphones",
      "category": "Accessories",
      "price": 3499,
      "stock": 10,
      "location": "OMR",
      "description": "Echo Headphones — a fictional accessories listing for the TechSavvy academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Orbit Tablet",
      "category": "Tablets",
      "price": 18999,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Orbit Tablet — a fictional tablets listing for the TechSavvy academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "9",
  "page": 8,
  "pages": [
    8,
    9
  ],
  "source": "9.TechSavvy, a leading retailer of electronic gadgets, has launched an online shopping \nplatform to provide customers with a seamless and convenient shopping experience. The \nwebsite features a wide range of products, including smartphones, laptops, tablets, and \naccessories, all categorized for easy browsing. Key functionalities include user \nregistration and login, product search and filtering, detailed product descriptions and \nreviews, secure payment options, and order tracking. Customers can add items to their \ncart, create wish lists, and receive personalized recommendations based on their browsing \nand purchase history. The platform also offers exclusive online discounts and promotions, \nensuring customers get the best deals on the latest gadgets.The core of an online shop is \nthe product catalogue and the cart. The users browse productswhich are grouped in \ncategories and add the desired ones to the cart. Next, there is transactionhandling,which\ninitssimplestformconsistsintheorderbeingsentviae-mailtotheseller,butmostoften \nit takesthe whole buying processthrough separateorder statuses.\nProductsshouldbelogicallycategorized,withthemostpopularcategorieslisted\nfirst.Displayalltheavailable categoriesfor shoppingonthehomepage.\nDisplayallthesubcategoriesonthehomepage,thatareassociatedwithanyparticular\nitem.\nAdminhastheauthorityto addnewparticularstotheitemslistwheneverneeded.\nPermissiontotheadministratortoremoveitems,anytime.\nAllowstheadmin tomodify thepriceofeachitem, wheneverrequiredorfeltlike.\nAdminhastheauthority toupdatethe descriptionofeachitem.\nPermissiontotheadmintoviewinformationabouteachcustomerwhocheckoutsthe\nitems list.\nUseCases\n1.Visita site\n2.Login\n3.SearchforItems\n4.CheckAvailabilityofItems\n5.AddItemstoShoppingCart\n6.EditItemsintheShopping Cart\n7.remove ItemsfromtheShoppingCart\n8.CheckouttheShoppingCart\n9.CheckOrderStatus",
  "hue": 91
};
mount(experiment);
