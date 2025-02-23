import Header from '@/components/Header'
import Footer from '@/components/Footer'
// If using public directory:
// No import needed, use direct path in img tag

export default function Services() {
    return (
        <>
            <Header />
            <main className="bg-white dark:bg-gray-900">
                <div className="bg-white dark:bg-gray-900 py-32">
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="text-base/7 text-gray-700 dark:text-gray-300">
                            <p className="text-base/7 font-semibold text-indigo-600 dark:text-teal-400">Services</p>
                            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl">
                                Dietary Specializations
                            </h1>
                            <p className="mt-6 text-xl/8">
                                Comprehensive nutrition care tailored to your specific health needs and goals. Our evidence-based approach ensures personalized dietary solutions for various health conditions and lifestyle requirements.
                            </p>
                        </div>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Weight Management */}
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-900 border border-gray-100 dark:border-gray-700">
                                <h2 className="text-xl font-semibold mb-3 dark:text-white">Weight Management</h2>
                                <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
                                    <li>Meal planning for overweight and obesity conditions</li>
                                    <li>Dietary management for underweight patients</li>
                                    <li>Advice on exercise and fitness</li>
                                    <li>Supplement advice for strength training and workouts</li>
                                </ul>
                            </div>

                            {/* Diabetes Management */}
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-900 border border-gray-100 dark:border-gray-700">
                                <h2 className="text-xl font-semibold mb-3 dark:text-white">Diabetes Management</h2>
                                <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
                                    <li>Understanding Blood sugar control and dietary management</li>
                                    <li>Nutritional strategies to manage pre-diabetes</li>
                                </ul>
                            </div>

                            {/* Kidney Related Disorders */}
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-900 border border-gray-100 dark:border-gray-700">
                                <h2 className="text-xl font-semibold mb-3 dark:text-white">Kidney Related Disorders</h2>
                                <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
                                    <li>Meal planning for Kidney failure</li>
                                    <li>Kidney stones and infections management</li>
                                </ul>
                            </div>

                            {/* Gastrointestinal Diseases */}
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-900 border border-gray-100 dark:border-gray-700">
                                <h2 className="text-xl font-semibold mb-3 dark:text-white">Gastrointestinal Diseases</h2>
                                <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
                                    <li>Diet and lifestyle management for Fatty liver</li>
                                    <li>Nutritional management for Liver diseases</li>
                                    <li>Dietary management for gall bladder stones</li>
                                    <li>Gastric and intestinal issues (Acidity, GERD, IBS)</li>
                                </ul>
                            </div>

                            {/* Heart Diseases */}
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-900 border border-gray-100 dark:border-gray-700">
                                <h2 className="text-xl font-semibold mb-3 dark:text-white">Heart Diseases</h2>
                                <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
                                    <li>Cholesterol management</li>
                                    <li>Lowering triglycerides and LDL</li>
                                    <li>Improvements in HDL</li>
                                </ul>
                            </div>

                            {/* Child Nutrition */}
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-900 border border-gray-100 dark:border-gray-700">
                                <h2 className="text-xl font-semibold mb-3 dark:text-white">Child Nutrition</h2>
                                <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
                                    <li>Infant feeding strategies and ideal weight gain</li>
                                    <li>Weight management for children</li>
                                    <li>Anaemia management</li>
                                    <li>Promotion of active lifestyle for children and teens</li>
                                </ul>
                            </div>

                            {/* Hormonal Disorders */}
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-900 border border-gray-100 dark:border-gray-700">
                                <h2 className="text-xl font-semibold mb-3 dark:text-white">Hormonal Disorders</h2>
                                <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
                                    <li>Hypo and hyperthyroid conditions</li>
                                    <li>PCOD, PCOS management</li>
                                </ul>
                            </div>

                            {/* Sports Nutrition */}
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-900 border border-gray-100 dark:border-gray-700">
                                <h2 className="text-xl font-semibold mb-3 dark:text-white">Sports Nutrition</h2>
                                <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
                                    <li>Nutrition for athletes</li>
                                    <li>Pre and Post training Fueling strategies</li>
                                    <li>Hydration guidance</li>
                                    <li>Understanding sports supplementation</li>
                                </ul>
                            </div>

                            {/* Nutrition in Pregnancy */}
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-900 border border-gray-100 dark:border-gray-700">
                                <h2 className="text-xl font-semibold mb-3 dark:text-white">Nutrition in Pregnancy</h2>
                                <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
                                    <li>Ideal weight gain in pregnancy</li>
                                    <li>Gestational diabetes management</li>
                                </ul>
                            </div>

                            {/* Corporate Wellness */}
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-900 border border-gray-100 dark:border-gray-700">
                                <h2 className="text-xl font-semibold mb-3 dark:text-white">Corporate Wellness</h2>
                                <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
                                    <li>Understanding work, life and health balance</li>
                                    <li>General wellness guidance</li>
                                    <li>Meal planning for busy lifestyles</li>
                                </ul>
                            </div>

                            {/* Medical Nutrition Therapy */}
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-900 border border-gray-100 dark:border-gray-700">
                                <h2 className="text-xl font-semibold mb-3 dark:text-white">Medical Nutrition Therapy</h2>
                                <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
                                    <li>Nutritional management for cancer</li>
                                    <li>Pre and post surgery nutrition</li>
                                    <li>Modified diets (Clear fluid, Full fluid and Tube feeding)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}