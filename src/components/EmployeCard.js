import React from 'react'

const EmployeCard = ({name,age}) => {
  return (
    <div>
      <p>name:{name}</p>
      <p>age:{age}</p>
      <div>

        <button>Add</button>
      </div>
    </div>
  )
}

export default EmployeCard
