<template>
  <div class="container">
      <div class="introduction">
          <div class="image">
              <img :src="detail.img" alt="">
          </div>
          <div class="content">
              <ul>
                  <li class="name">{{detail.nm}}</li>
                  <li>{{detail.dir}}</li>
                  <li>{{detail.cat}}</li>
                  <li>{{detail.src}}</li>
                  <li>{{detail.rt}}</li>
              </ul>
          </div>
      </div>
      <div class="star-introduct">
          <h3>演员</h3>
          <p>{{detail.star}}</p>
      </div>
      <div class="simple-introduct">
          <h3>简介</h3>
          <div v-html="detail.dra"></div>
      </div>
      <div class="load" v-show="isLoading">
          <img src="../../assets/img/loading.gif" alt="">
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
      return {
          detail:{},
          isLoading:true
      }
  },
  created() {
      axios.get(`${API_PROXY}http://m.maoyan.com/movie/${
          this.$route.params.movieId
          }.json`)
      .then(res => {
          this.detail = res.data.data.MovieDetailModel;
          console.log(this.detail);
          this.isLoading = false;
      })
      .catch(res =>{
          alert('数据错误!');
      })
  }
}
</script>

<style scoped>
.container{
    margin-top:1rem;
    padding:0 0.1rem;
}
.introduction{
    display:flex;
    border-bottom: 0.05rem solid #ccc;
    padding:0.1rem 0;
}
.image{
    flex-grow:1;
    width:0;
}
.content{
    flex-grow:1;
    width:0;
}
.content .name{
    font-weight:bolder;
}
h3{
    text-align: center;
}
.star-introduct{
    border-bottom: 0.05rem solid #ccc;
}
.simple-introduct{
    border-bottom: 0.05rem solid #ccc;
}
.load{
    position:absolute;
    top:50%;
    left:50%;
    transition: translate(-50%, -50%);
}
</style>
