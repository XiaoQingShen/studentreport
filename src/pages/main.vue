<template>
	<div class="studentreport_container">
		<div class="studentreport_container_pages" :style="{top:toplen+'px'}">
			<div v-bind:class="[currentnum==0?'current':'',activenum==0?'active':'','pages','page1']" v-if="true"></div>
			<div v-bind:class="[currentnum==1?'current':'',activenum==1?'active':'','pages','page2']" v-if="true"></div>
			<div v-bind:class="[currentnum==2?'current':'',activenum==2?'active':'','pages','page3']" v-if="true"></div>
		</div>
		<v-touch v-on:swipeup="up" v-on:swipedown="down" class="wrapper">滑动</v-touch>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				currentnum:null,   //当前num
				activenum:null,    //activenum
				toplen:0,
			}
		},
		created(){

		},
		mounted(){

		},
		methods:{
			up(){
				// 上滑
				var _this = this;
				if(_this.currentnum == null){
					_this.currentnum = 0;
					_this.activenum = 1;
				}else{
					_this.currentnum = _this.currentnum +1;
					_this.activenum = _this.currentnum +2;
				};
				_this.toplen = _this.toplen -667;
			},
			down(){
				// 下滑
				var _this = this;
				_this.currentnum = _this.activenum;
				_this.activenum = _this.activenum -1;
				_this.toplen = _this.toplen + 667;
			}
		}
	}
</script>
<style>
	.studentreport_container{
		width:100%;
		height:100%;
		position:absolute;
		overflow: hidden;
	}
	.studentreport_container_pages{
		position: absolute;
		width:100%;
		height:100%;
		/*perspective: 2600px;*/
		/*transform-style: preserve-3d;*/
	}
	.pages{
		width:100%;
		height:100%;
	}
	.page1{
		background-color: green;
	}
	.page2{
		background-color: yellow;
	}
	.page3{
		background-color: pink;
	}
	.wrapper{
		position:absolute;
		width:100%;
		height:100px;
		border:1px solid red;
		bottom:0px;
		font-size: 0.1rem;
		text-align: center;
	}
	.current{
		transform: rotateX(90deg) translateZ(288.925px) scale(1);
		transition: 1000ms ease-out;
	}
	.active{
		transform: rotateX(0deg) translateZ(288.925px) scale(1);
		transition: 1000ms ease-out;
	}
</style>