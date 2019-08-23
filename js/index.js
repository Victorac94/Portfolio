document.addEventListener("DOMContentLoaded", (e) => {
  const menuIcon = document.querySelector(".menu-icon"),
  menu = document.querySelector(".menu"),
  menuBackground = document.querySelector(".menu-show-background"),
  aboutLink = document.querySelector(".about-link"),
  projectsLink = document.querySelector(".projects-link"),
  contactLink = document.querySelector(".contact-link"),
  aboutLinkDesktop = document.querySelector(".about-link-desktop"),
  projectsLinkDesktop = document.querySelector(".projects-link-desktop"),
  contactLinkDesktop = document.querySelector(".contact-link-desktop"),
  about = document.querySelector(".about"),
  projects = document.querySelector(".projects"),
  contact = document.querySelector(".contact"),
  projectsImg = document.querySelectorAll(".project__img");

  // Show / hide mobile menu
  toggleMenu = () => {
    menu.classList.toggle("menu-show");
    menuBackground.classList.toggle("menu-show-background-show");
  }

  // Scroll page to clicked section (about, projects, contact)
  navToSection = (e, toggleMenu) => {
    // If clicked on 'About'
    if (e.target == aboutLink || e.target == aboutLinkDesktop) {
      // Scroll to corresponding position
      const aboutPosition = about.offsetTop;
      document.documentElement.scrollTop = aboutPosition - 50;
      // Toggle menu's classes
      if (toggleMenu) {
        this.toggleMenu()
      }
    }
    // If clicked on 'Projects'
    else if (e.target == projectsLink || e.target == projectsLinkDesktop) {
      // Scroll to corresponding position
      const projectsPosition = projects.offsetTop;
      document.documentElement.scrollTop = projectsPosition - 50;
      // Toggle menu's classes
      if (toggleMenu) {
        this.toggleMenu()
      }
    }
    // If clicked on 'Contact'
    else if (e.target == contactLink || e.target == contactLinkDesktop) {
      // Scroll to corresponding position
      const contactPosition = contact.offsetTop;
      document.documentElement.scrollTop = contactPosition - 50;
      // Toggle menu's classes
      if (toggleMenu) {
        this.toggleMenu()
      }
    }
  }

  menuIcon.addEventListener("click", () => toggleMenu());
  menuBackground.addEventListener("click", () => toggleMenu());
  aboutLink.addEventListener("click", (e) => navToSection(e, true));
  projectsLink.addEventListener("click", (e) => navToSection(e, true));
  contactLink.addEventListener("click", (e) => navToSection(e, true));
  aboutLinkDesktop.addEventListener("click", (e) => navToSection(e, false));
  projectsLinkDesktop.addEventListener("click", (e) => navToSection(e, false));
  contactLinkDesktop.addEventListener("click", (e) => navToSection(e, false));
});
