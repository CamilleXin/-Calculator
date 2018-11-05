//change font color
pingIp: function () {
    var uuid = [];
    var that = this;
    var singleLineList = [];
    this._tableSelection.forEach(function (val) {
        var test =
            {
                'index': val['_index'] - 1,
                'address_deploy': val['address_deploy'],
                'address_pre_deploy': val['address_pre_deploy']
            };
        singleLineList.push(test);
        uuid.push(val['uuid'])
    });
    var return_data = ['76.49.81.202', '84.49.97.199', '84.49.97.197', '84.33.238.52', '84.5.209.34', '84.33.238.61'];
    singleLineList.forEach(function (value) {
        for (var j = 0; j < return_data.length; j++) {
            if (value['address_deploy'].indexOf(return_data[j]) > -1) {
                if (that.table_data[value['index']]['address_deploy'].indexOf('style') > -1) {
                    that.table_data[value['index']]['address_deploy'] = that.table_data[value['index']]['address_deploy'].replace(return_data[j], '<span style="color:red">' + return_data[j] + '</span>')
                } else {
                    that.table_data[value['index']]['address_deploy'] = value['address_deploy'].replace(return_data[j], '<span style="color:red">' + return_data[j] + '</span>')
                }
            }
            if (value['address_pre_deploy'].indexOf(return_data[j]) > -1) {
                if (that.table_data[value['index']]['address_pre_deploy'].indexOf('style') > -1) {
                    that.table_data[value['index']]['address_pre_deploy'] = that.table_data[value['index']]['address_pre_deploy'].replace(return_data[j], '<span style="color:red">' + return_data[j] + '</span>')
                } else {
                    that.table_data[value['index']]['address_pre_deploy'] = value['address_pre_deploy'].replace(return_data[j], '<span style="color:red">' + return_data[j] + '</span>')
                }

            }
        }
    });
}


//change background color

var return_data = [{'ip': '76.49.81.202', 'message': '失败原因一'},
    {'ip': '84.49.97.199', 'message': '失败原因二'},
    {'ip': '84.49.97.198', 'message': '失败原因三'}];
var addressDeployStorage = [];
var addressPreDeployStorage = [];
singleLineList.forEach(function (value) {
    return_data.forEach(function (val, ind) {
        if (value['address_deploy'].indexOf(val['ip']) > -1) {
            document.getElementById('gridDiv').getElementsByTagName('tr')[value['index']].style.backgroundColor = 'red';
            addressDeployStorage.push((value['index'] - 1).toString());
        }
        if (value['address_pre_deploy'].indexOf(val['ip']) > -1) {
            document.getElementById('gridDiv').getElementsByTagName('tr')[value['index']].style.backgroundColor = 'red';
            addressPreDeployStorage.push((value['index'] - 1).toString());
        }
    })
});
window.localStorage.setItem('addressDeployStorage', addressDeployStorage);
window.localStorage.setItem('addressPreDeployStorage', addressPreDeployStorage);
})
;