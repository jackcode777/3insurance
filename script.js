let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
     let input = Number(document.getElementById("input").value);
     let courierInput = Number(document.getElementById("courier").value);
     let errorMsg = document.querySelector("#error");
     let result = document.getElementById("op");
     let inResult = document.getElementById("insurance");
     let raw = Number(input.innerHTML = "");
     //error handeling
     if (input === raw || isNaN(input)) {
          result.innerHTML = "<strong>" + "RM 0.00" + "</strong>";
          errorMsg.innerHTML = "Please enter valid value.";
          return;
     }
     function answer(x) {
          let xx = x;
          let final = xx + courierInput;
          errorMsg.innerHTML = "";
          result.style.color = "green";
          result.innerHTML = "RM " + final.toFixed(2);
          inResult.innerHTML = "RM " + xx.toFixed(2);
     }
     let ansField = answer((input / 100) * 3);
}); 
