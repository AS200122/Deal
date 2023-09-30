import cls from "./modal.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { setShow, createShow, setCreate, setEdit, setUpdate } from "@/store"
import { useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Select from "react-select"
import { userData } from "@/pages/api/fakeData"
import { status } from "@/pages/api/fakeData"

export default function Modal () {
    const modalShow = useSelector((state) => state.modalShow.show)
    const data = useSelector((state) => state.modalShow.data)
    const createData = useSelector((state) => state.modalShow.create)
    const dispatch = useDispatch()
    useEffect(() => {
        if (modalShow && action === "edit") {
            dispatch(setEdit())
      } 
    },[modalShow])
    const userSelectData = []
    userData.map(({id,userName}) => {
        userSelectData.push({
            value:id,
            label:userName
        })
      })
      const hundlerAdd = () => {
        dispatch(createShow({
            name:createData.name,
            desc:createData.desc,
            user_id:createData.user_id,
            status_id:createData.status_id,
            id:data[data.length - 1] ? data[data.length - 1].id + 1: 1
        }))
      }
      const colorStyles = {
        control:(styles) => ({
            ...styles,
            backgroundColor: "white",
            border:"none",
            outline: "none",
            borderBottom: "2px solid #0f0",
            color:"#333",
            fontWeight: "bold",
            width: "200px",
            height: "45px"
        }),
        option:(styles,) => {
            return{
                ...styles,
                 backgroundColor:"#333",
                 borderBottom:"2px solid white"
            }
        }
      }
      const editId = useSelector((state) => state.modalShow.editId)
      const action = useSelector((state) => state.modalShow.action)

    return(
        <div style={{display:modalShow ? "flex" : "none"}} className={cls.create}>
        <button className={cls.close} onClick={() => {
            if (modalShow === true) {
                dispatch(setShow({show:false}))
            }
        }}><FontAwesomeIcon style={{fontSize:45}} icon={faXmark} /></button>
            <input className={cls.inputCreate} type="text" placeholder="Name" value={createData.name} onChange={(e) => {
               dispatch(setCreate({
                key: "name",
                value: e.target.value
               }))
            //    setCreateData((state) =>  {
            //         return {
            //             ...state,
            //             name: e.target.value
            //         }
            //     })
            }}/>
            <input className={cls.inputCreate} type="text" placeholder="Desc" value={createData.desc} onChange={(e) => {
                    dispatch(setCreate({
                        key: "desc",
                        value: e.target.value
                       }))
            }}/>
            <div className={cls.select}>
            <Select
                styles={colorStyles}                    
                placeholder={"User"}
                options={userSelectData}
                value={{value:createData.user_id, label:  (userSelectData.filter((e) => e.value === createData.user_id).length> 0 ? userSelectData.filter((e) => e.value === createData.user_id)[0].label: 'Name' ) }}
                onChange={(e) => {
                    dispatch(setCreate({
                        key: "user_id",
                        value: e.value
                       }))
            }}/>
            </div>
            <div className={cls.select}>
            <Select
            styles={colorStyles}
            placeholder={"Deal"}
             options={status}
             value={{value:createData.status_id, label:(status.filter((e) => e.value === createData.status_id).length > 0 ? status.filter((e) => e.value === createData.status_id)[0].label : "Desc")}}
              onChange={(e) => {
                dispatch(setCreate({
                    key: "status_id",
                    value: e.value
                   }))
            }}/>
            </div>
            <button className={cls.createButton} onClick={() => {
                 if (action === "edit") {
                    dispatch(setUpdate())
                }else{
                    hundlerAdd()
                }
                dispatch(setShow({show:false}))  
            }}>{modalShow && action === "edit" ? "Edit" : "Create"}</button>
        </div>
    )
}