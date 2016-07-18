/**
 * 查询组件searchBox
 */
impex.component('impex-searchbox',{
	template: '<div class="impex-searchbox {{=class}}" name={{=name}} id={{=id}} style="{{=style}}"><!--\
				 --><select x-if="_.isString(options)" class="searchBox_select" style="width:{{width*5/12}}px;">\
						<option x-each="selectOptions as data" value="{{data.optionValue}}">{{data.optionText}}</option>\
					</select><!--\
				 --><div class="searchBox_input_icon {{_.isString(options)? \'span_left_border\':\'\'}}" style="width:{{width*7/12-5}}px;">\
						<input type="text" x-model="searchBoxValue.value" placeholder="{{placeholder}}" class="searchBox_input"  style="width:{{width*7/12-35}}px;" :keypress="searcher_Enter();" /><!--\
					 --><a href="javascript:void(0)" :click="searcher();" class="searchBox_icon"></a>\
					</div>\
			   </div>',
	data:{
		width:300, //搜索组件默认宽度
		selectOptions:null,// 下拉选项列表
		placeholder:"请输入查询内容",//文本框默认值
		//搜索组件值
		searchBoxValue:{
			selectedText:"",
			selectedValue:"",
			value:""
		}
	},
	methods:{
		//文本框中对“回车”的响应查询处理
		searcher_Enter: function(){
			if (event.keyCode == 13){
				this.$searcher();
			}
		},
		//点击查询按钮的响应查询处理
		searcher: function(){
			//获取下拉列表的值
			var selectElement = document.getElementsByClassName("searchBox_select")[0];
			if(selectElement!=undefined){
				var index = selectElement.selectedIndex;
				this.data.searchBoxValue.selectedText = selectElement.options[index].text;
				this.data.searchBoxValue.selectedValue= selectElement.options[index].value;
			}
			alert(this.data.searchBoxValue.selectedText+","+this.data.searchBoxValue.selectedValue+","+this.data.searchBoxValue.value);
			com.emit("searchbox.doSearch",this.data.searchBoxValue);	
		}
	},
	onInit:function(){
		// 初始化下拉列表数据
		var optionList = getData(this, this.data.options);
		if (null != optionList) {
			this.data.selectOptions = optionList;
		}
	}
});