import React from 'react'
import {Link} from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <main className="container">
        <div>
          <h1>Welcome to Hubbbly</h1>
          <h3> The hub for your creative studio </h3>
          <div className="btn-box">
            <Link className="black-btn" to="/login"> Login </Link>
            <Link className="purple-btn" to="/signup"> Sign Up </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage