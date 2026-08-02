import {
  FaCode,
  FaPalette,
  FaSearch,
  FaBullhorn,
  FaChartLine,
  FaPenNib,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: FaCode,
    title: "Web Development",
    description: "Fast, responsive websites built for performance.",
    features: ["React", "Responsive", "SEO Friendly"],
  },
  {
    id: 2,
    icon: FaPalette,
    title: "UI/UX Design",
    description: "Modern interfaces focused on user experience.",
    features: ["Figma", "Wireframes", "Prototypes"],
  },
  {
    id: 3,
    icon: FaSearch,
    title: "SEO Optimization",
    description: "Increase visibility and rank higher on Google.",
    features: ["Keywords", "On-Page SEO", "Analytics"],
  },
  {
    id: 4,
    icon: FaPenNib,
    title: "Brand Identity",
    description: "Create a memorable and consistent brand.",
    features: ["Logo", "Colors", "Guidelines"],
  },
  {
    id: 5,
    icon: FaBullhorn,
    title: "Digital Marketing",
    description: "Reach more customers with smart campaigns.",
    features: ["Ads", "Social Media", "Email"],
  },
  {
    id: 6,
    icon: FaChartLine,
    title: "Analytics",
    description: "Track results and improve business decisions.",
    features: ["Reports", "Insights", "Growth"],
  },
];

export default services;