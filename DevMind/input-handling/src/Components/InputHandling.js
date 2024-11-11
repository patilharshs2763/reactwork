import React, {useState} from 'react'

const InputHandling = () => {
    const [name, setName] = useState("");
    const handleInput = (e) => {
        setName(e.target.value)
    }
    
    return (
        <div>
            <form>
                <label>Enter your name:</label>
                <input
                    type='text'
                    value={name}
                    onChange={handleInput}
                // onChange={(e) => setName(e.target.value)}
                />
            </form>
        </div>
    )
}

export default InputHandling
