<!-- 毕业生报告  懒加载 -->
<template>
  <swiper class="swiper_page_container" :options="swiperOption" ref="mySwiper">
    <swiper-slide class="slidepages" v-for="(report,index) in curreportlist" :key="index">
  		<byxx v-if="report.type=='byxx'"></byxx>
  		<lqyxzy v-if="report.type=='lqyxzy'"></lqyxzy>
  		<xsrs v-if="report.type=='xsrs'"></xsrs>
  		<xzbjqs v-if="report.type=='xzbjqs'"></xzbjqs>
  		<zcbdsj v-if="report.type=='zcbdsj'"></zcbdsj>
  		<dycxf v-if="report.type=='dycxf'"></dycxf>
  		<stxfph v-if="report.type=='stxfph'"></stxfph>
  		<stxfze v-if="report.type=='stxfze'"></stxfze>
  		<jcxg v-if="report.type=='jcxg'"></jcxg>
  		<xfph v-if="report.type=='xfph'"></xfph>
  		<jgcs v-if="report.type=='jgcs'"></jgcs>
  		<jsl v-if="report.type=='jsl'"></jsl>
  		<wy v-if="report.type=='wy'"></wy>
  		<zhcj v-if="report.type=='zhcj'"></zhcj>
  		<cj v-if="report.type=='cj'"></cj>
  		<hj v-if="report.type=='hj'"></hj>
  		<wgwg v-if="report.type=='wgwg'"></wgwg>
  		<wgwj v-if="report.type=='wgwj'"></wgwj>
  		<qsys v-if="report.type=='qsys'"></qsys>
  		<zzmm v-if="report.type=='zzmm'"></zzmm>
  		<grhxgirl v-if="report.type=='grhxgirl'"></grhxgirl>
  		<grhxboy v-if="report.type=='grhxboy'"></grhxboy>
    </swiper-slide>
  </swiper>
</template>
<script>
  import {swiper, swiperSlider} from 'vue-awesome-swiper'
  import byxx from './content/byxx'   //毕业学校
  // import lqyxzy from './content/lqyxzy'   //录取院校专业
  // import xsrs from './content/xsrs'   //新生人数
  // import xzbjqs from './content/xzbjqs'   //行政班级寝室
  // import zcbdsj from './content/zcbdsj'   //注册报到时间
  // import dycxf from './content/dycxf'   //第一次消费
  // import stxfph from './content/stxfph'   //食堂消费偏好
  // import stxfze from './content/stxfze'   //食堂消费总额
  // import jcxg from './content/jcxg'   //就餐习惯
  // import xfph from './content/xfph'   //消费偏好
  // import jgcs from './content/jgcs'   //进馆次数
  // import jsl from './content/jsl'   //借书量
  // import wy from './content/wy'   //违约
  // import zhcj from './content/zhcj'   //综合成绩
  // import cj from './content/cj'   //成绩
  // import hj from './content/hj'   //获奖
  // import wgwg from './content/wgwg'   //晚归未归
  // import wgwj from './content/wgwj'   //违规违纪
  // import qsys from './content/qsys'   //寝室用水
  // import zzmm from './content/zzmm'   //政治面貌
  // import grhxgirl from './content/grhxgirl'   //个人画像女
  // import grhxboy from './content/grhxboy'   //个人画像 男
 	export default {
	    data() {
	      return {
	        swiperOption: {
	          	notNextTick: true,
	          	loop: false,   //是否循环
	          	autoplay: false,  //是否自动播放
	          	speed: 0,   //滑动速度
	          	direction: 'vertical',   //纵向滚动
          		grabCursor: true,    //鼠标覆盖swiper时指针会编程手掌形状，拖动时指针会变成抓手形状
	          	setWrapperSize: true,
	          	autoHeight: true,
	          	pagination: '.swiper-pagination',
	          	paginationClickable: true,
	          	mousewheelControl: true,   //开启鼠标滚轮控制swiper切换，可设置鼠标选项，默认值false
	          	observeParents: true,   
	          	debugger: true,  
	          	height: window.innerHeight,  //高度设置，占满设备高度
	          	resistanceRatio: 0,   //抵抗力
	          	lazy: {   //延迟加载
				    loadPrevNext: true,
				    loadPrevNextAmount: 2
			  	},
			  	on:{
			  		slideChangeTransitionStart:function(event){
			  			var _this = this;
			  			console.log(_this.activeIndex);
			  			console.log(this.reportlist);
			  			if(_this.activeIndex > this.curindex){
			  				// 向后滑动时加载下一页数据
			  				_this.curindex = _this.activeIndex;
			  			}
			  		}
			  	}
	        },
	        reportlist:[],  //报告列表
	        curreportlist:[],   //当前显示报告列表
	        curindex:0,   //当前显示下标
	      }
	    },
	    components: {
	    	swiper,
	    	swiperSlider,
	    	byxx,
	    	// lqyxzy,
	    	// byxx:resolve => {   //毕业学校
	    	// 	require(['./content/byxx'],resolve)
	    	// },
	    	lqyxzy:resolve => {  //录取院校专业
	    		require(['./content/lqyxzy'],resolve)
	    	},
	    	xsrs:resolve => {   //新生人数
	    		require(['./content/xsrs'],resolve)
	    	},
	    	xzbjqs:resolve => {  //行政班级寝室
	    		require(['./content/xzbjqs'],resolve)
	    	},
	    	zcbdsj:resolve => {   //注册报到时间
	    		require(['./content/zcbdsj'],resolve)
	    	},
	    	dycxf:resolve => {   //第一次消费
	    		require(['./content/dycxf'],resolve)
	    	},
	    	stxfph:resolve => {  //食堂消费偏好
	    		require(['./content/stxfph'],resolve)
	    	},
	    	stxfze:resolve => {  //食堂消费总额
	    		require(['./content/stxfze'],resolve)
	    	},
	    	jcxg:resolve => {  //就餐习惯
	    		require(['./content/jcxg'],resolve)
	    	},
	    	xfph:resolve => {  //消费偏好
	    		require(['./content/xfph'],resolve)
	    	},
	    	jgcs:resolve => {  //进馆次数
	    		require(['./content/jgcs'],resolve)
	    	},
	    	jsl:resolve => {  //借书量
	    		require(['./content/jsl'],resolve)
	    	},
	    	wy:resolve => {  //违约
	    		require(['./content/wy'],resolve)
	    	},
	    	zhcj:resolve => {  //综合成绩
	    		require(['./content/zhcj'],resolve)
	    	},
	    	cj:resolve => {   //成绩
	    		require(['./content/cj'],resolve)
	    	},
	    	hj:resolve => {  //获奖
	    		require(['./content/hj'],resolve)
	    	},
	    	wgwg:resolve => {  //晚归未归
	    		require(['./content/wgwg'],resolve)
	    	},
	    	wgwj:resolve => {    //违规违纪
	    		require(['./content/wgwj'],resolve)
	    	},
	    	qsys:resolve => {  //寝室用水
	    		require(['./content/qsys'],resolve)
	    	},
	    	zzmm:resolve => {  //政治面貌
	    		require(['./content/zzmm'],resolve)
	    	},
	    	grhxgirl:resolve => {   //个人画像女
	    		require(['./content/grhxgirl'],resolve)
	    	},
	    	grhxboy:resolve => {  //个人画像 男
	    		require(['./content/grhxboy'],resolve)
	    	}
	    },
	    created(){
	    	var _this = this;
	    	_this.getreportlist();
	    },
	    mounted(){

	    },
	    watch:{
	    	curindex:function(){
	    		var _this = this;
	    		console.log("改变");
	    		_this.curreportlist.push(_this.reportlist[_this.curindex]);
	    	}
	    },
	    methods:{
	    	// 获取报告列表
	    	getreportlist(){
	    		var _this = this;
	    		_this.$axios({
	    			type:'get',
	    			url:'./static/reportlist.json'
	    		}).then(function(res){
	    			var res_data = res.data;
	    			if(res_data.code=="40001"){
	    				_this.reportlist = res_data.content;
	    				_this.curreportlist = [];
	    				if(res_data.content.length>2){
	    					_this.curreportlist.push(res_data.content[0]);
	    					_this.curreportlist.push(res_data.content[1]);
	    				}else{
	    					_this.curreportlist = res_data.content;
	    				}
	    			}else{
	    				// 数据获取失败
	    			}
	    		})
	    	}
	    }
	}
</script>
<style>
  .swiper_page_container{
    width:100%;
    height:100%;
    transform:translate3d(0,0,0);
    overflow:hidden;
  }
  .slidepages{
    width:100%;
    height:100%;
    transform:translate3d(0,0,0);
  }
</style>