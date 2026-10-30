import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP45",
  "number": 45,
  "title": "Painting Rating and Review",
  "slug": "painting-rating",
  "folder": "exp45-painting-rating",
  "category": "Creative",
  "mode": "painting",
  "brand": "The Open Gallery",
  "tagline": "Every perspective adds something.",
  "icon": "◈",
  "label": "Paintings",
  "features": [
    "Painting submissions",
    "Display packages",
    "Ratings",
    "Review sentiment"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Evening at the Lake",
      "category": "Landscape",
      "price": 499,
      "stock": 8,
      "location": "Adyar",
      "description": "Evening at the Lake — a fictional landscape listing for the The Open Gallery academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Ochre and Indigo",
      "category": "Abstract",
      "price": 899,
      "stock": 9,
      "location": "Velachery",
      "description": "Ochre and Indigo — a fictional abstract listing for the The Open Gallery academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "A Study in Green",
      "category": "Botanical",
      "price": 1499,
      "stock": 10,
      "location": "OMR",
      "description": "A Study in Green — a fictional botanical listing for the The Open Gallery academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "City After Rain",
      "category": "Urban",
      "price": 2499,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "City After Rain — a fictional urban listing for the The Open Gallery academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "44",
  "page": 41,
  "pages": [
    41
  ],
  "source": "44.An admin logs into the website’s backend to upload a new painting for display on the rating and \nreview webpage. Once uploaded, the painting is visible to customers, who can view it and submit \ntheir ratings. The rating system allows users to provide a score(e.g., 1 to 5 stars) and leave written \nfeedback. As customers submit their reviews, the webpage dynamically displays the average rating \nalong with a summary of positive and negative comments. The admin can monitor the feedback, \nrespond to reviews, and analyze customer sentiments to make informed decisions about future \ndisplays or sale\nADMIN\n•Login\n•Loading and Collecting reviews of both positive and negative about the Painting \n•Updating the webpage by new painting based on schedules \n•Before updating the new painting show the positive and negative reviews of the \nprevious painting \n•Login and Registration for owner of the painting \n•Collecting money based on the number of days the painting will be available (Package) \nfor  customers review \n•Mode of Transaction \n•Customer Login through Social media or mail id authentication\nOWNER\n•Registration includes submitting painting and choosing package and completion of      \npayment \n•Login\n•Seeing their painting reviews\nCUSTOMER\n•Authenticated Login\n•Submitting reviews about the painting ",
  "hue": 343
};
mount(experiment);
