import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import FeaturedTherapists from '../FeaturedTherapists/FeaturedTherapists';
import BottomSection from '../BottomSection/BottomSection';

const Home = () => {
  return (
    <div className="flex">
      <aside className="w-[250px]">
        <Dashboard></Dashboard>
      </aside>
      <main className="w-[1270px]">
        <Navbar></Navbar>
        <Search></Search>
        {/* <FeaturedTherapists></FeaturedTherapists> */}
        <BottomSection></BottomSection>
      </main>
    </div>
  );
};

export default Home;
