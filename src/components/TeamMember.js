import React from 'react'

const TeamMember = ({name,age}) => {
  return (
    <div>
      <p>name:{name}</p>
      <p>age:{age}</p>
      <button>Remove</button>
    </div>
  )
}

export default TeamMember
