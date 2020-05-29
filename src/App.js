import React from "react"
import { Router, Route } from 'react-router-dom'
import createHistory from "history/createBrowserHistory"
import { createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { Provider } from "react-redux"
import './App.css'
import GQL from "./GQL"

const Header = (props) => {
  return (
    <header className="header">
      <a href="#" className="mainLink"><h1>PlayerProject.com</h1></a>
      <div className="searchWrap">
        <input type="text" placeholder="Search for the song, album or artist name..." className="search"></input>
        <a href="#" className="searchButton icon-search"> Search</a>
      </div>
    </header>
  )
}

const Menu = (props) => {
  return (
    <section className="menu">
      <div className="topMenu">
        <h2>Music by genres:</h2>
        <a href="#" className="favourite icon-heart"> Favourite</a>
      </div>
      <div className="bottomMenu">
        <a className="menuElement" href="#">Rock</a>
        <a className="menuElement" href="#">Pop</a>
        <a className="menuElement" href="#">Rap</a>
        <a className="menuElement" href="#">Metal</a>
        <a className="menuElement" href="#">Saundtracks</a>
        <a className="menuElement" href="#">Electrick</a>
        <a className="menuElement" href="#">Chanson</a>
        <a className="menuElement" href="#">Another</a>
      </div>
      <p className="info">
        PlayerProject.com - an archive of mp3 files, music of all styles and directions.
        With PlayerProject.com, finding and downloading a track of your favorite
        artist is easy. All you need to do is enter the name of the song into the search,
        select a song and press the play or download button. Also, playlists are available
        to the user. Click on + next to the song and the track will be added to your favorite songs.
        Speed ​​and number of downloads is not limited. Enjoy listening and downloading!
      </p>
    </section>
  )
}

const Main = () => {
  return (
    <section className="trackList">
      <div>
        aaa
      </div>
      <div>
        eee
      </div>
    </section>
  )
}

const Player = () => {
  return (
    <section className="player">
      <span className="icon-first"></span>
      <span className="icon-play3 play"></span>
      <span className="icon-last"></span>
      <div className="track"></div>
      <div className="volume"></div>
      <span className="icon-volume-medium"></span>
    </section>
  )
}

function App() {
  return (
    <>
      <Router history={createHistory()}>
        <div className="wrapper">
          <Header />
          <Menu />
          <Main />
          <Player />
        </div>
      </Router>
    </>
  )
}

export default App
