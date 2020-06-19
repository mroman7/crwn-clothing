import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../preview-collection/preview-collection.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

import './collections-overview.style.scss';

const CollectionOverview = ({ collections }) => (
    <div className="collection-overview">
        {collections.map(({ id, ...otherCollectionprops }) => (
                <CollectionPreview key={id} {...otherCollectionprops} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);