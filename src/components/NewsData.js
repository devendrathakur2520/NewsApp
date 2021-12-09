import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { searchNews } from '../action'
import { newsDataRequest } from '../thunk/NewsApi'
import { newsArticlesRequest } from '../thunk/searchNewsTitle'
export default function NewsData() {
	const data = useSelector((state) => state.NewsData.data)
	const dispatch = useDispatch()
	const searchData = useSelector((state) => state.searchNewsData.search)
	const handleChange = (e) => {
		const { name, value } = e.target;
		dispatch(searchNews({ [name]: value }))
	}

	const onSubmit = (e) => {
		dispatch(newsArticlesRequest(searchData.search))

	}

	useEffect(() => {
		dispatch(newsDataRequest())
	}, [])


	return (
		<>
			<div>
				<input type="text" name="search" value={searchData.search} onChange={handleChange} />
				<button type="button" onClick={onSubmit}>Search</button>
				<h1>Today Headlines</h1>
				{data.map((news) =>
					<>{news.articles.map((data, index) =>
						<li>
							<a href={`/Description${index}`} >{data.title}</a>
						</li>
					)}

					</>)}
			</div>
		</>
	)
}
