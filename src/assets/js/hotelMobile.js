;$(function() {
		//上拉加载函数,ajax
	    var thisPageNo = 1;
	    var page = 10; //每次加载5条
	    var noData = false;
	    
		var myscroll = new iScroll("wrapper", {
	        onScrollMove: function () { //拉动时
	            //上拉加载
	            if (this.y < this.maxScrollY) {
	                $(".pull-loading").html("加载");
	                $(".pull-loading").addClass("loading");
	            } else {
	                $(".pull-loading").html("上拉加载");
	                $(".pull-loading").removeClass("loading");
	            }
	        },
	        onScrollEnd: function () { //拉动结束时
	            //上拉加载
	            if ($(".pull-loading").hasClass('loading')) {
	                $(".pull-loading").html("加载中...");
	                HotelList.query("unclear", thisPageNo);
	            }
	        }
	    });
	    
	    
		var hotelList={};
		hotelList.urls={
			hotelList:"/mobile/amanager/info/hotel/ajaxHotelList.htm",
		};
		hotelList.query=function(clearFlag, pageNo){
			if (clearFlag == "clear") {
				$("#scroller ul").html("");
				thisPageNo = 1;
				noData = false;
			}
// 			var params = $("#hotel-query-form").serializeObject();
			var params={
				page:pageNo,
				hotelId:$("#query-hotel-Id").val(),
				nameChn:$("#queryHotelName").val(),
				city:$("#cityId").val(),
				indate:$("#indate").val(),
				outdate:$("#outdate").val(),
				limit:10
			}
			commonUtil.Ajax(hotelList.urls.hotelList, params, function(data){
				if (data.result==1){
					var hotelDataListObj=data.hotels;
// 					var hotel_length = data.page.totalCount;//数据的总长度
					var hotel_length = hotelDataListObj.length;//数据的总长度
                    var remainder = hotel_length % page;//余数
                    
                    if (!noData) {
	                    for (var j = 0; j < hotel_length; j++){
	                    	var img = "";
	                    	if (typeof(hotelDataListObj[j].masterImg) != "undefined") {
	                    		img = hotelDataListObj[j].masterImg;
	                    	}
	                     	var hotelId = hotelDataListObj[j].hotelId;
	                     	var nameChn = hotelDataListObj[j].nameChn;
	                     	var existFlag = hotelDataListObj[j].existFlag;
	                     	var levelName = hotelDataListObj[j].levelName;
	                     	var adress = hotelDataListObj[j].adress;
	                     	if (existFlag == 0) {
	                     		$('#scroller ul').append('<li><table width="100%"><tr>' + 
		                     			'<td width="100px"><img src="' + img + '" width="50px" height="50px" /></td>' + 
		                     			'<td><a href="javascript:void(0)" class="hotelDetail" data-id="' + hotelId + '" ><font color="blue" size="5px">'+ nameChn + '</font></a><br />' + adress + '<br />' + levelName + '</td>' + 
		                     			'<td></td>' + 
		                     			'</tr></table></li>');                 		
	                     	} else {
	                     		var lowestPrice = hotelDataListObj[j].lowestPrice;
// 	                     		$('#scroller ul').append('<li><a><img src="' + img + '" width="50px" height="50px" /><font>'+ nameChn + '\n' + levelName + '</font><span style="color: red; float: right; font-size: 20px;">￥' + lowestPrice+'起</span></a></li>');                     		
	                     		$('#scroller ul').append('<li><table width="100%"><tr>' + 
	                     			'<td width="100px"><img src="' + img + '" width="50px" height="50px" /></td>' + 
	                     			'<td><a href="javascript:void(0)" class="hotelDetail" data-id="' + hotelId + '" ><font color="blue" size="5px">'+ nameChn + '</font></a><br />' + adress + '<br />' + levelName + '</td>' + 
	                     			'<td><span style="color: red; float: right; font-size: 20px;">￥' + lowestPrice+'起</span></td>'+
	                     			'</tr></table></li>');
							}
//	                     	if (existFlag == 0) {
//	                     		$("#scroller ul").append("<li><table width='100%'><tr>" + 
//		                     			"<td width='100px'><img src='" + img + "' width='50px' height='50px' /></td>" + 
//		                     			"<td><a href='javascript:void(0)' class='hotelDetail' data-id='" + hotelId + "' ><font color='blue' size='5px'>"+ nameChn + "</font></a><br />" + adress + "<br />" + levelName + "</td>" + 
//		                     			"<td></td>" + 
//		                     			"</tr></table></li>");                 		
//	                     	} else {
//	                     		var lowestPrice = hotelDataListObj[j].lowestPrice;
//// 	                     		$("#scroller ul").append("<li><a><img src='" + img + "' width='50px' height='50px' /><font>"+ nameChn + "\n" + levelName + "</font><span style='color: red; float: right; font-size: 20px;'>￥" + lowestPrice+"起</span></a></li>");                     		
//	                     		$("#scroller ul").append("<li><table width='100%'><tr>" + 
//	                     			"<td width='100px'><img src='" + img + "' width='50px' height='50px' /></td>" + 
//	                     			"<td><a href='javascript:void(0)' class='hotelDetail' data-id='" + hotelId + "' ><font color='blue' size='5px'>"+ nameChn + "</font></a><br />" + adress + "<br />" + levelName + "</td>" + 
//	                     			"<td><span style='color: red; float: right; font-size: 20px;'>￥" + lowestPrice+"起</span></td>"+
//	                     			"</tr></table></li>");
//							}
	                    }
                    }
                    if (remainder == 0){
                    	noData = false;
                        thisPageNo += 1;
                    }else{
                    	noData = true;
                        $('.pull-loading').html("没有了哟");
                    }
                    myscroll.refresh();
                    
                    $(".hotelDetail").bind("click", function() {
   	                 var id = $(this).data("id");
   	                 var indate = $("#indate").val();
   	                 var outdate = $("#outdate").val();
   	                 if (commonUtil.isEmpty(id)) {
   	                     layer.msg("信息不存在", { icon: 0});
   	                 }
   	                 var showUrl = "/mobile/amanager/info/hotel/hotelDetail.htm?id=" + id + "&indate=" + indate + "&outdate=" + outdate;
   	                 location.href = showUrl;
   	             	});
				}else{
					layer.msg(data.msg, {icon: 2});
				}
			});
		};
		
		hotelList.init=function(){
			$(".hotel-search-btn").on("click",function(){
				HotelList.query("clear", 1);
			});
			
			HotelList.query("clear", 1);
			$("#hotel-content-body").on("click",".roomtype",function(){
				var hotelId = $(this).data("hotelid");
				if(commonUtil.isEmpty(hotelId)){
					layer.msg("请选择正确的酒店", {icon: 2});
					return false;
				}
			});
			$("#hotel-content-body").on("click",".setHotelSortNumberBtn",function(){
					var localHotelId = $(this).attr("data-hotelid");
					var optionType = $(this).attr("data-type");
					var localCityId = $(this).attr("data-localCityId");
					if(optionType=="update"){
						var hotelMaxSortNumber = $(this).attr("data-sortNumber");
						hotelList.commongAlertSortUpdate(hotelMaxSortNumber,localHotelId,localCityId);
					}else{
						hotelList.commongAlertSortUpdate("",localHotelId,localCityId);
					}
				 return false;
			});
		};
		
		$("#cityName").suggest(citys, {
			hot_list : commoncitys,
			dataContainer : '#cityId',
			onSelect : function() {
				HotelList.query("clear", 1);
			},
			attachObject : '#suggest'
		});
		$("#queryHotelName").suggestAjax(this, {
			dataContainer : "#query-hotel-Id",
			onSelect : function() {
	 			HotelList.query("clear", 1);
			},
			attachObject : '#query_hotelname_suggest',
			urls : "/mobile/amanager/info/hotel/ajaxHotelsByKey.htm",
			isCookie : 8
		});
		
		window.HotelList=hotelList;
		jQuery(document).ready(function() {
			HotelList.init();
		});
	});
//	//定义serializeObject方法，序列化表单
//	$.fn.serializeObject = function() {
//		var o = {};
//		var a = this.serializeArray();
//		$.each(a, function() {
//			if (o[this.name]) {
//				if (!o[this.name].push) {
//					o[this.name] = [ o[this.name] ];
//				}
//				o[this.name].push(this.value || '');
//			} else {
//				o[this.name] = this.value || '';
//			}
//		});
//		return o;
//	};