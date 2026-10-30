import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP01",
  "number": 1,
  "title": "Library Management System",
  "slug": "library",
  "folder": "exp01-library",
  "category": "Learning",
  "mode": "library",
  "brand": "The reading room",
  "tagline": "Find your next chapter.",
  "icon": "📚",
  "label": "Books",
  "features": [
    "Search books",
    "Issue and return",
    "Overdue fines",
    "Study materials"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "The Silent River",
      "category": "Fiction",
      "price": 0,
      "stock": 8,
      "location": "Adyar",
      "description": "The Silent River — a fictional fiction listing for the The reading room academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Algorithms Illustrated",
      "category": "Academic",
      "price": 0,
      "stock": 9,
      "location": "Velachery",
      "description": "Algorithms Illustrated — a fictional academic listing for the The reading room academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "A Brief History of Stars",
      "category": "Science",
      "price": 0,
      "stock": 10,
      "location": "OMR",
      "description": "A Brief History of Stars — a fictional science listing for the The reading room academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Designing the Web",
      "category": "Academic",
      "price": 0,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Designing the Web — a fictional academic listing for the The reading room academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "1",
  "page": 1,
  "pages": [
    1
  ],
  "source": "1.A local library needs a website to streamline operations and enhance user \nexperience. The site will include a catalog for searching and viewing books, user \naccounts for borrowing and managing books, and an admin dashboard for \nmanaging inventory and user data. Essential features include a search function, \nbook details page, user login system, and contact form,Thesystem helps both \nstudents and library managers to keep constant track of all the books available in \nthe library. It allows both the admin and the student to search for the desired book. \nIt becomes necessary for colleges to keep a continuous check on the books issued \nand returned and even calculate fines.\nLibrarian Admin:\nLogin\nAdd Book\nUpdate/DeleteBook\nIssueBookforstudent\nReturnBook Status\nMakeFine\nUpdatematerial(year,semesterwise )\nViewmaterial\nUser\nLogin\nRegister\nSearchBook\nMyBorrowHistoryBook\noIssueDate,ExpDate\nCheckFine\nSearchmaterial(year,semesterwise)\nDownloadmaterial\nMyprofile",
  "hue": 155
};
mount(experiment);
