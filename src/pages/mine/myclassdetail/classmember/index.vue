<template>
    <div>
        <ul class="member">
            <li>
                <image src="../../../../static/images/lunbo3.png"></image>
                <span>同学A</span>
            </li>
             <li>
                <image src="../../../../static/images/lunbo3.png"></image>
                <span>同学B</span>
            </li>
             <li>
                <image src="../../../../static/images/lunbo3.png"></image>
                <span>同学C</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style> 
.member li{
    height: 80px;
    background: lemonchiffon;
    margin: 10px;
    border-radius: 5px;
}
.member image{
    width: 60px;
    height: 60px;
    margin: 10px;
    border-radius: 30px;
}
.member span{
    font-weight: 30;
    font-size: 30px;
    position: relative;
    top: -26px;
}
</style>
