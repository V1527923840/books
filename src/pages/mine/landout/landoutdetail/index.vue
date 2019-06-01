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
        <div class="bookdetail">
            <ul>
                <li style="font-weight: bold; font-size: 20px">书名:xxx</li>
                <li>作者:xxx</li>
                <li style="font-weight: bold;font-size: 20px">借书人:王五</li>
                <li>借阅期限: 15天</li>
                <li>还书日期: 2019年6月30日</li>
            </ul>
        </div>
        <div class="bookstate">已预约</div>
       <button class="btn">确认借出</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
             movies:[
                {url:'../../../../static/images/lunbo1.png'},
                {url:'../../../../static/images/lunbo2.png'},
                {url:'../../../../static/images/lunbo3.png'},
                {url:'../../../../static/images/lunbo4.png'}

            ]
        }
    }
}
</script>

<style>
page{   
  background: lightcyan;
 }
.swiper {
  height: 250px;
  margin: 5px;
}
.bookdetail{
    margin: 30px;
}
.bookdetail li{
    margin: 10px 0;
}
.bookstate{
    font-weight: bold;
    font-size: 30px;
    position: relative;
    top: -150px;
    left: 220px;
}
.btn{
    width: 200px;
    background: lightblue
}
</style>
