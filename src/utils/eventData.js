// Central location for event data used across the application
export function getEventData() {
  return [
    { 
        id: 1, 
        src: '/images/events/lions_club.webp', 
        alt: 'Lions Club Event', 
        title: 'Lions Club Mangalore', 
        date: 'March 10, 2021',
        endDate: 'March 10, 2021',
        category: 'community',
        location: {
          name: 'Lions Club Mangalore',
          addressLocality: 'Mangalore',
          addressRegion: 'Karnataka',
          addressCountry: 'India'
        },
        description: 'Sanjana Shenoy led an impactful discussion on Healthy diet for a Healthy Lifestyle at Lions Club Mangalore.'
      },
      { 
        id: 2, 
        src: '/images/events/Lions_club_international_district_diabetes_care.webp', 
        alt: 'Diabetes Care Event', 
        title: 'Lions Club International District Diabetes Care Workshop', 
        date: 'April 22, 2023',
        endDate: 'April 22, 2023',
        category: 'health',
        location: {
          name: 'Lions Club International District',
          addressLocality: 'Mangalore',
          addressRegion: 'Karnataka',
          addressCountry: 'India'
        },
        description: 'A specialized workshop focusing on diabetes care and prevention strategies for the community.'
      },
      { 
        id: 3, 
        src: '/images/events/diabetes_awareness_camp_mangalore.webp', 
        alt: 'Diabetes Awareness Camp', 
        title: 'Diabetes Awareness Camp in Mangalore', 
        date: 'May 10, 2023',
        endDate: 'May 10, 2023',
        category: 'health',
        location: {
          name: 'Diabetes Awareness Camp',
          addressLocality: 'Mangalore',
          addressRegion: 'Karnataka',
          addressCountry: 'India'
        },
        description: 'An educational camp organized to spread awareness about diabetes prevention and management.'
      },
      { 
        id: 4, 
        src: '/images/events/Max_life_insurance_chief_guest_sanjana_shenoy.webp', 
        alt: 'Max Life Insurance Event', 
        title: 'Max Life Insurance Conference with Chief Guest Sanjana Shenoy', 
        date: 'June 5, 2023',
        endDate: 'June 5, 2023',
        category: 'corporate',
        location: {
          name: 'Max Life Insurance Office',
          addressLocality: 'Mangalore',
          addressRegion: 'Karnataka',
          addressCountry: 'India'
        },
        description: 'Sanjana Shenoy was invited as the chief guest to speak about financial wellness and health planning.'
      },
      { 
        id: 5, 
        src: '/images/events/Milagres_pu_college_resource_person.webp', 
        alt: 'Milagres PU College Event', 
        title: 'Resource Person at Milagres PU College', 
        date: 'July 18, 2023',
        endDate: 'July 18, 2023',
        category: 'education',
        location: {
          name: 'Milagres PU College',
          addressLocality: 'Mangalore',
          addressRegion: 'Karnataka',
          addressCountry: 'India'
        },
        description: 'An interactive session with students about career opportunities in Dietetics in healthcare and wellness sectors.'
      },
      { 
        id: 6, 
        src: '/images/events/Mangalore_senior_citizens_chief_guest_speaker_sanjana_shenoy.webp', 
        alt: 'Senior Citizens Event', 
        title: 'Mangalore Senior Citizens Association Talk', 
        date: 'August 30, 2023',
        endDate: 'August 30, 2023',
        category: 'community',
        location: {
          name: 'Mangalore Senior Citizens Association',
          addressLocality: 'Mangalore',
          addressRegion: 'Karnataka',
          addressCountry: 'India'
        },
        description: 'Sanjana Shenoy addressed senior citizens on healthy aging and maintaining wellness in later years.'
      },
      { 
        id: 7, 
        src: '/images/events/JCI_mrs_mangalore_Chief_guest_sanjana_shenoy.webp', 
        alt: 'JCI Event', 
        title: 'JCI Mrs. Mangalore Event with Chief Guest Sanjana Shenoy', 
        date: 'September 12, 2023',
        endDate: 'September 12, 2023',
        category: 'corporate',
        location: {
          name: 'JCI Mangalore',
          addressLocality: 'Mangalore',
          addressRegion: 'Karnataka',
          addressCountry: 'India'
        },
        description: 'A keynote address on women\'s empowerment and health consciousness at this prestigious city event.'
      },
      {
        id: 8,
        src: '/images/events/SDM_college_Chief_guest_sanjana_shenoy.webp',
        alt: 'JCI Event',
        title: 'SDM College Event with Chief Guest Sanjana Shenoy',
        date: 'October 15, 2023',
        endDate: 'October 15, 2023',
        category: 'education',
        location: {
          name: 'SDM College',
          addressLocality: 'Mangalore',
          addressRegion: 'Karnataka',
          addressCountry: 'India'
        },
        description: 'A keynote address on women\'s empowerment and health consciousness at this prestigious city event.'
      },
      {
        id: 9,
        src: '/images/events/Rotary_club_mangalore_sanjana_shenoy_speaker.webp',
        alt: 'JCI Event',
        title: 'Rotary Club Mangalore Event with Sanjana Shenoy',
        date: 'November 20, 2023',
        endDate: 'November 20, 2023',
        category: 'community',
        location: {
          name: 'Rotary Club',
          addressLocality: 'Mangalore',
          addressRegion: 'Karnataka',
          addressCountry: 'India'
        },
        description: 'A keynote address on women\'s empowerment and health consciousness at this prestigious city event.'
      },
      {
        id: 10,
        src: '/images/events/GPL_mangaore_speaker_sanjana_shenoy.webp',
        alt: 'GPL, Mangalore Speaker',
        title: 'GPL-Mangalore Speaker',
        date: 'November 20, 2023',
        endDate: 'November 20, 2023',
        category: 'community',
        location: {
          name: 'GPL Venue',
          addressLocality: 'Mangalore',
          addressRegion: 'Karnataka',
          addressCountry: 'India'
        },
        description: 'A keynote address on women\'s empowerment and health consciousness at this prestigious city event.'
      },
      {
        id: 11,
        src: '/images/events/St_josephs_college_speaker_sanjana_shenoy.webp',
        alt: 'GPL, Mangalore Speaker',
        title: 'GPL-Mangalore Speaker',
        date: 'November 20, 2023',
        endDate: 'November 20, 2023',
        category: 'education',
        location: {
          name: 'St. Joseph\'s College',
          addressLocality: 'Mangalore',
          addressRegion: 'Karnataka',
          addressCountry: 'India'
        },
        description: 'A keynote address on women\'s empowerment and health consciousness at this prestigious city event.'
      },
      {
        id: 12,
        src: '/images/events/daiji_world_sanjana_shenoy.png',
        alt: 'DaijiWorld website',
        title: 'DaijiWorld.com',
        date: 'September 05, 2012',
        endDate: 'September 05, 2012',
        category: 'corporate',
        location: {
          name: 'DaijiWorld Media',
          addressLocality: 'Mangalore',
          addressRegion: 'Karnataka',
          addressCountry: 'India'
        },
        description: 'Featured in DaijiWorld.com and an article on Healthy Diet awareness and Lifestyle'
      },
      {
        id: 13,
        src: '/images/events/Nutrition_for_woman_speaker_sanjana_shenoy.JPG',
        alt: 'Nutrition for Woman Speaker',
        title: 'Nutrition for Woman Speaker',
        date: 'September 05, 2012',
        endDate: 'September 05, 2012',
        category: 'corporate',
        location: {
          name: 'Women\'s Health Conference',
          addressLocality: 'Mangalore',
          addressRegion: 'Karnataka',
          addressCountry: 'India'
        },
        description: 'Featured in DaijiWorld.com and an article on Healthy Diet awareness and Lifestyle'
      },
      {
        id: 14,
        src: '/images/events/nutrition_during_covid_sanjana.JPG',
        alt: 'Nutrition during Covid',
        title: 'Nutrition during Covid',
        date: 'September 05, 2012',
        endDate: 'September 05, 2012',
        category: 'corporate',
        location: {
          name: 'COVID-19 Health Awareness Program',
          addressLocality: 'Mangalore',
          addressRegion: 'Karnataka',
          addressCountry: 'India'
        },
        description: 'Featured in DaijiWorld.com and an article on Healthy Diet awareness and Lifestyle'
      },
      {
        id: 15,
        src: '/images/events/Radio_mirchi_guest_speaker_sanjana_shenoy.JPG',
        alt: 'Radio Mirchi Guest Speaker',
        title: 'Radio Mirchi Guest Speaker',
        date: 'September 05, 2012',
        endDate: 'September 05, 2012',
        category: 'corporate',
        location: {
          name: 'Radio Mirchi Studio',
          addressLocality: 'Mangalore',
          addressRegion: 'Karnataka',
          addressCountry: 'India'
        },
        description: 'Featured in DaijiWorld.com and an article on Healthy Diet awareness and Lifestyle'
      }
  ];
} 

