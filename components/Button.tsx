import React from 'react';

interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({text}) => {
    return (
        <button style={{padding: '10px', borderRadius: '10px', border: '2px solid purple', backgroundColor: 'hotpink', color: 'purple'}}>{text}</button>
    );
};

export default Button;
