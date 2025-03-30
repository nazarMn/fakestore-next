import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container not-found">
      <h1>404 | Сторінку не знайдено 😢</h1>
      <Link href="/" className="back-home">🔙 Повернутися на головну</Link>
    </div>
  );
}
