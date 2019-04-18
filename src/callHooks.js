import React from 'react'
import App, {Example, FriendStatus} from './hooks';

export default class CallHook extends React.Component {
    render(){
        return(
            <div>
                {/* <Example />
                <FriendStatus /> */}
                <App />
            </div>
        )
    }

}