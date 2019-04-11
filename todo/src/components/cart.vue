<template>
  <div class="cart">
    <div v-if="list.length">
      <table>
        <thead>
          <tr>
            <td></td>
            <td>名称</td>
            <td>单价</td>
            <td>数量</td>
            <td>操作</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in list">
            <td>{{index+1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
            <td>
              <button @click="reduce(index)" :disabled="item.count === 1">-</button>
                {{item.count}}
              <button @click="add(index)">+</button>
            </td>
            <td>
              <button @click="deleteGood(index)">移除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>去结算：￥{{totalPrice}}</div>
    </div>
    <div v-else>购物车是空的，快去买点什么吧</div>
  </div>
</template>

<script>
    export default {
      name: "cart",
      data(){
        return{
          list:[
            {
              id:1,
              name:'phone',
              price:2000,
              count:1
            },
            {
              id:2,
              name:'pad',
              price:4000,
              count:1
            },
            {
              id:3,
              name:'mac',
              price:13000,
              count:1
            }
          ]

        }
      },
      methods:{
        reduce(index){
          if(this.list[index].count === 1) return;
          this.list[index].count--;
        },
        add(index){
          this.list[index].count++;
        },
        deleteGood(index){
          this.list.splice(index,1);
        }

      },
      computed:{
        totalPrice:function () {
          let total = 0;
          for(let i = 0; i<this.list.length; i++){
            total += this.list[i].price * this.list[i].count;
          }
          return total;
        }
      }

    }
</script>

<style scoped>
  html,body{
    width: 100%;
  }
  .cart{
    width: 70%;
    margin: 50px auto;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    border: 2px solid rgb(200,200,200);
    letter-spacing: 1px;
    font-size: 0.8rem;
    margin-bottom: 20px;
  }

  td, th {
    border: 1px solid rgb(190,190,190);
    padding: 10px 20px;
  }

  th {
    background-color: rgb(235,235,235);
  }

  td {
    text-align: center;
  }

  tr:nth-child(even) td {
    background-color: rgb(250,250,250);
  }

  tr:nth-child(odd) td {
    background-color: rgb(245,245,245);
  }
</style>
