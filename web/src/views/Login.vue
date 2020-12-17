<template>
  <div class="container">
    <top-header></top-header>
    <div class="login-page">
      <div class="login-tips">登录到管理系统</div>
      <div class="username">账号: <input type="text" v-model="userName"/></div>
      <div class="password">密码: <input type="text" v-model="password"/></div>
      <button class="login" @click="login(userName,password)">登录</button>
    </div>
  </div>
</template>

<script>
import TopHeader from "../components/TopHeader";
export default {
  components: {
    TopHeader,
  },
  data() {
    return {
      userName:'',
      password:''
    }
  },
  methods: {
    login(userName,password){
      console.log(userName,password);
      let logUser = {
        userName:userName,
        password:password
      }
      let user = JSON.parse(localStorage.getItem('user'))
      // console.log(JSON.parse(user));
      if(logUser.userName!=user.userName){
        alert("用户名错误！")
        // console.log(userName==user.userName);
      }else if(logUser.password!=user.password){
        alert("密码错误！")
      }else{
        alert("登录成功！")
        this.$router.push('/home')
      }
    }
  },
};
</script>

<style lang='less' scoped>
* {
  margin: 0;
  padding: 0;
}
input {
  outline: none;
}
.container {
  .login-page {
    text-align: center;
    padding-top: 30px;
    .login-tips {
      padding: 20px;
      font-size: 24px;
    }
    .username {
      font-size: 18px;
      padding: 20px 20px 0 20px;
    }
    .password {
      font-size: 18px;
      padding: 20px;
    }
    .login{
      width: 220px;
      background-color: aquamarine;
      outline: none;
      border: 1px solid black;
      font-size: 18px;
      border-radius: 5px;
    }
  }
}
</style>
