<template>
  <div class="grid-view" ref="gridView">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "GridView",
    props: {
cols: {
type: Number,
        default: 2
      },
      hMargin: {
type: Number,
        default: 8
      },
      vMargin: {
type: Number,
        default: 8
      },
      itemSpace: {
type: Number,
        default: 8
      },
      lineSpace: {
type: Number,
        default: 8
      }
    },
    mounted: function () {
setTimeout(this._autoLayout, 20)
    },
    updated: function () {
      this._autoLayout()
    },
    methods: {
_autoLayout: function () {
        // 1.獲取gridEl和children
        // 注: 這里為什麼不用document.querySelector呢?
        // 答: 因為如果在項目中, 多處都用到了grid-view, 那麼這裡就不確定獲取的是哪一個了.
        let gridEl = this.$refs.gridView;
        let children = gridEl.children;
        // 2.設置gridEl的內邊距
        gridEl.style.padding = `${this.vMargin}px ${this.hMargin}px`
        // 3.計算item的寬度
        let itemWidth = (gridEl.clientWidth - 2 * this.hMargin - (this.cols - 1) * this.itemSpace) / this.cols;
        for (let i = 0; i < children.length; i++) {
          let item = children[i];
          item.style.width = itemWidth + 'px';
          if ((i+1) % this.cols !== 0) {
            item.style.marginRight = this.itemSpace + 'px'
          }
          if (i >= this.cols) {
            item.style.marginTop = this.lineSpace + 'px'
          }
        }
      }
    }
}
</script>

<style scoped>
  .grid-view {
    display: flex;
    flex-wrap: wrap;
  }
</style>