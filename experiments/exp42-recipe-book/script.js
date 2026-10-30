import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP42",
  "number": 42,
  "title": "Digital Recipe Book",
  "slug": "recipe-book",
  "folder": "exp42-recipe-book",
  "category": "Creative",
  "mode": "recipe",
  "brand": "The Recipe Notebook",
  "tagline": "Something wonderful is cooking.",
  "icon": "♨",
  "label": "Recipes",
  "features": [
    "Ingredient search",
    "Serving scaler",
    "Meal planner",
    "Shopping list"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Garden Tomato Pasta",
      "category": "Italian",
      "price": 499,
      "stock": 8,
      "location": "Adyar",
      "description": "Garden Tomato Pasta — a fictional italian listing for the The Recipe Notebook academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Coconut Breakfast Bowl",
      "category": "Breakfast",
      "price": 899,
      "stock": 9,
      "location": "Velachery",
      "description": "Coconut Breakfast Bowl — a fictional breakfast listing for the The Recipe Notebook academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Lemon Rice",
      "category": "Indian",
      "price": 1499,
      "stock": 10,
      "location": "OMR",
      "description": "Lemon Rice — a fictional indian listing for the The Recipe Notebook academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Chocolate Oat Cookies",
      "category": "Dessert",
      "price": 2499,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Chocolate Oat Cookies — a fictional dessert listing for the The Recipe Notebook academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "41",
  "page": 38,
  "pages": [
    38,
    39
  ],
  "source": "41. A user visits the digital recipe book platform to explore and share culinary creations. The \nhomepage features a curated collection of popular recipes, categorized by cuisine, dietary \npreferences, and difficulty levels. Users can search for specific recipesor browse through themed \ncollections. Each recipe page includes a detailed list of ingredients, step-by-step instructions, and \nhigh-quality visuals to guide the cooking process. Users can create personal accounts to save their \nfavorite recipes, upload their own creations, and even customize the ingredients based on serving \nsize or dietary needs. The platform also allows users to rate and comment on recipes, fostering a \ncommunity of food enthusiasts. Additionally, a meal planner tool helps users organize their weekly \nmenus, while an integrated shopping list feature makes it easy to gather the necessary ingredients.\n1.User-Friendly Interface:\n•Design a user-friendly and visually appealing interface that makes it easy for users to browse and \nsearch for recipes.\n•Implement a clean and organized layout with intuitive navigation.\n2.Recipe Listings:\n•Create an extensive database of recipes, organized into categories or tags (e.g., breakfast, main \ncourse, desserts, vegetarian).\n•Include a search bar for users to quickly find recipes based on keywords or ingredients.\n3.Recipe Pages:\n•Each recipe page should feature a high-quality image of the prepared dish.\n•Include detailed cooking instructions, a list of ingredients, preparation time, and servings.\n•Allow users to add their own reviews and ratings.\n4.Cooking Instructions:\n•Provide step-by-step cooking instructions, including specific measurements and techniques.\n•Add tips, variations, and cooking notes for each recipe.\n5.Ingredients List:\n•Include a list of ingredients with their quantities and measurements, making it easy for users to \ncreate shopping lists.\n6.Recipe Search and Filter:\n•Implement advanced search and filtering options, enabling users to refine recipe searches by \ndietary restrictions, cooking time, or cuisine.\n7.User Accounts (Optional):\n•Allow users to create accounts, save their favorite recipes, and submit their own recipes.\n•Implement features for users to customize serving sizes and generate ingredient lists accordingly.\n8.Comments and Discussions:\n•Integrate a comments section for users to leave feedback, ask questions, or share their cooking \nexperiences.\n•Encourage a sense of community and collaboration among users.\n9.Print and Share:\n•Enable users to print recipes in a formatted and printer-friendly layout.\n•Include social media sharing options for users to share their favorite recipes with friends and \nfamily.",
  "hue": 232
};
mount(experiment);
