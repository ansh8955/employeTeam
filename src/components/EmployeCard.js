import React from 'react'

const EmployeCard = ({name,age,dispatch,id,isPartOfTeam}) => {
  return (
    <div>
      <p>name:{name}</p>
      <p>age:{age}</p>
      <div>

      {isPartOfTeam == false &&
      
        (<button
        
        onClick={()=>{
            dispatch({type:'add_member_to_team',payload:id});
        }}

        >Add</button>)
      }
           
      <span>ADDED IN TEAM:{isPartOfTeam? "YES":"NO"}</span>
        
      </div>
    </div>
  )
}

export default EmployeCard
