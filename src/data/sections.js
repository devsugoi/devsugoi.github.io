import { FaUser, FaEnvelope } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { BsCodeSquare } from "react-icons/bs";

/** Single source of truth for section ids, labels and nav icons. */
export const SECTIONS = [
  { id: "about", label: "About", icon: FaUser },
  { id: "skills", label: "Skills", icon: GiSkills },
  { id: "experience", label: "Experience", icon: MdWork },
  { id: "projects", label: "Projects", icon: BsCodeSquare },
  { id: "contact", label: "Contact", icon: FaEnvelope },
];

export default SECTIONS;
