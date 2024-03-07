export function TwitterFollowCard ({formaUsername, userName, children, isFollowing}){
const imageSrc = `https://unavatar.io/${userName}`
    return(

<article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="El avatar de midudev"
                    src={imageSrc} />
                    
                <div className='tw-followCard-info'>
                    <strong>
                        {children}
                    </strong>
                    <span className='tw-followCard-infoUserName'>{formaUsername(userName)}</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}