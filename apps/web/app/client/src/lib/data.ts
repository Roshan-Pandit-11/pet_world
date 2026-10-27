import hero from "@/assets/hero.jpg";
import cat from "@/assets/cat.jpg";
import garden from "@/assets/sitter-garden.jpg";
import interior from "@/assets/home-interior.jpg";

export type PetType = "Dog" | "Cat" | "Rabbit" | "Bird";
export type PetSize = "Small" | "Medium" | "Large";
export type VerifyStatus = "verified" | "pending" | "not_submitted";

export interface Sitter {
  id: string;
  name: string;
  area: string;
  city: string;
  avatar: string;
  cover: string;
  gallery: string[];
  bio: string;
  headline: string;
  years: number;
  qualifications: string[];
  verification: { identity: VerifyStatus; address: VerifyStatus; home: VerifyStatus };
  rating: number;
  reviewCount: number;
  petTypes: PetType[];
  sizes: PetSize[];
  maxPets: number;
  pricePerDay: number;
  outdoorSpace: boolean;
  amenities: string[];
  homeDescription: string;
  routine: string[];
  rules: string[];
  unavailable: string[]; // ISO dates
  responseTime: string;
}

const portrait = (id: string) => `https://images.unsplash.com/${id}?w=240&h=240&fit=crop&crop=faces&auto=format&q=70`;

const iso = (offset: number) => {
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return d.toISOString().slice(0, 10);
};

export const sitters: Sitter[] = [
  {
    id: "ananya-rao",
    name: "Ananya Rao",
    area: "Indiranagar",
    city: "Bengaluru",
    avatar: portrait("photo-1494790108377-be9c29b29330"),
    cover: hero,
    gallery: [hero, interior, garden],
    headline: "Calm, sunlit apartment with a devoted dog lover",
    bio: "I grew up with three retrievers and have spent the last six years caring for neighbours' dogs while they travel. I work from home, so your pet is never alone for long.",
    years: 6,
    qualifications: ["Pet First Aid certified", "Canine behaviour course"],
    verification: { identity: "verified", address: "verified", home: "verified" },
    rating: 4.97,
    reviewCount: 128,
    petTypes: ["Dog", "Cat"],
    sizes: ["Small", "Medium", "Large"],
    maxPets: 2,
    pricePerDay: 1400,
    outdoorSpace: false,
    amenities: ["Air conditioning", "Daily photo updates", "Medication support", "Park nearby"],
    homeDescription: "A quiet two-bedroom apartment with soft furnishings, a dedicated pet corner and a large park two minutes away.",
    routine: ["7:00 Morning walk (40 min)", "8:00 Breakfast", "13:00 Play & cuddle time", "18:00 Evening park walk", "20:00 Dinner & wind-down"],
    rules: ["No smoking", "Vaccinations must be up to date", "One family at a time"],
    unavailable: [iso(3), iso(4), iso(5), iso(12)],
    responseTime: "within an hour",
  },
  {
    id: "rohan-mehta",
    name: "Rohan Mehta",
    area: "Koramangala",
    city: "Bengaluru",
    avatar: portrait("photo-1500648767791-00dcc994a43e"),
    cover: garden,
    gallery: [garden, interior, hero],
    headline: "Garden home for active, social dogs",
    bio: "Former veterinary assistant with a fenced garden and two friendly labs of my own. Big dogs with big energy are my favourite guests.",
    years: 9,
    qualifications: ["Former vet assistant", "Pet First Aid certified"],
    verification: { identity: "verified", address: "verified", home: "pending" },
    rating: 4.92,
    reviewCount: 86,
    petTypes: ["Dog"],
    sizes: ["Medium", "Large"],
    maxPets: 3,
    pricePerDay: 1800,
    outdoorSpace: true,
    amenities: ["Fenced garden", "Daily photo updates", "Pick-up & drop-off", "Grooming"],
    homeDescription: "An independent house with a 1,200 sq ft fenced garden, shaded lawn and a cool indoor rest area.",
    routine: ["6:30 Garden zoomies", "7:30 Breakfast", "11:00 Training games", "17:30 Long walk", "20:00 Dinner"],
    rules: ["Dogs must be socialised", "No aggressive behaviour history"],
    unavailable: [iso(1), iso(2), iso(9), iso(10)],
    responseTime: "within 2 hours",
  },
  {
    id: "meera-iyer",
    name: "Meera Iyer",
    area: "HSR Layout",
    city: "Bengaluru",
    avatar: portrait("photo-1438761681033-6461ffad8d80"),
    cover: cat,
    gallery: [cat, interior, hero],
    headline: "A quiet, cat-safe home with window perches",
    bio: "Cats are my calling. My home is netted, calm, and full of sunny window spots. I'm experienced with shy and senior cats.",
    years: 5,
    qualifications: ["Feline care workshop", "Senior pet care"],
    verification: { identity: "verified", address: "verified", home: "verified" },
    rating: 4.99,
    reviewCount: 64,
    petTypes: ["Cat", "Rabbit"],
    sizes: ["Small", "Medium"],
    maxPets: 3,
    pricePerDay: 950,
    outdoorSpace: false,
    amenities: ["Netted balconies", "Medication support", "Daily photo updates", "Separate cat room"],
    homeDescription: "A netted three-bedroom apartment with a dedicated cat room, climbing shelves and plenty of hiding spots.",
    routine: ["8:00 Breakfast & litter", "12:00 Play session", "16:00 Brushing", "20:00 Dinner & quiet time"],
    rules: ["Cats must be litter trained", "No smoking"],
    unavailable: [iso(6), iso(7)],
    responseTime: "within an hour",
  },
  {
    id: "kabir-singh",
    name: "Kabir Singh",
    area: "Whitefield",
    city: "Bengaluru",
    avatar: portrait("photo-1507003211169-0a1dd7228f2e"),
    cover: interior,
    gallery: [interior, garden, cat],
    headline: "Spacious villa, patient care for seniors",
    bio: "Retired teacher with time, patience and a love for older dogs who need a slower pace. Medication schedules are no trouble.",
    years: 12,
    qualifications: ["Pet First Aid certified", "Senior pet care"],
    verification: { identity: "verified", address: "pending", home: "not_submitted" },
    rating: 4.88,
    reviewCount: 41,
    petTypes: ["Dog", "Cat", "Bird"],
    sizes: ["Small", "Medium"],
    maxPets: 2,
    pricePerDay: 1100,
    outdoorSpace: true,
    amenities: ["Garden", "Medication support", "Ground floor (no stairs)"],
    homeDescription: "A ground-floor villa with a shaded courtyard, ideal for older pets who prefer no stairs.",
    routine: ["7:30 Gentle walk", "8:30 Breakfast & meds", "15:00 Courtyard rest", "19:00 Evening stroll"],
    rules: ["No puppies under 6 months"],
    unavailable: [],
    responseTime: "within 4 hours",
  },
  {
    id: "sara-dsouza",
    name: "Sara D'Souza",
    area: "Jayanagar",
    city: "Bengaluru",
    avatar: portrait("photo-1544005313-94ddf0286df2"),
    cover: hero,
    gallery: [hero, cat, interior],
    headline: "Cosy flat, one guest at a time",
    bio: "I host only one pet at a time so they get my full attention. Perfect for anxious first-time boarders.",
    years: 3,
    qualifications: ["Canine behaviour course"],
    verification: { identity: "verified", address: "verified", home: "verified" },
    rating: 4.95,
    reviewCount: 37,
    petTypes: ["Dog", "Cat"],
    sizes: ["Small"],
    maxPets: 1,
    pricePerDay: 1250,
    outdoorSpace: false,
    amenities: ["Air conditioning", "Daily video call", "Daily photo updates"],
    homeDescription: "A warm one-bedroom flat near Jayanagar 4th Block park, with a single dedicated guest bed.",
    routine: ["7:00 Walk", "8:00 Breakfast", "14:00 Nap & enrichment", "18:30 Walk", "20:00 Dinner"],
    rules: ["One pet at a time", "No smoking"],
    unavailable: [iso(2), iso(15)],
    responseTime: "within an hour",
  },
  {
    id: "vikram-nair",
    name: "Vikram Nair",
    area: "Hebbal",
    city: "Bengaluru",
    avatar: portrait("photo-1506794778202-cad84cf45f1d"),
    cover: garden,
    gallery: [garden, hero, interior],
    headline: "Lakeside walks and a big, happy yard",
    bio: "Trail runner and dog dad. Your high-energy pup will come home tired and happy after lakeside runs.",
    years: 4,
    qualifications: ["Pet First Aid certified"],
    verification: { identity: "pending", address: "not_submitted", home: "not_submitted" },
    rating: 4.81,
    reviewCount: 22,
    petTypes: ["Dog"],
    sizes: ["Medium", "Large"],
    maxPets: 2,
    pricePerDay: 1000,
    outdoorSpace: true,
    amenities: ["Garden", "Long runs", "Daily photo updates"],
    homeDescription: "An independent home near Hebbal lake with a grassy yard.",
    routine: ["6:00 Lakeside run", "7:30 Breakfast", "17:00 Yard play", "20:00 Dinner"],
    rules: ["Dogs must be leash trained"],
    unavailable: [iso(8)],
    responseTime: "within 3 hours",
  },
];

export const getSitter = (id: string) => sitters.find((s) => s.id === id);

export interface Pet {
  id: string;
  name: string;
  type: PetType;
  breed: string;
  age: number;
  size: PetSize;
  photo: string;
  notes: string;
}

export const myPets: Pet[] = [
  { id: "bruno", name: "Bruno", type: "Dog", breed: "Golden Retriever", age: 5, size: "Large", photo: hero, notes: "Loves fetch. Allergic to chicken." },
  { id: "miso", name: "Miso", type: "Cat", breed: "Tabby", age: 3, size: "Small", photo: cat, notes: "Shy for the first day. Wet food twice daily." },
];

export type BookingStatus = "Requested" | "Confirmed" | "In progress" | "Completed" | "Cancelled";

export interface Booking {
  id: string;
  sitterId: string;
  petIds: string[];
  checkIn: string;
  checkOut: string;
  status: BookingStatus;
  total: number;
}

export const myBookings: Booking[] = [
  { id: "PC-2041", sitterId: "ananya-rao", petIds: ["bruno"], checkIn: iso(6), checkOut: iso(10), status: "Confirmed", total: 6048 },
  { id: "PC-1987", sitterId: "meera-iyer", petIds: ["miso"], checkIn: iso(-30), checkOut: iso(-25), status: "Completed", total: 5130 },
  { id: "PC-1902", sitterId: "rohan-mehta", petIds: ["bruno"], checkIn: iso(-70), checkOut: iso(-66), status: "Completed", total: 7776 },
];

export const stayUpdates = [
  { id: 1, sitterId: "meera-iyer", pet: "Miso", time: "Day 3 · 9:12 am", text: "Miso finally claimed the window perch and ate all of her breakfast.", photo: cat },
  { id: 2, sitterId: "rohan-mehta", pet: "Bruno", time: "Day 2 · 6:40 pm", text: "Two laps of the garden and a long nap in the shade. Very happy boy.", photo: garden },
];

export const reviews = [
  { name: "Priya S.", pet: "Coco, Beagle", rating: 5, text: "I got photos every morning and evening. Coco came home calmer than when she left — that says everything.", date: "September 2026" },
  { name: "Arjun K.", pet: "Leo, Indie", rating: 5, text: "The home was spotless and the routine matched exactly what we use at home. Booking again for Diwali.", date: "August 2026" },
  { name: "Neha T.", pet: "Pumpkin, Persian", rating: 5, text: "Pumpkin is very shy and still settled in on day one. Calm, careful, kind.", date: "July 2026" },
];
