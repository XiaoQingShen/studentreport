<!-- 测试 websocket通讯 -->
<template>
	<div class="test2_container">
		<p>接收的信息:{{msg}}</p>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				msg:'',   //接收的信息
			}
		},
		created(){
			var _this = this;
			_this.websockettest();
		},
		mounted(){},
		methods:{
			websockettest(){
				var _this = this;
				if("WebSocket" in window){
					console.log("你的浏览器支持");
					var ws = new WebSocket("");
					ws.onopen = function(){
						console.log("已连接");
					};
					ws.onmessage = function(evt){
						var received_msg = evt.data;
						_this.msg = received_msg;
					}
				}else{
					console.log("你的浏览器不支持");
				}
			}
		}
	}
</script>
<style>
	.test2_container{
		width:100%;
		height:100%;
		position: absolute;
	}
</style>