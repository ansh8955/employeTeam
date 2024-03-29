import React from 'react';
import TeamMember from './TeamMember';

const Team = ({data, dispatch}) => {

    const {team}  = data;
  return (
    <div>
      {team.map((member)=><TeamMember id={member.id} dispatch={dispatch} name={member.name} age={member.age}/>)}
      <h1>Average Age:{data.team.reduce((acc,current)=> acc+= current.age,0)/data.team.length}</h1>
    </div>
  )
}

export default Team;
