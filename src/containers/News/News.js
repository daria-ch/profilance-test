import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {Button, Form, FormGroup, Col, Input} from 'reactstrap';
import {deleteArticle, fetchNews} from "../../store/actions/newsActions";
import Article from "../../components/Article/Article";
import Spinner from "../../components/UI/Spinner/Spinner";

class News extends Component {

    state = {
        search: ''
    }

    componentDidMount() {
        this.props.fetchNews();
    }

    updateSearch(event) {
        this.setState({search: event.target.value.substr(0, 20)});
    }

    render() {
        let newsList = Object.keys(this.props.news).filter(article => {
            return this.props.news[article].title.indexOf(this.state.search) !== -1;
        });

        let news = newsList.map(article => {
            return <Article
                key={article}
                title={this.props.news[article].title}
                text={this.props.news[article].text}
                date={this.props.news[article].date}
            />
        });

        if (this.props.loading) {
            news = <Spinner/>
        }
        return (
            <Fragment>
                <Form>
                    <FormGroup>
                        <Input type="text" name="search" id="search"
                               value={this.state.search}
                               onChange={(event) => this.updateSearch(event)}/>
                    </FormGroup>
                    <Button>Поиск</Button>
                </Form>
                <div>
                    {news}
                </div>
            </Fragment>

        );
    }
}

const mapStateToProps = state => ({
    news: state.news.news,
    loading: state.news.loading
});

const mapDispatchToProps = dispatch => ({
    fetchNews: () => dispatch(fetchNews()),
    deleteArticle: article => dispatch(deleteArticle(article))
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
