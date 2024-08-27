import React from 'react';

const Manue = ({ menuItems }) => {
    return (
        <div id="main">
            {menuItems.map((item) => (
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
    );
}

export default Manue;
