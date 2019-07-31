const url = 'https://newsapi.org/v2/sources?language=en&apiKey=416eb04821e74994a23b72fb0e7f5e0a';

callApi(url)=>{
    fetch(url)
.then(function(Response) {
    console.log(Response.JSON(););
    
    return Response.JSON();
})
.then(function(data) {
    return data.sources;
})
.catch(function() {

});
}