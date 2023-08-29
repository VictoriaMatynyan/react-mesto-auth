import React, { useState, useEffect, useRef, forwardRef } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar, textOnButton }) => {
    const [avatar, setAvatar] = useState('');
    const [avatarDirty, setAvatarDirty] = useState(false);
    const [avatarError, setAvatarError] = useState('');
    // создаём состояние, которое отвечает за валидность формы в целом
    const [formValid, setFormValid] = useState(false);

     // валидация формы
     useEffect(() => {
        if(avatarError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [avatarError]);

    const validateAvatarLink = (e) => {
        setAvatar(e.target.value);
        const urlLink = /^(http[s]?:\/\/)(www\.)?[^\s$.?#].[^\s]*$/;
        if (!urlLink.test(e.target.value)) {
            setAvatarError('Здесь должна быть ссылка');
        } else {
            setAvatarError('');
        }
    }

    const handleChangeAvatar = (e) => {
        setAvatar(e.target.value);
        setAvatarDirty(true);
        validateAvatarLink(e);
    }

    const avatarRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        if(!avatarError) {
            // добавляем значение инпута, полученное с помощью рефа
            onUpdateAvatar({
                avatar: avatarRef.current.value
            });
        }
    }

    useEffect(() => {
        // если попап открыт, очищаем поле инпута
        if(isOpen) {
            avatarRef.current.value = '';
        }
        setFormValid(false);
    }, [isOpen]);

    return (
        <>
    <PopupWithForm
        isOpen={isOpen}
        name={"update"}
        onClose={onClose}
        title={"Обновить аватар"}
        textOnButton={textOnButton}
        onSubmit={handleSubmit}
        disabled={!formValid}
        >
    <input
        value={avatar}
        onChange={handleChangeAvatar}
        ref={avatarRef}
        type={"url"}
        id={"avatarUpdate-input"}
        placeholder={"Ссылка на картинку"}
        className={"popup__input popup__input_type_update"}
        name={"link"}
        required
        autoComplete="off" 
    />
    {<span className="avatarUpdate-input-error popup__input-error">{(avatarDirty && avatarError) && avatarError}</span>}
    </PopupWithForm>
        </>
    )
}

export default EditAvatarPopup;

// валидация не работает корректно с этим кодом:
 {/* <ProfileFormInput
                value={avatar}
                onChange={handleChangeAvatar}
                ref={avatarRef}
                type={"url"}
                name={"link"}
                id={"avatarUpdate-input"}
                placeholder={"Ссылка на картинку"}
                className={"popup__input popup__input_type_update"}
            /> */}

 // нельзя использовать атрибут ref с функциональными компонентами, поэтому используем forwardRef
    // const ProfileFormInput = forwardRef((props, ref) => {   
    //     return (
    //         <input
    //         ref={ref}
    //         {...props}
    //         />
    //     );
    // });