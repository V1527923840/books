<template>
    <div>
        <!-- <div class="post" v-if="showscan"> -->
        <div class="post">
            <button class="scancode" @click="scan" type="primary">点击扫码录入书籍信息</button>
            <a class="write">手动输入</a>
        </div>
        <!-- <div v-if="showlogin">请登录...</div> -->
    </div>
</template>

<script>
export default {
    data:{
        showscan:true,
        showlogin:true,
    },
    // mounted(){
    //     console.log(wx.getStorageSync('token'));
    //     if(wx.getStorageSync('token') === ''){
    //         this.showscan = false;
    //         this.showlogin = true;
    //     }else{
    //         this.showscan=!this.showscan;
    //         this.showlogin=!this.showlogin
    //     }
    // },
    methods:{
        scan(){
            //点击扫码获取书籍信息，打开相机
            wx.scanCode({
                success(res){
                    console.log(res.result);
                    wx.setStorage({
                        //把获取到的书籍isbn码存到storage中
                        key:'bookisbn',
                        data:res.result
                    })
                    wx.navigateTo({
                        //跳转到scandetail页面
                        url:'/pages/post/scandetail/main'
                    })
                }
            })
        }
    }
}
</script>

<style>
.scancode{
    width: 250px;
    margin-bottom: 20px;
    margin-top: 200px;
}
.write{
    text-align: center;
    background-color: white;
    font-size: 16px;
    text-decoration: underline;
    border: 0px solid white;
}

</style>
