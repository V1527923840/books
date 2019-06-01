<template>
    <div>
        <h5 class="title">我的收藏</h5>
        <div>
            <ul class="favourlist">
                <li>
                    <a href="/pages/common/bookdetail/main">
                        <image class="bookimage" src='../../../static/images/lunbo4.png'></image>
                        <ul class="favourcontent">
                            <li class="bookname">书名:xxx</li>
                            <li class="bookauthor">作者:xxx</li>
                        </ul>
                        <div class="arrow">></div>
                    </a>
                </li>
            </ul>
        </div>
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
.favourlist a{
    height: 100px;
    background:lightseagreen;
    margin: 10px;
    border-radius: 5px;
}
.favourlist image{
    width: 80px;
    height: 80px;  
    margin: 10px;
}
.favourcontent {
    top: -90px;
    left: 100px;
}
.favourcontent,.arrow{
    position: relative;
}
.favourcontent li{
    margin-bottom: 20px;
}
.bookname,.arrow{
    font-size: 20px;
    font-weight: bold;
}
.arrow{
     top: -160px;
    left: 300px;
}
</style>
