import './index.css'

const TodoItem = props => {
  const {details, deleteTodoItem} = props
  const {id, title} = details

  const handleClick = () => {
    deleteTodoItem(id)
  }

  return (
    <li>
      <p>{title}</p>
      <button type="button" className="btn" onClick={handleClick}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
