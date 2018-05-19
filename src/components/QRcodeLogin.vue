<template lang="html">
  <div>
    <button type="button" name="button" @click="test()">登入</button>
    <div id="placeHolder"></div>
  </div>
</template>

<script>
import qrcode from 'qrcode-generator'
export default {
  async mounted () {
    // call api create qr code
    await this.$store.dispatch('CreateQRcode')
    this.renderQRcode()
  },
  methods: {
    async test () {
      await this.$store.dispatch('Login')
      this.$store.dispatch('userDownLines', { idUser: 1 })
      this.$store.dispatch(`allChildAccount`)
      await this.$store.dispatch(`WalletPage`)
      this.$router.push('/Main')
    },
    renderQRcode () {
      var typeNumber = 4
      var errorCorrectionLevel = 'L'
      var qr = qrcode(typeNumber, errorCorrectionLevel)
      qr.addData(this.$store.getters.qrcode)
      qr.make()
      document.querySelector('#placeHolder').innerHTML = qr.createImgTag(10)
    },
  },
}
</script>

<style lang="css">
</style>
