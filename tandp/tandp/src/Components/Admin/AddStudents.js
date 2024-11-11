import { useEffect, useState } from 'react';
import axios from 'axios';
import './AddStudents.css';
function AddStudents() {
    const [file, setFile] = useState();
    const [image, setImage] = useState(undefined);
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [details, setDetails] = useState("");

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
        await axios.post(process.env.REACT_APP_BASE_URL+'/uploadStud', {image, name, company, details})
        .then(response => {
            alert("Student Details added Successfully !!");
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
        <div className="container">
            <h1 className="heading">Upload Student Placed Record</h1>
            <div className="box-container UploadContainer">
                <div className="box">

                    <input type="file" onChange={handleFileChange} /><br />
                    <input type='text' placeholder='Enter student name' onChange={(e)=>{setName(e.target.value)}} name='name' /><br />
                    <input type='text' placeholder='Enter company name' onChange={(e)=>{setCompany(e.target.value)}} name='company' /><br />
                    <input type='text' placeholder='Enter student details' onChange={(e)=>{setDetails(e.target.value)}} name='studDetails' /><br />
                    <button onClick={handleUpload}>Upload</button>
                </div>
            </div>
        </div>
    );
}
export default AddStudents;