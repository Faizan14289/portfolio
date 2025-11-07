export type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string; // optional future use
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Faizan consistently delivers and takes ownership. He strengthened our platform and improved API reliability.",
    name: "Muhammad Ejaz",
    role: "Owner",
    company: "StaffViz"
  },
  {
    id: 2,
    quote:
      "Professional, proactive, and easy to work with. Faizan modernized our backend and improved performance.",
    name: "Vikramjit Smith",
    role: "Owner",
    company: "MyTailorStore"
  },
  {
    id: 3,
    quote:
      "Clear communication and strong ownership. Faizan led integrations and ensured smooth deployments with Docker and CI/CD.",
    name: "J. Smith",
    role: "Operations Lead",
    company: "StreamlineMyREI"
  }
];