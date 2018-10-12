import {C} from './constants'
import fetch from "isomorphic-fetch";


export const addPost = (title, description, dateCreated, thumbnailUrl=null, tags=null) => ({
    type: C.ADD_POST,
    payload: {
        title,
        description,
        dateCreated,
        thumbnailUrl,
        tags
    }
})

export const removePost = id => ({
    type: C.REMOVE_POST,
    payload: id
})

export const loadNewsData = () => (dispatch) => {

    fetch('https://newsapi.org/v2/everything?' +
        'q=apple&' +
        'from=2018-10-12&' +
        'sortBy=popularity&' +
        'apiKey=472373641ff14d6bb3a36ea8812fe788')
        .then(result => result.json())
        .then(response => response.articles)
        .then(articles => {
            articles.map( article => {
                const {title, description, publishedAt, urlToImage} = article
                return dispatch( addPost(title, description, publishedAt, urlToImage) )
            })
        })

}