const initialState = {
    invloceList: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'setInvoiceList':
            return {
                ...state,
                configURL: action.payload
            };
        default:
            return state;
    }
};