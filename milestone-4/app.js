var resumeform = document.getElementById("resumeform");
var resumeDisplay = document.getElementById("resume_display");
var experiencebtn = document.getElementById("experiencebtn");
var experiencesection = document.getElementById("experiencesection");
var skillsection = document.getElementById("skillsection");
var skillbutton = document.getElementById("skillbutton");
//Handling Skill section
skillbutton.addEventListener("click", function () {
    var newskillinputs = document.createElement("input");
    newskillinputs.type = "text";
    newskillinputs.name = "skill";
    newskillinputs.placeholder = "Add your skill";
    //Append the new input filed to skill section
    skillsection.appendChild(newskillinputs);
});
//  Handling experince section
experiencebtn.addEventListener("click", function () {
    //Create a new input
    var newexperienceInput = document.createElement("input");
    newexperienceInput.type = "text";
    newexperienceInput.name = "experience";
    newexperienceInput.placeholder = "Add Your Experience";
    // Append the new input field to the experience section
    experiencesection.appendChild(newexperienceInput);
});
// handle to submit
resumeform.addEventListener("submit", function (event) {
    event.preventDefault(); //preven page reloded
    //collect input values 
    // Persnol Information
    var name = document.getElementById("name").value;
    ///Date of birth
    var Dateofbirth = document.getElementById("Dateofbirth").value;
    var newdateofbirth = new Date(Dateofbirth);
    var Formatdateofbirth = newdateofbirth.toLocaleDateString("en-Gb"); ///format as dd/mm/yy
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var profession = document.getElementById("profession").value;
    var Objective = document.getElementById("Objective").value;
    // Education
    var Education1 = document.getElementById("Education-1").value;
    var Complete1 = document.getElementById("complete-1").value;
    var Education2 = document.getElementById("Education-2").value;
    var Complete2 = document.getElementById("complete-2").value;
    var Education3 = document.getElementById("Education-3").value;
    var Complete3 = document.getElementById("complete-3").value;
    // Profile
    var Profileinput = document.getElementById("Profile");
    var Profilefile = Profileinput.files ? Profileinput.files[0] : null;
    // Experience
    var Experience = document.getElementsByName("experience");
    var experiencevalues = [];
    for (var i = 0; i < Experience.length; i++) {
        experiencevalues.push(Experience[i].value);
    }
    // Skills
    var skills = document.getElementsByName("skill");
    var skillvalues = [];
    for (var i = 0; i < skills.length; i++) {
        //Checking for empty vaalues
        var skill = skills[i].value.trim();
        if (skill) {
            skillvalues.push(skill);
        }
    }
    //generate rezume dynamicaly
    var resume = "\n\n\n<div class=\"main-div\">\n  <div class=\"left-section\">\n      <div class=\"image-div\">\n".concat(Profilefile ? "<img src=\"".concat(URL.createObjectURL(Profilefile), "\" alt=\"Profile Picture\" />") : 'No Profile Picture Uploaded', "\n</div>\n         <h2>Career Objective</h2>\n         <h3> ").concat(Objective, "  </h3>\n\n         \n       <h2>Skills</h2>\n        <h3 > <ul class=\"skills\"  >  ").concat(skillvalues.map(function (value) { return "<li> ".concat(value, " </li>"); }).join(" "), "</h3>\n </div>\n\n\n     <div class=\"right-section\" style=\" background-color: white; \" >\n      <h2 id=\"main-word\" > Resume </h2>\n      <h3>Personal Information:</h3>\n    \n           <h4>Name :          <span class=\"answer\" >   ").concat(name, "  </span>  </h4>\n           <h4>Date Of Birth : <span class = \"answer\">   ").concat(Formatdateofbirth, " </span> </h4>\n           <h4>Address :       <span class=\"answer\" >   ").concat(address, " </span>  </h4>\n           <h4>Phone :         <span class=\"answer\" >    ").concat(phone, " </span> </h4>\n           <h4>Email :         <span class=\"answer\" >   ").concat(email, " </span> </h4>\n         \n          \n   \n         \n    \n       <h3>Education</h3>\n                <h4>").concat(Education1, ":         <span class=\"answer\" > ( ").concat(Complete1, " ) </span>  </h4> \n                <h4>").concat(Education2, ":         <span class=\"answer\" > ( ").concat(Complete2, " ) </span> </h4>\n                <h4>").concat(Education3, ":         <span class=\"answer\" > ( ").concat(Complete3, " ) </span> </h4>\n    \n\n       <h3> Profession </h3>\n\n       <h4>Profession :      <span class=\"answer\">   ").concat(profession, " </span>   </h4>\n\n       \n       <h3>Experience</h3>\n       <h4 > <ul class=\"experienceli\" >\n        ").concat(experiencevalues.map(function (value) { return "<li> ".concat(value, "</li>"); }).join(" "), "\n        </ul>\n         </h4>\n\n         \n\n</div>\n    ");
    //Display the generated resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resume;
        resumeDisplay.classList.remove("hidden");
        resumeform.style.display = ("none");
    }
    else {
        console.error("Resume Output container not found");
    }
});
