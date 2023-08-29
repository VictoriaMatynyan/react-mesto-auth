import React, { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import ProfileFormInput from './ProfileFormInput';

const AddPlacePopup = ({ isOpen, onClose, onAddPlace, textOnButton }) => {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    // добавляем валидацию формы
    // создаём состояния, которые покажут, были мы в инпуте или нет. При касании инпута, он будет true
    const [nameDirty, setNameDirty] = useState(false);
    const [linkDirty, setLinkDirty] = useState(false);
    // создаём состояния для отражения ошибки
    const [nameError, setNameError] = useState('');
    const [linkError, setLinkError] = useState('');
    // создаём состояние, которое отвечает за валидность формы в целом
    const [formValid, setFormValid] = useState(false);

    // валидация формы
    useEffect(() => {
        if(nameError || linkError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [nameError, linkError]);

    useEffect(() => {
        setName('');
        setLink('');
        setFormValid(false);
    }, [isOpen])

    const validateName = (e) => {
        setName(e.target.value);
        if (e.target.value.length < 2 || e.target.value.length > 30) {
            setNameError('Имя должно содержать от 2 до 30 символов');
        } else {
            setNameError('');
        }
    }

    const validateLink = (e) => {
        setLink(e.target.value);
        const urlLink = /^(http[s]?:\/\/)(www\.)?[^\s$.?#].[^\s]*$/;
        if (!urlLink.test(e.target.value)) {
            setLinkError('Здесь должна быть ссылка');
        } else {
            setLinkError('');
        }
    }

    function handleChangeName(e) {
        setName(e.target.value);
        setNameDirty(true);
        validateName(e);
    }
    function handleChangeLink(e) {
        setLink(e.target.value);
        setLinkDirty(true);
        validateLink(e);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name, link
        });
    }

    return (
        <PopupWithForm
            isOpen={isOpen}
            name={"add"}
            onClose={onClose}
            title={"Новое место"}
            textOnButton={textOnButton}
            onSubmit={handleSubmit}
            disabled={!formValid}
        >
            <ProfileFormInput
                value={name || ""}
                onChange={handleChangeName}
                type={"text"}
                name={"name"}
                idName={"placeName"}
                placeholder={"Название"}
                minLength={2}
                maxLength={30}
            />
            {<span className="name-input-error popup__input-error">{(nameDirty && nameError) && nameError}</span>}
            <ProfileFormInput
                value={link || ""}
                onChange={handleChangeLink}
                type={"url"}
                name={"link"}
                idName={"placeLink"}
                placeholder={"Ссылка на картинку"}
            />
            {<span className="name-input-error popup__input-error">{(linkDirty && linkError) && linkError}</span>}
        </PopupWithForm>
    )
}

export default AddPlacePopup;