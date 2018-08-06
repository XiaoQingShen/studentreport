<!-- 综合成绩 -->
<template>
	<div class="zhcj_container pages page14">
		<div class="zhcj_paddingtop">综合成绩</div>
		<p class="page14_p1">综合平均成绩 <span class="speciallabel1">70.2</span></p>
		<p class="page14_p2">班内排名 <span class="speciallabel1">15</span></p>
		<p class="page14_p3">平均分</p>
		<p class="page14_p4"><span class="speciallabel1">第2学期</span> 最高</p>
		<p class="page14_p5"><span class="speciallable3">第3学期</span> 最低</p>
		<div class="page14_div1" id="page14_chart1"></div>
		<img class="page_top_img" src="../../assets/images/page_top.png">
	</div>
</template>
<script>
	import reportcss from '../../tools/reportindex.css'
	export default{
		data(){
			return{
				page14_chart1:null,  //综合成绩
			}
		},
		created(){

		},
		mounted(){
			var _this = this;
			_this.page14_echarts_paint();
		},
		methods:{
			// 画图
			page14_echarts_paint(){
				var _this = this;
				_this.page14_chart1 = _this.$echarts.init(document.getElementById("page14_chart1"));
				var page14_option1 = _this.$chartPaint().line1({});
				_this.page14_chart1.setOption(page14_option1);
				
			}
		}
	}
</script>
<style>
	.zhcj_container{
		width:100%;
		height:100%;
		position: relative;
	}
	.zhcj_paddingtop{
		height:6.46%;
	}
	.page14 >p{
		font-size: 0.16rem;
		font-family: 'PingFang Bold';
	}
	.page14_p1{
		height:7.62%;
		line-height: 0.28rem;
	}
	.page14_p1 >span{
		font-size: 0.36rem;
	}
	.page14_p2{
		height:10.94%;
		line-height: 0.28rem;
	}
	.page14_p2 >span{
		font-size: 0.36rem;
	}
	.page14_p3{
		font-size: 0.19rem;
		height:5.47%;
		line-height: 0.19rem;
	}
	.page14_p4{
		height:5.47%;
		line-height: 0.2rem;
	}
	.page14_p4 >span{
		font-size: 0.19rem;
	}
	.page14_p5{
		line-height: 0.2rem;
	}
	.page14_p5 >span{
		font-size: 0.19rem;
	}
	.page14_div1{
		position: absolute;
		width:100%;
		height:55%;
	}
</style>