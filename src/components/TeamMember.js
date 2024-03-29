import React from 'react'

const TeamMember = ({name,age,dispatch, id}) => {
  return (
    <div>
      <p>name:{name}</p>
      <p>age:{age}</p>
      <button 
      
      onClick={()=>{

        dispatch({

            type:'remove_from_the_team',payload:id
        })
      }}
      >Remove</button>
     
    </div>
  )
}

export default TeamMember
