import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

// const GITHUB_URL = process.env.REACT_APP_GITHUB_API
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


export const GithubProvider = ({children}) => {

    const initialState = {
        users:[],
        user:{},
        repos:[],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)
  

    // //Get  users
    // const searchUsers = async (text) => {
    //     setLoading()


    //     const params = new URLSearchParams({
    //         q: text,
    //     })


    //     const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    //         headers: {
    //             Authorization: ` token ${GITHUB_TOKEN}`

    //         }
    //     })
    //     const { items } = await response.json()

    //    dispatch({
    //     type: 'GET_USERS',
    //     payload:items,
    //    })
    // }

    // //Get  user
    // const getUser = async (login) => {
    //     setLoading()


    //     const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    //         headers: {
    //             Authorization: ` token ${GITHUB_TOKEN}`

    //         }
    //     })

    //     if (response.status === 404){
    //         window.location = '/notfound'
    //     } else {
    //         const data = await response.json()

    //         dispatch({
    //          type: 'GET_USER',
    //          payload:data,
    //         })
    //     }

    // }

    //  //Get  users
    //  const getUserRepos = async (login) => {

    //     const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
    //         headers: {
    //             Authorization: ` token ${GITHUB_TOKEN}`

    //         }
    //     })
    //     const reposit = await response.json()

    //    dispatch({
    //     type: 'GET_REPOS',
    //     payload: reposit,
    //    })
    // }

    // //clear state
    // const clearUsers = () => {
    //     dispatch({
    //         type: 'CLEAR_USER',
    //     })
    // }
    

    // //set loading
    // const setLoading = () => {
    //     dispatch({
    //         type: 'SET_LOADING',
    //     })
    // }

    return <GithubContext.Provider value={{
        // users: state.users,
        // loading: state.loading,
        // user: state.user,
        // repos: state.repos,
        //INSTEAD
        ...state,
        dispatch,
        // getUserRepos,
        // searchUsers,
        // clearUsers,
        // getUser
    
    }}>
        {children}
    </GithubContext.Provider>

}

export default GithubContext