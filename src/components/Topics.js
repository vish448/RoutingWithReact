import React from 'react'

import {
  Route,
  Link
} from 'react-router-dom'

function Topic ({ match }) {
  console.log(match);
  return <h3>{match.params.topicId}</h3>
}

export default function Topics ({match}) {
  console.log(match.url)
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with react</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Probs vs State</Link>
        </li>
      </ul>
      <hr />
      <Route path={`${match.path}/:topicId`} component={Topic}></Route>

    </div>
  )
}
