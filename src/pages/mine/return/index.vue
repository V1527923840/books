<template>
    <div>
         <ul class="booklist">
                <li>
                    <a href="/pages/mine/return/returndetail/main">
                        <image class="bookimage" src='../../../static/images/lunbo4.png'></image>
                        <ul class="bookcontent">
                            <li class="bookname">书名:xxx</li>
                            <li class="bookpublish">出版社:xxxx</li>
                            <li class="bookreturndate">归还日期:xx月xx日</li>
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
.booklist li{
    background: lightgreen;
    margin: 5px 0;
    border-radius: 10px;
}
.booklist a{
    height: 130px;
}
.booklist image{
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

.bookname,.bookreturndate{
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
