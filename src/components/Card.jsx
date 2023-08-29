import React from 'react';
// импорт объекта контекста для изменения карточек исходя из данных пользователя
import CurrentUserContext from '../contexts/CurrentUserContext.jsx';

const Card = ({ card, onCardClick, onCardDelete, onCardLike }) => {
    
    // подписываем Card на контекст для манипуляций с карточками
    const currentUser = React.useContext(CurrentUserContext);

    // определяем, являемся ли мы владельцем текущей карточки
    const isOwn = card.owner._id === currentUser._id;

    // определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = (
        `element__like-button ${isLiked && 'element__like-button_active'}` 
    );

    // обработчик для отображения popupWithImage
    const handleClick = (card) => {
        onCardClick(card);
    };

    const handleLikeClick = (card) => {
        onCardLike(card);
    };

    const handleDeleteClick = (card) => { //здесь был аргумент card
        onCardDelete(card);
    };

    return (
        <article className="element">
            <img
            src={card.link} // link, name, likes - это всё пропсы объекта с сервера
            alt={card.name} 
            className="element__image element__popup-open"
            onClick={() => handleClick(card)} 
            />
            {isOwn &&
            <button
            type="button"
            className="element__delete-button"
            onClick={() => handleDeleteClick(card)}
            />
            }
            <div className="element__text">
                <h2 className="element__caption">{card.name}</h2>
                <div className="element__like-attributes">
                    <button
                    type="button"
                    className={cardLikeButtonClassName}
                    onClick={() => handleLikeClick(card)
                    } />
                    <p className="element__likes-counter">{card.likes.length}</p>
                </div>
            </div>
        </article>
    )
}

export default Card;
