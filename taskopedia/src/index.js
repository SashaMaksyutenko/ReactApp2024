import React from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById('root'))
function MainHeader () {
  return <h1>React App</h1>;
}
function SubHeader () {
  return <p>This is very exciting React App</p>;
}
function Header () {
  return (
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  );
}
function MainBody () {
  return (
    <div>
      <p>We bulding taskoPedia App</p>
      <ul>
        <li>call Ben</li>
        <li>go to the shop</li>
      </ul>
    </div>
  )
}
function Footer () {
  return <p style={{ color: 'gray', backgroundColor: 'black' }}>Happy time for coding</p>;
}
root.render(
  <div>
    <Header />
    <MainBody />
    <Footer />
  </div>
)
