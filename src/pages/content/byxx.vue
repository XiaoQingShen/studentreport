<!-- 毕业学校 -->
<template>
	<div class="byxx_container pages page1">
		<div class="paddingtopdiv">毕业学校</div>
		<p class="page1_p1" ><span class="speciallabel1">2013</span>年仲夏之季</p>
		<p class="page1_p2" >你告别了你的母校</p>
		<p class="page1_p3">“<span class="speciallabel1">南宁第三中学</span>”</p>
		<img class="page1_img1" src="../../assets/images/byxx.png">
		<p class="page1_p4">上滑开启毕业生报告</p>
		<img class="page1_img2" src="../../assets/images/page_top.png">
	</div>
</template>
<script>
import reportcss from '../../tools/reportindex.css'
	export default{
		data(){
			return{

			}
		}
	}
</script>
<style>
	.byxx_container{
		width:100%;
		height:100%;
		position: relative;
	}
	.page1_p1{
		font-size: 0.19rem;
		font-family: 'PingFang Bold';
		height:10.28%;
	}
	.page1_p1 >span{
		font-size: 0.36rem;
		margin-right:0.06rem;
	}
	.page1_p2{
		height:4.97%;
		font-size: 0.16rem;
		font-family: 'PingFang Bold';
	}
	.page1_p3{
		font-size: 0.19rem;
		color: #000000;
		height:6.96%;
		font-family: 'PingFang Bold';
	}
	.page1_img1{
		margin-left:0.38rem;
		margin-top:0.2rem;
		height:51.5%;
	}
	.page1_p4{
		padding:0px!important;
		font-family: 'PingFang SC';
		font-size: 0.15rem;
		text-align: center;
		margin-top: 0.15rem;
		height:3.98%;
	}
	.page1_img2{
		padding-left:0px!important;
		padding-top: 0.1rem;
		display: block; 
		margin:auto;
		animation:arrow 1.2s infinite ease-in-out;
    	-webkit-animation: arrow 1.2s infinite ease-in-out; 
	}
</style>