import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP08",
  "number": 8,
  "title": "Hospital Appointment Booking",
  "slug": "hospital",
  "folder": "exp08-hospital",
  "category": "Health",
  "mode": "booking",
  "brand": "MedCare",
  "tagline": "A simpler way to plan your visit.",
  "icon": "✚",
  "label": "Doctors",
  "features": [
    "Specialty search",
    "Appointments",
    "Check-in history",
    "Doctor reviews"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Dr Ananya Rao",
      "category": "General",
      "price": 1200,
      "stock": 8,
      "location": "Adyar",
      "description": "Dr Ananya Rao — a fictional general listing for the MedCare academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Dr Kavin Shah",
      "category": "Cardiology",
      "price": 2400,
      "stock": 9,
      "location": "Velachery",
      "description": "Dr Kavin Shah — a fictional cardiology listing for the MedCare academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Dr Meera Iyer",
      "category": "Dermatology",
      "price": 3800,
      "stock": 10,
      "location": "OMR",
      "description": "Dr Meera Iyer — a fictional dermatology listing for the MedCare academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Dr Dev Menon",
      "category": "Orthopaedics",
      "price": 6500,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Dr Dev Menon — a fictional orthopaedics listing for the MedCare academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "8",
  "page": 7,
  "pages": [
    7,
    8
  ],
  "source": "8.In an effort to streamline the appointment process and enhance patient experience, \nMedCare Hospital has developed an online appointment booking system. This platform \nallows patients to book appointments with doctors from various specialties at their \nconvenience. Key functionalities include user registration and login, browsing available \ndoctors and appointment slots, booking and canceling appointments, and receiving \nappointment reminders via email or SMS. Patients can also view their appointment \nhistory and update their personal details. The system ensures data security and \ncompliance with healthcare regulations to protect patient information. This online service \naims to reduce wait times, minimize paperwork, and provide a seamless experience for \npatients and healthcare providers alike.This website helps the patient to search any \nhospital and book appointments as they prefer.\nSearchModule\nAppointmentBooking\nCheck-informSubmitting\nAppointmentmanagement\nScheduleatiming\nPastappointmentManagement\nAdminFeatures\nManageappointments\nManagedoctors\nViewAppointmentsstatistics\nRatingDetails\nPatientFeatures\nSignup/Login.\nCanchooseandbookanappointmentattheflexibletimeanddate.\nCansearchfordoctoraccordingtospecialtyandlocation.\nCan write reviews about the doctor and can select doctors according to otheruser\nfeedback.\nCanaccessallpreviouscheck-indetailsandmedicalpastappointment\nUser\nUserRegistration\nUserLogin\nSearchLocationwise\nViewHosptiallist\nBookAppointment\nViewstatus\nViewgooglemapforsinglehospital\nHospital\nHospitalRegistration\nHosptiallogin\nCreatehostpitaldetails\nUpdatedetails\nUpdatelocation",
  "hue": 54
};
mount(experiment);
