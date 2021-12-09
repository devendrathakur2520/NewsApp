import React from 'react'
import { useSelector } from 'react-redux'
export default function Description(index) {
    const desc = useSelector((state) => state.NewsData.data)
    //console.log("hqkjskqaskqahkqwdjqwews",desc.articles[0].description);
    console.log("sdsfjsdf", index);
    return (
        <div>
            <h1>ddddd</h1>
            {desc.map((news) =>
                <>
                    <li>
                        {news.articles[index]}
                    </li>


                </>)}
        </div>
    )
}
