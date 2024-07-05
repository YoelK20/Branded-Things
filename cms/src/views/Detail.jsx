import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"
import Toastify from "toastify-js"

export default function Detail(){
    const [product, setProduct] = useState('')
    const { id } = useParams()
    // console.log("hahahahahahahahah");
}