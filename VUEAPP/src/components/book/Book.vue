<template>
  <div>
      <common-header isColor="rgb(121, 85, 72)">
          <span slot="title">Book</span>
      </common-header>
      <div class="container">
          Book
      </div>
      <common-footer isColor="rgb(121, 85, 72)"></common-footer>
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