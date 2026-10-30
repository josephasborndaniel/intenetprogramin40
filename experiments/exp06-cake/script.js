import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP06",
  "number": 6,
  "title": "Cake Ordering",
  "slug": "cake",
  "folder": "exp06-cake",
  "category": "Shopping",
  "mode": "shop",
  "brand": "Butter & Bloom",
  "tagline": "Small moments. Sweeter memories.",
  "icon": "🎂",
  "label": "Cakes",
  "features": [
    "Custom messages",
    "Cake cart",
    "Delivery scheduling",
    "Order tracking"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Belgian Chocolate",
      "category": "Chocolate",
      "price": 499,
      "stock": 8,
      "location": "Adyar",
      "description": "Belgian Chocolate — a fictional chocolate listing for the Butter & Bloom academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Strawberry Cloud",
      "category": "Fruit",
      "price": 899,
      "stock": 9,
      "location": "Velachery",
      "description": "Strawberry Cloud — a fictional fruit listing for the Butter & Bloom academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Vanilla Celebration",
      "category": "Birthday",
      "price": 1499,
      "stock": 10,
      "location": "OMR",
      "description": "Vanilla Celebration — a fictional birthday listing for the Butter & Bloom academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Mango Sunshine",
      "category": "Fruit",
      "price": 2499,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Mango Sunshine — a fictional fruit listing for the Butter & Bloom academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "6",
  "page": 5,
  "pages": [
    5,
    6
  ],
  "source": "6.The online cake ordering system allows users to browse a variety of cakes by \ncategory, flavor, and occasion, complete with detailed descriptions and images. Users can \nregister, log in, and manage their orders through a personal dashboard. The ordering \nprocess includes selecting a cake, customizing options like size and message, entering \ndelivery details, and making secure payments via an integrated payment gateway. Admins \ncan manage cake inventory, track orders, and handle user accounts through an admin \npanel. Users receive order confirmation emails and can track delivery status. The website \nis fully responsive, providing a seamless shopping experience on all devices.Buya Cake \nis a portal which allows admin in developing counters to advertise and sell their cake. This \nwould permit rural communities to make their wares available to the rest of the world. \nTheproposed system is to develop the website for cake store. User can buy the nearby \ncake available in app. An E Com App is a portal which allows admin in developing \nproductsto promote and sell their goods. This would permit rural communities to make \ntheir wares available to the rest of the world.\nStudent\nRegister\nLogin\nSearchCake\nFilter\nCategory\nSubcategory\nPriceRange\nViewCakelist\nViewcakedescription\nAddtoCart\nPlaceorder\nAddShippingAddress\nUpdateShippingAddress\nMyOrder\nViewShippingStatus\nAdmin\nLogin\nManageProducts\nPostCakedetails\nUploadimages\nProduct\nDescription\nManageOrders\nUpdateorderStatus\nShippingLocation\nLogout",
  "hue": 340
};
mount(experiment);
