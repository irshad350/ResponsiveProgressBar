var activeSteps = [];
var pathColor;
var pathWidth = 3;
var totalSteps;
var currentStep;
var defaultCircleColor;
var passedCircleColor;
var lastPassedCircleColor;
var textColor;
var svg;
var svgNS;
    

function init(config) {
    svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", config['frame_wdith']);
    svg.setAttribute("height", config['frame_height']);
    //svg.setAttribute("style", "background-color: blue;");
    
    svgNS = svg.namespaceURI;
    totalSteps = config['total_steps'];
    currentStep = config['current_step'];
    pathColor = config['line_color'];
    defaultCircleColor = config['default_step_color'];
    passedCircleColor = config['passed_step_color'];
    lastPassedCircleColor = config['last_step_color'];
    textColor = config['text-color'];
    
    prepareStationList();
    createPaths(pathColor, pathWidth);
    createCircle();
    createCurveLine(pathColor, pathWidth);
    setText();
    document.body.appendChild(svg);
}


function prepareStationList() {
    if(totalSteps.length > 24) {
        var currentStepIndex = getCurrentStepIndex();
       
        if (currentStepIndex !== 0) {
            if((totalSteps.length - currentStepIndex) > 24 ) {
           
                var stationsToAppened = 0;
                if (currentStepIndex > 7) {
                    stationsToAppened = currentStepIndex-7;
                }
                for (var i = stationsToAppened, j = 0; i < ((currentStepIndex-1) + 24); i++, j++) {
                    activeSteps[j] = totalSteps[i];
                }
            } else if ((totalSteps.length - currentStepIndex < 24) && (totalSteps.length - currentStepIndex > 0)) {
                
                var stationsToAppened = currentStepIndex - (24 - (totalSteps.length - currentStepIndex));
                for(var i = stationsToAppened, j = 0; i < (stationsToAppened + 24); i++, j++) {
                    activeSteps[j] = totalSteps[i];
                }
            } else {
                
                for(var i = (totalSteps.length-24), j = 0; i < totalSteps.length; i++, j++) {
                    activeSteps[j] = totalSteps[i];
                }
            }
        } else {
            activeSteps = totalSteps.slice(0, 24);
        }
        

    } else {
        activeSteps = totalSteps;
    }
}

function getCurrentStepIndex() {
    var currentStepIdx = 0;
    for (var i = 0; i < totalSteps.length; i++) {
        if(currentStep === totalSteps[i]) {
            currentStepIdx = i+1;
        }
    }
    return currentStepIdx;
}

function createCircle() {
    var isRowEven = false;
    var iscurrentStepFound = false;
    var cx = 0;
    var cy = 70;
    for (var i = 0; i < activeSteps.length; i++) {
        if (i != 0 && i % 6 == 0) {
            cx = 0;
            cy = cy + 140;
            isRowEven = !isRowEven;
            if (isRowEven) {
                cx = 1162;
            }
        }
        if (isRowEven) {
            cx = cx - 166;
        } else {
            cx = cx + 166;
        }
        
        var newCircle = document.createElementNS(svgNS,'circle');
        newCircle.setAttribute("cx", cx);
        newCircle.setAttribute("cy", cy);
        newCircle.setAttribute("r", "7");
        if (currentStep == activeSteps[i] && getCurrentStepIndex() !== 0) {
            newCircle.setAttribute("fill", lastPassedCircleColor);
            newCircle.setAttribute("stroke-width", "2");
            newCircle.setAttribute("stroke", "black");
            iscurrentStepFound = true;
        } else if (iscurrentStepFound){
            newCircle.setAttribute("fill", defaultCircleColor);
        } else if (getCurrentStepIndex() !== 0){
            newCircle.setAttribute("fill", passedCircleColor);
        } else {
            newCircle.setAttribute("fill", defaultCircleColor);
        }
        

        svg.appendChild(newCircle);
    }
}

function createPaths(pathColor, pathWidth) {
    var oddNumber = 0;
    var isEvenRow = false;
    for(var i = 1; i <= Math.ceil(activeSteps.length/6); i ++) {
        var newPath = document.createElementNS(svgNS,'path');
        oddNumber = getNextOddNumber(oddNumber);
        pathYaxis = 70 * oddNumber;
        if (i == Math.ceil(activeSteps.length/6) && activeSteps.length%6 != 0) {
            if (isEvenRow) {
                newPath.setAttributeNS(null, "d", "M  " +(1162 - ((activeSteps.length%6)*166)) +" "+ pathYaxis + " H 996");
            } else {
                newPath.setAttributeNS(null, "d", "M 166 " + pathYaxis + " H " + (((activeSteps.length%6)*166)));
            }
        } else {
            newPath.setAttributeNS(null, "d", "M 166 " + pathYaxis + " H 996");
        }
        
        newPath.setAttribute("stroke", pathColor);
        newPath.setAttribute("stroke-width", pathWidth);

        svg.appendChild(newPath);
        isEvenRow = !isEvenRow;
    }
}

function createCurveLine(pathColor, pathWidth) {
    if(Math.ceil(activeSteps.length/6) >= 2) {
        var rightPath = document.createElementNS(svgNS,'path');
        rightPath.setAttributeNS(null, "d", "M 1003,70 a50,50 0 1,1 0,140");
        rightPath.setAttribute("stroke", pathColor);
        rightPath.setAttribute("stroke-width", pathWidth);
        rightPath.setAttribute("fill", "none");
        svg.appendChild(rightPath);
    }
   
    if(Math.ceil(activeSteps.length/6) >= 3) {
        var leftPath = document.createElementNS(svgNS,'path');
        leftPath.setAttributeNS(null, "d", "M 160,350 a50,50 0 1,1 0,-140");
        leftPath.setAttribute("stroke", pathColor);
        leftPath.setAttribute("stroke-width", pathWidth);
        leftPath.setAttribute("fill", "none");
        svg.appendChild(leftPath);
    }
    if(Math.ceil(activeSteps.length/6) >= 4) {
        var rightPath1 = document.createElementNS(svgNS,'path');
        rightPath1.setAttributeNS(null, "d", "M 1003,350 a50,50 0 1,1 0,140");
        rightPath1.setAttribute("stroke", pathColor);
        rightPath1.setAttribute("stroke-width", pathWidth);
        rightPath1.setAttribute("fill", "none");
        svg.appendChild(rightPath1);
    }

}

function setText() {
    var isRowEven = false;
    var yAxisUpper = 80;
    var yAxisLower = 5;
    var yAxisIsUpper = false;

    var xAxis = 130;
    for (var i = 0; i < activeSteps.length; i++) {
        if (i != 0 && i % 6 == 0) {
            xAxis = 130;
            yAxisLower = yAxisLower + 140;
            yAxisUpper = yAxisUpper + 140;
            isRowEven = !isRowEven;
            if (isRowEven) {
                xAxis = 960;
                yAxisIsUpper = true;
            } else {
                yAxisIsUpper = false;
            }
        }
        var yAxis = 0;
        if (isRowEven) {
            if (yAxisIsUpper) {
                yAxis = yAxisUpper;
                yAxisIsUpper = !yAxisIsUpper;
            } else {
                yAxis = yAxisLower
                yAxisIsUpper = !yAxisIsUpper;
            }
        } else {
            if (!yAxisIsUpper) {
                yAxis = yAxisUpper;
                yAxisIsUpper = !yAxisIsUpper;
            } else {
                yAxis = yAxisLower;
                yAxisIsUpper = !yAxisIsUpper;
            }
        }
        var foreignObject = document.createElementNS(svgNS,'foreignObject');
        foreignObject.setAttribute("x", xAxis);
        foreignObject.setAttribute("y", yAxis);
        foreignObject.setAttribute("width", 190);
        foreignObject.setAttribute("height", 50);
        foreignObject.innerHTML = 
        "<div xmlns='http://www.w3.org/1999/xhtml' style='height: 3em;display: flex;align-items: center;font-weight: bold;color:" + textColor + "'>" + activeSteps[i] + "</div>";
        svg.appendChild(foreignObject);
        if (isRowEven) {
            xAxis = xAxis - 166;
        } else {
            xAxis = xAxis + 166;
        }
    }
}

function getNextOddNumber(currentOddNumber) {
    if (currentOddNumber == 0) 
        return 1;
    else return currentOddNumber + 2;
}