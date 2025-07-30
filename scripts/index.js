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


const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostClosedBtn = newPostModal.querySelector(".modal__close-btn");
const newPostFormElement = newPostModal.querySelector(".modal__form");
const nameInput = newPostModal.querySelector("#card-image-input");
const linkInput = newPostModal.querySelector("#card-caption-input");
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editProfileBtn.addEventListener("click", function () {
    editProfileNameInput.value = profileNameEl.textContent;
    editProfileDescriptionInput.value = profileDescriptionEl.textContent;
    openModal(editProfileModal);
});


editProfileClosedBtn.addEventListener("click", () => {
    closeModal(editProfileModal);
});


// Opens the new post modal
newPostBtn.addEventListener("click", function () {
    openModal(newPostModal);
});

// 

newPostClosedBtn.addEventListener("click", function () {
    closeModal(newPostModal);
});

function handleEditProfileSubmit(evt) {
    evt.preventDefault();
    profileNameEl.textContent = editProfileNameInput.value;
    profileDescriptionEl.textContent = editProfileDescriptionInput.value;
    closeModal(editProfileModal);
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleNewPostSubmit(evt) {
    evt.preventDefault();
    console.log(nameInput.value);
    console.log(linkInput.value);
    closeModal(newPostModal);
}

newPostFormElement.addEventListener("submit", handleNewPostSubmit);
