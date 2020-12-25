

BusMapHelper = {
    MAX_BUSMAP_ROW_NUMBER: 5,
    MAX_BUSMAP_COL_NUMBER: 20,
    AddRowToBusMapTable: function AddRowToBusMapTable(BusMapContainerSelector) {
        var rowCount = $(BusMapContainerSelector).find('tr').length - 1;
        var colCount = $(BusMapContainerSelector).find('tr').first().find('th').length;
        if (rowCount < this.MAX_BUSMAP_ROW_NUMBER) {
            var newRowIdx = rowCount + 1;
            var appendHtml = '<td name="' + (newRowIdx).toString() + '_0">' + (newRowIdx) + '</td>';
            for (var i = 1; i < colCount; i++) {
                appendHtml = appendHtml + '<td name="' + (newRowIdx).toString() + '_' + i.toString() + '">&nbsp</td>';
            }
            appendHtml = '<tr name="line_' + (newRowIdx).toString() + '">' + appendHtml + '</tr>';
            $(BusMapContainerSelector + ' tr:last').after(appendHtml);
        }
    },

    AddColumnToBusMapTable: function AddColumnToBusMapTable(BusMapContainerSelector) {
        var colCount = $(BusMapContainerSelector).find('tr').first().find('th').length - 1;
        if (colCount < this.MAX_BUSMAP_COL_NUMBER) {
            var newColIdx = colCount + 1;
            var rowsArray = $(BusMapContainerSelector).find('tr');
            for (var i = 0; i < rowsArray.length; i++) {
                try {
                    var rowName = parseInt(rowsArray[i].attributes["name"].value.split('_')[1]);
                    if (rowName == 0) {
                        $(rowsArray[i]).find('th:last').after('<th name="' + (i).toString() + '_' + newColIdx.toString() + '">' + newColIdx.toString() + '</th>');
                    } else {
                        $(rowsArray[i]).find('td:last').after('<td name="' + (i).toString() + '_' + newColIdx.toString() + '">&nbsp;</td>');
                    }
                } catch (e) {

                }
            }
        }
    },
    RemoveRowToBusMapTable: function RemoveRowToBusMapTable(BusMapContainerSelector) {
        var rowCount = $(BusMapContainerSelector).find('tr').length - 1;
        if (rowCount > 1) {
            $(BusMapContainerSelector + ' tr:last').remove();
        }
    },
    RemoveColumnToBusMapTable: function RemoveColumnToBusMapTable(BusMapContainerSelector) {
        var colCount = $(BusMapContainerSelector).find('tr').first().find('th').length - 1;
        if (colCount > 1) {
            var rowsArray = $(BusMapContainerSelector).find('tr');
            for (var i = 0; i < rowsArray.length; i++) {
                $(rowsArray[i]).find('td:last').remove();
                $(rowsArray[i]).find('th:last').remove();
            }
        }
    },
    ClickSeatTableCell: function ClickSeatTableCell(BusMapContainerSelector, cellName, placeNum) {

        var selectedCell = $(BusMapContainerSelector).find('td[name="' + cellName + '"]');
        var htmlString = "";
        //check if cell exists and this cell is not left side row counter cell
        if (cellName.split('_')[1] != "0" && selectedCell) {
            if (!$(selectedCell).attr("Number")) {
                if (placeNum == undefined) {
                    var placeNumber = $(BusMapContainerSelector).find('td[Number]').length;
                    if (!placeNumber) {
                        placeNumber = 0;
                    }
                    placeNum = placeNumber + 1;
                }
                //if place still not selected
                htmlString = '<div class="seatPlace" name="' + cellName + '">' + placeNum.toString() + '</div>';
                $(selectedCell).attr("Number", placeNum);
            } else {
                //if place is already selected
                htmlString = '&nbsp;';
                $(selectedCell).removeAttr("Number");
            }
            $(selectedCell).html(htmlString);
        }
    },

    CreateTableFromJson: function CreateTableFromJson(BusMapContainerSelector, jsonTableString) {
        debugger;
        try {
            var td_name = '';
            var BusMapInfo = JSON.parse(jsonTableString);
            for (var i = 1; i < BusMapInfo.colsCount; i++) {
                this.AddColumnToBusMapTable(BusMapContainerSelector);
            }
            for (var j = 1; j < BusMapInfo.rowsCount; j++) {
                this.AddRowToBusMapTable(BusMapContainerSelector);
            }
            for (var i = 0; i < BusMapInfo.BusMapContent.length; i++) {
                td_name = BusMapInfo.BusMapContent[i].row.toString() + '_' + BusMapInfo.BusMapContent[i].col.toString();
                this.ClickSeatTableCell(BusMapContainerSelector, td_name, BusMapInfo.BusMapContent[i].SeatNumber);
            }
        } catch (e) {

        }
    },

    CreateJsonFromTable: function CreateJsonFromTable(BusMapContainerSelector) {
        var selectedPlaces = $(BusMapContainerSelector).find('td[Number]');
        var jsonBusMapContent = '';
        var rowsCount = $(BusMapContainerSelector).find('tr').length - 1;
        var colsCount = $(BusMapContainerSelector).find('th').length - 1;
        for (var i = 0; i < selectedPlaces.length; i++) {
            var colName = $(selectedPlaces[i]).attr("name");
            var tmpRow = colName.split('_')[0];
            var tmpCol = colName.split('_')[1];
            jsonBusMapContent = jsonBusMapContent + '{' +
                '"row":' + tmpRow + ',' +
                '"col":' + tmpCol + ',' +
                '"SeatNumber":' + $(selectedPlaces[i]).attr("Number") +
                '},';
        }
        jsonBusMapContent = '{"rowsCount":' + rowsCount.toString() + ', "colsCount":' + colsCount.toString() + ', "BusMapContent": [' + jsonBusMapContent.slice(0, -1) + ']}';
        return jsonBusMapContent;
    },

    Init: function(BusMapContainerSelector, jsonTableString) {
        $(document).ready(function() {
            //ClickOnPlace delegate
            $(BusMapContainerSelector).on('click', function(args) {
                try {
                    var rowName = args.target.attributes["name"].value;
                    this.ClickSeatTableCell(BusMapContainerSelector, rowName);
                    //Save actual Json table data after any change 
                } catch (e) {
                    debugger;
                }
            });
            this.CreateTableFromJson(jsonTableString);
        });

    }

};