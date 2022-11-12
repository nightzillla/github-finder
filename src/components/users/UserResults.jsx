import React from 'react'
import {useEffect} from 'react'

function UserResults() {



    useEffect(() =>{
        fetchUsers()
    }, [])

    const fetchUsers = async() => {

        const GIT_HUB = process.env.REACT_APP_GITHUB_URL
        const GIT_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


        // const rep = await fetch(`${GIT_HUB}/users`, {
        //     headers: {
        //     Authorization : `token ${GIT_TOKEN}`
        //     }
        // })
        // console.log(rep)
        
        // const data = await rep.json();
        // console.log(data);

        const rep = await fetch(`${GIT_HUB}/users`, {
            headers: {
            'Authorization' : `token ${GIT_TOKEN}`,
            'Content-Type' : 'application/json'
            }
        })
        console.log(rep)
        
        const data = await rep.json();
        console.log(data);

        // fetch(`${GIT_HUB}/user`, 
        //             {headers: {
        //             Authorization: `token ${GIT_TOKEN}`
        //             }
        //             })
        // .then((response) => response.json())
        // .then((data) => console.log(data))



        // const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
        //     headers: {
        //         Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        //     },
        // })

        // const data = await response.json()
        // console.log(data);
    }
  return (
    <div>UserResults</div>
  )
}

export default UserResults