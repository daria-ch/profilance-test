import React, {Component} from 'react';
import {connect} from "react-redux";

class Main extends Component {
    render() {
        return (
            <div>
                {!this.props.login ? <div>Привет, гость!</div> :
                    <div>Привет, <b>{this.props.login.username}</b>! </div>}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    login: state.users.login
});

export default connect(mapStateToProps)(Main);
