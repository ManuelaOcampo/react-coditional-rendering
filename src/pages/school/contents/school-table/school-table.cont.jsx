import React from 'react';
import CourseSchoolTable from '../course-table/course-school-table.cont';
import DataSchoolTable from '../data-table/data-school-table.cont';
import StudentSchoolTable from '../students-table/students-school-table.cont';
import './school-table.style.css'
const  SchoolTable =() => {
    return(
       <div className="school-table-container">
         <CourseSchoolTable coursesName="Math"/>
         <StudentSchoolTable student={{
            name:"Name",
            Grade:"Grade",
            Gender:"Gender",
         }}/>
         <DataSchoolTable data={{
            name:"ManuelaOcampo",
            Grade:4.5,
            Gender:"Female",
            gender:0, 
            stock:10,
         }}/>
          <DataSchoolTable data={{
            name:"PaulaGiraldo",
            Grade:2.5,
            Gender:"Female",
            gender:0,
            stock:0, 
         }}/>
         <DataSchoolTable data={{
            name:"CamiloSalazar",
            Grade:2.0,
            Gender:"Male",
            gender:10,
            stock:0, 
         }}/>
         <DataSchoolTable data={{
            name:"AnyGarcia",
            Grade:5.0,
            Gender:"Female",
            gender:0,
            stock:10, 
         }}/>
         <DataSchoolTable data={{
            name:"MariaGonzales",
            Grade:3.2,
            Gender:"Female",
            gender:0,
            stock:10, 
         }}/>
         <DataSchoolTable data={{
            name:"SebastianRamirez",
            Grade:1.4,
            Gender:"Male",
            gender:10,
            stock:0, 
         }}/>
         <DataSchoolTable data={{
            name:"ValentinaSalazar",
            Grade:4.2,
            Gender:"Female",
            gender:0,
            stock:10, 
         }}/>
         <DataSchoolTable data={{
            name:"MarioHernandez",
            Grade:3.3,
            Gender:"Male",
            gender:10,
            stock:10, 
         }}/>
         <DataSchoolTable data={{
            name:"FabioGiraldo",
            Grade:1.2,
            Gender:"Male",
            gender:10,
            stock:0, 
         }}/>
         <DataSchoolTable data={{
            name:"TatianaMarin",
            Grade:4.0,
            Gender:"Female",
            gender:0,
            stock:10, 
         }}/>
         <CourseSchoolTable coursesName="Language"/>
         <DataSchoolTable data={{
            name:"ManuelaOcampo",
            Grade:4.0,
            Gender:"Female",
            gender:0,
            stock:10, 
         }}/>
         <DataSchoolTable data={{
            name:"AndresVilla",
            Grade:3.4,
            Gender:"Male",
            gender:10,
            stock:10, 
         }}/>
         <DataSchoolTable data={{
            name:"RaulRodriguez",
            Grade:4.1,
            Gender:"Male",
            gender:10,
            stock:10, 
         }}/>
         <DataSchoolTable data={{
            name:"SergioHenao",
            Grade:1.3,
            Gender:"Male",
            gender:10,
            stock:0, 
         }}/>
         <CourseSchoolTable coursesName="English"/>
         <DataSchoolTable data={{
            name:"CamilaHernandez",
            Grade:2.5,
            Gender:"Female",
            gender:0,
            stock:0, 
         }}/>
         <DataSchoolTable data={{
            name:"TomasGonzales",
            Grade:1.3,
            Gender:"Male",
            gender:10,
            stock:0, 
         }}/>
         <DataSchoolTable data={{
            name:"IsabellaVelez",
            Grade:4.3,
            Gender:"Female",
            gender:0,
            stock:10, 
         }}/>
         <DataSchoolTable data={{
            name:"ValeriaSalazar",
            Grade:2.7,
            Gender:"Female",
            gender:0,
            stock:0, 
         }}/>
         <DataSchoolTable data={{
            name:"JacoboGiraldo",
            Grade:1.3,
            Gender:"Male",
            gender:10,
            stock:0, 
         }}/>
         <DataSchoolTable data={{
            name:"DanielMarin",
            Grade:3.0,
            Gender:"Male",
            gender:10,
            stock:10, 
         }}/>
       </div>
    );
}

export default SchoolTable;