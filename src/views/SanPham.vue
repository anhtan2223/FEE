<template>
        <div class="big">

                

                <h1 class="text-center mb-3" style="color : white">Sản Phẩm</h1>

                <div class="inputSearch text-center mt-3">
                        <input type="text" class="text-center" placeholder="Nhận Tên Sản Phẩm Cần Tìm ">
                        <button type="button" class="btn btn-dark" width="20px">
                                <i class="fas fa-search"></i>
                        </button>   
                </div>

                <div class="card-group">
                        <div class="card" v-for="i in productList" :key="i._id">
                                <div class="card-body text-center">
                                       <img :src="i.PrdImage" alt="PrdImage">
                                </div>
                                <div class="products_text text-center">
                                        <h2>{{  i.productName }}</h2>
                                        <p>
                                               {{ i.description }}
                                        </p>
                                        <h3>{{ i.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'}) }}</h3>

                                        <button class="btn add-card m-3">Add Cart</button>
                                </div>
                        </div>
        
                        <!-- {{ productList }} -->
                </div>
        </div>
</template>
    
<script setup lang='ts'>
        import {ref} from 'vue'
        import AxiosAPI from '../services/api.service'
        const productList = ref()
        async function getProduct()
        {
                productList.value = await AxiosAPI.getAllProduct()
        }
        getProduct()
</script>
    
<style scoped>
    .card {
        box-shadow: 0 0 20px rgb(255, 255, 255);
        margin : 1.5vw ;
        min-width: 22vw;
        max-width: 22vw;
    }
    .card-group{
        margin-left: 4vw  ;
        margin-bottom : 20px ;
    }
    .card:first-child{
        margin-left: 0px;
    }
    .card:hover{
        transform: translateX(30);
    }
    .card img {
        width: 10vw;
        transition: 0.5s;
    }
    .card img:hover{
        transform: scale(1.2);
    }
    .card .btn {
        color: rgb(255, 255, 255);
        background: linear-gradient(to right, #c72092 , #6c14d0);
    }

    .inputSearch{
        margin-bottom: 20px ;
    }

    .inputSearch input{
        width: 50vw;
        height: 30px;
    }

    .card p {
        height : 10vh ;
    }
    
</style>