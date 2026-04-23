const caseStudies = [
  {
    id: 1,
    title: "LUME Skin Care E-commerce Website",
    category: "UI/UX Design",
    year: "2026",
    image:
      "https://www.image2url.com/r2/default/images/1776927643770-bac0fc1f-fb6a-49ef-98f3-e8e38173d9b4.jpg",
    description:
      "A refined e-commerce experience designed for skincare discovery, product clarity, and conversion.",
  },
  {
    id: 2,
    title: "Solvexa Solution Website",
    category: "UI/UX Design",
    year: "2025",
    image:
      "https://www.image2url.com/r2/default/images/1776927643770-bac0fc1f-fb6a-49ef-98f3-e8e38173d9b4.jpg",
    description:
      "A modern solution-led website concept with strong layout hierarchy and polished UI decisions.",
  },
  {
    id: 3,
    title: "Construction Website Design",
    category: "UI/UX Design",
    year: "2025",
    image:
      "https://www.image2url.com/r2/default/images/1776932396082-1f27c81b-cdd4-458b-b73d-7e08592285bf.jpeg",
    description:
      "A clean interface direction for a construction-focused brand built around trust and clarity.",
  },
  {
    id: 4,
    title: "Clyftic Labs Website Design",
    category: "UI/UX Design",
    year: "2025",
    image:
      "https://www.image2url.com/r2/default/images/1776932513865-fe1bc8cb-1b88-4880-a2b4-aed2fd92bf62.jpeg",
    description:
      "A polished digital experience for a tech-driven brand with strong usability and visual rhythm.",
  },
  {
    id: 5, 
    title: "Construction Website Design",
    category: "UI/UX Design",
    year: "2025",
    image:
      "https://www.image2url.com/r2/default/images/1776936170980-62eeb0af-510d-43c0-8183-bbb666854156.jpeg",
    description:
      "A dashboard interface created for readability, insight visibility, and smoother decision-making.",
  },
  {
    id: 6, 
    title: "Restaurant Website Design",
    category: "UI/UX Design",
    year: "2025",
    image:
      "https://www.image2url.com/r2/default/images/1776936239870-61f75de0-73ce-47cd-bba2-e11ad3783d52.jpeg",
    description:
      "A product-led shopping experience optimized for browsing flow, clarity, and trust.",
  },
  {
    id: 7, 
    title: "Travel Website Design",
    category: "UI/UX Design",
    year: "2026",
    image:
      "https://www.image2url.com/r2/default/images/1776936375140-d0a3da4a-b4f9-4fa9-bf83-7f811bb01244.jpg",
    description:
      "A premium personal portfolio concept focused on hierarchy, interaction, and high-end presentation.",
  },
  {
    id: 8, 
    title: "Restaurant Website Design",
    category: "UI/UX Design",
    year: "2026",
    image:
      "https://www.image2url.com/r2/default/images/1776938000253-7c23e701-205a-4418-b2cb-2bb4d9a6a943.jpg",
    description:
      "A reservation-first interface designed to simplify booking flow and improve user confidence.",
  },

  {
    id: 9,
    title: "Travel Website Design",
    category: "Web Development",
    year: "2026",
    image:
      "https://www.image2url.com/r2/default/images/1776935420926-258702f8-4b96-4c04-8300-20e2ab51f1fa.jpg",
    description:
      "A destination-led website concept with modern visuals, conversion touchpoints, and clean navigation.",
  },
  {
    id: 10,
    title: "Job Portal System",
    category: "Web Development",
    year: "2024",
    image:
      "https://www.image2url.com/r2/default/images/1776938519649-ff77b265-f60d-4532-b570-df3fd70ae785.jpg",
    description:
      "A bold landing page built for a creative agency with strong visual rhythm and storytelling flow.",
  },
  {
    id: 11,
    title: "Fitness Center Website",
    category: "Web Development",
    year: "2025",
    image:
      "https://www.image2url.com/r2/default/images/1776938129602-b04a3084-2bb1-4161-a7f4-282ef7ce4414.jpg",
    description:
      "A hospitality website designed to balance visual elegance with booking-driven usability.",
  },
  {
    id: 12,
    title: "Hotel & Restaurant Website",
    category: "Web Development",
    year: "2025",
    image:
      "https://www.image2url.com/r2/default/images/1776938489528-16901703-f4b4-4de4-80d3-13b0958382b4.jpg",
    description:
      "A clean corporate website experience focused on trust, structure, and service presentation.",
  },

  {
    id: 13,
    title: "Salon Shop Mobile App Development",
    category: "Mobile App Development",
    year: "2026",
    image:
      "https://kommodo.ai/i/bIAc2HmbCoHUtdi0L09e",
    description:
      "A mobile banking app experience designed for trust, clarity, and intuitive day-to-day usage.",
  },
  {
    id: 14,
    title: "Restaurant App Development",
    category: "Mobile App Development",
    year: "2025",
    image:
      "https://kommodo.ai/i/InE429ETmATS6h61uohB",
    description:
      "A workout-focused app prototype designed around progress tracking and user motivation.",
  },

  {
    id: 15,
    title: "Brand Campaign Visuals",
    category: "Graphic Design",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    description:
      "A campaign-ready design system built for storytelling, consistency, and strong recall.",
  },
  {
    id: 16,
    title: "Social Media Design",
    category: "Graphic Design",
    year: "2026",
    image:
      "https://kommodo.ai/i/YpNSbl8T6SY3L0ynHwyu",
    description:
      "A bold and consistent social media visual pack designed for digital campaigns and engagement.",
  },
  {
    id: 17,  
    title: "Social Media Design",
    category: "Graphic Design",
    year: "2026",
    image:
      "https://kommodo.ai/i/KmWEfy57VsJzduBQQ7YB",
    description:
      "A high-impact poster series created for event promotion with bold composition and clear messaging.",
  },
  {
    id: 18, 
    title: "Social Media Design",
    category: "Graphic Design",
    year: "2026",
    image:
      "https://kommodo.ai/i/FJYbZP6HPdb0jOiyUvsJ",
    description:
      "A visual presentation system designed to communicate brand direction with clarity and polish.",
  },
  {
    id: 19, 
    title: "Social Media Design",
    category: "Graphic Design",
    year: "2026",
    image:
      "https://kommodo.ai/i/PmjzFSxbPzFMfcX2mgDr",
    description:
      "A packaging concept built around shelf appeal, brand consistency, and premium visual language.",
  },
];

export default caseStudies;
