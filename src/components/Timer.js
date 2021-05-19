import React, { Component } from 'react';

export class Timer extends Component {
  constructor() {
    super();

    this.state = {
      isSession: true,
      timerSecond: 0,
      intervalId: 0,
    };
    this.playTimer = this.playTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
  }

  playTimer() {
    let intervalId = setInterval(this.decreaseTimer, 1000);
    this.props.onPlayStopTimer(true);
    this.setState({
      intervalId: intervalId,
    });
  }

  stopTimer() {
    clearInterval(this.state.intervalId);
    this.props.onPlayStopTimer(false);
  }
  resetTimer() {
    this.stopTimer();
    this.props.resetTimer();
    this.props.onPlayStopTimer(false);
    this.setState({
      timerSecond: 0,
      isSession: true,
    });
  }

  decreaseTimer() {
    switch (this.state.timerSecond) {
      case 0:
        if (this.props.timerMinute === 0) {
          if (this.state.isSession) {
            this.setState({
              isSession: false,
            });
            this.props.toggleInterval(this.state.isSession);
          } else {
            this.setState({
              isSession: true,
            });
            this.props.toggleInterval(this.state.isSession);
          }
        } else {
          this.props.updateTimerMinute();
          this.setState({
            timerSecond: 59,
          });
        }
        break;
      default:
        this.setState((prevState) => {
          return {
            timerSecond: prevState.timerSecond - 1,
          };
        });
        break;
    }
  }

  onPlayStopTimer() {
    this.props.onPlayStopTimer();
  }
  render() {
    return (
      <section>
        <div className='clock-container'>
          <h4>{this.state.isSession === true ? 'Session' : 'Break'}</h4>
          <div className='time-display'>
            <span>{this.props.timerMinute}</span>
            <span>:</span>
            <span>
              {this.state.timerSecond === 0
                ? '00'
                : this.state.timerSecond < 10
                ? '0' + this.state.timerSecond
                : this.state.timerSecond}
            </span>
          </div>
        </div>
        <div className='timer-control-btn'>
          <input
            disabled={this.props.isPlay === true ? 'disabled' : ''}
            className='submit-btn'
            type='submit'
            value='Start'
            onClick={this.playTimer}
          />
          <input
            className='submit-btn'
            type='submit'
            value='Stop'
            onClick={this.stopTimer}
          />
          <input
            className='submit-btn'
            type='submit'
            value='Reset'
            onClick={this.resetTimer}
          />
        </div>
      </section>
    );
  }
}

export default Timer;
