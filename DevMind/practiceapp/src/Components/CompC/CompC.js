import React, { useState, useEffect } from 'react'

const CompC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
      console.log("Count:", count);
    },1000);
  },[]);

  return (
    <div>
      <h1>Im in CompC</h1>
      <h1>I have rendered {count} times!</h1>
    </div>
  )
}

export default CompC



