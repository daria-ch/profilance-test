import React, {Component} from 'react';
import axiosApi from "../../axiosApi";
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';


class ChangeStatus extends Component {
    state = {
        title: '',
        text: '',
        date: '',
        approve: '',
        status: ''
    }

    inputChangeHandler = (event) => this.setState({[event.target.name]: event.target.value});

    async componentDidMount() {
        const id = this.props.match.params.id;
        const response = await axiosApi.get('/news/' + id + '.json');
        this.setState({
            title: response.data.title,
            text: response.data.text,
            date: response.data.date,
            approve: response.data.approve
        });
    }

    onCancelClick = () => {
        this.props.history.push('/news');
    }

    editArticleHandler = async (event) => {
        event.preventDefault();
        let approve = null;

        if (this.state.status === 'Одобрено') {
            approve = true
        } else {
            approve = false
        }
        const newArticle = {
            title: this.state.title,
            text: this.state.text,
            date: this.state.date,
            approve: approve
        };
        this.setState({title: '', text: '', date: '', approve: ''});

        const id = this.props.match.params.id;
        await axiosApi.put('/news/' + id + '.json', newArticle);
        this.props.history.push('/news');
    };

    render() {
        return (
            <Form onSubmit={this.editArticleHandler}>
                <FormGroup>
                    <Label for="status">Изменить статус</Label>
                    <Input type="select" name="status" id="status"
                           value={this.state.status}
                           onChange={this.inputChangeHandler}>
                        <option>Одобрено</option>
                        <option>Не одобрено</option>
                    </Input>
                </FormGroup>
                <Button onSubmit={this.editArticleHandler}>Изменить</Button>{' '}
                <Button onClick={this.onCancelClick}>Отмена</Button>
            </Form>
        );
    }
}

export default ChangeStatus;