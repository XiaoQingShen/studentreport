<!-- 消费偏好 -->
<template>
	<div class="xfph_container pages page10">
		<div class="paddingtopdiv">消费偏好</div>
		<p class="page10_p1">一卡通累计消费</p>
		<p class="page10_p2"><span class="speciallabel1">50235.36</span> 元</p>
		<p class="page10_p3">消费排名</p>
		<p class="page10_p4">在统计学生里排名 <span class="speciallable3">NO.</span><span class="speciallable3">15</span></p>
		<p class="page10_p5">在统计女生里排名 <span class="speciallabel2">NO.</span><span class="speciallabel2">5</span></p>
		<p class="page10_p6">在全院里排名 <span class="speciallable4">NO.</span><span class="speciallable4">5</span></p>
		<p class="page10_p7">除了食堂，你最喜欢去--</p>
		<div class="page10_div1" id="page10_chart1"></div>
		<img class="page_top_img" src="../../assets/images/page_top.png">
	</div>
</template>
<script>
import reportcss from '../../tools/reportindex.css'
	export default{
		data(){
			return{
				page10_chart1:null,   //消费偏好
			}
		},
		created(){

		},
		mounted(){
			var _this = this;
			_this.page10_echarts_paint();
		},
		methods:{
			// 第十页 消费偏好
			page10_echarts_paint(){
				var _this = this;
				_this.page10_chart1 = _this.$echarts.init(document.getElementById("page10_chart1"));
				var page10_option1 = _this.$chartPaint().pie3({});
				_this.page10_chart1.setOption(page10_option1);
			}
		}
	}
</script>
<style>
	.xfph_container{
		width:100%;
		height:100%;
		position: relative;
	}
	.page10 >p{
		font-size: 0.16rem;
		font-family: 'PingFang Bold';
	}
	.page10_p1{
		height:4.97%;
		line-height: 0.18rem;
	}
	.page10_p2{
		height:12.1%;
		line-height: 0.3rem;
	}
	.page10_p2 >span{
		font-size: 0.36rem;
	}
	.page10_p3{
		height:5.47%;
		color: #003633!important;
		line-height: 0.18rem;
	}
	.page10_p4{
		height:5.97%;
		line-height: 0.2rem;
	}
	.page10_p4 >span:first-child{
		font-size: 0.15rem;
	}
	.page10_p4 >span:last-child{
		font-size: 0.24rem;
	}
	.page10_p5{
		height:5.97%;
		line-height: 0.2rem;
	}
	.page10_p5>span:first-child{
		font-size: 0.15rem;
	}
	.page10_p5 >span:last-child{
		font-size: 0.24rem;
	}
	.page10_p6{
		height:13.26%;
		line-height: 0.2rem;
	}
	.page10_p6 >span:first-child{
		font-size: 0.15rem;
	}
	.page10_p6 >span:last-child{
		font-size: 0.24rem;
	}
	.page10_div1{
		width:100%;
		height:40%;
		position: absolute;
	}
</style>