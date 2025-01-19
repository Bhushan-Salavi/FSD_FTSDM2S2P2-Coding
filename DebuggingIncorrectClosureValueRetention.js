//DebuggingIncorrectClosureValueRetention.js
function createFunctionList() {
    let functions = [];
    for (var i = 0; i < 5; i++) {
      (function(index) {
        functions.push(function () {
          console.log("Index:", index);
        });
      })(i); 
    }
    return functions;
  }
  
  const functionList = createFunctionList();
  functionList[0](); 
  functionList[1](); 
  functionList[2](); 
  functionList[3](); 
  functionList[4](); 
  