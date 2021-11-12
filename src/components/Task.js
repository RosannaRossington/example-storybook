import React from 'react';
import PropTypes from 'prop-types';



const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  /**the shape of data that a component expects */
Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,
  /** Event to change the task to pinned */
  onPinTask: PropTypes.func,
};
  return (
    <div className={`list-item ${state}`}>
      <label className='checkbox'>
        <input
          type='checkbox'
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name='checked'
        />
        <span className='checkbox-custom' onClick={() => onArchiveTask(id)} />
      </label>
      <div className='title'>
        <input
          type='text'
          value={title}
          readOnly={true}
          placeholder='Input title'
        />
      </div>
      <div className='actions' onClick={(event) => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Task;
