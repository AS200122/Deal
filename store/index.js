import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  show:false,
  data:[],
  action:"",
  editId:0,
  create:{
    id:0,
    name:"",
    desc:"",
    status_id:0,
    user_id:0
  },
  comment: {
    message:"",
    ticket_id:0
  },
  comments:[],
  commentModal: false,
  search:"",
}

export const modalShow = createSlice({
  name: 'modalShow',
  initialState,
  reducers: {
    setShow:(state, action) => {
        state.show = action.payload.show
    },
    setAction:(state, action) => {
      state.action = action.payload.action
      state.editId = action.payload.id
    },
    createShow:(state,action) => {
      
      state.data = [
        ...state.data,
          {
            name:action.payload.name,
            desc:action.payload.desc,
            user_id:action.payload.user_id,
            status_id:action.payload.status_id,
            id:action.payload.id
          }
        ]
    },
    updateShow:(state,action) => {
      state.data = state.data.map((item) => {
        if (item.id === action.payload.id) {
             item.status_id = action.payload.status_id + 1
        } 
        return item
    }) 
    },
    deleteData:(state, action) => {
      const x = state.data.filter((item) => {
        return item.id !== action.payload.id
      })
      state.data = x
    },
    setEdit:(state) => {
      const editData = state.data.filter((item) => {
        return item.id == state.editId  
    })
      state.create = {
        id:editData[0].id,
        name:editData[0].name,
        desc:editData[0].desc,
        status_id:editData[0].status_id,
        user_id:editData[0].user_id
    }

    },
  setCreate:(state, action) => {
    state.create = {
      ...state.create,
      [action.payload.key] :  action.payload.value
    }
  },
  setUpdate:(state) => {
    const x = state.data.map((item) => {
      if (state.create.id === item.id) {
        item.name = state.create.name
        item.desc = state.create.desc
        item.status_id = state.create.status_id
        item.user_id = state.create.user_id
      }
      return item
    })
  },
  setComment:(state, action) => {
    state.comment = {
      message: action.payload.message,
      ticket_id: action.payload.ticket_id
    }
  },
  addComment:(state) => {
    state.comments = [
      ...state.comments,
      state.comment
    ]
  },
  setCommentModal:(state, action) => {
    state.commentModal = action.payload.commentModal
  },
  setSearch:(state, action) => {
    state.search = [
      ...state.search,
      state.search = action.payload.search
    ]
  }
},
})

export const { setShow, createShow, updateShow, deleteData, setAction, setCreate, setEdit, setUpdate, setComment, addComment, setCommentModal, setSearch} = modalShow.actions
export default modalShow.reducer