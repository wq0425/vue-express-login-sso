<template>
  <div class="box">
    <h3>用户列表</h3>
    <el-table :data="list" style="width: 100%">
      <el-table-column type="index" label="序号" width="120"> </el-table-column>
      <el-table-column prop="username" label="账号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="用户名"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    data() {
        return {
            list: []
        }
    },
  beforeMount() {
    this.$axios.get("/").then((res) => {
      console.log(res.data);
      this.list = res.data;
    });
  },
};
</script>

<style scoped>

</style>
