const projectData = {
 GovernmentProjects: [
      { customerName: "GESCOM", natureOfWork: "1KV HT /LT/DTC switch yard work", workLocation: "Gulbarga (Karnataka)", year: 2021 },
      { customerName: "Indian Railway", natureOfWork: "HT /LT switch yard work", workLocation: "Solapur division (Maharashtra)", year: 2023 },
      { customerName: "KPTCL", natureOfWork: "SLDC SCADA integration project in substation", workLocation: "Karnataka", year: 2023 }
  ],
  OngoingProjects: [
      { customerName: "Wind world India Ltd", natureOfWork: "110KV Substation AMR SCADA Automation Project", workLocation: "Karnataka", year: 2023 },
      { customerName: "Suzlon", natureOfWork: "110KV Substation AMR SCADA Automation Project", workLocation: "Karnataka", year: 2023 },
      { customerName: "BEL", natureOfWork: "110KV Substation AMR SCADA Automation Project", workLocation: "Davangere & Hassan", year: 2023 },
      { customerName: "HAL", natureOfWork: "110KV Substation AMR SCADA Automation Project", workLocation: "Davangere", year: 2024 },
      { customerName: "Zuvari Cement", natureOfWork: "HT/LT/DTC line Work", workLocation: "Gulbarga (Karnataka)", year: 2024 },
      { customerName: "MSPL (Boldota group)", natureOfWork: "Wind energy AMR SCADA Automation Project", workLocation: "Bellary, Davangere & Chitradurga", year: 2024 }
  ],
  PrivateProjects: [
    { customerName: "M/s Arushi Green Energy Pvt Ltd", natureOfWork: "11 KV HT/LT/DTC switch yard work", workLocation: "Bangalore, Karnataka", year: "2020-21" },
    { customerName: "M/s. Waaree Solar", natureOfWork: "11 KV HT/LT/DTC switch yard work", workLocation: "Bangalore, Karnataka", year: "2019-20" },
    { customerName: "M/s. Hinren Engineering", natureOfWork: "11 KV HT/LT/DTC switch yard work", workLocation: "Bangalore, Karnataka", year: "2019-20" },
    { customerName: "M/s. Jakson Energy Pvt. Ltd", natureOfWork: "HT/LT/DTC line Work", workLocation: "Gulbarga (Karnataka)", year: "2021-22" },
    { customerName: "M/s. EMMVEE Solar System Pvt. Ltd", natureOfWork: "Solar roof top power plant project", workLocation: "Bangalore", year: "2020-21" },
    { customerName: "M/s. Arushi Green Energy Pvt. Ltd", natureOfWork: "Solar roof top power plant project", workLocation: "Bangalore, Karnataka", year: "2020-21" },
    { customerName: "M/s. Hinren Engineering", natureOfWork: "Solar roof top power plant project", workLocation: "Bangalore, Karnataka", year: "2020-21" },
    { customerName: "M/s. SIEMENS", natureOfWork: "HT/LT/DTC line Work, UG Cable laying", workLocation: "Gulbarga, Karnataka", year: "2021-22" },
    { customerName: "M/s. TATA Power Solar", natureOfWork: "Solar roof top power plant project", workLocation: "Bangalore, Karnataka", year: "2021-22" },
    { customerName: "M/s. NCC Ltd", natureOfWork: "HT/LT/DTC line Work, UG Cable laying", workLocation: "Chennai, Tamil Nadu", year: "2021-22" },
    { customerName: "M/s. NCC Ltd", natureOfWork: "HT/LT/DTC line Work, UG Cable laying", workLocation: "Chennai, Tamil Nadu", year: "2022-23" },
    { customerName: "M/s. BEML", natureOfWork: "Wind energy AMR SCADA Automation Project", workLocation: "Gadag, Karnataka", year: "2022-23" },
    { customerName: "M/s. Asian Paint", natureOfWork: "Wind energy AMR SCADA Automation Project", workLocation: "Koppal, Karnataka", year: "2022-23" },
    { customerName: "M/s. Clean Max Solar", natureOfWork: "Solar energy AMR SCADA Automation Project", workLocation: "Bellary, Karnataka", year: "2022-23" },
    { customerName: "M/s. Kumarswamy Energy Pvt. Ltd", natureOfWork: "Wind energy AMR SCADA Automation Project", workLocation: "Koppal, Karnataka", year: "2022-23" },
    { customerName: "M/s. Bouroka Power Corporation Ltd", natureOfWork: "Hydel power plant substation work and AMR SCADA Automation Project", workLocation: "Gulbarga, Bellary, Chitradurga & Belagavi", year: "2022-23" },
    { customerName: "M/s. JSW Energy Ltd", natureOfWork: "400/220KV Substation work and AMR SCADA Automation Project", workLocation: "Bellary, Karnataka", year: "2023-24" },
    { customerName: "M/s. Shree Cement Ltd", natureOfWork: "Wind energy AMR SCADA Automation Project", workLocation: "Gulbarga / Koppal, Karnataka", year: "2023-24" },
    { customerName: "M/s. Zuvari Cement Ltd", natureOfWork: "HT/LT/DTC line Work with arrangement of MW temporary power supply from GESCOM for erection of cement plant", workLocation: "Gulbarga, Karnataka", year: "2023-24" },
    { customerName: "M/s. Ultratech Cement", natureOfWork: "110KV Substation AMR SCADA Automation Project", workLocation: "Koppal, Karnataka", year: "2023-24" },
    { customerName: "M/s. Nirani Energy Pvt Ltd", natureOfWork: "Wind energy AMR SCADA Automation Project", workLocation: "Gadag, Karnataka", year: "2023-24" },
    { customerName: "M/s. Grinco Energy", natureOfWork: "Wind energy AMR SCADA Automation Project", workLocation: "Koppal, Karnataka", year: "2023-24" },
    { customerName: "M/s. ITC Ltd", natureOfWork: "Wind energy AMR SCADA Automation Project", workLocation: "Belagavi & Bellari, Karnataka", year: "2023-24" },
    { customerName: "M/s. Wind Energy Corporation Pvt. Ltd", natureOfWork: "Wind energy AMR SCADA Automation Project", workLocation: "Gulbarga, Karnataka", year: "2023-24" },
    { customerName: "M/s. Patanjali Food Product", natureOfWork: "Wind energy AMR SCADA Automation Project", workLocation: "Raichur, Karnataka", year: "2023-24" }
]

};


// Function to Show the Modal with Data
function showTable(type) {
  const tableBody = document.getElementById("tableBody");
  const tableTitle = document.getElementById("tableTitle");
  tableBody.innerHTML = "";
  tableTitle.innerText = type.replace(/([A-Z])/g, ' $1').trim(); // Format title

  projectData[type].forEach(project => {
      let row = `<tr>
          <td>${project.customerName}</td>
          <td>${project.natureOfWork}</td>
          <td>${project.workLocation}</td>
          <td>${project.year}</td>
      </tr>`;
      tableBody.innerHTML += row;
  });

  document.getElementById("popupModal").style.display = "flex";
}

// Function to Close the Modal
function closeModal() {
  document.getElementById("popupModal").style.display = "none";
}

// Close the modal if user clicks outside the content
window.onclick = function(event) {
  let modal = document.getElementById("popupModal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
}

  const searchContainer = document.querySelector(".search-container");
  const searchBar = document.querySelector(".search-input"); // Updated to select by class
  const suggestionsBox = document.createElement("div");

  suggestionsBox.classList.add("suggestions-box");
  searchContainer.appendChild(suggestionsBox);

  // ✅ Define website sections with names and IDs
  const websiteContents = [
    { name: "Home", id: "hero" },
    { name: "Contact", id: "contact" },
    { name: "About", id: "about" },
    { name: "Clients", id: "clients" },
    { name: "Objectives", id: "features" },
    { name: "Features", id: "features" },
    { name: "Services", id: "services" },
    { name: "Team", id: "team" },
    { name: "Projects", id: "projects" },
    { name: "Grid Systems", id: "grid-systems" },
    { name: "Renewable Energy", id: "renewable-energy" },
    { name: "Policies and Regulations", id: "policies-regulations" }
  ];

  // Expand search bar when clicked
  searchBar.addEventListener("focus", function () {
    searchContainer.classList.add("expanded");
  });

  // Collapse search bar when clicking outside
  document.addEventListener("click", function (event) {
    if (!searchContainer.contains(event.target)) {
      searchContainer.classList.remove("expanded");
      suggestionsBox.innerHTML = "";
    }
  });

  // Display suggestions based on input
  searchBar.addEventListener("input", function () {
    showSuggestions(searchBar.value);
  });

  function showSuggestions(query) {
    suggestionsBox.innerHTML = "";
    if (!query.trim()) return;

    const filtered = websiteContents.filter(content =>
      content.name.toLowerCase().includes(query.toLowerCase())
    );

    if (filtered.length === 0) {
      suggestionsBox.innerHTML = `<div class="no-suggestions">No results found</div>`;
      return;
    }

    filtered.forEach(content => addSuggestion(content));
  }

  function addSuggestion(content) {
    const div = document.createElement("div");
    div.classList.add("suggestion");
    div.textContent = content.name;
    div.addEventListener("click", function () {
      const targetSection = document.getElementById(content.id);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
      searchBar.value = ""; // Clear search input
      suggestionsBox.innerHTML = ""; // Clear suggestions
    });
    suggestionsBox.appendChild(div);
  }



(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && 
        !selectHeader.classList.contains('sticky-top') && 
        !selectHeader.classList.contains('fixed-top')) return;

    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', (event) => {
      const href = navmenu.getAttribute("href");

      // Prevent scrolling to top if the link is for another page
      if (href === "#" || href === "/") {
        event.preventDefault();
      }

      // Close mobile nav if active
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }

  if (scrollTop) {
    scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(swiperElement.querySelector(".swiper-config").innerHTML.trim());

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function() {
    if (window.location.hash && document.querySelector(window.location.hash)) {
      setTimeout(() => {
        let section = document.querySelector(window.location.hash);
        let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
        window.scrollTo({
          top: section.offsetTop - parseInt(scrollMarginTop),
          behavior: 'smooth'
        });
      }, 100);
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    });
  }

  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();
