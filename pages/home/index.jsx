import Header from "@/components/header/header"
import User from "@/components/user"
import cls from "./home.module.css"
import { allUsers } from "../api/fakeData"
import Deals from "@/components/deals/deals"
import DealBlock from "@/components/dealsBlock/dealsBlock"
import { deal } from "../api/fakeData"
import { useState } from "react"

export default function Home() {
   
    return(
       <>
        <Header/>
        <div className={cls.blocks}>
            <DealBlock/>
            <DealBlock/>
            <DealBlock/>
            <DealBlock/>
            <DealBlock/>
        </div>
       </>
    )
} 