function createAlert(title, message) {
  let heading = title !== undefined ? `<h1>${title}</h1>` : "";
  let msg_class = title === undefined ? "heading" : "";
  let element = `
    <div class='alert-box col bounce mg-0'>
        ${heading}
       <p class='row flex-center ${msg_class}'>${message}</p>
       <div class='row flex-center'>
          <button class="btn alert-cancel primary">Cancel</button>&nbsp;&nbsp;<button class="btn alert-ok primary">Ok</button>
       </div>
    </div>

    `;
  return element;
}

async function Alert(args) {
  let { title, message, callBacks } = args !== undefined ? args : {};
  let response = {result:'none'};
  if (message === undefined && title == undefined) {
    message = "Hello World !";
  }
  response.result = false;
  let container = document.createElement("div");
  container.classList.add("alert");
  container.innerHTML = createAlert(title, message);
  document.body.appendChild(container);
  let ok = document.querySelector(".alert-ok");
  let cancel = document.querySelector(".alert-cancel");
  ok.addEventListener("click", Ok(container, response, callBacks));
  cancel.addEventListener("click", Cancel(container, response));
  return response;
}

function Ok(container, response, callBacks) {
  return async () => {
    //console.log('ok')
    var new_element = document.createElement("div");
    container.parentNode.replaceChild(new_element, container);
    response.result = 'ok';
    if (callBacks) {
      let start = 0,end = callBacks.length; 
      let res = await callBacks[start++]();
      let iterate = setInterval(async ()=>{
        if(start===end || res.result==='cancel'){
            clearInterval(iterate);
            //console.log('clearinterval')
        }
        if(res.result==='ok'){
            res = await callBacks[start++]();
        }
      },10);

    }
  };
}
function Cancel(container, response) {
  return () => {
    //console.log('Cancel')
    var new_element = document.createElement("div");
    container.parentNode.replaceChild(new_element, container);
    response.result = 'cancel';
  };
}
