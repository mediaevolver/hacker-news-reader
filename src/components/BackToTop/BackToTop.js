import React, { Component } from "react";
import { InternalLink } from './BackToTop_s';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        if (window.pageYOffset === 0) {
            this.setState({ visible: false });
        } else {
            this.setState({ visible: true });
        }
    };

    render() {
        return (
            <div>
                {this.state.visible && <InternalLink href={'#top'} rel="nofollow noreferrer noopener">{'<< BACK TO TOP'}</InternalLink>}
            </div>
        );
    }
}