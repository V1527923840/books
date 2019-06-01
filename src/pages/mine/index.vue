<template>
    <div>
        <!-- 显示授权获取用户信息 -->
            <div v-if="showlogin">
                <div class='header'>
                    <image src='../../static/images/lunbo3.png'></image>
                </div>
                <div class="content">
                    <div>申请获取以下权限</div>
                    <text>获得你的公开信息(昵称，头像等)</text>
                </div>
                <button 
                class="bottom" 
                type="primary"
                open-type='getUserInfo'
                @getuserinfo='bindGetUserInfo'
                >授权登录</button>
            </div>


        <!-- 显示用户信息 -->
        <div v-if='showcontent'>
            <div class="account" >
                <image class="accountimg" :src='photo'></image>
                <div class="accountname" >{{name}}</div>
                <div class="faith">信用度:100</div>
                <div class="coin">悦读币:???</div>
            </div>
            <div class="state">
                <ul class="bookstate">
                    <li>
                        <a href="/pages/mine/landout/main">待借出</a>
                        <div class="count">1</div>
                    </li>
                    <li>
                        <a href="/pages/mine/landouted/main">已借出</a>
                        <div class="count">2</div>
                    </li>
                    <li>
                        <a href="/pages/mine/return/main">待还书</a>
                        <div class="count">5</div>
                    </li>
                    <li>
                        <a href="/pages/mine/pingjia/main">评价</a>
                        <div class="count">4</div>
                    </li>
                </ul>
            </div>
            <div class="mydata">
                <ul class="data">
                    <li><a href="/pages/mine/favour/main">我的收藏</a><div class="arrow">></div></li>
                    <li><a href="/pages/mine/myclassdetail/main">我的班级</a><div class="arrow">></div></li>
                    <li>
                        <a href="/pages/mine/readcoin/main">信用度/悦读币</a><div class="arrow">></div>
                    </li>
                    <li> 
                        
                        <a href="/pages/mine/news/main">消息</a>
                        <div class="arrow">></div>
                        <div class="datacount">5</div>              
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data:{
        photo:'',
        name:'',
        showlogin:false, //登录界面
        showcontent:true, //用户信息
    },created(){

    }
    ,mounted(){      
        var that = this;  
        wx.getSetting({
            //查验是否已经获取用户信息了
            success(res){
                if(!res.authSetting['scope.userInfo']){
                    //如果用户没有授权登录 则登录界面为true 用户信息界面为false
                    that.showlogin=true;
                    that.showcontent=false;
                }else{
                    //如果用户已经授权登录 直接获取头像和昵称
                    // that.photo = wx.getStorageSync('avatarUrl');
                    // that.name = wx.getStorageSync('nickName');
                    wx.getUserInfo({
                        success(res){
                            that.photo = res.userInfo.avatarUrl;
                            that.name = res.userInfo.nickName;
                        }
                    })
                }
            }
        })
    }
    ,methods:{
        bindGetUserInfo(e) {
            var that = this;
            if(e.mp.detail.rawData){
                //按了允许后获取用户信息并跳转到mine页面
                //获取用户信息:头像和昵称
                wx.getUserInfo({
                    success(res){
                        //login界面消失，用户信息界面出现
                        that.showlogin = !that.showlogin;
                        that.showcontent = !that.showcontent;

                        //渲染头像和微信昵称
                        that.photo = res.userInfo.avatarUrl;
                        that.name = res.userInfo.nickName;
                    }
                })     
                //登录后台操作
                wx.login({
                    success(res){
                        if(res.code){
                            console.log(res);      
                            wx.request({                   
                                url: 'https://darktech.fun/login',
                                method:'post',
                                data:{
                                    code: res.code,
                                    avatarUrl: that.photo,
                                    nickName: that.name
                                },
                                success(res){
                                    // console.log(res.data.content.jwtToken);
                                    //登录成功 把后台返回的token存到storage中
                                    wx.setStorage({
                                        key:"token",
                                        data:res.data.content.jwtToken
                                    })
                                }
                            })
                        }
                    }
                }) 
               
                   
            }else{
                that.showlogin=true
                that.showcontent=false
            }
        },
    }
}
</script>

<style scoped>
 /* 显示授权获取用户信息css------start */
.header {
    margin: 90rpx 0 90rpx 50rpx;
    text-align: center;
    width: 650rpx;
    height: 300rpx;
    line-height: 450rpx;
}

.header image {
    width: 200rpx;
    height: 200rpx;
}

.content {
    margin-left: 50rpx;
    margin-bottom: 90rpx;
}

.content text {
    display: block;
    color: #9d9d9d;
    margin-top: 40rpx;
}

.bottom {
    border-radius: 80rpx;
    margin: 70rpx 50rpx;
    font-size: 35rpx;
}

/* 显示授权获取用户信息css------end */


/* 显示用户信息css------start */
.account{
    width: 100%;
    /* background:skyblue; */
    height: 150px;
}
.accountimg,.accountname,.faith,.coin{
        position: relative;
}
.accountimg{
    left: 20px;
    top: 30px;
    width: 100px;
    height: 100px;
}
.accountname{
    left:140px;
    top:-70px;
}
.faith{
    width: 100px;
    left: 140px;
    top: -50px;
}
.coin{
    width: 100px;
    left: 260px;
    top: -75px;
}
.loginbtn{
    position: relative;
    top: -50px;
    left: 50px;
    width: 100px;
    padding: 0;
    
    
}
.state{
    margin-top:10px;
    width: 500px;
    height: 50px;
    /* background: orange; */
    position: relative;
}
.bookstate{
    margin: 0 auto;
    position: absolute;
    bottom: 0;
    /* left: 10px; */
}
.bookstate li{
    float: left;
    margin-left:4px;
}
.bookstate a{
    line-height: 50px;
    padding: 0px;
    width: 90px;
    background: orange;
    text-align: center;
    border-radius: 10px;
}
.count{
    position: relative;
    left: 70px;
    top: -50px;
}
.count,.datacount{
    width: 20px;
    line-height: 20px;
    color: white;
    background: red;
    border-radius: 10px;
    text-align: center;
}
.mydata{
    position: relative;
}
.data li{
    margin:5px 0;
}
.data a{
    line-height:50px;
    /* background: skyblue; */
    padding-left: 20px;
    border: 2px solid gray;
    border-radius: 10px;
}
.datacount{  
    position: relative;
    top: -45px;
    left: 300px

}
.arrow{
    width: 10px;
    height: 10px;
    position: relative;
    top: -38px;
    left: 350px;
}
/* 显示用户信息css------end */
</style>
