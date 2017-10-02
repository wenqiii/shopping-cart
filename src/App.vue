<template>
  <div id="app">
    <!-- <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list></product-list>
    <br>
    <cart></cart> -->
    
    <div class="header">  
      
      <!-- <div><img src="" alt="西瓜"></div> -->
      <mt-navbar class="nav" v-model="selected">  
        <mt-tab-item id="1">选项一</mt-tab-item>  
        <mt-tab-item id="2">选项二</mt-tab-item>  
        <mt-tab-item id="3">选项三</mt-tab-item>  
      </mt-navbar>  
      <!-- <div><img src="" alt="西瓜"></div> -->
      
    </div>  
    <div class="search">  
      <input type="text">
    </div>  
  
    <!-- tabcontainer -->  
    <mt-tab-container v-model="selected" swipeable>  
      <mt-tab-container-item id="1">  
        <mt-cell v-for="n in 10" :title="'内容 ' + n" />  
      </mt-tab-container-item>  
      <mt-tab-container-item id="2">  
        <mt-cell v-for="n in 4" :title="'测试 ' + n" />  
      </mt-tab-container-item>  
      <mt-tab-container-item id="3">  
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />  
      </mt-tab-container-item>  
    </mt-tab-container> 
    
  </div>
</template>

<script>
// import ProductList from './components/ProductList'
// import Cart from './components/Cart'
export default {
  name: 'app',
  data () {
    return {
      active: 'tab-container1',
      selected: '1'
    }
  }
  // components: {
  //   ProductList,
  //   Cart
  // }

}
</script>

<style>

.header {
  width: 100%;
  height: 20%;
}
.header img {
  width: 30px;
  height: 30px;
}
.nav{
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}

</style>
