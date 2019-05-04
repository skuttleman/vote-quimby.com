import React from 'react';
import logo from './logo.png';
import intro from './intro.mp3';
import './App.css';


const playIntro = () => {
  let audio = document.getElementById('audio-controls');
  audio.src = intro;
  audio.play();
  return new Promise(resolve => {
    audio.addEventListener('error', resolve);
    audio.addEventListener('ended', resolve);
    audio.addEventListener('timeupdate', event => {
      if (audio.currentTime >= 3.3333) resolve(event);
    });
  });
};

class App extends React.Component {
  render() {
    if (this.state && this.state.entered) {
      return (
        <div style={{opacity: this.state && this.state.played ? 1 : 0}} className="app">
          <img className="app-logo" src={logo} alt="Vote Quimby Logo" />
          <h1>Site coming soon…</h1>
        </div>
      );
    }
    return (
      <div className="app">
        <button className="button is-link" onClick={() => this.playIntro()}>
          Enter
        </button>
      </div>
    );
  }

  playIntro() {
    this.setState({entered: true});
    playIntro()
      .then(() => this.setState({played: true}));
  }
}

export default App;
