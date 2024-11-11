import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './read.css';
import { Link } from 'react-router-dom';

function ReadStudent() {
    const { id } = useParams();
    const [student, setStudent] = useState([])
    useEffect(() => {
        axios.post(process.env.REACT_APP_BASE_URL+'/readID', {email: id})
            .then(res => {
                setStudent(res.data)
            })
            .catch(err => {
                console.log(err);
            });
    }, [])
    return (
        <div className="readStudentByIdMain">
        <div className="readStudentByIdContainer mt-5">
            {(
                <>
                    <p>ID:<b> {student._id}</b></p>
                    <p>Username: <b>{student.username}</b></p>
                    <p>Email:<b> {student.email}</b></p>
                    <p>Password:<b> {student.password}</b></p>
                    <Link to='/StudentDetails' className='btn btn-sm btn-outline-secondary readStudentByIdBtn'>Back</Link>
                </>
            // ) : (
            //     <p>No student data available</p>
            )}

            
        </div>
        </div>

    );
}
export default ReadStudent;