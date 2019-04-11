<template>
    <div class="dota">

        <h2>{{ msg }}</h2>
        <button v-on:click="getDataThis()">逐个获取</button>
        <button v-on:click="getData()">获取所有</button>
        <br>
        <ul>
            <li v-for="item in userInfo">
                {{item.name}}
                {{item.username}}
                {{item.email}}
            </li>
        </ul>

        <!--使用axios获取数据-->

    </div>
</template>

<script>
    // import axios from 'axios'
    export default {

        name: 'Dota',

        //函数
        data () {
            return {
                msg: '通讯录',
                userInfo:[
                    {
                        name:'hah',
                        username:'santana',
                        email:'46546465@qq.com'
                    },
                    {
                        name:'lilis',
                        username:'honda',
                        email:'798798789@qq.com'

                    },
                ]
            }
        },

        //对象
        methods:{
            getData:function () {    //作为对象方法被调用

                var that = this;

                //相当于这个方法是写在外面的，在这里调用它
                that.$axios.get('http://jsonplaceholder.typicode.com/users')   //新创建的对象，原来没有，由vue组件创建的，所以this指向整个组件对象
                                                                               //this.userInfo是原来data对象就有的，所以this默认指向data

                    // .then(data=> console.log(this))
                    // .then(data=> this.userInfo = data.data)

                    .then(function (data) {
                        that.userInfo = data.data;
                        console.log(data)

                    })
            },
            getDataThis:function () {
                this.userInfo.push({
                    name:'test',
                    username:'test',
                    email:'test@qq.com'
                });
                console.log(this)
            }


            }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h2{
        margin-bottom: 10px;
        margin-top: 10px;

    }
    .dota{
        margin: 10px auto;
        background-color: #eee;
        width: 500px;
        // height: 500px;
        // text-align: center;
        padding-top:5px;
        border: rgba(0, 0, 0, 0.47) 2px solid;
        border-radius:15px

    }
    li{
        display: block;
        margin-bottom:5px;
    }
</style>
