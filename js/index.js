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
  projectMore = document.querySelectorAll(".project__more"),
  projectLess = document.querySelectorAll(".project__less");

  toggleMenu = () => {
    menu.classList.toggle("menu-show");
    menuBackground.classList.toggle("menu-show-background-show");
  }

  navToSection = (e, toggleMenu) => {
    if (e.target == aboutLink || e.target == aboutLinkDesktop) {
      // Scroll to corresponding position
      const aboutPosition = about.offsetTop;
      document.documentElement.scrollTop = aboutPosition - 50;
      // Toggle menu's classes
      if (toggleMenu) {
        this.toggleMenu()
      }
    }
    else if (e.target == projectsLink || e.target == projectsLinkDesktop) {
      // Scroll to corresponding position
      const projectsPosition = projects.offsetTop;
      document.documentElement.scrollTop = projectsPosition - 50;
      // Toggle menu's classes
      if (toggleMenu) {
        this.toggleMenu()
      }
    }
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

  showProjectInfo = (e) => {
    e.target.style.display = "none";
    e.target.nextElementSibling.nextElementSibling.style.display = "block";
    // e.target.nextElementSibling.style.maxHeight = "250px";
    e.target.nextElementSibling.classList.add("project__description__show");
  }

  hideProjectInfo = (e) => {
    e.target.style.display = "none"
    e.target.previousElementSibling.previousElementSibling.style.display = "block";
    // e.target.previousElementSibling.style.maxHeight = "0px";
    e.target.previousElementSibling.classList.remove("project__description__show");
  }

  menuIcon.addEventListener("click", () => toggleMenu());
  menuBackground.addEventListener("click", () => toggleMenu());
  aboutLink.addEventListener("click", (e) => navToSection(e, true));
  projectsLink.addEventListener("click", (e) => navToSection(e, true));
  contactLink.addEventListener("click", (e) => navToSection(e, true));
  aboutLinkDesktop.addEventListener("click", (e) => navToSection(e, false));
  projectsLinkDesktop.addEventListener("click", (e) => navToSection(e, false));
  contactLinkDesktop.addEventListener("click", (e) => navToSection(e, false));
  projectMore[0].addEventListener("click", (e) => showProjectInfo(e))
  projectMore[1].addEventListener("click", (e) => showProjectInfo(e))
  projectMore[2].addEventListener("click", (e) => showProjectInfo(e))
  projectLess[0].addEventListener("click", (e) => hideProjectInfo(e))
  projectLess[1].addEventListener("click", (e) => hideProjectInfo(e))
  projectLess[2].addEventListener("click", (e) => hideProjectInfo(e))
});
