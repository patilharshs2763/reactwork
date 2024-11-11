import React, { useState } from 'react'

const InputFilter = () => {
    const list = [
        "Harsh",
        "Rohan",
        "Harshvardhan",
        "Kartika",
        "Rohini",
        "Kartik",
        "Rajesh",
        "Raj",
        "Vaibhavraj"
    ];

    const [filterList, setFilterList] = useState(list);

    const handleSearch = (event) => {

        if (event.target.value === "") {
            setFilterList(list);
            return;
        }
        const filteredValues = list.filter(
            (item) =>
                // item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
                new RegExp(event.target.value, 'i').test(item)
        );
        setFilterList(filteredValues);
    };
    return (
        <div className="main">
            <div>
                Search: <input name="query" type="text" onChange={handleSearch} />
            </div>
            {filterList &&
                filterList.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            {/* {filterList.map((item, index) => (
                <div key={index}>{item}</div>
            ))} */}
        </div>
    )
}

export default InputFilter
