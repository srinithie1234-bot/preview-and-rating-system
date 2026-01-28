import leo from "../assets/leo.jpg";
import jailour from "../assets/jailour.jpg";
import vikram from "../assets/vikram.jpg";

export const moviesData = [
  {
    id: 1,
    title: "Leo",
    image: leo,
    description: "Leo is an action thriller film directed by Lokesh Kanagaraj.",
    rating: 4.5,
    viewers: 1200000,
    subscribers: 450000,
    reviews: []   // ⭐ VERY IMPORTANT
  },
  {
    id: 2,
    title: "Jailer",
    image: jailour,
    description: "Jailer follows the story of a retired jailer who takes revenge.",
    rating: 4.2,
    viewers: 980000,
    subscribers: 380000,
    reviews: []
  },
  {
    id: 3,
    title: "Vikram",
    image: vikram,
    description: "Vikram is a high-octane action thriller.",
    rating: 4.6,
    viewers: 1500000,
    subscribers: 520000,
    reviews: []
  }
];
localStorage.getItem("loggedInUser")

