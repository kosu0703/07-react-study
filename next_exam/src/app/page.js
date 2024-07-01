"use client"
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const handleToss = () => {
    router.push('/toss/checkout');
  };

  return(
    <>
      <button onClick={handleToss}>결제하기</button>
    </>
  )
}
