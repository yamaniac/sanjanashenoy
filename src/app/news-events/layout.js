import { Metadata } from 'next/types'

export const metadata = {
  title: 'News & Events | Sanjana M Shenoy - Dietitian and Nutritionist',
  description: 'Explore nutrition workshops, health education programs, and community events led by Sanjana M Shenoy, a leading dietitian in Mangalore specializing in evidence-based dietary guidance.',
  keywords: 'dietitian events, nutrition workshops, health education, Sanjana Shenoy events, Mangalore dietitian, community health initiatives',
  openGraph: {
    title: 'News & Events | Sanjana M Shenoy - Dietitian and Nutritionist',
    description: 'Explore nutrition workshops, health education programs, and community events led by Sanjana M Shenoy.',
    keywords: 'sanjana m shenoy, mangalore dietitian, mangalore nutritionist, nutrition workshops, health education programs, community health initiatives',
    url: 'https://sanjanashenoy.in/news-events',
    type: 'website',
    images: [
      {
        url: 'https://sanjanashenoy.in/images/events/lions_club.webp',
        width: 1200,
        height: 630,
        alt: 'Sanjana M Shenoy at Lions Club Event',
      },
      {
        url: 'https://sanjanashenoy.in/images/events/diabetes_awareness_camp_mangalore.webp',
        width: 1200,
        height: 630,
        alt: 'Diabetes Awareness Camp in Mangalore',
      },
      {
        url: 'https://sanjanashenoy.in/images/events/Milagres_pu_college_resource_person.webp',
        width: 1200,
        height: 630,
        alt: 'Sanjana Shenoy as Resource Person at Milagres PU College',
      },
      {
        url: 'https://sanjanashenoy.in/images/events/daiji_world_sanjana_shenoy.png',
        width: 1200,
        height: 630,
        alt: 'Sanjana Shenoy featured in DaijiWorld',
      },
    ],
  },
}

export default function NewsEventsLayout({ children }) {
  return children;
} 