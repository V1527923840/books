<template>
    <div class="news">
        <h5 class="title">消息</h5>
        <ul class="newscontent">
            <li>
                消息:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                <div class="newsdate">2019-05-11</div>
            </li>
            <li>
                消息:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                <div class="newsdate">2019-05-11</div>
            </li>
            <li>
                消息:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                <div class="newsdate">2019-05-11</div>
            </li>
        </ul>
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
.newscontent li{
    line-height: 80px;
    text-align: center;
    background: linen;
    border-radius: 5px;
    margin: 10px;
}
.newsdate{
    width: 150px;
    height: 20px;
    position: relative;
    top: -40px;
    left: 220px;
    font-size: 14px;
}
</style>
