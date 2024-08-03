import React, { useState } from 'react';
// Import your images
import homeImg from '../../assets/images/Category.png';
import newListingImg from '../../assets/images/User.png';
import searchImg from '../../assets/images/Search.png';
import aboutImg from '../../assets/images/Paper.png';
import favoritesImg from '../../assets/images/fi_heart.png';
import helpCenterImg from '../../assets/images/Info_Circle.png';
import settingsImg from '../../assets/images/Setting.png';

const Dashboard = ({ toggleDashboard }) => {
    const [selected, setSelected] = useState('Home');

    const menuItems = [
        { name: 'Home', image: homeImg },
        { name: 'New Listing', image: newListingImg },
        { name: 'Search', image: searchImg },
        { name: 'About', image: aboutImg },
        { name: 'Favorites', image: favoritesImg },
        { name: 'Help Center', image: helpCenterImg },
        { name: 'Settings', image: settingsImg },
    ];

    return (
        <div className="h-full">
            <div className="flex items-center p-4 justify-center">
                <h1 className='uppercase text-3xl text-[#4285F3] font-poor-richard mt-6'>Logo</h1>
                <button onClick={toggleDashboard} className="md:hidden ml-auto text-white">X</button>
            </div>
            <ul className='text-base font-medium text-[#5C635A] mt-4'>
                {menuItems.map((item, index) => (
                    <React.Fragment key={item.name}>
                        <li
                            className={`mb-2 flex items-center cursor-pointer px-6 py-2 ${selected === item.name ? 'bg-[#D5E9FF] text-black' : ''}`}
                            onClick={() => setSelected(item.name)}
                        >
                            <img src={item.image} alt={item.name} className="mr-4 w-4 h-4" />
                            <a href="#" className="w-full">{item.name}</a>
                            {selected === item.name && <div className="absolute left-0 w-[2px] rounded bg-[#102C4A] h-10"></div>}
                        </li>
                        {item.name === 'Favorites' && <hr className="my-2 w-[85%] mx-auto" />}
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
