import React from "react";
import banner from '../styles/asset/MicroGame.png'
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import { createMedia } from "@artsy/fresnel";
import { Container, Icon, Image, Menu, Sidebar } from "semantic-ui-react";
console.log(Auth.loggedIn());

const AppMedia = createMedia({
    breakpoints: {
      mobile: 320,
      tablet: 768,
      computer: 992,
      largeScreen: 1200,
      widescreen: 1920
    }
});

const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

const NavBarMobile = (props) => {
    const {
      children,
      leftItems,
      onPusherClick,
      onToggle,
      rightItems,
      visible
    } = props;

    return(
        <Sidebar.Pushable>
            <Sidebar
            as={Menu}
            animation='overlay'
            items={leftItems}
            vertical
            visible={visible}
            />
            <Sidebar.Pusher
        dimmed={visible}
        onClick={onPusherClick}
      >
        <Menu fixed="top" inverted>
          <Menu.Item onClick={onToggle}>
            <Icon name="sidebar" />
          </Menu.Item>
          <Menu.Menu position="right">
            {rightItems.map((item) => (
              <Menu.Item {...item} />
            ))}
          </Menu.Menu>
        </Menu>
        {children}
      </Sidebar.Pusher>
        </Sidebar.Pushable>
    )
}
const NavBarDesktop = (props) => {
    const { leftItems, rightItems } = props;
  
    return (
      <Menu fixed="top" inverted>
        
  
        {leftItems.map((item) => (
          <Menu.Item {...item} />
        ))}
  
        <Menu.Menu position="right">
          {rightItems.map((item) => (
            <Menu.Item {...item} />
          ))}
        </Menu.Menu>
      </Menu>
    );
};
const NavBarChildren = (props) => (
    <Container style={{ marginTop: "5em" }}>{props.children}</Container>
  );
  
  class NavBar extends React.Component {
    state = {
      visible: false
    };
  
    handlePusher = () => {
      const { visible } = this.state;
  
      if (visible) this.setState({ visible: false });
    };
  
    handleToggle = () => this.setState({ visible: !this.state.visible });
  
    render() {
      const { children, leftItems, rightItems } = this.props;
      const { visible } = this.state;
  
      return (
        <div>
          <Media at="mobile">
            <NavBarMobile
              leftItems={leftItems}
              onPusherClick={this.handlePusher}
              onToggle={this.handleToggle}
              rightItems={rightItems}
              visible={visible}
            >
              <NavBarChildren>{children}</NavBarChildren>
            </NavBarMobile>
          </Media>
  
          <Media greaterThan="mobile">
            <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
            <NavBarChildren>{children}</NavBarChildren>
          </Media>
        </div>
      );
    }
}

let leftItems = [
    { as: "a", content: "Home", key: "home", href: '/'},
    { as: "a", content: "MiniGame", key: "MiniGame",href: '/minigame' },
    
];
let rightItems = [
    { as: "a", content: "Login", key: "login",href: '/login' },
    { as: "a", content: "Register", key: "register",href: '/signup' }
];


if(Auth.loggedIn()){
    leftItems = [
        { as: "a", content: "Home", key: "home", href: '/' },
        { as: "a", content: "MiniGame", key: "MiniGame",href: '/minigame' },
        { as: "a", content: "Profile", key: "profile",href: '/profile' }
    ];
    rightItems = [
        { as: "a", content: "Log-out", key: "Log-out",href: '/', onClick:Auth.logout },  
    ];
}
    
export default function Navbar(){
    
    return(  
      <>
        <style>{mediaStyles}</style>
          <MediaContextProvider>
            <NavBar leftItems={leftItems} rightItems={rightItems}>
              <Image src={banner} className="banner" />
            </NavBar>
        </MediaContextProvider>
      </>
    )
}

