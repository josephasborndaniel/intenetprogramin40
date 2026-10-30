import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP21",
  "number": 21,
  "title": "Online Job Recruitment",
  "slug": "jobs",
  "folder": "exp21-jobs",
  "category": "Services",
  "mode": "cases",
  "brand": "Next Chapter",
  "tagline": "Good work starts with a connection.",
  "icon": "↗",
  "label": "Vacancies",
  "features": [
    "Job filters",
    "Saved vacancies",
    "Applications",
    "Director approval"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Frontend Developer",
      "category": "Chennai",
      "price": 499,
      "stock": 8,
      "location": "Adyar",
      "description": "Frontend Developer — a fictional chennai listing for the Next Chapter academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Data Analyst",
      "category": "Bengaluru",
      "price": 899,
      "stock": 9,
      "location": "Velachery",
      "description": "Data Analyst — a fictional bengaluru listing for the Next Chapter academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "UI Designer",
      "category": "Remote",
      "price": 1499,
      "stock": 10,
      "location": "OMR",
      "description": "UI Designer — a fictional remote listing for the Next Chapter academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "QA Engineer",
      "category": "Chennai",
      "price": 2499,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "QA Engineer — a fictional chennai listing for the Next Chapter academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "21",
  "page": 19,
  "pages": [
    19,
    20
  ],
  "source": "21.Applicants can browse through the vacancy details that are posted and can apply for the \njobsonline. Director can browse through the posted resumes and select suitable \ncandidates. Filter,SearchfacilityforUseraccordingtotheirrequiredvacancy.Daily\nupdatesvianotificationsandother communication media. Sending resume saves effort, \ntime and cost of user All vacanciesare available on a single interface user can set privacy \nlevel for different companies’ user cansavejobs according to their needs.\nAdmin\nLogin\nApprovedirector\nViewUser\nView Report\nDirector\nRegister\nLogin\nPostVacancy\noImage,description,contact, etc\nViewVacancy\nViewappliedusers\nLogout\nUser\nRegister\nLogin\nSearchvacancy\nFilterbylocationwise, category.\nApplyforvacancy\nLogout",
  "hue": 175
};
mount(experiment);
