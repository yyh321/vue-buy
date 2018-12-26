<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>是否选中</th>
                   <th>课程名称</th>
                   <th>单价</th>
                   <th>数量</th>
                   <th>总价</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(good,i) in cart" :key="good.text" :class="{active:good.active}">
                    <td><input type="checkbox" v-model="good.active"></td>
                    <td >{{good.text}}</td>
                    <td>{{good.price}}</td>
                    <td><button @click="add(i)"> + </button>{{good.count}}<button @click="minus(i)"> - </button></td>
                    <td>{{good.price*good.count}}</td>
                </tr>
                <tr>
                    <td></td>
                    <td colspan="2">{{activeCount}}/{{count}}</td>
                    <td colspan="2">￥{{total}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name:'cart',
    props:['title'],
    data(){
        return{
            cart:[]
        }
    },
    computed:{
        total(){
            let num = 0
            this.cart.forEach(v => {
                if(v.active){
                    num+=v.price*v.count
                }
            })
            return num
        },
        count(){
            return this.cart.length
        },
        activeCount(){
          return  this.cart.filter(v => v.active).length
        }
    },
    created(){
        this.$bus.$on('addCart',good=>{
            const ret = this.cart.find(v => v.text == good.text)
            if(ret){
                ret.count += 1;
            } else{
                this.cart.push({
                    ...good,
                    active:true,
                    count:1
                })
            }
        })
    },
    methods:{
        add(i){
            this.cart[i].count+=1
        },
        minus(i){
           let count = this.cart[i].count
            if(count>1){
                this.cart[i].count -=1
            } else {
                this.remove(i)
            }
        },
        remove(i){
            if(confirm(`是否要删除商品${this.cart[i].text}?`)){
                this.cart.splice(i,1)
            }
        }
    }
}
</script>

<style>
    tr.active{
        color: #ff5952;
    }
</style>