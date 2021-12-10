import React from 'react'

function BookMarks() {
  const data = JSON.parse(localStorage.getItem("BookMarks"))
  console.log("getitem", data);
  return (
    <>
      <div>
        <h1>BookMarks</h1>
        {data.map((item, index) => (
          <ul>
            <li key={index}>{item}</li>

          </ul>
        ))}

      </div>
    </>
  )
}

export default BookMarks;
