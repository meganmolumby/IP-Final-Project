window.addEventListener("load", start, false);

// Legs = 9
var legsUrl = "http://wger.de/api/v2/exercise/?category=9&language=2&status=2&format=json";
// Chest = 11
var chestUrl = "http://wger.de/api/v2/exercise/?category=11&language=2&status=2&format=json";
// Back = 12
var backUrl = "http://wger.de/api/v2/exercise/?category=12&language=2&status=2&format=json";
// Abs = 10
var absUrl = "http://wger.de/api/v2/exercise/?category=10&language=2&status=2&format=json";
// Arms = 8
var armsUrl = "http://wger.de/api/v2/exercise/?category=8&language=2&status=2&format=json";

var elements; // Hold all elements in table

function start() {
    if (document.title === "Full Body Split") {
        startFullBody();
    }
    else if (document.title === "Upper Lower Split") {
        startUpperLower();
    }
    else if (document.title === "Push Pull Lower Split") {
        startPushPullLower();
    }
    else {
        document.body.innerHTML = "ERROR!";
    }
}

function startFullBody() {
    elements = new Array();
    elements[0] = document.getElementById("table"); // Element 0 is table

    // Initialize all rows
    for (var i = 1; i <= 10; i++) {
        elements[i] = document.getElementById("row" + i);
    }

    var amount = 2; // Amount of exercise per type
    var index = 1;  // Counter for index

    sendRequest(legsUrl, fillTable, index, amount);
    index += amount;
    sendRequest(chestUrl, fillTable, index, amount);
    index += amount;
    sendRequest(backUrl, fillTable, index, amount);
    index += amount;
    sendRequest(absUrl, fillTable, index, amount);
    index += amount;
    sendRequest(armsUrl, fillTable, index, amount);
    index += amount;
}

function startUpperLower() {
    elements = new Array();
    elements[0] = document.getElementById("table"); // Element 0 is table

    // Initialize all cells of 2-column-table
    var i = 1; // Element Index
    for (var col = 1; col <= 2; col++) {
        for (var row = 1; row <= 8; row++) {
            elements[i++] = document.getElementById("cell" + col + row);
        }
    }

    var amount = 4; // Amount of exercise per type
    var index = 1;  // Counter for index

    sendRequest(chestUrl, fillTable, index, amount);
    index += amount;
    sendRequest(backUrl, fillTable, index, amount);
    index += amount;
    sendRequest(absUrl, fillTable, index, amount);
    index += amount;
    sendRequest(legsUrl, fillTable, index, amount);
    index += amount;
}

function startPushPullLower() {
    elements = new Array();
    elements[0] = document.getElementById("table"); // Element 0 is table

    // Initialize all cells of 2-column-table
    var i = 1; // Element Index
    for (var col = 1; col <= 3; col++) {
        for (var row = 1; row <= 8; row++) {
            elements[i++] = document.getElementById("cell" + col + row);
        }
    }

    var amount = 4; // Amount of exercise per type
    var index = 1;  // Counter for index

    sendRequest(chestUrl, fillTable, index, amount);
    index += amount;
    sendRequest(absUrl, fillTable, index, amount);
    index += amount;
    sendRequest(backUrl, fillTable, index, amount);
    index += amount;
    sendRequest(armsUrl, fillTable, index, amount);
    index += amount;
    sendRequest(legsUrl, fillTable, index, amount);
    index += amount;
}

function sendRequest(url, callBack, index, amount) {
    try {
        var asyncRequest = new XMLHttpRequest();
        asyncRequest.addEventListener("readystatechange",
            function() {processResponse(asyncRequest, callBack, index, amount)}, false);
        asyncRequest.open("GET", url, true);
        asyncRequest.setRequestHeader("Accept", "application/json");
        asyncRequest.send();
    }
    catch (exception) {
        alert("Request Failed!");
    }
}

function processResponse (asyncRequest, callBack, index, amount) {
    if (asyncRequest.readyState == 4 && asyncRequest.status == 200) {
        var data = JSON.parse(asyncRequest.responseText);
        callBack(data, index, amount);
    }
}

    function fillTable(data, index, amount) {
        var dataIndex = Math.floor(Math.random() * 21);

        for (var i = index; i < (index + amount); i++) {
            if (dataIndex > 19) { // Prevents out of bounds
                dataIndex = 0;
            }
            if(data.results[dataIndex].description == ""){
                elements[i].innerHTML = "<p class = 'thick'>Name:</p>" + data.results[dataIndex].name;
                //+"<p class ='thick'>Description: " + "</p>"  + data.results[dataIndex].description;
            }else {
                elements[i].innerHTML = "<p class = 'thick'>Name: " + "</p>" + data.results[dataIndex].name +
                    "<p class ='thick'>Description: " + "</p>" + data.results[dataIndex].description;
            }
            dataIndex += 3;

        }
    }

