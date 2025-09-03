import React from 'react';
import { Link } from 'react-router-dom';

const title = (<span>More Than <span style={{color:"#f0cf28"}}> 60,000 </span> Customers</span>);

const desc =
  'Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping';

const clientsList = [
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Alaska (USA)',
  },
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Greenland (Denmark)',
  },
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Serov (Russia)',
  },
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Guyana (South America)',
  },
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Sudan (Africa)',
  },
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Christmas Island (Australia)',
  },
  {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Yakutsk (Russia)',
  },
];

const LocationSprade = () => {
  return (
    <div className="clients-section style-2 padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="title">{title}</h2>
          <p>{desc}</p>
        </div>
        {/* Main Content */}
        <div className="section-wrapper">
          <div className="clients">
            {clientsList.map((val, i) => (
              <div key={i} className="client-list">
                <Link to="/sign-up" className="client-content">
                  <span>{val.text}</span>
                </Link>
                <div className="client-thumb">
                  <img src={val.imgUrl} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSprade;
