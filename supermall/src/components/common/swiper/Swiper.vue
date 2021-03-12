<template>
    <div id="hy-swiper">
      <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
        <slot></slot>
      </div>
      <slot name="indicator">
      </slot>
      <div class="indicator">
        <slot name="indicator" v-if="showIndicator && slideCount>1">
          <div v-for="(item, index) in slideCount" class="indi-item" :class="{active: index === currentIndex-1}" :key="index"></div>
        </slot>
      </div>
    </div>
</template>

<script>
export default {
name: "Swiper",
    props: {
      interval: {
type: Number,
        default: 3000
      },
      animDuration: {
type: Number,
        default: 300
      },
      moveRatio: {
        type: Number,
        default: 0.25
      },
      showIndicator: {
        type: Boolean,
        default: true
      }
    },
    data: function () {
return {
        slideCount: 0, // 元素個數
        totalWidth: 0, // swiper的寬度
        swiperStyle: {}, // swiper樣式
        currentIndex: 1, // 當前的index
        scrolling: false, // 是否正在滾動
      }
    },
    mounted: function () {
      // 1.操作DOM, 在前後添加Slide
      setTimeout(() => {
        this.handleDom();
        // 2.開啟定時器
        this.startTimer();
      }, 3000)
    },
    methods: {
/**
       * 定時器操作
       */
      startTimer: function () {
this.playTimer = window.setInterval(() => {
this.currentIndex++;
this.scrollContent(-this.currentIndex * this.totalWidth);
        }, this.interval)
      },
      stopTimer: function () {
        window.clearInterval(this.playTimer);
      },
      /**
       * 滾動到正確的位置
       */
      scrollContent: function (currentPosition) {
        // 0.設置正在滾動
        this.scrolling = true;
        // 1.開始滾動動畫
        this.swiperStyle.transition ='transform '+ this.animDuration + 'ms';
        this.setTransform(currentPosition);
        // 2.判斷滾動到的位置
        this.checkPosition();
        // 4.滾動完成
        this.scrolling = false
      },
      /**
       * 校驗正確的位置
       */
      checkPosition: function () {
        window.setTimeout(() => {
          // 1.校驗正確的位置
          this.swiperStyle.transition = '0ms';
          if (this.currentIndex >= this.slideCount + 1) {
            this.currentIndex = 1;
            this.setTransform(-this.currentIndex * this.totalWidth);
          } else if (this.currentIndex <= 0) {
            this.currentIndex = this.slideCount;
            this.setTransform(-this.currentIndex * this.totalWidth);
          }
          // 2.結束移動後的回調
          this.$emit('transitionEnd', this.currentIndex-1);
        }, this.animDuration)
      },
      /**
       * 設置滾動的位置
       */
      setTransform: function (position) {
        this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
        this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
        this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
      },
      /**
       * 操作DOM, 在DOM前後添加Slide
       */
handleDom: function () {
        // 1.獲取要操作的元素
        let swiperEl = document.querySelector('.swiper');
        let slidesEls = swiperEl.getElementsByClassName('slide');
        // 2.保存個數
        this.slideCount = slidesEls.length;
        // 3.如果大於1個, 那麼在前後分別添加一個slide
        if (this.slideCount > 1) {
          let cloneFirst = slidesEls[0].cloneNode(true);
          let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true);
          swiperEl.insertBefore(cloneLast, slidesEls[0]);
          swiperEl.appendChild(cloneFirst);
          this.totalWidth = swiperEl.offsetWidth;
          this.swiperStyle = swiperEl.style;
        }
        // 4.讓swiper元素, 顯示第一個(目前是顯示前面添加的最後一個元素)
        this.setTransform(-this.totalWidth);
      },
      /**
       * 拖動事件的處理
       */
      touchStart: function (e) {
        // 1.如果正在滾動, 不可以拖動
        if (this.scrolling) return;
        // 2.停止定時器
        this.stopTimer();
        // 3.保存開始滾動的位置
        this.startX = e.touches[0].pageX;
      },
      touchMove: function (e) {
        // 1.計算出用戶拖動的距離
        this.currentX = e.touches[0].pageX;
        this.distance = this.currentX - this.startX;
        let currentPosition = -this.currentIndex * this.totalWidth;
        let moveDistance = this.distance + currentPosition;
        // 2.設置當前的位置
        this.setTransform(moveDistance);
      },
      touchEnd: function (e) {
        // 1.獲取移動的距離
        let currentMove = Math.abs(this.distance);
        // 2.判斷最終的距離
        if (this.distance === 0) {
          return
        } else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio) { // 右邊移動超過0.5
          this.currentIndex--
        } else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio) { // 向左移動超過0.5
          this.currentIndex++
        }
        // 3.移動到正確的位置
        this.scrollContent(-this.currentIndex * this.totalWidth);
        // 4.移動完成後重新開啟定時器
        this.startTimer();
      },
      /**
       * 控制上一個, 下一個
       */
       previous: function () {
        this.changeItem(-1);
      },
      next: function () {
        this.changeItem(1);
      },
      changeItem: function (num) {
        // 1.移除定時器
        this.stopTimer();
        // 2.修改index和位置
        this.currentIndex += num;
        this.scrollContent(-this.currentIndex * this.totalWidth);
        // 3.添加定時器
        this.startTimer();
      }
    }
}
</script>

<style scoped>
  #hy-swiper {
    overflow: hidden;
    position: relative;
  }
  .swiper {
    display: flex;
  }
  .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
  }
  .indi-item {
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin: 0 5px;
  }
  .indi-item.active {
    background-color: rgba(212,62,46,1.0);
  }
</style>