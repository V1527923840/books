<template>
    <div>
        <div class="codecontent">
            <image src='../../../../static/images/lunbo2.png' class="classphoto"></image>
            <ul class="classname">
                <li style="font-weight:bold;font-size:25px">小学一(2)班</li>
                <li>当前人数:??人</li>
            </ul>
            <image src='../../../../static/images/lunbo3.png' class="classcode"></image>
            <div class="tips">sacn the QR code to add this class growd</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.codecontent{
    margin: 20px;
    background: lightcoral;
}
.classphoto{
    width: 80px;
    height: 80px;
    border-radius: 10px;
    margin: 10px;
}
.classname,.classcode,.tips{
    position: relative;
}
.classname{   
    top: -80px;
    left: 110px;
    
}
.classcode{
    width: 300px;
    height: 300px;
    top: -50px;
    left: 17px;
}
.tips{
    font-size: 14px;
    top: -40px;
    text-align: center;
}
</style>
