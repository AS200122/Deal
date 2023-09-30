import { configureStore } from '@reduxjs/toolkit'
import modalShow from './index'

export const store = configureStore({
  reducer: {
    modalShow: modalShow,
  },
})