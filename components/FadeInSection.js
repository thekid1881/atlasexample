'use client';

import { useRef, useEffect, useState } from 'react';

export default function FadeInSection({ children, className = '' }) {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(entry.isIntersecting);                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`
                transform transition-all duration-1000 delay-200 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                ${className}
            `}
        >
            {children}
        </div>
    );
}