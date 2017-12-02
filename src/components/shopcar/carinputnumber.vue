<template>
		<div id="tmpl">
				<div class="sub">
				    <div class="inleft div" @click="substrict">-</div>
				    <div class="incenter div" v-text="initCount"></div>
				    <div class="inright div" @click="add">+</div>
				</div>
		</div>
</template>
<script>
		import {bus} from '../../kits/vm.js';
		export default{
					props:['initCount','goodsid'],
					data(){
						return{
							count:1,
							resObj:{goodsid:0,type:'add'}//商品ID状态值
						}
					},
					created(){
						this.count=this.initCount;
					},
					methods:{
						substrict(){
								this.count--;
								if(this.count<1){
									this.count=1;
									return;
								}

								bus.$emit('COUNTSTR',-1);
								this.sendmessage('substrict');

						},
						add(){
								this.count++;
								bus.$emit('COUNTSTR',1);
								this.sendmessage('add');
						},
						sendmessage(type){
							this.resObj.type=type;
							this.resObj.goodsid=this.goodsid;
							this.$emit('cardataobj',this.resObj);
						}
					}
		}
</script>
<style scoped>
		.sub .div{
		         width: 40px;
		        height: 20px;
		        line-height: 20px;
		        border: 1px solid #000;
		        display: inline-block;
		        text-align: center;
            margin-top: -20px;
		    }
</style>
