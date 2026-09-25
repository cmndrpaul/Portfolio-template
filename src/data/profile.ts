/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email and the Home headline. Every value below is a PLACEHOLDER.
 * Replace the text, or hand this file to your AI assistant and tell it what
 * to put in each field.
 *
 * Page-specific copy (projects, services, testimonials, FAQs) lives in the
 * other files in src/data/ and at the top of each view component.
 */

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

export type Stat = { value: string; label: string }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'John Paul M. Gonzaga',
  firstName: 'John Paul',
  handle: '@cmndrpaul',
  role: 'Frontend Developer',
  avatarSrc: '/profile.jpg.png',
  verifiedLabel: 'Identity verified',
  email: 'cmndr.johnpaulgonzaga@gmail.com',
  location: 'Cavite, Philippines',
  stats: [
    { value: '3 yrs', label: 'Experience' },
    { value: '12', label: 'Projects' },
    { value: 'Freelance', label: 'Based' },
  ],
  // The intro types this line, then flies it into the Home headline.
  // Keep it short: two halves, 5-8 words total.
  displayName: { line1: 'Interfaces with intent.', line2: 'Built to be used.' },
  hero: {
    body: 'I build thoughtful, responsive frontend experiences for people and teams who care about the details.',
    portraitSrc: '/profile.jpg.png',
    portraitAlt: 'Portrait of John Paul M. Gonzaga',
  },
  socials: [
    { label: 'Facebook profile', href: 'https://www.facebook.com/cmndr.jp/', iconPath: '/icons/facebook.svg' },
    { label: 'GitHub profile', href: 'https://github.com/cmndrpaul', iconPath: '/icons/github.svg' },
    { label: 'LinkedIn profile', href: 'https://www.linkedin.com/in/john-paul-gonzaga-562587284/', iconPath: '/icons/linkedin.svg' },
  ],
}
