import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {postArticle} from "../../store/actions/newsActions";

class NewArticle extends Component {

    state = {
        title: '',
        text: '',
        date: '',
        approve: false
    };

    inputChangeHandler = (event) => this.setState({[event.target.name]: event.target.value});

    onCancelClick = () => {
        this.props.history.push('/news');
    }

    postArticle = async (event) => {
        event.preventDefault();
        const datetime = new Date();
        const article = {
            title: this.state.title,
            text: this.state.text,
            date: datetime,
            approve: this.state.approve
        };
        await this.props.postArticle(article);
        await this.props.history.push('/news');
    };

    render() {
        return (
            <Form onSubmit={this.postArticle}>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" name="title" id="title" placeholder="Введите заголовок"
                           value={this.state.title}
                           onChange={this.inputChangeHandler}/>
                </FormGroup>
                <FormGroup>
                    <Label for="text">Text</Label>
                    <Input type="text" name="text" id="text" placeholder="Введите текст"
                           value={this.state.text}
                           onChange={this.inputChangeHandler}/>
                </FormGroup>
                <Button>Добавить</Button>{' '}
                <Button onClick={this.onCancelClick}>Отмена</Button>
            </Form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    postArticle: article => dispatch(postArticle(article))
});

export default connect(null, mapDispatchToProps)(NewArticle);