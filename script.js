
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({
    extended:false
}));
//app.use( express.static( __dirname + '/client' ));
app.use(express.static(__dirname + '/st'));
	app.get('/',(req,res)=>{
		//res.send('Welcome');
		// res.sendFile( path.join( __dirname, 'client', 'index.html' ));
		res.sendFile(path.join(__dirname,'st','index.html'));
		//res.response("/index.js");
		
	})
		app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    // Pass to next layer of middleware
    next();
  });
  const rep = require('./server.js');
  var prev = [];//use to hold series of categories selected
  var cat;//use to hold question number to provide answers
  var fallback = "Sorry your response is invalid<br>Select appropriate option from above category";
  function resolve(msg){
      var a;
    if(msg === "hi" || msg === "hello")
    {
        a = rep.menu;
        prev.length=0;
        prev.push("menu");
        return a;
    }
    else if(prev[prev.length-1] === "menu")
    {
        if(msg == "1")
        {
            a = rep.menu1;
            prev.push("menu1");
        }
        else if(msg == "2")
        {
            a = rep.menu2c;
            prev.push("menu2c");
        }
        else if(msg == "3")
        {
            a = rep.menu3q;
            prev.push("menu3q");
        }
        else if(msg == "4")
        {
            a = rep.menu4c;
            prev.push("menu4c");
        }
        else if(msg == "5")
        {
            a = rep.menu5c;
            prev.push("menu5c");
        }
        else{
            return fallback;
        }
    }
    else if(prev[prev.length-1] === "menu1")
    {
        if(rep.menu1q[Number(msg)-1] != undefined)
        {
            cat = Number(msg)-1;
            a = rep.menu1q[cat];
            prev.push("menu1q");
        }
        else if(msg == "*")
        {
            a = rep.optmenu;
            prev.pop();
            return a;
        }
        else{
            return fallback;
        }
    }
    else if(prev[prev.length-1] === "menu1q")
    {
        if(rep.menu1a[cat][Number(msg)-1] != undefined){
            a = rep.menu1a[cat][Number(msg)-1];
            prev.push("menu1a")
        }
        else if(msg == "*"){
            a = rep.menu1;
            prev.pop();
        }
        else{
            return fallback;
        }
    }
    else if(prev[prev.length-1] === "menu1a")
    {
        if(msg == "*"){
            a = rep.menu1q[cat];
            prev.pop();
        }
        else{
            return fallback;
        }
    }
   
    else if(prev[prev.length-1] === "menu2c")
    {
        if(rep.menu2q[Number(msg)-1] != undefined)
        {
            cat = Number(msg)-1;
            a = rep.menu2q[cat];
            prev.push("menu2q");
        }
        else if(msg == "*")
        {
            a = rep.optmenu;
            prev.pop();
            return a;
        }
        else{
            return fallback;
        }
    }
    else if(prev[prev.length-1] === "menu2q")
    {
        if(rep.menu2a[cat][Number(msg)-1] != undefined){
            a = rep.menu2a[cat][Number(msg)-1];
            prev.push("menu2a")
        }
        else if(msg == "*"){
            a = rep.menu2c;
            prev.pop();
        }
        else{
            return fallback;
        }
    }
    else if(prev[prev.length-1] === "menu2a")
    {
        if(msg == "*"){
            a = rep.menu2q[cat];
            prev.pop();
        }
        else{
            return fallback;
        }
    }
    
    else if(prev[prev.length-1] === "menu3q")
    {
        if(rep.menu3a[Number(msg)-1] != undefined)
        {
            cat = Number(msg)-1;
            a = rep.menu3a[cat];
            prev.push("menu3a");
        }
        else if(msg == "*")
        {
            a = rep.optmenu;
            prev.pop();
            return a;
        }
        else{
            return fallback;
        }
    }
    else if(prev[prev.length-1] === "menu3a")
    {
        if(msg == "*"){
            a = rep.menu3q;
            prev.pop();
        }
        else{
            return fallback;
        }
    }
    
    else if(prev[prev.length-1] === "menu4c")
    {
        if(rep.menu4q[Number(msg)-1] != undefined)
        {
            cat = Number(msg)-1;
            a = rep.menu4q[cat];
            prev.push("menu4q");
        }
        else if(msg == "*")
        {
            a = rep.optmenu;
            prev.pop();
            return a;
        }
        else{
            return fallback;
        }
    }
    else if(prev[prev.length-1] === "menu4q")
    {
        if(rep.menu4a[cat][Number(msg)-1] != undefined){
            a = rep.menu4a[cat][Number(msg)-1];
            prev.push("menu4a")
        }
        else if(msg == "*"){
            a = rep.menu4c;
            prev.pop();
        }
        else{
            return fallback;
        }
    }
    else if(prev[prev.length-1] === "menu4a")
    {
        if(msg == "*"){
            a = rep.menu4q[cat];
            prev.pop();
        }
        else{
            return fallback;
        }
    }
   
    else if(prev[prev.length-1] === "menu5c")
    {
        if(rep.menu5q[Number(msg)-1] != undefined)
        {
            cat = Number(msg)-1;
            a = rep.menu5q[cat];
            prev.push("menu5q");
        }
        else if(msg == "*")
        {
            a = rep.optmenu;
            prev.pop();
            return a;
        }
        else{
            return fallback;
        }
    }
    else if(prev[prev.length-1] === "menu5q")
    {
        if(rep.menu5a[cat][Number(msg)-1] != undefined){
            a = rep.menu5a[cat][Number(msg)-1];
            prev.push("menu5a")
        }
        else if(msg == "*"){
            a = rep.menu5c;
            prev.pop();
        }
        else{
            return fallback;
        }
    }
    else if(prev[prev.length-1] === "menu5a")
    {
        if(msg == "*"){
            a = rep.menu5q[cat];
            prev.pop();
        }
        else{
            return fallback;
        }
    }
    else{
        return fallback;
    }
    console.log(prev)
    return a+"<br>Press * to view previous categories";
  }
app.post('/send-msg',(req,res)=>{
    res.send({Reply:resolve(req.body.MSG)});
});

app.listen(3000);