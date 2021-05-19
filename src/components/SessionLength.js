import React from 'react';

function SessionLength(props) {
  function decreaseSession() {
    if (props.sessionLength === 1) {
      return;
    }
    props.decreaseSession();
  }

  function increaseSession() {
    if (props.sessionLength === 120) {
      return;
    }
    props.increaseSession();
  }
  return (
    <div className='break-wrapper'>
      <h4 className='break-heading'>Session Length</h4>
      <div className='break-control'>
        <button
          disabled={props.isPlay === true ? 'disabled' : ''}
          onClick={decreaseSession}
          className='up-down-btn'
        >
          -
        </button>
        <p>{props.sessionLength}</p>
        <button
          disabled={props.isPlay === true ? 'disabled' : ''}
          onClick={increaseSession}
          className='up-down-btn'
        >
          +
        </button>
      </div>
    </div>
  );
}

export default SessionLength;
