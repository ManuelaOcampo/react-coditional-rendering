import Fe from './Fe.jpg';
import Ma from './Ma.jpg';
import React from 'react';
import './data-school-table.style.css';
const  DataSchoolTable =(props) => {
    return(
       <div className="data-school-table-container">
        
        {
          props.data.stock===0
          ?
            <span className="red"> {props.data.Grade} </span>
          :
            <span> {props.data.Grade} </span>
        }
         <div className="space3">
         {
          props.data.gender===0
          ?
            <div> {props.data.Gender} <img src={Fe} /> </div>
          :
            <div> {props.data.Gender} <img src={Ma}  /> </div>
        }
        </div>
         <div className="space2">
         {props.data.name} 
          </div> 
        
        
        
           
         
         
         
       </div>
    );
}

export default DataSchoolTable;