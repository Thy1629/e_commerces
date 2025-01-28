import { configureStore } from '@reduxjs/toolkit'
import cartSlicer from '../store/carts_slicer';
export default configureStore({
  reducer: {
    cart : cartSlicer
  }
})