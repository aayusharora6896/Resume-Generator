// import React, {useState} from 'react';
// import ResumeInput from '../components/resumeCompare/resumeInput'
// import JobInput from '../components/resumeCompare/jobInput'
// import SkillTable from '../components/resumeCompare/skillTable'
// // import {compare} from './resumeCompare/compare/compare'
// // import Logo from './images/res-comp_logo_white.png'

// function Ats() {
//   const [resume, changeResume] = useState("")
//   const [job, changeJob] = useState("")
//   const [skillSet, changeSkillSet] = useState([])

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     const skillSet = compare(resume, job)
//     changeSkillSet(skillSet)
//   }

//   const handleKeyDown = (event) => {
//     if (event.keyCode === 13 && event.metaKey) {
//       const skillSet = compare(resume, job)
//       changeSkillSet(skillSet)
//     }
//   }

//   return (
//     <div className="App">
//       {/* <img alt="logo" id="logo" src={Logo}/> */}
//       <div className="contents">
//         <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
//           <div className="top">
//             <button id="submit">Check Resume</button>
//             <div className="hidden-text-container">
//               <span className={resume || job ? "visible-text" : "hidden-text"}>
//                 Or submit with <em>&lt;CMD&gt;-&lt;Enter&gt;</em> or <em>&lt;Win&gt;-&lt;Enter&gt;</em>
//               </span>
//             </div>
//           </div>
//           <div className="main">
//             <div className="input-container">
//               <ResumeInput changeResume={changeResume} resume={resume}/>
//               <JobInput changeJob={changeJob} job={job}/>
//             </div>
//             <div className="skill-table">
//               <SkillTable skills={skillSet} />
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Ats;
