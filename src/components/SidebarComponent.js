import React from 'react'
import {Menu,} from 'semantic-ui-react'

class SidebarComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {activeItem: 'Projects'}

        this.handleItemClick = this.handleItemClick.bind(this)
    }


    handleItemClick(e, {name}) {
        console.log("do i get called ", name);
        this.setState({activeItem: name})
    }

    render() {
        const {activeItem} = this.state
        return (

            <div id="mySidenav" className="sidenav">
                <Menu secondary vertical className={"fullHeight"}>
                    <Menu.Item
                        name='Projects'
                        active={activeItem === 'Projects'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='Tools'
                        active={activeItem === 'Tools'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='About'
                        active={activeItem === 'About'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
            </div>
        )
    }
}

export default SidebarComponent