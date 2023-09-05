import cls from "./user.module.css"

export default function User () {
    return(
            <div className={cls.user}>
                <div className={cls.user1}>
                    <h1>USER 1</h1>
                </div>
                <div className={cls.tiket}>

                </div>
                <div className={cls.tiket}>

                </div>
                <div className={cls.tiket}>

                </div>
                <button className={cls.button} onChange={() => {

                }}>ADD</button>
            </div>
    )
}