<template>
    <div>
        <h5 class="title">我的班级</h5>
        <ul class="classcontent">
            <li>班级名:</li>
            <li>
                <a href="/pages/mine/myclassdetail/classcode/main">二维码: <div class="arrow">></div></a>
            </li>
            <li>邀请码:xxxxxxxxxx</li>
            <li class="classmember">
                <a href="/pages/mine/myclassdetail/classmember/main">成员: <div class="arrow">></div></a>
            </li>
            <li>
                <a href="/pages/mine/myclassdetail/classmanage/main">申请入群审批 <div class="arrow">></div></a>
            </li>
        </ul>
        <button class="classbtn">退出</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.title{
    margin:20px;
    text-align: center;
    font-weight: bold;
    font-size: 25px;
}
.classcontent li{
    line-height: 60px;
    background: lightblue;
    margin: 10px;
    border-radius: 5px;
    padding-left: 10px;
}
.classcontent a{
    border-radius: 5px;
}


.arrow{
    height: 5px;
    position: relative;
    top: -60px;
    left: 300px;
}

.classbtn{
    width: 95%;
    bottom: -50px;
    background: lightcoral;
}
</style>