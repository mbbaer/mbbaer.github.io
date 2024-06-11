// EmailJS initialization and form submission
function sendmail(event) {
    event.preventDefault(); // Prevent form from submitting

    // Check if the form is valid
    var form = document.getElementById('contact-form');
    if (!form.checkValidity()) {
        form.reportValidity(); // This will show validation error messages
        return;
    }
    (function() {
        emailjs.init('KauTV5i-77GDjJPQV');
    })();

    var templateVars = {
        from_name: document.getElementById("fullname").value,
        email_id: document.getElementById("email_id").value,
        mobile_num: document.getElementById("mobile_num").value,
        message: document.getElementById("message").value,
        subject: document.getElementById("subject").value,

    };

    emailjs.send('service_su55z8m', 'template_ygl2yd9', templateVars)
        .then(function(res) {
            alert("Send successfully");
        }, function(error) {
        console.error('FAILED...', error);
        alert("Failed to send message. Please try again.");
    });
}

// Menu icon and navbar toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky navbar
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);

    // Remove menu icon navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// Swiper initialization
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Dark light mode toggle
let darkModeIcon = document.querySelector('#darkMode-icon');
let logoImage = document.querySelector('.logo img');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');

    // Change the logo image based on the dark mode state
    if (document.body.classList.contains('dark-mode')) {
        logoImage.src = 'images/logo/logo_white-min.png';
    } else {
        logoImage.src = 'images/logo/logo_black-min.png';
    }
};

// Scroll reveal initialization
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .projects-box, .reviews-wrapper, .process-container, .skills-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });


// Define the skills and their corresponding icons for the index page
const indexSkills = [
    {name: "Python", icon: "fab fa-python"},
    {name: "Java", icon: "fab fa-java"},
    {name: "SQL", icon: "bx bxl-postgresql"},
    {name: "A.I. / M.L.", icon: "fas fa-brain"},
    {name: "AWS", icon: "fab fa-aws"},
    {name: "Android", icon: "fab fa-android"},
    {name: "GitHub", icon: "fab fa-github"},
    {name: "HTML5", icon: "fab fa-html5"},
    {name: "CSS3", icon: "fab fa-css3-alt"},
    {name: "JavaScript", icon: "fab fa-js"},
];

// Define the skills and their corresponding icons for the project page
const projectSkills = [
    {name: "Python", icon: "/images/icons/Python.png"},
    {name: "Pandas", icon: "/images/icons/Pandas.png"},
    {name: "Numpy", icon: "/images/icons/NumPy.png"},
    {name: "Scikit-learn", icon: "/images/icons/scikit-learn.png"},
    {name: "Matplotlib", icon: "/images/icons/Matplotlib.png"},
    {name: "Jupyter Notebook", icon: "/images/icons/Jupyter.png"},
];

// Function to create the skills section
function createSkillsSection(skills) {
    const skillsContainer = document.querySelector(".skills-container");

    skills.forEach(skill => {
        // Create a div for each skill
        const skillDiv = document.createElement("div");
        skillDiv.classList.add("skill");

        let iconElement;

        // Check if the icon is a URL (image) or an icon class
        if (skill.icon.endsWith('.png') || skill.icon.endsWith('.jpg') || skill.icon.endsWith('.jpeg') || skill.icon.endsWith('.svg')) {
            // Create an img element for image icons
            iconElement = document.createElement("img");
            iconElement.src = skill.icon;
            iconElement.alt = skill.name;
        } else {
            // Create an i element for icon class
            iconElement = document.createElement("i");
            iconElement.className = skill.icon;
        }

        // Create the skill name element
        const skillName = document.createElement("p");
        skillName.textContent = skill.name;

        // Append the icon and skill name to the skill div
        skillDiv.appendChild(iconElement);
        skillDiv.appendChild(skillName);

        // Append the skill div to the skills container
        skillsContainer.appendChild(skillDiv);
    });
}

// Check which page is loaded and call the appropriate function
window.onload = () => {
    if (window.location.pathname.includes('index.html')) {
        createSkillsSection(indexSkills);
    } else if (window.location.pathname.includes('/pages/bias_mitigation.html')) { // Replace 'project.html' with the actual project page filename
        createSkillsSection(projectSkills);
    }
};