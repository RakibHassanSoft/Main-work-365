import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import "./index.css";
// import Main from "./Main/Main";
// import PersonalInfoForm from "./pages/PageWise/PersonalInfoForm";
// import CareerObjectiveForm from "./pages/PageWise/CareerObjectiveForm"; // Import the new component
// import SkillsForm from "./pages/PageWise/SkillsForm";
// import ProjectsForm from "./pages/PageWise/ProjectsForm";
// import EducationForm from "./pages/PageWise/EducationForm";
// import LanguagesForm from "./pages/PageWise/LanguagesForm";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main />,
//     children: [
//       {
//         path: "/personal-info-form",
//         element: <PersonalInfoForm />,
//       },
//       {
//         path: "/career-objective-form", // Add the new route here
//         element: <CareerObjectiveForm />,
//       },
//       {
//         path: "/skills-form", // Add the new route here
//         element: <SkillsForm />,
//       },
//       {
//         path: "/peronal-project", // Add the new route here
//         element: <ProjectsForm />,
//       },
//       {
//         path: "/Education-form", // Add the new route here
//         element: <EducationForm />,
//       },
//       {
//         path: "/Languages-form", // Add the new route here
//         element: <LanguagesForm />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
