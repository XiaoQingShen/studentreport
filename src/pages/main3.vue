<template>
	<div class="main3_container">
		<div v-if="curindex==0" class="item item1" data-aos="slide-up">1</div>
		<div v-if="curindex==1" class="item item2" data-aos="slide-up">2</div>
		<div v-if="curindex==2" class="item item3" data-aos="slide-up">3</div>
		<div v-if="curindex==3" class="item item4" data-aos="slide-up">4</div>
		<div v-if="curindex==4" class="item item5" data-aos="slide-up">5</div>
		<div v-if="curindex==5" class="item item6" data-aos="slide-up">6</div>
		<div v-if="curindex==6" class="item item7" data-aos="slide-up">7</div>
		<div v-if="curindex==7" class="item item8" data-aos="slide-up">8</div>
		<div v-if="curindex==8" class="item item9" data-aos="slide-up">9</div>
		<div v-if="curindex==9" class="item item10" data-aos="slide-up">10</div>
		<div @click="clickbtn" class="clickbtn"><p>点击</p></div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				curindex:0,
			}
		},
		created(){},
		mounted(){},
		methods:{
			// 点击切换
			clickbtn(){
				var _this = this;
				_this.curindex = _this.curindex+1;
			}
		}
	}
</script>
<style>
	.main3_container{
		width:100%;
		height:100%;
		position: absolute;
	}
	.item{
		width:100%;
		height:100%;
	}
	.item1,.item3,.item5,.item7,.item9{
		background-color: gray;
	}
	.item2,.item4,.item6,.item8,.item10{
		background-color: pink;
	}
	.clickbtn{
		width:100%;
		height:20px;
		font-size: 0.12rem;
		text-align: center;
		position: absolute;
		bottom:0px;
		border:1px solid red;
	}
</style>