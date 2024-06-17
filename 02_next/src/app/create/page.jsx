import Image from "next/image";
import img02 from "/public/book_images/spring.jpg"

export default function Create(){
    return(
        <>
            Create!!
            <p><Image alt="" src={img02} width={100} height={100} /></p>
        </>
    )
}