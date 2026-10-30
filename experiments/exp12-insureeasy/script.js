import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP12",
  "number": 12,
  "title": "Insurance Management — InsureEasy",
  "slug": "insureeasy",
  "folder": "exp12-insureeasy",
  "category": "Finance",
  "mode": "cases",
  "brand": "InsureEasy",
  "tagline": "A clearer view of your cover.",
  "icon": "☂",
  "label": "Policies",
  "features": [
    "Policy comparison",
    "Premium payments",
    "Claims",
    "Agent approval"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Everyday Health",
      "category": "Health",
      "price": 499,
      "stock": 8,
      "location": "Adyar",
      "description": "Everyday Health — a fictional health listing for the InsureEasy academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Drive Protect",
      "category": "Auto",
      "price": 899,
      "stock": 9,
      "location": "Velachery",
      "description": "Drive Protect — a fictional auto listing for the InsureEasy academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Home Essentials",
      "category": "Home",
      "price": 1499,
      "stock": 10,
      "location": "OMR",
      "description": "Home Essentials — a fictional home listing for the InsureEasy academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Family Shield",
      "category": "Life",
      "price": 2499,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Family Shield — a fictional life listing for the InsureEasy academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "12",
  "page": 11,
  "pages": [
    11
  ],
  "source": "12.InsureEasy, a cutting-edge online insurance management platform, is designed to \nstreamline the insurance process for users. The website allows customers to easily \ncompare and purchase various insurance policies, including health, auto, and home \ninsurance. Key functionalities include user registration and login, a policy comparison \ntool, detailed policy descriptions, and secure online applications. Users can view and \nmanage their existing policies, make premium payments, and file claims through an \nintuitive dashboard. The platform also provides personalized recommendations based on \nuser profiles and needs, and sends automated reminders for policy renewals and \nupcoming payments. InsureEasy aims to enhance user convenience and provide \ncomprehensive support for all insurance-related needs.This system maintains \ninformation of managers who can deal with agents and customers. In existing system, the \nmanual procedure is followed where records are used to maintain data which is a time \ntaking process and requires manpower and calculating commissions dues. Etc are done \nmanually. This system is where agents send SMS alerts to the policyholder to remind them \nbefore and exceed the data of due.\nAdmin\nLogin\nApproveAgentlogin\nViewallagentdetails\nAgents\nRegister\nLogin\nCreateCustomer\nManagerCustomerDetails\nManagePolicyDetails\nSendSMSAlert\nUser\nLogin\nManagepolicydetails\nGetsmsalert",
  "hue": 202
};
mount(experiment);
