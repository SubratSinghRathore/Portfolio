document.getElementsByClassName("theme")[0].addEventListener("click", () => {
    const theme = document.getElementsByTagName("body")[0];
    const themeBorder = document.getElementsByClassName("theme")[0];
    const sun_moon = document.getElementsByClassName("sun_moon")[0];
    const imageChanger = document.getElementsByClassName("section_image2")[0];
    const navColor = document.getElementsByClassName("navPosition")[0];
    const name_input = document.getElementsByClassName("name_input")[0];
    const email_input = document.getElementsByClassName("email_input")[0];
    const textarea_input = document.getElementsByClassName("textarea_input")[0];

    
    const svgChanger1 = document.getElementsByClassName("svg1")[0];
    const svgChanger2 = document.getElementsByClassName("svg2")[0];
    const svgChanger3 = document.getElementsByClassName("svg3")[0];
    const svgChanger4 = document.getElementsByClassName("svg4")[0];
    const svgChangerDown1 = document.getElementsByClassName("svg1")[1];
    const svgChangerDown2 = document.getElementsByClassName("svg2")[1];
    const svgChangerDown3 = document.getElementsByClassName("svg3")[1];
    const svgChangerDown4 = document.getElementsByClassName("svg4")[1];
    const svgChanger5 = document.getElementsByClassName("mail_svg")[0];

    document.querySelectorAll(".navLink")[0].classList.toggle("nav_color");
    document.querySelectorAll(".navLink")[1].classList.toggle("nav_color");
    document.querySelectorAll(".navLink")[2].classList.toggle("nav_color");
    document.querySelectorAll(".navLink")[3].classList.toggle("nav_color");
    document.querySelector(".navMenuBox").classList.toggle("theme_black");

    theme.classList.toggle("theme_black");
    themeBorder.classList.toggle("theme_border");
    sun_moon.classList.toggle("sun-to-moon");
    imageChanger.classList.toggle("visibility");
    navColor.classList.toggle("navDark");
    name_input.classList.toggle("input_background");
    email_input.classList.toggle("input_background");
    textarea_input.classList.toggle("input_background");
   
    svgChanger1.classList.toggle("svg");
    svgChanger2.classList.toggle("svg");
    svgChanger3.classList.toggle("svg");
    svgChanger4.classList.toggle("svg");
    svgChanger5.classList.toggle("svg");
    svgChangerDown1.classList.toggle("svg");
    svgChangerDown2.classList.toggle("svg");
    svgChangerDown3.classList.toggle("svg");
    svgChangerDown4.classList.toggle("svg");
});


function skillFunction(){
    document.getElementsByClassName("about_skills")[0].classList.add("skillsVisible");
    document.getElementsByClassName("about_education")[0].classList.remove("educationVisible");
    const skillsStyle = document.getElementById("skills");
    skillsStyle.classList.add("skillsStyle")
    document.getElementById("education").classList.remove("educationStyle")

}

function educationFunction(){
    document.getElementsByClassName("about_education")[0].classList.add("educationVisible")
    document.getElementsByClassName("about_skills")[0].classList.remove("skillsVisible");
    document.getElementsByClassName("about_skills")[0].classList.add("skillsHidden");
    const educationStyle = document.getElementById("education");
    educationStyle.classList.add("educationStyle");
    document.getElementById("skills").classList.remove("skillsStyle");
    document.getElementById("skills").classList.remove("skillsFirstStyle");
}

document.getElementById("navMenu").addEventListener("click", () => {
    document.getElementById("navMenuBox").classList.toggle("navMenuAppear");
})