export type Certification = {
  id: string;
  title: string;
  provider: string;
  date: Date;
  description: string;
  skills: string[];
  imageUrl: string;
  certificateUrl?: string;
  type: 'professional' | 'academic' | 'industry';
  validUntil?: Date;
  credentialId?: string;
};

export const certificationProviders = [
  'All',
  'Microsoft',
  'AWS',
  'Google',
  'Oracle',
  'Cisco',
  'Others'
];

// Por ahora está vacío, pero aquí irían las certificaciones profesionales reales
// como AWS Certified Developer, Microsoft Azure, Google Cloud, etc.
export const certificationsData: Certification[] = [
  // Ejemplo de cómo se vería una certificación profesional:
  // {
  //   id: 'cert-aws-1',
  //   title: 'AWS Certified Developer - Associate',
  //   provider: 'Amazon Web Services',
  //   date: new Date('2024-06-15'),
  //   description: 'Certificación profesional que valida las habilidades para desarrollar y mantener aplicaciones en AWS.',
  //   skills: ['AWS', 'Cloud Computing', 'Serverless', 'DynamoDB', 'Lambda'],
  //   imageUrl: '/certificates/aws-developer-associate.png',
  //   certificateUrl: 'https://aws.amazon.com/verification/XXXXXXXXX',
  //   type: 'professional',
  //   validUntil: new Date('2027-06-15'),
  //   credentialId: 'AWS-DEV-ASSOC-2024-001'
  // }
];