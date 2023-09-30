import Header from "@/components/header/header"
import cls from "./home.module.css"
import DealBlock from "@/components/dealsBlock/dealsBlock"
import Modal from "@/components/modal/modal"

export default function Home() {    
    return(
       <>
        <Header/>
        <div className={cls.blocks}>
            <DealBlock color={"blue"} title={"Backlog"} statusid={1} />
            <DealBlock color={"green"} title={"In progres"} statusid={2} />
            <DealBlock color={"orange"} title={"Testing"} statusid={3} />
            <DealBlock color={"yellow"} title={"Done"} statusid={4} />
            <DealBlock color={"red"} title={"Reales"} statusid={5} />
        </div>
     <Modal/>
       </>
    )
} 