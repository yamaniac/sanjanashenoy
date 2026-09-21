import Image from 'next/image'
import Head from 'next/head'

export default function Clients() {
    return (
        <section id="trusted-clients" aria-label="Trusted Client Organizations" className="border-y border-stone-200 bg-[#FBF7F2] pt-8 pb-12 sm:pt-10 sm:pb-16">
            <Head>
                {/* Add structured data for Organization affiliations */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Professional Dietitian",
                            "memberOf": [
                                {
                                    "@type": "Organization",
                                    "name": "Infosys",
                                    "url": "https://www.infosys.com/"
                                },
                                {
                                    "@type": "Organization",
                                    "name": "Mphasis",
                                    "url": "https://www.mphasis.com/"
                                },
                                {
                                    "@type": "Organization",
                                    "name": "Amway",
                                    "url": "https://www.amway.in/"
                                },
                                {
                                    "@type": "Organization",
                                    "name": "Mahindra Retail",
                                    "url": "https://www.mahindraretail.com/"
                                },
                                {
                                    "@type": "Organization",
                                    "name": "MCF",
                                    "url": "https://www.mcf.org.in/"
                                }
                            ]
                        })
                    }}
                />
            </Head>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <h2 className="mb-4 text-center font-display text-2xl font-medium tracking-tight text-gray-900 sm:text-3xl">
                        Trusted Dietitian & Nutrition Consultant for India's Most Prestigious Companies
                    </h2>
                    
                    <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-stone-700">
                        With over two decades of experience delivering specialized nutrition programs, I've helped these leading organizations improve employee wellness, enhance productivity, and create healthier workplace environments through evidence-based dietary guidance.
                    </p>
                    
                    <div className="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5">
                        <Image
                            alt="Infosys - Global leader in next-generation digital services and consulting"
                            title="Infosys"
                            src="/images/logos/infosys.png"
                            width={158}
                            height={48}
                            className="col-span-2 max-h-12 w-full object-contain object-left opacity-70 grayscale lg:col-span-1"
                        />
                        <Image
                            alt="Mphasis - Information Technology solutions provider specializing in cloud and cognitive services"
                            title="Mphasis"
                            src="/images/logos/mphasis.png"
                            width={158}
                            height={48}
                            className="col-span-2 max-h-12 w-full object-contain object-left opacity-70 grayscale lg:col-span-1"
                        />
                        <Image
                            alt="Amway - Global leader in health, beauty, and home care products"
                            title="Amway"
                            src="/images/logos/amway.svg"
                            width={158}
                            height={48}
                            className="col-span-2 max-h-12 w-full object-contain object-left opacity-70 grayscale lg:col-span-1"
                        />
                        <Image
                            alt="Mahindra Retail - Retail division of the Mahindra Group offering premium products and services"
                            title="Mahindra Retail"
                            src="/images/logos/mahindra_logo.png"
                            width={300}
                            height={300}
                            className="col-span-2 max-h-12 w-full object-contain object-left opacity-70 grayscale lg:col-span-1"
                        />
                        <Image
                            alt="MCF (Mangalore Chemicals & Fertilizers) - Leading manufacturer of plant nutrients and agricultural solutions"
                            title="MCF"
                            src="/images/logos/mcf.png"
                            width={300}
                            height={300}
                            className="col-span-2 max-h-12 w-full object-contain object-left opacity-70 grayscale lg:col-span-1"
                        />
                    </div>
                    
                    <p className="mt-8 text-center text-sm italic text-stone-600">
                        Partnering with industry leaders to promote health and wellness through personalized nutrition strategies.
                    </p>
                </div>
            </div>
        </section>
    )
}