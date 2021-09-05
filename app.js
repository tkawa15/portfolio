const express = require("express");
const app = express();
app.use(express.static("public"));

const articles_json = require(__dirname + "/public/articles.json");
const about_json = require(__dirname + "/public/about.json");
const articles = articles_json.articles;

const researches = (articles.researches).reverse();
const works = (articles.works).reverse();
const blogs = (articles.blogs).reverse();

const skills = about_json.skills;
const certifications = (about_json.certifications).reverse();

var topimages = [];
works.map(work => {
    topimages.push({"imgurl": work.topimage, "link": "work/"+work.shortname});
});
researches.map(research => {
    topimages.push({"imgurl": research.topimage, "link": "research/"+research.shortname});
});
blogs.map(blog => {
    topimages.push({"imgurl": blog.topimage, "link": "blog/"+blog.shortname});
});

app.get("/", (request, response) => {
  response.render(__dirname + "/views/index.ejs", {
    topimages: topimages,
    researches: researches,
    works: works,
    blogs: blogs
  });
});

app.get("/about", (request, response) => {
  response.render(__dirname + "/views/about.ejs", {
    skills: skills,
    certifications: certifications
  });
});

app.get("/articles/tag/:tag", (request, response) => {
  var res_articles = [];
  const reqtag = request.params.tag;
  works.map(work => {
    var tags = work.tags;
      tags.map(eachtag => {
      if(eachtag === reqtag){
        res_articles.push({"article_detail": work, "genre": "work"});
      }
    });
  });
  researches.map(research => {
    var tags = research.tags;
      tags.map(eachtag => {
      if(eachtag === reqtag){
        res_articles.push({"article_detail": research, "genre": "research"});
      }
    });
  });
  blogs.map(blog => {
    var tags = blog.tags;
      tags.map(eachtag => {
      if(eachtag === reqtag){
        res_articles.push({"article_detail": blog, "genre": "blog"});
      }
    });
  });
  response.render(__dirname + "/views/tag.ejs", {
    articles: res_articles,
    tagname: reqtag
  });
});

app.get("/articles/:type", (request, response) => {
  var types;
  var arrName;
  if(request.params.type == "research"){
    arrName = "research",
    types = researches;
  } else if(request.params.type == "work"){
    arrName = "work",
    types = works;
  } else if(request.params.type == "blog"){
    arrName = "blog",
    types = blogs;
  }
  response.render(__dirname + "/views/articles.ejs", {
    typeName: arrName,
    types: types
  });
});

app.get("/articles/:type/:title", (request, response) => {
  var details;
  if(request.params.type == "research"){
    details = researches.find((v) => v.shortname === request.params.title);
  }else if(request.params.type == "work"){
    details = works.find((v) => v.shortname === request.params.title);
  }else if(request.params.type == "blog"){
    details = blogs.find((v) => v.shortname === request.params.title);
  }
  response.render(__dirname + "/views/article.ejs", {
    details: details,
    genre: request.params.type
  });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
