document.addEventListener("DOMContentLoaded", function() {
    // Open menu (navigation toggle)
    let navToggle = document.getElementById("navToggle");
    if (navToggle) {
        navToggle.addEventListener("click", openMenu);
    }

    function openMenu(event) {
        event.preventDefault();
        document.querySelector(".navBar").classList.toggle("show");
    }

    // Close menu
    let closeButton = document.querySelector("#closeNav");
    if (closeButton) {
        closeButton.addEventListener("click", closeMenu);
    }

    function closeMenu(event) {
        event.preventDefault();
        document.querySelector(".navBar").classList.toggle("show");
    }

    // Navigate to the login page
    let loginChanger = document.getElementById("buttonR");
    if (loginChanger) {
        loginChanger.addEventListener("click", navToLogin);
    }

    function navToLogin(event) {
        event.preventDefault();
        window.location.href = "userLogin.php";
    }

    // Reset the forum (clear inputs)
    let resetForum = document.getElementById('buttonLReset');
    if (resetForum) {
        resetForum.addEventListener("click", navToReset);
    }

    function navToReset(event) {
        let val = confirm("Are you sure you want to reset the forum? This action cannot be undone.");
        if (val) {
            document.getElementById("blogTitle").value = "";
            document.getElementById("blogContent").value = "";
        }
    }
    //adds event listeners to the comment buttons and close buttons
    // Show comment section
    
    const commentButtons = document.querySelectorAll(".btn-comment");
    const overlay = document.getElementById("overallBackground");

    commentButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const blogID = button.getAttribute("data-blogid");
            const commentSection = document.getElementById(`commentSection-${blogID}`);
            if (commentSection) {
                commentSection.classList.toggle("show");
                overlay.classList.toggle("show");
            }
        });
    });

    


    const closeButtons = document.querySelectorAll(".closeComment");

    closeButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const blogID = button.getAttribute("data-blogid");
            const commentSection = document.getElementById(`commentSection-${blogID}`);
            
            if (commentSection) {
                commentSection.classList.remove("show");
                overlay.classList.remove("show");
            }
        });
    });
});
const projects = {

    weatherAPIsite:{
        title:"Weather API Site",
        description:
        "A responsive weather website that displays current conditions and forecasts for any location. Built with HTML, CSS, and JavaScript.",
        video:
        "Images/weatherWebsite.mp4",
        github:
        "https://github.com/ronakVisram2006/Team-API-Weather-App"
    },


    squadFill:{
        title:"SquadFill",
        description:
        "Group building project where we created a matchmaker for missing players, allowing users to find and join teams for various games. Built with React (Native) and Node JS",
        video:
        "Images/squadFill.mp4",
        github:
        "https://github.com/ronakVisram2006/squadFillPublic"
    },


    chessBot:{
        title:"Chess Bot",
        description:
        "Developed a chess bot using Python and the Stockfish engine, implementing minimax algorithm for optimal move selection. Using alpha and beta calcuations and positional evaluation tables",
        video:
        "Images/chessBot.mp4",
        github:
        "https://github.com/ronakVisram2006/chessBotCreator-private"
    },

    PortfolioSite:{
        title:"Portfolio Site",
        description:
        "Developed a responsive portfolio website to showcase my projects and skills. Built with HTML, CSS, and JavaScript.",
        video:
        "Images/personalWebsite.mp4",
        github:
        "https://github.com/ronakVisram2006/PortfolioAPP"
    }
};


function openModal(project){

    document.getElementById("modalTitle").innerHTML =
    projects[project].title;


    document.getElementById("modalDescription").innerHTML =
    projects[project].description;


    document.getElementById("githubLink").href =
    projects[project].github;


    document.getElementById("modalVideoSource").src =
    projects[project].video;


    document.getElementById("modalVideo").load();


    document.getElementById("projectModal").style.display="block";

}


function closeModal(){

    document.getElementById("projectModal").style.display="none";

}
