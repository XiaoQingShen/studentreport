function chartPaint(){
	// 页面6 第一次消费
	var pie1option = {
		title:{
			text:'全校',
			x:'28%',
			y:'55%'
		},
		tooltip:{show:false},
		color:['#EA635D','#DEE2E7'],
		series:[
			{
				name:'新生刷卡地点一致',
				type:'pie',
				radius:[50,65],
				center:['33%','60%'],
				data:[
					{name:'新生刷卡地点一致',value:25,
						label:{
							formatter:function(val){
								return '{zb|'+val.percent+'%}\n'+'{zblabel|'+val.name+'}';
							},
							rich:{
								zb:{
	                                color:'#EA635D',
	                                fontSize:40,
	                                fontFamily:'PingFang-SC-Bold'
	                            },
	                            zblabel:{
	                                color:'#999999',
	                                fontSize:10,
	                                fontFamily:'PingFang-SC-Bold'
	                            }
							}
						}
					},
					{name:'',value:75,label:{show:false},labelLine:{show:false},emphasis:{label:{show:false},labelLine:{show:false}}}
				]
			}
		]
	};
	// 页面9 就餐习惯
	var pie2option = {
		title:{
			text:''
		},
		tooltip:{show:false},
		legend:{
			data:['早餐','中餐','晚餐','夜宵'],
			bottom:10
		},
		color:['#EA635D','#60C998','#EA7E53','#80A9B0'],
		series:[
			{
				name:'就餐习惯',
				type:'pie',
				radius:'55%',
				center:['50%','50%'],
				data:[
					{name:'早餐',value:230},
					{name:'中餐',value:200},
					{name:'晚餐',value:231},
					{name:'夜宵',value:129}
				]
			}
		]
	};
	// 页面10  消费偏好
	var pie3option = {
		title:{
			text:''
		},
		tooltip:{show:false},
		legend:{
			type: 'scroll',
			data:['超市','水果店','糕点房','药店'],
			bottom:10
		},
		color:['#EA635D','#60C998','#EA7E53','#80A9B0'],
		series:[
			{
				name:'就餐习惯',
				type:'pie',
				radius:'55%',
				center:['50%','50%'],
				label:{show:false},
				data:[
					{name:'超市',value:230},
					{name:'水果店',value:200},
					{name:'糕点房',value:231},
					{name:'药店',value:129}
				]
			}
		]
	};
	// 页面12  借书量
	var pie4option = {
		title:{
			text:''
		},
		tooltip:{show:false},
		legend:{
			type: 'scroll',
			data:['文学','艺术','科技','工程'],
			bottom:10
		},
		color:['#EA635D','#60C998','#EA7E53','#80A9B0'],
		series:[
			{
				name:'借书量',
				type:'pie',
				radius:'55%',
				center:['50%','50%'],
				label:{show:true,position:'inside'},
				data:[
					{name:'文学',value:230},
					{name:'艺术',value:200},
					{name:'科技',value:231},
					{name:'工程',value:129}
				]
			}
		]
	};
	// 第十五页 成绩
	var pie5option ={
		title:{
			text:''
		},
		tooltip:{show:false},
		legend:{
			type: 'scroll',
			orient: 'vertical',
			data:['一次性通过','重修/重考通过','未通过'],
			left:15,
			bottom:45
		},
		color:['#60C998','#EA635D','#EA7E53'],
		series:[
			{
				name:'第一课堂已修',
				type:'pie',
				radius:70,
				center:['55%','50%'],
				data:[
					{name:'一次性通过',value:56,
						label:{
							formatter:function(val){
								return '{zb|'+val.value+'}'+'{dw| 门}\n'+'{zblabel|'+val.name+'}';
							},
							rich:{
								zb:{
	                                fontSize:24,
	                                fontFamily:'PingFang-SC-Bold'
	                            },
	                            zblabel:{
	                                color:'#999999',
	                                fontSize:10,
	                                fontFamily:'PingFang-SC-Bold'
	                            },
	                            dw:{
	                            	color:'#333333',
	                            	fontSize:13,
	                            	fontFamily:'PingFang-SC-Bold'
	                            }
							}
						}
					},
					{name:'重修/重考通过',value:3,
						label:{
							formatter:function(val){
								return '{zb|'+val.value+'}'+'{dw| 门}\n'+'{zblabel|'+val.name+'}';
							},
							rich:{
								zb:{
	                                // color:'#EA635D',
	                                fontSize:24,
	                                fontFamily:'PingFang-SC-Bold'
	                            },
	                            zblabel:{
	                                color:'#999999',
	                                fontSize:10,
	                                fontFamily:'PingFang-SC-Bold'
	                            },
	                            dw:{
	                            	color:'#333333',
	                            	fontSize:13,
	                            	fontFamily:'PingFang-SC-Bold'
	                            }
							}
						}
					},
					{name:'未通过',value:1,
						label:{
							formatter:function(val){
								return '{zb|'+val.value+'}'+'{dw| 门}\n'+'{zblabel|'+val.name+'}';
							},
							rich:{
								zb:{
	                                // color:'#EA635D',
	                                fontSize:24,
	                                fontFamily:'PingFang-SC-Bold'
	                            },
	                            zblabel:{
	                                color:'#999999',
	                                fontSize:10,
	                                fontFamily:'PingFang-SC-Bold'
	                            },
	                            dw:{
	                            	color:'#333333',
	                            	fontSize:13,
	                            	fontFamily:'PingFang-SC-Bold'
	                            }
							}
						}
					}
				]
			}
		]
	};
	// 第十五页 成绩
	var pie6option ={
		title:{
			text:''
		},
		tooltip:{show:false},
		legend:{
			type: 'scroll',
			orient: 'vertical',
			data:['已修学分','未修学分'],
			left:15,
			bottom:20
		},
		color:['#60C998','#EA635D','#EA7E53'],
		series:[
			{
				name:'第二课堂已修',
				type:'pie',
				radius:70,
				center:['55%','50%'],
				data:[
					{name:'已修学分',value:56,
						label:{
							formatter:function(val){
								return '{zb|'+val.value+'}'+'{dw| 分}';
							},
							rich:{
								zb:{
	                                fontSize:24,
	                                fontFamily:'PingFang-SC-Bold'
	                            },
	                            dw:{
	                            	color:'#333333',
	                            	fontSize:13,
	                            	fontFamily:'PingFang-SC-Bold'
	                            }
							}
						}
					},
					{name:'未修学分',value:3,
						label:{
							formatter:function(val){
								return '{zb|'+val.value+'}'+'{dw| 分}';
							},
							rich:{
								zb:{
	                                // color:'#EA635D',
	                                fontSize:24,
	                                fontFamily:'PingFang-SC-Bold'
	                            },
	                            dw:{
	                            	color:'#333333',
	                            	fontSize:13,
	                            	fontFamily:'PingFang-SC-Bold'
	                            }
							}
						}
					}
				]
			}
		]
	};
	// 页面7 消费食堂偏好
	var barline1option = {
		title:{
			text:'',
		},
		tooltip:{
			show:false
		},
		grid:{
			top:20
		},
		legend:{
			data:['消费次数','餐均消费（元）'],
			bottom:10
		},
		xAxis:{
			type:'category',
			data:['一食堂','二食堂','三食堂','四食堂']
		},
		yAxis:[
			{
				type:'value',
				name:''
			}
		],
		color:['#EA635D','#83ACE8'],
		series:[
			{
				name:'消费次数',
				type:'bar',
				data:[20,40,80,90],
				barWidth:25,
				itemStyle:{
					barBorderRadius:5
				},
				label:{
					show:false,
					position:'top'
				}
			},
			{
				name:'餐均消费（元）',
				type:'line',
				data:[120,28,89,30]
			}
		]
	};
	// 第十四页  综合成绩
	var line1option = {
		title:{
			text:''
		},
		tooltip:{
			show:false
		},
		grid:{
			top:20,
			bottom:180,
			top:50
		},
		legend:{
			data:['平均分数','班级排名'],
			bottom:10
		},
		xAxis:{
			type:'category',
			axisLabel: {
               interval:0,
               rotate:-90
            },
			data:['2017-2018学年第一学期','2017-2018学年第一学期','2017-2018学年第一学期','2017-2018学年第一学期','2017-2018学年第一学期','2017-2018学年第一学期','2017-2018学年第一学期','2017-2018学年第一学期']
		},
		yAxis:[
			{
				type:'value',
				name:''
			}
		],
		color:['#83ACE8','#DD6B66'],
		series:[
			{
				name:'平均分数',
				type:'line',
				data:[20,30,40,50,60,70,80,90],
				markLine: {
	                data: [
	                    {type: 'average', name: '平均值'}
	                ]
	            }
			},
			{
				name:'班级排名',
				type:'line',
				data:[40,30,32,28,27,25,15,12],
				markLine: {
	                data: [
	                    {type: 'average', name: '平均值'}
	                ]
	            }
			}
		]
	};
	return {
		pie1:function(data){
			pie1option.title.text = data.text;
			pie1option.title.y = data.y;
			pie1option.series[0].center = ['33%',data.center];
			pie1option.series[0].data[0].name = data.name;
			pie1option.series[0].data[0].value = data.value;
			pie1option.series[0].data[1].value = 100 - data.value;
			return pie1option;
		},
		pie2:function(data){
			return pie2option;
		},
		pie3:function(data){
			return pie3option;
		},
		pie4:function(data){
			return pie4option;
		},
		pie5:function(data){
			return pie5option;
		},
		pie6:function(data){
			return pie6option;
		},
		barline1:function(data){
			return barline1option;
		},
		line1:function(data){
			return line1option;
		}
	}
};
export{
	chartPaint
};