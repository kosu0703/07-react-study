import Image from "next/image";
import img01 from "/public/book_images/react.jpg"

export default function Home() {
  return (
    <>
      <h1>Welcome</h1>
      <h2>Hello, Next~</h2>
      <p>
        {/* 해당 이미지를 따로 임포트 하지 않으면 너비, 높이는 반드시 지정 */}
        <Image alt="" src='/book_images/domain.jpg' width={100} height={100} />
      </p>
      <p>
        {/* 이미지를 임포트하면 너비와 높이는 선택사항이다. */}
        <Image alt="" src={img01} />
      </p>
    </>
  );
}
