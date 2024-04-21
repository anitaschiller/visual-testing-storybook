import React from 'react';
import Button from "@/components/Button";

interface CardProps {
    backgroundColor: string;
}

const Card: React.FC<CardProps> = ({backgroundColor})=> (
    <section style={{background: backgroundColor, padding: '10px', maxWidth: '400px', borderRadius: '5px', border: '2px solid purple'}}>
        <h2>Fun fun fun</h2>
        <p>I'd tell you a construction joke, but I'm still working on it.</p>
        <Button text={'Click me!'}/>
    </section>
);

export default Card;
