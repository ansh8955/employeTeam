import React from 'react'

const EmployeCard = ({name,age,dispatch,id}) => {
  return (
    <div>
      <p>name:{name}</p>
      <p>age:{age}</p>
      <div>

        <button
        
        onClick={()=>{
            dispatch({type:'add_member_to_team',payload:id});
        }}

        >Add</button>
      </div>
    </div>
  )
}

export default EmployeCard
