<!-- 学生报告 -->
<template>
	<div class="reportindex_container">
		<div class="fullpage-wp" v-fullpage="opts">
			<!-- 毕业学校 -->
			<div v-show="true" class="pages page1">   
				<div class="paddingtopdiv"></div>
				<p class="page1_p1" v-animate="{value:'bounceInLeft',delay:0}"><span class="speciallabel1">2013</span>年仲夏之季</p>
				<p class="page1_p2" v-animate="{value:'bounceInRight',delay:0}">你告别了你的母校</p>
				<p class="page1_p3" v-animate="{value:'bounceInLeft',delay:0}">“<span class="speciallabel1">南宁第三中学</span>”</p>
				<img class="page1_img1" src="../assets/images/byxx.png">
				<p class="page1_p4" v-animate="{value:'rotateIn',delay:100}">上滑开启毕业生报告</p>
				<img class="page1_img2" v-animate="{value:'bounce',delay:100}" src="../assets/images/page_top.png">
			</div>
			<!-- 录取院校专业 -->
			<div v-show="true" class="pages page2">
				<div class="paddingtopdiv"></div>
				<p class="page2_p1" v-animate="{value:'bounceInRight',delay:0}">你以 <span class="speciallabel2">507</span> 的分数</p>
				<p class="page2_p2" v-animate="{value:'bounceIn',delay:0}">成功被“<span class="speciallabel1">南宁职业技术学院</span>”</p>
				<p class="page2_p3" v-animate="{value:'bounceInLeft',delay:0}">“<span class="speciallabel1">信息工程学院</span>”学院</p>
				<p class="page2_p4" v-animate="{value:'zoomIn',delay:0}">“<span class="speciallabel2">计算机信息管理</span>”专业</p>
				<p class="page2_p5" v-animate="{value:'bounceInLeft',delay:0}">录取</p>
				<img class="page2_img1" v-animate="{value:'bounce',delay:100}" src="../assets/images/lqyxzy.png">
			</div>
			<!-- 新生人数 -->
			<div v-show="true" class="pages page3">
				<div class="paddingtopdiv"></div>
				<p class="page3_p1" v-animate="{value:'flipInX',delay:300}">全校 <span class="speciallabel1">748</span> 新生学子中</p>
				<p class="page3_p2" v-animate="{value:'flipInX',delay:300}"><span class="speciallabel2">70</span>人</p>
				<p class="page3_p3" v-animate="{value:'flipInX',delay:300}">与你来自同一个<span class="speciallabel1">区县</span></p>
				<p class="page3_p4" v-animate="{value:'flipInX',delay:300}"><span class="speciallabel2">5</span>人</p>
				<p class="page3_p5" v-animate="{value:'flipInX',delay:300}">与你来自同一个<span class="speciallabel1">学校</span></p>
				<p class="page3_p6" v-animate="{value:'flipInX',delay:300}">从此你的追梦途中不再孤独</p>
				<img class="page3_img1" src="../assets/images/xsrs.png">
			</div>
			<!-- 行政班级寝室 -->
			<div v-show="true" class="pages page4">
				<div class="paddingtopdiv"></div>
				<p class="page4_p1" v-animate="{value:'flipInY',delay:0}"><span class="speciallabel1">14信息管理01</span>班</p>
				<p class="page4_p2" v-animate="{value:'flipInY',delay:0}">天南海北<span class="speciallabel1">20</span>人在这里相遇</p>
				<p class="page4_p3" v-animate="{value:'flipInY',delay:0}">从此你不再孤军奋战</p>
				<p class="page4_p4" v-animate="{value:'flipInY',delay:0}"><span class="speciallabel2">114</span> 的 <span class="speciallabel2">4</span> 人间的寝室</p>
				<p class="page4_p5" v-animate="{value:'flipInY',delay:0}">从此就是你避风躲雨的港湾</p>
				<img class="page4_img1" src="../assets/images/xzbjqs.png">
			</div>
			<!-- 注册报到时间 -->
			<div v-show="true" class="pages page5">
				<div class="paddingtopdiv"></div>
				<p class="page5_p1" v-animate="{value:'zoomInLeft',delay:0}"><span class="speciallabel1">2014年9月12日</span></p>
				<p class="page5_p2" v-animate="{value:'zoomInLeft',delay:300}">你完成了入学报到</p>
				<p class="page5_p3" v-animate="{value:'zoomInLeft',delay:600}">正式成为</p>
				<p class="page5_p4" v-animate="{value:'zoomInLeft',delay:900}"><span class="speciallabel1">南宁职业技术学院</span></p>
				<p class="page5_p5" v-animate="{value:'zoomInLeft',delay:1200}">的一员</p>
				<img class="page5_img1" src="../assets/images/zcbdsj.png">
			</div>
			<!-- 第一次消费 -->
			<div v-show="true" class="pages page6">
				<div class="paddingtopdiv"></div>
				<p class="page6_p1" v-animate="{value:'zoomInRight',delay:0}"><span class="speciallabel1">2014年9月13日</span></p>
				<p class="page6_p2" v-animate="{value:'zoomInRight',delay:300}">你第一次使用校园卡</p>
				<p class="page6_p3" v-animate="{value:'zoomInRight',delay:900}">在“<span class="speciallabel1">第一食堂</span>”消费了 <span class="speciallabel1">12</span> 元</p>
				<div class="page6_div1">
					<div class="page6_chart1" id="page6_chart1"></div>
					<div class="page6_chart2" id="page6_chart2"></div>
				</div>
			</div>
			<!-- 消费食堂偏好 -->
			<div v-show="true" class="pages page7">
				<div class="paddingtopdiv"></div>
				<p class="page7_p1">分布于南宁职业技术学院的 <span class="speciallabel1">4</span> 个食堂中</p>
				<p class="page7_p2">你最喜欢<span>“</span><span class="speciallabel1">第三食堂</span><span>”</span>，在此食堂</p>
				<p class="page7_p3">累计消费 <span class="speciallabel1">506</span> 次</p>
				<p class="page7_p4">餐均消费 <span class="speciallabel1">8</span> 元</p>
				<p class="page7_p5">累计消费 <span class="speciallabel1">4048</span> 元</p>
				<p class="page7_p6">消费排名</p>
				<p class="page7_p7">累计消费次数  <span class="speciallable3">NO.15</span></p>
				<p class="page7_p8">累计消费金额  <span class="speciallabel2">NO.10</span></p>
				<div class="page7_div1" id="page7_chart1"></div>
			</div>
			<!-- 食堂消费总额 -->
			<div v-show="true" class="pages page8">
				<div class="paddingtopdiv"></div>
				<p class="page8_p1"><span class="speciallabel1">食堂</span> 消费累计</p>
				<p class="page8_p2"><span class="speciallabel1">10086</span> 元</p>
				<p class="page8_p3">食堂累计消费总额排名</p>
				<p class="page8_p4">在女生里排名 <span class="speciallable3">NO.</span><span class="speciallable3">15</span></p>
				<p class="page8_p5">在全院里排名 <span class="speciallabel2">NO.</span></span><span class="speciallabel2">5</span></p>
				<img class="page8_img1" src="../assets/images/dsst.png">
			</div>
			<!-- 就餐习惯 -->
			<div v-show="true" class="pages page9">
				<div class="paddingtopdiv"></div>
				<p class="page9_p1">一日三餐加夜宵中</p>
				<p class="page9_p2">你不爱吃 <span class="speciallabel2">夜宵</span></p>
				<p class="page9_p3">餐饮结构</p>
				<div class="page9_div1" id="page9_chart1"></div>
			</div>
			<!-- 消费偏好 -->
			<div class="pages page10">
				<div class="paddingtopdiv"></div>
				<p class="page10_p1">一卡通累计消费</p>
				<p class="page10_p2"><span class="speciallabel1">50235.36</span> 元</p>
				<p class="page10_p3">消费排名</p>
				<p class="page10_p4">在统计学生里排名 <span class="speciallable3">NO.</span><span class="speciallable3">15</span></p>
				<p class="page10_p5">在统计女生里排名 <span class="speciallabel2">NO.</span><span class="speciallabel2">5</span></p>
				<p class="page10_p6">在全院里排名 <span class="speciallable4">NO.</span><span class="speciallable4">5</span></p>
				<p class="page10_p7">除了食堂，你最喜欢去--</p>
				<div class="page10_div1" id="page10_chart1"></div>
			</div>
			<!-- 进馆次数 -->
			<div class="pages page11">
				<div class="paddingtopdiv"></div>
				<p class="page11_p1"><span class="speciallabel1">2014年9月20日</span></p>
				<div class="clear_float"></div>
				<p class="page11_p2">你从图书馆借走第一本书</p>
				<div class="clear_float"></div>
				<p class="page11_p3"><span class="speciallabel1">《牧羊少年的奇幻旅程》</span></p>
				<div class="clear_float"></div>
				<p class="page11_p4">累计进图书馆</p>
				<p class="page11_p5"><span class="speciallabel1">186</span> 次</p>
				<p class="page11_p6">在全院里排名 <span class="speciallable3">NO.</span><span class="speciallable3">15</span></p>
				<p class="page11_p7">在年级里排名 <span class="speciallabel2">NO.</span><span class="speciallabel2">5</span></p>
				<img class="page11_img1" src="../assets/images/jgcs.png">
			</div>
			<!-- 借书量 -->
			<div class="pages page12">
				<div class="paddingtopdiv"></div>
				<p class="page12_p1">累计借书 <span class="speciallabel1">25</span> 次</p>
				<p class="page12_p2">在全院里排名 <span class="speciallable3">NO.</span><span class="speciallable3">15</span></p>
				<p class="page12_p3">在年级里排名 <span class="speciallabel2">NO.</span><span class="speciallabel2">5</span></p>
				<p class="page12_p4">累计借书 <span class="speciallabel1">65</span> 本</p>
				<p class="page12_p5">在全院里排名 <span class="speciallable3">NO.</span><span class="speciallable3">16</span></p>
				<p class="page12_p6">在年级里排名 <span class="speciallabel2">NO.</span><span class="speciallabel2">5</span></p>
				<p class="page12_p7">书籍类型</p>
				<div class="page12_div1" id="page12_chart1"></div>
			</div>
			<!-- 违约 -->
			<div class="pages page13">
				<div class="paddingtopdiv"></div>
				<p class="page13_p1">图书借阅累计违约 <span class="speciallabel2">10</span> 次</p>
				<p class="page13_p2">累计违约 <span class="speciallabel2">15</span> 天</p>
				<p class="page13_p3">累计违约金额 <span class="speciallabel2">5</span> 元</p>
				<p class="page13_p4">累计违约金额排名</p>
				<p class="page13_p5">在全院里排名 <span class="speciallable3">NO.</span><span class="speciallable3">15</span></p>
				<p class="page13_p6">在年级里排名 <span class="speciallabel2">NO.</span><span class="speciallabel2">5</span></p>
				<img class="page13_img1" src="../assets/images/wy.png">
			</div>
		</div>
	</div>
</template>
<script>
import reportcss from '../tools/reportindex.css'
import {chartPaint} from '../tools/paint_charts.js'  //echarts 图形方法
	export default{
		data(){
			return{
				opts:{
					start:0,
					dir:'v',
					loop:false,
					duration:0,
					beforeChange:function(prev,next){
						
					},
					afterChange:function(prev,next){
						
					}
				},
				page6_chart1:null,  //第一次消费 图1
				page6_chart2:null,  //第二次消费 图2
				page7_chart1:null,  //消费食堂偏好
				page9_chart1:null,  //就餐习惯
				page10_chart1:null,   //消费偏好
				page12_chart1:null,   //借书量
			}
		},
		created(){},
		mounted(){
			var _this = this;
			_this.page6_echarts_patint();
			_this.page7_echarts_paint();
			_this.page9_echarts_paint();
			_this.page10_echarts_paint();
			_this.page12_echarts_paint();
		},
		methods:{
			// 点击到第二页
			topage2(){
				var _this = this;
				_this.opts.start = 1;
				moveSectionDown();
			},
			// 第六页 图形
			page6_echarts_patint(){
				var _this = this;
				_this.page6_chart1 = _this.$echarts.init(document.getElementById("page6_chart1"));
				_this.page6_chart2 = _this.$echarts.init(document.getElementById("page6_chart2"));
				var option1 = chartPaint().pie1({text:'全校','name':'新生刷卡地点一致',value:25,'y':'60%','center':'65%'});
				var option2 = chartPaint().pie1({text:'专业','name':'新生刷卡地点一致',value:50,'y':'30%','center':'35%'});
				_this.page6_chart1.setOption(option1);
				_this.page6_chart2.setOption(option2);
			},
			// 第七页 图形
			page7_echarts_paint(){
				var _this = this;
				_this.page7_chart1 = _this.$echarts.init(document.getElementById("page7_chart1"));
				// var option1 = chartPaint().pie1({text:'全校','name':'新生刷卡地点一致',value:25,'y':'60%','center':'65%'});
				var page7_option1 = chartPaint().barline1({});
				// console.log(option1);
				_this.page7_chart1.setOption(page7_option1);
			},
			// 第九页 就餐习惯
			page9_echarts_paint(){
				var _this = this;
				_this.page9_chart1 = _this.$echarts.init(document.getElementById("page9_chart1"));
				var page9_option1 = chartPaint().pie2({});
				_this.page9_chart1.setOption(page9_option1);
			},
			// 第十页 消费偏好
			page10_echarts_paint(){
				var _this = this;
				_this.page10_chart1 = _this.$echarts.init(document.getElementById("page10_chart1"));
				var page10_option1 = chartPaint().pie3({});
				_this.page10_chart1.setOption(page10_option1);
			},
			// 第十二页 借书量
			page12_echarts_paint(){
				var _this = this;
				_this.page12_chart1 = _this.$echarts.init(document.getElementById("page12_chart1"));
				var page12_option1 = chartPaint().pie4({});
				_this.page12_chart1.setOption(page12_option1);
			},
		}
	}
</script>
<style>
	.reportindex_container{
		width:100%;
		height:calc(100% - 0rem);
		/*height:6.03rem;*/
		border-bottom:1px solid red;
		position: absolute;
		-webkit-overflow-scrolling: touch;
		/*border:1px solid red;*/
	}
	.page1_img2{
		animation:arrow 1.5s infinite ease-in-out;
    	-webkit-animation: arrow 1.5s infinite ease-in-out; 
	}
</style>