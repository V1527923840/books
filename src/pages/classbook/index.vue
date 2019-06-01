<template>
<div>
    <div v-if="showJoin">
        <div class="tips">未加入班级，请加入您的班级</div>
        <div class="join">
            <a href="/pages/common/joinclass/main">加入班级</a>    
        </div>
        <div class="create">
            <a href="/pages/common/createclass/main">创建班级?</a>
        </div>  
    </div>

    <div v-if="showList">
        <ul class="booklist">
            <li v-for="(item,key) in bookList" :key="key">
                <a href="#">
                <image class="bookphoto" :src='item.coverUrl'></image>
                <div class="bookname">{{item.bookName}}</div>
                <div class="price">价格:{{item.price}}</div>
                </a>
            </li>
        </ul>
    </div>
        
</div>
</template>

<script>
export default {
    data:{
        showJoin:false,
        showList:true,
        bookList:[]
       
    },
    mounted(){
        var that = this
        wx.showShareMenu({

        })
        wx.login({    
            success(res){
                console.log(res);                       
                if(res.code){            
                    wx.request({
                        url:'https://darktech.fun/login',
                        method:'post',
                        data:{
                            code: res.code,
                            avatarUrl: wx.getStorageSync('avatarUrl'),
                            nickName: wx.getStorageSync('nickName')
                        },
                        success(res){
                            wx.setStorage({
                                key:'token',
                                data:res.data.content.jwtToken
                            })
                        }
                    })
                }
            }
        }),
        wx.request({
            url:'https://darktech.fun/book/all',
            method:'get',
            header:{
                'Authorization':`Bearer ${wx.getStorageSync('token')}`
            },
            data:{
                pageNum:1,
                pageSize:2,
                type:'time',
                sort:'desc'
            },
            success(res){
                
                console.log(res.data.list);
                res.data.list.map(x=>{
                    that.bookList.push(x)
                    
                })
            }
        })
    },
    methods:{
        test(){
            var that = this;
            wx.request({
                url:'https://darktech.fun/book/all',
                method:'get',
                header:{
                    'Authorization':`Bearer ${wx.getStorageSync('token')}`
                },
                data:{
                    pageNum:1,
                    pageSize:2,
                    type:'time',
                    sort:'desc'
                },
                success(res){
                    console.log(res.data.list);
                        res.data.list.map(x=>{
                            that.bookList.push(x)
                            
                        })
                }
            })
        }
    }
}
</script>

<style>
page{
    background: rgb(245,245,245)
}

/* 加入班级和创建班级 css---------start */
.tips{
    margin-top: 70px;
    text-align: center;
}
.join{
    margin: 0 auto;
    width: 100px;
    line-height: 50px;
    background: skyblue;
    border-radius: 10px;
    margin-top: 100px;
}
.join a{
    text-align: center;
    font-size: 20px;
}
.create{
    margin-top: 20px;
}
.create a{
    text-align: center;
    font-size: 15px;
    text-decoration: underline;
}
/* 加入班级和创建班级 css---------end */

/* 班级书籍列表 css--------------start */
.booklist li{
    width: 177.5px;
    height: 230px;
    background-color:rgb(255,255,255);
    margin: 5px;
    float: left;
    border-radius: 10px;
    /* box-shadow: 5px 5px 5px 0px rgba(85, 85, 85,0.5); */
}
.booklist a{
    width: 177.5px;
    height: 230px;
    position: absolute;
}
.bookphoto,.bookname,.price{
    position: relative;
}
.bookphoto{
    width: 100px;
    height: 110px;  
    top: 20px;
    left: 22%;
}
.bookname{
    margin: 0 auto;
    width: 150px;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    top: 20px;
}
.price{
    top: 30px;
    text-align: center;
    font-size: 15px;
    color: red;
}
/* 班级书籍列表 css--------------end */
</style>
