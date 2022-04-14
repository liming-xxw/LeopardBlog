<template>
  <div class="login">
    <div class="cain_login">
      <div class="login_box">
        <div class="login_box_header">
          <img src="../../assets/image/batmanlogo.png" alt="" />
          <div>cain博客后台管理</div>
        </div>
        <div class="login_box_from">
          <a-form
            ref="formRef"
            :model="formState"
            name="dynamic_rule"
            v-bind="formItemLayout"
            :rules="rules"
          >
            <a-form-item label="用户名" name="adminname" has-feedback>
              <a-input v-model:value="formState.adminname" autocomplete="off" />
            </a-form-item>

            <a-form-item has-feedback label="密码" name="adminpass">
              <a-input
                v-model:value="formState.adminpass"
                type="password"
                autocomplete="off"
              />
            </a-form-item>

            <a-form-item v-bind="formTailLayout">
              <div class="form_buts">
                <a-button type="primary" @click="onCheck">登录</a-button>
                <a-button type="primary" @click="onCheck">注册</a-button>
              </div>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch } from "vue";
import type { RuleObject } from "ant-design-vue/es/form";
import { Login } from "../../service/login";
interface FormState {
  adminname: string;
  adminpass: string;
}
const formRef = ref();
const formState = reactive<FormState>({
  adminname: "",
  adminpass: "",
});
let adminuser = async (_rule: RuleObject, value: string) => {
  if (value.length <9 ) {
    return Promise.reject("长度不符");
  } else {
    return Promise.resolve();
  }
};
let adminpass = async (_rule: RuleObject, value: string) => {
  if (value.length < 6) {
    return Promise.reject("密码长度不符");
  } else {
    return Promise.resolve();
  }
};

const rules = {
  adminname: [{ validator: adminuser, trigger: "change" }],
  adminpass: [{ validator: adminpass, trigger: "change" }],
};

const onCheck = async () => {
  try {
    const values = await formRef.value.validateFields();
    await Login(formState);
  } catch (errorInfo) {
    console.log(errorInfo);
  }
};
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
</script>

<style lang="scss" scoped>
.login {
  .cain_login {
    width: 100%;
    height: 100%;
    background-image: url("../../assets/image/wh.jpg");
    background-size: cover;
    background-position: center -400px;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    overflow-y: scroll;
    .login_box {
      width: 400px;
      height: auto;
      margin: 0 auto;
      position: relative;
      padding: 20px;
      top: 200px;
      border-radius: 10px;
      background-color: #fdfeff;
      box-shadow: 0 0 #0000, 0 0 #0000, -0 0 #0000, 0 0 #0000,
        0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06);
      .login_box_header {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        font-size: 17px;
        img {
          width: 200px;
          height: 60px;
          margin: 0 auto;
        }
      }
      .login_box_from {
        margin-top: 20px;
        .form_buts {
          display: flex;
          gap: 20px;
          margin-left: 30px;
        }
      }
    }
  }
}

::-webkit-scrollbar {
  width: 3px;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
