import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP36",
  "number": 36,
  "title": "Online Teaching — EduConnect",
  "slug": "educonnect",
  "folder": "exp36-educonnect",
  "category": "Learning",
  "mode": "cases",
  "brand": "EduConnect",
  "tagline": "Learn something that opens doors.",
  "icon": "▤",
  "label": "Courses",
  "features": [
    "Course enrolment",
    "Assignments",
    "Quizzes",
    "Teacher dashboard"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Web Foundations",
      "category": "Technology",
      "price": 499,
      "stock": 8,
      "location": "Adyar",
      "description": "Web Foundations — a fictional technology listing for the EduConnect academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Python Essentials",
      "category": "Programming",
      "price": 899,
      "stock": 9,
      "location": "Velachery",
      "description": "Python Essentials — a fictional programming listing for the EduConnect academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Visual Design",
      "category": "Design",
      "price": 1499,
      "stock": 10,
      "location": "OMR",
      "description": "Visual Design — a fictional design listing for the EduConnect academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Data Fundamentals",
      "category": "Data",
      "price": 2499,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Data Fundamentals — a fictional data listing for the EduConnect academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "36",
  "page": 33,
  "pages": [
    33
  ],
  "source": "36.EduConnect is an innovative online teaching platform designed to facilitate interactive and \nflexible learning experiences. The website offers a range of functionalities, including a \"Course \nCatalog\" where students can browse and enroll in various subjects and programs. Key features \ninclude live video classes, pre-recorded lectures, and downloadable study materials. The platform \nalso includes interactive tools such as discussion forums, quizzes, and assignments to engage \nstudents. Teachers can create and manage courses, track student progress, and provide feedback \nthrough a dedicated instructor dashboard. Additional features include user registration and login, \nsecure payment options for course fees, and a \"Support\" section for technical help and inquiries. \nEduConnect aims to provide a comprehensive and accessible learning environment for students and \neducators alike.\ni. Student Registration\nii. Teacher Registration\niii. Subject Allocation / Registration\niv. Time Management",
  "hue": 10
};
mount(experiment);
