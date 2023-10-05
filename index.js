document.addEventListener("DOMContentLoaded", function() {
    const sobreButton = document.querySelector(".menu-item-link[href='#sobre']");
    const infosButton = document.querySelector(".menu-item-link[href='#informacoes']");

    const footer = document.querySelector(".footer .container .footer-content .footer-socials");

    const linkedinLink = createSocialLink("LinkedIn", "https://www.linkedin.com/in/ceciliameds/", "images/linkedin.png");
    const instagramLink = createSocialLink("Instagram", "https://www.instagram.com/ceciliameds/", "images/instagram.png");
    const githubLink = createSocialLink("GitHub", "https://github.com/ceciliameds", "images/github.png");

    footer.appendChild(linkedinLink);
    footer.appendChild(instagramLink);
    footer.appendChild(githubLink);

    function createSocialLink(name, url, imageUrl) {
        const link = document.createElement("a");
        link.href = url;
        link.target = "_blank"; 
        link.classList.add("social-icon");
        
        const image = document.createElement("img");
        image.src = imageUrl;
        image.alt = name;
        
        link.appendChild(image);
        
        return link;
    }

    sobreButton.addEventListener("click", function(e) {
        e.preventDefault(); 
        scrollToSection("sobre");
    });

    hobbiesButton.addEventListener("click", function(e) {
        e.preventDefault();
        scrollToSection("hobbies");
    });

    questionamentosButton.addEventListener("click", function(e) {
        e.preventDefault();
        scrollToSection("questionamentos");
    });

    infosButton.addEventListener("click", function(e) {
        e.preventDefault();
        scrollToSection("informacoes");
    });

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth"
            });
        }
    }
});
