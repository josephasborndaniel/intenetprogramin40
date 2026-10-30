import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP46",
  "number": 46,
  "title": "Income Tax Calculation",
  "slug": "income-tax",
  "folder": "exp46-income-tax",
  "category": "Finance",
  "mode": "tax",
  "brand": "Tax Notebook",
  "tagline": "Understand the numbers behind your income.",
  "icon": "₹",
  "label": "Examples",
  "features": [
    "PDF slab calculation",
    "Deductions",
    "Admin rules",
    "Summary export"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Academic PDF tax rules",
      "category": "Example",
      "price": 499,
      "stock": 8,
      "location": "Adyar",
      "description": "Academic PDF tax rules — a fictional example listing for the Tax Notebook academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Configurable deductions",
      "category": "Configuration",
      "price": 899,
      "stock": 9,
      "location": "Velachery",
      "description": "Configurable deductions — a fictional configuration listing for the Tax Notebook academic demonstration.",
      "rating": 4.4
    }
  ],
  "printed": "45",
  "page": 42,
  "pages": [
    42
  ],
  "source": "45.An employee visits the income tax calculation webpage, where they are prompted to enter their financial \ndetails, such as annual salary, bonuses, and other taxable income. The webpage also allows the employee to \ninput deductions and exemptions, such as insurance premiums or retirement contributions. After submitting \nthe information, the system calculates the applicable income tax based on the latest tax slabs and displays a \ndetailed breakdown, including total tax liability, net income after tax, and any tax-saving tips. The employee \ncan then download a summary report for their records or use the data for filing their tax returns.\nADMIN\n•Login\n•Update the fields required for collecting input from employee \n•Modify the input value taken for the calculation based on government norms, Now your \npage can take the norms as follows,\nNet Taxable Income = (Gross pay * 12) -(House Rent Allowance *12) -\n(Standard Detection =50,000)-{(Pension*12   Maximum    \ndetection of this category is 150,000} -) -(Health  \nInsurance * 12 \nif net taxable is below 500,000/-tax is Nil. if it exceeds condition then Tax\ncalculation  \nslab rate    given below is to be followed. \n0 to 250,000   tax=0, \n250,001 to 500,000  tax= 5% (net taxable income –250,000)  \n500,001 to 1000,000   tax= 12, 500 + 20% (net taxable income –500,000 ) \nif the income > 10,00,000,  tax= 112,500 + 30% (net taxable income –\n10,00,000).   \nEMPLOYEE\n•Login by any of the existing authenticated credentials (like social media login or  gmail \nlogin)\n•Calculating Tax page",
  "hue": 20
};
mount(experiment);
