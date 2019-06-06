const http = require('http');
const fs = require('fs');

const server = http.createServer();

//处理客户端请求
server.on('request',function(request,response){
		//配置路由
		var url = request.url;
		if(url ==='/'||url ==='/index.html'){
			// 如果url匹配 ,读取指定文件下的html文件，渲染到页面。
			fs.readFile('./pages/index.html','utf-8',function(err,data){
				if(err){
					throw err ;
				}
				response.end(data);
			});
		}else if(url === '/test.html') {
			fs.readFile('./pages/test.html','utf-8',function(err,data){
				if(err){
					throw err ;
				}
				response.end(data);
			});
		}else if(url === '/test.css') {
			fs.readFile('./static/test.css','utf-8',function(err,data){
				if(err){
					throw err ;
				}
				response.end(data);
			});
		}else if(url === '/test.js') {
			fs.readFile('./static/test.js','utf-8',function(err,data){
				if(err){
					throw err ;
				}
				response.end(data);
			});
		}else if(url === '/test.jpg') {
			fs.readFile('./static/test.jpg',function(err,data){
				if(err){
					throw err ;
				}
				response.end(data);
			});
		}
	});

server.listen(3000, '127.0.0.1', () => {
  console.log('服务器运行在 http://127.0.0.1:3000/');
});