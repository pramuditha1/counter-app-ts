import React, { CSSProperties, useState } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    // css styles
    const styles: Record<string, CSSProperties> = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '20px'
        },
        button: {
            padding: '8px 16px',
            margin: '5px',
            borderRadius: '5px',
            backgroundColor: 'rgb(255 129 0)',
            color: '#fff',
            cursor: 'pointer',
            border: 'none',
            width: '100px'
        },
        heading: {
            color: 'white',
            fontFamily: 'inherit',
            fontSize: 'x-large'
        }
    };

    // increase button click
    const increase = () => {
        if (count < 10) {
            setCount(count + 1);
        } else {
            alert("Count can't be more than 10");
        }
    };

    // decrease button click
    const decrease = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            alert("Count can't be less than 0");
        }
    };

    // reset button click
    const reset = () => {
        setCount(0);
    };

    return (
        <div style={styles.container}>
            <p style={styles.heading}>Count: {count}</p>
            <button style={styles.button} onClick={increase}>
                Increase
            </button>
            <button style={styles.button} onClick={decrease}>
                Decrease
            </button>
            <button style={styles.button} onClick={reset}>
                Reset
            </button>
        </div>
    );
};

export default Counter;