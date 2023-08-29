import React from "react";
import PopupWithForm from "./PopupWithForm.jsx";

const PopupWithConfirmation = ({ isOpen, onClose, onSubmit, textOnButton }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(card);
    }

    return (
        <PopupWithForm
            isOpen={isOpen}
            name={"confirmation"}
            onClose={onClose}
            title={"Вы уверены?"}
            textOnButton={textOnButton}
            onSubmit={handleSubmit}
        />
    )
}

export default PopupWithConfirmation;