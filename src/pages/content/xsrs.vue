<!-- 新生人数 -->
<template>
	<div class="xsrs_container pages page3">
		<div class="paddingtopdiv">新生人数</div>
			<p class="page3_p1">全校 <span class="speciallabel1">748</span> 新生学子中</p>
			<p class="page3_p2"><span class="speciallabel2">70</span>人</p>
			<p class="page3_p3">与你来自同一个<span class="speciallabel1">区县</span></p>
			<p class="page3_p4"><span class="speciallabel2">5</span>人</p>
			<p class="page3_p5">与你来自同一个<span class="speciallabel1">学校</span></p>
			<p class="page3_p6">从此你的追梦途中不再孤独</p>
			<img class="page3_img1" src="../../assets/images/xsrs.png">
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
	.xsrs_container{
		width:100%;
		height:100%;
		position: relative;
	}
	.page3 >p{
		font-size: 0.16rem;
		font-family: 'PingFang Bold';
	}
	.page3_p1{
		height:14.42%;
		line-height: 0.28rem;
	}
	.page3_p1>span,.page3_p2 >span,.page3_p4 >span{
		font-size: 0.36rem;
	}
	.page3_p2{
		/*margin-top: 0.6rem;*/
		height:6.96%;
		line-height: 0.28rem;
	}
	.page3_p3{
		height:9.12%;
		line-height: 0.2rem;
	}
	.page3_p4{
		height:6.96%;
		line-height: 0.28rem;
	}
	.page3_p5{
		height:4.97%;
	}
	.page3_p6{
		height:11.6%;
	}
	.page3_img1{
		margin-right:0.43rem;
		float:right;
		height:25.2%;
	}
</style>