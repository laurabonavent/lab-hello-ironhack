import React from 'react';
import Landing from './Landing';
import Description from './Description';
import "./app.css"



const App = () => {
  return (<div><div><Landing></Landing></div><div className="description"><Description></Description></div></div>)
}

export default App