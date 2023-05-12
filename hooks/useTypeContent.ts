import { useEffect, useState } from "react";

const useTypeContent = (
  sentences: string[],
  speed: number,
  timeAtEnd: number,
  delay: number
) => {
  const [text, setText] = useState(sentences[0]);
  const [forwards, setForwards] = useState(false);
  const [index, setIndex] = useState(0);
  const [wait, setWait] = useState(true);

  useEffect(() => {
    setTimeout(() => setWait(false), delay);
  }, [delay]);

  useEffect(() => {
    if (wait) return;
    if (forwards) {
      if (sentences[index].length === text.length) {
        setTimeout(() => setForwards(false), timeAtEnd);
        return;
      }
      setTimeout(
        () => setText((prev) => sentences[index].substring(0, prev.length + 1)),
        speed
      );
    } else {
      if (text.length === 1) {
        if (index === sentences.length - 1)
          setTimeout(() => {
            setIndex(0);
            setForwards(true);
          }, 100);
        else
          setTimeout(() => {
            setIndex((prev) => prev + 1);
            setForwards(true);
          }, 100);
        return;
      }
      setTimeout(
        () => setText((prev) => sentences[index].substring(0, prev.length - 1)),
        speed
      );
    }
  }, [index, sentences, text, forwards, wait, speed, timeAtEnd]);

  return text;
};

export default useTypeContent;
