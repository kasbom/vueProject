<template>
	<div id="tmpl">
			<h4 v-text="info.title"></h4>
			<p class="line"></p>
			<p v-html="info.content"></p>
	</div>
</template>
<script>
	import common from '../../kits/common.js';
	import { Toast } from 'mint-ui';
	export default {
			data(){
				return{
					id:0,
					info:[]
				}
			},
			created(){
					this.id=this.$route.params.id;
					this.getinfo();
			},
			methods:{
				getinfo(){
					var url=common.apidomain+'/api/goods/getdesc/'+this.id;
					this.$http.get(url).then(function (res) {
						var body=res.body;
						if(body.status!=0){
							Toast(body.message);
						}
						this.info=body.message[0];
					})
				}
			}
	}
</script>
<style scoped>
	.temp{
	    padding: 5px;
	}
	.temp h4{
	    color: #0094ff;
	}

	.temp .line{
	    height: 1px;
	    border:1px solid rgba(0,0,0,0.3);
	}
</style>
