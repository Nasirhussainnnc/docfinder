
export interface Doctor {
  id: string;
  name: string;
  photo: string;
  specialty: string;
  qualifications: string;
  experience: number;
  bio: string;
  clinics: Clinic[];
  languages: string[];
  rating: number;
  reviews: number;
}

export interface Clinic {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  timings: WorkingHours[];
}

export interface WorkingHours {
  day: string;
  hours: string;
}

export const specialties = [
  "Cardiology", 
  "Dermatology", 
  "Endocrinology", 
  "Gastroenterology", 
  "Neurology", 
  "Obstetrics & Gynecology", 
  "Ophthalmology", 
  "Orthopedics", 
  "Pediatrics", 
  "Psychiatry", 
  "Pulmonology", 
  "Urology"
];

export const doctorsData: Doctor[] = [
  {
    id: "1",
    name: "Dr. MANSOOR Hussain",
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    specialty: "Cardiology",
    qualifications: "MD, FACC",
    experience: 15,
    bio: "Dr. MANSOOR Hussain is a board-certified cardiologist with over 15 years of experience in treating cardiovascular diseases. He specializes in preventive cardiology and heart failure management.",
    clinics: [
      {
        id: "c1",
        name: "Heart Care Center",
        address: "123 Main Street",
        city: "Bangalore",
        phone: "(555) 123-4567",
        timings: [
          { day: "Monday", hours: "9:00 AM - 5:00 PM" },
          { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
          { day: "Friday", hours: "9:00 AM - 1:00 PM" }
        ]
      },
      {
        id: "c2",
        name: "City Medical Center",
        address: "456 Park Avenue",
        city: "Bangalore",
        phone: "(555) 987-6543",
        timings: [
          { day: "Tuesday", hours: "10:00 AM - 6:00 PM" },
          { day: "Thursday", hours: "10:00 AM - 6:00 PM" }
        ]
      }
    ],
    languages: ["English", "Hindi", "Kannada"],
    rating: 4.8,
    reviews: 124
  },
  {
    id: "2",
    name: "Dr. Nasir Hussain",
    photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    specialty: "Dermatology",
    qualifications: "MD, DVD",
    experience: 12,
    bio: "Dr. Nasir Hussain is a skilled dermatologist specializing in skin disorders, cosmetic dermatology, and hair treatments. His expertise includes treatment of psoriasis, eczema, and various skin allergies.",
    clinics: [
      {
        id: "c3",
        name: "SkinCare Clinic",
        address: "789 Health Street",
        city: "Hyderabad",
        phone: "(555) 234-5678",
        timings: [
          { day: "Monday", hours: "8:00 AM - 4:00 PM" },
          { day: "Tuesday", hours: "8:00 AM - 4:00 PM" },
          { day: "Thursday", hours: "12:00 PM - 8:00 PM" }
        ]
      }
    ],
    languages: ["English", "Telugu", "Hindi", "Urdu"],
    rating: 4.9,
    reviews: 98
  },
  {
    id: "3",
    name: "Dr. Tanveer Hussain",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    specialty: "Psychiatry",
    qualifications: "MD, DNB",
    experience: 10,
    bio: "Dr. Tanveer Hussain is a compassionate psychiatrist with expertise in neurological disorders and mental health conditions. He specializes in anxiety disorders, depression, and cognitive behavioral therapy.",
    clinics: [
      {
        id: "c4",
        name: "Mind Wellness Center",
        address: "101 Brain Street",
        city: "Mumbai",
        phone: "(555) 345-6789",
        timings: [
          { day: "Monday", hours: "9:00 AM - 5:00 PM" },
          { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
          { day: "Friday", hours: "9:00 AM - 5:00 PM" }
        ]
      }
    ],
    languages: ["English", "Hindi", "Marathi"],
    rating: 4.7,
    reviews: 143
  },
  {
    id: "4",
    name: "Dr. Ayesha Khanum",
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    specialty: "Cardiology",
    qualifications: "MD, DM, FSCAI",
    experience: 18,
    bio: "Dr. Ayesha Khanum is a renowned cardiac surgeon specializing in complex cardiac procedures and heart transplants. She has performed over 1,000 successful cardiac surgeries throughout her distinguished career.",
    clinics: [
      {
        id: "c6",
        name: "Cardiac Excellence Center",
        address: "303 Heart Avenue",
        city: "Delhi",
        phone: "(555) 567-8901",
        timings: [
          { day: "Monday", hours: "7:00 AM - 3:00 PM" },
          { day: "Wednesday", hours: "7:00 AM - 3:00 PM" },
          { day: "Friday", hours: "7:00 AM - 12:00 PM" }
        ]
      }
    ],
    languages: ["English", "Hindi", "Urdu"],
    rating: 4.9,
    reviews: 211
  },
  {
    id: "5",
    name: "Dr. Siddiqua Khanum",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    specialty: "Pediatrics",
    qualifications: "MD, DCH",
    experience: 14,
    bio: "Dr. Siddiqua Khanum is a dedicated pediatrician with expertise in child development, preventive care, and childhood diseases. Her gentle approach makes her a favorite among young patients and their families.",
    clinics: [
      {
        id: "c7",
        name: "Children's Wellness Clinic",
        address: "404 Kids Lane",
        city: "Delhi",
        phone: "(555) 678-9012",
        timings: [
          { day: "Monday", hours: "9:00 AM - 4:00 PM" },
          { day: "Tuesday", hours: "9:00 AM - 4:00 PM" },
          { day: "Thursday", hours: "9:00 AM - 4:00 PM" }
        ]
      },
      {
        id: "c8",
        name: "Family Health Center",
        address: "505 Care Street",
        city: "Delhi",
        phone: "(555) 789-0123",
        timings: [
          { day: "Wednesday", hours: "10:00 AM - 6:00 PM" },
          { day: "Friday", hours: "10:00 AM - 6:00 PM" }
        ]
      }
    ],
    languages: ["English", "Hindi", "Bengali"],
    rating: 4.6,
    reviews: 178
  },
  {
    id: "6",
    name: "Dr. Fathima Khan",
    photo: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    specialty: "Obstetrics & Gynecology",
    qualifications: "MD, DNB, MRCOG",
    experience: 16,
    bio: "Dr. Fathima Khan is a distinguished gynecologist with expertise in women's health, prenatal care, and gynecological surgeries. She specializes in high-risk pregnancies and minimally invasive procedures.",
    clinics: [
      {
        id: "c9",
        name: "Women's Healthcare Associates",
        address: "606 Maternity Road",
        city: "Mumbai",
        phone: "(555) 890-1234",
        timings: [
          { day: "Tuesday", hours: "8:00 AM - 5:00 PM" },
          { day: "Wednesday", hours: "8:00 AM - 5:00 PM" },
          { day: "Thursday", hours: "8:00 AM - 5:00 PM" }
        ]
      }
    ],
    languages: ["English", "Hindi", "Marathi", "Gujarati"],
    rating: 4.8,
    reviews: 156
  },
  {
    id: "7",
    name: "Dr. Zainab Hussain",
    photo: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    specialty: "Pulmonology",
    qualifications: "MD, DM, FCCP",
    experience: 13,
    bio: "Dr. Zainab Hussain is a specialized pulmonologist with expertise in respiratory disorders and sleep medicine. She focuses on the diagnosis and treatment of asthma, COPD, and interstitial lung diseases.",
    clinics: [
      {
        id: "c10",
        name: "Respiratory Care Institute",
        address: "707 Breath Avenue",
        city: "Bangalore",
        phone: "(555) 901-2345",
        timings: [
          { day: "Monday", hours: "9:00 AM - 5:00 PM" },
          { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
          { day: "Friday", hours: "9:00 AM - 3:00 PM" }
        ]
      }
    ],
    languages: ["English", "Hindi", "Kannada", "Arabic"],
    rating: 4.7,
    reviews: 132
  }
];

