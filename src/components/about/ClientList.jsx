import {
  BuildingOfficeIcon,
  AcademicCapIcon,
  TvIcon,
  UsersIcon,
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
    <div className="mt-24 container mx-auto px-6 lg:px-2">
      <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white text-center mb-16">
        <span>
          Trusted by Leading Organizations
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Corporates Section */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center mb-6">
            <BuildingOfficeIcon className="h-8 w-8 text-indigo-600 dark:text-teal-400 mr-3" />
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-teal-400 dark:to-teal-200">
              Corporates
            </h3>
          </div>
          <ul className="space-y-3 text-gray-800 dark:text-gray-300">
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
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center mb-6">
            <UsersIcon className="h-8 w-8 text-teal-600 dark:text-teal-400 mr-3" />
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-400 dark:from-teal-400 dark:to-teal-200">
              Organizations
            </h3>
          </div>
          <ul className="space-y-3 text-gray-800 dark:text-gray-300">
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
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center mb-6">
            <TvIcon className="h-8 w-8 text-teal-600 dark:text-teal-400 mr-3" />
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-400 dark:from-teal-400 dark:to-teal-200">
              Media Presence
            </h3>
          </div>
          <ul className="space-y-3 text-gray-800 dark:text-gray-300">
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
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
          <div className="flex items-center mb-6">
            <AcademicCapIcon className="h-8 w-8 text-teal-600 dark:text-teal-400 mr-3" />
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-400 dark:from-teal-400 dark:to-teal-200">
              Educator
            </h3>
          </div>
          <ul className="space-y-3 text-gray-800 dark:text-gray-300">
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
    </div>
  );
}
