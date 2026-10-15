export type Language = 'es' | 'en';

export interface Translations {
  nav: {
    home: string;
    metrics: string;
    about: string;
    projects: string;
    experience: string;
    skills: string;
    education: string;
    contact: string;
    portfolio: string;
  };
  hero: {
    greeting: string;
    viewProjects: string;
    downloadCV: string;
    contactMe: string;
    statusAvailable: string;
    verifiedStats: string;
  };
  sections: {
    metricsTitle: string;
    metricsSubtitle: string;
    aboutTitle: string;
    aboutSubtitle: string;
    projectsTitle: string;
    projectsSubtitle: string;
    experienceTitle: string;
    experienceSubtitle: string;
    skillsTitle: string;
    skillsSubtitle: string;
    educationTitle: string;
    educationSubtitle: string;
    certificationsTitle: string;
    languagesTitle: string;
    contactTitle: string;
    contactSubtitle: string;
  };
  projectsFilter: {
    all: string;
    aiAgents: string;
    backendFullstack: string;
    web3: string;
    systemsAlgorithms: string;
    cybersecurity: string;
  };
  badges: {
    hackathonWinner: string;
    topLatam: string;
    privateRepo: string;
    verifiedCredential: string;
  };
  buttons: {
    viewLiveDemo: string;
    viewRepository: string;
    verifyCredential: string;
    sendMessage: string;
    downloadCV: string;
    sourceMetric: string;
  };
  contact: {
    getInTouch: string;
    getInTouchDescription: string;
    contactInfo: string;
    socialProfiles: string;
    location: string;
    availability: string;
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
      sendingButton: string;
      successMessage: string;
      privacyText: string;
    };
  };
  footer: {
    role: string;
    builtWith: string;
    allRightsReserved: string;
    backToTop: string;
  };
  common: {
    loading: string;
    error: string;
    close: string;
    search: string;
    all: string;
    stars: string;
  };
}