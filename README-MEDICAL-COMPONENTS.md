# Medical Components Documentation

This document provides information about the medical-specific components in the website and how to use them across the site for a consistent medical professional appearance.

## Components

### 1. Medical Disclaimer Component

The `MedicalDisclaimer` component provides a prominent, professional medical disclaimer that should be included on all medical content pages.

#### Usage:

```jsx
import MedicalDisclaimer from "@/components/blog/MedicalDisclaimer";

// In your component or page:
<MedicalDisclaimer className="mb-8" />
```

#### Features:

- Professional medical-legal wording
- Attention-grabbing design with subtle animation
- Collapsible interface that remembers user preference
- HIPAA-compliant wording
- Last update timestamp

#### Placement Recommendations:

- Place at the bottom of content pages before the footer
- Avoid placing at the top of pages as it may negatively impact SEO
- For SEO optimization, keep important content at the top of the page

### 2. Enhanced Author Section

The `AuthorSection` component displays the author's medical credentials in a professional format.

#### Usage:

```jsx
import AuthorSection from "@/components/blog/AuthorSection";

// In your component or page:
<AuthorSection />
```

#### Features:

- Professional medical credential presentation
- Visual categorization of different credential types
- Verification badge
- Clinical experience metrics
- Organized sections for certifications and areas of expertise
- Call-to-action buttons for consultation

#### Customization:

The author information is stored in the `AUTHOR_INFO` constant within the component. You can modify this object to update credentials, experience, or other professional information.

## Site-Wide Integration

To maintain a consistent medical professional appearance across the site:

1. **Include components at appropriate locations** (medical disclaimer at bottom, author section after content)
2. **Use the same medical color scheme** (teal, blue gradients) for other medical elements
3. **Maintain consistent medical terminology** throughout the site
4. **Use Lucide React medical icons** consistently across components

## CSS/Styling

The components use custom Tailwind classes, including a custom animation:

```js
// In tailwind.config.js
animation: {
  'pulse-once': 'pulse-once 2s ease-in-out 1',
},
keyframes: {
  'pulse-once': {
    '0%, 100%': { opacity: '1' },
    '50%': { opacity: '0.85' },
  },
}
```

## Dependencies

These components require:

- Tailwind CSS
- Lucide React for medical icons (`npm install lucide-react`)
- Next.js Image component

## Next.js Client Components

Both `MedicalDisclaimer` and `AuthorSection` are React client components that use:

- React hooks (useState, useEffect)
- Browser APIs (localStorage)
- Interactive elements (collapsible sections)

Each file includes the `"use client"` directive at the top:

```jsx
"use client"

import React from 'react'
// Rest of imports...
```

When importing these components in server components, use dynamic imports with Suspense boundaries:

```jsx
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const MedicalDisclaimer = dynamic(() => import('@/components/blog/MedicalDisclaimer'), {
  loading: () => <div className="animate-pulse h-24 bg-gray-100 dark:bg-gray-800 rounded-lg"></div>
});

// In your component:
<Suspense fallback={<div className="animate-pulse h-24 bg-gray-100 dark:bg-gray-800 rounded-lg"></div>}>
  <MedicalDisclaimer className="mb-8" />
</Suspense>
```

## Maintenance

When updating medical content:

1. **Keep disclaimers current** with the latest medical-legal standards
2. **Update the author's credentials** as new certifications are obtained
3. **Review the disclaimer timestamp** periodically to ensure it reflects recent reviews 