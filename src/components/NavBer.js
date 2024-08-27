import React from 'react';
import { Link } from 'react-router-dom';

const NavBer = ({ data, setMenuItems }) => {

    return (
        <>
            <nav id="header">
                <h1 id="title">Our Menu</h1>
                <div id="underline"></div>
                <ul id="nav">
                    <Link to="/manue">
                        <li id="filter-btn-0" data-test-id="menu-item-all"
                            onClick={() => setMenuItems(data)}
                        >All</li>
                    </Link>

                    <Link to="/manue">
                        <li id="filter-btn-1" data-test-id="menu-item-breakfast"
                            onClick={() => setMenuItems(data.filter(item => item.category === 'breakfast'))}
                        >Breakfast</li>
                    </Link>

                    <Link to="/manue">
                        <li id="filter-btn-2" data-test-id="menu-item-lunch"
                            onClick={() => setMenuItems(data.filter(item => item.category === 'lunch'))}
                        >Lunch</li>
                    </Link>

                    <Link to="/manue">
                        <li id="filter-btn-3" data-test-id="menu-item-shakes"
                            onClick={() => setMenuItems(data.filter(item => item.category === 'shakes'))}
                        >Shakes</li>
                    </Link>
                </ul>
            </nav>
            <div id="main">
            {data.map((item) => (
                <div className="item" key={item.id}>
                    <div className='item-image'>
                        <img src={item.img} alt={`item-${item.id}`} />
                    </div>
                    <div className='item-info'>
                        <div className='item-header'>
                            <h3>{item.title}</h3>
                            <h4>${item.price}</h4>
                        </div>
                        <p className='item-desc'>{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}

export default NavBer;
