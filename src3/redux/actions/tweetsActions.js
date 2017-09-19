import axios from "axios";

export function fetchTweets() {
  return function(dispatch) {
//    axios.get("http://rest.learncode.academy/api/test123/tweets")
    axios.get("http://localhost:8050/5-redux-react/src/testJson.php")
      .then((response) => {
        dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
      })
  }
}

export function addTweet(npm, nama) {
  return {
    type: 'ADD_TWEET',
    payload: {
      npm,
      nama,
    },
  }
}

export function updateTweet(npm, nama) {
  return {
    type: 'UPDATE_TWEET',
    payload: {
      npm,
      nama,
    },
  }
}

export function deleteTweet(npm) {
  return { type: 'DELETE_TWEET', payload: npm}
}
