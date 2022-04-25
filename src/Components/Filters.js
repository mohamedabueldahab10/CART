import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import Rating from './Rating';
import { CartState } from '../Context/Context';

const Filters = () => {
    const {
        productState: { byStock, byFastDelivery, sort, byRating}, 
        productDispatch,
    } = CartState();
    return (
        <div className='filters'>
            <span className='title'>Filter products</span>
            <span>
                <Form.Check
                    inline
                    label="Ascending"
                    name="group1"
                    type="radio"
                    id={'inline-1'}
                    onChange={() => 
                    productDispatch({
                        type: "SORT_BY_PRICE",
                        payload: "lowToHigh",
                    })
                }
                    defaultChecked={sort === "lowToHigh" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Descending"
                    name="group1"
                    type="radio"
                    id={'inline-2'}
                    onChange={() => 
                        productDispatch({
                            type: "SORT_BY_PRICE",
                            payload: "HighTolow",
                        })
                    }
                    defaultChecked={sort === "HighTolow" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Include Out of Stock"
                    name="group1"
                    type='checkbox'
                    id={'inline-3'}
                    onChange={() =>
                    productDispatch({
                        type: "FILTER_BY_STOCK"
                    })
                }
                defaultChecked={byStock}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Fast Delivery Only"
                    name="group1"
                    type='checkbox'
                    id={'inline-4'}
                    onChange={() =>
                        productDispatch({
                            type: "FILTER_BY_DELIVERY"
                        })
                    }
                    defaultChecked={byFastDelivery}
                />
            </span>
            <span>
                <label style={{ paddingRight: 10 }}>Rating: </label>
                <Rating 
                rating={byRating} 
                onClick={(i) => 
                    productDispatch({
                        type: "FILTER_BY_RATING",
                        payload: i + 1,
                    })
                }
                style={{ cursor: "pointer" }} />
            </span>
            <Button 
            variant="light"
            onClick={() =>
                productDispatch({
                    type: "CLEAR_FILTERS",
                })
            }
            >
            Clear Filters
            </Button>
        </div>
    );
};

export default Filters