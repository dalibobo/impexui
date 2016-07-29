/**
 * impex-multipart-select  下拉多选组件
 * @param  datalist:初始化下拉数据  [{text:"",value:""},{text:"",value:""}]
 * @param  value:初始化选项 ["value1","value2"]
 */
impex.component('impex-combobox-multipart', {
	template: '<div class="impex-combo {{=class}} {{=style}}" >\
					<span class="textbox combo" style="width: 100%;"  :click="_showOp()">\
						<span class="textbox-addon" style="right: 0px;">\
							<a href="javascript:void(0)" class="textbox-icon combo-arrow" icon-index="0" tabindex="-1" style="width: 18px; height: {{height}};"></a>\
						</span>\
						<input id="{{id}}" type="text" class="textbox-text validatebox-text validatebox-readonly" autocomplete="off" tabindex="" readonly="readonly" x-disabled="{{xDisabled}}" x-validate="{{xValidate}}" placeholder="" style="margin-left: 0px; margin-right: 18px; padding-top: 0px; padding-bottom: 0px;" value="{{selectData.texts}}">\
						<input type="hidden" class="textbox-value"  name="{{=name}}" x-each="selectData.values as sd" value="{{sd}}">\
					</span>\
					<div x-show="showType" class="combo-panel panel-body panel-body-noheader" :click="_clickOpt()" style="max-height: 150px;" title="">\
						<ul>\
							<div :click="_selectOptions(d)" class="combobox-item {{d.onSelect ? \'combobox-item-selected\':\'\'}}" x-each="listData as d">{{d.text}}</div>\
						</ul>\
					</div>\
				</div>', 
	
	onInit: function() {
		var that = this;
		this.data.id = this.data.id ? this.data.id:"impex-combobox-multipart-" + getId();
		
	},

	events: {
		"form.reset": function() {
			if(this.data.value === ""){
				this.$_setValue("");
			}else{
				if(this.data.value){
					var value = getData(this, this.data.value);
					this.$_setValue(value);
				}else{
					this.$_setValue("");
				}
			}
		},
		"impex.validate.result":function(v,validateResult){
			if(!validateResult.result){
				var el = $(this.view.el);
				var of = el.offset() ;
				Tip.show("tip-"+this.data.id,{
					left:of.left+el.width(),
					top:of.top,
					dir:this.data.tipPosition,
					message:validateResult.msg
				});
			}
		}
	},

	data:{
		id:"",
		value:"",
		listData:[],
		showType:false,//下拉选项是否显示
		selectData: {texts: [], values: []},//选择选项集合
		mouseDownType:false,//鼠标单击是否隐藏下拉选项
		height:"22px",
		tipPosition:'right' //提示框的位置
	},
	methods:{
		_setValue:function(selectValue){
			if(selectValue==null || selectValue == undefined) return;
			var that = this;
			this.data.selectData = {texts: [], values: []};
			if(selectValue==null || selectValue===""){
				this.data.selectData = {texts: [], values: []};
			}
			var dateModel = {texts: [], values: []};

			for (j=0;j<this.data.listData.length ;j++ ){	
				this.data.listData[j].onSelect = false;
 
				if(selectValue==null || selectValue==="") continue;
				for (i=0;i<selectValue.length ;i++ ){		
					if(this.data.listData[j].value==selectValue[i]){
						this.data.listData[j].onSelect = true;
						dateModel.values.push(this.data.listData[j].value);
						dateModel.texts.push(this.data.listData[j].text);
						continue;
					}
				}
			}
			this.data.selectData = dateModel;
			if(_.isString(this.data.xValidate)){
				setTimeout(function(){
					$("#"+that.data.id).trigger("input");
				},100);
			}	

		},
		//点击选择选项
		_clickOpt:function(){
			this.data.mouseDownType = true;
		},
		//显示或隐藏选项
		_showOp : function(){
			this.data.showType = !this.data.showType ;
			this.data.mouseDownType = true;
		},
		getRemoteData: function(){
			//获取远程数据
			var that = this;

		},
		//选择选项
		_selectOptions:function(data){
			var aa = document.activeElement;
			var that = this;

			if(data.onSelect == undefined){
				data.onSelect = true;
				that.data.selectData.values.push(data.value);
				that.data.selectData.texts.push(data.text);
			}else if(data.onSelect){
				data.onSelect = false;
				for(i=0;i<that.data.selectData.values.length;i++){
					var d = that.data.selectData.values[i];
					if(d == data.value){
						that.data.selectData.values.splice(i,1);
						that.data.selectData.texts.splice(i,1);
						break;
					}
				}

			}else if(!data.onSelect){
				data.onSelect = true;
				that.data.selectData.values.push(data.value);
				that.data.selectData.texts.push(data.text);
			}
			
			if(_.isString(this.data.xValidate)){
				setTimeout(function(){
					$("#"+that.data.id).trigger("input");
				},100);
			}	
			
			
		}
	},
	
	
	onDisplay:function(){
		var that = this;
		var view = this.view;
		//设置浮出框的宽度
		var divWidth = $(view.el).width();
		var divHeight = view.el.offsetHeight<24?24:view.el.offsetHeight;
		this.data.height = divHeight - 2 +"px";
		view.el.childNodes[3].style.width = divWidth+"px";
		view.el.childNodes[1].childNodes[3].style.width = divWidth-22+"px";
		view.el.childNodes[1].childNodes[3].style.height = divHeight-2+"px";
		view.el.childNodes[1].childNodes[3].style.lineHeight = divHeight-2+"px";
		addEvent(document.body,"mousedown",
			function(event){
				setTimeout(function(){
					if(that.data.mouseDownType){
						that.data.mouseDownType = false;
					}else{
						that.data.showType = false;
					
					}
				},200);
			}	
		);

		//初始化赋值
		//_.extend(this.data.listData,getData(this,this.data.datalist));
		if(this.data.datalist){
			//监控下拉数据变化
			var plistModel = this.parent.closest('d',this.data.datalist);
			if(plistModel){
				//初始化赋值
				
				var that = this;
				var listModel = $.extend(true, [], getData(that,that.data.datalist));
				//赋值
				var selectValue = getData(this,this.data.value);
				var dateModel = {texts: [], values: []};
				if(selectValue){
					for (i=0;i<selectValue.length ;i++ ){
						for (j=0;j<listModel.length ;j++ ){
							if(listModel[j].value==selectValue[i]){
								listModel[j].onSelect = true;
								dateModel.values.push(listModel[j].value);
								dateModel.texts.push(listModel[j].text);
								break;
							}
						}
					};
				}
				
				this.data.selectData = dateModel;
				this.data.listData = listModel;
				
				//监控数据
				plistModel.watch(this.data.datalist, function(todos,name,type,newVal) {
						that.data.listData = newVal;
						that.data.selectData.values = [];
						that.data.selectData.texts = [];
						var selectValue = this.d(that.data.value);
						that.$_setValue(selectValue);
				});
			}
			
			//监控赋值变化
			var pvalueModel = this.parent.closest('d',this.data.value);
			if(pvalueModel){
				pvalueModel.watch(this.data.value, function(todos,name,type,newVal) {
					that.$_setValue(newVal);
				});
			}
		}
	}
	

});


/**
 * impex-combo  下拉选择（单选）
 * @param  datalist:初始化下拉数据  [{text:"",value:""},{text:"",value:""}]
 * @param  value:初始化选项 "value1"
 *
 * 选择后触发回调函数 cbk();
 */
impex.component('impex-combo', {
	template: '<div class="impex-combo {{=class}} {{=style}}" >\
					<div class="textbox combo" style="width: 100%;"  :click="_showOp()">\
						<div class="textbox-addon" style="right: 0px;">\
							<a href="javascript:void(0)" class="textbox-icon combo-arrow" icon-index="0" tabindex="-1" style="width: 18px; height: {{height}};"></a>\
						</div>\
						<input id="{{id}}" type="text" class="textbox-text validatebox-text validatebox-readonly" readonly="readonly" x-disabled="{{xDisabled}}" x-validate="{{xValidate}}" autocomplete="off" tabindex="" placeholder="" style="margin-left: 0px; margin-right: 18px; padding-top: 0px; padding-bottom: 0px;" value="{{selectData.text}}">\
						<input type="hidden" class="textbox-value"  name="{{=name}}" value="{{selectData.value}}">\
					</div>\
					<div x-show="showType" class="combo-panel panel-body panel-body-noheader" :click="_clickOpt()" style="max-height: 150px;" title="">\
						<ul>\
							<li :click="_selectOptions(d)" class="combobox-item {{d.onSelect ? \'combobox-item-selected\':\'\'}}" x-each="listData as d">{{d.text}}</li>\
						</ul>\
					</div>\
				</div>', 
	
	onInit: function() {
		var that = this;
		this.data.id = this.data.id!="" ? this.data.id:"impex-combo-" + getId();
		
		
		
	},

	events: {
		//重置
		"form.reset": function() {
			if(this.data.value === ""){
				this.$_setValue("");
			}else{
				if(this.data.value){
					var value = getData(this, this.data.value);
					this.$_setValue(value);
				}else{
					this.$_setValue("");
				}				
			}
		},
		"impex.validate.result":function(v,validateResult){
			if(!validateResult.result){
				var el = $(this.view.el);
				var of = el.offset() ;
				Tip.show("tip-"+this.data.id,{
					left:of.left+el.width(),
					top:of.top,
					dir:this.data.tipPosition,
					message:validateResult.msg
				});
			}
		}
	},

	data:{
		id:"",
		value:"",
		listData:[],
		showType:false,//下拉选项是否显示
		selectData: {text:"", value:""},//选择选项
		mouseDownType:false,//鼠标单击是否隐藏下拉选项
		height:"22px",
		tipPosition:'right'

	},
	methods:{
		//下拉选项赋值
		_setValue:function(selectValue){
			if(selectValue==null || selectValue == undefined) return;
			this.data.selectData  = {text:"", value:""};
			var dataModel = {}
			for (j=0;j<this.data.listData.length ;j++ ){	
				this.data.listData[j].onSelect = false;
				if(selectValue==null || selectValue==="") continue;
				if(this.data.listData[j].value==selectValue){
					this.data.listData[j].onSelect = true;
					dataModel.value = this.data.listData[j].value;
					dataModel.text = this.data.listData[j].text;
					if(_.isString(this.data.xValidate)){
							$("#"+this.data.id).trigger("input");
					}
				}
				
			}

			this.data.selectData = dataModel;
		},
		//点击选择选项
		_clickOpt:function(){
			this.data.mouseDownType = true;
		},
		//显示或隐藏选项
		_showOp : function(){
			this.data.showType = !this.data.showType ;
			this.data.mouseDownType = true;
		},
		getRemoteData: function(){
			//获取远程数据
			var that = this;

		},
		//选择选项
		_selectOptions:function(data){
			var that = this;
			that.data.selectData.value = "";
			that.data.selectData.text = "";
			for (j=0;j<this.data.listData.length ;j++ ){	
				that.data.listData[j].onSelect = false;
			}
			data.onSelect = true;

			that.data.selectData.value = data.value;
			that.data.selectData.text = data.text;
			if(_.isString(this.data.xValidate)){
				setTimeout(function(){
					$("#"+that.data.id).trigger("input");
				},100);				
			}
			this.data.showType = false;
			
			//调用回调函数返回当前选择的 {text:"",value:""}
			try{
				if(that.data.cbk!=undefined){
					//this.parent.closest(that.data.cbk)[that.data.cbk](that.data.selectData);
					if(this.m(that.data.cbk)){
						this.m(that.data.cbk)(that.data.selectData);
					}
					
				}
			}catch(e){
				console.log("调用cbk函数出错");
			}

		}
	
	},
	
	
	onDisplay:function(){
		var that = this;
		var view = this.view;
		//设置浮出框的宽度
		var divWidth = $(view.el).width();
		var divHeight = view.el.offsetHeight<24?24:view.el.offsetHeight;
		this.data.height = divHeight - 2 +"px";
		view.el.childNodes[3].style.width = divWidth+"px";
		view.el.childNodes[1].childNodes[3].style.width = divWidth-22+"px";
		view.el.childNodes[1].childNodes[3].style.height = divHeight-2+"px";
		view.el.childNodes[1].childNodes[3].style.lineHeight = divHeight-2+"px";

		addEvent(document.body,"mousedown",
			function(event){
				setTimeout(function(){
					if(that.data.mouseDownType){
						that.data.mouseDownType = false;
					}else{
						that.data.showType = false;
					
					}
				},200);
			}	
		);
		
		if(this.data.datalist){
			var plistModel = this.parent.closest('d',this.data.datalist);
			if(plistModel){
				//初始化赋值
				var listModel  = $.extend(true, [], getData(this,this.data.datalist));
				//赋值
				var selectValue = getData(this,this.data.value);
				var dataModel = {};
				if(selectValue){
					for (j=0;j<listModel.length ;j++ ){
						if(listModel[j].value==selectValue){
							listModel[j].onSelect = true;
							dataModel.value = listModel[j].value;
							dataModel.text = listModel[j].text;
							break;
						}
					}
				}
				
				this.data.selectData = dataModel;
				this.data.listData  = listModel;

				//监控下拉数据变化
				plistModel.watch(this.data.datalist, function(todos,name,type,newVal) {
					that.data.listData = newVal;
					that.data.selectData.value = "";
					that.data.selectData.text = "";
					var selectValue = this.d(that.data.value);
					that.$_setValue(selectValue);
				});
			}
			var pvalueModel = this.parent.closest('d',this.data.value);
			if(pvalueModel){
				//监控赋值变化
				pvalueModel.watch(this.data.value, function(todos,name,type,newVal) {
					that.$_setValue(newVal);
				});
			}
			
		}

	}
	

});




/**
 * impex-combo  下拉选择（单选） 支持手输过滤机鼠标滚轮滚动选择
 * @param  datalist:初始化下拉数据  [{text:"",value:""},{text:"",value:""}]
 * @param  value:初始化选项 "value1"
 *
 * 选择后触发回调函数 cbk();
 */
impex.component('impex-combobox', {
	template: '<div class="impex-combo {{=class}} {{=style}}" >\
					<div class="textbox combo" style="width: 100%;"  :click="_showOp()">\
						<div class="textbox-addon" style="right: 0px;">\
							<a href="javascript:void(0)" class="textbox-icon combo-arrow" icon-index="0" tabindex="-1" style="width: 18px; height: {{height}};"></a>\
						</div>\
						<input id="{{id}}" type="text" class="textbox-text validatebox-text validatebox-readonly" x-disabled="{{xDisabled}}" x-validate="{{xValidate}}"  autocomplete="off" tabindex="" x-on:focus="bindWheel(this)"  x-on:blur="unbindWheel(this)" :input="_oninput()" placeholder="" style="margin-left: 0px; margin-right: 18px; padding-top: 0px; padding-bottom: 0px;" x-model="filterKey" value="{{selectData.text}}">\
						<input type="hidden" class="textbox-value"  name="{{=name}}" value="{{selectData.value}}">\
					</div>\
					<div id="impex-combobox-div"  x-show="showType" class="combo-panel panel-body panel-body-noheader" :click="_clickOpt()" style="max-height: 150px;" title="">\
						<ul>\
							<li id="impex-combobox-div-li-{{$index}}" :click="_selectOptions(d)" class="combobox-item {{d.onSelect ? \'combobox-item-selected\':\'\'}}" x-each="listData as d ">{{d.text}}</li>\
						</ul>\
					</div>\
				</div>', 
	
	onInit: function() {
		var that = this;
		this.data.id = this.data.id ? this.data.id:"impex-combobox-" + getId();
		this.data.type = document.body.onmousewheel === null?'mousewheel':'DOMMouseScroll';
	},

	events: {
		"form.reset": function() {
			if(this.data.value === ""){
				this.$_setValue("");
			}else{
				if(this.data.value){
					var value = getData(this, this.data.value);
					this.$_setValue(value);
				}else{
					this.$_setValue("");
				}
				
			}
		},
		"impex.validate.result":function(v,validateResult){
			if(!validateResult.result){
				var el = $(this.view.el);
				var of = el.offset() ;
				Tip.show("tip-"+this.data.id,{
					left:of.left+el.width(),
					top:of.top,
					dir:this.data.tipPosition,
					message:validateResult.msg
				});
			}
		}
	},

	data:{
		value:"",
		listData:[],
		showType:false,//下拉选项是否显示
		selectData: {text:"", value:""},//选择选项
		mouseDownType:false,//鼠标单击是否隐藏下拉选项
		height:"22px",
		filterKey:"",
		//oninputList:[],
		bindIndexList:[],
		bindIndex:-1,
		type: "",
		tipPosition:'right'

	},
	methods:{
		//下拉选项赋值
		_setValue:function(selectValue){
			if(selectValue==null || selectValue == undefined) return;
			var that = this;
			this.data.selectData  = {text:"", value:""};			
			var dataModel = {}
			for (j=0;j<this.data.listData.length ;j++ ){	
				this.data.listData[j].onSelect = false;
				
				if(selectValue==null || selectValue==="") continue;
				if(this.data.listData[j].value==selectValue){
					this.data.listData[j].onSelect = true;
					dataModel.value = this.data.listData[j].value;
					dataModel.text = this.data.listData[j].text;
					//this.data.selectData.value = this.data.listData[j].value;
					//this.data.selectData.text = this.data.listData[j].text;
					if(_.isString(this.data.xValidate)){
						if(this.find("x-validate")){
							setTimeout(function(){
								var model = that.find("x-validate")[0];
								model.do();
								model.emit("validate.fire", model.do());
							},100);
						}
					}	
					//if(this.find("x-validate")){
						//var model = this.find("x-validate")[0];
						//model.do();
						//model.emit("validate.fire", model.do());
					//}
					this.$divScroollTO(j);
				}
				
			}
			this.data.selectData = dataModel;
		},
		//点击选择选项
		_clickOpt:function(){
			this.data.mouseDownType = true;
		},
		//显示或隐藏选项
		_showOp : function(){
			this.data.filterKey="";
			this.data.showType = !this.data.showType ;
			this.data.mouseDownType = true;
			this.data.bindIndexList = [];//清空过滤ID
			this.$divScroollTO(this.data.bindIndex);
		},
		//手工输入过滤选项
		_oninput : function(){
			this.data.showType = true ;
			this.data.mouseDownType = true;
			//this.data.oninputList.length = 0;//清空过滤数组
			this.data.bindIndexList =[];//清空过滤ID
			this.data.bindIndex = -1;
			var count=0;
			var listIndex=-1;
			for(var i= 0;i<this.data.listData.length;i++){
                var item = this.data.listData[i];
                if((item.text).indexOf(this.data.filterKey) > -1){
					listIndex=i;
					this.data.bindIndexList.push(i);
					//this.data.oninputList.push(item);
                    count++;
                 }
            }
			if(count==1){
				for (j=0;j<this.data.listData.length ;j++ ){	
					this.data.listData[j].onSelect = false;
				}

				this.data.listData[listIndex].onSelect = true;
				this.data.selectData.value = this.data.listData[listIndex].value;
				this.data.selectData.text = this.data.listData[listIndex].text;
			}
		},
		getRemoteData: function(){
			//获取远程数据
			var that = this;

		},
		divScroollTO:function(liIndex){
			var container = $('#impex-combobox-div'),
			scrollTo = $('#impex-combobox-div-li-'+liIndex);
			if (liIndex!=-1){
				container.scrollTop(
					scrollTo.offset().top - container.offset().top + container.scrollTop()
				);
			}
			
		},
		//选择选项
		_selectOptions:function(data){
			var that = this;
			that.data.selectData.value = "";
			that.data.selectData.text = "";
			that.data.showType = false;
			for (j=0;j<this.data.listData.length ;j++ ){	
				that.data.listData[j].onSelect = false;
			}
			data.onSelect = true;
			that.data.selectData.value = data.value;
			that.data.selectData.text = data.text;
			//if(this.find("x-validate")){
				//var model = this.find("x-validate")[0];
				//model.do();
				//model.emit("validate.fire", model.do());
			//}
			if(_.isString(this.data.xValidate)){
				if(this.find("x-validate")){
					setTimeout(function(){
						var model = that.find("x-validate")[0];
						model.do();
						model.emit("validate.fire", model.do());
					},100);
				}
			}
		},
		unbindWheel : function(comp){
			comp.view.off(this.data.type,null);
		},
		bindWheel : function(comp){
			var that = this;
			if(this.data.filterKey==""){
				that.data.bindIndexList=[];
			}
			comp.view.on(this.data.type,null,function(e){
				var wd = e.wheelDelta;
				var d = e.detail;
				
				var dir;
				if(wd !== undefined){
					dir = wd>0?-1:1;
				}else{
					dir = d>0?1:-1;
				}
				for (j=0;j<that.data.listData.length ;j++ ){	
					that.data.listData[j].onSelect = false;
				}

				if(dir>0){
					var index=-1;
					that.data.bindIndex++

					if(that.data.bindIndex>that.data.bindIndexList.length-1 && that.data.mouseDownType){
						that.data.bindIndex = that.data.bindIndexList.length-1;
					}
					if(that.data.bindIndexList.length!=0){
						index = that.data.bindIndexList[that.data.bindIndex];
					}else{
						
						if(that.data.bindIndex >= that.data.listData.length-1){
							that.data.bindIndex = that.data.listData.length-1; 
						}
						index = that.data.bindIndex;
					}
					
					
					that.$setValue(index);
				}else{
					that.data.bindIndex--;
					var index=-1;
					if(that.data.bindIndex<=0){
						that.data.bindIndex	= 0;
					}
					
					if(that.data.bindIndexList.length!=0){
						index = that.data.bindIndexList[that.data.bindIndex];
					}else{
						if(that.data.bindIndex >= that.data.listData.length-1){
							that.data.bindIndex = that.data.listData.length-1; 
						}
						index = that.data.bindIndex;
					}

					that.$setValue(index);					
				}

				that.$divScroollTO(that.data.bindIndex);
				
				return false;
			});
		},
		setValue:function(index){
			var that = this;
			this.data.listData[index].onSelect = true;
			this.data.selectData.value = this.data.listData[index].value;
			this.data.selectData.text = this.data.listData[index].text;
			//if(this.find("x-validate")){
			//	var model = this.find("x-validate")[0];
			//	model.do();
			//	model.emit("validate.fire", model.do());
			//}

			if(_.isString(this.data.xValidate)){
				if(this.find("x-validate")){
					setTimeout(function(){
						var model = that.find("x-validate")[0];
						model.do();
						model.emit("validate.fire", model.do());
					},100);
				}
			}

		}
	
	},
	
	
	onDisplay:function(){
		var that = this;
		var view = this.view;
		//设置浮出框的宽度
		var divWidth = $(view.el).width();
		var divHeight = view.el.offsetHeight<24?24:view.el.offsetHeight;
		this.data.height = divHeight - 2 +"px";
		view.el.childNodes[3].style.width = divWidth+"px";
		view.el.childNodes[1].childNodes[3].style.width = divWidth-22+"px";
		view.el.childNodes[1].childNodes[3].style.height = divHeight-2+"px";
		view.el.childNodes[1].childNodes[3].style.lineHeight = divHeight-2+"px";

		addEvent(document.body,"mousedown",
			function(event){
				setTimeout(function(){
					if(that.data.mouseDownType){
						that.data.mouseDownType = false;
					}else{
						that.data.showType = false;
					
					}
				},200);
			}	
		);
		
		
		that.$divScroollTO(that.data.bindIndex);



		if(this.data.datalist){
			var plistModel = this.parent.closest('d',this.data.datalist);
			if(plistModel){
				//初始化赋值
				var listModel = $.extend(true, [], getData(this,this.data.datalist));
				
				//赋值
				var selectValue = getData(this,this.data.value);
				var dataModel = {};
				if(selectValue){
					for (j=0;j<listModel.length ;j++ ){
						if(listModel[j].value==selectValue){
							listModel[j].onSelect = true;
							dataModel.value = listModel[j].value;
							dataModel.text = listModel[j].text;
							this.data.bindIndex = j;
							break;
						}
					}
				}
				
				this.data.selectData = dataModel;
				this.data.listData = listModel;

				//监控下拉数据变化
				plistModel.watch(this.data.datalist, function(todos,name,type,newVal) {
						that.data.listData = newVal;
						that.data.selectData.value = "";
						that.data.selectData.text = "";
						var selectValue = this.d(that.data.value);
						that.$_setValue(selectValue);
				});
			}
			
			//监控赋值变化
			var pvalueModel = this.parent.closest('d',this.data.value);
			if(pvalueModel){
				pvalueModel.watch(this.data.value, function(todos,name,type,newVal) {
					that.$_setValue(newVal);
				});
			}
			
		}

	}
	

});





/**
 * impex-combo-grid  下拉选择表格
 * @param  datalist:初始化下拉数据  dataSource: [],//数据源	columns: [],//列头
 * @param  value:初始化选项 "value"
 *
 * 选择后触发回调函数 cbk();
 */
impex.component('impex-combogrid', {
	template: '<div class="impex-combo {{=class}} {{style}}" >\
					<div class="textbox combo" style="width: 100%;"  :click="_showOp()">\
						<div class="textbox-addon" style="right: 0px;">\
							<a href="javascript:void(0)" class="textbox-icon combo-arrow" icon-index="0" tabindex="-1" style="width: 18px; height: {{height}};"></a>\
						</div>\
						<input id="{{id}}" type="text" class="textbox-text validatebox-text validatebox-readonly" x-disabled="{{xDisabled}}" x-validate="{{xValidate}}"  autocomplete="off" tabindex="" readonly="readonly" placeholder="" style="margin-left: 0px; margin-right: 18px; padding-top: 0px; padding-bottom: 0px;" value="{{selectData.textfield}}">\
						<input type="hidden" class="textbox-value"  name="{{name}}" value="{{selectData.idfield}}">\
					</div>\
					<div x-show="showType" class="combo-panel panel-body panel-body-noheader" :click="_clickOpt()" title="">{{=CONTENT}}</div>\
				</div>', 
	
	onInit: function() {
		var that = this;
		this.data.id = this.data.id ? this.data.id:"impex-combogrid-" + getId();

	},

	events: {
		"form.reset": function() {
			if(this.data.value === ""){
				this.$_setValue("");
			}else{
				if(this.data.value){
					var value = getData(this, this.data.value);
					this.$_setValue(value);
				}else{
					this.$_setValue("");
				}
				
			}
		},
		"impex.validate.result":function(v,validateResult){
			if(!validateResult.result){
				var el = $(this.view.el);
				var of = el.offset() ;
				Tip.show("tip-"+this.data.id,{
					left:of.left+el.width(),
					top:of.top,
					dir:this.data.tipPosition,
					message:validateResult.msg
				});
			}
		},
		"row.click":function(v,d){
			this.$_selectOptions(d);
		}
	},

	data:{
		id:"",
		showType:false,//下拉选项是否显示
		selectData: {textfield:"", idfield:""},//选择选项
		mouseDownType:false,//鼠标单击是否隐藏下拉选项
		height:"22px",
		tipPosition:'right'
	},
	methods:{
		//下拉选项赋值
		_setValue:function(selectValue){
			if(selectValue==null || selectValue == undefined) return;
			this.data.selectData = {textfield:"", idfield:""};
			var dataModel = {};
			for (j=0;j<this.data.dataSource.length ;j++ ){	
				if(selectValue==null || selectValue==="") continue ;
				if(this.data.dataSource[j][this.data.idfield]==selectValue){
					dataModel.textfield = this.data.dataSource[j][this.data.textfield];
					dataModel.idfield = this.data.dataSource[j][this.data.idfield];
					break;
				}
				
			}
			this.data.selectData = dataModel;
			if(_.isString(this.data.xValidate)){
				$("#"+this.data.id).trigger("input");
			}
		},
		//点击选择选项
		_clickOpt:function(){
			this.data.mouseDownType = true;
		},
		//显示或隐藏选项
		_showOp : function(){
			this.data.showType = !this.data.showType ;
			this.data.mouseDownType = true;
		},
		getRemoteData: function(){
			//获取远程数据
			var that = this;

		},
		//选择选项
		_selectOptions:function(data){
			var that = this;
			var selectValueModel = {
					"textfield":data[that.data.textfield], 
					"idfield":data[that.data.idfield]
				};
			that.data.selectData = selectValueModel;
			this.data.showType = false;
			
			if(_.isString(this.data.xValidate)){
				setTimeout(function(){
					$("#"+that.data.id).trigger("input");
				},100);
			}
			//调用回调函数返回当前选择的 {text:"",value:""}
			try{
				if(that.data.cbk!=undefined){
					if(this.m(that.data.cbk)){
						this.m(that.data.cbk)(that.data.selectData);
					}
				}
			}catch(e){
				console.log("调用cbk函数出错");
			}

		}
	},
	onDisplay:function(){
		var that = this;
		var view = this.view;
		//设置浮出框的宽度
		var divWidth = $(view.el).width();
		var divHeight = view.el.offsetHeight<24?24:view.el.offsetHeight;
		this.data.height = divHeight - 2 +"px";
		view.el.childNodes[1].childNodes[3].style.width = divWidth-22+"px";
		view.el.childNodes[1].childNodes[3].style.height = divHeight-2+"px";
		view.el.childNodes[1].childNodes[3].style.lineHeight = divHeight-2+"px";
		addEvent(document.body,"mousedown",
			function(event){
				setTimeout(function(){
					if(that.data.mouseDownType){
						that.data.mouseDownType = false;
					}else{
						that.data.showType = false;
					
					}
				},200);
			}	
		);

	}
	

});
