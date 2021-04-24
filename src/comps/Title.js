import React from 'react';
import LogoutBtn from './logoutBtn';

const Title = () => {
  return (
    <div className="title">
      <div className="upperCont">
        <h1>Pikagram</h1>
        <LogoutBtn/>
        </div>
      <h2>Put your best moments here</h2>
      <p>The best moments are the unplanned ones that just happen but make your day perfect !</p>
    </div>
  )
}

export default Title;