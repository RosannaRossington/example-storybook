import React from 'react';
import Task from './Task';

//Use action() to stub  the functions and state in context of the app. 


//Component description and sidebar reference
export default {
  component: Task,
  title: 'Task!',
};

//Test states
const Template = (args) => <Task {...args} />;
//make a copy of functions using .bind
export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};