module.exports = ({
  personalInfo,
  contactDetails,
  skills,
  experiences,
  educations,
  step
}) => {
  let hardSkillsElements="";
  skills.hardSkills&&skills.hardSkills?.map((value)=>{
    hardSkillsElements=hardSkillsElements+`<li className="text-small">${value}</li>`
  })

  let softSkillsElements="";
  skills.softSkills&&skills.softSkills?.map((value)=>{
    softSkillsElements=softSkillsElements+`<li className="text-small">${value}</li>`
  })

  let languageSkillsElements="";
  skills.languageSkills&&skills.languageSkills?.map((value)=>{
    languageSkillsElements=languageSkillsElements+`<li className="text-small">${value}</li>`
  })

  let educationElements="";
  educations.education.map((value)=>{
    educationElements=educationElements+`
    <div class="experience-container">
    <p style="font-size:13px;font-weight:700;color:${step.theme};margin:0;">${value.degree+" "+value.area}</p>
    <p class="college">${value.collegeName}</p>
    <p class="duration">${value.startDate.date.slice(0,4)} - ${value.endDate.present?"Present":value.endDate.date.slice(0,4)}</p>
  </div>
    `
  })

  let experienceElement="";
  experiences.experience.map((value)=>{
    experienceElement=experienceElement+`
    <div class="experience-container">
    <p style="font-size:13px;font-weight:700;color:${step.theme};margin:0;">${value.position}</p>
    <p class="college">${value.companyName}</p>
    <p class="duration">${value.startDate.date.slice(0,4)} - ${value.endDate.present?"Present":value.endDate.date.slice(0,4)}</p>
  </div>
    `
  })

  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Resume</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <style>
      body {
        margin: 0;
        overflow: hidden;
        font-family:'Segoe UI',sans-serif;
        position:relative;
      }
      .left-side {
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .maillink{
        color:white;
        text-decoration:none
      }
      .text-small{
        font-size:12px;
        font-family:'Segoe UI',sans-serif;
      }
      .left-title{
        font-size:20px;
        margin-left:20px;
        margin-top:20px;
        padding-bottom:5px;
        border-bottom:2px solid white;
        width:200px;
      }
      .right-title{
        padding-bottom:3px;
        border-bottom:2px solid ${step.theme};
        width:480px;
      }
      .summary{
        margin-left:20px;
        margin-top:10px;
        font-size:12px;
        width:480px;
        text-align:justify;
      }
      .personaldetails{
        width:480px;
        margin-left:20px;
        font-size:12px;
        font-weight:500;
        font-family:'Segoe UI',sans-serif;
      }
      .experience-container{
        margin-left:20px;
        margin-top:10px;
        width:480px;
        padding:10px;
        box-sizing:border-box;
        height:60px;
        border-radius:10px;
        border:1px solid ${step.theme};
        position:relative
      }
      .college{
        font-size:12px;
        color:black;
        margin:0;
        margin-top:8px
        font-weight:500;
      }
      .duration{
        position:absolute;
        top:10px;
        right:10px;
        font-size:12px;
      }
    </style>
  </head>
  <body>
    <div style="width: 795px; height: 1122px; background-color: white">
      <div class="row">
        <div
          class="col-4 left-side"
          style="height: 1122px; background-color: ${step.theme}"
        >
          <div align="center" class="pt-5" style="border-radius: 50%">
            <img
              src=${personalInfo.imageUrl}
              width="150"
            />
          </div>
          <div align="center" class="pt-3">
            <p class="fw-bold mb-0 text-small">${contactDetails.city}</p>
          </div>
          <div align="center" class="pt-2">
            <a class="fw-bold mb-0 maillink text-small" mailto=${contactDetails.email}>${contactDetails.email}</a>
          </div>
          <div align="center" class="pt-2">
            <p class="fw-bold mb-0 text-small">${contactDetails.phoneNumber}</p>
          </div>
          <div align="center" class="pt-2">
            <a class="fw-bold mb-0 maillink text-small" href=${contactDetails.linkedIn}>LinkedIn</a>
          </div>
          <div align="center" class="pt-2">
            <a class="text-small fw-bold mb-0 maillink" href=${contactDetails.personalWebsite}>Website</a>
          </div>
          <p class="fw-bold mb-0 left-title">Hardskills</p>
          <ul style="margin-left:30px;margin-top:10px;font-size:12px;">
              ${hardSkillsElements}
          </ul>
          <p class="fw-bold mb-0 left-title">Softskills</p>
          <ul style="margin-left:30px;margin-top:10px;font-size:12px;">
              ${softSkillsElements}
          </ul>
          <p class="fw-bold mb-0 left-title">Languages</p>
          <ul style="margin-left:30px;margin-top:10px;font-size:12px;">
              ${languageSkillsElements}
          </ul>
        </div>
        <div className="col-8" style="height: 1122px;margin-left:270px;position:fixed;top:0px">
          <h1 style="font-weight:700;margin-top:20px;margin-left:20px;color:${step.theme};">${personalInfo.firstName+" "+personalInfo.lastName}</h1>
          <h3 style="font-weight:700;margin-left:20px;margin-top:3px;color:black;">${personalInfo.occupation}</h3>
          <h4 style="font-weight:700;margin-top:20px;margin-left:20px;color:${step.theme};" class="right-title">Summary</h4>
          <p class="summary">${personalInfo.basicSummary}</p>
          <h4 style="font-weight:700;margin-top:20px;margin-left:20px;color:${step.theme};" class="right-title">Personal Details</h4>
          <pre class="personaldetails">Date of birth        : ${personalInfo.dateOfBirth.dateString}</pre>
          <pre class="personaldetails">Marital status      : ${personalInfo.maritalStatus}</pre>
          <pre class="personaldetails">Nationality          : ${personalInfo.nationality}</pre>
          <pre class="personaldetails">Father's name     : ${personalInfo.fatherName}</pre>
          <h4 style="font-weight:700;margin-top:20px;margin-left:20px;color:${step.theme};" class="right-title">Experience</h4>
          ${
            experienceElement
          }
          <h4 style="font-weight:700;margin-top:20px;margin-left:20px;color:${step.theme};" class="right-title">Education</h4>
          ${
            educationElements
          }
        </div>
      </div>
    </div>
  </body>
</html>

`;
};