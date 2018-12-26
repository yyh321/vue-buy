module.exports = {
    configureWebpack:{
        devServer:{
            before(app){
                app.get('/api/goods', function (req,res) {
                    res.json({
                        list:[
                            { text: "百万年薪前端架构师",price: 40 },
                            { text: "web全栈架构师",price:100 },
                            { text: "Python爬虫",price:50 },
                            { text: "Java开发高级工程师",price:20 },
                            { text: "PHP开发高级工程师",price:10 },
                            { text: "Ruby开发高级工程师",price:60 },
                            { text: "C++开发高级工程师",price:90 }
                        ]
                    })
                })
            }
        }
    }
}










