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
  allProjects = document.querySelectorAll(".project"),
  contact = document.querySelector(".contact"),
  projectMore = document.querySelectorAll(".project__more"),
  projectLess = document.querySelectorAll(".project__less"),
  projectsImg = document.querySelectorAll(".project__img");
  let windowInnerWidth;
  let counter = 0;
  let totalImg = projectsImg.length;

  //Set the height of the 'projects' section to auto
  setHeightToAuto = () => {
    document.documentElement.style.setProperty("--projects-fixed-height", 'auto');
    //Get the 'project' elements back to their original static position
    allProjects.forEach((proj, i) => {
      proj.style.position = "static";
    });
  }

  //Get the height of the 'projects' section and set it to be fixed
  calculateHeight = () => {
    let isInfoShowing = document.querySelector(".project__description__show");
    let bigScreen = false;
    let projectsHeight;

    if (isInfoShowing) {
      let transDuration = isInfoShowing.style.transitionDuration;
      isInfoShowing.style.transitionDuration = 0;

      isInfoShowing.classList.remove("project__description__show");
      projectsHeight = projects.clientHeight;
      isInfoShowing.classList.add("project__description__show");

      isInfoShowing.style.transitionDuration = transDuration;
    } else {
      projectsHeight = projects.clientHeight;
    }

    if (window.innerWidth >= 600) {
      bigScreen = true;
    }
    document.documentElement.style.setProperty('--projects-fixed-height', `${projectsHeight}px`);
    windowInnerWidth = window.innerWidth;
    positionEachProject(bigScreen);
  }

  //Put each 'project' element on an absolute position so that they don't move
  //when clicking on a project description
  positionEachProject = (bigScreen) => {
    const left = [];
    const top = [];
    //Get the static position of each 'project' element
    for ( let i = 0; i < allProjects.length; i++) {
      left[i] = allProjects[i].offsetLeft;
      top[i] = bigScreen ? allProjects[i].offsetTop - 40 : allProjects[i].offsetTop;
      //'40' accounts for the top-margin of each project element.
      //If the screen is wider than 600px position each 'project' element
      //40px above its normal position.
    }
    allProjects.forEach((proj, i) => {
      proj.style.position = "absolute";
      proj.style.left = `${left[i]}px`;
      proj.style.top = `${top[i]}px`;
    });
  }

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
    e.target.nextElementSibling.classList.add("project__description__show");
  }

  hideProjectInfo = (e) => {
    e.target.style.display = "none"
    e.target.previousElementSibling.previousElementSibling.style.display = "block";
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
  projectMore[0].addEventListener("click", (e) => showProjectInfo(e));
  projectMore[1].addEventListener("click", (e) => showProjectInfo(e));
  projectMore[2].addEventListener("click", (e) => showProjectInfo(e));
  projectLess[0].addEventListener("click", (e) => hideProjectInfo(e));
  projectLess[1].addEventListener("click", (e) => hideProjectInfo(e));
  projectLess[2].addEventListener("click", (e) => hideProjectInfo(e));
  projectsImg.forEach(img => {
    img.addEventListener("load", () => {
      counter++;
      if (counter === totalImg) {
        calculateHeight();
      }
    })
  })
  window.addEventListener("resize", () => {
    if (window.innerWidth !== windowInnerWidth) {
      setHeightToAuto();
      calculateHeight();
    }
  });
});
