let testData = [
    {
        "name": "JetBrains 激活器",
        "address": "https://jbls.bennythink.com/",
        "arch": "LNF",
        "app": "Flask",
        "cpu": "261min 29.511s",
        "memory": "331.92M",
    },
    {
        "name": "天气预报",
        "address": "https://weather.bennythink.com/",
        "arch": "LNT",
        "app": "Tornado",
        "cpu": "261min 29.511s",
        "memory": "311.92M",
    }
];

let keywords = "311 Tornado";

let searchText = keywords.trim().toLowerCase().split(/\s+/);
testData.forEach(function (value, index) {
    let singleline = '';
    for (let i in value) {
        singleline += value[i]
    }
    for (var j = 0; j < searchText.length; j++) {
        if (singleline.indexOf(searchText[j]) !== -1) {
            console.log(singleline)
        }
    }
});



