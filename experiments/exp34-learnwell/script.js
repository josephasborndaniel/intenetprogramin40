import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP34",
  "number": 34,
  "title": "Tuition Centre — LearnWell",
  "slug": "learnwell",
  "folder": "exp34-learnwell",
  "category": "Learning",
  "mode": "cases",
  "brand": "LearnWell",
  "tagline": "A little guidance. A world of growth.",
  "icon": "✎",
  "label": "Subjects",
  "features": [
    "Course enrolment",
    "Fees",
    "Announcements",
    "Maintenance requests"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Mathematics",
      "category": "Online",
      "price": 499,
      "stock": 8,
      "location": "Adyar",
      "description": "Mathematics — a fictional online listing for the LearnWell academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Physics",
      "category": "Offline",
      "price": 899,
      "stock": 9,
      "location": "Velachery",
      "description": "Physics — a fictional offline listing for the LearnWell academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Computer Science",
      "category": "Online",
      "price": 1499,
      "stock": 10,
      "location": "OMR",
      "description": "Computer Science — a fictional online listing for the LearnWell academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "English",
      "category": "Offline",
      "price": 2499,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "English — a fictional offline listing for the LearnWell academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "34",
  "page": 31,
  "pages": [
    31,
    32
  ],
  "source": "34. LearnWell Tuition Centre has launched a dedicated website to streamline announcements and \nmanage various aspects of its operations. The website features a central \"Announcements\" section \nwhere updates on class schedules, special events, and important notices are posted regularly. Key \nfunctionalities include a \"Course Offerings\" page detailing available subjects, schedules, and fees, \nand an \"Online Registration\" system for enrolling in classes and managing student profiles. There \nis also a \"Maintenance Requests\" section where students and parents can report issues or request \nassistance. The site includes an \"About Us\" page providing information about the centre's mission \nand teaching staff, and a \"Contact\" page for inquiries and support. LearnWell’s website aims to \nkeep the community informed and facilitate efficient management of tuition services.\n1) Admin detail –Login, Registration form detail\n2) Teachers detail –Login, Registration form detail\n3) Students detail –Fees paid detail, Report-monthly and yearly, feedback report\n4) Subjects detail –Duration, fees detail.\n5) Online / Offline tuition availability.     ",
  "hue": 296
};
mount(experiment);
