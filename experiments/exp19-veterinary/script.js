import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP19",
  "number": 19,
  "title": "Veterinary Consultation",
  "slug": "veterinary",
  "folder": "exp19-veterinary",
  "category": "Health",
  "mode": "cases",
  "brand": "Kindred Vet",
  "tagline": "Care starts with a conversation.",
  "icon": "♧",
  "label": "Clinics",
  "features": [
    "Farmer requests",
    "Attachment metadata",
    "Doctor responses",
    "Subscriptions"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Government CVH North",
      "category": "Free",
      "price": 499,
      "stock": 8,
      "location": "Adyar",
      "description": "Government CVH North — a fictional free listing for the Kindred Vet academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Kindred Private Clinic",
      "category": "Private",
      "price": 899,
      "stock": 9,
      "location": "Velachery",
      "description": "Kindred Private Clinic — a fictional private listing for the Kindred Vet academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Government CVH South",
      "category": "Free",
      "price": 1499,
      "stock": 10,
      "location": "OMR",
      "description": "Government CVH South — a fictional free listing for the Kindred Vet academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Greenfield Vet",
      "category": "Private",
      "price": 2499,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Greenfield Vet — a fictional private listing for the Kindred Vet academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "19",
  "page": 18,
  "pages": [
    18
  ],
  "source": "19.The farmer must send his animal’s signs and symptoms to doctor in video, audio, images \nortext form. The doctor will receive the farmer’s requests and respond. The user’s data \nwill beautomatically added to the database. The farmer has to register first and has to \nsubscribe. AfarmerwillfreelysubscribetoGovt.CVHs.Hemustpayafeeifhewill\nsubscribetotheprivateclinic’sdoctor.Therewillbetwopaymentgatewaysforthe\nfarmers,banktransfer(Doctorwillprovide his bank information while creating his \nprofile) and easy paisa. Doctors will providetheir bank details for payments. He can also \nprovide easy paisa account details. There will beimages of influenced animals with basic \ndiseases and their prescriptions. Based on recordeddata,thesystemcanperforman\nanalysisthatwhichdiseaseattacksonpetsmostlyinaspecificarea.\nUSER\nRegister\nLogin\nPostComplaint\nMyComplaintStatus\nViewVetcuredetails\nViewNews\nViewDoctor\nViewReport\nPostFeedback\nMakePayment\nMyProfile\nDoctor\nRegister\nLogin\nViewComplaint\nPostSolution\nManageCure\nManagenews\nViewuserDetails\nViewPaymentDetails\nFeedbackDetails",
  "hue": 101
};
mount(experiment);
