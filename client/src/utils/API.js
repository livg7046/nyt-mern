import axios from "axios";

const APIKEY = "79a0eb3b0b2a413e9d81a57b682d30b2";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"


const API = {

  getArticles: function() {
  // return axios.get(process.env.REACT_APP_API_HOST + "/api/articles");
  return axios.get(BASEURL + "?api-key=" + APIKEY)
  },

  getArticlesByParams: function(topic, startDate, endDate) {
    // return axios.get(process.env.REACT_APP_API_HOST + "/api/articles");
    return axios.get(BASEURL + "?api-key=" + APIKEY + "&q=" + topic + "&begin_date=" + startDate + "&end_date=" + endDate)
  }

};

export default API;
