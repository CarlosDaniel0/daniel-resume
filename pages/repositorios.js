import React from 'react'

const Index = ({ repos, user }) => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-5xl'>Meus Repositórios eu sou o Carlos Daniel</h1>
      <p>Github stats: public repos: {user.public_repos} / public gists: {user.public_gists} / followers: {user.followers}</p>
      <h2 className='font-bold text-2xl'>Meus Repositórios no GitHub</h2>
      {repos.map(repo => {
        return <div key={repo.id} className='rounded bg-gray-200 mx-8 my-4 p-4 hover:shadow-md'>
          <h3 className='font-bold'>{repo.full_name}</h3>
          <p>{repo.language} / Stars: {repo.stargazers_count}</p>
        </div>
      })}
    </div>
  )
}
export async function getServerSideProps(context) {
  const request = await fetch(process.env.API_URL + '/api/getUser')
  const { repos, user } = await request.json()
  return {
    props: {
      currentDate: new Date().toString(),
      repos,
      user
    }
  }
}
export default Index