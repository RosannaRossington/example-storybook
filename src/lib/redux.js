// A simple Redux store that responds to actions that change the state of tasks
//TODO: store/actions/reducer separated into different files
import { createStore } from 'redux';

//ACTIONS
//changes that can happen to the store
export const actions = {
  ARCHIVE_TASK: 'ARCHIVE_TASK',
  PIN_TASK: 'PIN_TASK',
};

// The action creators bundle actions with the data required to execute them
export const archiveTask = (id) => ({ type: actions.ARCHIVE_TASK, id });
export const pinTask = (id) => ({ type: actions.PIN_TASK, id });

//REDUCERS
//change state of tasks
const taskStateReducer = (taskState) => {
  return (state, action) => {
    return {
      ...state,
      tasks: state.tasks.map((task) =>
        task.id === action.id ? { ...task, state: taskState } : task
      ),
    };
  };
};

// The reducer describes how the contents of the store change for each action
export const reducer = (state, action) => {
    switch (action.type) {
      case actions.ARCHIVE_TASK:
        return taskStateReducer('TASK_ARCHIVED')(state, action);
      case actions.PIN_TASK:
        return taskStateReducer('TASK_PINNED')(state, action);
      default:
        return state;
    }
  };

  // The initial state of our store when the app loads - irl a server request
const defaultTasks = [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
  ];

  // We export the constructed redux store
export default createStore(reducer, { tasks: defaultTasks });