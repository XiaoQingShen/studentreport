<!-- 政治面貌 -->
<template>
	<div class="zzmm_container pages page20">
		<div class="paddingtopdiv">政治面貌</div>
		<p class="page20_p1"><span class="speciallabel1">2015年9月</span></p>
		<p class="page20_p2">获得 <span class="speciallable3">预备党员</span> 资格</p>
		<p class="page20_p3"><span class="speciallabel1">2016年9月</span></p>
		<p class="page20_p4">正式成为 <span class="speciallabel2">共产党员</span></p>
		<p class="page20_p5">全校共有 <span class="speciallabel1">500</span> 人为正式党员</p>
		<div class="page20_div1">
			<div class="page20_div_1" :style="'width:'+ ((100/500*100)+10) +'%;'"><p class="page20_p6">同级学生</p></div>
			<p class="page20_p7"><span class="speciallable3">100</span> 人</p>
			<div class="clear_float"></div>
		</div>
		<div class="page20_div1">
			<div class="page20_div_2" :style="'width:'+ ((200/500*100)+10) +'%;'"><p class="page20_p8">全院</p></div>
			<p class="page20_p9"><span class="speciallabel2">200</span> 人</p>
			<div class="clear_float"></div>
		</div>
		<div class="page20_div1">
			<div class="page20_div_3" :style="'width:'+ ((50/500*100)+10) +'%;'"><p class="page20_p10">同龄</p></div>
			<p class="page20_p11"><span class="speciallable4">50</span> 人</p>
			<div class="clear_float"></div>
		</div>
		<img class="page_top_img" src="../../assets/images/page_top.png">
	</div>
</template>
<script></script>
<style>
	.zzmm_container{
		width:100%;
		height:100%;
		position: relative;
	}
	.page20 >p{
		font-size: 0.16rem;
		font-family: 'PingFang Bold';
	}
	.page20_p1{
		height:6.13%;
		line-height: 0.24rem;
	}
	.page20_p1 >span{
		font-size: 0.24rem;
	}
	.page20_p2{
		height:9.28%;
		font-size: 0.19rem!important;
		line-height: 0.24rem;
	}
	.page20_p2 >span{
		font-size: 0.24rem;
	}
	.page20_p3{
		height:6.13%;
		line-height: 0.24rem;
	}
	.page20_p3 >span{
		font-size: 0.24rem;
	}
	.page20_p4{
		font-size: 0.19rem!important;
		height:15.09%;
		line-height: 0.24rem;
	}
	.page20_p4 >span{
		font-size: 0.24rem;
	}
	.page20_p5{
		height:6.46%;
		line-height: 0.24rem;
	}
	.page20_p5 >span{
		font-size: 0.24rem;
	}
	.page20_div1{
		height:0.24rem;
		margin-bottom:0.12rem;
		margin-left:0.4rem;
	}
	.page20_div_1,.page20_div_2,.page20_div_3{
		float:left;
		height:100%;
	}
	.page20_div_1{
		background-color: #EA7E53;
	}
	.page20_div_2{
		background-color: #DC5C5C;
	}
	.page20_div_3{
		background-color: #60C998;
	}
	.page20_div1 >p{
		float:left;
		margin-left:0.12rem;
	}
	.page20_p6,.page20_p8,.page20_p10{
		font-size: 0.12rem;
		color: #FFFFFF;
		margin-top:0.04rem;
		margin-left:0.1rem;
	}
	.page20_p7,.page20_p9,.page20_p11{
		font-size: 0.16rem!important;
		line-height: 0.24rem;
	}
	.page20_p7 >span,.page20_p9,.page20_p11{
		font-size: 0.24rem;
	}
</style>