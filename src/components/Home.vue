<template>
    <div id="tmpl">
         <!-- 1 轮播图 minit-ui 中的swipe组件实现 -->

					<slider :imgs='list'></slider>

        	<!-- 2.0 利用MUI的9宫格样式实现导航区域 -->
		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		            <router-link to="/news/newslist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link>
		            </li>

		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/photo/photolist">
		                    <span class="mui-icon mui-icon-email">

		                    </span>
		                    <div class="mui-media-body">图片分享</div></router-link>
		             </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/goods/goodslist">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></router-link>

		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/feedback">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></router-link>

		            </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/vide">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></router-link>

		             </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/callme">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></router-link>
		            </li>

		        </ul>
		</div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui';
import common from '../kits/common.js';
import slider from '../components/subcom/slider.vue';
    export default{
    	components:{
    		slider
    	},
        data(){
            return{
                list:[]
            }
        },
        created(){
            this.getimgs();
        },
        methods:{
            getimgs(){
                //实现轮播图中的数据请求
                //1 确定url
                var url = 'http://vue.studyit.io/api/getlunbo';
                //2 调用$http.get
                this.$http.get(url).then(
                    function (response) {
                        var data = response.body;
                        //错误处理
                        if(data.status != 0){
                            Toast(data.message);
                            return;
                        }
                        //如果服务器返回数据正常
                        this.list = data.message;
                     }
                )
            }

        }
    }


</script>

<style scoped>

    .mui-content,.mui-content ul{
		background-color: #fff;
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		border-right:0px;
		border-bottom:0px;
	}
	.mui-grid-view.mui-grid-9{
		border-top:0px;
		border-left:0px;
	}
	.mui-icon-home:before,
	.mui-icon-email:before,
	.mui-icon-chatbubble:before,
	.mui-icon-location:before,
	.mui-icon-search:before,
	.mui-icon-phone:before{
		content: '';
		display: inline-block;
		width: 50px;
		height: 50px;
		background-repeat: round;
	}

	.mui-icon-home:before{
		background-image: url(../../statics/imgs/1.png);
	}

	.mui-icon-email:before{
		background-image: url(../../statics/imgs/2.png);
	}
	.mui-icon-chatbubble:before{
		background-image: url(../../statics/imgs/3.png);
	}
	.mui-icon-location:before{
		background-image: url(../../statics/imgs/4.png);
	}
	.mui-icon-search:before{
		background-image: url(../../statics/imgs/5.png);
	}
	.mui-icon-phone:before{
		background-image: url(../../statics/imgs/6.png);
	}
</style>
