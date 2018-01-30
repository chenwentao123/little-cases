<template>
  <div>
      <common-header isColor="rgb(33, 150, 243)">
          <span slot="title">Movie</span>
      </common-header>
      <div class="container">
          Movie
      </div>
      <common-footer isColor="rgb(33, 150, 243)"></common-footer>  
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