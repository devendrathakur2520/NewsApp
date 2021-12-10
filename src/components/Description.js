import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
export default function Description(index) {

    const { desc } = useParams()
    console.log(desc);
    return (
        <div>
            <h1>Description</h1>

            <li>
                {desc}

            </li>



        </div>
    )
}
