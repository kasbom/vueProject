<template >
		<div id="tmpl">
				<div class="cate">
						<ul v-bind="{style:'width:'+ulWidth+'px'}">
							<li>全部</li>
							<li v-for='item in cates' @click='getimages(item.id)'>{{item.title}}</li>
						</ul>
				</div>
		<div class="imglist">
				<ul>
					<li v-for='item in list'>
						<router-link v-bind="{to:'/photo/photoinfo/'+item.id}">
	              <img v-lazy="item.img_url">
	              <div class="desc">
	                  <h5 v-text="item.title"></h5>
	                  <p v-text="item.zhaiyao"></p>
	              </div>
	          </router-link>
					</li>
				</ul>
		</div>
		</div>
</template>
<script>
		import { Toast } from 'mint-ui';
		import common from '../../kits/common.js';
		export default {
				data(){
					return {
						ulWidth:320,
						cates:[],
						list:[]
					}
				},
				created(){
					this.getcates();
					var all=0;
					this.getimages(all);
				},
				methods:{
					getcates(){
							var url=common.apidomain+'/api/getimgcategory/';
							this.$http.get(url).then(function (res) {
								var body=res.body;
								if(body.status!=0){
									Toast(body.message);
									return;
								}
								this.cates=body.message;
								// console.log(this.cates);
								var w=69;
								var count=body.message.length+1;
								this.ulWidth=w*count;

							})
					},
					getimages(cateid){
						cateid=cateid ||0;
						var url=common.apidomain+'/api/getimages/'+cateid;
							this.$http.get(url).then(function (res){
								var body=res.body;
								if(body.status!=0){
									Toast(body.message);
									return;
								}
								this.list=body.message;
							})
					}
				}
		}
</script>
<style scoped>
		.cate{
		    width: 375px;
		    height: 50px;
		    max-width: 375px;
		    overflow-x: auto;
		}
		.cate ul{
		    /*width: 1000px;*/
		    margin: 0px;
		    padding-left: 10px;
		}
		.cate li{
		    list-style: none;
		    display: inline-block;
		    color:#0094ff;
		    font-size: 14px;
		    padding-left: 6px;
		}
		.cate li + li{
		    border-left: 1px solid #ccc;
		    padding-right: 6px;
		}
		/*实现图片列表样式*/
		.imglist{

		}
		.imglist ul {
		    padding-left: 0px;
		}
		.imglist li{
		    list-style:none;
		    position: relative ;
		}
		.imglist img{
		    width:100%;
		    height: 300px;
		}

		.desc{
		    width: 100%;
		    background-color: rgba(0,0,0,0.2);
		    position: absolute;
		    bottom: 2px;
		    left: 0px;
		}

		.desc h5{
		    color: #ffffff;
		    font-weight: bold;
		}
		.desc p{
		    color:#fff;
		}

		image[lazy=loading] {
		    width: 40px;
		    height: 300px;
		    margin: auto;
		}
</style>
