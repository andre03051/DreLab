$(function() {
    $("#chart").dxChart({
        dataSource: "../data/Biblical Geneology.json",
        rotated: true,
        barGroupPadding: 0.2,
        argumentAxis: {
            categories: ["Covenant"],
            tick: {
                visible: true
            }, 
            inverted: true,
            label: {
                overlappingBehavior: "none"
            }
        },
        title: {
            text: "Biblical Geneology",
            subtitle: "Geneology Throughout Genesis"
        },
        commonSeriesSettings: {
            argumentField: "Name",
            type: "rangeBar",
            rangeValue1Field: "Year Born",
            rangeValue2Field: "Year Died",
            ignoreEmptyPoints: true,
            barOverlapGroup: "Name"
        },
        seriesTemplate: {
            nameField: "Covenant"
        },
        animation: {
            enabled: true
        },
        legend: {
            title: "Covenants",
            verticalAlignment: "bottom",
            horizontalAlignment: "center"
        }
    });
});
