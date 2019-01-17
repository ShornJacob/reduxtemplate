//dispatching an action

/src/components/Tasks
Tasks has both mapStateToProps and mapDespatchToProps
it gets tasks from mapStateToProps and addTask from mapDespatchToProps
tasks from store is an array of objects

Tasks returns an array of tasks using the map functios and a button constained inside a div
 {tasks.map((task, index) => <Task key={index} {...task} />  )  }
 index is optional parameter required for key to prevent the warning
Each child in an array or iterator should have a unique "key" prop.

<Task key={index} {...task} />


/src/components/Task

const Task = ({ userId,id,title,body }) => {
}

Tasks in an array of object
Task is an object
Task now has to guess what is spread by {...task} and given to it as props


Proptypes testing can also be added easily
import PropTypes from 'prop-types';

Task.propTypes = {
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  };

src/reducers/taskReducer.test.js
Jest file can be added easily in an app created by create-react-app

