var koa = require('koa');
const koaRequest = require('koa-http-request');
var app= new koa();
const router = require('koa-router');
const cors = require('@koa/cors');
const APIKEY="fbf712a5a83d7305c3cda4ca8fe7ef29";

const init= router();

app.use(cors(
   { origin: '*', }
));

app.use(koaRequest({
    dataType: 'json', //automatically parsing of JSON response
    timeout: 3000 
    })); 

init.get('/data',async (ctx) => {
   
    const cityn=ctx.request.querystring;
   let data = await ctx.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityn}&units=metric&appid=${APIKEY}`); 
   ctx.body =(data.list[0].main);

})
app.use(init.routes())
app.listen(3002);