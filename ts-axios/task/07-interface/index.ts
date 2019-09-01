interface LabelledValue {
    label: string
}

function printLabel(labeledObj:LabelledValue) {
    console.log(labeledObj);
}

let myObj = {size:10,label:'Size 10 Object'}
printLabel(myObj) // { size: 10, label: 'Size 10 Object' }

