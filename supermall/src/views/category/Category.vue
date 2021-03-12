<template>
  <div class="wrapper" ref="aaaa">
    <div>
      <!--1.無論是否設置click:false, button都可以點擊-->
      <button @click="btnClick">按鈕</button>

      <!--2.必須設置click:true, 那麼div才能監聽點擊-->
      <div @click="divClick">呵呵呵呵</div>

      <ul class="content">
        <li>分類列表1</li>
        <li>分類列表2</li>
        <li>分類列表3</li>
        <li>分類列表4</li>
        <li>分類列表5</li>
        <li>分類列表6</li>
        <li>分類列表7</li>
        <li>分類列表8</li>
        <li>分類列表9</li>
        <li>分類列表10</li>
        <li>分類列表11</li>
        <li>分類列表12</li>
        <li>分類列表13</li>
        <li>分類列表14</li>
        <li>分類列表15</li>
        <li>分類列表16</li>
        <li>分類列表17</li>
        <li>分類列表18</li>
        <li>分類列表19</li>
        <li>分類列表20</li>
        <li>分類列表21</li>
        <li>分類列表22</li>
        <li>分類列表23</li>
        <li>分類列表24</li>
        <li>分類列表25</li>
        <li>分類列表26</li>
        <li>分類列表27</li>
        <li>分類列表28</li>
        <li>分類列表29</li>
        <li>分類列表30</li>
        <li>分類列表31</li>
        <li>分類列表32</li>
        <li>分類列表33</li>
        <li>分類列表34</li>
        <li>分類列表35</li>
        <li>分類列表36</li>
        <li>分類列表37</li>
        <li>分類列表38</li>
        <li>分類列表39</li>
        <li>分類列表40</li>
        <li>分類列表41</li>
        <li>分類列表42</li>
        <li>分類列表43</li>
        <li>分類列表44</li>
        <li>分類列表45</li>
        <li>分類列表46</li>
        <li>分類列表47</li>
        <li>分類列表48</li>
        <li>分類列表49</li>
        <li>分類列表50</li>
        <li>分類列表51</li>
        <li>分類列表52</li>
        <li>分類列表53</li>
        <li>分類列表54</li>
        <li>分類列表55</li>
        <li>分類列表56</li>
        <li>分類列表57</li>
        <li>分類列表58</li>
        <li>分類列表59</li>
        <li>分類列表60</li>
        <li>分類列表61</li>
        <li>分類列表62</li>
        <li>分類列表63</li>
        <li>分類列表64</li>
        <li>分類列表65</li>
        <li>分類列表66</li>
        <li>分類列表67</li>
        <li>分類列表68</li>
        <li>分類列表69</li>
        <li>分類列表70</li>
        <li>分類列表71</li>
        <li>分類列表72</li>
        <li>分類列表73</li>
        <li>分類列表74</li>
        <li>分類列表75</li>
        <li>分類列表76</li>
        <li>分類列表77</li>
        <li>分類列表78</li>
        <li>分類列表79</li>
        <li>分類列表80</li>
        <li>分類列表81</li>
        <li>分類列表82</li>
        <li>分類列表83</li>
        <li>分類列表84</li>
        <li>分類列表85</li>
        <li>分類列表86</li>
        <li>分類列表87</li>
        <li>分類列表88</li>
        <li>分類列表89</li>
        <li>分類列表90</li>
        <li>分類列表91</li>
        <li>分類列表92</li>
        <li>分類列表93</li>
        <li>分類列表94</li>
        <li>分類列表95</li>
        <li>分類列表96</li>
        <li>分類列表97</li>
        <li>分類列表98</li>
        <li>分類列表99</li>
        <li>分類列表100</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Category",
    data() {
      return {
        scroll: null
      }
    },
    // 組件創建完後調用 --> 
    // created(){
    //   console.log(this.$refs.aaaa); --> undefined
    //   this.scroll = new BScroll(this.$refs.aaaa, {
    // },
    mounted() {
    	// console.log(this.$refs.aaaa); 
    	// console.log(document.querySelector('.wrapper')); 
      this.scroll = new BScroll(this.$refs.aaaa, {
        // bettercsroll default can't 時時監聽滾動位置, need to pass in  'option',
        // probeType:0/1-->no detect, probeType:2-->detect only when fingure touch, probeType:3 --> if there is a scroll , always detect
        // probeType: 3,
        // pullUpLoad: true
      })
      this.scroll.on('scroll', (position) => {
        console.log(position);
      })
      this.scroll.on('pullingUp', () => {
        console.log('上啦加載更多');
      })
    },
    methods: {
      btnClick() {
        console.log('btnClick');
      },
      divClick() {
        console.log('divClick');
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    height: 150px;
    background-color: red;
    overflow: hidden;
    /*overflow-y: scroll;*/
  }
</style>