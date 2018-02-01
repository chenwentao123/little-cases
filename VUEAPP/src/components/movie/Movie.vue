<template>
  <div class="container">
      <ul class="list">
          <li @click="getDetail(movie.id)" class="movieList" v-for="movie in movieList" :key="movie.id">
              <div class="content">
                  <div class="image">
                    <img :src="movie.img" alt="">
                  </div>
                  <ul class="introduction">
                    <li>
                        <span class="name">{{movie.nm}}</span>
                        <span class="ver">{{movie.ver}}</span>
                    </li>
                    <li>{{movie.cat}}</li>
                    <li class="star">主演：{{movie.star}}</li>
                    <li>{{movie.showInfo}}</li>
                  </ul>
              </div>
              <div class="evaluation">
                  <div class="sc">
                      {{movie.sc}}
                      <span>分</span>
                  </div>
                  <div class="buy">购票</div>
              </div>
          </li>
      </ul>
      <div class="load" v-show="isLoading">
          <img src="../../assets/img/TIM图片1.gif" alt="">
      </div>
      <div class="end" v-show="isEnd">
          <h2>已经到底了</h2>
          <img src="../../assets/img/image6gif.gif" alt="">
      </div>
  </div>
<div></div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
      return {
          movieList:[],
          isLoading:true,
          isEnd:false
      }
  },
  methods: {
        getData(){
          axios.get(API_PROXY +  `http://m.maoyan.com/movie/list.json?type=hot&offset=${
                this.movieList.length
              }&limit=10`)
          .then(res => {
            let list = res.data.data.movies;
            console.log(list)
            if(list.length < 10){
                this.isEnd = true;
            }
            this.movieList = this.movieList.concat(list);
            this.isLoading = false;
            })
          .catch(res => {
                alert('数据获取失败!')
            });
        },
        getDetail(movieId) {
            this.$router.push(`/moviedetail/${movieId}`);
        }
  },
  created () {
      this.getData();
  },
  mounted() {
    window.onscroll = () => {
      let scrollTop = document.documentElement.scrollTop;
      let clientHeight = document.documentElement.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;
      if (scrollTop + clientHeight == scrollHeight && !this.isEnd) {
            this.isLoading = true;
            setTimeout(() => {
            this.getData();
            }, 1000);
      }
    };
  }
}
</script>

<style scoped>
.container{
    margin-top:1rem;
    margin-bottom:4rem;
    padding:0 0.25rem
}
.movieList{
    display:flex;
    padding:0.1rem 0;
    border-bottom: 0.03rem solid #ccc ;
}
.content{
    flex-grow: 4;
    display:flex;
    width:0;
}
.evaluation{
    flex-grow: 1;
    width:0;
    position: relative;
}
.image{
    flex-grow: 1;
    width:0;
}
.introduction{
    flex-grow: 2;
    width:0;
    padding:0 0.1rem;
    color: #666;
}
.image img{
    height:2rem;
}
.name{
    font-weight:bolder;
    font-size:.26rem;
    color:#000;
}
.ver{
    font-size:.16rem;
}
.star{
    width:2.8rem;
    overflow: hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
}
.sc{
    color: #FFB400;
    font-size: .32rem;
    line-height: 1;
    text-align: center;
    position:absolute;
    right: 0;
    top:0.04rem;
}
.buy{
    position: absolute;
    right: 0;
    bottom: .25rem;
    padding: .1rem .23rem;
    font-size: .24rem;
    line-height: .33rem;
    color: #fff;
    background: #EF4238;
    border-radius: .06rem;
    display: inline-block;
}
.load{
    text-align:center;
    position:fixed;
    bottom:1rem;
    width:100%;
}
.end{
    text-align:center;
}
</style>

