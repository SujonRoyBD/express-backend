// const http = require ('http');
// const PORT = 3000;
// const hostName = '127.0.0.1';

// const server = http.createServer((req , res )=>{
//     res.end('welsfd');
// })
// server.listen(PORT, hostName, ()=>{
// console.log(`server is http://${hostName}: ${PORT}`)
// }
// )

const http = require ('http');
const PORT =3000;
const hostName = '127.0.0.1';

const server = http.createServer((req ,res)=>{
    res.end('wwwlw')
});
server.listen(PORT,hostName,()=>{
    console.log(`server is http://${hostName};${PORT}`)
})