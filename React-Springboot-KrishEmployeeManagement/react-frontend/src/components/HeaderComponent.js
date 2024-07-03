import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://javaguides.net" className="navbar-brand"><center><span>Welcome to Krishna's Employee Management App</span></center></a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
