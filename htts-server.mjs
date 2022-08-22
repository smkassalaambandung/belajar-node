import http from "http";
const server = http.createServer((requests, response)=>{
  console.info(requests.method);
  console.info(requests.url);

  if(requests === "/agung"){
    response.write("Haloo")
  } else{
    response.write("Hello http server");
  }
  response.end()
})

server.listen(3000);