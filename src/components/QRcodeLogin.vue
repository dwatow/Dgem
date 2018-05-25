<template lang="html">
  <div>
    <h1>行動裝置刷 QR code 登入</h1>
    <div id="placeHolder"></div>
  </div>
</template>

<script>
import qrcode from 'qrcode-generator'
export default {
  data () {
    return {
      showButton: false,
    }
  },
  async mounted () {
    // call api create qr code
    await this.$store.dispatch('CreateQRcode')
    this.renderQRcode()
    setTimeout(() => {
      this.isLoginSuccess()
    }, 3500)
  },
  methods: {
    renderQRcode () {
      var typeNumber = 0
      var errorCorrectionLevel = 'L'
      var qr = qrcode(typeNumber, errorCorrectionLevel)
      // console.log(this.$store.getters.qrcode.length, this.$store.getters.qrcode)

      qr.addData(`${this.$store.getters.qrcode}`)
      // qr.addData('this.$store.getters.qrcode')
      qr.make()
      document.querySelector('#placeHolder').innerHTML = qr.createImgTag(10)
      this.showButton = true
    },
    async isLoginSuccess () {
      try {
        await this.$store.dispatch('LoginQRcode')
        this.$router.push('/Main')
      } catch (e) {
        if (!this.$store.getters.isLogin) {
          setTimeout(this.isLoginSuccess, 2000)
        }
      }
    },
  },
}
</script>

<style lang="css">
</style>
