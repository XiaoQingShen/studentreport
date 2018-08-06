<template>
	<div class="main1_container">
		<transition name="slide" mode="in-out">
  			<div v-if="curindex==0" class="page1"></div>
  			<div v-if="curindex==1" class="page2"></div>
  			<div v-if="curindex==2" class="page3"></div>
  			<div v-if="curindex==3" class="page4"></div>
  			<div v-if="curindex==4" class="page5"></div>
		</transition>
		<div @click="changepage" class="clickbtn"><p>点击</p></div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				curindex:0,  //当前显示下标
			}
		},
		created(){},
		mounted(){},
		methods:{
			changepage(){
				var _this = this;
				_this.curindex = _this.curindex+1;
			}
		}
	}
</script>
<style>
	.main1_container{
		width:100%;
		height:100%;
		font-size: 0.12rem;
	}
	.page1{
		width:100%;
		height:400px;
		background-color: green;
	}
	.page2{
		width:100%;
		height:400px;
		background-color: gray;
	}
	.page3{
		width:100%;
		height:400px;
		background-color: pink;
	}
	.page4{
		width:100%;
		height:400px;
		background-color: red;
	}
	.page5{
		width:100%;
		height:400px;
		background-color: yellow;
	}
	.clickbtn{
		width:100%;
		height:20px;
		position: absolute;
		bottom: 0px;
	}
	@keyframes slideIn {
	    from {
	        transform: translate3d(100%, 0, 0);
	        opacity: 0;
	    }
	    to {
	        transform: translate3d(0, 0, 0);
	        opacity: 1;
	    }
	}
	@keyframes slideOut {
	    from {
	        transform: translate3d(0, 0, 0);
	        opacity: 1;
	    }
	    to {
	        transform: translate3d(100%, 0, 0);
	        opacity: 0;
	    }
	}
	.slide-enter-active {
	    animation: slideIn .2s forwards;
	}
	.slide-leave-active {
	    animation: slideOut .2s forwards;
	}
</style>