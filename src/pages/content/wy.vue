<!-- 违约 -->
<template>
	<div class="wy_container pages page13">
		<div class="paddingtopdiv">违约</div>
		<p class="page13_p1">图书借阅累计违约 <span class="speciallabel2">10</span> 次</p>
		<p class="page13_p2">累计违约 <span class="speciallabel2">15</span> 天</p>
		<p class="page13_p3">累计违约金额 <span class="speciallabel2">5</span> 元</p>
		<p class="page13_p4">累计违约金额排名</p>
		<p class="page13_p5">在全院里排名 <span class="speciallable3">NO.</span><span class="speciallable3">15</span></p>
		<p class="page13_p6">在年级里排名 <span class="speciallabel2">NO.</span><span class="speciallabel2">5</span></p>
		<img class="page13_img1" src="../../assets/images/wy.png">
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
	.wy_container{
		width:100%;
		height:100%;
		position: relative;
	}
	.page13 >p{
		font-size: 0.16rem;
		font-family: 'PingFang Bold';
	}
	.page13_p1,.page13_p2{
		height:7.13%;
		line-height: 0.3rem;
	}
	.page13_p1 >span,.page13_p2>span{
		font-size: 0.36rem;
	}
	.page13_p3{
		height:14.59%;
		line-height: 0.3rem;
	}
	.page13_p3 >span{
		font-size: 0.36rem;
	}
	.page13_p4{
		height:10.61%;
		line-height: 0.18rem;
	}
	.page13_p5{
		height:5.97%;
		line-height: 0.2rem;
	}
	.page13_p5 >span:first-child{
		font-size: 0.15rem;
	}
	.page13_p5 >span:last-child{
		font-size: 0.24rem;
	}
	.page13_p6{
		height:12.1%;
		line-height: 0.2rem;
	}
	.page13_p6 >span:first-child{
		font-size: 0.15rem;
	}
	.page13_p6 >span:last-child{
		font-size: 0.24rem;
	}
	.page13_img1{
		height:28.19%;
		float:right;
		margin-right: 0.25rem;
	}
</style>