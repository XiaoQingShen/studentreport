<!-- 借书量 -->
<template>
	<div class="jsl_container pages page12">
		<div class="paddingtopdiv">借书量</div>
		<p class="page12_p1">累计借书 <span class="speciallabel1">25</span> 次</p>
		<p class="page12_p2">在全院里排名 <span class="speciallable3">NO.</span><span class="speciallable3">15</span></p>
		<p class="page12_p3">在年级里排名 <span class="speciallabel2">NO.</span><span class="speciallabel2">5</span></p>
		<p class="page12_p4">累计借书 <span class="speciallabel1">65</span> 本</p>
		<p class="page12_p5">在全院里排名 <span class="speciallable3">NO.</span><span class="speciallable3">16</span></p>
		<p class="page12_p6">在年级里排名 <span class="speciallabel2">NO.</span><span class="speciallabel2">5</span></p>
		<p class="page12_p7">书籍类型</p>
		<div class="page12_div1" id="page12_chart1"></div>
		<img class="page_top_img" src="../../assets/images/page_top.png">
	</div>
</template>
<script>
import reportcss from '../../tools/reportindex.css'
	export default{
		data(){
			return{
				page12_chart1:null,   //借书量
			}
		},
		created(){

		},
		mounted(){
			var _this = this;
			_this.page12_echarts_paint();
		},
		methods:{
			// 第十二页 借书量
			page12_echarts_paint(){
				var _this = this;
				_this.page12_chart1 = _this.$echarts.init(document.getElementById("page12_chart1"));
				var page12_option1 = _this.$chartPaint().pie4({});
				_this.page12_chart1.setOption(page12_option1);
			}
		}
	}
</script>
<style>
	.jsl_container{
		width:100%;
		height:100%;
		position: relative;
	}
	.page12 >p{
		font-size: 0.16rem;
		font-family: 'PingFang Bold';
	}
	.page12_p1{
		height:7.62%;
		line-height: 0.28rem;
	}
	.page12_p1 >span{
		font-size: 0.36rem;
	}
	.page12_p2{
		height:5.97%;
		line-height: 0.2rem;
	}
	.page12_p2 >span:first-child{
		font-size: 0.15rem;
	}
	.page12_p2 >span:last-child{
		font-size: 0.24rem;
	}
	.page12_p3{
		height:8.95%;
		line-height: 0.2rem;
	}
	.page12_p3 >span:first-child{
		font-size: 0.15rem;
	}
	.page12_p3 >span:last-child{
		font-size: 0.24rem;
	}
	.page12_p4{
		height:6.96%;
		line-height: 0.28rem;
	}
	.page12_p4 >span{
		font-size: 0.36rem;
	}
	.page12_p5{
		height:5.97%;
		line-height: 0.2rem;
	}
	.page12_p5 >span:first-child{
		font-size: 0.15rem;
	}
	.page12_p5 >span:last-child{
		font-size: 0.24rem;
	}
	.page12_p6{
		height:13.26%;
		line-height: 0.2rem;
	}
	.page12_p6 >span:first-child{
		font-size: 0.15rem;
	}
	.page12_p6 >span:last-child{
		font-size: 0.24rem;
	}
	.page12_div1{
		width:100%;
		height:38%;
		position: absolute;
	}
</style>