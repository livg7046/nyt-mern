import axios from "axios";

const APIKEY = "79a0eb3b0b2a413e9d81a57b682d30b2";

const API = {


  getArticles: function(topic/*, startYear, endYear*/) {
    const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var params = "?api-key="+APIKEY;
    params=+"&q="+topic;
    // What does this do??
    //     if(parseInt(startYear))
    //  params+="&begin_date="+startYear+"0101";
    //  if(parseInt(endYear))
    //    params+="&end_date="+endYear+"1231";
    console.log(BASEURL+params);
    return axios.get(BASEURL+params);
  },
  
  getArticle: function(id) {
    return axios.get("/api/article/" + id);
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/article/" + id);
  },
  // Saves a book to the database
  saveArticle: function(articleData) {
    return axios.post("/api/article", articleData);
  }
};







export default API;
