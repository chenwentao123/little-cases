define(['jquery'],function($){
   function Carousel(){
       this.$container = $('<div class="container"></div>');
       this.$pic = $('<div class="pic"></div>');
       this.$tab = $('<ul class="tab"></ul>');
       this.$arrows = $('<div class="arrows"></div>');
       this.$prev = $('<span class="prev">&lt;</span>');
       this.$next = $('<span class="next">&gt;</span>');
       this.defaultSettings = {
           imgArr:[],
           speed:1000,
           buttonStyle:'square',
           selector:document.body
       };
       this.nowIndex = 0;
       this.timer = null;
   }
   Carousel.prototype.init = function(settings){
       $.extend(this.defaultSettings, settings);
       this.$arrows.append(this.$prev).append(this.$next);
       this.$container.append(this.$pic).append(this.$tab).append(this.$arrows).appendTo(this.defaultSettings.selector);
     for(var i=0;i<this.defaultSettings.imgArr.length;i++){
         this.$pic.append('<img src="'+this.defaultSettings.imgArr[i]+'"/>');
         this.$tab.append('<li>'+(i+1)+'</li>');
     }
     $('img:eq(0)',this.$pic).add($('li:eq(0)', this.$tab)).addClass('selected');
       if(this.defaultSettings.buttonStyle == 'circle'){
           $('li', this.$nav).css({
               borderRadius: '50%'
           }).html('');
       }
       var that = this;
       $('li', this.$tab).on('mouseover', function () {
           that.nowIndex = $(this).index();
           changeImg();
       });
       this.$prev.on('click', function () {
           that.nowIndex--;
           if (that.nowIndex == -1) {
               that.nowIndex = that.defaultSettings.imgArr.length - 1;
           }
           changeImg();
       });
       this.$next.on('click', function () {
           that.nowIndex++;
           if (that.nowIndex == that.defaultSettings.imgArr.length) {
               that.nowIndex = 0;
           }
           changeImg();
       });
       this.$container.hover(function () {
           clearInterval(that.timer);
       }, function () {
           play();
       });
       play();

       function play() {
           that.timer = setInterval(function () {
               that.$next.trigger('click');
           }, that.defaultSettings.speed);
       }

       function changeImg() {
           $('li', that.$tab).eq(that.nowIndex).add($('img', that.$pic).eq(that.nowIndex)).addClass('selected').siblings().removeClass('selected');
       }
   };
    return Carousel;
});
