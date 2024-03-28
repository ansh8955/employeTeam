import React from 'react';
import TeamMember from './TeamMember';

const Team = ({data}) => {

    const {team}  = data;
  return (
    <div>
      {team.map((member)=><TeamMember name={member.name} age={member.age}/>)}
    </div>
  )
}

export default Team
