import { createContext } from "react";
import {useState} from 'react'



const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({childern}) => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchUsers = async () => {
      const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        }
      })

      const data = await response.json()
      setUsers(data)
      setLoading(false)
    }

      return <GithubContext.Provider value={{
        users,
        loading,
        fetchUsers,
        }}>
        {childern}
      </GithubContext.Provider>
    
}
export default GithubContext