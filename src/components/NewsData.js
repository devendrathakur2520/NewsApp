import Button from '@restart/ui/esm/Button'
import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { searchNews } from '../action'
import { newsDataRequest } from '../thunk/NewsApi'
import { newsArticlesRequest } from '../thunk/searchNewsTitle'
export default function NewsData() {
	const history = useHistory();
	const data = useSelector((state) => state.NewsData.data)
	const dispatch = useDispatch()
	const searchData = useSelector((state) => state.searchNewsData.search)
	const handleChange = (e) => {
		const { name, value } = e.target;
		dispatch(searchNews({ [name]: value }))
	}

	const onSubmit = (e) => {
		dispatch(newsArticlesRequest(searchData.search))
		history.push("/SearchData")
	}

	useEffect(() => {
		dispatch(newsDataRequest())
	}, [])


	return (
		<>
			<div>
				<div className="text-center">
					<h1>आज का भारत</h1>
					<br />
					<input type="text" name="search" value={searchData.search} onChange={handleChange} />
					<button type="button" onClick={onSubmit}>Search</button>
					<h1>Today Headlines</h1>
				</div>
				{data.map((news) =>
					<>{news.articles.map((data, index) =>
						// <li ><br/>
						// 	<a href={`/Description/${data.description}`} >{data.title}</a>
						// 	<br/>
						// 	<img class="card-img-top" src={data.urlToImage} alt="news img" height="50%"/>
						// </li>
						<Card className="text-center">
							<Card.Body>
								<Card.Title>title </Card.Title>
								<Card.Text>
									<a href={`/Description/${data.description}`} ><h3>{data.title}</h3></a>
									<br />
									<img class="card-img-top" src={data.urlToImage} alt="news img" height="40%" />
								</Card.Text>
							</Card.Body>
						</Card>
					)}

					</>)}
			</div>
		</>
	)
}
