function calculatorTriangleArea() {
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    console.log(base);

    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText)
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area);

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}


function calculatorRectangleArea() {

    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    console.log(width);

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    console.log(length);


    if (isNaN(width) || isNaN(length)) {
        alert('please input e valid number');
        return;
    }

    const area = width * length;
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;    
}

function calculatorParallelogramArea(){
    const base = getInputValue('parallelogram-base')
    console.log(base);
    const height = getInputValue('parallelogram-height')
    console.log(height);

    const area = base * height;
    const areaTwoDecimal = area.toFixed(2)
    setElementInnerText('parallelogram-area', areaTwoDecimal)

    addToCalculationEntry('Parallelogram', area)

    
}

function calculatorEllipseArea(){
    const majorRadius = getInputValue('ellipse-89cvf tmejor-radious') 
    const minorRadius = getInputValue('ellipse-minor-radius')  
    const area = Math.PI * majorRadius * minorRadius;
    setElementInnerText('ellipse-area', area)
}




 



    function getInputValue(fieldID) {
      const inputField = document.getElementById(fieldID)
      const inputValueText = inputField.value; 
      const value = parseFloat(inputValueText);
      return value;
    }

    function setElementInnerText(elementId, area){
        const element = document.getElementById(elementId)
            element.innerText = area;
    } 



    function addToCalculationEntry(areaType , area){
            console.log(areaType+ ' '+ area);
        const calculationEntry = document.getElementById('calculation-entry')
        const count = calculationEntry.childElementCount;
        const p = document.createElement('p');
        p.classList.add('my-4')
        p.innerHTML = `
          ${count +1}.  ${areaType}  ${area} cm<SUP>2</SUP>
        <button class="btn btn-success">Convert</button>
        `;
        calculationEntry.appendChild(p)
    }