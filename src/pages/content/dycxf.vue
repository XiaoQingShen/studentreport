<!-- 第一次消费 -->
<template>
	<div class="dycxf_container pages page6">
		<div class="paddingtopdiv">第一次消费</div>
		<p class="page6_p1"><span class="speciallabel1">2014年9月13日</span></p>
		<p class="page6_p2">你第一次使用校园卡</p>
		<p class="page6_p3">在“<span class="speciallabel1">第一食堂</span>”消费了 <span class="speciallabel1">12</span> 元</p>
		<div class="page6_div1">
			<div class="page6_chart1" id="page6_chart1"></div>
			<div class="page6_chart2" id="page6_chart2"></div>
		</div>
		<img class="page_top_img" src="../../assets/images/page_top.png">
	</div>
</template>
<script>
import reportcss from '../../tools/reportindex.css'
	export default{
		data(){
			return{
				page6_chart1:null,  //第一次消费 图1
				page6_chart2:null,  //第二次消费 图2
			}
		},
		created(){

		},
		mounted(){
			var _this = this;
			_this.page6_echarts_patint();
		},
		methods:{
			// 第六页 图形
			page6_echarts_patint(){
				var _this = this;
				_this.page6_chart1 = _this.$echarts.init(document.getElementById("page6_chart1"));
				_this.page6_chart2 = _this.$echarts.init(document.getElementById("page6_chart2"));
				var option1 = _this.$chartPaint().pie1({text:'全校','name':'新生刷卡地点一致',value:25,'y':'60%','center':'65%'});
				var option2 = _this.$chartPaint().pie1({text:'专业','name':'新生刷卡地点一致',value:50,'y':'30%','center':'35%'});
				_this.page6_chart1.setOption(option1);
				_this.page6_chart2.setOption(option2);
			}
		}
	}
</script>
<style>
	.dycxf_container{
		width:100%;
		height:100%;
		position: relative;
	}
	.page6 >p{
		font-family: 'PingFang Bold';
	}
	.page6_p1{
		height:6.79%;
		line-height: 0.23rem;
	}
	.page6_p1 >span{
		font-size: 0.24rem;
	}
	.page6_p2{
		height:5.47%;
		line-height: 0.23rem;
		font-size: 0.19rem;
	}
	.page6_p3{
		/*height:9.78%;*/
		line-height: 0.28rem;
		font-size: 0.19rem;
	}
	.page6_p3 >span{
		font-size: 0.24rem;
	}
	.page6_p3 >span:last-child{
		font-size: 0.36rem;
	}
	.page6_div1{
		width:100%;
		height:4.4rem;
	}
	.page6_chart1{
		width:100%;
		height:50%;
	}
	.page6_chart2{
		width:100%;
		height:50%;
	}
</style>