export type Language = 'es' | 'en';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    education: string;
    courses: string;
    certifications: string;
    projects: string;
    portfolio: string;
  };
  
  // Home page
  home: {
    greeting: string;
    viewProjects: string;
    downloadCV: string;
    connectWithMe: string;
    aboutMe: string;
    myJourney: string;
    careerObjectives: string;
    objectives: {
      innovate: {
        title: string;
        description: string;
      };
      research: {
        title: string;
        description: string;
      };
      development: {
        title: string;
        description: string;
      };
      sharing: {
        title: string;
        description: string;
      };
    };
    viewEducation: string;
    getInTouch: string;
    getInTouchDescription: string;
    contactInfo: string;
    socialProfiles: string;
    sendMessage: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      subjectPlaceholder: string;
      messagePlaceholder: string;
      sendButton: string;
      privacyText: string;
    };
  };
  
  // Projects page
  projects: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    viewDetails: string;
    noProjectsFound: string;
    clearFilters: string;
    technologiesUsed: string;
    keyFeatures: string;
    viewLiveDemo: string;
    viewRepository: string;
  };
  
  // Education page
  education: {
    title: string;
    subtitle: string;
    viewDetails: string;
    achievements: string;
    relevantCoursework: string;
    inField: string;
  };
  
  // Courses page
  courses: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    viewCertificate: string;
    noCoursesFound: string;
    clearFilters: string;
    skillsAcquired: string;
    viewOriginalCertificate: string;
    more: string;
  };
  
  // Certifications page
  certifications: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    viewCertificate: string;
    noCertificationsFound: string;
    clearFilters: string;
    competenciesValidated: string;
    verifyCertification: string;
    obtained: string;
    validUntil: string;
    credentialId: string;
    upcomingTitle: string;
    upcomingDescription: string;
    more: string;
  };
  
  // Footer
  footer: {
    description: string;
    quickLinks: string;
    contact: string;
    connect: string;
    allRightsReserved: string;
    privacyPolicy: string;
    termsOfService: string;
  };
  
  // Common
  common: {
    loading: string;
    error: string;
    close: string;
    search: string;
    all: string;
  };
} 