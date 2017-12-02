//1 倒入Vue核心包
import Vue from 'vue';
//2导入App。Vue 的Vue对象
import App from './App.vue';

//3 将Vue-router集成到这个项目中来
import vueRouter from 'vue-router';
//3.1 将VueRouter对象绑定到Vue对象上
  Vue.use(vueRouter);


//3.2 倒入路由规则对应的组件对象

import home from './components/Home.vue';
//import shopcar from './components/shopcar/car.vue';
import newslist from './components/news/newslist.vue';
import newsinfo from './components/news/newsInfo.vue';
import photolist from './components/photo/photolist.vue';
import photoinfo from './components/photo/photoinfo.vue';
import goodslist from './components/goods/goodslist.vue';
import goodsinfo from './components/goods/goodsinfo.vue';
import goodsdesc from './components/goods/goodsdesc.vue';
import goodscomment from './components/goods/goodscomment.vue';
import car from './components/shopcar/car.vue';
import carinputnumber from './components/shopcar/carinputnumber.vue';
// 3.0.2 定义路由规则
var router = new vueRouter({
	linkActiveClass:'mui-active',//改变路由激活时class名称
	routes:[
		{path:'/',redirect:'home'},
		{path:'/home',component:home},//首页
		//{path:'/shopcar',component:shopcar},//购物车
		{path:'/news/newslist',component:newslist},
		{path:'/news/newsinfo/:id',component:newsinfo},
		{path:'/photo/photolist',component:photolist},
		{path:'/photo/photoinfo/:id',component:photoinfo},
		{path:'/goods/goodslist',component:goodslist},
		{path:'/goods/goodsinfo/:id',component:goodsinfo},
		{path:'/goods/goodsdesc/:id',component:goodsdesc},
		{path:'/goods/goodscomment/:id',component:goodscomment},
		{path:'/shopcar/car',component: car},
		{path:'/shopcar/carinputnumber/:id',component:carinputnumber}

	]
});

import 'mint-ui/lib/style.min.css'

import mintUI from 'mint-ui'
Vue.use(mintUI);

//5
import '../statics/mui/css/mui.css'
//6 导入一个当前系统的全局基本样式
import '../statics/css/site.css'
//7 将vue-resource在vue中绑定 自动在Vue中实现
import vueResource from 'vue-resource';
Vue.use(vueResource);

import moment from 'moment';
Vue.filter('datefmt',function(input,fmtstring){
	return moment(input).format(fmtstring);
});
import VuePreview from 'vue-preview'
Vue.use(VuePreview);

new Vue({
	el:'#app',
    router,
	// render:function(create){create(App)} //es5的写法
	render:c => c(App)  // es6的函数写法 =>：goes to
});

