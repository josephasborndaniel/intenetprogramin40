import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP44",
  "number": 44,
  "title": "Placement Examination",
  "slug": "placement",
  "folder": "exp44-placement",
  "category": "Learning",
  "mode": "exam",
  "brand": "Launchpad Assessments",
  "tagline": "Your next opportunity starts here.",
  "icon": "✎",
  "label": "Exams",
  "features": [
    "Scheduled tests",
    "Automatic marking",
    "Rankings",
    "Re-evaluation"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Web Foundations Assessment",
      "category": "Technical",
      "price": 499,
      "stock": 8,
      "location": "Adyar",
      "description": "Web Foundations Assessment — a fictional technical listing for the Launchpad Assessments academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Quantitative Aptitude",
      "category": "Aptitude",
      "price": 899,
      "stock": 9,
      "location": "Velachery",
      "description": "Quantitative Aptitude — a fictional aptitude listing for the Launchpad Assessments academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Logical Reasoning",
      "category": "Reasoning",
      "price": 1499,
      "stock": 10,
      "location": "OMR",
      "description": "Logical Reasoning — a fictional reasoning listing for the Launchpad Assessments academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Communication Skills",
      "category": "Language",
      "price": 2499,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Communication Skills — a fictional language listing for the Launchpad Assessments academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "43",
  "page": 40,
  "pages": [
    40
  ],
  "source": "43.A student logs into the online placement examination website using their credentials. They are \nguided to an examination dashboard where they can start their placement test at the scheduled time. \nAfter completing the test, the system automatically evaluatesthe answers and generates a score. \nOnce the results are processed, the website displays a list of students who have passed the exam, \nalong with their scores and rankings. Students can also view detailed feedback on their performance \nand download their scorecards. The website ensures secure access to results and provides an option \nto apply for re-evaluation if needed.\nADMIN \n•Login\n•Providing Login rights to Candidate for attending exam\n•Scheduling the Exam\n•Loading the question \n•Publishing the Result\nCANDIDATE\n•Login\n•Attempt the exam by choosing allotted schedule\n•Seeing the Result",
  "hue": 306
};
mount(experiment);
