import React from 'react'
import {Menu, Image, Responsive} from 'semantic-ui-react'

import IconComponent from './IconComponent'

class MenuComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {activeItem: 'Projects', sidebarActive: false}

        this.handleItemClick = this.handleItemClick.bind(this)
    }


    handleItemClick(e, {name}) {
        if (name === "sidebar") {
            this.setState((prevState) => {
                if (!prevState.sidebarActive) {
                    document.getElementById("mySidenav").style.width = "210px";
                    document.getElementById("main").style.marginLeft = "210px";
                } else {
                    document.getElementById("mySidenav").style.width = "0px";
                    document.getElementById("main").style.marginLeft = "0px";
                }
                return {sidebarActive: !prevState.sidebarActive}
            })
        } else {
            this.setState({activeItem: name})
        }

    }

    render() {
        const {activeItem} = this.state
        return (
            <Menu secondary className={"top"}>
                <Menu.Item name='sidebar'
                           className={"static"}
                           active={activeItem === 'sidebar'} onClick={this.handleItemClick}>
                    <IconComponent onClick={() => {

                    }} size={"large"} name={"sidebar"} disabled={false}/>
                </Menu.Item>
                <Menu.Item
                    name='logo'
                    className={"static"}
                    active={activeItem === 'logo'}
                    onClick={this.handleItemClick}>
                    <Image src='assets/logo/myname.png' size='small'/>
                    {/*https://fontmeme.com/fonts/breeze-font/*/}
                </Menu.Item>

                <Responsive as={Menu.Menu} position='right' minWidth={768}>
                    <Menu.Item
                        name='Projects'
                        active={activeItem === 'Projects'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name="together"
                        active={activeItem === 'together'}
                        onClick={this.handleItemClick}
                    >Let's work together!
                    </Menu.Item>

                    <Menu.Item
                        name="github"
                        active={activeItem === 'github'}
                        onClick={this.handleItemClick}
                    >
                        <IconComponent onClick={() => {
                            window.open("https://github.com/SanjeethKumarTS", '_blank').focus();
                        }} size={"large"} name={"github"} disabled={false}/>
                    </Menu.Item>
                    <Menu.Item
                        name="gmail"
                        active={activeItem === 'gmail'}
                        onClick={this.handleItemClick}
                    >
                        <IconComponent onClick={() => {
                            window.open("mailto:sanjithkumar017@gmail.com", '_blank').focus();
                        }} size={"large"} name={"mail"} disabled={false}/>
                    </Menu.Item>

                    <Menu.Item
                        name="linkedin"
                        active={activeItem === 'linkedin'}
                        onClick={this.handleItemClick}
                    >
                        <IconComponent onClick={() => {
                            window.open("https://www.linkedin.com/in/sanjeethkumar", '_blank').focus();
                        }} size={"large"} name={"linkedin"} disabled={false}/>
                    </Menu.Item>

                    <Menu.Item
                        name="skype"
                        active={activeItem === 'skype'}
                        onClick={this.handleItemClick}
                    >
                        <IconComponent onClick={() => {
                            window.open("skype:sanjithkumar017?chat", '_blank').focus();
                        }} size={"large"} name={"skype"} disabled={false}/>
                    </Menu.Item>
                </Responsive>
            </Menu>
        )
    }
}

export default MenuComponent