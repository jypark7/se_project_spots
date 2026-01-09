const initialCards = [
    {
        name: "Val Thorens",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
    },
    {
        name: "Restaurant terrace",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
    },
    {
        name: "An outdoor cafe",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
    },
    {
        name: "A very long bridge, over the forest and through the trees",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
    },
    {
        name: "Tunnel with morning light",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
    },
    {
        name: "Mountain house",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
    },
];

const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostImageInput = newPostModal.querySelector("#card-image-input"); // image URL
const newPostCaptionInput = newPostModal.querySelector("#card-caption-input"); // card name

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const cardTemplate = document.querySelector("#card-template").content.querySelector(".card");
const cardsList = document.querySelector(".cards__list");

const previewModal = document.querySelector("#preview-image-modal");
const previewImg = previewModal.querySelector(".modal__image");
const previewCaption = previewModal.querySelector(".modal__caption");
const previewCloseBtn = previewModal.querySelector(".modal__close-btn");


function openModal(modal) {
    modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
    modal.classList.remove("modal_is-opened");
}


function getCardElement(data) {
    const cardElement = cardTemplate.cloneNode(true);

    const cardTitleEl = cardElement.querySelector(".card__title");
    const cardImageEl = cardElement.querySelector(".card__image");
    const likeBtn = cardElement.querySelector(".card__like-btn");
    const deleteBtn = cardElement.querySelector(".card__delete-btn");


    cardTitleEl.textContent = data.name;
    cardImageEl.src = data.link;
    cardImageEl.alt = data.name;


    likeBtn.addEventListener("click", () => {
        likeBtn.classList.toggle("card__like-btn_active");
    });

    deleteBtn.addEventListener("click", () => {
        cardElement.remove();
    });

    cardImageEl.addEventListener("click", () => {
        previewImg.src = data.link;
        previewImg.alt = data.name;
        previewCaption.textContent = data.name;
        openModal(previewModal);
    });

    return cardElement;
}


initialCards.forEach(item => {
    const cardElement = getCardElement(item);
    cardsList.append(cardElement);
});


previewCloseBtn.addEventListener("click", () => {
    closeModal(previewModal);
});


editProfileBtn.addEventListener("click", () => {
    editProfileNameInput.value = profileNameEl.textContent;
    editProfileDescriptionInput.value = profileDescriptionEl.textContent;
    openModal(editProfileModal);
});

editProfileCloseBtn.addEventListener("click", () => {
    closeModal(editProfileModal);
});

editProfileForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    profileNameEl.textContent = editProfileNameInput.value;
    profileDescriptionEl.textContent = editProfileDescriptionInput.value;
    closeModal(editProfileModal);
});



newPostBtn.addEventListener("click", () => {
    openModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", () => {
    closeModal(newPostModal);
});

newPostForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const newCard = getCardElement({
        name: newPostCaptionInput.value,
        link: newPostImageInput.value,
    });

    cardsList.prepend(newCard);
    newPostForm.reset();
    closeModal(newPostModal);
});