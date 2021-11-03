<template>
  <div class="box">
    <h3>登录页面</h3>
    <el-form
      :model="loginData"
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="username">
        <el-input v-model="loginData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginData.password"></el-input>
      </el-form-item>
      <div class="item-button">
        <el-button type="primary" @click="submitForm('loginForm')"
          >登录</el-button
        >
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginData: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "账号不得为空", trigger: "blur" },
          { min: 3, max: 32, message: "长度应在3~32之间", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不得为空", trigger: "blur" },
          { min: 3, max: 32, message: "长度应在3~32之间", trigger: "blur" }
        ]
      },
    };
  },
  methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.loginData)
            this.$axios.post('/login', this.loginData).then(res => {
                console.log('res------>', res.data);
                this.$message({
                    type: 'success',
                    message: '登录成功'
                })
                localStorage.setItem('elementToken', 'Bearer ' + res.data);
                this.$router.push('/index')
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
  }
};
</script>

<style scoped>
.box {
  width: 500px;
  height: 220px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 5px #eee;
}
h3 {
  text-align: center;
}
.el-input {
  width: 92%;
}
.item-button {
  display: flex;
}
.item-button button {
  width: 120px;
  margin: 0 auto;
}
</style>
