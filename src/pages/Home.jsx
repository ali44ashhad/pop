import {
  FaBuilding,
  FaHammer,
  FaPaintRoller,
  FaClipboardList,
  FaHome,
  FaTools,
  FaPalette,
  FaHeadset,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { useState } from "react";

const Home = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="text-amber-400">Premium</span> Construction & POP
            Services
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10">
            Crafting exceptional spaces with precision POP work and complete
            construction solutions across Ropar, Chandigarh, and expanding
            nationwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+918958051888">
                <button className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-4 px-10 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg">
                  Get Free Estimate
                </button>
              </a>

              <a href="/projects">
                <button className="border-2 border-white text-white hover:bg-gray-800 font-bold py-4 px-10 rounded-lg text-lg transition duration-300 transform hover:scale-105">
                  View Our Work
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-amber-500 mb-2">
                1500+
              </div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-amber-500 mb-2">12+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-amber-500 mb-2">500+</div>
              <div className="text-gray-600">Satisfied Clients</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-amber-500 mb-2">5+</div>
              <div className="text-gray-600">Cities Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl relative inline-block">
            <span className="relative z-10">Our Comprehensive Services</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-amber-200 z-0 opacity-70 -mb-1"></span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            From groundbreaking to final finishes, we deliver excellence at
            every stage
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
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
              Transform your ceilings and walls with our master craftsmanship
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {popServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border-l-4 border-amber-500 group"
              >
                <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition duration-300">
                  <service.icon className="w-6 h-6 text-amber-600 group-hover:text-white transition duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Showcase */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl relative inline-block">
            <span className="relative z-10">Our Featured Projects</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-amber-200 z-0 opacity-70 -mb-1"></span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our excellence in Ropar, Chandigarh and beyond
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
              <FaHome className="mr-3 text-amber-500" /> Ropar Projects
            </h3>
            <div className="grid grid-cols-2 gap-5">
              <ProjectCard
                title="Ropar Residence"
                image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Luxury residence in Ropar"
              />
              <ProjectCard
                title="City Mall"
                image="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Modern mall interior"
              />
              <ProjectCard
                title="Green Valley Villas"
                image="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Villa complex"
              />
              <ProjectCard
                title="Tech Park Office"
                image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Corporate office space"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
              <FaBuilding className="mr-3 text-amber-500" /> Chandigarh Projects
            </h3>
            <div className="grid grid-cols-2 gap-5">
              <ProjectCard
                title="Sector-17 Showroom"
                image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Luxury showroom"
              />
              <ProjectCard
                title="Elante Mall"
                image="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Mall interior"
              />
              <ProjectCard
                title="Punjab University"
                image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="University building"
              />
              <ProjectCard
                title="Corporate Tower"
                image="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Office tower"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-12 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
            href="/projects"
          >
            View All Projects
            <svg
              className="w-4 h-4 ml-2"
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
          </a>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl relative inline-block">
              <span className="relative z-10">Client Testimonials</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-amber-400 z-0 opacity-70 -mb-1"></span>
            </h2>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Hear what our clients say about our work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-amber-400 text-sm">
                      {testimonial.project}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl relative inline-block">
              <span className="relative z-10">Frequently Asked Questions</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-amber-200 z-0 opacity-70 -mb-1"></span>
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden transition duration-300 hover:border-amber-400"
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  {activeFaq === index ? (
                    <FaChevronUp className="text-amber-500" />
                  ) : (
                    <FaChevronDown className="text-amber-500" />
                  )}
                </button>
                <div
                  className={`px-6 pb-6 pt-0 transition-all duration-300 ${
                    activeFaq === index ? "block" : "hidden"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Contact us today for a consultation on your construction or POP
            project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918958051888"
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-4 px-12 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Now: +91 8958051888
            </a>

            <a
              href="mailto:contact@akramcontractor.com"
              className="border-2 border-white text-white hover:bg-gray-800 font-bold py-4 px-12 rounded-lg text-lg transition duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email Inquiry
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ title, image, alt }) => (
  <div className="group relative rounded-lg overflow-hidden h-48">
    <img
      src={image}
      alt={alt}
      className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-5">
      <h4 className="text-white font-medium text-lg transform translate-y-2 group-hover:translate-y-0 transition duration-300">
        {title}
      </h4>
    </div>
  </div>
);
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

      <a href="tel:+918958051888">
        <button className="w-full bg-gray-900 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
          {service.cta}
        </button>
      </a>
    </div>
  </div>
);

// Services data
const services = [
  {
    title: "Complete Construction",
    description: "Turnkey solutions from foundation to finishing touches",
    icon: FaBuilding,
    features: [
      "Architectural planning & design",
      "Structural engineering",
      "Premium material selection",
      "Quality assurance at every stage",
    ],
    cta: "Discuss Your Project",
  },
  {
    title: "Renovation & Remodeling",
    description: "Breathe new life into your existing spaces",
    icon: FaHammer,
    features: [
      "Structural integrity assessment",
      "Modernization solutions",
      "Space optimization",
      "Seamless execution",
    ],
    cta: "Plan Your Renovation",
  },
  {
    title: "Interior Design & Execution",
    description: "Cohesive design concepts brought to life",
    icon: FaPaintRoller,
    features: [
      "3D visualizations",
      "Material & finish selection",
      "Custom furniture design",
      "Lighting solutions",
    ],
    cta: "Design Consultation",
  },
  {
    title: "Project Management",
    description: "Professional oversight for stress-free execution",
    icon: FaClipboardList,
    features: [
      "Timeline management",
      "Budget control",
      "Vendor coordination",
      "Quality supervision",
    ],
    cta: "Get Managed Services",
  },
];

// POP Services data
const popServices = [
  {
    title: "Designer False Ceilings",
    description:
      "Custom POP ceilings with intricate designs and lighting integration",
    icon: FaHome,
  },
  {
    title: "Feature Walls",
    description: "Statement walls with 3D patterns and artistic elements",
    icon: FaTools,
  },
  {
    title: "Cornices & Moldings",
    description: "Elegant transitional elements between walls and ceilings",
    icon: FaPalette,
  },
  {
    title: "Partition Walls",
    description: "Lightweight yet durable POP partitions with sound insulation",
    icon: FaTools,
  },
  {
    title: "Architectural Elements",
    description: "Columns, arches, and other structural POP features",
    icon: FaPalette,
  },
  {
    title: "Complete POP Solutions",
    description: "End-to-end POP contracting including design and execution",
    icon: FaHome,
  },
];

// Testimonials data
const testimonials = [
  {
    name: "Rajesh Sharma",
    project: "Ropar Residence",
    quote:
      "The POP work in our living room ceiling exceeded our expectations. The attention to detail was remarkable.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Malhotra",
    project: "Chandigarh Office",
    quote:
      "Their team completed our corporate office renovation ahead of schedule while maintaining excellent quality.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amit Patel",
    project: "Commercial Complex",
    quote:
      "Professional from start to finish. The construction quality is outstanding and has held up beautifully.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

// FAQ data
const faqs = [
  {
    question: "What areas do you currently serve?",
    answer:
      "We're based in Ropar with extensive experience in Chandigarh, and are now taking select projects across North India. Our expansion plans include major cities nationwide.",
  },
  {
    question: "How long does a typical POP ceiling installation take?",
    answer:
      "Standard residential POP ceilings take 3-5 days for drying and curing. Complex designs may require 7-10 days. We provide detailed timelines after assessing your specific requirements.",
  },
  {
    question: "Do you provide material procurement services?",
    answer:
      "Yes, we offer complete material management including sourcing, quality checks, and timely delivery. We have partnerships with premium suppliers for the best rates.",
  },
  {
    question: "Can you work with my existing architect?",
    answer:
      "Absolutely. We regularly collaborate with architects and designers. Our technical expertise helps bring creative visions to life while ensuring structural integrity.",
  },
  {
    question: "What makes your POP work superior?",
    answer:
      "Our craftsmen have 10+ years specializing in POP. We use premium materials, precise mixing ratios, and proprietary techniques for flawless, crack-free finishes that last.",
  },
  {
    question: "How do you handle project estimates?",
    answer:
      "We provide transparent, detailed quotes after thorough assessment. Our estimates include all costs with no hidden charges, and we offer multiple options to suit different budgets.",
  },
];

export default Home;
