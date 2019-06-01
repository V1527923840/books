<template>
    <div>
        <div>
            <image class="bookimage"  :src='bookPhoto'></image>
            <ul class="bookcontent">
                <li class="bookname">{{bookName}}</li>
                <li class="publishdate">出版日期:{{bookPublishDate}}</li>
                <li class="publisher">出版社:{{bookPublisher}}</li>
                <li><input type="number" v-model.number='bookprice' maxlength="3" placeholder="请输入借阅的悦读币价格"></li>
                <li style="color:red;font-size:10px;">
                悦读币的价格为整数
                </li>
            </ul>
            <button 
            type="primary"
            class="button"
            @click="bookpost">发布</button>
        </div>
    </div>
</template>

<script>
export default {
    data:{
        bookPhoto:'',
        bookName:'',
        bookPublishDate:'',
        bookPublisher:'',
        bookprice:null,
        bookId: 0,
    },
    mounted(){
        var that = this
        wx.request({
            //扫码后，获取书籍在豆瓣的信息
            url:`https://darktech.fun/book/isbn/${wx.getStorageSync('bookisbn')}`,
            method:'get',
            data:{
                isbn: wx.getStorageSync('bookisbn')
            },
            success(res){
                console.log(res);
                if(res.data.code === 100){
                    //获取到书籍在豆瓣的数据，渲染到页面上
                    that.bookPhoto = res.data.content.coverUrl;
                    that.bookName = res.data.content.bookName;
                    that.bookPublisher = res.data.content.publisher;
                    that.bookPublishDate = res.data.content.publishDate;
                    that.bookId = res.data.content.bookId;
                    console.log(that.bookId);  
                }
                else{
                    // 获取不到书籍的数据，弹框提示可以手动输入书籍信息
                    wx.showModal({
                        title:'提示',
                        content:'找不到该书籍,可以尝试手动输入书籍信息',
                        success(res){
                            if(res.confirm){
                                //按 "确认" 跳转到手写输入页面
                                wx.switchTab({
                                    url:'/pages/post/main'
                                })
                            }else{
                                //按 "取消" 跳转到post页面
                                wx.switchTab({
                                    url:'/pages/post/main'
                                })
                            }
                        }
                    })
                }
                
            }
        })
    },methods:{
        bookpost(){
            var that = this
            if(that.bookprice === null){
                wx.showToast({
                    title:'价格不能为空',
                    icon: 'none',
                    duration: 2000
                })
            }else if(typeof(that.bookprice) === "string"){
                wx.showToast({
                    title:'价格应为整数',
                    icon: 'none',
                    duration: 2000
                })
            }
            else{ 
                wx.request({
                    //把书籍发布出去
                    url:'https://darktech.fun/lend',
                    method:'post',
                    header:{
                        'Authorization':'Bearer '+ wx.getStorageSync('token')
                    },
                    data:{
                        bookId: that.bookId,
                        price: that.bookprice,
                    },
                    success(res){
                        console.log(res);
                        if(res.data.code === 100){
                            // 发布成功 弹框提示发布成功并跳转到post页面
                            console.log(res);
                            wx.showToast({
                                title:'发布成功',
                                icon: 'success',
                                duration: 2000
                            })
                            wx.switchTab({
                                url:'/pages/post/main'
                            })
                        }else if(res.data.code === -1003){
                            wx.showToast({
                                title:'用户未登录',
                                icon: 'none',
                                duration: 2000
                            })
                        }
                    }
                })
                wx.removeStorage({
                    //发布成功后，把storage里面的bookisbn码删掉
                    key:'bookisbn',
                    success(res){
                        console.log(res);  
                        that.bookPhoto = '';
                        that.bookName = '';
                        that.bookPublisher = '';
                        that.bookPublishDate = '';
                        that.bookprice = null;
                        that.bookId = 0;
                        wx.switchTab({
                            url:'/pages/post/main'
                        })          
                    }
                })

            }
           

            
        }
    }
}
</script>

<style>
.bookimage{
    width: 150px;
    height: 200px;
    margin: 30px 0;
    position: relative;
    left:30%
}
.bookcontent li{
    text-align: center;
    margin: 15px 0;
}
.bookname{
    font-weight: bold;
}
.publishdate,.publisher{
    font-size: 15px;
}
.button{
    width: 200px;
}
</style>
