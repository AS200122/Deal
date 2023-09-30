import cls from "./deal.module.css"
import Image from "next/image"
import { allUsers } from "@/pages/api/fakeData"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong, faPenToSquare, faTrash, faComment } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux"
import { updateShow, setShow, deleteData, setAction, setCommentModal} from "@/store"
import CommentModal from "../commentModal/commentModal"

export default function Deal({id,user_id,name,desc,status_id}) {
    const dispatch = useDispatch()
    const modalShow = useSelector((state) => state.modalShow.commentModal)
    const x = allUsers.filter((item) => {
        if (item.id === user_id) {
            return item
        }
    })
    const dataShow = useSelector((state) => state.modalShow.show)
    const hundlerDelete = (id) => {
        dispatch(deleteData({id: id}) )    
    }
    return x && (
        <>
        <div className={cls.deal}>
            <div className={cls.dealInfo}>
                <p>{name}</p>
                <p>{desc}</p>
                <div className={cls.user}>
                    <p className={cls.responsPerson}>Responsible Person</p>
                    <div className={cls.person}>
                        <Image style={{borderRadius: "100%"}} width={25} height={25} src={"/1.jpeg"} />
                        <p className={cls.personName}>{x[0].name}</p>
                    </div>
                </div>
            </div>
            <div className={cls.dealRight}>
                {
                <>
                <div className={cls.smsNumber}>
                    <p>0</p>
                </div>
                <FontAwesomeIcon style={{fontSize:22, cursor:"pointer"}} icon={faComment} onClick={() => {
                    dispatch(setAction({
                        action:"comment",
                        id:id
                    }))
                    if(modalShow === false){
                        dispatch(setCommentModal({commentModal:true}))
                    }else{
                        dispatch(setCommentModal({commentModal:false}))
                    }
                }}/>
                </>
                }
        </div>
        <div className={cls.footer}>  
        {
            <>
                <FontAwesomeIcon className={cls.edit} style={{fontSize:20,cursor:"pointer",color:"#333"}} icon={faPenToSquare} onClick={() => {
                       if(dataShow === false){
                        dispatch(setShow({show:true}))
                        }else{
                            dispatch(setShow({show:false}))
                        }
                        dispatch(setAction({action:"edit", id:id}))
                }}/>
                <FontAwesomeIcon style={{fontSize:20, cursor:"pointer", color:"#333"}} icon={faTrash} onClick={() => {
                  hundlerDelete(id)
                  
                }} />
                </>
            }
    <div className={cls.goRight}>
                {
                    status_id !== 5 && 
                 <FontAwesomeIcon style={{fontSize:20, cursor:"pointer"}}  icon={faRightLong} onClick={() => {
                    // setData((state) => {
                    //     state.map((item) => {
                    //         if (item.id === id) {
                    //              item.status_id = status_id + 1
                    //         } 
                    //     })
                    //    return [
                    //     ...state
                    //    ]
                    // })
                    dispatch(updateShow({id:id, status_id:status_id}))
                }} />
            }
                </div>
        </div>
    </div>
    <CommentModal/>
    </>
    )
}

//tnayin login lineluc et useri id, modali bacel pakel 