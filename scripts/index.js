const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileClosedBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
    "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
    "#profile-description-input"
);


const newPostBtn = document.querySelector(".profile__new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostClosedBtn = newPostModal.querySelector(".modal__close-btn");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

editProfileBtn.addEventListener("click", function () {
    editProfileNameInput.value = profileNameEl.textContent;
    editProfileDescriptionInput.value = profileDescriptionEl.textContent;
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
});

function handleEditProfileSubmit(evt) {
    evt.preventDefault();
    profileNameEl.textcontent = editProfileNameInput.value;
    profileDescriptionEl.textcontent = editProfileDescriptionInput.value;
    editProfileModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);