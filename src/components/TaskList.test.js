import { render } from '@testing-library/react'; //allows you to reuse your Storybook stories in your unit tests
import { composeStories } from '@storybook/testing-react';
import * as TaskListStories from './TaskList.stories';

//👇 composeStories will process all information related to the component (e.g., args)
const { WithPinnedTasks } = composeStories(TaskListStories);

it('renders pinned tasks at the start of the list', () => {
  const { container } = render(<WithPinnedTasks />);

  expect(
    container.querySelector(
      '.list-item:nth-child(1) input[value="Task 6 (pinned)"]'
    )
  ).not.toBe(null);
});
