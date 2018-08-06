<!-- 食堂消费总额 -->
<template>
	<div class="stxfze_container pages page8">
		<div class="paddingtopdiv">食堂消费总额</div>
		<p class="page8_p1"><span class="speciallabel1">食堂</span> 消费累计</p>
		<p class="page8_p2"><span class="speciallabel1">10086</span> 元</p>
		<p class="page8_p3">食堂累计消费总额排名</p>
		<p class="page8_p4">在女生里排名 <span class="speciallable3">NO.</span><span class="speciallable3">15</span></p>
		<p class="page8_p5">在全院里排名 <span class="speciallabel2">NO.</span></span><span class="speciallabel2">5</span></p>
		<img class="page8_img1" src="../../assets/images/dsst.png">
		<img class="page_top_img" src="../../assets/images/page_top.png">
	</div>
</template>
<script>
import reportcss from '../../tools/reportindex.css'
	export default{
		data(){
			return{
			}
		},
		created(){

		},
		mounted(){
			var _this = this;
		},
		methods:{
		}
	}
</script>
<style>
	.stxfze_container{
		width:100%;
		height:100%;
		position: relative;
	}
	.page8 >p{
		font-size: 0.16rem;
		font-family: 'PingFang Bold';
	}
	.page8_p1{
		height:6.13%;
		line-height: 0.23rem;
	}
	.page8_p1 >span{
		font-size: 0.24rem;
	}
	.page8_p2{
		height:14.42%;
		line-height: 0.3rem;
	}
	.page8_p2 >span{
		font-size: 0.36rem;
	}
	.page8_p3{
		height:5.47%;
	}
	.page8_p4{
		height:5.97%;
		line-height: 0.2rem;
	}
	.page8_p4 >span:first-child{
		font-size: 0.15rem;
	}
	.page8_p4 >span:last-child{
		font-size: 0.24rem;
	}
	.page8_p5{
		height:10.61%;
		line-height: 0.2rem;
	}
	.page8_p5 >span:first-child{
		font-size: 0.15rem;
	}
	.page8_p5 >span:last-child{
		font-size: 0.24rem;
	}
	.page8_img1{
		float:right;
		height:42.12%;
	}
</style>