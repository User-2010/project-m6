import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { fetchUsers } from '../api/users'

export default function UsersPage() {
  const { data: users, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })

  if (isLoading) return <p className="loading">Загрузка...</p>

  return (
    <div className="container user_card">
      <h1 className="title">Список пользователей</h1>
      <ul className="users-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <Link to={`/user/${user.id}`} className="user-link">{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}