<template>
   <div class="login">
       <div class="title" style="text-align:center">
           <router-link
            to="/home"
            tag="span"
            >
            <span style="color:#99f">首页</span>
            </router-link>
            <span style="margin-left:5rem">注册新用户</span>
        </div>
 
    <form class="login-form" method="post" novalidate >
        <!--输入框-->
        <div class="input-content">
            <!--autoFocus-->
            <div>
                <input type="text" autocomplete="off" v-model="userName"
                       placeholder="用户名" name="userNameOrEmailAddress" required/>
            </div>
 
            <div style="margin-top: 16px">
                <input type="password" v-model="passWord"
                       autocomplete="off" placeholder="密码" name="password" required maxlength="32"/>
            </div>
        </div>
 
        <!--登入按钮-->
        <div style="text-align: center">
             <input type="button" value="注册" @click="reg">
             <h3 v-show= "error==0">注册成功<router-link to="/login">去登录</router-link></h3>
             <h3 v-show= "error==1">用户名已存在</h3>
        </div>
 
        <div class="foor">
            <div class="left"><span>已有账号 ?</span></div>
            <router-link
            to="/login">

                <div class="right"><span>去登陆</span></div>
            </router-link>
        </div>
    </form>

   </div>
</template>
<style>
 
    *{
        padding: 0;
        margin: 0;
    }
 
    .main {
        margin: 0 auto;
        padding-left: 25px;
        padding-right: 25px;
        padding-top: 15px;
        width: 350px;
        height: 350px;
        background: #FFFFFF;
        /*以下css用于让登录表单垂直居中在界面,可删除*/
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -175px;
        margin-left: -175px;
    }
 
    .title {
        width: 100%;
        height: 40px;
        line-height: 40px;
    }
 
    .title span {
        font-size: 18px;
        color: #353f42;
    }
 
    .title-msg {
        width: 100%;
        height: 64px;
        line-height: 64px;
    }
 
    .title:hover{
        cursor: default	;
    }
 
    .title-msg:hover{
        cursor: default	;
    }
 
    .title-msg span {
        font-size: 12px;
        color: #707472;
    }
 
    .input-content {
        width: 100%;
        height: 120px;
    }
 
    .input-content input {
        width: 330px;
        height: 40px;
        border: 1px solid #dad9d6;
        background: #ffffff;
        padding-left: 10px;
        padding-right: 10px;
        margin: 0 auto;
        display: block;
    }
 
    .enter-btn {
        width: 350px;
        height: 40px;
        color: #fff;
        background: #0bc5de;
        line-height: 40px;
        text-align: center;
        border: 0px;
    }
 
    .foor{
        width: 100%;
        height: auto;
        color: #9b9c98;
        font-size: 12px;
        margin-top: 20px;
    }
 
    .enter-btn:hover {
        cursor:pointer;
        background: #1db5c9;
    }
 
    .foor div:hover {
        cursor:pointer;
        color: #484847;
        font-weight: 600;
    }
 
    .left{
        float: left;
    }
    .right{
        float: right;
    }
 
</style>
<script>
import axios from "../plugins/axios";
 
  export default {
    data() {
      return {
        userName: '',
        passWord: '',
        error:'7',
        isBtnLoading: false,
        msg:false
      }
    },
    /* async mounted(){
        let res = await axios({url:'localhost:3000/api/login'})       
            this.error = res.error;
    }, */
    methods:{
        reg(){
            var params = new URLSearchParams();
            params.append("username",this.userName); 
            params.append("password",this.passWord); 
            axios({
            method:'post',
            url:"http://localhost:3000/api/reg",
            data:params          
            }).then((res)=>{    
                // console.log(res.data.error)
                this.error = res.data.error
            });
        }
    }
  }
</script>

