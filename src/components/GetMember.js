import React from 'react'

const Members = ({ members }) => {
  return (
    <div>
      <center><h1>Members</h1></center>
      {members.map((member) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{member.username}</h5>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Members;
