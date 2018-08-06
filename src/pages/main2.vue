<template>
	<div class="main2_container">	
		<div class="item item1" data-aos="fade-down">2</div>
		<div class="item item2" data-aos="fade-right">3</div>
		<div class="item item3" data-aos="fade-left">4</div>
		<div class="item item4" data-aos="zoom-in">5</div>
		<div class="item item5" data-aos="zoom-out">6</div>
		<div class="item item6" data-aos="slide-up">7</div>
		<div class="item item7" data-aos="flip-up">8</div>
		<div class="item item8" data-aos="flip-down">9</div>
		<div class="item item9" data-aos="flip-right">10</div>
		<div class="item item10" data-aos="flip-left">11</div>
	</div>
</template>
<script></script>
<style>
	.main2_container{
		width:100%;
		height:100%;
	}
	.item{
		width:100%;
		height:400px;
		font-size: 0.12rem;
		border:1px solid red;
	}
	.item1,.item3,.item5,.item7,.item9{
		background-color: gray;
	}
	.item2,.item4,.item6,.item8,.item10{
		background-color: pink;
	}
</style>