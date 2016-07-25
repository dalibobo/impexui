/**
 * impex-datagrid组件
 */
impex.component("impex-datagrid", {
	template: '<div id="{{id}}" class="impex-datagrid {{=class}}" style="{{=style}}">\
					<div class="title" x-if="_.isString(title)"><i x-if="_.isString(titleiconcls)" class="icon {{=titleiconcls}}"></i> <div class="text">{{# title}}</div></div>\
					<div class="toolbar" x-if="_.isString(toolbar)">\
						{{# toolbarHtml}}\
					</div>\
					<table class="table" cellspacing="0" cellpadding="0" border="0">\
						<thead class="head">\
						<tr x-order="##orderId">\
							<th class="line-number" x-if="_.isString(linenumber) && \'true\' == linenumber"></th>\
							<th order="{{col.order ? col.code : \'\'}}" x-each="columns as col"  style="text-align:{{col.align}};width:{{col.width}}px;">\
								<span x-if="!col.checkbox">{{col.title}}</span>\
								<span x-if="col.checkbox" class="checkAll"><input :click="checkAll(this)" type="checkbox"/></span>\
							</th>\
						</tr>\
						</thead>\
						<tbody>\
							<tr :dblclick="rowDblClick(d)" :click="rowClick(d)" x-each="dataSource as d => limitBy:pageSize:startSize .orderBy:##orderId[\'key\']:##orderId[\'dir\']">\
								<td class="line-number" x-if="_.isString(linenumber) && \'true\' == linenumber">{{$index + 1 + start}}</td>\
								<td x-each="columns as col" style="text-align:{{col.align}};width:{{col.width}}px;">\
									<span x-if="!col.checkbox">\
										<span x-if="_.isString(col.formatter)">{{# this.m(col.formatter)(d[col.code], d)}}</span>\
										<span x-if="!col.formatter">{{d[col.code]}}</span>\
									</span>\
									<span x-if="col.checkbox" class="checkbox"><input :click="checkItem(this)" value="{{d[col.code]}}" type="checkbox"/></span>\
								</td>\
							</tr>\
						</tbody>\
					</table>\
					<div x-if="_.isString(pagination) && \'true\' == pagination"><impex-pager id="##pagerId"></impex-pager></div>\
				</div>',
	data: {
		dataSource: [],
		columns: [],
		$checkIds: [],
		allChecked: false,
		pagerId: "",
		pageSize: 0,
		startSize: 0,
		start: 0,
		queryParams: {}
	},
	onInit: function() {
		if (_.isString(this.data.url)) {	// 远程数据源
			if (!this.hasPager()) {	// 远程不带分页
				this.loadUrl();
			}else{
				this.data.queryParams.rows = 10;
				this.data.queryParams.page = 1;
				this.data.start = 0;
				this.loadUrl();
			}
		}else{
			// 初始化数据源
			var dataSource = getData(this, this.data.ds);
			if (null != dataSource) {
				this.data.dataSource = dataSource;
			}

			if (_.isString(this.data.ds)) {
				var p = getParentModel(this, this.data.ds);						
				if (null != p) {
					var that = this;
					p.watch(this.data.ds, function(target, name, type, newVal, oldVal) {
						if ("update" != type) return;
						that.data.dataSource = newVal;
						
						if (that.hasPager()) {
							var pagerConfig = getData(that, that.data.pager);
							var pager = that.getPager();
							that.data.startSize = 0;
							if (0 == that.data.pageSize) {
								that.data.pageSize = (null == pagerConfig) ? 10 : (pagerConfig.pageSize || 10);
							}
							that.data.start = that.data.startSize;
							pager.setConfig({
								current: 1,
								pageNos: (null == pagerConfig) ? false : (pagerConfig.pageNos || false),
								total: that.data.dataSource.length,
								pageSize: that.data.pageSize
							});
						}
						that.clearCheckbox();
					});
				}
			}
		}

		// 初始化表头
		var columns = getData(this, this.data.cols);
		if (null != columns) this.data.columns = columns;

		if (!this.data.id) this.data.id = "impex_grid_" + getId();
	},
	onDisplay: function() {
		// 初始化分页
		if (this.hasPager()) {
			if (_.isString(this.data.pager)) {
				var p = this.data.pager;
				var pagerConfig = getData(this, this.data.pager);
				
				this.data.pageSize = p.pageSize || 0;
				this.data.startSize = (p.current - 1) * this.data.pageSize || 0;
				if (null != pagerConfig) {
					this.getPager().setConfig(pagerConfig);
				}
			}else{
				this.data.startSize = 0;
				this.data.pageSize = 10;
				this.getPager().setConfig({
					current: 1,
					pageSize: this.data.pageSize,
					total: this.data.dataSource.length
				});			
			}
		}
		
		// 初始化工具栏
		if (_.isString(this.data.toolbar)) {
			var barEl = document.getElementById(this.data.toolbar);
				if (null != barEl) {
					this.data.toolbarHtml = barEl.innerHTML;
					barEl.style.display = "none";
				}
		}

		// 监听分页跳转
		this.on("pager.goto", function(pager, currentPage, pageSize) {
			if (_.isString(this.data.url) && this.hasPager()) { // 远程带分页
				this.data.queryParams.page = currentPage;
				this.data.queryParams.rows = pageSize;
				this.data.start = pageSize * (currentPage - 1);
				var that = this;
				this.loadUrl(function() {
					that.clearCheckbox();
				});
			}else{
				this.data.pageSize = pageSize;
				this.data.startSize = (currentPage - 1) * this.data.pageSize;
				this.data.start = this.data.startSize;
				this.clearCheckbox();
			}
		});
	},
	clearCheckbox: function() {	// 清除checkbox选中状态
		var gridEl = document.getElementById(this.data.id);
		var all = gridEl.querySelectorAll(".checkAll input");
		if (all.length > 0) {
			all[0].checked = false;
			var itemChecks = gridEl.querySelectorAll(".checkbox input")
			for (var i = itemChecks.length; i--;) {
				itemChecks[i].checked = false;
			}
		}		
	},
	onBeforeCompile:function(str){
		this.data.pagerId = "pagerId_" + getId();
		return str.replace(/##orderId/g, "gridOrder_" + getId())
				  .replace(/##pagerId/g, this.data.pagerId);
	},
	methods:　{
		checkAll: function(checkbox) {
			var el = checkbox.view.el;
			var gridEl = document.getElementById(this.data.id);
			var checkboxs = gridEl.querySelectorAll(".checkbox input");
			if (el.checked) {
				var cs = [];
				var gridEl = document.getElementById(this.data.id);
				var checkboxs = gridEl.querySelectorAll(".checkbox input");
				for (var i = 0; i < checkboxs.length; i++) {
					cs.push(checkboxs[i].value);
				}
				this.data.$checkIds = cs;
			}else{
				this.data.$checkIds = [];
			}
			
			for (var i = checkboxs.length; i--;) {
				checkboxs[i].checked = el.checked;
			}
		},
		checkItem: function(checkbox) {
			var el = checkbox.view.el;
			if (el.checked) {
				this.data.$checkIds.push(el.value);
			}else{
				for (var i = 0; i < this.data.$checkIds.length; i++) {
					if (this.data.$checkIds[i] == el.value) {
						this.data.$checkIds.splice(i, 1);
						break;
					}
				}
			}
			var gridEl = document.getElementById(this.data.id);
			var all = gridEl.querySelectorAll(".checkAll input");
			var itemChecks = gridEl.querySelectorAll(".checkbox input");
			all[0].checked = this.data.$checkIds.length == itemChecks.length;
		},
		// 单击行
		rowClick: function(d) {
			if (_.isString(this.data.rowclick)) this.m(this.data.rowclick)(d);
			this.emit("row.click", d);
		},
		// 双击行
		rowDblClick: function(d) {
			if (_.isString(this.data.rowdblclick)) this.m(this.data.rowdblclick)(d);
			this.emit("row.dblclick", d);
		}
	},
	getChecked: function() {
		return this.data.$checkIds.join(",");
	},
	getPager: function() {
		return impex.cget(this.data.pagerId);
	},
	hasPager: function() {	// 是否含有分页
		return _.isString(this.data.pagination) && "true" == this.data.pagination;
	},
	reload: function(reloadParams) {
		var params = this.data.queryParams;
		if ($.isPlainObject(reloadParams)) {
			params = _.extend(params, reloadParams);
		}
		this.loadUrl();
	},
	loadUrl: function(cbk) {
		var url = this.data.url;
		var params = this.data.queryParams;
		var that= this;
		$.ajax({
			url: url,
			data: params,
			dataType: "json",
			success: function(rs) {
				cbk && cbk();
				that.data.dataSource = rs.rows || "";
				if (rs.total && that.hasPager()) {
					var pager = that.getPager();
					var pagerConfig = getData(that, that.data.pager);
					if (null == pagerConfig) {
						pager.setConfig({
							current: params.page,
							pageSize: params.rows,
							total: rs.total
						});
					}else{
						pager.setConfig({
							current: pagerConfig.page || params.page,
							pageSize: pagerConfig.rows || params.rows,
							total: pagerConfig.total || rs.total,
							pageNos: pagerConfig.pageNos || false
						});
					}
				}
			},
			error: function(rs) {
				console.log("请求出错，错误对象如下：");
				console.log(rs);
			}
		});
	}
});
