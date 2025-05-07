'use client';
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
  <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Todo with AI</h1>
      <p className="text-lg">Your AI-powered task manager</p>
      <button onClick={() => router.push("/Login")} className="">LOGIN</button>
    </main>
  </>
  );
}
