import React from 'react';

import './course-school-table.style.css'
const  CourseSchoolTable =(props) => {
    return(
       <div className="course-school-table-container">
          {props.coursesName}
       </div>
    );
}

export default CourseSchoolTable;