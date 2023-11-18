<template>
        <div class="container bg-white text-center">
                <h3 class="text-center m-3 header-cart">Giỏ Hàng</h3>
                <div class="card-body">
                        <table class="table ">
                                <thead>
                                        <tr>
                                                <th scope="col">Hình Ảnh</th>
                                                <th scope="col">Tên Sản Phẩm</th>
                                                <th scope="col">Giá Tiền</th>
                                                <th scope="col">Số Lượng</th>
                                                <th scope="col">Tổng Tiền</th>
                                        </tr>
                                </thead>
                                <tbody>
                                        <tr class="align-middle">
                                                <th scope="row">
                                                        <img class="image" src="/image/shoes6.png" alt="">
                                                </th>
                                                <td>Giầy Cam</td>
                                                <td>200$</td>
                                                <td>
                                                        <input type="number" name="" id="" value="1">
                                                </td>
                                                <td>200$</td>
                                                <td>
                                                        <button type="button" class="btn btn-outline-danger ">Xoá</button>   
                                                </td>
                                        </tr>

                                        <tr class="align-middle">
                                                <th scope="row">
                                                        <img class="image" src="/image/shoes2.png" alt="">
                                                </th>
                                                <td>Giầy Đen</td>
                                                <td>300$</td>
                                                <td>
                                                        <input type="number" name="" id="" value="1">
                                                </td>
                                                <td>300$</td>
                                                <td>
                                                        <button type="button" class="btn btn-outline-danger ">Xoá</button>    
                                                </td>
                                        </tr>

                                        <tr class="align-middle">
                                                <th scope="row">
                                                        <img class="image" src="/image/shoes3.png" alt="">
                                                </th>
                                                <td>Giầy Xanh</td>
                                                <td>400$</td>
                                                <td>
                                                        <input type="number" name="" id="" value="1">
                                                </td>
                                                <td>400$</td>
                                                <td>
                                                        <button type="button" class="btn btn-outline-danger ">Xoá</button>    
                                                </td>
                                        </tr>
                                </tbody>
                        </table>

                        <div class="detail text-end me-4">
                                <strong>Tổng Tiền : 1000$</strong>
                        </div>

                        <div class="footer mb-3">
                                <button class="btn btn-outline-success">Xác Nhận Đặt Hàng</button>
                        </div>
                </div>

                <div class="card-body">
                        <h3>Bạn Chưa Thêm Món Nào Vào Giỏ Hàng</h3>
                </div>
        </div>

        
</template>
        
<script setup lang='ts'>
import { useRouter } from "vue-router"
const router = useRouter()
if(localStorage.isLogin !== 'user')
{
        alert("Vui Đăng Nhập Tài Khoản Khách Hàng")
        router.push('/login')

}
</script>
        
<style>
        .image {
                height: 8vh;
        }

        .item {
                color: rgb(181, 39, 39);
        }
        .container {
                margin-top: -20vh ;
        }
</style>