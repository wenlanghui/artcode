###项目启动

#####step1:启动本地redis 
	命令如下: 或者直接连接远程redis数据库
	启动：./bin/redis-server etc/redis.conf
    查看：tail -f log-redis.log
    连接一下：redis-cli -h 127.0.0.1 -p 6379

#####step2:启动mongodb
    
	命令行：mongo，查看mongodb是否启动

#####step3:安装模块
    
	npm i

#####step4:初始化系统数据到mongodb
    
	npm run init

#####step5:启动node项目
    
	在项目文件夹，命令行使用一下命令(占用端口为9999，请不要改端口，因为前端打包好的项目端口为9999，修改之后无法访问到node服务)
    npm run dev

前端使用**react**,不擅长写前端，然后就把前端代码打包之后放在__dist__文件夹里面，需要安装一个**http-server**，具体操作步骤如下：

#####step1:安装 http-server 模块
    
	npm install http-server -g

#####step2:指定端口
 
    安装完成之后，在项目文件夹，命令行使用一下命令
    http-server dist -p 8989

**http-server**使用方法详解：[http-server](https://www.npmjs.com/package/http-server)

#####完成上诉步骤就可以在浏览器中运行起来，

	open http://localhost:8989/ 
	User：admin@admin.com 
	Password：123


#####关于测试，框架:mocha 断言库:chai.js 
   
	在项目文件夹，命令行使用一下命令
    npm run test

关于日志，之前使用**bunyan**框架,然后**bunyan-logstash**收集和过滤日志，__logstash__里面的__ElasticSearch__提供全文检索服务，再通过Kibana界面展示。

关于文档，使用的是 [apidocjs](http://apidocjs.com/)
    
	在项目文件夹，命令行使用一下命令
    npm run apidoc

    或者 直接打开apidoc里面的index.html, 已经将生成好的文档上传了



#####由于时间原因：

1.文档只写了登录，添加书签，获取公共书签和我的书签文档，用户管理都没有编写。

2.日志系统之前使用过的搭建起来非常繁琐，只能提供我学习和接触过的案例。

3.测试文档也是简单编写了一下。


**耗时方面**：后端业务逻辑耗时很少，主要花费时间在：前端+写文档+把整个环境弄好，大概用时__16__个小时吧。