<template>
    <div>
        <div class="title"><h1>加入您的班级</h1></div>     
        <ul class="write">
            <li>姓名: <input type="text"></li>
            <li>学号: <input type="text"></li>
            <li>邀请码: <input type="text"></li>
        </ul>
        <button>申请加入</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.title{
    padding-left:35% ;
    margin: 40px 0;
}
.title h1{
    margin: 0 auto;
    font-weight: bold
}
.write{
    margin: 0 auto;
}
.write li{
    width: 250px;
    margin: 0 auto;
    padding: 10px;
}
.write input{
    width: 180px;
    float: right;
    border: 1px solid gray;
}
button{
    margin-top: 50px;
    width: 200px;
    background: skyblue;
}
</style>
