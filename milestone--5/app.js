var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
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
    var resume = "\n\n\n<div class=\"main-div\">\n  <div class=\"left-section\">\n      <div class=\"image-div\">\n".concat(Profilefile ? "<img src=\"".concat(URL.createObjectURL(Profilefile), "\" alt=\"Profile Picture\" />") : 'No Profile Picture Uploaded', "\n</div>\n         <h2>Career Objective</h2>\n         <h3> ").concat(Objective, "  </h3>\n\n         \n       <h2>Skills</h2>\n        <h3 > <ul class=\"skills\"  >  ").concat(skillvalues.map(function (value) { return "<li> ".concat(value, " </li>"); }).join(" "), "</h3>\n </div>\n\n\n     <div class=\"right-section\" style=\" background-color: white; \" >\n      <h2 id=\"main-word\" > Resume </h2>\n      <h3>Personal Information:</h3>\n    \n           <h4>Name :          <span class=\"answer\" >   ").concat(name, "  </span>  </h4>\n           <h4>Date Of Birth : <span class = \"answer\">   ").concat(Formatdateofbirth, " </span> </h4>\n           <h4>Address :       <span class=\"answer\" >   ").concat(address, " </span>  </h4>\n           <h4>Phone :         <span class=\"answer\" >    ").concat(phone, " </span> </h4>\n           <h4>Email :         <span class=\"answer\" >   ").concat(email, " </span> </h4>\n         \n          \n   \n         \n    \n       <h3>Education</h3>\n                <h4>").concat(Education1, ":         <span class=\"answer\" > ( ").concat(Complete1, " ) </span>  </h4> \n                <h4>").concat(Education2, ":         <span class=\"answer\" > ( ").concat(Complete2, " ) </span> </h4>\n                <h4>").concat(Education3, ":         <span class=\"answer\" > ( ").concat(Complete3, " ) </span> </h4>\n    \n\n       <h3> Profession </h3>\n\n       <h4>Profession :      <span class=\"answer\">   ").concat(profession, " </span>   </h4>\n\n       \n       <h3>Experience</h3>\n       <h4 > <ul class=\"experienceli\" >\n        ").concat(experiencevalues.map(function (value) { return "<li> ".concat(value, "</li>"); }).join(" "), "\n        </ul>\n         </h4>\n\n         <div id= \"containersbutton\"  class= \"btncontainer\" > \n         <button id=\"Copyhareablelink\" type=\"button\" class=\"sharebtn\" >Copy Shareable Link </button>\n         <button id=\"DownloadasPdf\" type=\"button\" class=\"downloadbtn\" >Download as Pdf </button>\n\n         </div>\n     \n\n</div>\n    ");
    //Display the generated resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resume;
        resumeDisplay.classList.remove("hidden");
        resumeform.style.display = "none";
        resumeDisplay.style.display = "block";
        //Add Dowload Pdf button
        var Dowloadbutton = document.getElementById("DownloadasPdf");
        if (Dowloadbutton) {
            Dowloadbutton.addEventListener("click", function () {
                window.print(); //open the print dialogue allowing to user that sace as pdf
            });
        }
        //shareable link button
        var shareblebutton = document.getElementById("Copyhareablelink");
        if (shareblebutton) {
            shareblebutton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                var shareablelink, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            shareablelink = "http://resumes/".concat(name.replace(/\s+/g, "_"), "_cv.html  ");
                            //use clipboard API to copy the shareable link
                            return [4 /*yield*/, navigator.clipboard.writeText(shareablelink)];
                        case 1:
                            //use clipboard API to copy the shareable link
                            _a.sent();
                            alert("Shareable link copied to clipboard.");
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            console.error("Failed to Copy link: ", err_1);
                            alert("Failed to copy link to clipboard. Please try again");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
        }
    }
    else {
        console.error("Resume Output container not found");
    }
});
