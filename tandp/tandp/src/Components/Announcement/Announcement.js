import React from 'react';
import { useState, useEffect } from 'react';
import './AnnouncementSlider.css';
import axios from 'axios';
function AnnouncementSlider() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(process.env.REACT_APP_BASE_URL + '/readAnnouncement')

      .then(res => {
        setData([
          res.data[0].a1,
          res.data[0].a2,
          res.data[0].a3
        ]);
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <div className="announcement-slider-container">
      <div className='announcement-area'>
        {data.map((announcement, index) => {
          return <div key={index}>

            <div className='announcement-slide'>{announcement}</div>
          </div>
        })}

      </div>
    </div>
  );
}

export default AnnouncementSlider;
