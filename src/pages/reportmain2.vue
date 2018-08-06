<!-- js监听手机屏幕触摸事件 touch -->
<template>
	<div class="reportmain2_container">
		<div class="test_pages_container" v-bind:style="slideEffect" ref="remove" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
			<div class="test1_pages" :style="{height:clientHeight+'px'}" v-for="(report,index) in curreportlist" :key="index">
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
			</div>
		</div>
	</div>
</template>
<script>
import byxx from '../pages/content/byxx'   //毕业学校
import lqyxzy from '../pages/content/lqyxzy'   //录取院校专业
	export default{
		data(){
			return{
				clientHeight:window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,   //内容区高度
				startY:0,   //开始触摸的位置
				moveY:0,   //滑动时的位置
				endY:0,   //结束触摸的位置
				disY:0,   //移动距离
				prevY:0,   //上一次移动的距离
				slideEffect:'',   //滑动时的效果
				curindex:0,   //当前展示的页面下标
				// pagenums:30,   //页面总数
				reportlist:[
					{"name":"毕业学校","type":"byxx"},
					{"name":"录取院校专业","type":"lqyxzy"},
					{"name":"新生人数","type":"xsrs"},
					{"name":"行政班级寝室","type":"xzbjqs"},
					{"name":"注册报到时间","type":"zcbdsj"},
					{"name":"第一次消费","type":"dycxf"},
					{"name":"食堂消费偏好","type":"stxfph"},
					{"name":"食堂消费总额","type":"stxfze"},
					{"name":"就餐习惯","type":"jcxg"},
					{"name":"消费偏好","type":"xfph"},
					{"name":"进馆次数","type":"jgcs"},
					{"name":"借书量","type":"jsl"},
					{"name":"违约","type":"wy"},
					{"name":"综合成绩","type":"zhcj"},
					{"name":"成绩","type":"cj"},
					{"name":"获奖","type":"hj"},
					{"name":"晚归未归","type":"wgwg"},
					{"name":"违规违纪","type":"wgwj"},
					{"name":"寝室用水","type":"qsys"},
					{"name":"个人画像女","type":"grhxgirl"},
					{"name":"个人画像男","type":"grhxboy"},
					{"name":"政治面貌","type":"zzmm"}
				],  //报告列表
				curreportlist:[
					{"name":"毕业学校","type":"byxx"},
					{"name":"录取院校专业","type":"lqyxzy"}
				],  //报告列表
			}
		},
		components:{
			byxx,
			lqyxzy,
			// lqyxzy:resolve => {  //录取院校专业
	  //   		require(['./content/lqyxzy'],resolve)
	  //   	},
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
		},
		mounted(){

		},
		methods:{
			// 开始
			touchstart(ev){
				var _this = this;
				ev = ev || event;
				ev.preventDefault();   //阻止默认事件
				if(ev.touches.length == 1){
					_this.startY = ev.touches[0].clientY;   //记录开始位置
				}
			},
			// 移动
			touchmove(ev){
				var _this = this;
				ev = ev || event;
				ev.preventDefault();
				let removeHeight = _this.$refs.remove.scrollTop;
				if(ev.touches.length == 1){
					//滑动时距离顶部的距离
					_this.moveY = ev.touches[0].clientY;
				    //实时移动的位置 = 实时的滑动距离 - 起始位置
				    _this.disY = _this.moveY - _this.startY; 
				    if(_this.disY <0){   //上滑
				    	_this.slideEffect = 'transform:translateY('+(_this.disY+_this.prevY)+'px)';
				    	if(_this.curindex == _this.reportlist.length-1){
				    		// 最后一页不允许上滑
				    		_this.slideEffect = 'transform:translateY('+(_this.prevY)+'px)';
				    	};
				    }else if(_this.disY >0){   //下滑  首页不能下滑
				    	if(_this.curindex==0){
				    		_this.slideEffect = 'transform:translateY(0px)';
				    	}else{
				    		_this.slideEffect = 'transform:translateY('+(_this.disY+_this.prevY)+'px)';
				    	}
				    }
				} 
			},
			// 结束
			touchend(ev){
				var _this = this;
				ev = ev || event;
				ev.preventDefault();
				if(ev.changedTouches.length ==1){
					let endY = ev.changedTouches[0].clientY;
					_this.disY = endY - _this.startY;
					// 开始位置和结束位置相等时 未滑动
					if(_this.disY>0){
						// 下滑
						if(_this.curindex==0){
							// 首页下滑不移动
						}else{
							if(_this.disY > (_this.clientHeight/2)){
								// 滑动距离超过屏幕的二分之一  下滑一页
								_this.curindex = _this.curindex -1;
								_this.slideEffect = 'transform:translateY('+(_this.prevY+_this.clientHeight)+'px)';
								_this.prevY = _this.prevY+_this.clientHeight;
							}else{
								// 未达到下滑条件 不下滑
								_this.slideEffect = 'transform:translateY('+_this.prevY+'px)';
								_this.prevY = _this.prevY;
							}
						}
					}else if(_this.disY<0){
						console.log("上滑");
						if(_this.curindex<(_this.reportlist.length-1)){
							// 上滑
							// 不是最后一页 允许上滑
							if(-(_this.disY)>(_this.clientHeight/2)){
								// 滑动距离超过屏幕的二分之一 上滑一页
								_this.slideEffect = 'transform:translateY('+(_this.prevY+(-(_this.clientHeight)))+'px)';
								_this.prevY = _this.prevY+(-(_this.clientHeight));
								_this.curindex = _this.curindex+1;
								// 提前延后加载资源
								if(_this.curreportlist.length < _this.reportlist.length){
									_this.curreportlist.push(_this.reportlist[_this.curreportlist.length]);
								};
								console.log(_this.curreportlist);
							}else{
								// 未达到上滑条件  不上滑
								if(_this.curindex==0){
									_this.slideEffect = 'transform:translateY(0px)';
									_this.prevY = 0;
								}else{
									_this.slideEffect = 'transform:translateY('+(_this.prevY)+'px)';
									_this.prevY = _this.prevY;
								};
							}
						}else{
							// 最后一页 不允许上滑
							_this.slideEffect = 'transform:translateY('+(_this.prevY)+'px)';
							_this.prevY = _this.prevY;
						};
					}
				}
			}
		}
	}
</script>
<style>
	.reportmain2_container{
		width:100%;
		height:100%;
		position: absolute;
		overflow: hidden;
	}
	.test_pages_container{
		width:100%;
		height:auto;
		border:1px solid green;
	}
	.test1_pages{
		width:100%;
		height:100%;
		position: static;
	}
	.testpage1{
		background-color: gray;
	}
	.testpage2{
		background-color: pink;
	}
	.testpage3{
		background-color: yellow;
	}
	.testpage4{
		background-color: red;
	}
	.testpage5{
		background-color: gray;
	}
</style>