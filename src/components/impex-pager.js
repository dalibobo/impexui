/**
 * impex-pager分页组件
 */
impex.component("impex-pager", {
	template: 	'<div class="impex-pager {{=class}}">\
					<select class="pageNos" :change="changePageSize(this)">\
						<option x-each="pageNos as no" value="{{no}}">{{no}}</option>\
					</select>\
					<div class="separator"></div>\
					<div class="btn {{current == 1 ? \'btn-disabled\' : \'\'}}" :click="goto(1)"><i class="pagination-icon first-page"></i></div>\
					<div class="btn {{current == 1 ? \'btn-disabled\' : \'\'}}" :click="goto(current - 1)"><i class="pagination-icon prev-page"></i></div>\
					<div class="separator"></div>\
					<div class="pageNum-container">第 <input value="{{current}}" :keypress="nonstop(this)" type="text" class="pageNum" size="2"/> 页 共 {{totalPage}} 页</div>\
					<div class="separator"></div>\
					<div class="btn {{current == totalPage ? \'btn-disabled\' : \'\'}}" :click="goto(current + 1)"><i class="pagination-icon next-page"></i></div>\
					<div class="btn {{current == totalPage ? \'btn-disabled\' : \'\'}}" :click="goto(totalPage)"><i class="pagination-icon last-page"></i></div>\
					<div class="separator" x-show="false"></div>\
					<div class="btn" x-show="false" :click="refresh()"><i class="pagination-icon refresh"></i></div>\
					<div class="pagination-info">显示 {{(current - 1) * pageSize + 1}} 到 {{(pageSize * current) > total ? total : (pageSize * current)}} 条 共 {{total}} 条</div>\
				</div>',
	data: {
		current: 1,
		pageSize: 10,
		total: 0,
		totalPage: 0,
		pageNos: [10, 20, 30, 40, 50]
	},
	
	onInit: function() {
		
	},
	setConfig: function(config) {
		this.data.current = config.current || this.data.current;
		this.data.pageSize = config.pageSize || this.data.pageSize;
		this.data.total = (config.total!=null && config.total!=="" && config.total !== undefined) ? config.total : this.data.total;
		this.data.pageNos = config.pageNos || this.data.pageNos;
		
		this.data.totalPage = Math.ceil(this.data.total/this.data.pageSize);
	},
	methods: {
		goto: function(current) {
			if (current == this.data.current || current <= 0 || current > this.data.totalPage) return;
			this.data.current = current;
			this.emit("pager.goto", this.data.current, this.data.pageSize);
		},
		nonstop: function(input) {
			if (event.keyCode != 13) return;
			var value = input.view.el.value;
			if (isNaN(value) 
				|| (value.indexOf("-") != -1 || value.indexOf(".") != -1)) {
				this.data.current = 1;
				input.view.el.value = 1;
				this.emit("pager.goto", this.data.current, this.data.pageSize);
				return;
			}
			value = parseInt(value);
			if (value > this.data.totalPage) {
				this.data.current = this.data.totalPage;
			}else if (value == 0){
				this.data.current = 1;
			}else{
				this.data.current = value;
			}
			input.view.el.value = this.data.current;
			this.emit("pager.goto", this.data.current, this.data.pageSize);
		},
		refresh: function() {
			this.emit("pager.goto", this.data.current, this.data.pageSize);
		},
		changePageSize: function(select) {
			this.data.current = 1;
			this.data.pageSize = select.view.el.value;
			this.data.totalPage = Math.ceil(this.data.total/this.data.pageSize);
			this.emit("pager.goto", this.data.current, this.data.pageSize);
		}
	}
});