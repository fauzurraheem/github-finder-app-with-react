import React from 'react'
import { useContext} from 'react'
import Spinner from '../layouts/Spinner'
import UserItem from './UserItem'
import  GithhubContext from '../Context/github/GithubContext.js'

function UsersResult() {
    const {users, loading} = useContext(GithhubContext)

   

   

    if(!loading){
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-col-2'>
                {users.map((user) => (
                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
          )
    } else{
        return <Spinner />
    }


  
}

export default UsersResult
