import React from 'react';
import './index.css'
import { RightTab } from 'components/Home/RightTab';
import { LeftTab } from 'components/Home/LeftTab';
import { CenterTab } from 'components/Home/CenterTab';

const Home = ({ userData }) => {
  return (
    <div className='home'>
      <LeftTab />
      <CenterTab userData={userData} />
      <RightTab userData={userData} />
    </div>
  );
}

export default Home;