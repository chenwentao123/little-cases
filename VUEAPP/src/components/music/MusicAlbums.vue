<template>
<div>
    <aplayer :music="musicList" v-if="loadSuccess" :showlrc="true" :mutex="true"></aplayer>
</div>

</template>

<script>
import axios from 'axios';
import Aplayer from 'vue-aplayer';
export default {
    components: {
        Aplayer
    },
    data () {
        return {
            musicList: [],
            loadSuccess: false
        }
    },
    created () {
        axios.get(`/static/data/musicdata${this.$route.params.musicId}.json`)
        .then(res => {
            res.data.musicData.forEach(element =>{
                this.musicList.push({
                    title: element.title,
                    author: element.author,
                    url: element.src,
                    pic: element.musicImgSrc,
                    lrc: '/static' + element.lrc
                });
            });
            this.loadSuccess = true;
        })
    }
}
</script>

<style scoped>
div{
    background:url(../../assets/img/bg_image.png)
}
.aplayer{
    color:#ccc;
    margin-top: 1rem;
}
</style>

