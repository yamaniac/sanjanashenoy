import Link from 'next/link'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Consultations', href: '/consultations' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    social: [
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/dietsanjana/',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/dietsanjana/',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
     
      {
        name: 'YouTube',
        href: 'https://www.youtube.com/channel/UC5n0DcL_T_CrTxrVgL6D82Q',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  }
  
  export default function Footer() {
    return (
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800" role="contentinfo" aria-label="Site footer">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Column 1: Quick Links */}
            <div>
              <h2 className="text-gray-900 dark:text-white font-semibold mb-4">Quick Links</h2>
              <ul className="space-y-2" role="list">
                <li>
                  <Link 
                    href="/about-sanjana-m-shenoy" 
                    className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 text-sm"
                    title="About Sanjana M Shenoy - Professional Dietitian"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog" 
                    className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 text-sm"
                    title="Nutrition and Diet Blog Articles"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 text-sm"
                    title="Contact Sanjana Shenoy"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/disclaimer" 
                    className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 text-sm"
                    title="Website Disclaimer"
                  >
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Health Calculators */}
            <div>
              <h2 className="text-gray-900 dark:text-white font-semibold mb-4">Health Calculators</h2>
              <ul className="space-y-2" role="list">
                <li>
                  <Link 
                    href="/bmi-calculator" 
                    className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 text-sm"
                    title="Calculate your Body Mass Index (BMI)"
                  >
                    BMI Calculator
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/bmr-calculator" 
                    className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 text-sm"
                    title="Calculate your Basal Metabolic Rate (BMR)"
                  >
                    BMR Calculator
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact & Social */}
            <div>
              <h2 className="text-gray-900 dark:text-white font-semibold mb-4">Contact & Connect</h2>
              <div className="flex flex-col md:flex-row gap-x-8 gap-y-6">
                {/* Contact Info */}
                <address className="not-italic md:w-2/3">
                  <ul className="space-y-2" role="list">
                    <li className="text-gray-600 dark:text-gray-300 text-sm flex gap-x-2 items-center">
                      <EnvelopeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" aria-hidden="true" />
                      <a href="mailto:diet@sanjanashenoy.in" className="hover:text-teal-600 dark:hover:text-teal-400">
                        Email: diet@sanjanashenoy.in
                      </a>
                    </li>
                    <li className="text-gray-600 dark:text-gray-300 text-sm flex gap-x-2 items-center">
                      <PhoneIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" aria-hidden="true" />
                      <a href="tel:+919880268082" className="hover:text-teal-600 dark:hover:text-teal-400">
                        Phone: +91 9880268082
                      </a>
                    </li>
                    <li className="text-gray-600 dark:text-gray-300 text-sm flex gap-x-2">
                      <BuildingOffice2Icon className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0 mt-1" aria-hidden="true" />
                      <span>
                        Sanjana's Diet and nutrition clinic,<br />
                        2nd floor, Lalbagh Towers<br />
                        Ballalbagh Junction<br />
                        Mangalore - 575003<br />
                        Karnataka, India
                      </span>
                    </li>
                  </ul>
                </address>
                
                {/* Social Media */}
                <div className="md:w-1/3">
                  <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-3">Social media</h3>
                  <div className="flex space-x-4">
                    {navigation.social.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit our ${item.name} page`}
                        title={`Follow us on ${item.name}`}
                      >
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Section - Above Copyright */}
        

          {/* Copyright */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              © {new Date().getFullYear()} Sanjana Shenoy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  }
  