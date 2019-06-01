<template>
    <div>
        <div>
            <ul class="booklist">
                <li>
                    <a href="/pages/mine/landout/landoutdetail/main">
                        <image class="bookimage" src='../../../static/images/lunbo4.png'></image>
                        <ul class="bookcontent">
                            <li class="bookname">书名:xxx</li>
                            <li class="bookauthor">作者:xxx</li>
                            <li class="bookpublish">出版社:xxxx</li>
                        </ul>
                       
                       <div class="state">已借出 ></div>
                    </a>
                </li>
                <li>
                    <a href="/pages/mine/landout/landoutdetail/main">
                        <image class="bookimage" src='../../../static/images/lunbo4.png'></image>
                        <ul class="bookcontent">
                            <li class="bookname">书名:xxx</li>
                            <li class="bookauthor">作者:xxx</li>
                            <li class="bookpublish">出版社:xxxx</li>
                        </ul>
                       
                       <div class="state">已借出 ></div>
                    </a>
                </li>
                 <li>
                    <a href="/pages/mine/landout/landoutdetail/main">
                        <image class="bookimage" src='../../../static/images/lunbo4.png'></image>
                        <ul class="bookcontent">
                            <li class="bookname">书名:xxx</li>
                            <li class="bookauthor">作者:xxx</li>
                            <li class="bookpublish">出版社:xxxx</li>
                        </ul>
                       
                       <div class="state">待预约 ></div>
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
.booklist li{
    background: orange;
    margin: 5px 0;
    border-radius: 10px;
}
.booklist a{
    height: 120px;
}
.booklist image{
    width:80px;
    height: 80px;
    margin: 20px;
}

.bookcontent li{
    position: relative;
    width: 100px;
    height: 30px;
    top: -110px;
    left: 130px;
}

.bookname{
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
}
.bookauthor,.bookpublish{
    font-size: 15px;
}

.state{
    position: relative;
    top: -180px;
    left: 280px;
    font-weight: bold;
    font-size: 23px;
}
</style>
