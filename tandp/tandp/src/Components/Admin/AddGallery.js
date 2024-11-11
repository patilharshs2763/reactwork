import axios from "axios";
import { useEffect, useState } from "react";
function AddGallery() {
    const [file, setFile] = useState();
    const [image, setImage] = useState(undefined);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    }
    
    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('image', file);
    
        await axios.post(process.env.REACT_APP_BASE_URL+'/file/upload', formData)
        .then(response => {
            setImage(response.data.imagePath);
        })
        .catch(error => {
            console.log(error?.response?.data?.message);
        });
    }

    async function uploadData()  {
        await axios.post(process.env.REACT_APP_BASE_URL+'/uploadGallery', {image})
        .then(response => {
            alert("Image Added to Gallery Successfully !!");
        })
        .catch(error => {
            console.log(error?.response?.data?.message);
        });
    }

    useEffect(()=>{
        if(image!==undefined){
            uploadData();
        }
    }, [image])
    
    return (
        <>
            <div className="container">
                <h1 className="heading">Upload Gallery Pictures</h1>
                <div className="box-container UploadContainer UploadContainer-Gallery">
                    <div className="box">
                       
                            <input type='file'  name='image' alt="img" onChange={handleFileChange}/><br />
                            <button onClick={handleUpload}>Upload</button>
                     
                    </div>
                </div>
            </div>
        </>
    );
}
export default AddGallery;