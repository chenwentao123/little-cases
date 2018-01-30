<template>
    <div>
      <common-header isColor="rgb(0, 150, 136)">
          <span slot="title">Music</span>
      </common-header>
      <div class="container">
          Music
      </div>
      <common-footer isColor="rgb(0, 150, 136)"></common-footer>
  </div>
</template>

<script>
  import CommonHeader from '@/components/common/Header'
  import CommonFooter from '@/components/common/Footer'
export default {
    components: {
        CommonHeader,
        CommonFooter
    }
}
</script>

<style scoped>
.container{
    position:absolute;
    top:1rem;
    font-size:1.5rem;
}
</style>