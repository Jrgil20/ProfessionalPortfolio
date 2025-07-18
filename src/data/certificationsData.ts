export type Certification = {
  id: string;
  title: string;
  provider: string;
  date: Date;
  description: string;
  skills: string[];
  imageUrl: string;
  certificateUrl?: string;
  type: 'profesional' | 'académica' | 'industria';
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
  'GitHub',
  'Others'
];

// Por ahora está vacío, pero aquí irían las certificaciones profesionales reales
// como AWS Certified Developer, Microsoft Azure, Google Cloud, etc.
export const certificationsData: Certification[] = [
  {
    id: 'cert-github-foundations',
    title: 'GitHub Foundations',
    provider: 'GitHub',
    date: new Date('2025-06-29'),
    description: 'Certificación que valida el conocimiento fundamental de GitHub, incluyendo repositorios, ramas, pull requests, y colaboración en proyectos de desarrollo.',
    skills: ['GitHub', 'Control de Versiones', 'Git', 'Colaboración', 'Repositorios', 'Pull Requests'],
    imageUrl: 'https://images.credly.com/size/340x340/images/024d0122-724d-4c5a-bd83-cfe3c4b7a073/image.png',
    certificateUrl: 'https://www.credly.com/badges/d5bba642-e9df-4598-9ff4-f0d94eddcb06',
    type: 'profesional',
    validUntil: new Date('2028-06-29'),
    credentialId: 'd5bba642-e9df-4598-9ff4-f0d94eddcb06'
  }
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
  //   type: 'profesional',
  //   validUntil: new Date('2027-06-15'),
  //   credentialId: 'AWS-DEV-ASSOC-2024-001'
  // }
];