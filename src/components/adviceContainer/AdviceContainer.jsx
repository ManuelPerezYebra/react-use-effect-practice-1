import { useState, useEffect, useCallback } from 'react';
import { StyledContainer } from './advicecontainer.styles';

const AdviceContainer = () => {
    const [advice, setAdvice] = useState('');
    const [adviceNumber, setAdviceNumber] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAdvice = async (randomNumber) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://api.adviceslip.com/advice/${randomNumber}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setAdvice(data.slip.advice);
            setAdviceNumber(data.slip.id);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    const getRandomAdvice = useCallback(() => {
        const randomNumber = Math.floor(Math.random() * 100);
        console.log(randomNumber);
        fetchAdvice(randomNumber);
    }, []); // No hay dependencias porque no dependemos de valores que cambian

    useEffect(() => {
        getRandomAdvice();
    }, [getRandomAdvice]); // Incluimos getRandomAdvice en las dependencias

    if (loading) return <StyledContainer><p>Loading...</p></StyledContainer>;
    if (error) return <StyledContainer><p>Error: {error.message}</p></StyledContainer>;

    return (
        <StyledContainer>
            <p>ADVICE #{adviceNumber}</p>
            <h1>{advice}</h1>
            <img src="pattern-divider-desktop.svg" alt="Pattern Divider" />
            <button onClick={getRandomAdvice}>
                <img src="icon-dice.svg" alt="Get new advice" />
            </button>
        </StyledContainer>
    );
};

export default AdviceContainer;
