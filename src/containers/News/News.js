import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {NavLink as RouterNavLink} from "react-router-dom";
import {Button, Form, FormGroup, Input, NavbarBrand} from 'reactstrap';
import {deleteArticle, editArticle, fetchNews} from "../../store/actions/newsActions";
import Article from "../../components/Article/Article";
import Spinner from "../../components/UI/Spinner/Spinner";

class News extends Component {

    state = {
        search: ''
    }

    componentDidMount() {
        this.props.fetchNews();
    }

    updateSearch = (event) => {
        this.setState({search: event.target.value.substr(0, 20)});
    }

    showAlert = () => {
        alert('Hello');
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
                if (this.props.news[article].approve === false) {
                    return <Article
                        key={article}
                        title={this.props.news[article].title}
                        text={this.props.news[article].text}
                        date={this.props.news[article].date}
                        delete={() => this.props.deleteArticle(article)}
                        approve='Не одобрено'
                        changeStatus={'/news/' + article}
                    />
                } else {
                    return <Article
                        key={article}
                        title={this.props.news[article].title}
                        text={this.props.news[article].text}
                        date={this.props.news[article].date}
                        delete={() => this.props.deleteArticle(article)}
                        approve='Одобрено'
                        changeStatus={'/news/' + article}
                    />
                }
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
    deleteArticle: article => dispatch(deleteArticle(article)),
    editArticle: (article, newArticle) => dispatch(editArticle(article, newArticle))
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
