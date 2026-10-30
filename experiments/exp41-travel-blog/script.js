import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP41",
  "number": 41,
  "title": "Travel Blog",
  "slug": "travel-blog",
  "folder": "exp41-travel-blog",
  "category": "Creative",
  "mode": "content",
  "brand": "Elsewhere Journal",
  "tagline": "Stories from the road less hurried.",
  "icon": "☀",
  "label": "Stories",
  "features": [
    "Destination filters",
    "Interactive map",
    "Photo stories",
    "Comments and sharing"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "A Morning in Kodaikanal",
      "category": "Kodaikanal",
      "price": 499,
      "stock": 8,
      "location": "Adyar",
      "description": "A Morning in Kodaikanal — a fictional kodaikanal listing for the Elsewhere Journal academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Chennai Through Its Food",
      "category": "Chennai",
      "price": 899,
      "stock": 9,
      "location": "Velachery",
      "description": "Chennai Through Its Food — a fictional chennai listing for the Elsewhere Journal academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Coorg in the Rain",
      "category": "Coorg",
      "price": 1499,
      "stock": 10,
      "location": "OMR",
      "description": "Coorg in the Rain — a fictional coorg listing for the Elsewhere Journal academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Walking Old Mysore",
      "category": "Mysore",
      "price": 2499,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Walking Old Mysore — a fictional mysore listing for the Elsewhere Journal academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "40",
  "page": 37,
  "pages": [
    37,
    38
  ],
  "source": "40. A travel enthusiast creates a travel blog website to document and share their adventures with \na global audience. The homepage features an attractive layout with stunning travel photos and a \nmap highlighting visited destinations. Each blog post offers an immersive experience, with \ndetailed narratives, captivating images, and travel tips for various locations. Readers can easily \nnavigate through categories such as destinations, travel guides, food experiences, and cultural \ninsights. The website includes a comment section for readers to share their thoughts, ask \nquestions, and connect with the blogger. An \"About\" page gives insights into the blogger’s \njourney and passion for travel, while a \"Resources\" section provides useful travel tools, packing \nlists, and booking recommendations. The platform also integrates social media sharing options, \nallowing readers to easily share posts and follow the blogger’sadventures in real time.\n1.Homepage:\n•Create an inviting homepage that showcases recent or featured travel articles.\n•Include a visually appealing header with a site logo and navigation menu for easy access to \nvarious sections.\n2. Blog Articles:\n•Develop individual blog articles that narrate your travel adventures.\n•Each article should include text content, high-quality images, and possibly videos.\n•Implement a clean and readable layout for articles, including headings, paragraphs, and \ncaptions.\n3.Travel Destinations:\n•Organize your blog posts by travel destinations or regions.\n•Allow users to explore your articles by filtering them based on specific locations.\n4.Interactive Map:\n•Integrate an interactive map that displays markers for the locations you've visited.\n•Clicking on a marker should lead users to the respective travel articles related to that location.\n5.Photo Galleries:\n•Create photo galleries within your articles to showcase your travel photos.\n•Include features for users to view photos as slideshows or open them in larger formats.\n6.User Comments and Engagement:\n•Implement a comment section on each blog post, encouraging reader engagement and \ndiscussions.\n•Enable social media sharing for each article to expand your blog's reach.\n7.About the Traveler:\n•Dedicate a page to introduce yourself, including your background, travel interests, and future \nplans.\n•Include a photo and brief biography.",
  "hue": 195
};
mount(experiment);
