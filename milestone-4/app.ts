const resumeform = document.getElementById("resumeform") as HTMLFormElement;
const resumeDisplay = document.getElementById("resume_display") as HTMLDivElement;

const experiencebtn = document.getElementById("experiencebtn") as HTMLButtonElement;
const experiencesection = document.getElementById("experiencesection") as HTMLDivElement;

const skillsection = document.getElementById ("skillsection") as HTMLDivElement;
const skillbutton = document.getElementById ("skillbutton") as HTMLButtonElement;

//Handling Skill section
skillbutton.addEventListener("click" , ()=>{
    const newskillinputs = document.createElement("input");
    newskillinputs.type= "text";
    newskillinputs.name = "skill";
    newskillinputs.placeholder = "Add your skill";


    //Append the new input filed to skill section
    skillsection.appendChild(newskillinputs)
})


//  Handling experince section
experiencebtn.addEventListener("click", ()=>{
    //Create a new input
    const newexperienceInput = document.createElement("input");
    newexperienceInput.type = "text";
    newexperienceInput.name = "experience";
    newexperienceInput.placeholder= "Add Your Experience";

    // Append the new input field to the experience section
    experiencesection.appendChild(newexperienceInput);
} )


// handle to submit
resumeform.addEventListener("submit", (event : Event)=>{
    event.preventDefault()  //preven page reloded


    //collect input values 
    // Persnol Information
    const name = (document.getElementById("name")as HTMLInputElement).value
///Date of birth
    const Dateofbirth = (document.getElementById("Dateofbirth")as HTMLInputElement).value
   const  newdateofbirth = new Date(Dateofbirth)
   const Formatdateofbirth = newdateofbirth.toLocaleDateString("en-Gb") ///format as dd/mm/yy



    const email = (document.getElementById("email")as HTMLInputElement).value
    const phone = (document.getElementById("phone")as HTMLInputElement).value
    const address = (document.getElementById("address")as HTMLInputElement).value
    const profession = (document.getElementById("profession")as HTMLInputElement).value
    const Objective = (document.getElementById("Objective") as HTMLInputElement).value

    // Education
    const Education1 = (document.getElementById("Education-1")as HTMLInputElement).value
    const Complete1 = (document.getElementById("complete-1")as HTMLInputElement).value
    const Education2 = (document.getElementById("Education-2")as HTMLInputElement).value
    const Complete2 = (document.getElementById("complete-2")as HTMLInputElement).value
    const Education3 = (document.getElementById("Education-3")as HTMLInputElement).value
    const Complete3= (document.getElementById("complete-3")as HTMLInputElement).value


    // Profile
    const Profileinput = (document.getElementById("Profile")as HTMLInputElement)
    const Profilefile = Profileinput.files ? Profileinput.files[0] : null

    // Experience
    const Experience = document.getElementsByName("experience") as NodeListOf<HTMLInputElement>
    const experiencevalues :string[] =[]
 
    for (let i = 0; i < Experience.length; i++) {
        experiencevalues.push((Experience[i] as HTMLInputElement).value )
    }


    // Skills
    const skills = document.getElementsByName("skill")as NodeListOf<HTMLInputElement>
    const skillvalues: string[] = []

    for (let i = 0; i < skills.length; i++) {
        //Checking for empty vaalues
        const skill = skills[i].value.trim()
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
        <h3 > <ul class="skills"  >  ${skillvalues.map(value => `<li> ${value} </li>`).join(" ") }</h3>
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
        ${experiencevalues.map(value => `<li> ${ value}</li>`).join(" ")  }
        </ul>
         </h4>

         

</div>
    `
   

 
 

    //Display the generated resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML =resume;
        resumeDisplay.classList.remove("hidden");
        resumeform.style.display = ("none")
    }else{
             console.error("Resume Output container not found");
         }

       }); 
    
       