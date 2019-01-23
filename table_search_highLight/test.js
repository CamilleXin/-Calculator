var filter = ['F', 'p'];
var table_data = ['F1', 'F-BAPP', 'ABC', 'public'];
table_data.forEach(function (d) {
        var final_value = addClass(d, filter);
        console.log(final_value);
    }
);
function addClass(text, filters) {
    if (!filters.length)
        return text;
    String.prototype.replaceAll = function (filters, RepText, token) {
        regExp = new RegExp(filters.join("|"), "gi");
        return this.replace(regExp, function(match) {
            return RepText.replace(token, match);
        });
    };
    let repText = "<span class='_p-filter-matched'>*filter*</span>";
    let token = "*filter*";
    return text.replaceAll(filters, repText, token);
}
