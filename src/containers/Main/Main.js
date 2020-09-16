import React, {Component} from 'react';
import {connect} from "react-redux";

class Main extends Component {
    render() {
        return (
            <div>
                {!this.props.login ? <div>Привет, гость!</div> : <div>Привет, юзер! </div>}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    login: state.users.login
});

export default connect(mapStateToProps)(Main);
