<template lang="html">
  <div>
    <button v-if="showButton" type="button" name="button" @click="test()">Demo 專用假裝掃 QR code 的登入</button>
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
    async test () {
      await this.$store.dispatch('Login')
      this.$store.dispatch('userDownLines', { idUser: this.$store.getters.myId })
      this.$store.dispatch(`allChildAccount`)
      await this.$store.dispatch(`WalletPage`)
      this.$router.push('/Main')
    },
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
        // await this.$store.dispatch('Login')
        this.$store.dispatch('userDownLines', { idUser: this.$store.getters.myId })
        this.$store.dispatch(`allChildAccount`)
        await this.$store.dispatch(`WalletPage`)
        this.$router.push('/Main')
      } catch (e) {
        setTimeout(this.isLoginSuccess, 2000)
      }
    },
  },
}
</script>

<style lang="css">
</style>
