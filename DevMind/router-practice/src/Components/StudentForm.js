import React, { useState } from 'react'

const StudentForm = () => {
    const [name, setName] = useState('');

    //preventDefault()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("entered name:", name);
        alert(`Hello, ${name}!`);
    }
    const handleChange = (e) => {
        setName(e.target.value);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default StudentForm
