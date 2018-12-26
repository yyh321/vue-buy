<template>
  <div>
    <ul>
      <li v-for="(good,index) in goods" :key="good.text">
       <span>{{good.text}}</span><span>￥{{good.price}}</span>
       <button @click="addCart(index)">添加购物车</button>
        </li>
    </ul>
    <hr/>
    <cart :title="name"></cart>
  </div>
</template>

<script>
import Cart from './components/Card'

export default {
  name: "app",
  components:{
    Cart
  },
  data() {
    return {
      name: "开课吧",
      goods: [
        { text: "百万年薪前端架构师",price: 40 },
        { text: "web全栈架构师",price:100 },
        { text: "Python爬虫",price:50 },
        { text: "Java开发高级工程师",price:20 },
        { text: "PHP开发高级工程师",price:10 },
        { text: "Ruby开发高级工程师",price:60 },
        { text: "C++开发高级工程师",price:90 },
      ],
      // cart:[]
    }
  },
  methods:{
    addCart(i){
      let good = this.goods[i]
      this.$bus.$emit('addCart',good)
    }
    // addCart(index){
    //   let good = this.goods[index]
    //   let ret = this.cart.find(v=> v.text == good.text)
    //   console.log(ret,index,good.text)
    //   if(ret){
    //     ret.count +=1
    //   } else {
    //     this.cart.push({
    //       ...good,
    //       active:true,
    //       count:1
    //     })
    //   }
    // }
  }
};
</script>

<style lang="en">
</style>







