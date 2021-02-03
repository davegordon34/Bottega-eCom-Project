import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import PurchaseDetail from './purchaseDetails';
import Purchases from './purchases';


class PurchaseHistory extends Component {
    render() {
        return (
            <div className='purchase-history'>
                <PageTitle className='purchase-history__page_title' title='Purchase History'/>
                <Purchases className='purchase-history__purchases' />
                <PurchaseDetail classeName='purchase-history__purchaseDetails' />
                <div className='purchase-history__border-bottom'></div>
            </div>
        )
    }
}

export default PurchaseHistory;