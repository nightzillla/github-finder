import { createContext, useState } from "react";
import githubReducer from "../../context/github/GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        loading: false,
    }
    
    const [state, dispatch] = useReducer (githubReducer, initialState)

    // Get initial users (testing purposes)
    const fetchUsers = async () => {
        setLoading()
      
      const response = await fetch(`${GITHUB_URL}/users`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN }`
        }
      })
      
      const data = await response.json()
      console.log(data)
      setUsers(data)
      setLoading(false)
    }

      return <GithubContext.Provider value={{
        users,
        loading,
        fetchUsers,
        }}>
        {children}
      </GithubContext.Provider>
    
}
export default GithubContext