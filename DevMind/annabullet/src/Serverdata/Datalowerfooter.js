import { PiMapPinAreaBold } from "react-icons/pi";
import { FaBlenderPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuAlarmClock } from "react-icons/lu";

const Datalowerfooter = [
    {
        id: 1,
        heading: "CONTACT US",
        subitems: [
            { text: '5611 Wellington Road, Suite 115, Gainesville, VA 20155', icon: <PiMapPinAreaBold /> },
            { text: '888 9344 6000 - 888 1234 6789', icon: <FaBlenderPhone /> },
            { text: 'autostore@magentech.com', icon: <MdOutlineMailOutline /> },
            { text: '7 Days a week from 10-00 am to 6-00 pm', icon: <LuAlarmClock /> },
        ]
    },
    {
        id: 2,
        heading: "STORE LOCATION",
        subitems: [
            { text: 'New York - USA' },
            { text: 'California - USA' },
            { text: 'Bangkok - Thailand' },
            { text: 'Paris - France' },
            { text: 'Paris - France' },
        ]
    },

    {
        id: 3,
        heading: "CUSTOMER SERVICE",
        subitems: [
            { text: 'Customer Service' },
            { text: 'Shipping & Returns' },
            { text: 'Track Your Order' },
            { text: 'Help Center' },
            { text: 'Help Center' },
        ]
    },

    {
        id: 4,
        heading: "INFORMATION",
        subitems: [
            { text: 'Caps & Hats' },
            { text: 'Hoodies & Sweatshirts' },
            { text: 'Jacket & Coats' },
            { text: 'Jumpers & Cardigans' },
            { text: 'Shoes, Boots & Trainers' },
        ]
    },
]
export default Datalowerfooter;
