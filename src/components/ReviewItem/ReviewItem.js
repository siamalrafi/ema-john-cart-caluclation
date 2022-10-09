import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product, removeItem }) => {
    const { name, id, price, img, shipping, } = product;

    return (
        <div className='review-container'>
            <div className="review-item">
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div>
                    <p>{name}</p>
                    <p>${price}</p>
                    <p>${shipping}</p>
                </div>
                <div className='btn-delete'>
                    <button onClick={() => removeItem(id)} className='btn-delete'>
                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>


        </div>
    );
};

export default ReviewItem;