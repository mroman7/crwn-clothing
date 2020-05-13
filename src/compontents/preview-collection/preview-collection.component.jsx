import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './preview-collection.style.scss';

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{ title }</h1>
        <div className="preview">
            { items
                .filter((item, index) => index < 4)
                .map( ({ id, ...otheritemprops}) => (
                    <CollectionItem key={id} {...otheritemprops} />  
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;