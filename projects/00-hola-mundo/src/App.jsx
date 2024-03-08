import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const formatUsername = (userName) => `@${userName}`

    const [name, setName] = useState('midudev')

    console.log('render with name: ', name)
   
    return (
        <section className='App'>
            <TwitterFollowCard
                formaUsername={formatUsername}
                
                userName={name}>
                Miguel Angel Durán
            </TwitterFollowCard>

            <TwitterFollowCard
                formaUsername={formatUsername}
                
                userName="pheralb">
                Pablo Hernandez 
            </TwitterFollowCard>

            <TwitterFollowCard
                formaUsername={formatUsername}
                
                userName="vxnder">
                Vanderhart 
            </TwitterFollowCard>

            <button onClick={() => setName('Simon')}> 
            Cambio Nombre
            </button>
        </section>
    )
}