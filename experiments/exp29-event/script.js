import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP29",
  "number": 29,
  "title": "Event Registration Website",
  "slug": "event",
  "folder": "exp29-event",
  "category": "Community",
  "mode": "booking",
  "brand": "Confluence 2026",
  "tagline": "Ideas meet. Possibilities begin.",
  "icon": "✳",
  "label": "Sessions",
  "features": [
    "Speaker profiles",
    "Event schedule",
    "Venue",
    "Registration"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Building for the Web",
      "category": "Keynote",
      "price": 1200,
      "stock": 8,
      "location": "Adyar",
      "description": "Building for the Web — a fictional keynote listing for the Confluence 2026 academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Design That Includes",
      "category": "Design",
      "price": 2400,
      "stock": 9,
      "location": "Velachery",
      "description": "Design That Includes — a fictional design listing for the Confluence 2026 academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "The Future of Learning",
      "category": "Panel",
      "price": 3800,
      "stock": 10,
      "location": "OMR",
      "description": "The Future of Learning — a fictional panel listing for the Confluence 2026 academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Creative Coding Lab",
      "category": "Workshop",
      "price": 6500,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Creative Coding Lab — a fictional workshop listing for the Confluence 2026 academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "28",
  "page": 27,
  "pages": [
    27
  ],
  "source": "28.The layout of the event page will be simple. The header section will contain the names and \nimages of the different speakers with links, the event venue, and the schedule. You must also \ninclude a section that describes the purpose of the event –what the event is for and which \ncategory of audience it aims to target. Section the page into smaller chunks to make it look \nneat. Choose the right font style, font color, and background color for individual sections on \nthe page. Also, make sure to add a registrationbutton so that interested people can register \nfor the event.",
  "hue": 111
};
mount(experiment);
