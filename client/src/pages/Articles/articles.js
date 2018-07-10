import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import "./articles.css";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import { SavedArticlesList, SavedArticles } from "../../components/SavedArticles"



class Articles extends Component {
  state = {
    articles: [

    ],
    topic: "",
    startDate: "",
    endDate: "",
    id: "",
    saved: false
  };

  componentDidMount() {
    this.loadArticles();
  };

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({articles: res.data.response.docs})
        //console.log(res.data.response.docs)
      )
      .catch(err => console.log(err));
  };

  saveArticle = event => {
    event.preventDefault();
    this.setState({
      saved: true
    });
  }


  // deleteArticle = id => {
  //   API.deleteArticle(id)
  //     .then(res => this.loadArticles())
  //     .catch(err => console.log(err));
  // };

  //on submit button click, the state is changed to the data that is returned here
  //more data to be added, right now it is just the title. 
  // handleInputChange = event => {
  //   this.setState({

  //     topic: event.target.value
  //   });
  //   //this is the original input:
  //   // const { name, value } = event.target;
  //   // this.setState({
  //   //   [name]: value
  //   // });
  // };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getArticlesByParams(this.state.topic, this.state.startDate, this.state.endDate)
    .then(res =>
      this.setState({articles: res.data.response.docs})
      //console.log(res.data.response.docs)
    )
    .catch(err => console.log(err));
  };


  render() {
    return (
      <Container fluid>
        <Row>
            <Col size="md-12">
              <Jumbotron>
                <h1>What Articles would you like to search for?</h1>
              </Jumbotron>
              <form>
                Topic: 
                <Input
                  id="topic"
                  value={this.state.topic}
                  name="topic"
                />
                START DATE: (required)
                <Input 
                  type="date"
                  value={this.state.startDate}
                  /*onChange={this.handleInputChange}*/
                  name="startDate"
                  placeholder="Start Date (required)"
                />
                End Date:
                <Input 
                  type="date"
                  value={this.state.endDate}
                  // onChange={this.handleInputChange}
                  name="endDate"
                />
                <FormBtn
                  //disabled={!(this.state.startDate && this.state.endDate)}
                  onClick={this.handleFormSubmit}
                >
                  Submit
                </FormBtn>
              </form>
            </Col>
            <Col size="md-12">
              <Jumbotron>
                <h1>Articles</h1>
              </Jumbotron>
              {this.state.articles.length ? (
                <ul>
                  {this.state.articles.map(article => (
                    <li>
                        <strong>
                          <a target="_blank" href={article.web_url}> {article.headline.main} on {article.pub_date} </a>
                        </strong>
                        <button id="savetbn" onClick={this.saveArticle}>Save</button>
                    </li>
                  ))}
                </ul>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Col>
          </Row>
          <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Saved Articles</h1>
            </Jumbotron>
          
            {!this.state.articles.length ? (
              <h2 className="text-center">You do not have any saved articles</h2>
              ) : (
                <SavedArticlesList>
                  {this.state.articles
                    .filter(() => this.state.saved === true)
                    .map(article => {
                      return (
                        <SavedArticles
                          key={article.title}
                          title={article.title}
                          href={article.url}
                          synopsis={article.synopsis}
                          date={article.date}
                        />
                      )
                  })}
                </SavedArticlesList>
              )}
          </Col>
          </Row>
    </Container>
    )};
  }
export default Articles;
