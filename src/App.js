import React, {Component} from 'react';
import Projects from './components/GetProject.js';
import Members from './components/GetMember.js';

class App extends Component {

    state = {
        projects: [],
        members: []
    };

    componentDidMount() {
        fetch('https://www.cre8.xyz/api/project?limit=888')
            .then(res => res.json())
            .then((data) => {
                this.setState({ projects: data })
            })
            .catch(console.log)
    }

    render() {
        return (
            <div>
            <h1 align="center">CRE8 Town</h1>
            <Projects projects={this.state.projects} />
            <Members members={this.state.members} />
            </div>
        )
    }
}

export default App;
