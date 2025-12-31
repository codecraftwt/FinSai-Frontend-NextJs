import { useState, useEffect, useRef } from 'react';

// Custom hook for awards section sliding animation with overlap
export const useAwardsAnimation = (totalAwards) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1 % totalAwards);
  const [currentState, setCurrentState] = useState("entering");
  const [nextState, setNextState] = useState("hidden");
  const timeoutsRef = useRef([]);

  useEffect(() => {
    if (totalAwards === 0) return;

    const runCycle = () => {
      timeoutsRef.current = [];
      setCurrentState("entering");

      const enterTimeout = setTimeout(() => {
        setCurrentState("visible");

        const visibleTimeout = setTimeout(() => {
          setCurrentState("exiting");
          setNextState("entering");

          const exitTimeout = setTimeout(() => {
            const newCurrent = nextIndex;
            const newNext = (nextIndex + 1) % totalAwards;
            setCurrentIndex(newCurrent);
            setNextIndex(newNext);
            setCurrentState("entering");
            setNextState("hidden");
            runCycle(); // loop
          }, 450);

          timeoutsRef.current.push(exitTimeout);
        }, 1400);

        timeoutsRef.current.push(visibleTimeout);
      }, 800);

      timeoutsRef.current.push(enterTimeout);
    };

    runCycle();

    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, [totalAwards]);

  return { currentIndex, nextIndex, currentState, nextState };
};

// Custom hook for market cards ticker animation
export const useMarketAnimation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tickerRef = useRef(null);
  const cardHeight = 70;
  const gap = 8;
  const rowHeight = cardHeight + gap;

  useEffect(() => {
    const interval = setInterval(() => {
      const items = tickerRef?.current?.children;

      if (!items || items.length === 0) return;

      for (let i = 0; i < items?.length; i++) {
        items[i].classList.remove("active");
      }

      items[activeIndex].classList?.add("active");

      tickerRef.current.style.transition = "transform 0.9s cubic-bezier(.35,.6,.29,1)";
      tickerRef.current.style.transform = `translateY(${(-25) - activeIndex * rowHeight}px)`;

      let nextIndex = activeIndex + 1;
      if (nextIndex >= items.length) {
        setTimeout(() => {
          tickerRef.current.style.transition = "transform 2s cubic-bezier(.29,.8,.25,1)";
          tickerRef.current.style.transform = `translateY(80px)`;
          setActiveIndex(0);
        }, 1000);
      } else {
        setActiveIndex(nextIndex);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return { activeIndex, setActiveIndex, tickerRef };
};

// Custom hook for phone text list scrolling animation
export const usePhoneTextAnimation = (features) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);
  const listRef = useRef(null);
  const lineHeight = 100;
  const moveTime = 600;
  const stopTime = 1500;
  let currentLine = 0;

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;

    el.style.transform = `translateY(10px)`;

    function moveNext() {
      currentLine = (currentLine + 1) % features.length;
      setCurrentIndex(currentLine);

      el.style.transition = `transform ${moveTime}ms ease`;
      el.style.transform = `translateY(-${currentLine * lineHeight }px)`;

      setTimeout(moveNext, moveTime + stopTime);
    }

    const startTimer = setTimeout(() => moveNext(), 1000);

    return () => clearTimeout(startTimer);
  }, []);

  // Sync card visibility with phone text animation
  useEffect(() => {
    const cardOrder = [0, 3, 1, 4, 2, 5];
    setVisibleCards(cardOrder.slice(0, currentIndex + 1));
  }, [currentIndex]);

  return { listRef, currentIndex, visibleCards };
};

// Custom hook for platforms card cycling animation
export const usePlatformsAnimation = (platforms) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prev) => (prev + 1) % platforms.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [platforms.length]);

  return { currentCardIndex, setCurrentCardIndex };
};

// Custom hook for tab auto-switching animation
export const useTabAnimation = (tabsData) => {
  const [activeTab, setActiveTab] = useState('tab1');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(prev => {
        const currentIndex = tabsData.findIndex(tab => tab.id === prev);
        const nextIndex = (currentIndex + 1) % tabsData.length;
        return tabsData[nextIndex].id;
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return { activeTab, setActiveTab };
};

// Custom hook for active step cycling animation
export const useStepAnimation = () => {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % 4) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return { activeStep, setActiveStep };
};

// Custom hook for "All Tools" section sliding animation with bounce effect
export const useToolAnimation = (totalTools) => {
  const [activeToolIndex, setActiveToolIndex] = useState(0);
  const [toolAnimationState, setToolAnimationState] = useState("entering");

  useEffect(() => {
    if (totalTools === 0) return;

    let enterTimeout, visibleTimeout, exitTimeout;

    const runAnimationCycle = () => {
      // Enter (smooth elastic)
      setToolAnimationState("entering");

      enterTimeout = setTimeout(() => {
        setToolAnimationState("visible");

        // Visible (short duration)
        visibleTimeout = setTimeout(() => {
          setToolAnimationState("exiting");

          // Exit → switch to next tool
          exitTimeout = setTimeout(() => {
            setActiveToolIndex((prev) => (prev + 1) % totalTools);
            setToolAnimationState("entering");
          }, 450); // exit duration
        }, 1400); // visible duration
      }, 800); // entering duration
    };

    runAnimationCycle();

    return () => {
      clearTimeout(enterTimeout);
      clearTimeout(visibleTimeout);
      clearTimeout(exitTimeout);
    };
  }, [activeToolIndex, totalTools]);

  return { activeToolIndex, toolAnimationState };
};
