import { configureStore } from '@reduxjs/toolkit';
import invoiceListReducer from './table/invoicelistreducer';

export default configureStore({
  reducer: {
    invoiceList: invoiceListReducer,
  },
});
