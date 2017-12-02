<!-- 以后项目的根组件 -->
<template>
	<div>
		<!--1 利用mintUI中的header组件实现整个系统的头部 -->
         <mt-header fixed  title="传智播客.黑马程序员Vue商城系统"> </mt-header>


		<!-- 2 利用vue-router路由占位符 -->
		<router-view></router-view>

		<!-- 3 利用mui中tabbar组件实现底部 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-chat">
				<span class="mui-icon mui-icon-email">

				</span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar/car">
				<span class="mui-icon mui-icon-contact">
					<span class="mui-badge" id="badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

	</div>
</template>

<script>
	import {bus} from './kits/vm.js';
	import { getgoodsObject} from "./kits/localSG.js";
	bus.$on('COUNTSTR',function (count) {
			var badgeobj = document.querySelector('#badge');
			badgeobj.innerText = parseInt(badgeobj.innerText) + count;
	})
  export default{// es6的导出对象的写法
	  data(){///等价于 es5的 data:function(){
		  return{

		  }
	  },
	  methods:{

	  },
	  beforeCreate(){
	  	setTimeout(function () {
	  		var haha=getgoodsObject();
	  		var num=0;
	  		for(var key in haha){
	  			num +=haha[key];
	  		}
	  		console.log(num);
	  		bus.$emit('COUNTSTR',num);
	  	},500);
	  }
  }
</script>

<style scoped>
/*当前页面的css样式写到这里，其中scoped表示这个里面写的css代码只是在当前组件页面上有效，不会去影响到其他组件页面*/

</style>
