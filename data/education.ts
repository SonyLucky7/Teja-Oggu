export interface Education {
  level: string;
  institution: string;
  details?: string;
}

export const education: Education[] = [
  {
    level: 'SSC',
    institution: 'ZPHS High School',
    details: 'Venkampet, Sircilla'
  },
  {
    level: 'Intermediate',
    institution: 'Sahasra Junior College',
    details: '11th & 12th Grade'
  }
];
