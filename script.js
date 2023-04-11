'use strict';

// getting the elements
const inputEl = document.getElementById('input');
const listEl = document.getElementById('list-container');

//adding task
function addTask() {
  if (inputEl.value === '') {
    alert('Please write a to do');
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputEl.value;
    listEl.appendChild(li);

    //adding a delete button to every task added
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }

  //clearing input box every click
  inputEl.value = '';
  saveData();
}

listEl.addEventListener(
  'click',
  function (e) {
    //when a task is clicked, it will be marked as "done"
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
      saveData();
    }
    //when the X button is clicked, it removes the task
    else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false,
);

//storing the tasks in browser even after refreshing
function saveData() {
  localStorage.setItem('data', listEl.innerHTML);
}

//display the data whenever we refresh the browser
function showTask() {
  listEl.innerHTML = localStorage.getItem('data');
}

showTask();
