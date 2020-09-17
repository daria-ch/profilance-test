import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {Button, Form, FormGroup, Input, NavbarBrand} from 'reactstrap';
import {deleteArticle, fetchNews} from "../../store/actions/newsActions";
import Article from "../../components/Article/Article";
import Spinner from "../../components/UI/Spinner/Spinner";
import {NavLink as RouterNavLink} from "react-router-dom";

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

        let news;

        if (!this.props.login) {
            news = newsList.reverse().map(article => {
                if (this.props.news[article].approve) {
                    return <Article
                        key={article}
                        title={this.props.news[article].title}
                        text={this.props.news[article].text}
                        date={this.props.news[article].date}
                    />
                }
            });
        } else {
            news = newsList.reverse().map(article => {
                return <Article
                    key={article}
                    title={this.props.news[article].title}
                    text={this.props.news[article].text}
                    date={this.props.news[article].date}
                    delete={() => this.props.deleteArticle(article)}
                />
            });
        }

        if (this.props.loading) {
            news = <Spinner/>
        }

        return (
            <Fragment>
                {(this.props.login && !this.props.admin) ?
                    <NavbarBrand tag={RouterNavLink} to="/new">Добавить</NavbarBrand> : null}
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
    loading: state.news.loading,
    login: state.users.login,
    admin: state.users.admin
});

const mapDispatchToProps = dispatch => ({
    fetchNews: () => dispatch(fetchNews()),
    deleteArticle: article => dispatch(deleteArticle(article))
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
