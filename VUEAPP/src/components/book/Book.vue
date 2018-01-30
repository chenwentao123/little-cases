<template>
  <div>
      <common-header isColor="rgb(121, 85, 72)">
          <span slot="title">Book</span>
      </common-header>
      <h1>Book</h1>
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

</style>