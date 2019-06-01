<template>
    <div>
        <ul class="top">
            <li>
                <image src='../../../static/images/coin.png'></image>
                <div class="top-text">信用度:100</div>
            </li>
            <li>
                <image src='../../../static/images/coin.png'></image>
                <div class="top-text">悦读币:???</div>
            </li>
        </ul>
        <ul class="readcoincontent">
            <li><a href="/pages/mine/readcoin/coin/main">悦读币收入/支出</a> </li>
            <li><a href="/pages/mine/readcoin/credit/main">信用度详情</a></li>
        </ul>
        <button class="btn">点击每日打卡，获取悦读币</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.top{
    height: 180px;
    background: lightcyan;
}
.top li{
    font-weight: bold;
    float: left;
    padding-left: 70px;
    margin: 40px 0;
}

.top image{
    width: 60px;
    height: 60px;
}
.top-text{
    position: relative;
    top: 10px;
    left: -10px;
}

.readcoincontent a{
    background: lightgoldenrodyellow;
    line-height: 60px;
    border: 1px solid gray;
    border-radius: 10px;
    margin: 20px;
    padding-left:10px; 
}
.btn{
    margin-top: 30px;
    width: 300px;
    background: lightslategray;
}
</style>
