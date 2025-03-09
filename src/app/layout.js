import { Inter } from 'next/font/google'
import "./globals.css";
import { Providers } from "./providers";
import Script from 'next/script'

// Configure font to load only required subsets
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Add display swap for better performance
  preload: true
})

export const metadata = {
  title: 'Sanjana M Shenoy - Dietitian and Nutritionist',
  description: 'Sanjana M Shenoy is a Dietitian and a Nutritionist based in Mangalore, India. She specializes in weight loss, sports nutrition, and general nutrition.',
}

// Add viewport export for color scheme and theme color
export const viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' }
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add preconnect for external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DPXMYJ2Z47"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DPXMYJ2Z47');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {/* Common Organization Schema */}
        <Script id="common-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://sanjanashenoy.in/about-sanjana-m-shenoy",
                  "name": "Sanjana M Shenoy - Dietitian & Nutritionist",
                  "url": "https://sanjanashenoy.in",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://sanjanashenoy.in/images/sanjana_shenoy.png",
                    "width": 800,
                    "height": 800
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "2nd floor, Lalbagh Towers, Ballalbagh Junction",
                    "addressLocality": "Mangalore",
                    "postalCode": "575003",
                    "addressCountry": "IN"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+919880268082",
                    "contactType": "customer service",
                    "availableLanguage": ["English", "Kannada", "Hindi", "Malayalam"]
                  },
                  "sameAs": [
                    "https://www.linkedin.com/in/sanjana-m-shenoy-21211125/",
                    "https://www.instagram.com/dietsanjana/",
                    "https://www.facebook.com/dietsanjana/",
                    "https://www.youtube.com/@dietsanjana",
                    "https://twitter.com/dietsanjana"

                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://sanjanashenoy.in/",
                  "url": "https://sanjanashenoy.in",
                  "name": "Sanjana M Shenoy - Dietitian & Nutritionist",
                  "description": "Professional dietitian and nutritionist offering personalized diet consultations in Mangalore",
                  "publisher": {
                    "@id": "https://sanjanashenoy.in/about-sanjana-m-shenoy"
                  },
                  "inLanguage": "en-US"
                },
                {
                  "@type": "Person",
                  "@id": "https://sanjanashenoy.in/#person",
                  "name": "Sanjana M Shenoy",
                  "image": {
                    "@type": "ImageObject",
                    "url": "https://sanjanashenoy.in/images/sanjana_shenoy.png",
                    "width": 800,
                    "height": 800
                  },
                  "description": "Professional dietitian and nutritionist with 15+ years of experience in clinical nutrition, weight management & diabetes care",
                  "jobTitle": "Dietitian & Nutritionist",
                  "worksFor": {
                    "@id": "https://sanjanashenoy.in/about-sanjana-m-shenoy"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/in/sanjana-m-shenoy-21211125/",
                    "https://www.instagram.com/dietsanjana/",
                    "https://www.facebook.com/dietsanjana/",
                    "https://www.youtube.com/@dietsanjana",
                    "https://twitter.com/dietsanjana"
                  ]
                }
              ]
            }
          `}
        </Script>
        <Providers>{children}</Providers>
        <Script id="register-sw" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').then(
                  function(registration) {
                    console.log('ServiceWorker registration successful');
                  },
                  function(err) {
                    console.log('ServiceWorker registration failed: ', err);
                  }
                );
              });
            }
          `}
        </Script>
      </body>
    </html>
  )
}
