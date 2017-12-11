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
     $.extend(this.defaultSettings,settings);
     this.$arrows.append.(this.$prev).append(this.$next);
     this.$container.append(this.$pic).append(this.$tab).append(this.$arrows).appendTo(this.defaultSettings.selector);

   };

});
