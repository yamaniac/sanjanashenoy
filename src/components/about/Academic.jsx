export default function Academic() {
    const education = [
        {
            year: "2022",
            title: "PhD Candidate",
            institution: "Mangalore University",
            details: "Currently pursuing doctoral research"
        },
        {
            year: "2012",
            title: "Certified Bariatric Nutritionist",
            institution: "CODS",
            details: "Specialized certification in bariatric nutrition"
        },
        {
            year: "2010",
            title: "Certified Diabetes Educator",
            institution: "HOPE",
            details: "Advanced certification in diabetes management"
        },
        {
            year: "2009",
            title: "MSC in Dietetics and Food Service Management",
            institution: "Mount Carmel College, IGNOU",
            details: "Master's degree specializing in dietetics"
        },
        {
            year: "2006",
            title: "PG Diploma in Dietetics",
            institution: "WGSHA, Manipal University",
            details: "Postgraduate specialization in dietetics"
        },
        {
            year: "2003",
            title: "Bachelor of Science",
            institution: "St. Aloysius College, Mangalore",
            details: "Bachelors's degree in Science"
        },
    ];
      
    return (
        <div className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-teal-600 dark:text-teal-400">
                        Educational Journey
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Academic Milestones
                    </p>
                </div>

                <div className="relative mx-auto max-w-3xl">
                    {/* Timeline line */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-teal-600 dark:bg-teal-400"></div>

                    {education.map((edu, index) => (
                        <div key={index} className="relative pl-12 mb-12 last:mb-0">
                            {/* Timeline dot */}
                            <div className="absolute left-0 w-8 h-8 bg-teal-600 dark:bg-teal-400 rounded-full border-4 border-white dark:border-gray-800"></div>
                            
                            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30 rounded-full">
                                    {edu.year}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {edu.title}
                                </h3>
                                <p className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">
                                    {edu.institution}
                                </p>
                                <p className="text-gray-500 dark:text-gray-400">
                                    {edu.details}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}