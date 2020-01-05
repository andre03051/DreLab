$(function () {
    var dataGrid = $("#gridContainer").dxDataGrid({
        // Using local data
        dataSource: "../data/Ecumenical Councils.json",

        // Table Display Options (Customizable)
        allowColumnReordering: true,
        allowColumnResizing: true,
        columnAutoWidth: true,
        grouping: {
            autoExpandAll: false
        },
        headerFilter: {
            visible: true,
            allowSearch: true
        },
        groupPanel: {
            visible: true
        },
        rowAlternationEnabled: true,
        paging: {
            pageSize: 10
        },
        scrolling: {
            mode: "virtual",
            rowRenderingMode: "virtual"
        },
        scrollByContent: true,
        useNative: false,
        wordWrapEnabled: true,



        // Data Fields
        columns: [{
            dataField: "Name",
            caption: "Council Name"
        },
        {
            dataField: "Type",
            caption: "Type of Council"
        },
        {
            dataField: "Year",
            caption: "Start of Council"
        },
        {
            dataField: "Location",
            caption: "Location of Council"
        }],
        masterDetail: {
            enabled: true,
            template: function (container, options) {
                var inputData = options.data;
                container.append(
                    $('<b>Council Summary:</b>')
                )
                $("<div>")
                    .text(inputData.Summary)
                    .appendTo(container);            
            }
        }
    }).dxDataGrid('instance');
});