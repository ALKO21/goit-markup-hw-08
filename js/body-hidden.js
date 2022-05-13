
// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[body-hidden-active]"),
//     closeModalBtn: document.querySelector("[body-hidden-disactive]"),
//     modal: document.querySelector("[body-hidden]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("body-hidden");
//   }
// })();

(() => {
  const menuBtnRef = document.querySelector("[body-hidden-active]");
  const mobileMenuRef = document.querySelector("[body-hidden]");

  menuBtnRef.addEventListener("click", () => {
      // const expanded =
      //     menuBtnRef.getAttribute("aria-expanded") === true || false;
      
      // menuBtnRef.classList.toggle("body-hidden");
      // menuBtnRef.setAttribute("aria-expanded", !expanded);

      mobileMenuRef .classList .toggle("body-hidden");
  
  });
})();