<!-- 就餐习惯 -->
<template>
	<div class="jcxg_container pages page9">
		<div class="paddingtopdiv">就餐习惯</div>
		<p class="page9_p1">一日三餐加夜宵中</p>
		<p class="page9_p2">你不爱吃 <span class="speciallabel2">夜宵</span></p>
		<p class="page9_p3">餐饮结构</p>
		<div class="page9_div1" id="page9_chart1"></div>
		<img class="page_top_img" src="../../assets/images/page_top.png">
	</div>
</template>
<script>
import reportcss from '../../tools/reportindex.css'
	export default{
		data(){
			return{
				page9_chart1:null,  //就餐习惯
			}
		},
		created(){

		},
		mounted(){
			var _this = this;
			_this.page9_echarts_paint();
		},
		methods:{
			// 第九页 就餐习惯
			page9_echarts_paint(){
				var _this = this;
				_this.page9_chart1 = _this.$echarts.init(document.getElementById("page9_chart1"));
				var page9_option1 = _this.$chartPaint().pie2({});
				_this.page9_chart1.setOption(page9_option1);
			}
		}
	}
</script>
<style>
	.jcxg_container{
		width:100%;
		height:100%;
		position: relative;
	}
	.page9 >p{
		font-size: 0.16rem;
		font-family: 'PingFang Bold';
	}
	.page9_p1{
		height:4.97%;
		line-height: 0.18rem;
	}
	.page9_p2{
		height:15.58%;
		font-size: 0.19rem!important;
		line-height: 0.25rem;
	}
	.page9_p2 >span{
		font-size: 0.26rem;
	}
	.page9_div1{
		width:100%;
		height:50%;
		position: absolute;
	}
</style>