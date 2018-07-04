import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./articles.css";


class Articles extends Component {
  state = {
    articles: [],
    topic: "",
    title: "",
    date: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data, title: "", date: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

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
      // this.setState({
      //   articles:  API.getArticles(this.state.topic)
      // });

      let articles = API.getArticles(this.state.topic)
        .then(
        this.setState({
            articles:  articles
          })
        )
        .then(
          console.log(this.state.articles)
        ) ;

    // API.getArticles(this.state.topic);
     

    /*if (this.state.title && this.state.author) {
      API.saveArticle({
        title: this.state.title,
        date: this.state.date,
        synopsis: this.state.synopsis
      })
        .then(
          console.log(event)
        )
        //.then(res => this.loadArticles())
        //console.log(res)
        .catch(err => console.log(err));
    }*/
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
                name="startDate"
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
            {/* {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id}>
                    <Link to={"/articles/" + article._id}>
                      <strong>
                        {article.title} by {article.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )} */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
