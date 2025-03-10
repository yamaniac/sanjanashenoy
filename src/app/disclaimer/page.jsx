import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { AlertTriangle, Info, Bookmark, Link as LinkIcon } from 'lucide-react';

// Use dynamic import for client components
const MedicalDisclaimer = dynamic(() => import('@/components/blog/MedicalDisclaimer'), {
  loading: () => <div className="animate-pulse h-24 bg-gray-100 dark:bg-gray-800 rounded-lg"></div>
});

export default function Disclaimer() {
    return (
        <>
            <Header />
            <div className="max-w-4xl mx-auto px-4 py-8 mt-20">
                <h1 className="text-3xl font-bold mb-8 dark:text-white">Website Disclaimers</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">Last updated: February 20, 2025</p>

                {/* General Disclaimer Section */}
                <section className="mb-8 border-l-4 border-blue-500 pl-4 py-1">
                    <h2 className="text-xl font-semibold mb-4 flex items-center dark:text-white">
                        <Info className="w-5 h-5 text-blue-500 mr-2" />
                        General Information
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        The information provided by sanjana shenoy ("we," "us," or "our") on
                        sanjanashenoy.in (the "Site") is for general informational purposes only.
                        All information on the Site is provided in good faith, however, we make no
                        representation or warranty of any kind, express or implied, regarding the
                        accuracy, adequacy, validity, reliability, availability, or completeness
                        of any information on the Site.
                    </p>
                </section>

                {/* Liability Section */}
                <section className="mb-8 border-l-4 border-yellow-500 pl-4 py-1">
                    <h2 className="text-xl font-semibold mb-4 flex items-center dark:text-white">
                        <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
                        Limitation of Liability
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR
                        DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE
                        ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR
                        RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
                    </p>
                </section>

                {/* External Links Section */}
                <section className="mb-8 border-l-4 border-purple-500 pl-4 py-1">
                    <h2 className="text-xl font-semibold mb-4 flex items-center dark:text-white">
                        <LinkIcon className="w-5 h-5 text-purple-500 mr-2" />
                        External Links
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Our platform may contain links to websites or content belonging to or
                        originating from third parties, including links in banners or other
                        advertising. Please note that:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                        <li>
                            External links are not investigated, monitored, or checked for accuracy,
                            adequacy, validity, reliability, availability, or completeness by us.
                        </li>
                        <li>
                            We do not warrant, endorse, guarantee, or assume responsibility for the
                            accuracy or reliability of any information offered by third-party
                            websites linked through the site or any website or feature linked in any
                            banner or other advertising.
                        </li>
                        <li>
                            We will not be a party to or in any way be responsible for monitoring
                            any transaction between you and third-party providers of products or
                            services.
                        </li>
                    </ul>
                </section>

                {/* Professional Disclaimer Section */}
                <section className="mb-8 border-l-4 border-teal-500 pl-4 py-1">
                    <h2 className="text-xl font-semibold mb-4 flex items-center dark:text-white">
                        <Bookmark className="w-5 h-5 text-teal-500 mr-2" />
                        Professional Disclaimer
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        The Site cannot and does not contain medical/health advice. The
                        medical/health information is provided for general informational and
                        educational purposes only and is not a substitute for professional advice.
                        Accordingly, before taking any actions based upon such information, we
                        encourage you to consult with the appropriate professionals. We do not
                        provide any kind of medical/health advice. THE USE OR RELIANCE OF ANY
                        INFORMATION CONTAINED ON THE SITE IS SOLELY AT YOUR OWN RISK.
                    </p>
                </section>
                
                {/* Enhanced Medical Disclaimer at the bottom of the page */}
                <section className="mb-10">
                    <h2 className="text-xl font-semibold mb-4 flex items-center dark:text-white">
                        <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                        Medical Information Disclaimer
                    </h2>
                    <Suspense fallback={<div className="animate-pulse h-24 bg-gray-100 dark:bg-gray-800 rounded-lg"></div>}>
                        <MedicalDisclaimer />
                    </Suspense>
                </section>
            </div>
            <Footer />
        </>
    );
}
  