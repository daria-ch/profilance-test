import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Media} from 'reactstrap';

class Article extends Component {
    render() {
        return (
            <Media>
                <Media body>
                    <Media heading>
                        {this.props.title}
                        <p>{this.props.approve}</p>
                    </Media>
                    {this.props.text}
                    <p><em>~ {this.props.date}</em></p>
                    {this.props.admin ? <Button color="danger" onClick={this.props.delete}>Delete</Button> : null}
                </Media>
            </Media>
        );
    }
}

const mapStateToProps = state => ({
    admin: state.users.admin
});


export default connect(mapStateToProps)(Article);