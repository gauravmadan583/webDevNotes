// console.log('ES 6 ');

showData = () => {
    let data = localStorage.getItem('data');

    let dataObj;

    if(data == null){
        dataObj = [];
        console.log('local storage empty');
    }else{
        console.log('local storage had data');
        dataObj = JSON.parse(data); //Convert into Object
    }

    let uiString = "";
    dataObj.forEach((element , index) => {
        uiString += `<tr>
                        <td>${element.name}</td>
                        <td>${element.author}</td>
                        <td>${element.type}</td>
                        <td><button id="${index}" onclick="deleteBook(this.id)" class="btn btn-primary">Delete Book</button></td>
                    </tr>`;
    });

    //Default Message
    let dataElem = document.getElementById('tableBody');
    if(dataObj.length != 0){
        dataElem.innerHTML = uiString;
    }else{
        dataElem.innerHTML = `<em>Nothing to show! Add some books in to Library. </em>`;
    }
}

showData();

//Delete Function
deleteBook = (index) => {
    console.log(index);
    // let data = document.getElementById('data');
    let data = localStorage.getItem('data');

    console.log(data);
    let dataObj;    
    if(data == null){
        dataObj = [];
    }else{
        dataObj = JSON.parse(data);
    }
    console.log(dataObj);
    dataObj.splice(index , 1);
    localStorage.setItem('data' , JSON.stringify(dataObj));
    showData();
}

class Book{
    constructor(name , author , type){ //Constructor
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display{

    //Add Function
    add = (book) => {
        // let tableBody = document.getElementById('tableBody');
        // let uiString = `<tr>
        //                     <td>${book.name}</td>
        //                     <td>${book.author}</td>
        //                     <td>${book.type}</td>
        //                 </tr>`;
        // tableBody.innerHTML += uiString; //Add new row 

        let data = localStorage.getItem('data');

        let dataObj;

        if(data == null){
            dataObj = [];
            console.log('local storage empty');
        }else{
            console.log('local storage had data');
            dataObj = JSON.parse(data); //Convert into Object
        }

        let myObj = {
            name : book.name,
            author : book.author,
            type : book.type
        };

        dataObj.push(myObj);

        localStorage.setItem('data' , JSON.stringify(dataObj));

        showData();
    };

    //Clear Function
    clear = () => {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    };

    //Validate Function
    validate = (book) => {
        if(book.name.length < 2 || book.author.length < 2){
            return false;
        }else{
            return true;
        }
    };

    //Show function
    show = (type , displayMessage) => {

        let boldText;
        if(type == 'success'){
            boldText = 'Success';
        }else{
            boldText = 'Error!!!';
        }

        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}</strong> ${displayMessage}
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>`;
        // After 2000ms message will be null
        setTimeout(() => {
            message.innerHTML = ''
        }, 2000);
    };

}

//Add Submit Event Listner to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit' , libraryFormSubmit);

function libraryFormSubmit(e){

    e.preventDefault(); //Prevent Default Behaviour

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value; 
    let type;
    
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let sports = document.getElementById('sports');

    if(fiction.checked){
        type = fiction.value;
    }else if(programming.checked){
        type = programming.value;
    }else if(sports.checked){
        type = sports.value;
    }

    let book = new Book(name , author , type);
    // console.log(book);

    let display = new Display();

    console.log(display.validate(book));

    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success' , 'Your book has been successfully added :)');
    }else{
        //Show error to user
        display.show('danger' , 'Sorry you cannot add this book :(');
    }
    // console.log(`You have submitted libraryForm`);
}