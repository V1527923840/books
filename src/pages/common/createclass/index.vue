<template>
    <div>
        <ul class="write">
            <li><input type="text" placeholder="请输入班级名" v-model="classname"></li>
           
            <li><input type="text" placeholder="请输入创建人姓名" v-model="fundername"></li> 
            <li> 
               <input type="text" placeholder="请输入所在学校" v-model="schoolname">
            </li>
            <li> 
                <picker 
                @change="greadChange" 
                :value='indexgread' 
                :range="arraygread">
                    <view class="picker">
                        {{arraygread[indexgread]}}
                    </view>
                </picker>
            </li>
            <li> 
                <picker 
                @change="classChange" 
                :value='indexclass' 
                :range="arrayclass">
                    <view class="picker">
                        {{arrayclass[indexclass] + '班'}}
                    </view>
                </picker>
            </li>
        </ul>
        <button @click="submit">申请创建</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            token:'',
            classname:'',
            fundername:'',
            schoolname:'',
            indexgread:0,
            indexclass:0,
            arraygread:['请选择你的年级','一年级','二年级','三年级','四年级','五年级','六年级'],
            arrayclass:['请选择你的班级','1','2','3','4','5'],
        }
    },methods:{
        classChange(e){
            this.indexclass = e.target.value
        },
        greadChange(e){
            this.indexgread = e.target.value
        },
        submit(){
           this.token = wx.getStorageSync("token");
           wx.request({
               url:'https://darktech.fun/class',
               method:'post',
               header:{
                   "Authorization": `Bearer `+this.token
               },
               data:{
                   name:this.fundername,
                   className:this.classname,
                   schoolName:this.schoolname,
                   grade:this.indexgread,
                   clazz:this.indexclass
               },
               success(res){
                   console.log(res);
               }
           })
        },   
    }
}
</script>

<style>
.picker{
    background-color: white;
    line-height: 60px;
    /* width: 150px; */
    margin: 0 auto;
    border: 2.5px solid black;
    border-radius: 10px;
    text-align: center;
}
.write{
    margin: 0 auto;
    padding-top: 50px;
}
.write li{
    width: 350px;
    margin: 0 auto;
    padding: 10px 0;
    
}
.write input{
    height: 50px;
    background-color: white;
    /* width: 200px; */
    /* float: right; */
    /* margin: 0 auto; */
    border: 2.5px solid black;
    
}
button{
    background: rgb(44,44,44);
    color: rgb(206, 206, 206);
    width: 300px;
    border-radius: 20px;
    margin-top: 20px;
    
}
</style>
