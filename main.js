/*
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);
*/

let slider=new Vue({
  el:'#slider',
  data:{
    value:0,
    loading:false
  },
  methods:{
    formatTooltip(val){
      return(val+'年')
    },
    change()
    {
      const loading = this.$loading({
        lock: true,//lock的修改符--默认是false
        text: 'Loading',//显示在加载图标下方的加载文案
        //spinner: 'el-icon-loading',//自定义加载图标类名
        //background: 'rgba(0, 0, 0, 0.7)',//遮罩层颜色
        target: document.querySelector('#slider')//loadin覆盖的dom元素节点
      });
      setTimeout(() => {
      loading.close();
    }, 1500);

    }
  }
})
