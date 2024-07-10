import React from 'react';
import './button.css';
import Button from './button';


const ButtonGroup: React.FC = () => {
    return (
        <div className="flex gap-2">
        <a href="#/signUp"><Button>Create an Account</Button></a>
        <a href="#/signIn"><Button>Login</Button></a>
    </div>
    );
};

export default ButtonGroup;
