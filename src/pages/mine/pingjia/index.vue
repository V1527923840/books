<template>
    <div>
         <ul class="bookestimate">
            <li>
                <a href="/pages/mine/pingjia/pingjiadetail/main">
                    <image class="bookimage" src='../../../static/images/lunbo4.png'></image>
                    <ul class="bookcontent">
                        <li class="bookname">书名:xxx</li>
                        <li class="bookpublish">出版社:xxxx</li>
                        <li class="bookstate">已评价/未评价</li>
                    </ul>
                    
                    <div class="arrow">></div>
                </a>
            </li>              
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.bookestimate li{
    background: lightsteelblue;
    margin: 5px 0;
    border-radius: 10px;
}
.bookestimate a{
    height: 130px;
}
.bookestimate image{
    width:80px;
    height: 80px;
    margin: 20px;
}

.bookcontent li{
    position: relative;
    width: 170px;
    height: 30px;
    top: -105px;
    left: 130px;
}

.bookname{
    
    font-size: 20px;
    margin-bottom: 10px;
}
.bookpublish{
    font-size: 15px;
}
.bookname,.bookstate{
    font-weight: bold;
}
.arrow{
    position: relative;
    top: -190px;
    left: 320px;
    font-weight: bold;
    font-size: 23px;
}
</style>