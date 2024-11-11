import React from "react";
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamondTurnRight } from "@fortawesome/free-solid-svg-icons";
const SimpleMap = () => {
  const openGoogleMaps = () => {
    const destination = encodeURIComponent('Royal sign, 1072/2, Gavat Mandai Rd, near Zorba hotel, Shahupuri, Kolhapur, Maharashtra 416001');
    const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
    window.open(url, '_blank');
    console.log("Click!");
  };
  return (
    <>
      <Tooltip title="Get Directions">

        <Button type="primary" shape="circle" onClick={openGoogleMaps} icon={<FontAwesomeIcon
          icon={faDiamondTurnRight}
          className="devmind-directions"
        />} />
      </Tooltip>
    </>

  );
};
export default SimpleMap