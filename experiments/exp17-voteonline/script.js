import { mount } from "../../scripts/experiment.js";
const experiment = {
  "id": "EXP17",
  "number": 17,
  "title": "Online Voting — VoteOnline",
  "slug": "voteonline",
  "folder": "exp17-voteonline",
  "category": "Community",
  "mode": "vote",
  "brand": "VoteOnline",
  "tagline": "A voice in our fictional campus.",
  "icon": "✓",
  "label": "Candidates",
  "features": [
    "Fictional voter list",
    "Demo OTP",
    "One vote per voter",
    "Results"
  ],
  "items": [
    {
      "id": "item-1",
      "name": "Ananya Rao",
      "category": "North Ward",
      "price": 499,
      "stock": 8,
      "location": "Adyar",
      "description": "Ananya Rao — a fictional north ward listing for the VoteOnline academic demonstration.",
      "rating": 4.3
    },
    {
      "id": "item-2",
      "name": "Rohan Dev",
      "category": "North Ward",
      "price": 899,
      "stock": 9,
      "location": "Velachery",
      "description": "Rohan Dev — a fictional north ward listing for the VoteOnline academic demonstration.",
      "rating": 4.4
    },
    {
      "id": "item-3",
      "name": "Meera Shah",
      "category": "South Ward",
      "price": 1499,
      "stock": 10,
      "location": "OMR",
      "description": "Meera Shah — a fictional south ward listing for the VoteOnline academic demonstration.",
      "rating": 4.5
    },
    {
      "id": "item-4",
      "name": "Kavin Iyer",
      "category": "South Ward",
      "price": 2499,
      "stock": 11,
      "location": "Anna Nagar",
      "description": "Kavin Iyer — a fictional south ward listing for the VoteOnline academic demonstration.",
      "rating": 4.6
    }
  ],
  "printed": "17",
  "page": 15,
  "pages": [
    15,
    16
  ],
  "source": "17.VoteOnline is a secure and user-friendly e-voting platform designed to facilitate and streamline \nthe voting process for elections. The website allows registered voters to log in and cast their \nvotes remotely, ensuring a seamless voting experience. Key functionalities include user \nauthentication with multi-factor verification, a list of candidates or referendum options with \ndetailed information, and a simple, intuitive voting interface. Voters can view their voting \nhistory, receive confirmation of their submitted votes, and track the progress of the election in \nreal-time. The platform also provides secure data encryption to protect voter information and \nensures compliance with electoral regulations. VoteOnline aims to make the voting process \nmore accessible, efficient, and transparent, reducing barriers to participation and enhancing \nelection integrity\nAdmin\nCreateElectionCandidate\nAllocateelectionDatawithCandidate\nAllocateusertoelectionwards\nCreateVoterList\nImportVoterList\nView&update VoterList\nGetElectionResults\nUSER\nLoginusingVoter ID\nOTPLoginVerification\nGetOTP forVoting\nSelectCandidate\nSubmitVote",
  "hue": 27
};
mount(experiment);
