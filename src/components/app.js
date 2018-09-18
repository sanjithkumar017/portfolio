import React, {Component} from 'react'

import MenuComponent from './MenuComponent'
import ContentComponent from './ContentComponent'
import SidebarComponent from './SidebarComponent'


class App extends Component {
    render() {

        return (
            <div className={"fullHeight"}>
                <SidebarComponent/>
                <MenuComponent/>
                <ContentComponent/>
            </div>

        )
    }
}


export default App;
