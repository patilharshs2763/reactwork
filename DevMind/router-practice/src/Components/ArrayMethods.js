import React from 'react'

const ArrayMethods = () => {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();
    console.log("After sort: ", fruits)
    console.log("After reverse: ", fruits.reverse())

    const nums = [10, 1, 11, 105, 15, 24, 44, 21]
    console.log("Sorting num:", nums.sort())    //sorting alphabetically
    const nums1 = [10, 1, 11, 105, 15, 24, 44, 21]
    console.log("Sorting num:", nums1.sort(function (a, b) { return a - b }))

    return (
        <div>
        </div>
    )
}

export default ArrayMethods
