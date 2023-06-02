// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {subsribedStatus: false}

  isSubscribed = () => {
    const {subsribedStatus} = this.state
    this.setState({subsribedStatus: !subsribedStatus})
  }

  render() {
    const {subsribedStatus} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>

        {subsribedStatus ? (
          <button className="button" onClick={this.isSubscribed}>
            Subscribed
          </button>
        ) : (
          <button className="button" onClick={this.isSubscribed}>
            Subscribe
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
