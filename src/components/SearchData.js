import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from "react-bootstrap"
import { bookMarks } from '../action'
export default function Description(index) {
  const search = useSelector((state) => state.searchNewsData.searchdata)
  const Books = useSelector((state) => state.BookMarks.bookmarks)
  const dispatch = useDispatch();
  console.log(Books);
  const bookMark = (data) => {
    dispatch(bookMarks(data))
  }
  return (
    <div className="text-center">
      <h1>Description</h1>

      {search.map((news) =>
        <>{news.articles.map((data, index) =>
          <li >
            <br />
            <button>{data.title}</button> <Button onClick={() => bookMark(data.title)}>*</Button><br />
          </li>
        )}

        </>)}



    </div>
  )
}
