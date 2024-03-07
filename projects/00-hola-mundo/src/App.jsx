import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const formatUsername = (userName) => `@${userName}`
    return (
        <section className='App'>
            <TwitterFollowCard
                formaUsername={formatUsername}
                isFollowing
                userName="midudev">
                Miguel Angel Durán
            </TwitterFollowCard>

            <TwitterFollowCard
                formaUsername={formatUsername}
                isFollowing={false}
                userName="pheralb">
                Pablo Hernandez 
            </TwitterFollowCard>

            <TwitterFollowCard
                formaUsername={formatUsername}
                isFollowing
                userName="vxnder">
                Vanderhart 
            </TwitterFollowCard>
        </section>
    )
}