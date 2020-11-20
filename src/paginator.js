import Pagination from "tui-pagination";
import "./tui-pagination.css";
// import apiServise from "./api-service";
const refs = {
  paginationRef: document.querySelector(`[data-pagination-value="2"]`),
}

  
const container = document.getElementById('tui-pagination-container');

const newPagination = new Pagination(container, paginatorOptions);
 
newPagination.getCurrentPage();

  const paginatorOptions = {
    totalItems: myNewTotalAmountOfFilms,
    itemsPerPage: 20,
    visiblePages: getVisiblePagesCount(),
    centerAlign: true,
    totalPage: pageForStartPaginator,
}
  





// const refs = {
//   body: document.querySelector("body"),
//   header: document.querySelector(".header"),
//   searchInfo: document.querySelector("#notify-text"),
//   searchIconRef: document.querySelector(".search-icon"),
//   listFilms: document.querySelector(".list-film"),
//   pageHomeRef: document.querySelector(`[data-nav-choice="home"]`),
//   pageMyLibraryRef: document.querySelector(`[data-nav-choice="my-library"]`),
//   buttonListRef: document.querySelector(
//     `[data-button-list-header="watched-and-queue"]`
//   ),
//   inputSearchRef: document.querySelector(".input-search"),
//   sortBtn: document.querySelector(".sort-button.first"),
//   paginationRef: document.querySelector(`[data-pagination-value="2"]`),
//   paginationRef3: document.querySelector(`[data-pagination-value="3"]`),
//   notFoundText: document.querySelector(".not-found-text"),
//   notFoundContainer: document.querySelector(".not-found-container"),
//   yearsRef: document.querySelector("#years"),
//   treilerTitle: document.querySelectorAll(".btn-youtube-text"),
// };
// export let myNewTotalPage;
// export let myNewInput;
// export let myNewTotalAmountOfFilms = 10000;
// export let totalResults;



// let dataForModal;
// let resList;

// const page = 1;

// export const filmsSearch = function (keyWord, page) {
//   myNewInput = keyWord;
  
//   return apiService();
// };

// export const drawHtml = (data) => {
//   dataForModal = [...data];
//   const markup = mainTemplate(data);
//   refs.listFilms.innerHTML = markup;
//   doneMain();
// };

// // For Kate`s modal
// export const pullData = () => {
//   return dataForModal;
// };

// export const getDetails = function (id) {
//   apiService;
// };

// // при вызове популярных так же срабатывают и другие функции как при обычном поиске


// export const showPopular = function (page) {
//   localStorage.removeItem('myLibrary');
//   const d = getPopular(page).then((f) => {
//     return getGenres().then((g) => f.map((el) => ({
//       ...el,
//       genre_ids: el.genre_ids.flatMap((num) => g.filter((el) => el.id === num))
//     })));
//   });

//   checkCreatePuginator(myNewTotalPage);

//   d.then(drawHtml);
// };

// export const getFilmsByWord = function (list, keyword) {
//   let results = list.results;

//   dateSlice(results);
//   drawHtml(results);
// };

// const dateSlice = function (results) {
//   results.map((el) => {
//     el.release_date = el.release_date.slice(0, 4);
//   });
// };

// showPopular(page);
// let globalCheckPaginattor = 0;

// let globalCheckPaginattorForSearch = 0;

// const visiblePaginator = document.querySelector('[data-input="input"]');

// if (visiblePaginator.classList.contains(".input-search .is-not-visible")) {
//   // console.log("yes");
// }

// export function checkCreatePuginator(totalPages) {
//   if (globalCheckPaginattor === 0) {
//     createPaginator(totalPages);
//     globalCheckPaginattor = totalPages;
//   } else {
//     return;
//   }
// }

// export function checkCreatePuginatorForSearch(totalPages) {
//   if (globalCheckPaginattorForSearch === totalPages) {
//     return;
//   } else {
//     createPaginator(totalPages);
//     globalCheckPaginattorForSearch = totalPages;
//   }
// }

// export const createPaginator = function (pageForStartPaginator) {
//   const paginatorOptions = {
//     totalItems: myNewTotalAmountOfFilms,
//     itemsPerPage: 20,
//     visiblePages: getVisiblePagesCount(),
//     centerAlign: true,
//     totalPage: pageForStartPaginator,
//   };

//   new Pagination(document.getElementById("pagination2"), paginatorOptions);
//   let page = 1;
//   refs.paginationRef.addEventListener("click", (event) => {
//     isEnabled(event);
//   });

//   function isEnabled(event) {
//     const arr = Array.from(event.target.classList);
//     if (!arr.includes("tui-pagination")) {
//       setPaginator(event);

//       document.body.clientWidth <= 767 ? backToTopMob() : backToTop();
//     }
//   }

//   function setPaginator(event) {
//     page = 1;
//     const text = event.target.textContent;
//     if (text === "next") {
//       page += 1;
//     } else if (text === "prev") {
//       page -= 1;
//     } else if (text === "first") {
//       page = 1;
//     } else if (text === "last") {
//       page = myNewTotalPage;
//     } else {
//       page = text;
//     }

//     if (typeof myNewInput === "undefined") {
//       showPopular(page);
//     } else if (myNewInput.length > 0) {
//       const newD = filmsSearch(myNewInput, page).then((f) => {
//         return getGenres().then((g) =>
//           f
//             .map((el) => ({
//               ...el,
//               genre_ids: el.genre_ids.flatMap((num) =>
//                 g.filter((el) => el.id === num)
//               ),
//             }))
//             .sort((a, b) => b.vote_average - a.vote_average)
//         );
//       });

//       newD.then(drawHtml);
//     } else {
//       return;
//     }
//   }

//   function getVisiblePagesCount() {
//     if (document.body.clientWidth <= 767) {
//       return 5;
//     } else {
//       return 7;
//     }
//   }
// };

// function backToTop() {
//   window.scroll({
//     top: 500,
//     behavior: "auto",
//   });
// }
// function backToTopMob() {
//   window.scroll({
//     top: 260,
//     behavior: "auto",
//   });
// }

// function trackScroll() {
//   let scrolled = window.pageYOffset;
//   let coords = document.documentElement.clientHeight;
//   if (scrolled > coords) {
//     goTopBtn.classList.add("back_to_top-show");
//   }
//   if (scrolled < coords) {
//     goTopBtn.classList.remove("back_to_top-show");
//   }
// }

// let goTopBtn = document.querySelector(".back_to_top");
// window.addEventListener("scroll", trackScroll);
// goTopBtn.addEventListener("click", () => {
//   window.scroll({
//     top: 0,
//     behavior: "smooth",
//   });
// });
  
