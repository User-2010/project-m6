import { useQuery } from '@tanstack/react-query'
import { useParams, Link } from 'react-router-dom'
import { fetchUserById } from '../api/users'

export default function UsersDetailsPage() {
  const { id } = useParams()

  const { data: user, isLoading } = useQuery({
    queryKey: ['user', id],
    queryFn: () => fetchUserById(id),
    enabled: !!id,
  })

  if (isLoading) return <p className="loading">Загрузка...</p>

  return (
    <div className="container">
      <Link to="/users" className="back-link">← Назад к списку</Link>
      
      <div className="user-card">
        <h1 className="user-name">{user.name}</h1>
        <p className="user-info"><strong>Email:</strong> {user.email}</p>
        <p className="user-info"><strong>Город:</strong> {user.address.city}</p>
      </div>
    </div>
  )
}