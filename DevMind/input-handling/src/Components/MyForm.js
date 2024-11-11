import React, { useState } from 'react';

function MyForm() {
    const [formData, setFormData] = useState({
        name: '',
        rollNo: '',
        age: '',
        email: '',
        password: '',
        mobileNumber: '',
        gender: '',
        agreed: false
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setSubmitted(true);
    };

    return (
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Roll No:</label>
                    <input
                        type="number"
                        name="rollNo"
                        value={formData.rollNo}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Mobile Number:</label>
                    <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Gender:</label>
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="agreed"
                            checked={formData.agreed}
                            onChange={handleChange}
                        />
                        I agree to the terms and conditions
                    </label>
                </div>
                <button type="submit" disabled={!formData.agreed}>Submit</button>
            </form>
            {submitted && (
                <div>
                    <h2>Submitted Details</h2>
                    <p>Name: {formData.name}</p>
                    <p>Roll No: {formData.rollNo}</p>
                    <p>Age: {formData.age}</p>
                    <p>Email: {formData.email}</p>
                    <p>Password: {formData.password}</p>
                    <p>Mobile Number: {formData.mobileNumber}</p>
                    <p>Gender: {formData.gender}</p>
                    <p>Agreed to Terms: {formData.agreed ? 'Yes' : 'No'}</p>
                </div>
            )}
        </div>


    );
}

export default MyForm;
