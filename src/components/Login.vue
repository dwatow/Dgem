<template lang="html">
  <div class="loginIn">
    <QRcodeLogin></QRcodeLogin>
    <h2>帳號登入</h2>
    <i-switch v-model="switchAreaType"></i-switch> <span>切換到 {{ areaType[switchAreaType] }}</span>
    <div v-show="!!switchAreaType" class="SignIn">
      <Form ref="SignIn" :model="SignIn" :rules="SignInRule" label-position="top">
        <FormItem label="User Name" prop="username">
          <Input type="text" v-model="SignIn.username"></Input>
        </FormItem>
        <FormItem label="Password" prop="password">
          <Input type="password" v-model="SignIn.password"></Input>
        </FormItem>
        <FormItem>
          <Button @click="signIn()" type="primary">SignIn</Button>
        </FormItem>
      </Form>
    </div>
    <div v-show="!switchAreaType" class="SignUp">
      <Form ref="SignUp" :model="SignUp" :rules="SignUpRule" label-position="top">
        <FormItem label="User Name" prop="name">
          <Input type="text" v-model="SignUp.name"></Input>
        </FormItem>
        <FormItem label="email" prop="email">
          <Input type="email" v-model="SignUp.email"></Input>
        </FormItem>
        <FormItem label="Password" prop="password">
          <Input type="password" v-model="SignUp.password"></Input>
        </FormItem>
        <FormItem label="Confirm" prop="passwordCheck">
          <Input type="password" v-model="SignUp.passwordCheck"></Input>
        </FormItem>
        <FormItem label="Upline Id" prop="upline_id">
          <Input v-model="SignUp.upline_id"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="signUp()">SignUp</Button>
          <Button type="ghost" @click="reset()">Reset</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import QRcodeLogin from '@/components/QRcodeLogin.vue'
export default {
  components: {
    QRcodeLogin,
  },
  data () {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('填入一組密碼，符合長度 6 個字元以上'))
      } else {
        if (this.SignUp.passwordCheck !== '') {
          this.$refs.SignUp.validateField('passwordCheck')
        }
        callback()
      }
    }
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('再填入一樣的密碼'))
      } else if (value !== this.SignUp.password) {
        callback(new Error('兩邊不一樣，請再確認'))
      } else {
        callback()
      }
    }

    const validateUplineId = (rule, value, callback) => {
      if (value < 1) {
        callback(new Error('填入上線的 ID 號碼'))
      } else {
        callback()
      }
    }

    return {
      areaType: {
        true: '帳號密碼登入', // 登入
        false: '註冊新帳號', // 註冊
      },
      switchAreaType: true,
      SignIn: {
        username: '',
        password: '',
      },
      SignInRule: {
        username: [
          { required: true, message: '填入要登入的使用者帳號', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '填入要登入的使用者帳號相對應的密碼', trigger: 'blur' },
          { type: 'string', min: 6, message: '長度要有 6 個字元', trigger: 'blur' },
        ],
      },
      SignUp: {
        name: '',
        email: '',
        password: '',
        passwordCheck: '',
        upline_id: 0,
      },
      SignUpRule: {
        name: [
          { required: true, message: '填入要註冊的使用者帳號', trigger: 'blur' },
        ],
        email: [
          { required: true, message: '填入要註冊的 email', trigger: 'blur' },
          { type: 'email', message: '請檢查 email 格式，是否有誤', trigger: 'blur' },
        ],
        password: [
          { required: true, validator: validatePass, trigger: 'blur' },
        ],
        passwordCheck: [
          { required: true, validator: validatePassCheck, trigger: 'blur' },
        ],
        upline_id: [
          { required: true, type: 'number', validator: validateUplineId, trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    signIn () {
      this.$refs['SignIn'].validate(async (valid) => {
        if (valid) {
          try {
            await this.$store.dispatch('Login', {
              password: this.SignIn.password,
              name: this.SignIn.username,
            })
            this.$router.push('/Main')
          } catch (e) {
            console.log(e)
            this.$Message.error('帳號密碼不匹配')
          }
        } else {
          this.$Message.error('帳號密碼格式出錯')
        }
      })
    },
    signUp () {
      this.$refs['SignUp'].validate(async (valid) => {
        if (valid) {
          const data = {
            email: this.SignUp.email,
            name: this.SignUp.name,
            password: this.SignUp.password,
            upline_id: this.SignUp.upline_id,
          }
          await this.$store.dispatch('CreateUser', data)
          this.switchAreaType = true
        } else {
          this.$Message.error('註冊失敗')
        }
      })
    },
    reset () {
      this.$refs['SignUp'].resetFields()
    },
  },
}
</script>

<style lang="css">
.loginIn {
  position: relative;
}

.loginIn > div {
  width: 50vw;
}

.loginIn > div{
  padding: 20px 0;
}

.loginIn {
  padding: 20px;
}

</style>
