import React, { useEffect, useState } from 'react'

const Test = () => {

    const [student, setStudent] = useState('');


    useEffect(() => {
        onFunload();
    }, []);
    const onFunload = () => {
        const studentData = {
            name: 'harsh',
            roll: 70,
            batch: 'CSE'
        };
        console.log("student:", studentData);
        setStudent(studentData);
    }
    return (
        <>
            {/* <p>{student.name}</p>
            <p>{student.roll}</p>
            <p>{student.batch}</p> */}
        </>
    )
}

export default Test
