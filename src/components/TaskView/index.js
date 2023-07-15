import {Component} from 'react'
import TabItem from '../TabItem'

import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class TaskView extends Component {
  render() {
    return (
      <div className="task-container">
        <div className="createTask-container">
          <h1 className="heading">Create Task</h1>

          <form className="form-container">
            <label htmlFor="taskInput" className="task-input">
              Task
            </label>
            <input
              type="text"
              className="input-text"
              id="taskInput"
              placeholder="Enter the tasks here"
            />
            <label htmlFor="taskList" className="task-list">
              Tags
            </label>
            <select className="options-list" id="taskList">
              {tagsList.map(each => (
                <option value={each.optionId}>{each.displayText}</option>
              ))}
            </select>
            <button type="submit" className="submit-btn">
              Add Task
            </button>
          </form>
        </div>
        <div className="task-list-container">
          <h1 className="tags">Tags</h1>
          <ul className="tabs-container">
            {tagsList.map(each => (
              <TabItem key={each.optionId} tabDetails={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default TaskView
