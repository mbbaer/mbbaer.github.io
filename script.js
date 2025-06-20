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
        if (window.location.pathname.includes('/pages')) {
            logoImage.src = '../images/logo/logo_white-min.png';
        } else {
            logoImage.src = 'images/logo/logo_white-min.png';
        }
    } else if (window.location.pathname.includes('/pages')) {
        logoImage.src = '../images/logo/logo_black-min.png';
    } else{
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
    {name: "Python", icon: "/images/icons/Python.png"},
    {name: "SQL", icon: "/images/icons/PostgresSQL.png"},
    {name: "AWS", icon: "/images/icons/AWS.png"},
    {name: "Android", icon: "/images/icons/Android.png"},
    {name: "GitHub", icon: "/images/icons/GitHub.png"},
    {name: "Jira", icon: "/images/icons/Jira.png"},
    {name: "Figma", icon: "/images/icons/Figma.png"},
    {name: "HTML5", icon: "/images/icons/HTML5.png"},
    {name: "CSS3", icon: "/images/icons/CSS3.png"},
    {name: "JavaScript", icon: "/images/icons/JavaScript.png"},
];

// Define the skills and their corresponding icons for the project pages
const biasSkills = [
    {name: "Python", icon: "/images/icons/Python.png"},
    {name: "Pandas", icon: "/images/icons/Pandas.png"},
    {name: "Numpy", icon: "/images/icons/NumPy.png"},
    {name: "Scikit-learn", icon: "/images/icons/scikit-learn.png"},
    {name: "Matplotlib", icon: "/images/icons/Matplotlib.png"},
    {name: "Jupyter Notebook", icon: "/images/icons/Jupyter.png"},
];

const mbsPoolingSkills = [
    {name: "Python", icon: "/images/icons/Python.png"},
    {name: "SQL", icon: "/images/icons/PostgresSQL.png"},
    {name: "AWS", icon: "/images/icons/AWS.png"},
    {name: "Jira", icon: "/images/icons/Jira.png"},
    {name: "Figma", icon: "/images/icons/Figma.png"},
    {name: "PowerPoint", icon: "/images/icons/powerpoint.png"},
    {name: "Excel", icon: "/images/icons/excel.png"},
    {name: "Word", icon: "/images/icons/word.png"},
    {name: "Visio", icon: "/images/icons/visio.png"},

];

const affordableLendingSkills = [
    {name: "Teams", icon: "/images/icons/teams.png"},
    {name: "PowerPoint", icon: "/images/icons/powerpoint.png"},
    {name: "Excel", icon: "/images/icons/excel.png"},
    {name: "Word", icon: "/images/icons/word.png"},
    {name: "Visio", icon: "/images/icons/visio.png"},
    {name: "OneDrive", icon: "/images/icons/onedrive.png"},
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
    if (window.location.pathname.includes('/pages/bias_mitigation.html')) {
        createSkillsSection(biasSkills);
    } else if (window.location.pathname.includes('/pages/multifamily_cloud.html')) {
        createSkillsSection(mbsPoolingSkills);
    } else if (window.location.pathname.includes('/pages/affordable_lending.html')) {
        createSkillsSection(affordableLendingSkills);
    } else {
        createSkillsSection(indexSkills);
    }
};