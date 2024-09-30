import React from 'react';
import { Outlet } from 'react-router-dom';
import bg from "../../public/bg-img.png"
const Main = () => {


    return (
        // <div className={`bg-[url(${bg})] bg-cover bg-center min-h-screen`}>
    <div className="bg-[url('https://www.212-careers.com/wp-content/uploads/2023/05/Resumes-on-Desk-scaled.jpg')] bg-cover bg-center min-h-screen pt-44"> 
            <Outlet></Outlet>
        </div>
    )
};

export default Main;
