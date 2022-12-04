<template>
  <div class="login-account">
    <n-form
      label-placement="left"
      ref="formRef"
      :model="modelRef"
      :rules="rules"
    >
      <n-form-item label="账号" path="name">
        <n-input
          placeholder="请输入账号"
          v-model:value="modelRef.name"
          type="text"
        />
      </n-form-item>
      <n-form-item label="密码" path="password">
        <n-input
          placeholder="请输入密码"
          type="password"
          show-password-on="mousedown"
          :clearable="true"
          v-model:value="modelRef.password"
        />
      </n-form-item>
    </n-form>
    <div class="bottom-bar">
      <n-checkbox> 记住密码 </n-checkbox>
      <span>忘记密码</span>
    </div>
    <n-button style="width: 100%" type="primary" @click="btnHandleLoginClick"
      >登录</n-button
    >
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { NForm } from 'naive-ui'
import { useStore } from 'vuex'
import accountRules from '../config/account-rules'

interface IModelType {
  name: string | null
  password: string | null
}

const store = useStore()

const formRef = ref<InstanceType<typeof NForm>>()
const modelRef = ref<IModelType>({
  name: null,
  password: null
})
const rules = accountRules()

const btnHandleLoginClick = (e: MouseEvent) => {
  e.preventDefault()
  formRef.value?.validate((err) => {
    if (!err) {
      store.dispatch('loginModule/accountLoginAction', { ...modelRef.value })
    } else {
      window.$message.error('请正确填写账号和密码')
    }
  })
}
</script>

<style lang="less" scoped>
.bottom-bar {
  display: flex;
  // background: red;
  justify-content: space-between;
  margin-top: -5px;
  margin-bottom: 5px;

  span {
    color: #18a058;
    cursor: pointer;
  }
}
</style>
