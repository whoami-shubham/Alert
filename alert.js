
function createAlert(title,message){
    let heading = title!==undefined?`<h3>${title}</h3>`:'';
    let msg_class = title===undefined?'heading':'';
    let element = `
    <div class='alert-box col bounce'>
        ${heading}
       <p class='row flex-center ${msg_class}'>${message}</p>
       <div class='row flex-center'>
          <button class="btn alert-cancel primary">Cancel</button>&nbsp;&nbsp;<button class="btn alert-ok primary">Ok</button>
       </div>
    </div>

    `
    return element;
    
}

function Alert(args){
    let {title,message,response} = args!==undefined?args:{};
    if(response===undefined){
        response = {};
    }
    if(message===undefined && title==undefined){
        message = "Hello World !";
    }
    response.result = false;
    let container = document.createElement('div');
    container.classList.add('alert');
    container.innerHTML = createAlert(title,message);
    document.body.appendChild(container);
    let ok = document.querySelector('.alert-ok');
    let cancel = document.querySelector('.alert-cancel');
    ok.addEventListener('click',Ok(container,response));
    cancel.addEventListener('click',Cancel(container,response));

}

function Ok(container,response){
       return ()=>{
           //console.log('ok')
           var new_element = document.createElement('div');
           container.parentNode.replaceChild(new_element, container);
           response.result = true;
       }
}
function Cancel(container,response){
       return ()=>{
           //console.log('Cancel')
           var new_element = document.createElement('div');
           container.parentNode.replaceChild(new_element, container);
           response.result = false;
       }
}