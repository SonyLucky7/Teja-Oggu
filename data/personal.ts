export interface ContactInfo {
  platform: string;
  handle: string;
  url: string;
  icon?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  specialization: string;
  shortBio: string;
  fullBio: string;
  age: number;
  dob: string;
  location: string;
  nativeLocation: string;
  additionalExperience: string;
  contacts: ContactInfo[];
}

export const personalInfo: PersonalInfo = {
  name: 'Teja Oggu',
  title: 'AI-Augmented Full-Stack Developer',
  specialization: 'SaaS • CRM • AI Integration • Automation • APIs',
  shortBio: 'AI-Augmented Full-Stack Developer specializing in SaaS, CRM, AI integration, automation, APIs, and intelligent digital systems.',
  fullBio: 'AI-Augmented Full-Stack Developer specializing in SaaS, CRM, AI integration, automation, APIs, and intelligent digital systems. I build end-to-end applications that are secure, scalable, and beautifully designed. My approach leverages AI to augment development speed and feature sets, producing advanced solutions for complex problems.',
  age: 21,
  dob: '01 January 2005',
  location: 'Hyderabad, Telangana, India',
  nativeLocation: 'Rajanna Sircilla, Telangana, India',
  additionalExperience: '3 Years Pharmacy Experience',
  contacts: [
    { platform: 'Email', handle: 'tejavoggu@outlook.com', url: 'mailto:tejavoggu@outlook.com' },
    { platform: 'LinkedIn', handle: 'raviteja-oggu', url: 'https://www.linkedin.com/in/raviteja-oggu-56916843a/' },
    { platform: 'Discord', handle: 'karmaa_07', url: '#' },
    { platform: 'Instagram', handle: '@zxn_wxx', url: 'https://instagram.com/zxn_wxx' },
    { platform: 'Twitter/X', handle: '@Karmaa_07', url: 'https://x.com/Karmaa_07' }
  ]
};
