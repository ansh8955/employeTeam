import React from 'react';
import TeamMember from './TeamMember';

const Team = ({data, dispatch}) => {

    const {team}  = data;
  return (
    <div>
      {team.map((member)=><TeamMember id={member.id} dispatch={dispatch} name={member.name} age={member.age}/>)}
    </div>
  )
}

export default Team
