import React from 'react'
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {
  increaseBreak, 
  increaseSession,
  tickBreak,
  tickSession,
  setBreak,
  toggleBreak,
  } from './actions/index.js';
import {connect} from 'react-redux'

const BreakTimer = () => {
  const breakTimer = useSelector(state => state.break.time); 
  return(
      <div className="break-timer-container">
        <div id="break-timer-label">Break</div>
        <div id="break-timer">{breakTimer}</div>
      </div>
  );
}

const SessionTimer = () => {
  const sessionTimer = useSelector(state => state.session);
  return(  
    <div id="session-timer-container">
      <div id="session-timer-label">Session</div>
      <div id="session-timer">{sessionTimer}</div>      
    </div>
  );
}

const TimerControls = (props) =>{
  const dispatch = useDispatch();
  const breakTimer = useSelector(state => state.break.time);
  const isRunning = useSelector(state => state.break.isRunning);
  let startPauseButton = <button></button>;

  if (breakTimer < 0){
    props.stopTimer();
    dispatch(setBreak(0));
  }else if(breakTimer === 0){
    startPauseButton = <button id="start-pause-button" onClick={props.resetTimer}>Reset</button>;  

  }else{
    startPauseButton = isRunning ? 
      <button id="start-pause-button" onClick={props.stopTimer}>Pause</button> :
      <button id="start-pause-button" onClick={props.startTimer}>Start</button>;   

  }
  

  return(
        <div className="timer-buttons-container">
          <button id="session-decrement">-</button>
          <button id="break-decrement">-</button>
          <button onClick={() => dispatch(increaseBreak())} id="break-increment">+</button>
          <button onClick={() => dispatch(increaseSession())} id="session-increment">+</button>
          {startPauseButton}
        </div>
    )
}


const INTERVAL_LENGTH = 1000 //in ms

class App extends React.Component{
  constructor(props){
    super(props);


    this.tick = this.tick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  componentWillUnmount(){
    if(!this.interval) return;
    clearInterval(this.interval);
  }

  startTimer(){
    this.interval = setInterval(this.tick, INTERVAL_LENGTH);
    this.props.toggleBreak();
  }

  tick(){
    this.props.tickBreak();
  }

  stopTimer(){
    clearInterval(this.interval);
    this.props.toggleBreak();
  }

  resetTimer(){
    this.props.setBreak(5);
  }

  render(){
    return(
      <div>
        <BreakTimer />
        {/* Session Timer */}
        <SessionTimer />
        <TimerControls startTimer={this.startTimer} stopTimer={this.stopTimer} resetTimer={this.resetTimer}/>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  break: state.break
});

const mapDispatchToProps = () => ({
  tickBreak,
  setBreak,
  toggleBreak,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(App);

