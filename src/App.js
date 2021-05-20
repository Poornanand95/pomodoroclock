import React, { Fragment } from 'react';
import './components/home.css';
import Clock from './components/Clock';
// import './script';
var taskvalue = '';

function Home() {
  function handleInputSpace(e) {
    taskvalue = e.target;
    // console.log(taskvalue);
  }

  function handleAddBtn(e) {
    if (taskvalue.value) {
      e.preventDefault();
      console.log('aur kya hal chal');
      makeHTML();
      console.log(typeof taskvalue.value);
      taskvalue.value = '';
    }
  }

  function makeHTML() {
    let div = document.createElement('div');
    let checkbox = document.createElement('input');
    let taskcheckwrapper = document.createElement('div');

    var taskListSpace = document.getElementById('taskListSpace');

    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('class', 'check-box');

    div.setAttribute('class', 'each-task');
    div.innerText = taskvalue.value;
    if (taskListSpace) {
      taskcheckwrapper.appendChild(div);
      taskcheckwrapper.appendChild(checkbox);
      taskListSpace.appendChild(taskcheckwrapper);
    }
    taskcheckwrapper.setAttribute('class', 'task-check-wrapper');

    div.addEventListener('click', handleTaskClick);
  }

  function handleTaskClick(e) {
    const pintask = document.querySelector('.current-task');
    console.log(pintask);
    pintask.innerText = e.target.innerText;
  }
  function handleUnpinBtn(e) {
    const pintask = document.querySelector('.current-task');
    console.log(pintask);
    pintask.innerText = "Add one task from tasks' list";
  }

  function handleClearBtn() {
    const taskdivs = document.querySelectorAll('.task-check-wrapper');
    const tasklist = document.querySelector('.task-list');
    console.log(taskdivs);
    console.log(tasklist);
    taskdivs.forEach((task) => {
      tasklist.removeChild(task);
    });
  }
  return (
    <Fragment>
      <div className='container'>
        <div className='left-wrapper'>
          <h3 className='schedule-heading'>Schedule Today's Tasks</h3>
          <h4 className=''>Never Settle !</h4>
          <div className='input-task-area'>
            <input
              onChange={handleInputSpace}
              id='addInputSpace'
              className='search-input'
              type='search'
              placeholder='Enter your task'
            />
            <input
              onClick={handleAddBtn}
              id='addBtn'
              className='submit-btn'
              type='submit'
              value='Add task'
            />
            <input
              onClick={handleClearBtn}
              id='clearBtn'
              className='submit-btn'
              type='submit'
              value='Clear All'
            />
          </div>
          <div className='help'>
            Click the task to pin <i class='fas fa-thumbtack'></i> on the clock
          </div>
          <div id='taskListSpace' className='task-list'></div>
        </div>
        <div className='right-wrapper'>
          <div className='pinned-area'>
            <div className='current-task-heading'>Pinned Task</div>
            <div className='current-task'> Add one task from tasks' list</div>
            <input
              onClick={handleUnpinBtn}
              className='submit-btn unpin-btn'
              type='submit'
              value='Unpin'
            />
          </div>
          <Clock />
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
