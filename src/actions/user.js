import {
    SET_USER_PURCHASES,
    SET_PURCHASES_DETAIL
} from './types';

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASES_DETAIL,
        payload: _id 
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 13.40,
                orderNumber: 'A0048560462',
                orderDate: new Date(),
                creditCard: '-9852',
                user: {
                    name: 'Rodger Smith',
                    shippingAddress: '1234 Anywhere Street'
                }
            },
            {
                _id: 1,
                total: 23.40,
                orderNumber: 'A8548248343',
                orderDate: new Date(),
                creditCard: '-4852',
                user: {
                    name: 'Jack Ryan',
                    shippingAddress: '1234 Anywhere Street'
                }
            },
            {
                _id: 2,
                total: 19.40,
                orderNumber: 'AB004886843',
                orderDate: new Date(),
                creditCard: '-5678',
                user: {
                    name: 'Joe Smith',
                    shippingAddress: '1234 Anywhere Street'
                }
            },
            {
                _id: 3,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-5678',
                user: {
                    name: 'Joe Smith',
                    shippingAddress: '1234 Anywhere Street'
                }
            },
            {
                _id: 4,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-5678',
                user: {
                    name: 'Joe Smith',
                    shippingAddress: '1234 Anywhere Street'
                }
            },
            {
                _id: 5,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-5678',
                user: {
                    name: 'Joe Smith',
                    shippingAddress: '1234 Anywhere Street'
                }
            },
            {
                _id: 6,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-5678',
                user: {
                    name: 'Joe Smith',
                    shippingAddress: '1234 Anywhere Street'
                }
            },
            {
                _id: 7,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-5678',
                user: {
                    name: 'Joe Smith',
                    shippingAddress: '1234 Anywhere Street'
                }
            }
        ]
    })
}