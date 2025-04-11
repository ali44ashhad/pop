import {
  FaBuilding,
  FaHome,
  FaSearch,
  FaMapMarkerAlt,
  FaExpand,
  FaTimes,
} from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { useState } from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Ropar Luxury Residence",
      type: "Residential",
      location: "Ropar, Punjab",
      description:
        "Complete construction and interior design of a 4500 sq.ft luxury villa with custom POP ceilings and wall panels.",
      fullDescription:
        "This luxury villa in Ropar features our premium construction services from foundation to finishing. The project included intricate POP ceiling designs in all living areas, custom 3D wall panels in the master bedroom, and complete interior design services. We used high-quality materials throughout to ensure durability and elegance.",
      services: ["Full Construction", "POP Ceilings", "Interior Design"],
      features: [
        "4500 sq.ft built-up area",
        "Custom chandelier pockets in POP ceilings",
        "3D wall panels in master bedroom",
        "Italian marble flooring",
        "Smart home automation integration",
      ],
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      ],
      completion: "2023",
      client: "Mr. & Mrs. Sharma",
      area: "4500 sq.ft",
      duration: "14 months",
    },
    {
      id: 2,
      title: "Chandigarh Corporate Office",
      type: "Commercial",
      location: "Sector 34, Chandigarh",
      description:
        "Modern office space with innovative POP false ceilings, 3D feature walls, and ergonomic workspace design.",
      fullDescription:
        "This corporate office project involved complete interior construction with a focus on modern aesthetics and functionality. We installed custom POP false ceilings with integrated LED lighting, designed 3D feature walls for brand identity, and created an efficient workspace layout. The project was completed on time despite complex requirements.",
      services: [
        "Interior Construction",
        "POP Installations",
        "Space Planning",
      ],
      features: [
        "8000 sq.ft office space",
        "Acoustic POP ceilings",
        "Branded 3D feature walls",
        "Ergonomic workstations",
        "Conference room with smart technology",
      ],
      images: [
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      ],
      completion: "2022",
      client: "TechSolutions Pvt. Ltd.",
      area: "8000 sq.ft",
      duration: "5 months",
    },
    {
      id: 3,
      title: "Green Valley Villas",
      type: "Residential Complex",
      location: "Ropar, Punjab",
      description:
        "Construction of 12 luxury villas with uniform architectural design and premium interior finishes.",
      fullDescription:
        "This residential complex features 12 luxury villas with consistent architectural design language. We handled the complete construction including structural work, exterior finishes, and common area development. Each villa has customized interior options with premium POP ceiling designs and high-end finishes.",
      services: ["Construction", "Exterior Finishes", "Common Area Design"],
      features: [
        "12 luxury villas",
        "Uniform architectural design",
        "Landscaped common areas",
        "Premium interior finishes",
        "Gated community security",
      ],
      images: [
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      ],
      completion: "2021",
      client: "Green Valley Developers",
      area: "65,000 sq.ft (total)",
      duration: "22 months",
    },
    {
      id: 4,
      title: "Elante Mall Retail Space",
      type: "Commercial",
      location: "Chandigarh",
      description:
        "Custom retail interior with dramatic POP ceiling features and innovative display walls.",
      fullDescription:
        "This high-end retail space in Elante Mall features our specialized POP craftsmanship. We created dramatic ceiling elements that complement the brand's identity, along with custom display walls that showcase products effectively. The project required precise execution to meet mall specifications and timelines.",
      services: ["Retail Interior", "Custom POP", "Lighting Design"],
      features: [
        "1200 sq.ft retail space",
        "Brand-themed POP ceilings",
        "Custom product display walls",
        "Strategic lighting design",
        "Durable commercial-grade finishes",
      ],
      images: [
        "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      ],
      completion: "2023",
      client: "Luxury Apparel Brand",
      area: "1200 sq.ft",
      duration: "3 months",
    },
    {
      id: 5,
      title: "Punjab University Auditorium",
      type: "Institutional",
      location: "Chandigarh",
      description:
        "Acoustic POP ceiling installation and interior renovation of 300-seat auditorium.",
      fullDescription:
        "This institutional project involved renovating a 300-seat auditorium with specialized acoustic POP ceilings and wall treatments. We worked closely with acoustic engineers to ensure optimal sound quality while maintaining aesthetic appeal. The project was completed during summer break to avoid disruption.",
      services: ["Acoustic Solutions", "Auditorium Renovation", "POP Ceiling"],
      features: [
        "300-seat capacity",
        "Acoustic POP ceiling system",
        "Sound-absorbing wall panels",
        "Durable, low-maintenance finishes",
        "ADA-compliant access",
      ],
      images: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1499728603263-13726abce5fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1567942712661-82b9b407abbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      ],
      completion: "2022",
      client: "Punjab University",
      area: "5000 sq.ft",
      duration: "4 months",
    },
    {
      id: 6,
      title: "Tech Park Office Complex",
      type: "Commercial",
      location: "Mohali",
      description:
        "Complete construction and interior build-out of 20,000 sq.ft IT office space.",
      fullDescription:
        "This large-scale office complex was built for a leading IT company with specific technical requirements. We handled everything from structural construction to final interior finishes, including specialized POP ceilings in common areas and executive offices. The project featured advanced HVAC and electrical systems to support tech infrastructure.",
      services: [
        "Commercial Construction",
        "Office Interiors",
        "POP Installations",
      ],
      features: [
        "20,000 sq.ft built area",
        "Open-plan workspaces",
        "Executive office suites",
        "Specialized POP ceiling designs",
        "Advanced HVAC systems",
      ],
      images: [
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1541746972996-4e0b0f43e9a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      ],
      completion: "2023",
      client: "Global IT Solutions",
      area: "20,000 sq.ft",
      duration: "18 months",
    },
    // Additional Projects (7-16)
    {
      id: 7,
      title: "Heritage Home Restoration",
      type: "Residential",
      location: "Ropar, Punjab",
      description:
        "Restoration of a century-old heritage home with period-accurate POP work and modern amenities.",
      fullDescription:
        "This challenging project involved restoring a heritage home while preserving its original character. We recreated traditional POP moldings and cornices using historical techniques, while discreetly integrating modern electrical and plumbing systems. The project won a regional conservation award.",
      services: ["Restoration", "Traditional POP", "Modernization"],
      features: [
        "Original features preserved",
        "Hand-crafted POP elements",
        "Discreet modern systems",
        "Period-accurate finishes",
        "Award-winning project",
      ],
      images: [
        "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      ],
      completion: "2021",
      client: "Singh Family Trust",
      area: "3800 sq.ft",
      duration: "16 months",
    },
    {
      id: 8,
      title: "Medicity Hospital Wing",
      type: "Institutional",
      location: "Chandigarh",
      description:
        "Construction of new hospital wing with specialized hygienic POP ceilings and wall systems.",
      fullDescription:
        "This healthcare project required specialized materials and construction techniques to meet hospital standards. We installed antimicrobial POP ceilings and seamless wall systems that are easy to clean and maintain. The project was completed in phases to allow continuous hospital operations.",
      services: [
        "Healthcare Construction",
        "Specialized POP",
        "Phased Construction",
      ],
      features: [
        "15,000 sq.ft hospital wing",
        "Antimicrobial POP surfaces",
        "Seamless wall systems",
        "ADA-compliant design",
        "Phased construction approach",
      ],
      images: [
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      ],
      completion: "2022",
      client: "Chandigarh Medicity",
      area: "15,000 sq.ft",
      duration: "12 months",
    },
    {
      id: 9,
      title: "Lakeview Apartments",
      type: "Residential Complex",
      location: "Ropar, Punjab",
      description:
        "Construction of 24 luxury apartments with premium amenities and designer interiors.",
      fullDescription:
        "This upscale apartment complex features 24 units with premium finishes and amenities. We handled the complete construction including structural work, common areas, and standard interior packages. Each unit features designer POP ceilings and high-end finishes, with options for customization.",
      services: ["Apartment Construction", "Common Areas", "Interior Packages"],
      features: [
        "24 luxury apartments",
        "Lake-facing units",
        "Premium amenities",
        "Designer POP ceilings",
        "Customization options",
      ],
      images: [
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      ],
      completion: "2023",
      client: "Lakeview Developers",
      area: "85,000 sq.ft (total)",
      duration: "24 months",
    },
    {
      id: 10,
      title: "Five-Star Hotel Lobby",
      type: "Commercial",
      location: "Chandigarh",
      description:
        "Luxury lobby renovation with dramatic POP ceiling centerpiece and custom lighting.",
      fullDescription:
        "This high-profile hotel lobby renovation required exquisite craftsmanship and attention to detail. We created a stunning POP ceiling centerpiece with integrated lighting that became the hotel's signature feature. The project was completed with minimal disruption to hotel operations.",
      services: ["Lobby Renovation", "Custom POP", "Lighting Design"],
      features: [
        "Grand entrance feature",
        "Custom chandelier integration",
        "Luxury finishes",
        "24/7 work schedule",
        "Minimal operational disruption",
      ],
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1564501049557-79a53b6a7c3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      ],
      completion: "2021",
      client: "Grand Chandigarh Hotel",
      area: "3500 sq.ft",
      duration: "3 months",
    },
    {
      id: 11,
      title: "Sector 17 Showroom",
      type: "Commercial",
      location: "Chandigarh",
      description:
        "High-end automotive showroom with custom display features and lighting solutions.",
      fullDescription:
        "This premium automotive showroom features custom POP display platforms and dramatic lighting solutions to showcase luxury vehicles. We worked closely with the brand's design team to create a space that reflects their identity while providing optimal product presentation.",
      services: [
        "Showroom Construction",
        "Custom Displays",
        "Lighting Solutions",
      ],
      features: [
        "5000 sq.ft showroom",
        "Custom vehicle display platforms",
        "Brand-themed design elements",
        "Dynamic lighting system",
        "Customer lounge area",
      ],
      images: [
        "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      ],
      completion: "2022",
      client: "Premium Auto Group",
      area: "5000 sq.ft",
      duration: "5 months",
    },
    {
      id: 12,
      title: "Corporate Training Center",
      type: "Commercial",
      location: "Mohali",
      description:
        "Construction of modern training facility with advanced acoustics and flexible spaces.",
      fullDescription:
        "This corporate training center features specialized acoustic treatments and flexible room configurations. We installed sound-absorbing POP ceilings and movable wall systems to create adaptable learning environments. The project included advanced AV integration throughout.",
      services: [
        "Commercial Construction",
        "Acoustic Solutions",
        "AV Integration",
      ],
      features: [
        "10,000 sq.ft facility",
        "Acoustic POP ceilings",
        "Movable wall systems",
        "Advanced AV integration",
        "Flexible learning spaces",
      ],
      images: [
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1524179091875-b4949869bd4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      ],
      completion: "2023",
      client: "Global Tech Corporation",
      area: "10,000 sq.ft",
      duration: "8 months",
    },
    {
      id: 13,
      title: "Heritage Museum Renovation",
      type: "Institutional",
      location: "Ropar, Punjab",
      description:
        "Restoration and modernization of regional heritage museum with specialized display systems.",
      fullDescription:
        "This museum renovation project balanced historical preservation with modern functionality. We restored original architectural elements while installing new climate-controlled display cases and lighting systems. Specialized POP arches and domes were recreated using traditional techniques.",
      services: ["Restoration", "Museum Display Systems", "Traditional POP"],
      features: [
        "Historical preservation",
        "Climate-controlled displays",
        "Traditional POP recreation",
        "Modern lighting systems",
        "Accessibility upgrades",
      ],
      images: [
        "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      ],
      completion: "2021",
      client: "Punjab Heritage Trust",
      area: "12,000 sq.ft",
      duration: "14 months",
    },
    {
      id: 14,
      title: "Boutique Hotel Interior",
      type: "Commercial",
      location: "Chandigarh",
      description:
        "Complete interior design and construction of 20-room boutique hotel with themed decor.",
      fullDescription:
        "This boutique hotel project involved creating unique themed interiors for each of its 20 rooms. We designed and installed custom POP features including ceiling medallions, wall panels, and decorative moldings. Common areas feature dramatic POP centerpieces that establish the hotel's brand identity.",
      services: ["Hotel Interior", "Themed Design", "Custom POP Features"],
      features: [
        "20 uniquely themed rooms",
        "Custom POP ceiling medallions",
        "Signature lobby centerpiece",
        "Branded design elements",
        "Luxury finishes throughout",
      ],
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1564501049557-79a53b6a7c3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      ],
      completion: "2022",
      client: "Urban Retreat Hotels",
      area: "18,000 sq.ft",
      duration: "9 months",
    },
    {
      id: 15,
      title: "Farmhouse Retreat",
      type: "Residential",
      location: "Outskirts of Ropar",
      description:
        "Construction of luxury farmhouse with rustic-modern design and premium amenities.",
      fullDescription:
        "This luxury farmhouse combines rustic charm with modern comforts. We used natural materials complemented by sophisticated POP ceiling designs in the main living areas. The project included outdoor living spaces, a pool area, and extensive landscaping.",
      services: ["Luxury Home Construction", "Interior Design", "Landscaping"],
      features: [
        "6000 sq.ft living space",
        "Rustic-modern design",
        "Outdoor living areas",
        "Pool with deck",
        "Extensive landscaping",
      ],
      images: [
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      ],
      completion: "2023",
      client: "Private Client",
      area: "6000 sq.ft",
      duration: "16 months",
    },
    {
      id: 16,
      title: "Co-Working Space",
      type: "Commercial",
      location: "Chandigarh",
      description:
        "Modern co-working facility with flexible workspaces and collaborative areas.",
      fullDescription:
        "This innovative co-working space features adaptable work environments with specialized acoustic treatments. We installed modular POP ceiling systems that allow for easy reconfiguration of spaces. The design promotes collaboration while providing quiet work areas when needed.",
      services: ["Space Planning", "Acoustic Solutions", "Modular Ceilings"],
      features: [
        "12,000 sq.ft flexible space",
        "Modular POP ceiling system",
        "Varied work environments",
        "Advanced acoustic treatments",
        "Branded design elements",
      ],
      images: [
        "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1524179091875-b4949869bd4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      ],
      completion: "2023",
      client: "WorkHub Chandigarh",
      area: "12,000 sq.ft",
      duration: "6 months",
    },
  ];

  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      filter === "all" || project.type.toLowerCase() === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Our <span className="text-amber-400">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10">
            Showcasing our premium construction and POP projects across Ropar,
            Chandigarh and beyond
          </p>
        </div>
      </div>

      {/* Projects Filter Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-lg ${
                  filter === "all"
                    ? "bg-amber-500 text-white"
                    : "bg-white text-gray-700 border border-gray-300"
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter("residential")}
                className={`px-4 py-2 rounded-lg ${
                  filter === "residential"
                    ? "bg-amber-500 text-white"
                    : "bg-white text-gray-700 border border-gray-300"
                }`}
              >
                Residential
              </button>
              <button
                onClick={() => setFilter("commercial")}
                className={`px-4 py-2 rounded-lg ${
                  filter === "commercial"
                    ? "bg-amber-500 text-white"
                    : "bg-white text-gray-700 border border-gray-300"
                }`}
              >
                Commercial
              </button>
              <button
                onClick={() => setFilter("institutional")}
                className={`px-4 py-2 rounded-lg ${
                  filter === "institutional"
                    ? "bg-amber-500 text-white"
                    : "bg-white text-gray-700 border border-gray-300"
                }`}
              >
                Institutional
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid Section */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={() => openProjectDetails(project)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 transition-opacity bg-black bg-opacity-75"
              onClick={closeProjectDetails}
            ></div>

            {/* Modal container */}
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    {/* Close button */}
                    <button
                      onClick={closeProjectDetails}
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
                    >
                      <FaTimes className="h-6 w-6" />
                    </button>

                    {/* Project content */}
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Image gallery */}
                      <div className="relative">
                        <div className="h-96 overflow-hidden rounded-lg bg-gray-100">
                          <img
                            src={selectedProject.images[currentImageIndex]}
                            alt={selectedProject.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {selectedProject.images.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75"
                            >
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 19l-7-7 7-7"
                                />
                              </svg>
                            </button>
                            <button
                              onClick={nextImage}
                              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75"
                            >
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </button>
                          </>
                        )}
                        <div className="flex mt-4 space-x-2 overflow-x-auto">
                          {selectedProject.images.map((img, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden ${
                                currentImageIndex === index
                                  ? "ring-2 ring-amber-500"
                                  : ""
                              }`}
                            >
                              <img
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Project details */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {selectedProject.title}
                        </h3>
                        <div className="flex items-center text-gray-500 mb-4">
                          <FaMapMarkerAlt className="mr-2 text-amber-500" />
                          <span>{selectedProject.location}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div>
                            <p className="text-sm text-gray-500">
                              Project Type
                            </p>
                            <p className="font-medium">
                              {selectedProject.type}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Completion</p>
                            <p className="font-medium">
                              {selectedProject.completion}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Area</p>
                            <p className="font-medium">
                              {selectedProject.area}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Duration</p>
                            <p className="font-medium">
                              {selectedProject.duration}
                            </p>
                          </div>
                        </div>

                        <h4 className="font-semibold text-gray-800 mb-2">
                          Project Description
                        </h4>
                        <p className="text-gray-600 mb-6">
                          {selectedProject.fullDescription}
                        </p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {selectedProject.features.map((feature, index) => (
                              <li key={index} className="flex items-start">
                                <FiCheck className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Services Provided
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.services.map((service, index) => (
                              <span
                                key={index}
                                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeProjectDetails}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-800 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our premium
            construction and POP services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918958051888">
              <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-12 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg">
                Get Free Consultation
              </button>
            </a>

            <a href="tel:+918958051888">
              <button className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-12 rounded-lg text-lg transition duration-300 transform hover:scale-105">
                Call: +91 89580 51888
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// ... (ProjectCard component remains the same) ...
const ProjectCard = ({ project, onViewDetails }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 group">
    <div className="relative h-64 overflow-hidden">
      <img
        src={project.images[0]}
        alt={project.title}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6">
        <div>
          <span className="inline-block px-3 py-1 bg-amber-500 text-white text-sm font-medium rounded-full mb-2">
            {project.type}
          </span>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        </div>
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center text-gray-500 mb-3">
        <FaMapMarkerAlt className="mr-2 text-amber-500" />
        <span>{project.location}</span>
      </div>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="mb-4">
        <h4 className="font-medium text-gray-800 mb-2">Services Provided:</h4>
        <ul className="flex flex-wrap gap-2">
          {project.services.map((service, index) => (
            <li
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">
          Completed: {project.completion}
        </span>
        <button
          onClick={onViewDetails}
          className="text-amber-600 hover:text-amber-700 font-medium inline-flex items-center"
        >
          View Details
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export default Projects;
