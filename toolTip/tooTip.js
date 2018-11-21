var app = new Vue({
    el: "#app",
    data: {
        tableData: [{
            _index: 1,
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        }, {
            _index: 2,
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
        }, {
            _index: 3,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
        }, {
            _index: 4,
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
        }],
        hoverId: 0
    },
    methods: {
        enterCell: function (row, column, cell) {
            this.hoverId += 1;
            var html = row['address']; //ToolTip 显示的内容
            var toolTipBoxClass = "tooltip-box";
            var toolTipBox = document.createElement("div");
            toolTipBox.className = toolTipBoxClass;
            toolTipBox.id = this.hoverId;
            toolTipBox.innerHTML = html;
            cell.appendChild(toolTipBox);
            toolTipBox.style.position = "absolute";
            toolTipBox.style.display = "block";
            // this.hoverId = toolTipBox.id
        },
        leaveCell: function (row, column, cell, event) {
            console.log(this.hoverId);
            // console.log(this.hoverId)
            document.getElementById(this.hoverId).style.display = 'none'
        }
    }

});
//show tooltip


// //hide tooltip
// document.getElementById(this.hoverId).style.display = "none";


