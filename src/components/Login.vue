<template lang="html">
  <div class="loginIn">
    <i-switch v-model="switchAreaType"></i-switch> <span>{{ areaType[switchAreaType] }}</span>
    <div v-show="!!switchAreaType" class="SignIn">
      <Form ref="SignIn" :model="SignIn" :rules="SignInRule" label-position="top">
        <FormItem label="User Name" prop="userName">
          <Input type="text" v-model="SignIn.userName"></Input>
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
        <FormItem label="User Name" prop="userName">
          <Input type="text" v-model="SignUp.userName"></Input>
        </FormItem>
        <FormItem label="Password" prop="passwd">
          <Input type="password" v-model="SignUp.passwd"></Input>
        </FormItem>
        <FormItem label="Confirm" prop="passwdCheck">
          <Input type="password" v-model="SignUp.passwdCheck"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="signUp()">SignUp</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('填入一組密碼，符合長度 6 個字元以上'))
      } else {
        if (this.SignUp.passwdCheck !== '') {
          this.$refs.SignUp.validateField('passwdCheck')
        }
        callback()
      }
    }
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('再填入一樣的密碼'))
      } else if (value !== this.SignUp.passwd) {
        callback(new Error('兩邊不一樣，請再確認'))
      } else {
        callback()
      }
    }

    return {
      areaType: {
        true: 'SignIn', // 登入
        false: 'SignUp', // 註冊
      },
      switchAreaType: true,
      value: 'abc',
      SignIn: {
        userName: '',
        password: '',
      },
      SignInRule: {
        userName: [
          { required: true, message: '填入要登入的使用者帳號', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '填入要登入的使用者帳號相對應的密碼', trigger: 'blur' },
          { type: 'string', min: 6, message: '長度要有 6 個字元', trigger: 'blur' },
        ],
      },
      SignUp: {
        userName: '',
        passwd: '',
        passwdCheck: '',
      },
      SignUpRule: {
        userName: [],
        passwd: [
          { validator: validatePass, trigger: 'blur' },
        ],
        passwdCheck: [
          { validator: validatePassCheck, trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    signIn () {
      console.log('SignIn', this.$refs['SignUp'])
    },
    signUp () {
      console.log('SignUp')
      this.$refs['SignUp'].validate((valid) => {
        if (valid) {
          // this.$Message.success('Success!')
        } else {
          // this.$Message.error('Fail!')
        }
      })
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
