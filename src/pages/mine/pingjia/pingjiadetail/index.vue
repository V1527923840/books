<template>
    <div>
        <div></div>
        <div class="head">
            <span class="head-title">评分:</span>
            <!-- <div class="head-title">评分:</div> -->
            <image class="no-star" :src="noStarUrl" @tap="addStar(1)" v-if="activeNum<1"/>
            <image class="star" :src="starUrl" v-if="activeNum>0 && activeNum<=5" @tap="addStar(1)"/>
            <image class="no-star" :src="noStarUrl" @tap="addStar(2)" v-if="activeNum<2"/>
            <image class="star" :src="starUrl" v-if="activeNum>1 && activeNum<=5" @tap="addStar(2)"/>
            <image class="no-star" :src="noStarUrl" @tap="addStar(3)" v-if="activeNum<3"/>
            <image class="star" :src="starUrl" v-if="activeNum>2 && activeNum<=5" @tap="addStar(3)"/>
            <image class="no-star" :src="noStarUrl" @tap="addStar(4)" v-if="activeNum<4"/>
            <image class="star" :src="starUrl" v-if="activeNum>3 && activeNum<=5" @tap="addStar(4)"/>
            <image class="no-star" :src="noStarUrl" @tap="addStar(5)" v-if="activeNum<5"/>
            <image class="star" :src="starUrl" v-if="activeNum===5"/>
            <span class="praise" v-if="activeNum===5">非常好</span>
            <span class="praise" v-if="activeNum===4">好</span>
            <span class="praise" v-if="activeNum===3">中等</span>
            <span class="praise" v-if="activeNum===2">一般</span>
            <span class="praise" v-if="activeNum===1">差</span>
        </div>
        <div>
            <textarea name="" id="" cols="30" rows="10" placeholder="说说你的阅读心得"></textarea>
        </div>
        <button class="btn">提交</button>
    </div>
</template>

<script>
export default {

    data () {
      return {
        activeNum: 0,
        noStarUrl: '../../../../static/images/staroff.png',
        starUrl: '../../../../static/images/staron.png'
      }
    },
    
    methods: {
        addStar (num) {
          let that = this
          that.activeNum = num
        }
    }

}
</script>

<style>
.head image{
    width: 30px;
    height: 30px;
}
.head-title{
    font-weight: bold;
    font-size: 25px;
}
.head,textarea{
    margin: 10px;
}
textarea{
    border: 1px solid gray;
}
.btn{
    width: 200px;   
    background: lightcoral;
}
</style>
