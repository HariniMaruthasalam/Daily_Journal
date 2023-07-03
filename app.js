const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "“A journal can offer you a place to be someone, anyone, who you want to be.”";
const aboutContent = "The Daily Journal is a platform designed for individuals to express their thoughts, ideas, and experiences through writing. It serves as a personal journal or blog where users can create, publish, and share their content with others. The purpose of the Daily Journal is to provide a space for individuals to document their daily lives, express their creativity, share their knowledge, or simply reflect on their thoughts and emotions. It encourages self-reflection, personal growth, and a means of communication with a wider audience. Users can write about a variety of topics based on their interests, such as personal stories, travel experiences, hobbies, creative writing, opinions, and more. The platform offers a user-friendly interface that allows users to compose their entries with ease.";
const contactContent = "";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let posts =[];

app.get("/",function(req,res){
  res.render("home",{StartingContent:homeStartingContent, publishs:posts})
});


app.get("/contact",function(req,res){
  res.render("contact",{ContactContent:contactContent})
});

app.get("/about",function(req,res){
  res.render("about",{about1Content:aboutContent})
});

app.get("/compose",function(req,res){
  res.render("compose")
});


app.post("/compose",function(req,res){
  
  const publish = {
    title: req.body.title,
    Content: req.body.details
  };

  posts.push(publish);
  res.redirect("/");
 
});




app.listen(3000, function() {
  console.log("Server started on port 3000");
});


