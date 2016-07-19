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
							<li :click="_selectOptions(d)" class="combobox-item {{d.onSelect ? \'combobox-item-selected\':\'\'}}" x-each="listData as d">{{d.text}}</li>\
						</ul>\
					</div>\
				</div>', 
	
	onInit: function() {
		var that = this;
		this.data.id = this.data.id ? this.data.id:"impex-combobox-multipart-" + getId()
		//初始化赋值
		//_.extend(this.data.listData,getData(this,this.data.datalist));
		if(this.data.datalist){
			//监控下拉数据变化
			if(this.parent.closest('d',this.data.datalist)){
				//初始化赋值
				this.data.listData = $.extend(true, [], getData(this,this.data.datalist));
				
				//监控数据
				this.parent.closest('d',this.data.datalist).watch(this.data.datalist, function(todos,name,type,newVal) {
						that.data.listData = newVal;
						that.data.selectData.values = [];
						that.data.selectData.texts = [];
						var selectValue = this.d(that.data.value);
						that.$_setValue(selectValue);
				});
			}
			
			//监控赋值变化
			if(this.parent.closest('d',this.data.value)){
				//赋值
				var selectValue = getData(this,this.data.value);
				for (i=0;i<selectValue.length ;i++ ){
					for (j=0;j<this.data.listData.length ;j++ ){
						if(this.data.listData[j].value==selectValue[i]){
							this.data.listData[j].onSelect = true;
							this.data.selectData.values.push(this.data.listData[j].value);
							this.data.selectData.texts.push(this.data.listData[j].text);
							continue;
						}
					}
				};

				this.parent.closest('d',this.data.value).watch(this.data.value, function(todos,name,type,newVal) {
					that.$_setValue(newVal);
				});
			}
			

		}
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
			this.data.selectData.values = [];
			this.data.selectData.texts = [];
			if(selectValue==null || selectValue==""){
				this.data.selectData.values = [];
				this.data.selectData.texts = [];
			}
			for (j=0;j<this.data.listData.length ;j++ ){	
				this.data.listData[j].onSelect = false;
 
				if(selectValue==null || selectValue=="") continue;
				for (i=0;i<selectValue.length ;i++ ){		
					if(this.data.listData[j].value==selectValue[i]){
						this.data.listData[j].onSelect = true;
						this.data.selectData.values.push(this.data.listData[j].value);
						this.data.selectData.texts.push(this.data.listData[j].text);
						continue;
					}
				}
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
				$("#"+this.data.id).trigger("input");
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
		
		if(this.data.datalist){
			if(this.parent.closest('d',this.data.datalist)){
				//初始化赋值
				this.data.listData = $.extend(true, [], getData(this,this.data.datalist));

				//监控下拉数据变化
				this.parent.closest('d',this.data.datalist).watch(this.data.datalist, function(todos,name,type,newVal) {
					that.data.listData = newVal;
					that.data.selectData.value = "";
					that.data.selectData.text = "";
					var selectValue = this.d(that.data.value);
					that.$_setValue(selectValue);
				});
			}
			if(this.parent.closest('d',this.data.value)){
				//赋值
				var selectValue = getData(this,this.data.value);
				for (j=0;j<this.data.listData.length ;j++ ){
					if(this.data.listData[j].value==selectValue){
						this.data.listData[j].onSelect = true;
						this.data.selectData.value = this.data.listData[j].value;
						this.data.selectData.text = this.data.listData[j].text;
					}
				}
				//监控赋值变化
				this.parent.closest('d',this.data.value).watch(this.data.value, function(todos,name,type,newVal) {
					that.$_setValue(newVal);
				});
			}
			
		}
		
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
			this.data.selectData.value = "";
			this.data.selectData.text = "";
			if(selectValue==null || selectValue==""){
				this.data.selectData.value = "";
				this.data.selectData.text = "";
			}
			for (j=0;j<this.data.listData.length ;j++ ){	
				this.data.listData[j].onSelect = false;
				if(selectValue==null || selectValue=="") continue;
				if(this.data.listData[j].value==selectValue){
					this.data.listData[j].onSelect = true;
					this.data.selectData.value = this.data.listData[j].value;
					this.data.selectData.text = this.data.listData[j].text;
				}
				
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
			that.data.selectData.value = "";
			that.data.selectData.text = "";
			for (j=0;j<this.data.listData.length ;j++ ){	
				that.data.listData[j].onSelect = false;
			}
			data.onSelect = true;
			that.data.selectData.value = data.value;
			that.data.selectData.text = data.text;
			if(_.isString(this.data.xValidate)){
				$("#"+this.data.id).trigger("input");
			}
			this.data.showType = false;
			
			//调用回调函数返回当前选择的 {text:"",value:""}
			try{
				if(that.data.cbk!=undefined){
					//this.parent.closest(that.data.cbk)[that.data.cbk](that.data.selectData);
					this.m(that.data.cbk)(that.data.selectData);
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
		
		if(this.data.datalist){
			if(this.parent.closest('d',this.data.datalist)){
				//初始化赋值
				this.data.listData = $.extend(true, [], getData(this,this.data.datalist));
				
				//监控下拉数据变化
				this.parent.closest('d',this.data.datalist).watch(this.data.datalist, function(todos,name,type,newVal) {
						
						that.data.listData = newVal;
						that.data.selectData.value = "";
						that.data.selectData.text = "";
						var selectValue = this.d(that.data.value);
						that.$_setValue(selectValue);
				});
			}
			
			//监控赋值变化
			if(this.parent.closest('d',this.data.value)){
				//赋值
				var selectValue = getData(this,this.data.value);
				for (j=0;j<this.data.listData.length ;j++ ){
					if(this.data.listData[j].value==selectValue){
						this.data.listData[j].onSelect = true;
						this.data.selectData.value = this.data.listData[j].value;
						this.data.selectData.text = this.data.listData[j].text;
						this.data.bindIndex = j;
					}
				}

				this.parent.closest('d',this.data.value).watch(this.data.value, function(todos,name,type,newVal) {
					that.$_setValue(newVal);
				});
			}
			
		}
		

		this.data.type = document.body.onmousewheel === null?'mousewheel':'DOMMouseScroll'

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
			this.data.selectData.value = "";
			this.data.selectData.text = "";
			if(selectValue==null || selectValue==""){
				this.data.selectData.value = "";
				this.data.selectData.text = "";
			}
			for (j=0;j<this.data.listData.length ;j++ ){	
				this.data.listData[j].onSelect = false;
				
				if(selectValue==null || selectValue=="") continue;
				if(this.data.listData[j].value==selectValue){
					this.data.listData[j].onSelect = true;
					this.data.selectData.value = this.data.listData[j].value;
					this.data.selectData.text = this.data.listData[j].text;
					this.$divScroollTO(j);
				}
				
			}
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
			if(this.find("x-validate")){
				this.find("x-validate")[0].do();
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
			this.data.listData[index].onSelect = true;
			this.data.selectData.value = this.data.listData[index].value;
			this.data.selectData.text = this.data.listData[index].text;
			if(this.find("x-validate")){
				this.find("x-validate")[0].do();
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
					<div x-show="showType" class="combo-panel panel-body panel-body-noheader" :click="_clickOpt()" style="height: 90px;" title="">\
						<table class="table" cellspacing="0" cellpadding="0" border="0">\
							<thead class="head">\
							<tr x-order="##orderId">\
								<th x-each="columns as col"  style="text-align:{{col.align}};width:{{col.width}};">\
									<span>{{col.title}}</span>\
								</th>\
							</tr>\
							</thead>\
							<tbody>\
								<tr x-each="dataSource as d" :click="_selectOptions(d)"  class="{{d.onSelect ? \'combobox-item-selected\':\'\'}}">\
									<td x-each="columns as col">{{d[col.code]}}</td>\
								</tr>\
							</tbody>\
						</table>\
					</div>\
				</div>', 
	
	onInit: function() {
		var that = this;
		this.data.id = this.data.id ? this.data.id:"impex-combogrid-" + getId();
		//初始化赋值
		if(this.data.ds){
			if(this.parent.closest('d',this.data.ds)){
				var dataSource = getData(this, this.data.ds);
				if (null != dataSource) {
					this.data.dataSource = $.extend(true, [], dataSource);
					this.parent.closest('d',this.data.ds).watch(this.data.ds, function(todos,name,type,newVal) {
						that.data.dataSource = newVal;
						that.$_setValue(value);
					});
				};
			}
			
			
			//赋值
			if(this.parent.closest('d',this.data.value)){
				var value = getData(this, this.data.value);
				if (null != value) {
					this.$_setValue(value);
					this.parent.closest('d',this.data.value).watch(this.data.value, function(todos,name,type,newVal) {
						that.$_setValue(newVal);
					});
				};
			}
			
		}
		//初始化表头
		if(this.data.ds){
			if(this.parent.closest('d',this.data.cols)){
				var columns = getData(this, this.data.cols);
				if (null != columns) {
					this.data.columns = columns;
					this.parent.closest('d',this.data.cols).watch(this.data.cols, function(todos,name,type,newVal) {
						this.data.columns = newVal;
					});
				}
			}
		}
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
		dataSource: [],//数据源
		columns: [],//列头
		showType:false,//下拉选项是否显示
		selectData: {textfield:"", idfield:""},//选择选项
		mouseDownType:false,//鼠标单击是否隐藏下拉选项
		height:"22px",
		tipPosition:'right'
	},
	methods:{
		//下拉选项赋值
		_setValue:function(selectValue){
			this.data.selectData.idfield = "";
			this.data.selectData.textfield = "";
			if(selectValue==null || selectValue==""){
				this.data.selectData.textfield = "";
				this.data.selectData.idfield = "";
			}
			for (j=0;j<this.data.dataSource.length ;j++ ){	
				this.data.dataSource[j].onSelect = false;
				if(selectValue==null || selectValue=="") continue ;
				if(this.data.dataSource[j][this.data.idfield]==selectValue){
					this.data.dataSource[j].onSelect = true;
					this.data.selectData.textfield = this.data.dataSource[j][this.data.textfield];
					this.data.selectData.idfield = this.data.dataSource[j][this.data.idfield];
				}
				
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
			for (j=0;j<this.data.dataSource.length ;j++ ){	
				that.data.dataSource[j].onSelect = false;
			}
			data.onSelect = true;
			that.data.selectData.idfield = (data[this.data.idfield]);
			that.data.selectData.textfield = (data[this.data.textfield]);
			this.data.showType = false;
			if(_.isString(this.data.xValidate)){
				$("#"+this.data.id).trigger("input");
			}
			//调用回调函数返回当前选择的 {text:"",value:""}
			try{
				if(that.data.cbk!=undefined){
					//this.$parent.closest(that.cbk)[that.cbk](that.selectData);
					this.m(that.data.cbk)(that.data.selectData);
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
		
		view.el.childNodes[3].style.width = this.data.tablewidth ? this.data.tablewidth:"300px";
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
