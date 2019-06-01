<template>
    <div>
        <div class="photoswiper">
            <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
            <block v-for="(item, index) in movies" :key="index">
                <swiper-item>
                    <image :src="item.url" class="slide-image" mode="aspectFill"/>
                </swiper-item>
            </block>
            </swiper>
        </div>

        <div class="bookcontent">
            <ul class="book">
                <li>
                    <ul class="bookmessage">
                        <li>书名:xxx</li>
                        <li>出版社:xxx</li>
                    </ul>
                </li>
                <li>
                    <ul class="bookmessage">
                        <li>作者:xxx</li>
                        <li>状态:xxx</li>
                    </ul>
                </li>
            </ul>
            <div class="bookprofile">简介:  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>

            <div class="bookbtn">
                <button>收藏</button>
                <button>预约</button>
            </div> 
        </div>
        <!-- <div class="line">-----评论-----</div> -->
        <div class="bookcomment">
            <ul>
                <li class="line">-----------评价-----------</li>
                <li>
                    <image src='../../../static/images/lunbo1.png'></image>
                    <div class="bookcomment-name">同学A</div>
                    <div class="bookcomment-comment">评价:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
                </li>
                <li>
                    <image src='../../../static/images/lunbo1.png'></image>
                    <div class="bookcomment-name">同学A</div>
                    <div class="bookcomment-comment">评价:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
                </li>
                
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            movies:[
                {url:'../../../static/images/lunbo1.png'},
                {url:'../../../static/images/lunbo2.png'},
                {url:'../../../static/images/lunbo3.png'},
                {url:'../../../static/images/lunbo4.png'}

            ]
        }
    }
}
</script>

<style>
.swiper {
  height: 250px;
  margin: 5px;
}
image {
  height: 100%;
  width: 100%;
}
.bookcontent{
    margin: 10px;
    background: lightgoldenrodyellow;
}
.book{
    height: 130px;
    width: 100%;
}
.book li{
    /* float: left; */
    position: relative;
    left: 20px;
    line-height: 65px;
}
.bookmessage{
    float: left;
    padding-left:30px; 
}
.bookmessage li{
    font-weight: bold;
    font-size: 23px;
}
.bookprofile{
    width: 320px;
    height: auto;
    background: lightgreen;
    word-wrap: break-word;
    word-break: break-all;
    position: relative;
    left: 7%
}

.bookbtn button{
    background: lightcyan;
    float: left;
    width: 150px;
    margin:10px 0px 0px 20px;
}


.bookcomment{
    margin: 70px 10px 0px;
}
.line{
    text-align: center;
    background: white;
}
.bookcomment li{
    margin: 10px 0px;
    background: lightgrey;
    width: 100%;
    height: auto;
}
.bookcomment image{
    height: 60px;
    width: 60px;
    border-radius: 30px;
    margin: 10px;
}
.bookcomment-name{
    font-weight: bold;
    font-size: 25px;
    position: relative;
    top: -60px;
    left: 100px;
}
.bookcomment-comment{
    position: relative;
    top: -40px;
    word-wrap: break-word;
    word-break: break-all;
    margin: 0 20px;
}
</style>
