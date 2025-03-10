import {
  BuildingOfficeIcon,
  AcademicCapIcon,
  TvIcon,
  UsersIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const clients = [
  "Infosys",
  "Emphasis",
  "Amway",
  "MOM and Me (Mahindra Retail)",
  "MCF",
  "MRPL",
  "BPCL",
  "HPCL",
  "ICICI",
  "Max Life Insurance",
  "IOCL",
  "HDFC",
];

const organizations = [
  "Family Doctors Associations",
  "Lions Clubs",
  "Mahila Sabha",
  "Indian Medical Association",
  "Family Physicians Association",
  "Mangalore Senior Citizens Association",
  "GSB Premier League",
  "Mrs Mangalore Beauty Pageant",
  "Mrs India Karnataka Beauty Pageant",
  "We One Aqua Centre",
  "Mangalore Badminton Association",
];

const mediaPresence = [
  'Radio Mirchi 98.3 FM',
  'All India Radio',
  'Daijiworld',
  'Namma TV',
  'V4 Channel'
];

const educationalInstitutions = [
  'St. Joseph\'s Engineering College',
  'SDM PG Centre',
  'MV Shetty Memorial College',
  'Milagres College',
  'Besant Women\'s College',
  'St. Aloysius College',
  'Mangalore Academy of Professional Studies',
  'CRC, Davanagere',
  'Nitte Usha Institute of Nursing Sciences'
];

export default function ClientList() {
  return (
    <section id="trusted-clients" className="mt-24 container mx-auto px-6 lg:px-2" aria-labelledby="client-section-heading">
      <h2 
        id="client-section-heading"
        className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white text-center mb-16"
      >
        <span className="relative inline-block">
          <span className="relative z-10">Trusted by Leading Organizations</span>
          <span className="absolute bottom-2 left-0 w-full h-2 bg-indigo-100 dark:bg-teal-900/30 -z-10 transform skew-x-3"></span>
        </span>
      </h2>
      
      <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
        We're proud to partner with organizations across various sectors, delivering innovative solutions that drive real-world impact.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Corporates Section */}
        <div 
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex items-center mb-6">
            <BuildingOfficeIcon className="h-8 w-8 text-indigo-600 dark:text-teal-400 mr-3" aria-hidden="true" />
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-teal-400 dark:to-teal-200">
              Corporates
            </h3>
          </div>
          <ul className="space-y-3 text-gray-800 dark:text-gray-300" role="list">
            {clients.map((client, index) => (
              <li
                key={index}
                className="flex items-center p-3 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-default group"
              >
                <span className="group-hover:text-indigo-600 dark:group-hover:text-teal-400 transition-colors duration-200">
                  {client}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Organizations Section */}
        <div 
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex items-center mb-6">
            <UsersIcon className="h-8 w-8 text-teal-600 dark:text-teal-400 mr-3" aria-hidden="true" />
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-400 dark:from-teal-400 dark:to-teal-200">
              Organizations
            </h3>
          </div>
          <ul className="space-y-3 text-gray-800 dark:text-gray-300" role="list">
            {organizations.map((org, index) => (
              <li
                key={index}
                className="flex items-center p-3 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-default group"
              >
                <span className="group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200">
                  {org}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Media Engagements Section */}
        <div 
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex items-center mb-6">
            <TvIcon className="h-8 w-8 text-teal-600 dark:text-teal-400 mr-3" aria-hidden="true" />
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-400 dark:from-teal-400 dark:to-teal-200">
              Media Presence
            </h3>
          </div>
          <ul className="space-y-3 text-gray-800 dark:text-gray-300" role="list">
            {mediaPresence.map((media, index) => (
              <li 
                key={index}
                className="flex items-center p-3 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-default group"
              >
                <span className="group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200">
                  {media}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Educational Institutions Section */}
        <div 
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex items-center mb-6">
            <AcademicCapIcon className="h-8 w-8 text-teal-600 dark:text-teal-400 mr-3" aria-hidden="true" />
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-400 dark:from-teal-400 dark:to-teal-200">
              Educator
            </h3>
          </div>
          <ul className="space-y-3 text-gray-800 dark:text-gray-300" role="list">
            {educationalInstitutions.map((institution, index) => (
              <li 
                key={index}
                className="flex items-center p-3 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-default group"
              >
                <span className="group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200">
                  {institution}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Client Stats Section */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center" data-aos="fade-up">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
          <p className="text-4xl font-bold text-indigo-600 dark:text-teal-400">{clients.length}+</p>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Corporates</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
          <p className="text-4xl font-bold text-teal-600 dark:text-teal-400">{organizations.length}+</p>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Organizations</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
          <p className="text-4xl font-bold text-indigo-600 dark:text-teal-400">{educationalInstitutions.length}+</p>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Educational Institutions</p>
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
          <p className="text-4xl font-bold text-teal-600 dark:text-teal-400">{mediaPresence.length}</p>
          <p className="text-gray-600 dark:text-gray-400 mt-1">Media Features</p>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="mt-16 text-center">
        <a 
          href="/contact" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300"
          aria-label="Contact us to join our client network"
        >
          Join my client network
          <ArrowRightIcon className="ml-2 h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
