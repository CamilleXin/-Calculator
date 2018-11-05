//show tooltip

this.hoverId = this.hoverId + 1;  //div id
var html = this.table_data[row._index - 1]['error']; //ToolTip 显示的内容
var toolTipBoxClass = "tooltip-box";
var toolTipBox = document.createElement("div");
toolTipBox.className = toolTipBoxClass;
toolTipBox.id = this.hoverId;
toolTipBox.innerHTML = html;
cell.appendChild(toolTipBox);
toolTipBox.style.position = "absolute";
toolTipBox.style.display = "block";

//hide tooltip

document.getElementById(this.hoverId).style.display = "none";


