<template>
    <div class="ghostCartCont">
        <img src="../../public/img.png" alt="">
        <button class="switchBtn" @click="$emit(`update-theme`)">Сменить тему</button>
        <div class="inputCont">
            <input type="text">
            <input type="text">
            <input type="text">
            <input type="text">
            <input type="text">
        </div>
        <input type="text">
    </div>
</template>

<script>


export default {
    setup() {
       
    },
}
</script>


<style scoped>
.ghostCartCont{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 236px;
    height: 500px;
    padding: 14px 18px;
    border: 1px solid rgba(77, 77, 77, 1);
    border-radius: 12px;
}

.ghostCartCont input{
    border: 0;
    width: 80px;
    height: 10px;
    border-radius: 8px;
}

.inputCont{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 150px;
}

.inputCont input{
    border: 0;
    height: 10px;
    border-radius: 8px;
}

.inputCont input:nth-child(1){
    width: 165px;
}

.inputCont input:nth-child(2){
    width: 190px;
}

.inputCont input:nth-child(3){
    width: 170px;
}

.inputCont input:nth-child(4){
    width: 160px;
}

.inputCont input:nth-child(5){
    width: 140px;
}
</style>