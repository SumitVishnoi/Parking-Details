const busBtn = document.querySelector(".bus-btn");
const carBtn = document.querySelector(".car-btn");
const bikeBtn = document.querySelector(".bike-btn");
const cycleBtn = document.querySelector(".cycle-btn");
const totalBtn = document.querySelector(".total-btn");

const busDel = document.querySelector(".bus-del");
const carDel = document.querySelector(".car-del");
const bikeDel = document.querySelector(".bike-del");
const cycleDel = document.querySelector(".cycle-del");
const totalDel = document.querySelector(".total-del");

const busEntery = document.querySelector(".bus");
const carEntery = document.querySelector(".car");
const bikeEntery = document.querySelector(".bike");
const cycleEntery = document.querySelector(".cycle");
const totalEntery = document.querySelector(".total-amount");

const enteryList = document.querySelector(".entery-list");
const enteryListInput = document.querySelector("#entery-list-input");
const enteryListBtn = document.querySelector("#entery-list-btn");

const middleEntry = document.querySelector(".middle_entery");
const detailsField = document.querySelector(".details-span");
const middleContent = document.querySelector(".middle-content");
const details = document.querySelector(".details");
const markEntry = document.querySelector(".markentry-list");
const buttonsContainer = document.querySelector(".buttons-container");

// Entry Section //

let busCount = JSON.parse(localStorage.getItem("busCount")) || 0;
let carCount = JSON.parse(localStorage.getItem("carCount")) || 0;
let bikeCount = JSON.parse(localStorage.getItem("bikeCount")) || 0;
let cycleCount = JSON.parse(localStorage.getItem("cycleCount")) || 0;
busEntery.innerHTML = busCount;
carEntery.innerHTML = carCount;
bikeEntery.innerHTML = bikeCount;
cycleEntery.innerHTML = cycleCount;

///////////////////////////////

// Bus Button   //
busBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (busCount === 10) {
    alert("Parking is full !");
  } else {
    func();
    busCount++;
    busEntery.innerHTML = busCount;

    localStorage.setItem("busCount", busCount);
  }
});

// Function Handle //

function func() {
  middleEntry.style.display = "none";
  enteryList.style.display = "flex";

  enteryListBtn.addEventListener("click", function () {
    if (
      enteryListInput.value.length !== 4 ||
      enteryListInput.value === "" ||
      isNaN(enteryListInput.value)
    ) {
      alert("Please enter a valid entry!");
      // enteryList.style.display = "flex";
    } else {
      enteryList.style.display = "none";
      middleEntry.style.display = "inline-block";
    }
  });
}

//////////////////////////////////////////////////

//  Car Button  //
carBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (carCount == 10) {
    alert("Parking is full !");
    return;
  } else {
    func();
    carCount++;
    carEntery.innerHTML = carCount;

    localStorage.setItem("carCount", carCount);
  }
});

//  Bike Button  //
bikeBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (bikeCount == 10) {
    alert("Parking is full !");
    return;
  } else {
    func();
    bikeCount++;
    bikeEntery.innerHTML = bikeCount;

    localStorage.setItem("bikeCount", bikeCount);
  }
});

//  Cycle Button  //
cycleBtn.addEventListener("click", () => {
  if (cycleCount == 10) {
    alert("Parking is full !");
  } else {
    cycleCount++;
    cycleEntery.innerHTML = cycleCount;

    localStorage.setItem("cycleCount", cycleCount);
  }
});

// Delete Section  //

busDel.addEventListener("click", () => {
  if (busCount <= 0) {
    alert("No bus is avilable !");
  } else {
    busEntery.innerHTML = --busCount;
    localStorage.removeItem("busCount");
  }
});
carDel.addEventListener("click", () => {
  if (carCount <= 0) {
    alert("No car is avilable !");
  } else {
    carEntery.innerHTML = --carCount;
    localStorage.removeItem("carCount");
  }
});
bikeDel.addEventListener("click", () => {
  if (bikeCount <= 0) {
    alert("No bike is avilable !");
  } else {
    bikeEntery.innerHTML = --bikeCount;
    localStorage.removeItem("bikeCount");
  }
});
cycleDel.addEventListener("click", () => {
  if (cycleCount <= 0) {
    alert("No cycle is avilable !");
  } else {
    cycleEntery.innerHTML = --cycleCount;
    localStorage.removeItem("cycleCount");
  }
});

// Total Section //

totalBtn.addEventListener("click", () => {
  amount();
});
let totalAmount = JSON.parse(localStorage.getItem("totalAmount")) || "";
totalEntery.innerHTML = totalAmount;

let busAmount = 100;
function amount() {
  let carAmount = carCount * 50;
  let bikeAmount = bikeCount * 30;
  let cycleAmount = cycleCount * 10;
  let totalAmount = busAmount * busCount + carAmount + bikeAmount + cycleAmount;

  localStorage.setItem("totalAmount", totalAmount);
  totalEntery.innerHTML = totalAmount;
}

//  Exit Button   //

const exitBtn = document.querySelector(".ExitBtn");

exitBtn.addEventListener("click", () => {
  middleContent.style.display = "flex";
  markEntry.style.display = "flex";
  buttonsContainer.style.display = "flow-root";
  details.style.display = "none";
});

////////////////////////////////

totalDel.addEventListener("click", (e) => {
  middleContent.style.display = "none";
  markEntry.style.display = "none";
  buttonsContainer.style.display = "none";
  details.style.display = "flex";
  const entryListValue = document.querySelector("#entery-list-input");
  const entryNameValue = document.querySelector("#entery-name-input");
  const selectAmount = document.querySelector("#select-field");
  // const vehicleAmount = selectAmount.options[selectAmount.selectedIndex].text
  let checkStatus = 0;

  let userData;
  try {
    userData = JSON.parse(localStorage.getItem("data")) || [];
  } catch (error) {
    userData = [];
  }

  for (let i = 1; i < userData.length; i++) {
    let v = userData[i];
    if (v && v.value === entryNameValue.value) {
      checkStatus = 1;
      break;
    }
  }

  if (checkStatus === 1) {
    alert("This vehicle number already Exists");
  } else {
    if (
      entryNameValue.value.trim() !== "" &&
      entryListValue.value.trim() !== ""
    ) {
      userData.push({
        name: entryNameValue.value,
        value: entryListValue.value,
        // amount: vehicleAmount
        amount: selectAmount.value,
      });

      localStorage.setItem("data", JSON.stringify(userData));
      entryNameValue.value = "";
      entryListValue.value = "";
    } else {
      alert("Both name and value fields must be filled!");
    }
  }
  displayData();
  e.preventDefault();
});

//////////////////////////////

let displayData = () => {
  let userData = JSON.parse(localStorage.getItem("data")) || [];
  let finalData = "";
  userData.forEach((element, i) => {
    finalData += `<div class="items">
                <span onClick='removeData(${i})'>&times;</span>
                <h5>Vehicle</h5>
                <div>${element.name}</div>

                <h5>Number</h5>
                <div>${element.value}</div>

                <h5>Amount</h5>
                <div>${element.amount}</div>

             </div>`;
  });

  detailsField.innerHTML = finalData;
};

let removeData = (index) => {
  let userData = JSON.parse(localStorage.getItem("data")) || [];
  userData.splice(index, 1);

  localStorage.setItem("data", JSON.stringify(userData));
  displayData();
};

displayData();

//*********************************************************************


