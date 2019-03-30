<template>
    <div class="todo">
        <link href="https://cdn.bootcss.com/twitter-bootstrap/4.2.1/css/bootstrap.css" rel="stylesheet">

        <!--用户输入-->
        <form class="infos">
            <!--不能用表单！！！！！！！！！-->
            <!--能用表单，但是要阻止表单的默认提交事件.....-->
            <div class="group">
                <label class="info">Name:</label>
                <input type="text" v-model="newPerson.name"/>
            </div>
            <div class="group">
                <label class="info">Age:</label>
                <input type="text" v-model="newPerson.age"/>
            </div>
            <div class="group">
                <label class="info">Sex:</label>
                <select v-model="newPerson.sex" >
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
            </div>
            <button id='sub' @click="addPerson">Create</button>
        </form>
        <br>
        <!--表格显示-->
        <div class="container">
            <table class="table  .table-bordered">
                <thead>
                    <tr>
                        <td>Info</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Sex</td>
                        <td>Manage</td>
                    </tr>
                </thead>
                <tr>
                    <td>Preview</td>
                    <td>{{newPerson.name}}</td>
                    <td>{{newPerson.age}}</td>
                    <td>{{newPerson.sex}}</td>

                </tr>
                <tbody>
                    <tr v-for="(person,index) in personList">
                        <td>
                            <input id='deleteline' type="checkbox"
                                   @click="lineUser(index)"/>
                        </td>
                        <td :class="{active:person.isChecked}">{{person.name}}</td>
                        <td>{{person.age}}</td>
                        <td>{{person.sex}}</td>
                        <td><button @click="deletePerson(index)">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {

        name: 'TodoList',
        data: function() {
            return {
                // isChecked:false,
                newPerson:{
                    name:'',
                    age: null,
                    sex:'',
                    isChecked:false,
                },
                personList:[
                    {
                        name:'stark',
                        age:'20',
                        sex:'male',
                        isChecked:false,
                    },{
                        name:'lucy',
                        age:'20',
                        sex:'female',
                        isChecked:false,
                    } 
                ]

            }
        },
        methods:{

            addPerson:function (e) {
                console.log(this);
                this.personList.push(this.newPerson);
                this.newPerson = {name: '', age: null, sex: ''};
                e.preventDefault()   //组织表单默认提交事件！！！！
            },

            deletePerson:function (index) {
                this.personList.splice(index,1)  //开始删除的位置，删除的数量
            },

            lineUser:function (index) {
                this.personList[index].isChecked = !this.personList[index].isChecked
                // console.log(this.isChecked)
            }

        }

    }
</script>

<style scoped>
    html,body *{
        box-sizing:border-box;
    }
    .todo{
        background-color:#eee;
        width: 70%;
        margin: 50px auto;
        text-align: center;
        border: rgba(0, 0, 0, 0.47) 2px solid;
        border-radius: 15px;
        padding: 20px;
        font-size:20px;
    }
    form{
        width:70%;
        margin:0 auto
    }
    .info{
        width:60px;
        // background-color:red;
        // text-align:left
    }
    input{
        width:200px;
        height:32px;

    }
    select{
        width:200px;        
        height:32px;
    }
    #sub{
        margin-top:10px;
        // padding:0 3px;
        margin-left:195px;
    }
    button{
        padding:0 3px;
    }
    #deleteline{
        width:15px;
        height:15px;
    }
    .active{
        text-decoration: line-through;
    }
</style>
