import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
    const formatUsername = (userName) => `@${userName}`
    return (
        <section className='App'>
            <TwitterFollowCard 
            formaUsername={formatUsername}
             isFollowing 
             userName="midudev"
              name="Miguel Angel Durán" />

            <TwitterFollowCard 
            formaUsername={formatUsername} 
            isFollowing={false} 
            userName="pheralb" 
            name="Pablo Hernandez" />
           
            <TwitterFollowCard
             formaUsername={formatUsername} 
             isFollowing
              userName="vxnder" 
              name="Vanderhart" />
        </section>
    )
}