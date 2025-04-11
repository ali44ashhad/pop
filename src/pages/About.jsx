import {
  FaAward,
  FaUsers,
  FaProjectDiagram,
  FaHandshake,
} from "react-icons/fa";
import { FiCheck } from "react-icons/fi";

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Building <span className="text-amber-400">Excellence</span> Since
            2010
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10">
            Our journey from a local Ropar contractor to a premier construction
            and POP specialist serving Chandigarh and beyond
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl relative inline-block mb-8">
              <span className="relative z-10">Our Story</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-amber-200 z-0 opacity-70 -mb-1"></span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2010 in Ropar, Punjab, we began as a small team of
              passionate builders specializing in Plaster of Paris (POP) work.
              What started as local residential projects quickly grew into
              commercial contracts as our reputation for quality craftsmanship
              spread.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              By 2015, we expanded to Chandigarh, bringing our expertise in
              precision POP installations to larger projects. Today, we're proud
              to serve clients across North India with complete construction
              solutions and premium POP services.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
              <p className="text-gray-800 italic">
                "Our philosophy is simple: Treat every project as if it were our
                own home. This commitment to quality has been our foundation for
                over a decade."
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gray-200 h-96 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                alt="Construction team working on site"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg w-3/4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                12+ Years Experience
              </h3>
              <p className="text-gray-600">
                Delivering quality construction since 2010
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl relative inline-block">
              <span className="relative z-10">Why Choose Us</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-amber-200 z-0 opacity-70 -mb-1"></span>
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart in the construction and POP industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Proven Expertise
              </h3>
              <p className="text-gray-600">
                12+ years specializing in premium POP installations and
                construction
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Skilled Craftsmen
              </h3>
              <p className="text-gray-600">
                Dedicated team with 5-15 years experience each in their
                specialties
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaProjectDiagram className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Quality Materials
              </h3>
              <p className="text-gray-600">
                We source only premium materials from trusted suppliers
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Client-Centric
              </h3>
              <p className="text-gray-600">
                150+ satisfied clients and counting across North India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl relative inline-block">
            <span className="relative z-10">Our Process</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-amber-200 z-0 opacity-70 -mb-1"></span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            How we deliver exceptional results on every project
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div
                  className={`lg:absolute lg:top-0 lg:w-6 lg:h-6 rounded-full bg-amber-500 border-4 border-amber-100 transform -translate-x-1/2 left-1/2 ${
                    index % 2 === 0 ? "lg:left-1/2" : "lg:left-1/2"
                  }`}
                ></div>
                <div
                  className={`bg-white p-8 rounded-xl shadow-sm mt-6 lg:mt-0 lg:w-5/12 ${
                    index % 2 === 0
                      ? "lg:ml-auto lg:mr-6"
                      : "lg:mr-auto lg:ml-6"
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-2xl font-bold text-amber-500 mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-900 py-20">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white relative inline-block">
              <span className="relative z-10">Our Leadership</span>
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-amber-400 z-0 opacity-80 -mb-2 rounded-full"></span>
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the experienced professionals driving our success forward.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-amber-400 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                  <div className="mt-5 pt-4 border-t border-gray-700">
                    <p className="text-gray-400 text-sm flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-amber-400 mr-2"></span>
                      {member.expertise}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-800 mb-10 max-w-2xl mx-auto">
            Whether it's construction from scratch or specialized POP work,
            we're here to bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-12 rounded-lg text-lg transition duration-300 transform hover:scale-105 shadow-lg">
              Get Free Consultation
            </button>

            <a
              href="tel:+918950518888"
              className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-12 rounded-lg text-lg transition duration-300 transform hover:scale-105 text-center"
            >
              Call: +91 895051888
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Process Steps Data
const processSteps = [
  {
    title: "Consultation & Planning",
    description:
      "We begin with detailed discussions to understand your vision, requirements, and budget. Our team then creates comprehensive plans including 3D visualizations when needed.",
  },
  {
    title: "Material Selection",
    description:
      "We guide you through premium material options, helping select the best quality products that fit your budget and design aesthetic.",
  },
  {
    title: "Precision Execution",
    description:
      "Our skilled craftsmen implement the project with meticulous attention to detail, maintaining constant communication throughout the process.",
  },
  {
    title: "Quality Inspection",
    description:
      "Every project undergoes rigorous quality checks at multiple stages to ensure flawless results that meet our high standards.",
  },
  {
    title: "Final Delivery",
    description:
      "We complete thorough cleaning and a final walkthrough with you, ensuring complete satisfaction before project handover.",
  },
];

// Team Data
const teamMembers = [
  {
    name: "Shakeel Ahamad",
    position: "Founder & CEO",
    bio: "With over 15 years in construction and POP specialization, Harpreet founded the company with a vision for quality craftsmanship.",
    expertise: "Specializes in architectural POP designs",
    image: "https://img.icons8.com/?size=100&id=11220&format=png&color=40C057",
  },
  {
    name: "Waseem Ahmad",
    position: "Construction Head",
    bio: "With 8+ years in the construction industry, leads project execution with a strong focus on quality, safety, and timely delivery.",
    expertise: "Expert in structural integrity and project management",
    image: "https://img.icons8.com/?size=100&id=11220&format=png&color=40C057",
  },
];

export default About;
