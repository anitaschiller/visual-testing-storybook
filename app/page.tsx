import Card from "@/components/Card";
import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <h1>Welcome, Anita!</h1>
                <Button text={'Logout'}/>
            </div>
            <Link href="/feed">To my feed...</Link>
        </div>
    </main>
  );
}
