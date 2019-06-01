<template>
    <div>
        <ul class="creditdetail">
                <li>
                    <div class="title">按时还书</div>
                    <div class="date">2019-05-10</div>    
                    <div class="detail">+5</div>
                </li>  
                <li>
                    <div class="title">逾期未还</div>
                    <div class="date">2019-05-10</div>    
                    <div class="detail">-10</div>
                </li>            
        </ul>
        
    </div>
</template>

<script>
export default {

}
</script>

<style>
.creditdetail li{
    
    background: lightyellow;
    border: 1px solid gray;
    border-radius: 10px;
    margin: 10px;
    padding-left: 20px;
}
.title,.detail,.date{
    position: relative;
}
.title{
    font-weight: bold;
    top: 10px;
    font-size: 20px;
}
.date{
    top: 15px;
    font-size: 16px;
}
.detail{
    
    top: -25px;
    left: 280px;
    font-weight: bold;
}
</style>