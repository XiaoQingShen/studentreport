<!-- 成绩 -->
<template>
	<div class="cj_container pages page15">
		<div class="paddingtopdiv">成绩</div>
		<p class="page15_p1">第一课堂已修课程 <span class="speciallabel1">60</span> 门</p>
		<div class="page15_div1" id="page15_chart1"></div>
		<p class="page15_p2">第二课堂已修学分 <span class="speciallabel1">15</span> 分</p>
		<div class="page15_div2" id="page15_chart2"></div>
		<img class="page_top_img" src="../../assets/images/page_top.png">
	</div>
</template>
<script>
	import reportcss from '../../tools/reportindex.css'
	export default{
		data(){
			return{
				page15_chart1:null,  //第一课堂
				page15_chart2:null,   //第二课堂
			}
		},
		created(){

		},
		mounted(){
			var _this = this;
			_this.page15_echarts_paint();
		},
		methods:{
			// 画图
			page15_echarts_paint(){
				var _this = this;
				_this.page15_chart1 = _this.$echarts.init(document.getElementById("page15_chart1"));
				_this.page15_chart2 = _this.$echarts.init(document.getElementById("page15_chart2"));
				var page15_option1 = _this.$chartPaint().pie5({});
				var page15_option2 = _this.$chartPaint().pie6({});
				_this.page15_chart1.setOption(page15_option1);
				_this.page15_chart2.setOption(page15_option2);
			}
		}
	}
</script>
<style>
	.cj_container{
		width:100%;
		height:100%;
		position: relative;
	}
	.page15 >p{
		font-size: 0.16rem;
		font-family: 'PingFang Bold';
	}
	.page15_p1{
		line-height: 0.28rem;
	}
	.page15_p1 >span{
		font-size: 0.36rem;
	}
	.page15_div1{
		width:100%;
		height:45%;
	}
	.page15_p2{
		line-height: 0.28rem;
	}
	.page15_p2 >span{
		font-size: 0.36rem;
	}
	.page15_div2{
		width:100%;
		height:35%;
	}
</style>