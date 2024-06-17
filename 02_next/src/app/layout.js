import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1><Link href="/">WEB</Link></h1>
        <ol>
          <li><Link href="/read/1">HTML</Link></li>
          <li><Link href="/read/2">CSS</Link></li>
          <li><Link href="/read/3">JS</Link></li>
          <li><Link href="/itemList">ItemList(외부서버)</Link></li>
          <li><Link href="/guestBookList">GuestBookList(SpringBoot서버)</Link></li>
          <li><Link href="/login">Login(SpringBoot서버)</Link></li>
        </ol>
        {children}
        <ul>
          <li><Link href="/create">Create</Link></li>
          <li>Update</li>
          <li><input type="button" value="delete" /></li>
        </ul>
      </body>
    </html>
  );
}
