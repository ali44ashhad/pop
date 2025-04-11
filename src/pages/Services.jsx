import {
  FaBuilding,
  FaHammer,
  FaPaintRoller,
  FaClipboardList,
  FaHome,
  FaTools,
  FaPalette,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { useState } from "react";

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const toggleService = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Our <span className="text-amber-400">Premium</span> Services
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10">
            Comprehensive construction and POP solutions tailored to your needs
          </p>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl relative inline-block">
            <span className="relative z-10">Construction Services</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-amber-200 z-0 opacity-70 -mb-1"></span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            From groundbreaking to final finishes, we handle every aspect of
            your project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {mainServices.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>

      {/* POP Services Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl relative inline-block">
              <span className="relative z-10">Specialized POP Services</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-amber-200 z-0 opacity-70 -mb-1"></span>
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Precision Plaster of Paris solutions for elegant interiors
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {popServicesDetailed.map((service, index) => (
              <div
                key={index}
                className="mb-4 border border-gray-200 rounded-xl overflow-hidden hover:border-amber-400 transition duration-300"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left"
                  onClick={() => toggleService(index)}
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-5">
                      <service.icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {service.title}
                    </h3>
                  </div>
                  {activeService === index ? (
                    <FaChevronUp className="text-amber-500" />
                  ) : (
                    <FaChevronDown className="text-amber-500" />
                  )}
                </button>
                <div
                  className={`px-6 pb-6 transition-all duration-300 ${
                    activeService === index ? "block" : "hidden"
                  }`}
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">
                        Service Details:
                      </h4>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <FiCheck className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">
                        Ideal For:
                      </h4>
                      <ul className="space-y-2">
                        {service.applications.map((app, i) => (
                          <li key={i} className="flex items-start">
                            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 mt-2 mr-2"></span>
                            <span className="text-gray-600">{app}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 bg-amber-50 p-4 rounded-lg border border-amber-100">
                        <p className="text-amber-800 font-medium">
                          {service.note}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Areas Section */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl relative inline-block">
            <span className="relative z-10">Our Service Areas</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-amber-200 z-0 opacity-70 -mb-1"></span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Currently serving these locations with expansion plans underway
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {serviceAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-amber-500 hover:shadow-md transition duration-300"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <area.icon className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
                {area.city}
              </h3>
              <ul className="space-y-2">
                {area.services.map((service, i) => (
                  <li key={i} className="flex items-center">
                    <FiCheck className="text-amber-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{service}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <button className="text-amber-600 hover:text-amber-700 font-medium inline-flex items-center">
                  View {area.city} Projects
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
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            We specialize in tailored construction and POP services for unique
            requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-4 px-12 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg">
              Get a Free Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-gray-700 font-bold py-4 px-12 rounded-lg text-lg transition duration-300 transform hover:scale-105">
              Consult Our Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ service }) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition duration-300 border-t-4 border-amber-500">
    <div className="p-8">
      <div className="flex items-start mb-6">
        <div className="p-3 rounded-lg bg-amber-100 text-amber-600 mr-5">
          <service.icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {service.title}
          </h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <FiCheck className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <p className="text-gray-700 font-medium">{service.note}</p>
      </div>

      <button className="w-full bg-gray-900 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
        {service.cta}
      </button>
    </div>
  </div>
);

// Main Services Data
const mainServices = [
  {
    title: "New Construction",
    description: "Complete building solutions from foundation to finishing",
    icon: FaBuilding,
    features: [
      "Residential & commercial buildings",
      "Structural design & engineering",
      "Premium material selection",
      "Quality assurance at all stages",
    ],
    note: "We handle projects from 500 sq.ft to 50,000 sq.ft and beyond",
    cta: "Discuss Your Project",
  },
  {
    title: "Renovation Services",
    description: "Transform existing spaces with our comprehensive remodeling",
    icon: FaHammer,
    features: [
      "Structural modifications",
      "Space reconfiguration",
      "Modernization upgrades",
      "Seamless execution",
    ],
    note: "Minimal disruption to your daily routine during renovations",
    cta: "Plan Your Renovation",
  },
  {
    title: "Interior Construction",
    description: "Specialized interior build-outs for any space",
    icon: FaPaintRoller,
    features: [
      "Partition walls & false ceilings",
      "Custom cabinetry & built-ins",
      "Wall paneling & finishes",
      "Lighting integration",
    ],
    note: "Perfect for offices, retail spaces, and residential interiors",
    cta: "Design Consultation",
  },
  {
    title: "Project Management",
    description: "Professional oversight for your construction project",
    icon: FaClipboardList,
    features: [
      "Vendor coordination",
      "Budget management",
      "Timeline supervision",
      "Quality control",
    ],
    note: "Available as standalone service or part of our construction packages",
    cta: "Get Managed Services",
  },
];

// Detailed POP Services Data
const popServicesDetailed = [
  {
    title: "Designer False Ceilings",
    description:
      "Custom-designed POP ceilings that enhance your space aesthetically while providing functional benefits like lighting integration and acoustic improvement.",
    icon: FaHome,
    features: [
      "Single or multi-level designs",
      "Integrated lighting solutions",
      "Acoustic treatment options",
      "Custom shapes & curves",
      "Crack-resistant finishes",
    ],
    applications: [
      "Living rooms & bedrooms",
      "Offices & conference rooms",
      "Retail spaces & showrooms",
      "Hotels & restaurants",
    ],
    note: "Our POP ceilings come with 5-year warranty against cracks or sagging",
  },
  {
    title: "3D Wall Panels & Features",
    description:
      "Artistic wall designs that create stunning visual impact and transform ordinary walls into focal points of your interior space.",
    icon: FaPalette,
    features: [
      "Custom 3D patterns",
      "Backlit designs available",
      "Various finish options",
      "Seamless integration",
      "Durable construction",
    ],
    applications: [
      "Feature walls in living areas",
      "Reception & lobby walls",
      "Restaurant accent walls",
      "Corporate office branding walls",
    ],
    note: "3D walls can reduce echo and improve acoustics in large spaces",
  },
  {
    title: "Cornices & Moldings",
    description:
      "Elegant transitional elements between walls and ceilings that add architectural character and sophistication to any interior.",
    icon: FaTools,
    features: [
      "Classic or contemporary designs",
      "Custom sizing available",
      "Lighting integration options",
      "Smooth, seamless finishes",
      "Paint-ready surfaces",
    ],
    applications: [
      "Residential living spaces",
      "Heritage property restoration",
      "Luxury commercial spaces",
      "Hospitality interiors",
    ],
    note: "Cornices can visually alter room proportions, making spaces appear larger",
  },
];

// Service Areas Data
const serviceAreas = [
  {
    city: "Ropar",
    icon: FaHome,
    services: [
      "Complete home construction",
      "POP ceiling installations",
      "Villa renovations",
      "Commercial interiors",
    ],
  },
  {
    city: "Chandigarh",
    icon: FaBuilding,
    services: [
      "Office space build-outs",
      "Retail store interiors",
      "False ceiling solutions",
      "Luxury home construction",
    ],
  },
  {
    city: "Expanding Nationwide",
    icon: FaClipboardList,
    services: [
      "Large-scale commercial projects",
      "Corporate office interiors",
      "Hospitality projects",
      "Specialized POP contracts",
    ],
  },
];

export default Services;
