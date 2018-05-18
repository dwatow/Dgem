<template lang="html">
  <div class="noStart">
    <img src="https://fakeimg.pl/350x200/fff/000/?text=Comming soon...&font=bebas" alt="">
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scope>
.noStart {
  position: relative;
  height: 80vh;
}

.noStart img {
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
