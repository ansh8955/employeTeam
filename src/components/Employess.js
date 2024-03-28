import React from 'react';
import EmployeCard from './EmployeCard';

const Employess = ({data,dispatch}) => {
  return (
    <div>
     <h1>Employees</h1>
    { data.employees.map((emp)=><EmployeCard dispatch={dispatch} name={emp.name} id={emp.id} age={emp.age}/>)}
    </div>
  )
}

export default Employess
