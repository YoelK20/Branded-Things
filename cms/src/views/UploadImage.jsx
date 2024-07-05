// import axios from "axios";
// import Toastify from "toastify-js";
// import { baseUrl } from "../utils/baseUrl";
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// export default function UploadImg(){
//     const [products, setProduct] = useState([])
//     const navigate = useNavigate()
//     const {id} = useParams()

//     async function fetchProduct(){
//         try {
//             const {data} = axios.get(`${baseUrl}/products/${id}`, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.access_token}`
//                 }
//             })
//             setProduct(data.products)
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     useEffect(() => {
//         fetchProduct()
//     },[]);

//     async function handleSubmit(ev){
//         ev.preventDefault()
//         try {
//             const data = ""
//         } catch (error) {
            
//         }
//     }
// }