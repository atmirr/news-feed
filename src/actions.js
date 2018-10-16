import {C} from './constants'
import fetch from "isomorphic-fetch";
import {batchActions} from 'redux-batched-actions';

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

export const clearPosts = () => ({
    type: C.CLEAR_POSTS
})

export const loadNewsData = () => (dispatch) => {

    const date = new Date()
    const today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`

    fetch('https://newsapi.org/v2/everything?' +
        `q=apple&` +
        `from=${today}&` +
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

export const loadSearchResult = (query) => (dispatch) => {

    const date = new Date()
    const today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`

    fetch('https://newsapi.org/v2/everything?' +
        `q=${query}&` +
        `from=${today}&` +
        'sortBy=popularity&' +
        'apiKey=472373641ff14d6bb3a36ea8812fe788')
        .then(result => result.json())
        .then(response => response.articles)
        .then( dispatch(clearPosts()) )
        .then(articles => {
            articles.map( article => {
                    const {title, description, publishedAt, urlToImage} = article
                    return dispatch(addPost(title, description, publishedAt, urlToImage))
            })
        })

}