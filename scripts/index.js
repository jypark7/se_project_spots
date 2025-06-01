const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileClosedBtn = editProfileModal.querySelector(".modal__close-btn");

const editPostBtn = document.querySelector(".profile__new-post-btn");
const editPodtModal = document.querySelector("#new-post-modal");
const editPostClosedBtn = newPostModal.querySelector(".modal__close-btn");

editProfileBtn.addEventListener("click", function () {
    editProfileModal.classList.add("modal_is-opened");
});


editProfileBtn.addEventListener("click", function () {
    editProfileModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function () {
    newPostModal.classList.add("modal_is-opened");
});

newPostClosedBtn.addEventListener("click", function () {
    newPostModal.classList.remove("modal_is-opened");
});``