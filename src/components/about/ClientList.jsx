import { BuildingOfficeIcon, AcademicCapIcon, TvIcon, UsersIcon } from '@heroicons/react/24/outline'

export default function ClientList() {
    return (
        <div className="mt-24 container mx-auto px-6 lg:px-2">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white text-center mb-16">
                Trusted by Leading Organizations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Corporates Section */}
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                        <BuildingOfficeIcon className="h-6 w-6 text-indigo-600 dark:text-teal-400 mr-2" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Corporates</h3>
                    </div>
                    <ul className="space-y-2 text-gray-800 dark:text-gray-300">
                        <li>Infosys</li>
                        <li>Emphasis</li>
                        <li>Amway</li>
                        <li>MOM and Me (Mahindra Retail)</li>
                        <li>MCF</li>
                        <li>MRPL</li>
                        <li>BPCL</li>
                        <li>HPCL</li>
                        <li>ICICI</li>
                        <li>Max Life Insurance</li>
                        <li>IOCL</li>
                        <li>HDFC</li>
                    </ul>
                </div>

                {/* Organizations Section */}
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                        <UsersIcon className="h-6 w-6 text-teal-600 dark:text-teal-400 mr-2" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Organizations</h3>
                    </div>
                    <ul className="space-y-2 text-gray-800 dark:text-gray-300">
                        <li>Family Doctors Associations</li>
                        <li>Lions Clubs</li>
                        <li>Mahila Sabha</li>
                        <li>Indian Medical Association</li>
                        <li>Family Physicians Association</li>
                        <li>Mangalore Senior Citizens Association</li>
                        <li>GSB Premier League</li>
                        <li>Mrs Mangalore Beauty Pageant</li>
                        <li>Mrs India Karnataka Beauty Pageant</li>
                        <li>We One Aqua Centre</li>
                        <li>Mangalore Badminton Association</li>
                    </ul>
                </div>

                {/* Media Engagements Section */}
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                        <TvIcon className="h-6 w-6 text-teal-600 dark:text-teal-400 mr-2" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Media Presence</h3>
                    </div>
                    <ul className="space-y-2 text-gray-800 dark:text-gray-300">
                        <li>Radio Mirchi 98.3 FM</li>
                        <li>All India Radio</li>
                        <li>Daijiworld</li>
                        <li>Namma TV</li>
                        <li>V4 Channel</li>
                    </ul>
                </div>

                {/* Educational Institutions Section */}
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                    <div className="flex items-center mb-4">
                        <AcademicCapIcon className="h-6 w-6 text-teal-600 dark:text-teal-400 mr-2" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Guest Speaker</h3>
                    </div>
                    <ul className="space-y-2 text-gray-800 dark:text-gray-300">
                        <li>St. Joseph's Engineering College</li>
                        <li>SDM PG Centre</li>
                        <li>MV Shetty Memorial College</li>
                        <li>Milagres College</li>
                        <li>Besant Women's College</li>
                        <li>St. Aloysius College</li>
                        <li>Mangalore Academy of Professional Studies</li>
                        <li>CRC, Davanagere</li>
                        <li>Nitte Usha Institute of Nursing Sciences</li>
                    </ul>
                </div>
            </div>
        </div>
    )
} 