'use strict';
const table1 = document.querySelector('.table1');
const table2 = document.querySelector('.table2');
const page = document.querySelectorAll('.page');
const arrow = document.querySelectorAll('.arrow');

// for (let i = 0; i < page.length; i++)
//   page[i].addEventListener('click', function () {
//     if (i === 0) {
//       table1.classList.remove('hidden');
//       table2.classList.add('hidden');
//     } else if (i === 1) {
//       table1.classList.add('hidden');
//       table2.classList.remove('hidden');
//     }
//   });

// for (let i = 0; i < page.length; i++)
//   arrow[i].addEventListener('click', function () {
//     if (i === 0) {
//       table1.classList.remove('hidden');
//       table2.classList.add('hidden');
//     } else if (i === 1) {
//       table1.classList.add('hidden');
//       table2.classList.remove('hidden');
//     }
//   });

const pagination = function (index) {
  if (index === 0) {
    table1.classList.remove('hidden');
    table2.classList.add('hidden');
  } else if (index === 1) {
    table1.classList.add('hidden');
    table2.classList.remove('hidden');
  }
};

for (let i = 0; i < page.length; i++) {
  page[i].addEventListener('click', function () {
    pagination(i);
  });
  arrow[i].addEventListener('click', function () {
    pagination(i);
  });
}
