import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import hero from '../../assets/hero.gif';
import feature1 from '../../assets/feature1.png';
import feature2 from '../../assets/feature2.png';
import feature3 from '../../assets/feature3.png';
import PalestineTimeline from '../PalestineTimeline/PalestineTimeline.jsx';

function Counter({ target, duration = 1000 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);
  const start = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true); 
        }
      },
      { threshold: 0.9 } 
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, [hasAnimated]);

  const animateCount = () => {
    const end = parseInt(target.replace('+', ''), 10);
    const totalSteps = Math.floor(duration / 30);
    const increment = end / totalSteps;

    const interval = setInterval(() => {
      start.current += increment;

      if (start.current >= end) {
        clearInterval(interval);
        setCount(end);
      } else {
        setCount(Math.ceil(start.current));
      }
    }, 30);
  };

  return (
    <h3 ref={counterRef} className="text-4xl font-bold text-white">
      {count}+
    </h3>
  );
}

export default function HomePage() {
  const phrases = [
    "Your Digital Resistance Starts Here!",
    "Empower Change with Every Click",
    "Act Ethically, Act Boldly",
  ];

  const [displayedText, setDisplayedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let speed; 
    if (isDeleting) {
      speed = 50;
    } else {
      speed = 100;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 1000); 
        }
      } else {
        setDisplayedText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, phrases]);
  return (
    <div className="min-h-screen text-[#F5F5F5] px-4 md:px-2 lg:px-4">
      <section className="grid md:grid-cols-2 gap-10 items-center py-6">
        <div>
          <h2 title="TagLines" className="text-4xl md:text-5xl font-bold text-[#5C6BC0] leading-tight h-24">
            {displayedText}
            <span className="border-r-2 border-[#5C6BC0] animate-pulse ml-1" />
          </h2>
          <p className="mt-10 text-lg md:text-xl text-[#B0BEC5] max-w-xl">
            Take a stand - boycott unethical companies and discover better alternatives, raise your voice through powerful emails, and stay informed. 
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/boycott" className="bg-[#D7CCC8] text-[#1A1A1A] hover:bg-[#5C6BC0] hover:text-white px-6 py-3 rounded-lg font-semibold transition">
              Discover alternatives
            </Link>
            <Link to="/mailprotest" className="bg-[#5C6BC0] text-white hover:bg-[#3949AB] px-6 py-3 rounded-lg font-semibold transition">
              Send Email Proposals
            </Link>
          </div>
        </div>
        <div>
          <img src={hero} alt="Hero" className="cursor-grab w-full rounded-xl shadow-lg" />
        </div>
      </section>

      <section className="text-center my-10">
        <blockquote className="italic text-[#90A4AE] text-lg max-w-3xl mx-auto cursor-crosshair">
          "An apple fall from the tree and Isaac Newton discovered gravity.<br/>Thousands of Palestinians fall and no one has discovered Humanity."
        </blockquote>
        <Link to="/about" className="block mt-4 text-[#5C6BC0] hover:underline">
          Learn why we stand with Palestine ⇨
        </Link>
      </section>
      
      <section className="my-20 grid md:grid-cols-3 gap-10">
        <div className="text-center">
          <img src={feature1} title= "Feature 1" alt="Boycott Companies" className="cursor-grab w-full h-80 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold text-[#5C6BC0]">Boycott Lookup</h3>
          <p className="mt-2 text-[#B0BEC5]">Search for unethical companies and see ethical alternatives on broad basis.</p>
          <Link to="/boycott" className="inline-block mt-3 text-[#D7CCC8] hover:text-[#5C6BC0] font-medium">
            Explore Unethical Companies ⇨
          </Link>
        </div>

        <div className="text-center">
          <img src={feature2} title= "Feature 2" alt="Protest Mail" className="cursor-grab w-full h-80 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold text-[#5C6BC0]">One-Click Mail</h3>
          <p className="mt-2 text-[#B0BEC5]">Send powerful pre-written proposal emails to decision-makers.</p>
          <Link to="/mailprotest" className="inline-block mt-3 text-[#D7CCC8] hover:text-[#5C6BC0] font-medium">
            Send Now ⇨
          </Link>
        </div>

        <div className="text-center">
          <img src={feature3} title= "Feature 3" alt="Suggest" className="cursor-grab w-full h-80 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold text-[#5C6BC0]">Suggest better alternatives detailed</h3>
          <p className="mt-2 text-[#B0BEC5]">A B2B feature that suggests ethical alternatives to reduce dependency on unethical companies.</p>
          <Link to="/suggestions" className="inline-block mt-3 text-[#D7CCC8] hover:text-[#5C6BC0] font-medium">
            Suggest Now ⇨
          </Link>
        </div>
      </section>

      <section className="text-center py-10 bg-[#2A2A2A] rounded-xl mt-20">
        <h2 className="text-2xl font-bold text-[#5C6BC0]">Our Collective Impact</h2>
        <p className="text-[#B0BEC5] mt-2">Here’s what we’ve achieved together:</p>
        <div className="mt-8 flex flex-wrap justify-center gap-12">
          <div>
          <Counter target="800+" />
            <p className="text-[#B0BEC5]">Companies Listed</p>
          </div>
          <div>
          <Counter target="50+" />
            <p className="text-[#B0BEC5]">Detailed Suggestions Listed</p>
          </div>
                    <div>
          <Counter target="5+" />
            <p className="text-[#B0BEC5]">Books Added</p>
          </div>
        </div>
      </section>
    <PalestineTimeline />


    </div>
  );
}