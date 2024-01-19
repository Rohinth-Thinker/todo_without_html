let body = document.querySelector('body');
let error = false;

const storeInput = [];

function showTask () {

    body.textContent = '';

       
    if (error) {
        let errorSpace = document.createElement('div');
        errorSpace.textContent = error;
        errorSpace.style.cssText = 'color: red; text-align: center; font-weight: bold; font-size: 30px;'
        body.appendChild(errorSpace);
        error = false;
    }

    let todoList = document.createElement('div');
    userInterface();    


    storeInput.forEach((element, index) => {
        let fullElement = (index+1) + ') ' + element.todoName + " ";

        let todoSpace = document.createElement('div')
        todoSpace.style.cssText = 'display: grid;grid-template-columns: 220px 170px 80px;column-gap: 55px;row-gap: 20px;font-size: 25px;align-items: center; margin-top: 50px;'

        let todoElementName = document.createElement('span');
        todoElementName.textContent = fullElement;
        

        let todoElementDate = document.createElement('span');
        todoElementDate.textContent = element.todoDate + " ";

        let deleteElement = document.createElement('button');
        deleteElement.type = 'submit';
        deleteElement.textContent = 'Delete';
        deleteElement.style.cssText = 'height: 40px; font-size: 17px; padding: 10px; font-weight: bold; color: white; background-color: rgb(187, 32, 32); border: none'
        
        todoSpace.appendChild(todoElementName)
        todoSpace.appendChild(todoElementDate)
        todoSpace.appendChild(deleteElement)

        todoList.appendChild(todoSpace)

        deleteElement.addEventListener('click', () => {
            storeInput.splice(index, 1)
            showTask()
        })
    });

    body.appendChild(todoList)
    
}


function userInterface() {

    let heading = document.createElement('h1')
    heading.textContent = 'Todo List'
    body.appendChild(heading);

    let form = document.createElement('form');

    let inputText = document.createElement('input');
    inputText.type = 'text';
    inputText.placeholder = 'Add your todo';
    inputText.style.cssText = 'height: 40px; width: 210px; font-size: 17px; padding-left: 15px; margin-right: 18px'

    let date = document.createElement('input')
    date.type = 'date'
    date.style.cssText = 'height: 24px; width: 150px; font-size: 16px; padding: 10px; margin-left: 18px;'


    let submit = document.createElement('button');
    submit.textContent = 'Add';
    submit.style.cssText = 'height: 49px;width: 80px; font-size: 17px; padding: 10px; font-weight: bold; margin-left: 55px; background-color: rgb(49, 192, 49);; color: white; border: none;'

    form.appendChild(inputText);
    form.appendChild(date);
    form.appendChild(submit);

    body.appendChild(form);

    form.addEventListener('submit', (event) => {


        if (inputText.value === '') {
            error = 'Invalid Todo Name';
            showTask();
        }

        else if (date.value === '') {
            error = 'Invalid Todo Date';
            showTask();
        }

        else{
        
        const todoDetails = {
            todoName : inputText.value,
            todoDate : date.value
        }

        storeInput.push(todoDetails)

        inputText.value = '';

        showTask();
    }
        
    event.preventDefault();


    })

}

userInterface();