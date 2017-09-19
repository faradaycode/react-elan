import React from "react"
import { connect } from "react-redux"

import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser());
//    this.props.dispatch(setUserName("william"));
  }

  fetchTweets() {
    this.props.dispatch(fetchTweets())
  }

  render() {
    const { user, tweets } = this.props;

    if (!tweets.length) {
      return <a onClick={this.fetchTweets.bind(this)}>load tweets</a>
    }

    const mappedTweets = tweets.map((tweet, index) => 
        <tr key={index+1}>
            <td>{index+1}</td>
            <td>{tweet.npm}</td>
            <td>{tweet.nama}</td>
            <td>{tweet.kls}</td>
        </tr>
   )

    return <div className="container">
        <table className="table table-bordered">
            <tbody>
            <tr>
                <td>Name : {user.name}
                </td>
                <td>Age : {user.age}
                </td>
            </tr>
            </tbody>
        </table>
                <table className="table table-bordered">      
                    <thead>
                    <tr>
                    <td>No.</td>
                    <td>Npm</td>
                    <td>Nama</td>
                    <td>Kelas</td>
                    </tr>
                    </thead>
                    <tbody>{mappedTweets}</tbody>                            
                </table>                            
            </div>
  }
}
