<template>
	<div id="tmpl">
				<div id="postcomment">
						<h3>提交评论</h3>
						<p class="p"></p>
						<textarea placeholder="请输入内容" v-model='postcontent'></textarea>
						<mt-button type="primary" size="large" @click="postcomment">发表</mt-button>
				</div>
				<div class="list">
				            <h3>评论列表</h3>
				            <p class="p"></p>
				            <div v-for="(item, index) in list" class="title">
				                <div class="title">
				                    <span>第{{index + 1}}楼</span>
				                    <span>用户:{{item.user_name}}</span>
				                    <span>发表时间:{{item.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}}</span>
				                </div>
				                <ul class="mui-table-view">
				                    <li v-text="item.content" class="mui-table-view-cell"></li>
				                </ul>
				            </div>
				</div>
				<mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
	</div>
</template>
<script>
	import {Toast} from 'mint-ui';
	import common from '../../kits/common.js';
	export default {
				props:['id'],
				data(){
					return {
							postcontent:"",
							list:[],
							pageindex:1
					}
				},
				created(){
						this.getcommentlist(this.pageindex)
				},
				methods:{
						postcomment(){
							if(this.postcontent.trim().length<=0){
								Toast("您评论的内容为空");
								return;
							};
								// alert(res.body.message);
							var url = common.apidomain + '/api/postcomment/' + this.id;
							this.$http.post(url,{content:this.postcontent},{emulateJSON:true}).then(function (res) {
									Toast(res.body.message);
									this.list=[{
										'user_name':'匿名用户',
										'add_time':new Date(),
										'content':this.postcontent
									}].concat(this.list);
									this.postcontent='';
							});
						},
						getcommentlist(pageindex){
							pageindex=pageindex||1;
							var url=common.apidomain+'/api/getcomments/'+this.id+'?pageindex='+pageindex;
							this.$http.get(url).then(function (res) {
								var body=res.body;
								if(body.status!=0){
											Toast(body.message);
											return;
								}
								this.list=this.list.concat(body.message)
							})
						},
						getmore(){
								this.pageindex++;
								this.getcommentlist(this.pageindex);
						}


					}
}
</script>
<style scoped>
			.postcomment{
			       padding: 5px;
			 }
		   .p{
		       height: 1px;
		       width: 100%;
		       border-bottom: 1px solid rgba(0,0,0,0.3);
		   }

		   .list{
		          padding: 5px;
		      }
		      .title{
		          padding: 5px;
		          color: #6d6d72;
		          font-size: 15px;
		          background-color: rgba(0,0,0,0.1);
		      }

</style>
