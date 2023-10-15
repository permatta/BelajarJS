// console.log("hello World")
// alert("Notifikasi")
// prompt("Pinjam Seratus")

// var Promnet = "Coding is Easy"
// console.log(Promnet)
// var Promnet = "Coding not Easy"
// console.log(Promnet)
// var Promnet = "nothing is possible"
// console.log(Promnet)

// let Promnet = "Coding is Fun"
// console.log(Promnet)
// let Promnet = "Coding not Fun"
// console.log(Promnet)

// const Promnet = "Coding is My Life"
// console.log(Promnet)
// const Promnet = "Coding not My Life"
// console.log(promnet)

// let totalPoin = prompt("Masukan poin anda")
//     if(totalPoin > 100) {
//         document.write("Congratulation");
//     }else {
//         document.write("Keep Trying");
//     }

// let x = 6;
// let y = 3;

// console.log(x<10 && y>1);
// console.log(x<10 && y<1);
// console.log(x==5 || y==5);
// console.log(x==6 || y==5);
// console.log(!(x==y));

// document.writeln(x<10 && y>1);
// document.writeln("<br");
// document.writeln(x<10 && y<1);


// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")
// button.addEventListener(`click`, function(){
//    let isi = input.value
//    console.log(isi)
//    p.innerHTML = isi
// })

document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const addButton = document.getElementById('submit');
    const taskList = document.getElementById('taskList');

    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = '<input type="checkbox">' + taskText + '<button class="delete">X</button>';
            taskList.appendChild(listItem);
            taskInput.value = '';

            const deleteButton = listItem.querySelector('.delete');
            deleteButton.addEventListener('click', function () {
                taskList.removeChild(listItem);
            });

            const checkbox = listItem.querySelector('input[type="checkbox"]');
            checkbox.addEventListener('change', function () {
                listItem.classList.toggle('checked', checkbox.checked);
            });
        }
    });

    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});