import { useQuery } from '@tanstack/react-query'
import { fetchToDoTasks } from '../apis/todo'
// import { useParams } from 'react-router-dom'

export default function ToDo() {
  // const { tasks } = useParams()
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['toDo'],
    queryFn: () => fetchToDoTasks(),
  })

  if (isLoading) {
    return (
      <>
        <h3>Loading</h3>
      </>
    )
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  if (data) {
    return (
      <div>
        <h2>To Do List</h2>
        <div>
          {data.items.map((tasks) => (
            <div key={tasks.id}>{tasks.task}</div>
          ))}
        </div>
      </div>
    )
  }
}
