import React from 'react';

interface CardProps {
    backgroundColor: string;
}

const Card: React.FC<CardProps> = ({backgroundColor})=> (
    <section style={{background: backgroundColor, height: '50px', margin: '10px'}}>
        <h2>How to do Visual Testing with Storybook</h2>
    </section>
);

export default Card;
