import React from 'react';

import './students-school-table.style.css'
const  StudentSchoolTable =(props) => {
    return(
       <div className="students-school-table-container">
         <div className="space">
         {props.student.name}   {props.student.Grade}   {props.student.Gender}
         </div>
         
       </div>
    );
}

export default StudentSchoolTable;