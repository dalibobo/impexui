/**
 * 格式为数值类型类型
 */
impex.filter('number', {
	to:function(place) {
		if (null === this.value || "" === this.value || undefined === this.value) {
			return "";
		}
		place = place || null;
		var m = formatMoney(this.value, place, "");
		if (m.indexOf(".") != -1) {
			if (parseInt(m.split(".")[1]) === 0) {
				return m.split(".")[0];
			}
		}
		return m;
	}
});