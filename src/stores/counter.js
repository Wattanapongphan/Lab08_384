import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

  const menu = ref([
    { name: 'ท่าช้าง', price: 80, size: { s: 80, m: 150, l: 200 }, img: "https://www.tripgether.com/wp-content/uploads/tripgetter/thachang_3-1.jpg" },
  { name: 'GoodViews', price: 120, size: { s: 120, m: 180, l: 250 }, img:"https://www.chillnaid.com/wp-content/uploads/2017/08/P8220053-1024x768.jpg" },
  { name: 'RiverSide', price: 150, size: { s: 150, m: 190, l: 300 }, img:"https://www.topchiangmai.com/wp-content/uploads/2016/01/The-Riverside-1.jpg" },
  { name: 'WarmUp', price: 100, size: { s: 100, m: 200, l: 500 }, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQkSQx5MhvO5ZpYUqco6vovsnBY5_qyH6LezGb2B0hJg&s" },
  { name: 'ตะวันแดง', price: 90, size: { s: 90, m: 250, l: 700 }, img:"https://img.wongnai.com/p/1920x0/2019/05/03/fa5644c7136f4eaf853f2d01e765cc98.jpg"},
  { name: 'Amazon', price: 120, size: { s: 80, m: 100, l: 150 }, img:"https://www.brandbuffet.in.th/wp-content/uploads/2021/10/Cafe-Amazon-BE-Cover-1.jpg"}

  ]);
  
  
  return { menu}
})
export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartList: [], 
    orderList:[],
  }),
  actions: {
    addToCart(item) {
      this.cartList.push(item);
    },
    addOrderList() {
      // เพิ่มค่าลงไปใน orderList
      this.orderList.push(...this.cartList);
    
     this.cartList = [];
    },

  },
});
