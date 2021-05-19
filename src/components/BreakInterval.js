import React from 'react';
import './clock.css';
function BreakInterval(props) {
  function decreaseCounter() {
    if (props.breakInterval === 1) {
      return;
    }
    props.decreaseBreak();
  }

  function increaseCounter() {
    if (props.breakInterval === 60) {
      return;
    }
    props.increaseBreak();
  }

  return (
    <div className='break-wrapper'>
      <h4 className='break-heading'>Break Length</h4>
      <div className='break-control'>
        <button
          disabled={props.isPlay === true ? 'disabled' : ''}
          onClick={decreaseCounter}
          className='up-down-btn'
        >
          -
        </button>
        <p>{props.breakInterval}</p>
        <button
          disabled={props.isPlay === true ? 'disabled' : ''}
          onClick={increaseCounter}
          className='up-down-btn'
        >
          +
        </button>
      </div>
    </div>
  );
}

export default BreakInterval;
