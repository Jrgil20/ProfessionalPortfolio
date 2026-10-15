/**
 * Smoothly scrolls to a DOM element by id without interfering with HashRouter
 */
export const scrollToSection = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    const navOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navOffset;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: 'smooth'
    });
  }
};
