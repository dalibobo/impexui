/**
 * 验证
 */
impex.validate = {

	exp:function(objValue, typeValue) {
				var expVal = typeValue.replace(/#v/ig, "'" + objValue + "'");
				var rs = eval(expVal);
				return {type: rs, msg: (rs ? "表达式校验成功" : "表达式校验失败")};
	},

	//非空
	required:function(objValue,type){
		if($.trim(objValue) === ""){
			return {type:false,msg:"该项不能为空"};  
		}
		return {type:true,msg:"校验通过"};
	},
	//日期校验 YYYY-MM-DD HH:MM:SS
	dateTime : function(objValue,typeValue){
		if(objValue.length != 0 && objValue.length != 19){
			return {type:false,msg:"日期格式不正确"};  
		}else if(objValue.length != 0 && new Date(objValue).getDate() != objValue.substring(8,10)){
			return {type:false,msg:"日期格式不正确"}; 
		}
		return {type:true,msg:"校验通过"};
	},
	 //日期校验 YYYY-MM-DD
	date : function(objValue,typeValue){
		if(objValue.length != 0 && objValue.length != 10){
			return {type:false,msg:"日期格式不正确"}; 
		}else if(objValue.length != 0 && new Date(objValue).getDate() != objValue.substring(objValue.length-2)){
			return {type:false,msg:"日期格式不正确"}; 
		}
		return {type:true,msg:"校验通过"};
	},
	//整数校验 '0+':非负整数;'+':正整数;'-0':非正整数;'-':负整数 ;"0":整数 （不写默认为“0”）
	isint:function(objValue,typeValue){
		//非负整数
		var reg = /^-?[0-9]+$/;
		var typeName = "";
	
		if(typeValue === "0+"){
			reg = /^[0-9]+$/;
			typeName = "非负整数";
		}else if(typeValue === "+"){
			reg = /^([1-9]\d*)$/;
			typeName = "大于0正整数";
		}else if(typeValue === "-0"){
			reg = /^-(0|[1-9]\d*)$/;
			typeName = "非正整数";
		}else if(typeValue === "-"){
			reg = /^-[1-9]\d*$/;
			typeName = "负整数";
		}else if(typeValue === "0"){
			//整数
			reg = /^[-\d][0-9]+$/;
			typeName = "整数";
		}
		if(objValue.length != 0 &&!reg.test(objValue)){ 
			return {type:false,msg:"请正确输入"+typeName}; 
		} 
		return {type:true,msg:"校验通过"};
	},
	
	//数字类型  '+':整数 ，'-':负数 ,'true':数字     用法：isnumber：'+|-|true';  
	isnumber : function(objValue,typeValue){
		var reg = /^-?(\d+(\.\d+)?)$/;
		var msg = "请正确输入数字类型";
		if(typeValue === "+"){
			reg = /^(\d+(\.\d+)?)$/;
			msg = "请正确输入正数";
		}else if(typeValue === "-"){
			reg = /^-(\d+(\.\d+)?)$/;
			msg = "请正确输入负数";
		}else if(typeValue === "="){
			reg = /^-?(\d+(\.\d+)?)$/;
			msg = "请正确输入数字";
		}
		if(objValue.length !=0 && !reg.test(objValue)){ 
			return {type:false,msg:msg}; 
		}
		return {type:true,msg:"校验通过"};
	},
	
	//浮点数校验   '0+':非负浮点数;'+':正浮点数;'-0':非正浮点数;'-':负浮点数 ;".":浮点数
	isfloat : function(objValue,typeValue){
		//非负整数
		var reg = /^-?([1-9]\d*\.\d+|0?\.0+|0)$/;
		var typeName = "";
		if(typeValue === "0+"){
			reg = /^[0-9]\d*(\.\d+)?$/;
			typeName = "非负浮点数";
		}else if(typeValue === "+"){
			reg = /^[1-9]\d*(\.\d+)?$/;
			typeName = "正浮点数";
		}else if(typeValue === "-0"){
			reg = /^(-([0-9]\d*(\.\d+)?))$/;
			typeName = "非正浮点数";
		}else if(typeValue === "-"){
			reg = /^-([1-9]\d*(\.\d+)?)$/;
			typeName = "负浮点数";
		}else if(typeValue === "."){
			reg = /^-?([0-9]\d*(\.\d+)?)$/;
			typeName = "浮点数";
		}		
		if(objValue.length !=0 && !reg.test(objValue)){ 
			return {type:false,msg:"请正确输入"+typeName}; 
		}
		return {type:true,msg:"校验通过"};;
	},
	
	//电话号码校验
	phone : function(objValue,typeValue){
		var reg=/^0\d{2,3}-\d{5,9}|0\d{2,3}-\d{5,9}$/;
		if(objValue.length != 0 && !reg.test(objValue)){
			return {type:false,msg:"请正确输入电话号码"};   
		}
		return {type:true,msg:"校验通过"};
	},
	
	//手机号码校验
	mobile : function(objValue,typeValue){
		var reg= /^[1][345678]\d{9}$/;
		if(objValue.length != 0 && !reg.test(objValue)){ 
			return {type:false,msg:"请正确输入手机号码"};  
		}
		return {type:true,msg:"校验通过"};
	},
	
	//中文校验
	ischinese : function(objValue,typeValue){
		var reg=/^[\u0391-\uFFE5]+$/;
		if(objValue.length !=0 && !reg.test(objValue)){ 
			return {type:false,msg:"请输入中文"};  
		}
		return {type:true,msg:"校验通过"};
	},
	
	//
	card : function(objValue,typeValue){
		//身份证
		//15位数身份证正则表达式
		var arg1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
		//18位数身份证正则表达式
		var arg2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[A-Z])$/;
		
		if (objValue.match(arg1) == null && objValue.match(arg2) == null) {
			return {type:false,msg:"请输入正确身份证号"};
		}
		return {type:true,msg:"校验通过"};
	},
	
	//最大长度
	maxLength : function(objValue,typeValue){
		if (objValue.length!=0 && typeValue !="" && objValue.length>typeValue) {
			return {type:false,msg:"超出最大长度"};
		}
		return {type:true,msg:"校验通过"};
	},
	
	//最小长度
	minLength : function(objValue,typeValue){
		if (objValue.length!=0 && typeValue !="" && objValue.length < typeValue ) {
			return {type:false,msg:"小于最小长度"};
		}
		return {type:true,msg:"校验通过"};
	},
	
	//正则表达式验证
	pattern : function(objValue,typeValue){
		if (objValue.length != 0 && !eval(typeValue).test(objValue)) {
			return {type:false,msg:"该验证未通过"};
		}
		return {type:true,msg:"校验通过"};
	}
	
}