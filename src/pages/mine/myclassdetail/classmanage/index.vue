<template>
    <div>
        <ul class="apply">
            <li>
                <image src="../../../../static/images/lunbo3.png"></image>
                <div class="applyname">同学A</div>
                <div class="applynumber">学号:123465</div>
                <button class="agree">同意</button>
                <button class="reject">拒绝</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style> 
.apply li{
    height: 80px;
    background: lemonchiffon;
    margin: 10px;
    border-radius: 5px;
}
.apply image{
    width: 60px;
    height: 60px;
    margin: 10px;
    border-radius: 30px;
}
.applyname,.applynumber,.apply button{
    position: relative;
}
.applyname{
    top: -70px;
    left: 90px;
    font-weight: bold;
    font-size: 20px;
}
.applynumber{
    top:-65px;
    left: 90px;
}
.agree,.reject{
    height: 50px;
    width: 75px;
}
.agree{
    background: lightblue;
    top: -115px;
    left: 70px;
}
.reject{
    background:lightcoral;
    top: -165px;
    left: 145px;
}
</style>