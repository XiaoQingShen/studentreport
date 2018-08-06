<!-- 测试js监听手机屏幕触摸事件 touch -->
<template>
	<div class="touchtest1_container">
		<div class="test_pages_container" v-bind:style="slideEffect" ref="remove" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
			<div class="test1_pages testpage1" :style="{height:clientHeight+'px'}">1</div>
			<div class="test1_pages testpage2" :style="{height:clientHeight+'px'}">2</div>
			<div class="test1_pages testpage3" :style="{height:clientHeight+'px'}">3</div>
			<div class="test1_pages testpage4" :style="{height:clientHeight+'px'}">4</div>
			<div class="test1_pages testpage5" :style="{height:clientHeight+'px'}">5</div>
			<div class="test1_pages testpage6" :style="{height:clientHeight+'px'}">6</div>
		</div>
	</div>
</template>
<script>
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
				pagenums:6,   //页面总数
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
				    	if(_this.curindex == _this.pagenums-1){
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
						if(_this.curindex<(_this.pagenums-1)){
							// 上滑
							// 不是最后一页 允许上滑
							if(-(_this.disY)>(_this.clientHeight/2)){
								// 滑动距离超过屏幕的二分之一 上滑一页
								_this.slideEffect = 'transform:translateY('+(_this.prevY+(-(_this.clientHeight)))+'px)';
								_this.prevY = _this.prevY+(-(_this.clientHeight));
								_this.curindex = _this.curindex+1;
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
	.touchtest1_container{
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