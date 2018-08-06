<!-- 食堂消费偏好 -->
<template>
	<div class="stxfph_container pages page7">
		<div class="paddingtopdiv">食堂消费偏好</div>
		<p class="page7_p1">分布于南宁职业技术学院的 <span class="speciallabel1">4</span> 个食堂中</p>
		<p class="page7_p2">你最喜欢<span>“</span><span class="speciallabel1">第三食堂</span><span>”</span>，在此食堂</p>
		<p class="page7_p3">累计消费 <span class="speciallabel1">506</span> 次</p>
		<p class="page7_p4">餐均消费 <span class="speciallabel1">8</span> 元</p>
		<p class="page7_p5">累计消费 <span class="speciallabel1">4048</span> 元</p>
		<p class="page7_p6">消费排名</p>
		<p class="page7_p7">累计消费次数  <span class="speciallable3">NO.15</span></p>
		<p class="page7_p8">累计消费金额  <span class="speciallabel2">NO.10</span></p>
		<div class="page7_div1" id="page7_chart1"></div>
		<img class="page_top_img" src="../../assets/images/page_top.png">
	</div>
</template>
<script>
import reportcss from '../../tools/reportindex.css'
	export default{
		data(){
			return{
				page7_chart1:null,  //消费食堂偏好
			}
		},
		created(){

		},
		mounted(){
			var _this = this;
			_this.page7_echarts_paint();
		},
		methods:{
			// 第七页 图形
			page7_echarts_paint(){
				var _this = this;
				_this.page7_chart1 = _this.$echarts.init(document.getElementById("page7_chart1"));
				var page7_option1 = _this.$chartPaint().barline1({});
				_this.page7_chart1.setOption(page7_option1);
			}
		}
	}
</script>
<style>
	.stxfph_container{
		width:100%;
		height:100%;
		position: relative;
	}
	.page7 >p{
		font-size: 0.16rem;
		font-family: 'PingFang Bold';
	}
	.page7_p1{
		height:7.29%;
	}
	.page7_p1 >span{
		font-size: 0.24rem;
	}
	.page7_p2{
		height:7.13%;
	}
	.page7_p2 >span:first-child{
		font-size: 0.19rem;
	}
	.page7_p2 >span:nth-child(2){
		font-size: 0.24rem;
	}
	.page7_p2 >span:last-child{
		font-size: 0.19rem;
	}
	.page7_p3{
		height:5.63%;
	}
	.page7_p3 >span{
		font-size: 0.24rem;
	}
	.page7_p4{
		height:5.63%;
	}
	.page7_p4 >span{
		font-size: 0.24rem;
	}
	.page7_p5{
		height:9.78%;
	}
	.page7_p5 >span{
		font-size: 0.24rem;
	}
	.page7_p6{
		color: #003633;
		height:5.47%;
	}
	.page7_p7{
		height:5.97%;
	}
	.page7_p7 >span{
		font-size: 0.24rem;
	}
	.page7_p8{
		/*margin-top: 0.2rem;*/
		/*margin-top: 3.31%;*/
		/*border:1px solid red;*/
	}
	.page7_p8 >span{
		font-size: 0.24rem;
	}
	.page7_div1{
		width:100%;
		height:38.64%;
		/*height:200px;*/
		position: absolute;
		bottom:0px;
	}
</style>