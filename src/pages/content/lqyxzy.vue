<!-- 录取院校专业 -->
<template>
	<div class="lqyxzy_container pages page2">
		<div class="paddingtopdiv">录取院校专业</div>
		<p class="page2_p1">你以 <span class="speciallabel2">507</span> 的分数</p>
		<p class="page2_p2">成功被“<span class="speciallabel1">南宁职业技术学院</span>”</p>
		<p class="page2_p3">“<span class="speciallabel1">信息工程学院</span>”学院</p>
		<p class="page2_p4">“<span class="speciallabel2">计算机信息管理</span>”专业</p>
		<p class="page2_p5">录取</p>
		<img class="page2_img1" src="../../assets/images/lqyxzy.png">
		<img class="page_top_img" src="../../assets/images/page_top.png">
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
	.lqyxzy_container{
		width:100%;
		height:100%;
		position: relative;
	}
	.page2 >p{
		font-size: 0.16rem;
		font-family: 'PingFang Bold';
	}
	.page2_p1{
		height:7.79%;
		line-height: 0.28rem;
	}
	.page2_p1 >span{
		font-size: 0.36rem;
		/*animation:rotateIn 1.5s 3 ease-in-out;*/
	}
	.page2_p2{
		height:6.13%;
		line-height: 0.23rem;
		color: #003333;
	}
	.page2_p2 >span{
		font-size: 0.19rem;
	}
	.page2_p3{
		height:5.47%;
		line-height: 0.23rem;
	}
	.page2_p3 >span{
		font-size: 0.19rem;
	}
	.page2_p4{
		height:8.62%;
		line-height: 0.32rem;
	}
	.page2_p4 >span{
		font-size: 0.36rem;
	}
	.page2_p5{
		/*margin-top:0.19rem;*/
	}
	.page2_img1{
		float:right;
		margin-right:0.58rem;
		height:51.4%;
	}
</style>