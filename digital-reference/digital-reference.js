//assigning variables
const form = document.querySelector("#form");
const input = document.querySelector("#input-bar");
const list = document.querySelector("#list");

//form event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  //new-reference-div
  const newReferenceDiv = document.createElement("div");
  newReferenceDiv.classList.add("reference");
  newReferenceDiv.id = "reference";
  list.appendChild(newReferenceDiv);

  //new-reference-checkbox & label
  const newReferenceCheckBox = document.createElement("input");
  const checkBoxLabel = document.createElement("label");
  newReferenceCheckBox.type = "checkbox";
  newReferenceCheckBox.setAttribute("id", "ref-checkbox");
  checkBoxLabel.setAttribute("for","ref-checkbox")
  checkBoxLabel.setAttribute("id","ref-checkbox-label")
  newReferenceDiv.appendChild(newReferenceCheckBox);
  newReferenceDiv.appendChild(checkBoxLabel);

  //new-reference-name
  const nameInput = document.querySelector("#name");
  const newReferenceName = document.createElement("input");
  newReferenceName.type = "text";
  newReferenceName.setAttribute("readonly", "readonly");
  newReferenceName.classList.add("reference-inputs");
  newReferenceName.value = nameInput.value;
  newReferenceDiv.appendChild(newReferenceName);
  nameInput.value = "";

  //new-reference-number
  const numberInput = document.querySelector("#phone");
  const newReferenceNumber = document.createElement("input");
  newReferenceNumber.type = "number";
  newReferenceNumber.setAttribute("readonly", "readonly");
  newReferenceNumber.classList.add("reference-inputs");
  newReferenceNumber.value = numberInput.value;
  newReferenceDiv.appendChild(newReferenceNumber);
  numberInput.value = "";

  //new-reference-check-in
  const checkInInput = document.querySelector("#check-in");
  const newReferenceCheckIn = document.createElement("input");
  newReferenceCheckIn.type = "date";
  newReferenceCheckIn.setAttribute("readonly", "readonly");
  newReferenceCheckIn.classList.add("reference-inputs");
  newReferenceCheckIn.value = checkInInput.value;
  newReferenceDiv.appendChild(newReferenceCheckIn);
  checkInInput.value = "";

  //new-reference-price-quotation
  const PQ_Input = document.querySelector("#P_Q");
  const newReferencePQ = document.createElement("input");
  newReferencePQ.type = "text";
  newReferencePQ.setAttribute("readonly", "readonly");
  newReferencePQ.classList.add("reference-inputs");
  newReferencePQ.value = PQ_Input.value;
  newReferenceDiv.appendChild(newReferencePQ);
  PQ_Input.value = "";

  //new-reference-device-type
  const deviceTypeInput = document.querySelector("#device-type");
  const newReferenceDeviceType = document.createElement("input");
  newReferenceDeviceType.type = "text";
  newReferenceDeviceType.setAttribute("readonly", "readonly");
  newReferenceDeviceType.classList.add("reference-inputs");
  newReferenceDeviceType.value = deviceTypeInput.value;
  newReferenceDiv.appendChild(newReferenceDeviceType);
  deviceTypeInput.value = "";

  //new-reference-batch-number
  const batchNumberInput = document.querySelector("#batch-number");
  const newReferenceBatchNumber = document.createElement("input");
  newReferenceBatchNumber.type = "number";
  newReferenceBatchNumber.setAttribute("readonly", "readonly");
  newReferenceBatchNumber.classList.add("reference-inputs");
  newReferenceBatchNumber.value = batchNumberInput.value;
  newReferenceDiv.appendChild(newReferenceBatchNumber);
  batchNumberInput.value = "";

  //line-break-function
  const lineBreak = () => {
    const br = document.createElement("br");
    newReferenceDiv.appendChild(br);
  };

  lineBreak();

  //new-reference-damage
  const damageInput = document.querySelector("#damage");
  const newReferenceDamage = document.createElement("textarea");
  newReferenceDamage.rows = "1";
  newReferenceDamage.cols = "200";
  newReferenceDamage.setAttribute("readonly", "readonly");
  newReferenceDamage.classList.add("reference-inputs");
  newReferenceDamage.value = damageInput.value;
  newReferenceDiv.appendChild(newReferenceDamage);
  damageInput.value = "";
});

//remove-button-function
const remove = document.querySelector("#delete");
remove.addEventListener("click", () => {
  const references = document.querySelectorAll("#reference");
  references.forEach(function (reference) {
    const checkbox = reference.querySelector('input[type="checkbox"]');
    if (checkbox.checked) {
      reference.remove();
    }
  });
});

//edit-button-function
const edit = document.querySelector("#edit");
edit.addEventListener("click", function () {
  if (edit.innerText === "Edit") {
    edit.innerText = "Save";
    const inputs = document.getElementsByClassName("reference-inputs");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].removeAttribute("readonly");
    }
  } else {
    edit.innerText = "Edit";
    const inputs = document.getElementsByClassName("reference-inputs");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].setAttribute("readonly", "readonly");
    }
  }
});

const printBtn = document.querySelector("#print");
printBtn.addEventListener("click", () => {
  let printContent = "";
  const references = document.querySelectorAll(".reference");
  for (let i = 0; i < references.length; i++) {
    const reference = references[i];
    const inputs = reference.querySelectorAll(".reference-inputs");
    let referenceContent = "";
    for (let j = 0; j < inputs.length; j++) {
      const input = inputs[j];
      referenceContent += `${input.value}, `;
    }
    printContent += `Reference ${i + 1}: ${referenceContent}<br><br>`;
  }

  const printWindow = window.open("", "", "height=500, width=800");
  printWindow.document.write(printContent);
  printWindow.document.close();
  printWindow.print();
});
