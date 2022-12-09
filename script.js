// function to stick navbar to top of page after scrolling past it

//execute function on page scroll to keep the navbar on the page
window.onscroll = function () {
    myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

//add 'sticky' class to navbar when reaching its scroll position, and vice versa
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.className = "sticky";
    } else {
        navbar.classList.remove("sticky");
    }
}

function scrollToAbout() {
    let element = document.getElementById("about");
    element.scrollIntoView();
}

// function to check when 'skills' graph is in viewport and animate when so //
function callbackFuncOne(entries, observer) {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            document.getElementById("html").style.width = "80%";
            document.getElementById("css").style.width = "70%";
            document.getElementById("C").style.width = "60%";
            document.getElementById("javascript").style.width = "50%";
            document.getElementById("react").style.width = "40%";
            document.getElementById("axios").style.width = "30%";
            document.getElementById("git").style.width = "20%";
            document.getElementById("python").style.width = "10%";
        }
    });
}

let options = {
    root: null, // Sets the framing element to the viewport
    rootMargin: "0px",
    threshold: 0.6
};

let observer = new IntersectionObserver(callbackFuncOne, options);

observer.observe(document.getElementById("skillsAnchor"));

// function to check when 'about' section is scrolled to and animate elements when so //

function callbackFuncTwo(entries, observertwo) {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            document.getElementById("aboutDesc").style.marginRight = "0px";
            document.getElementById("aboutDesc").style.opacity = "1";
            document.getElementById("profilePic").style.marginLeft = "0px";
            document.getElementById("profilePic").style.opacity = "1";
        }
    });
}

let optionstwo = {
    root: null, // Sets the framing element to the viewport
    rootMargin: "0px",
    threshold: 0.3
};

let observertwo = new IntersectionObserver(callbackFuncTwo, optionstwo);

observertwo.observe(document.getElementById("profileImageAnchor"));

// function to check when 'projects' section is scrolled to and animate elements when so //

function callbackFuncThree(entries, observerthree) {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            document.getElementById("projectsVisible").style.gridGap = "2px";
            document.getElementById("projectsVisible").style.opacity = "1";
        }
    });
}

let optionsthree = {
    root: null, // Sets the framing element to the viewport
    rootMargin: "0px",
    threshold: 0.1
};

let observerthree = new IntersectionObserver(callbackFuncThree, optionsthree);

observerthree.observe(document.getElementById("projectsVisible"));
