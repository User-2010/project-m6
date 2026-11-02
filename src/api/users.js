
export const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return response.json()
}

export const fetchUserById = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  return response.json()
}