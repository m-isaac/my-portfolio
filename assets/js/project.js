const projects = [
  {
    id: "got",
    title: "🔢Game of Three – Interactive Web Game",
    description: `<div>
        <p>
          This project is a modern web-based implementation of the
          <b>Game of Three</b>, built with React. Players can engage in a match
          against another human or challenge an AI-controlled opponent. The game
          offers flexibility by allowing users to either input a custom starting
          number or let the system generate a suitable random one.
        </p>
        <p>
          The game is designed to be fully responsive, ensuring an optimal
          experience on both desktop and mobile devices. The project showcases
          the ability to create interactive web applications with a focus on
          user engagement and accessibility.
        </p>
      </div>`,
    thumbnails: [
      "assets/images/project-page/got/1.png",
      "assets/images/project-page/got/2.png",
      // "assets/images/project-page/got/3.png",
      "assets/images/project-page/got/4.png",
      "assets/images/project-page/got/5.png",
    ],
    technologies: ["React", "TypeScript", "Node.js"],
    keyFeatures: [
      "Multiplayer modes: Human vs Human or Human vs Computer.",
      "Smart number handling: Choose a custom starting number or let the system pick one intelligently.",
      "Responsive UI: Fully optimized for both desktop and mobile devices.",
    ],
    projectUrl: "https://mina-isaac.github.io/game-of-three/",
    githubUrl: "https://github.com/Mina-Isaac/game-of-three",
  },
  {
    id: "sbs",
    title: "🚲 Stolen Bike Search – React & Redux Web App",
    description: `<div>
        <p>
          Stolen Bike Search is a responsive web application built with React
          and Redux, designed to help users search for and report stolen
          bicycles. The application integrates with the
          <a href="https://bikeindex.org/documentation/api_v3">
            Bike Index API
          </a>
          . It allows users to search for stolen bikes by location, date, and
          keywords,
        </p>
        <p>
          This project showcases the ability to develop a full-featured web
          application that interacts with external APIs, manages complex state,
          and provides a user-friendly interface.
        </p>
      </div>`,
    thumbnails: [
      "assets/images/project-page/sbs/2.png",
      "assets/images/project-page/sbs/3.png",
      "assets/images/project-page/sbs/4.png",
      "assets/images/project-page/sbs/1.png",
    ],
    technologies: ["React", "TypeScript", "tanstack-query"],
    keyFeatures: [
      "Search for stolen bikes by location, date, and keywords.",
      "View detailed information about reported stolen bikes, including images and descriptions.",
      "View bike listings and their statuses.",
    ],
    projectUrl: "https://m-isaac.github.io/stolen-bike-search/",
    githubUrl: "https://github.com/m-isaac/stolen-bike-search",
  },
  {
    id: "pcm",
    title: "🛍️ Product Catalog Mobile App – React Native & TypeScript",
    description: `<div>
        <p>
          Product Catalog Mobile App is a cross-platform mobile application built with React Native and TypeScript, designed
           to provide users with a seamless way to browse and explore product information. The app integrates with a product 
           API to fetch real-time data and presents it through a clean and intuitive interface.
        </p>
        <p>
          This project demonstrates strong skills in mobile development with React Native,
           TypeScript, and API integration, while focusing on performance, usability, and consistency across platforms.
        </p>
      </div>`,
    thumbnails: [
      "assets/images/project-page/pcm/1.png",
      "assets/images/project-page/pcm/2.png",
      "assets/images/project-page/pcm/3.png",
      "assets/images/project-page/pcm/4.png",
      "assets/images/project-page/pcm/5.png",
    ],
    technologies: ["React Native", "TypeScript", "Expo"],
    keyFeatures: [
      "Product Listing Screen: Displays all available products with thumbnails, names, and quick access to details.",
      "Product Details Screen: Shows in-depth product information including price, description, and image, accessible by tapping on any product.",
      "Search Functionality: Users can quickly filter the product list or search for specific products by typing keywords into a search bar.",
      "Cross-Platform Support: Designed to work consistently and smoothly on both Android and iOS devices.",
      "Responsive & Intuitive UI: Ensures a user-friendly experience across different screen sizes.",
    ],
    githubUrl: "https://github.com/m-isaac/product-catalog",
  },
  {
    id: "wzr",
    title: "🌤️ Munich 6-Day Weather Forecast App – React & TypeScript",
    description: `<div>
        <p>
          Munich 6-Day Weather Forecast App is a responsive web application
          built with React and TypeScript, designed to provide users with a
          detailed and interactive 6-day weather forecast for the city of
          Munich. The app pulls real-time weather data from a public API and
          presents it through a clean, accessible interface.
        </p>
        <p>
          This project demonstrates proficiency in building data-driven
          applications, integrating third-party APIs, and implementing
          responsive design principles.
        </p>
      </div>`,
    thumbnails: [
      "assets/images/project-page/wtr/1.png",
      "assets/images/project-page/wtr/2.png",
      "assets/images/project-page/wtr/3.png",
      "assets/images/project-page/wtr/4.png",
    ],
    technologies: ["React", "TypeScript", "chart.js"],
    keyFeatures: [
      "6-Day Forecast: Users can view comprehensive weather information for the upcoming six days in Munich.",
      "Unit Switching: Users can toggle between Celsius and Fahrenheit temperature scales with a single click.",
      "Interactive Daily Details: Each day is represented by a card; clicking a card reveals a temperature variation chart showing how the temperature changes throughout that specific day.",
      "Responsive Design: Optimized for a seamless experience across desktop and mobile devices.",
    ],
    projectUrl: "http://mina-isaac.github.io/weather-app/",
    githubUrl: "https://github.com/Mina-Isaac/weather-app",
  },
  {
    id: "cov",
    title: "📊 COVID-19 Statistics Dashboard",
    description: `<div>
        <p>
          COVID-19 Statistics Dashboard is a responsive web application
          developed using React and Redux, designed to provide users with
          up-to-date COVID-19 statistics across Germany. The application fetches
          real-time data from&nbsp;
          <a href="https://api.corona-zahlen.org/docs/">
            Robert Koch-Institut API
          </a>
          , presenting it through an intuitive and user-friendly interface.
        </p>
        <p>
          This project demonstrates proficiency in building data-driven
          applications, integrating third-party APIs, and implementing state
          management using Redux. It reflects a commitment to delivering
          accessible and informative tools during critical times.
        </p>
      </div>`,
    thumbnails: [
      "assets/images/project-page/cov/1.png",
      "assets/images/project-page/cov/2.png",
      "assets/images/project-page/cov/3.png",
      "assets/images/project-page/cov/4.png",
    ],
    technologies: ["React", "TypeScript", "Redux", "recharts"],
    keyFeatures: [
      "Interactive Charts: The dashboard presents data through dynamic charts, allowing users to visualize trends over time.",
      "Responsive Design: Optimized for various devices, ensuring a seamless experience on desktops, tablets, and smartphones.",
      "State Management with Redux: Efficient handling of application state for consistent and predictable behavior.",
    ],
    projectUrl: "https://mina-isaac.github.io/covid-stats/",
    githubUrl: "https://github.com/Mina-Isaac/covid-stats",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const projectContainer = document.querySelector(".project-box .row");

  projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "card";
    projectCard.innerHTML = `
            
                    <h5 class="card-title">${project.title}</h5>
                    <div>${project.description}</div>
                    <div class="thumbnails mt-3">
                        ${project.thumbnails
                          .map(
                            (thumb, index) => `
                            <img src="${thumb}" class="img-thumbnail m-1 project-thumbnail" data-index="${index}" data-project-id="${project.id}" style="width: 100px; cursor: pointer;">
                        `
                          )
                          .join("")}
                        </div>
                        <h4 class="features" >Key Features:</h4>
                        <ul class="key-features">
                            ${project.keyFeatures
                              .map(
                                (feature) =>
                                  `<li class="feature-li">${feature}</li>`
                              )
                              .join("")}
                        </ul>
                        <div class="technologies">${project.technologies
                          .map((tech) => `<span>${tech}</span>`)
                          .join("")}</div>
            <div class="project-links">
                <a href="${project.githubUrl}" target="_blank" class="project-link">
                    <i class="fab fa-github"></i>
                </a>
                ${project.projectUrl ? `
                <a href="${project.projectUrl}" target="_blank" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                </a>
                ` : ''}
            </div>
        `;
    projectContainer.appendChild(projectCard);
  });

  const modal = document.getElementById("thumbnailModal");
  const modalImage = document.getElementById("modalImage");
  const prevButton = document.getElementById("prevThumbnail");
  const nextButton = document.getElementById("nextThumbnail");

  let currentProjectId = null;
  let currentIndex = 0;

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("project-thumbnail")) {
      currentProjectId = e.target.getAttribute("data-project-id");
      currentIndex = parseInt(e.target.getAttribute("data-index"), 10);
      const project = projects.find((p) => p.id === currentProjectId);
      modalImage.src = project.thumbnails[currentIndex];
      $(modal).show();
      $("html, body").css("overflow", "hidden");
    }
  });

  prevButton.addEventListener("click", function () {
    const project = projects.find((p) => p.id === currentProjectId);
    currentIndex =
      (currentIndex - 1 + project.thumbnails.length) %
      project.thumbnails.length;
    modalImage.src = project.thumbnails[currentIndex];
  });

  nextButton.addEventListener("click", function () {
    const project = projects.find((p) => p.id === currentProjectId);
    currentIndex = (currentIndex + 1) % project.thumbnails.length;
    modalImage.src = project.thumbnails[currentIndex];
  });

  // Stop event propagation for thumbnail image and navigation buttons
  modalImage.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  prevButton.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  nextButton.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  // Close modal when clicking outside the content
  modal.addEventListener("click", function (event) {
    if (event.currentTarget === modal) {
      modal.style.display = "none";
      $("html, body").css("overflow", "auto");
    }
  });

  window.addEventListener("keydown", function (event) {
    const modal = document.getElementById("thumbnailModal");
    if (modal.style.display === "block") {
      // Handle Escape key
      if (event.key === "Escape") {
        modal.style.display = "none";
        $("html, body").css("overflow", "auto");
      }
      // Handle left arrow key
      else if (event.key === "ArrowLeft") {
        const project = projects.find((p) => p.id === currentProjectId);
        currentIndex =
          (currentIndex - 1 + project.thumbnails.length) %
          project.thumbnails.length;
        modalImage.src = project.thumbnails[currentIndex];
      }
      // Handle right arrow key
      else if (event.key === "ArrowRight") {
        const project = projects.find((p) => p.id === currentProjectId);
        currentIndex = (currentIndex + 1) % project.thumbnails.length;
        modalImage.src = project.thumbnails[currentIndex];
      }
    }
  });
});
