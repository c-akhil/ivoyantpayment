import { createSlice } from '@reduxjs/toolkit';

export const invoiceListSlice = createSlice({
    name: 'invoiceList',
    initialState: {
        invoiceList: [],
    },
    reducers: {
        setInvoiceList: (state, action) => {
            state.invoiceList = action.payload;
        },
    },
});

export const { setInvoiceList } = invoiceListSlice.actions;

export const loadInoviceListFromApi = (config) => dispatch => {

    // dispatch(setInvoiceList(response.data));

};

export const getInoviceList = state => state.invoiceList;

export default invoiceListSlice.reducer;
