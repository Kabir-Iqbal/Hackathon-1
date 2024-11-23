"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const resumeform = document.getElementById("resumeform");
const resumeDisplay = document.getElementById("resume_display");
const experiencebtn = document.getElementById("experiencebtn");
const experiencesection = document.getElementById("experiencesection");
const skillsection = document.getElementById("skillsection");
const skillbutton = document.getElementById("skillbutton");
//Handling Skill section
skillbutton.addEventListener("click", () => {
    const newskillinputs = document.createElement("input");
    newskillinputs.type = "text";
    newskillinputs.name = "skill";
    newskillinputs.placeholder = "Add your skill";
    //Append the new input filed to skill section
    skillsection.appendChild(newskillinputs);
});
//  Handling experince section
experiencebtn.addEventListener("click", () => {
    //Create a new input
    const newexperienceInput = document.createElement("input");
    newexperienceInput.type = "text";
    newexperienceInput.name = "experience";
    newexperienceInput.placeholder = "Add Your Experience";
    // Append the new input field to the experience section
    experiencesection.appendChild(newexperienceInput);
});
// handle to submit
resumeform.addEventListener("submit", (event) => {
    event.preventDefault(); //preven page reloded
    //collect input values 
    // Persnol Information
    const name = document.getElementById("name").value;
    ///Date of birth
    const Dateofbirth = document.getElementById("Dateofbirth").value;
    const newdateofbirth = new Date(Dateofbirth);
    const Formatdateofbirth = newdateofbirth.toLocaleDateString("en-Gb"); ///format as dd/mm/yy
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const profession = document.getElementById("profession").value;
    const Objective = document.getElementById("Objective").value;
    // Education
    const Education1 = document.getElementById("Education-1").value;
    const Complete1 = document.getElementById("complete-1").value;
    const Education2 = document.getElementById("Education-2").value;
    const Complete2 = document.getElementById("complete-2").value;
    const Education3 = document.getElementById("Education-3").value;
    const Complete3 = document.getElementById("complete-3").value;
    // Profile
    const Profileinput = document.getElementById("Profile");
    const Profilefile = Profileinput.files ? Profileinput.files[0] : null;
    // Experience
    const Experience = document.getElementsByName("experience");
    const experiencevalues = [];
    for (let i = 0; i < Experience.length; i++) {
        experiencevalues.push(Experience[i].value);
    }
    // Skills
    const skills = document.getElementsByName("skill");
    const skillvalues = [];
    for (let i = 0; i < skills.length; i++) {
        //Checking for empty vaalues
        const skill = skills[i].value.trim();
        if (skill) {
            skillvalues.push(skill);
        }
    }
    //generate rezume dynamicaly
    const resume = `


<div class="main-div">
  <div class="left-section">
      <div class="image-div">
${Profilefile ? `<img src="${URL.createObjectURL(Profilefile)}" alt="Profile Picture" />` : 'No Profile Picture Uploaded'}
</div>
         <h2>Career Objective</h2>
         <h3> ${Objective}  </h3>

         
       <h2>Skills</h2>
        <h3 > <ul class="skills"  >  ${skillvalues.map(value => `<li> ${value} </li>`).join(" ")}</h3>
 </div>


     <div class="right-section" style=" background-color: white; " >
      <h2 id="main-word" > Resume </h2>
      <h3>Personal Information:</h3>
    
           <h4>Name :          <span class="answer" >   ${name}  </span>  </h4>
           <h4>Date Of Birth : <span class = "answer">   ${Formatdateofbirth} </span> </h4>
           <h4>Address :       <span class="answer" >   ${address} </span>  </h4>
           <h4>Phone :         <span class="answer" >    ${phone} </span> </h4>
           <h4>Email :         <span class="answer" >   ${email} </span> </h4>
         
          
   
         
    
       <h3>Education</h3>
                <h4>${Education1}:         <span class="answer" > ( ${Complete1} ) </span>  </h4> 
                <h4>${Education2}:         <span class="answer" > ( ${Complete2} ) </span> </h4>
                <h4>${Education3}:         <span class="answer" > ( ${Complete3} ) </span> </h4>
    

       <h3> Profession </h3>

       <h4>Profession :      <span class="answer">   ${profession} </span>   </h4>

       
       <h3>Experience</h3>
       <h4 > <ul class="experienceli" >
        ${experiencevalues.map(value => `<li> ${value}</li>`).join(" ")}
        </ul>
         </h4>

         <div id= "containersbutton"  class= "btncontainer" > 
         <button id="Copyhareablelink" type="button" class="sharebtn" >Copy Shareable Link </button>
         <button id="DownloadasPdf" type="button" class="downloadbtn" >Download as Pdf </button>

         </div>
     

</div>
    `;
    //Display the generated resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resume;
        resumeDisplay.classList.remove("hidden");
        resumeform.style.display = "none";
        resumeDisplay.style.display = "block";
        //Add Dowload Pdf button
        const Dowloadbutton = document.getElementById("DownloadasPdf");
        if (Dowloadbutton) {
            Dowloadbutton.addEventListener("click", () => {
                window.print(); //open the print dialogue allowing to user that sace as pdf
            });
        }
        //shareable link button
        const shareblebutton = document.getElementById("Copyhareablelink");
        if (shareblebutton) {
            shareblebutton.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
                //Create a unique sharable link (simulate it is in this case,)
                try {
                    const shareablelink = `http://resumes/${name.replace(/\s+/g, `_`)}_cv.html  `;
                    //use clipboard API to copy the shareable link
                    yield navigator.clipboard.writeText(shareablelink);
                    alert("Shareable link copied to clipboard.");
                }
                catch (err) {
                    console.error("Failed to Copy link: ", err);
                    alert("Failed to copy link to clipboard. Please try again");
                }
            }));
        }
    }
    else {
        console.error("Resume Output container not found");
    }
});
