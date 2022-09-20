import {useEffect, useState} from 'react';

const useTypeContent = (sentences: string[], speed: number, timeAtEnd: number, delay: number) => {

    const [text, setText] = useState(sentences[0]);
    const [forwards, setForwards] = useState(false);
    const [index, setIndex] = useState(0);
    const [wait, setWait] = useState(true)

    useEffect(() => {
        setTimeout(() => setWait(false), delay);
    },[])

    useEffect(() => {
        if(wait) return;
        if(forwards) {
            if(sentences[index].length === text.length) {
                setTimeout(() => setForwards(false), timeAtEnd);
                return;
            }
            setTimeout(() => setText(prev => sentences[index].substring(0, prev.length+1)), speed);
        } else {
            if(text.length === 0) {
                setTimeout(() => setForwards(true), 100);
                if(index === sentences.length-1) setIndex(0);
                else setIndex(prev => prev + 1);
                return;
            }
            setTimeout(() => setText(prev => sentences[index].substring(0, prev.length-1)), speed);
        }
    })

    return text
};

export default useTypeContent;