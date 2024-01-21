/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/getTaskInput.js":
/*!*****************************!*\
  !*** ./src/getTaskInput.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTaskInput)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");


function getTaskInput () {
    const name = document.getElementById("task-name").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("due-date").value;
    const priority = document.getElementById("priority").value;
    const project = document.getElementById('project').value;

    const newTask = (0,_task__WEBPACK_IMPORTED_MODULE_0__["default"])(name, description, dueDate, priority, project);

    return newTask;
}

/***/ }),

/***/ "./src/renderTask":
/*!************************!*\
  !*** ./src/renderTask ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _taskStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskStorage */ "./src/taskStorage.js");
/* harmony import */ var _getTaskInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getTaskInput */ "./src/getTaskInput.js");
// import setTaskStatus from "./setStatus";




function initializePage() {
    const content = document.getElementById('content');
    const taskDialog = document.createElement('dialog');
    const addTaskBtn = document.createElement('button');

    taskDialog.setAttribute('id', 'task-modal');

    content.appendChild(taskDialog);
    taskDialog.appendChild(renderTask());
    content.appendChild(taskDialog);
    
    addTaskBtn.textContent = "Add task";

    addTaskBtn.addEventListener('click', () => {
        taskDialog.show();
    });
    
    content.appendChild(addTaskBtn);
    
  
     
    // content.appendChild(renderMain());
    

 }



function renderTask (task) {
   const taskMain = document.createElement('form');
   const statusBtn = document.createElement('input');
   const taskName = document.createElement('input');
   const taskDescription = document.createElement('input');
   const dueDateBtn = document.createElement('button');
   const priorityBtn = document.createElement('button');
   const projectBtn = document.createElement('button');
   const cancelBtn = document.createElement('button');
   const addTaskBtn = document.createElement('button');
   const taskDialog = document.getElementById('task-modal');

    taskMain.setAttribute('method', 'dialog');
    taskName.setAttribute('id', 'task-name');
    taskDescription.setAttribute('id', 'description');
    dueDateBtn.setAttribute('id', 'due-date');
    priorityBtn.setAttribute('id', 'priority');
    projectBtn.setAttribute('id', 'project');

   cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        taskMain.reset();
        taskDialog.close();
    })

    addTaskBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const newTask = (0,_getTaskInput__WEBPACK_IMPORTED_MODULE_2__["default"])();
        (0,_taskStorage__WEBPACK_IMPORTED_MODULE_1__["default"])().addTaskToStorage(newTask);
        taskMain.reset();
        taskDialog.close();
        // Need to display tasks here
    })

   taskName.setAttribute('type', 'text');
   taskName.setAttribute('placeholder', "Task name");
   
   taskDescription.setAttribute('type', 'text');
   taskDescription.setAttribute('placeholder', "Description");
   
   statusBtn.setAttribute('type', 'radio');
   statusBtn.setAttribute('id', 'status-btn');

//    dueDateBtn.textContent = task.dueDate ? `${task.dueDate}` : "";
//    priorityBtn.textContent = task.priority ? `${task.priority}` : "Priority";
//    projectBtn.textContent = task.project ? `${task.project}` : "Add project";
   cancelBtn.textContent = "Cancel";
   addTaskBtn.textContent = "Add task";



   
   taskMain.appendChild(statusBtn);
   taskMain.appendChild(taskName);
   taskMain.appendChild(taskDescription);
   taskMain.appendChild(dueDateBtn);
   taskMain.appendChild(priorityBtn);
   taskMain.appendChild(projectBtn);
   taskMain.appendChild(cancelBtn);
   taskMain.appendChild(addTaskBtn);

   
   return taskMain;
}



 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializePage);

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
function Task (name, description, dueDate, priority, project) {
    name;
    description;
    dueDate;
    priority;
    project;
    let status = "open";

    const toggleStatus = () => {
        status === "open" ? status = "complete" : status = "open";
    }

}






/***/ }),

/***/ "./src/taskStorage.js":
/*!****************************!*\
  !*** ./src/taskStorage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ taskStorage)
/* harmony export */ });
function taskStorage () {
    let tasks = [];

    const addTaskToStorage = (task) => {
        tasks.push(task);
    }

    const removeTaskFromStorage = (task) => {
        tasks = tasks.splice(tasks.indexOf(task), 1);
    }


    return {addTaskToStorage, removeTaskFromStorage}
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _renderTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTask */ "./src/renderTask");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");



(0,_renderTask__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7O0FBRVg7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixpREFBSTs7QUFFeEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUMwQjtBQUNjO0FBQ0U7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0Esd0JBQXdCLHlEQUFZO0FBQ3BDLFFBQVEsd0RBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlEQUFpRCxhQUFhO0FBQzlELG1EQUFtRCxjQUFjO0FBQ2pFLGlEQUFpRCxhQUFhO0FBQzlEO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUEsQ0FBQyxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7OztBQ3BHZjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBLFlBQVk7QUFDWjs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOMEM7QUFDaEI7O0FBRTFCLHVEQUFjLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9nZXRUYXNrSW5wdXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcmVuZGVyVGFzayIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3Rhc2tTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUYXNrSW5wdXQgKCkge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbmFtZVwiKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLWRhdGVcIikudmFsdWU7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpLnZhbHVlO1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpLnZhbHVlO1xuXG4gICAgY29uc3QgbmV3VGFzayA9IFRhc2sobmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KTtcblxuICAgIHJldHVybiBuZXdUYXNrO1xufSIsIi8vIGltcG9ydCBzZXRUYXNrU3RhdHVzIGZyb20gXCIuL3NldFN0YXR1c1wiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHRhc2tTdG9yYWdlIGZyb20gXCIuL3Rhc2tTdG9yYWdlXCI7XG5pbXBvcnQgZ2V0VGFza0lucHV0IGZyb20gXCIuL2dldFRhc2tJbnB1dFwiO1xuXG5mdW5jdGlvbiBpbml0aWFsaXplUGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCB0YXNrRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgdGFza0RpYWxvZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stbW9kYWwnKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0RpYWxvZyk7XG4gICAgdGFza0RpYWxvZy5hcHBlbmRDaGlsZChyZW5kZXJUYXNrKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0RpYWxvZyk7XG4gICAgXG4gICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIHRhc2tcIjtcblxuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRhc2tEaWFsb2cuc2hvdygpO1xuICAgIH0pO1xuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG4gICAgXG4gIFxuICAgICBcbiAgICAvLyBjb250ZW50LmFwcGVuZENoaWxkKHJlbmRlck1haW4oKSk7XG4gICAgXG5cbiB9XG5cblxuXG5mdW5jdGlvbiByZW5kZXJUYXNrICh0YXNrKSB7XG4gICBjb25zdCB0YXNrTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgIGNvbnN0IHN0YXR1c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgY29uc3QgZHVlRGF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgY29uc3QgcHJpb3JpdHlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgIGNvbnN0IHByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgY29uc3QgdGFza0RpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLW1vZGFsJyk7XG5cbiAgICB0YXNrTWFpbi5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdkaWFsb2cnKTtcbiAgICB0YXNrTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stbmFtZScpO1xuICAgIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZHVlRGF0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2R1ZS1kYXRlJyk7XG4gICAgcHJpb3JpdHlCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpO1xuICAgIHByb2plY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0Jyk7XG5cbiAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGFza01haW4ucmVzZXQoKTtcbiAgICAgICAgdGFza0RpYWxvZy5jbG9zZSgpO1xuICAgIH0pXG5cbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBuZXdUYXNrID0gZ2V0VGFza0lucHV0KCk7XG4gICAgICAgIHRhc2tTdG9yYWdlKCkuYWRkVGFza1RvU3RvcmFnZShuZXdUYXNrKTtcbiAgICAgICAgdGFza01haW4ucmVzZXQoKTtcbiAgICAgICAgdGFza0RpYWxvZy5jbG9zZSgpO1xuICAgICAgICAvLyBOZWVkIHRvIGRpc3BsYXkgdGFza3MgaGVyZVxuICAgIH0pXG5cbiAgIHRhc2tOYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICB0YXNrTmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgXCJUYXNrIG5hbWVcIik7XG4gICBcbiAgIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgdGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBcIkRlc2NyaXB0aW9uXCIpO1xuICAgXG4gICBzdGF0dXNCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gICBzdGF0dXNCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdzdGF0dXMtYnRuJyk7XG5cbi8vICAgIGR1ZURhdGVCdG4udGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGUgPyBgJHt0YXNrLmR1ZURhdGV9YCA6IFwiXCI7XG4vLyAgICBwcmlvcml0eUJ0bi50ZXh0Q29udGVudCA9IHRhc2sucHJpb3JpdHkgPyBgJHt0YXNrLnByaW9yaXR5fWAgOiBcIlByaW9yaXR5XCI7XG4vLyAgICBwcm9qZWN0QnRuLnRleHRDb250ZW50ID0gdGFzay5wcm9qZWN0ID8gYCR7dGFzay5wcm9qZWN0fWAgOiBcIkFkZCBwcm9qZWN0XCI7XG4gICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIHRhc2tcIjtcblxuXG5cbiAgIFxuICAgdGFza01haW4uYXBwZW5kQ2hpbGQoc3RhdHVzQnRuKTtcbiAgIHRhc2tNYWluLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcbiAgIHRhc2tNYWluLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG4gICB0YXNrTWFpbi5hcHBlbmRDaGlsZChkdWVEYXRlQnRuKTtcbiAgIHRhc2tNYWluLmFwcGVuZENoaWxkKHByaW9yaXR5QnRuKTtcbiAgIHRhc2tNYWluLmFwcGVuZENoaWxkKHByb2plY3RCdG4pO1xuICAgdGFza01haW4uYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgIHRhc2tNYWluLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuXG4gICBcbiAgIHJldHVybiB0YXNrTWFpbjtcbn1cblxuXG5cbiBleHBvcnQgZGVmYXVsdCBpbml0aWFsaXplUGFnZTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrIChuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICBuYW1lO1xuICAgIGRlc2NyaXB0aW9uO1xuICAgIGR1ZURhdGU7XG4gICAgcHJpb3JpdHk7XG4gICAgcHJvamVjdDtcbiAgICBsZXQgc3RhdHVzID0gXCJvcGVuXCI7XG5cbiAgICBjb25zdCB0b2dnbGVTdGF0dXMgPSAoKSA9PiB7XG4gICAgICAgIHN0YXR1cyA9PT0gXCJvcGVuXCIgPyBzdGF0dXMgPSBcImNvbXBsZXRlXCIgOiBzdGF0dXMgPSBcIm9wZW5cIjtcbiAgICB9XG5cbn1cblxuXG5cblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFza1N0b3JhZ2UgKCkge1xuICAgIGxldCB0YXNrcyA9IFtdO1xuXG4gICAgY29uc3QgYWRkVGFza1RvU3RvcmFnZSA9ICh0YXNrKSA9PiB7XG4gICAgICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVGFza0Zyb21TdG9yYWdlID0gKHRhc2spID0+IHtcbiAgICAgICAgdGFza3MgPSB0YXNrcy5zcGxpY2UodGFza3MuaW5kZXhPZih0YXNrKSwgMSk7XG4gICAgfVxuXG5cbiAgICByZXR1cm4ge2FkZFRhc2tUb1N0b3JhZ2UsIHJlbW92ZVRhc2tGcm9tU3RvcmFnZX1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0aWFsaXplUGFnZSBmcm9tIFwiLi9yZW5kZXJUYXNrXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5cbmluaXRpYWxpemVQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9