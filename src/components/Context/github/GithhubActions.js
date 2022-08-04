const GITHUB_URL = process.env.REACT_APP_GITHUB_API
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


//Get  users
export const searchUsers = async (text) => {

    const params = new URLSearchParams({
        q: text,
    })


    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
        // headers: {
        //     Authorization: ` token ${GITHUB_TOKEN}`

        // }
    })
    const { items } = await response.json()

   return items
}

//Get  user
 export const getUser = async (login) => {
    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
        // headers: {
        //     Authorization: ` token ${GITHUB_TOKEN}`

        // }
    })

    if (response.status === 404){
        window.location = '/notfound'
    } else {
        const data = await response.json()
        return data
    }

}

 //Get  users
  export const getUserRepos = async (login) => {

    const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
        // headers: {
        //     Authorization: ` token ${GITHUB_TOKEN}`

        // }
    })
    const reposit = await response.json()
   return reposit
}
