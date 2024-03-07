import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const formatUsername = (userName) => `@${userName}`
   
    return (
        <section className='App'>
            <TwitterFollowCard
                formaUsername={formatUsername}
                
                userName="midudev">
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
        </section>
    )
}