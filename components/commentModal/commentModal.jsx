import cls from "./commentModal.module.css"
import { useDispatch, useSelector } from "react-redux"
import { setComment, addComment, setCommentModal } from "@/store"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function CommentModal() {
    const comment = useSelector((state) => state.modalShow.comments)
    const ticketId = useSelector((state) => state.modalShow.editId)
    const modalShow = useSelector((state) => state.modalShow.commentModal)
    const dispatch = useDispatch()
    return(
        <div style={{display:modalShow ? "flex" : "none"}} className={cls.commentModal}>
            <div className={cls.header}>
            <div className={cls.comment}>
                {comment.map((item) => {
                    return <p className={cls.commentText}>
                        {item.message}
                    </p>
                })}
                {/* <FontAwesomeIcon className={cls.clear} icon={faBroom} onClick={() => {
                   
                }} /> */}
            </div>
            <FontAwesomeIcon className={cls.close} icon={faXmark} onClick={() => {
                   if(modalShow === true){
                    dispatch(setCommentModal({commentModal:false}))
                }
            }}/>
            </div>
            <div className={cls.commentType}>
                <textarea className={cls.modaltext} placeholder="Message ..." name="" id=""  cols="60" rows="50" onChange={(e) => {
                   dispatch(setComment({
                    message:e.target.value,
                    ticket_id:ticketId
                   })) 
                }}></textarea>
                <button onClick={() => {
                    dispatch(addComment())
                }} className={cls.modalButton}>Comment</button>
            </div>
        </div>
    )
}

//