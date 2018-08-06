<!-- 图书 进馆次数 -->
<template>
	<div class="jgcs_container pages page11">
		<div class="paddingtopdiv">进馆次数</div>
		<p class="page11_p1"><span class="speciallabel1">2014年9月20日</span></p>
		<div class="clear_float"></div>
		<p class="page11_p2">你从图书馆借走第一本书</p>
		<div class="clear_float"></div>
		<p class="page11_p3"><span class="speciallabel1">《牧羊少年的奇幻旅程》</span></p>
		<div class="clear_float"></div>
		<p class="page11_p4">累计进图书馆</p>
		<p class="page11_p5"><span class="speciallabel1">186</span> 次</p>
		<p class="page11_p6">在全院里排名 <span class="speciallable3">NO.</span><span class="speciallable3">15</span></p>
		<p class="page11_p7">在年级里排名 <span class="speciallabel2">NO.</span><span class="speciallabel2">5</span></p>
		<img class="page11_img1" src="../../assets/images/jgcs.png">
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
	.jgcs_container{
		width:100%;
		height:100%;
		position: relative;
	}
	.page11 >p{
		font-size: 0.16rem;
		font-family: 'PingFang Bold';
	}
	.page11_p1{
		height:5.97%;
		float:right;
		line-height: 0.23rem;
		margin-right:0.4rem;
	}
	.page11_p1 >span{
		font-size: 0.24rem;
	}
	.page11_p2{
		height:4.97%;
		float: right;
		line-height: 0.2rem;
		margin-right: 0.4rem;
	}
	.page11_p3{
		height:8.62%;
		float:right;
		line-height: 0.2rem;
		margin-right: 0.3rem;
	}
	.page11_p3 >span{
		font-size: 0.19rem;
	}
	.page11_p4{
		height:4.97%;
		line-height: 0.16rem;
	}
	.page11_p5{
		height:7.29%;
		line-height: 0.28rem;
	}
	.page11_p5 >span{
		font-size: 0.36rem;
	}
	.page11_p6{
		height:5.97%;
		line-height: 0.2rem;
	}
	.page11_p6 >span:first-child{
		font-size: 0.15rem;
	}
	.page11_p6 >span:last-child{
		font-size: 0.24rem;
	}
	.page11_p7{
		height:11.6%;
		line-height: 0.2rem;
	}
	.page11_p7 >span:first-child{
		font-size: 0.15rem;
	}
	.page11_p7 >span:last-child{
		font-size: 0.24rem;
	}
	.page11_img1{
		height:33.16%;
		padding-left:0px!important;
		display: block; 
		margin:auto;
	}
</style>