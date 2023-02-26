import React from 'react'
import { NavigationDots, SocialMedia } from '../components'

const AppWrap = (Component, idName, classNames) => function HOC() {  
  return (                                                           
    <div id='{idName}' className={`app__container ${classNames}`}> {/* wrapper giving each component id,class and adding components */}
      <SocialMedia />
        <div className='app__wrapper app__flex'>  
            <Component />  {/* component to wrap */}
             <div className='copyright'>
                <p className="p-text">@2023 Anton Reviakin</p>
                <p className="p-text">All rights reserved</p>
             </div>
        </div>

        <NavigationDots active={idName} />  {/* navigation dots tell us where we currently*/}

    </div>
  )
}


export default AppWrap
