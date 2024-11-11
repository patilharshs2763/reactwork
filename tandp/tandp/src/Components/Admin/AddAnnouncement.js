import { useState } from 'react';
import axios  from 'axios';

function AddAnnouncement() {
    const [a1, seta1] = useState("");
    const [a2, seta2] = useState("");
    const [a3, seta3] = useState("");

    async function uploadData()  {
        await axios.post(process.env.REACT_APP_BASE_URL+'/uploadAnnouncement', {a1, a2, a3})
        .then(response => {
            alert("Announcement added Successfully !!");
        })
        .catch(error => {
            console.log(error?.response?.data?.message);
        });
    }

    return (
        <>
            <div className="container">
                <h1 className="heading">Upload Announcement</h1>
                <div className="box-container UploadContainer UploadContainer-Announcement">
                    <div className="box">
                        {/* <div className="UploadContainer UploadContainer-Announcement"> */}
                            <input type='text' placeholder='First Announcement' name='a1' onChange={(e)=>{seta1(e.target.value)}}/><br />
                            <input type='text' placeholder='Second Announcement' name='a2' onChange={(e)=>{seta2(e.target.value)}}/><br />
                            <input type='text' placeholder='Third Announcement' name='a3' onChange={(e)=>{seta3(e.target.value)}}/><br />
                            <button onClick={uploadData}>Upload</button>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}
export default AddAnnouncement;