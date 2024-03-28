import React from 'react';
import EmployeCard from './EmployeCard';

const Employess = ({data}) => {
  return (
    <div>
     <h1>Employees</h1>
    { data.employees.map((emp)=><EmployeCard name={emp.name} age={emp.age}/>)}
    </div>
  )
}

export default Employess
