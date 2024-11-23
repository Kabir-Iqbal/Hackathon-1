var toogle = document.getElementById("toggle-button");
var skill = document.getElementById("skills");
toogle.addEventListener("click", function () {
    if (skill.style.display === "none") {
        skill.style.display = "block";
    }
    else {
        skill.style.display = "none";
    }
});
