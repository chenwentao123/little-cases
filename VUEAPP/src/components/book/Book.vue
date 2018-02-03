<template>
    <swipe class="my-swipe">
        <swipe-item class="slide1"></swipe-item>
        <swipe-item class="slide2"></swipe-item>
        <swipe-item class="slide3"></swipe-item>
    </swipe>
</template>

<script>
import "vue-swipe/dist/vue-swipe.css";
import { Swipe, SwipeItem } from "vue-swipe";
export default {
  components: {
    swipe: Swipe,
    "swipe-item": SwipeItem
  }
};
</script>

<style scoped>
.my-swipe {
  height: 606px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-top: 1rem;
}

.slide1 {
  background: url(../../assets/img/1.jpg) center/cover;
  color: #fff;
}

.slide2 {
  background: url(../../assets/img/2.jpg) center/cover;
  color: #000;
}

.slide3 {
  background: url(../../assets/img/3.jpg) center/cover;
  color: #fff;
}
</style>
