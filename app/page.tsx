"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
    SiSolidity,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiRust,
    SiJavascript
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Custom Icons for niche technologies
const CircomIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 19H22L12 2ZM12 6L18 16H6L12 6Z" />
    </svg>
);

const NoirIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4H4V20H20V4ZM18 18H6V6H18V18Z" />
        <path d="M8 8V16L16 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
);

// SVG Icons
const GitHubIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
);

const ExternalLinkIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);

// Data organized chronologically
const experience = [
    { year: "2018-2022", title: "Freelancer Full-Stack", place: "Independent", type: "work" },
    { year: "2022-2024", title: "Freelancer Blockchain", place: "Independent", type: "work" },
    { year: "2023-present", title: "Technical Contributor", place: "UltravioletaDAO", type: "work" },
    { year: "2024-present", title: "Technical Ambassador", place: "Avalanche Team1", type: "work" },
    { year: "2025", title: "CTO", place: "Buckspay", type: "work" },
    { year: "2025", title: "Professor", place: "Universidad Javeriana de Cali", type: "work" },
    { year: "2025-present", title: "Founder", place: "Glemo", type: "work" },
];

const education = [
    { year: "2025", title: "Smart Contract Security", place: "Cyfrin" },
    { year: "2025", title: "Noir Programming And ZK Circuits", place: "Cyfrin" },
    { year: "2024", title: "Onchain Applications Development on Ethereum", place: "EthBogota" },
    { year: "2024", title: "Blockchain Development Bootcamp +70hrs", place: "Blockchain Bites" },
    { year: "2023", title: "Avalanche Fundamentals", place: "Avalanche Academy" },
    { year: "2023", title: "Advanced Web3 Applications Program", place: "Colledge" },
    { year: "2023", title: "Ethereum Developer Pack", place: "EthKipu" },
    { year: "2022", title: "Blockchain Development with IoT", place: "Comfenalco" },
    { year: "2019-present", title: "Digital Entertainment Design Engineering", place: "UPB" },
    { year: "2017-2018", title: "Software Analysis and Development Technician", place: "CENSA" },
];

const projects = [
    { name: "HighBlock", year: "2022", solo: true, github: "", web: "https://www.instagram.com/highblockco/" },
    { name: "Stream Fighters Bets", year: "2023", solo: true, github: "https://github.com/DavidZapataOh/GoerliBets", web: "https://goerli-bets-nfax.vercel.app/" },
    { name: "Avalanche Privacy Hub", year: "Oct 2025", solo: true, zk: true, github: "", web: "" },
    { name: "avalanche-circom-kit-hardhat", year: "Nov 2025", solo: true, zk: true, github: "https://github.com/DavidZapataOh/avalanche-circom-kit-hardhat", web: "" },
    { name: "Sponge Protocol", year: "Nov 2025", solo: false, zk: true, github: "https://github.com/DavidZapataOh/sponge-protocol-back", web: "" },
    { name: "Sincerin Protocol", year: "Nov 2025", solo: true, zk: true, github: "https://github.com/DavidZapataOh/sincerin-protocol", web: "https://sincerin-protocol.vercel.app/" },
    { name: "EventMetrics", year: "2025", solo: false, github: "", web: "https://www.eventmetrycs.xyz" },
    { name: "Raffero", year: "Nov-Dec 2025", solo: false, zk: true, github: "", web: "https://zk-blind-roulette.vercel.app/" },
    { name: "avalanche-noir-kit-foundry", year: "Dec 2025", solo: true, zk: true, github: "https://github.com/DavidZapataOh/avalanche-noir-kit-foundry", web: "" },
    { name: "Simulador Mundial 2026", year: "Dec 2025", solo: true, github: "https://github.com/DavidZapataOh/Simulador-Mundial-2026", web: "https://simulador-mundial-2026.vercel.app/" },
    { name: "Avalanche Rewind", year: "Dec 2025", solo: true, github: "https://github.com/DavidZapataOh/avalanche-rewind-2025", web: "https://avalanche-rewind.vercel.app/" },
];

const skills = [
    { name: "Solidity", icon: <SiSolidity /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React/NextJs", icon: <SiNextdotjs /> },
    { name: "NodeJs", icon: <SiNodedotjs /> },
    { name: "Circom", icon: <CircomIcon /> },
    { name: "Noir", icon: <NoirIcon /> },
    { name: "Rust", icon: <SiRust /> },
];

const missions = [
    { name: "Ethereum Colombia 2023", type: "winner" },
    { name: "Avalanche Medellín 2024", type: "winner" },
    { name: "Avalanche Bogotá 2024", type: "winner" },
    { name: "Ethereum Argentina 2024", type: "winner" },
    { name: "Ethereum Bolivia 2024", type: "mentor" },
    { name: "Avalanche Summit 2024", type: "mentor" },
    { name: "Avalanche Medellín 2025", type: "organizer" },
    { name: "Ethereum Bolivia 2025", type: "mentor" },
    { name: "ZKET 2025", type: "fellow" },
    { name: "Invisible Garden 2025", type: "fellow" },
    { name: "Uniswap Cup", type: "player" },
    { name: "Stellar House Buenos Aires 2025", type: "fellow" },

];

const stats = [
    { number: 213, suffix: "", label: "Deployed Contracts" },
    { number: 23, suffix: "%", label: "Mainnet Deployments" },
    { number: 11, suffix: "", label: "Projects" },
    { number: 6, suffix: "", label: "ZK Projects" },
    { number: 7, suffix: "", label: "Hackathons Won" },
    { number: 9, suffix: "", label: "Chains Mastered" },
];

const contacts = [
    { label: "Email", value: "davidzapata5885@gmail.com", href: "mailto:davidzapata5885@gmail.com" },
    { label: "GitHub", value: "DavidZapataOh", href: "https://github.com/DavidZapataOh" },
    { label: "X", value: "DavidZapataOh", href: "https://x.com/DavidZapataOh" },
    { label: "LinkedIn", value: "David Zapata", href: "https://linkedin.com/in/davidzapatao" },
    { label: "Telegram", value: "davidzo", href: "https://t.me/davidzo" },
    { label: "Instagram", value: "davidzapatao", href: "https://instagram.com/davidzapatao" },
];

// Firefly component
function Firefly({ id }: { id: number }) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const el = ref.current;
        const startX = Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000);
        const startY = Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000);

        gsap.set(el, { x: startX, y: startY });

        const animate = () => {
            gsap.to(el, {
                x: `+=${(Math.random() - 0.5) * 200}`,
                y: `+=${(Math.random() - 0.5) * 200}`,
                duration: 3 + Math.random() * 4,
                ease: "sine.inOut",
                onComplete: animate,
            });
        };

        gsap.to(el, {
            opacity: Math.random() * 0.6 + 0.2,
            scale: Math.random() * 0.5 + 0.5,
            duration: 2 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: Math.random() * 2,
        });

        animate();
    }, []);

    return (
        <div
            ref={ref}
            className="firefly"
            style={{
                left: 0,
                top: 0,
                animationDelay: `${id * 0.3}s`,
            }}
        />
    );
}

// Click particle effect
function useClickParticles() {
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const particleCount = 8;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement("div");
                particle.className = "click-particle";
                particle.style.left = `${e.clientX}px`;
                particle.style.top = `${e.clientY}px`;
                document.body.appendChild(particle);

                const angle = (i / particleCount) * Math.PI * 2;
                const velocity = 50 + Math.random() * 50;

                gsap.to(particle, {
                    x: Math.cos(angle) * velocity,
                    y: Math.sin(angle) * velocity,
                    opacity: 0,
                    scale: 0,
                    duration: 0.8 + Math.random() * 0.4,
                    ease: "power2.out",
                    onComplete: () => particle.remove(),
                });
            }
        };

        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, []);
}

// Counter animation
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || hasAnimated) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    const duration = 2000;
                    const start = Date.now();

                    const animate = () => {
                        const elapsed = Date.now() - start;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * target));

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };

                    animate();
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [target, hasAnimated]);

    return <span ref={ref}>{count}{suffix}</span>;
}

// Interactive Profile Component (Code Ghost + Noir Silhouette Hybrid)
function InteractiveProfile() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 160, y: 160 });
    const [imageLoaded, setImageLoaded] = useState(false);
    const animationRef = useRef<number>(0);
    const frameCountRef = useRef(0);

    // ASCII characters ordered by density (dark to light)
    const ASCII_CHARS = ['@', '#', 'S', '%', '?', '*', '+', ';', ':', ',', '.', ' '];
    const CODE_CHARS = ['0', '1', 'Z', 'K', 'E', 'T', 'H', '/', '\\', '|', '-', ' '];

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = '/profile.jpeg';

        img.onload = () => {
            setImageLoaded(true);

            // Canvas dimensions
            const size = 320;
            canvas.width = size;
            canvas.height = size;

            // Cell size for ASCII grid
            const cellSize = 8;
            const cols = Math.floor(size / cellSize);
            const rows = Math.floor(size / cellSize);

            // Create off-screen canvas for image processing
            const offCanvas = document.createElement('canvas');
            offCanvas.width = cols;
            offCanvas.height = rows;
            const offCtx = offCanvas.getContext('2d');
            if (!offCtx) return;

            // Draw scaled-down image to get brightness values
            offCtx.drawImage(img, 0, 0, cols, rows);
            const imageData = offCtx.getImageData(0, 0, cols, rows);
            const pixels = imageData.data;

            // Store brightness values
            const brightnessMap: number[][] = [];
            for (let y = 0; y < rows; y++) {
                brightnessMap[y] = [];
                for (let x = 0; x < cols; x++) {
                    const i = (y * cols + x) * 4;
                    const r = pixels[i];
                    const g = pixels[i + 1];
                    const b = pixels[i + 2];
                    // Weighted brightness (human perception)
                    brightnessMap[y][x] = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
                }
            }

            // Animation function
            const animate = () => {
                frameCountRef.current++;
                ctx.fillStyle = '#000';
                ctx.fillRect(0, 0, size, size);

                ctx.font = `${cellSize}px monospace`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';

                for (let y = 0; y < rows; y++) {
                    for (let x = 0; x < cols; x++) {
                        const brightness = brightnessMap[y][x];

                        // Map brightness to character index
                        const charIndex = Math.floor((1 - brightness) * (CODE_CHARS.length - 1));

                        // Add subtle random flicker every few frames
                        const shouldFlicker = Math.random() > 0.995;
                        const flickerOffset = shouldFlicker ? Math.floor(Math.random() * 3) - 1 : 0;
                        const finalIndex = Math.max(0, Math.min(CODE_CHARS.length - 1, charIndex + flickerOffset));

                        const char = CODE_CHARS[finalIndex];

                        // Color based on brightness with slight green tint for matrix feel
                        const intensity = Math.floor(brightness * 200 + 55);
                        const greenBoost = Math.floor(brightness * 30);
                        ctx.fillStyle = `rgb(${intensity - 20}, ${intensity + greenBoost}, ${intensity - 20})`;

                        const px = x * cellSize + cellSize / 2;
                        const py = y * cellSize + cellSize / 2;
                        ctx.fillText(char, px, py);
                    }
                }

                animationRef.current = requestAnimationFrame(animate);
            };

            animate();
        };

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!containerRef.current) return;

        const handleMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setMousePos({ x, y });
        };

        const container = containerRef.current;
        container.addEventListener("mousemove", handleMove);
        container.addEventListener("mouseenter", () => setIsHovered(true));
        container.addEventListener("mouseleave", () => setIsHovered(false));

        return () => {
            container.removeEventListener("mousemove", handleMove);
            container.removeEventListener("mouseenter", () => setIsHovered(true));
            container.removeEventListener("mouseleave", () => setIsHovered(false));
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-12 cursor-none select-none"
        >
            {/* ASCII Art Base Layer (Code Ghost) */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full rounded-full overflow-hidden"
                style={{
                    filter: 'blur(0.3px)',
                    opacity: imageLoaded ? 1 : 0,
                    transition: 'opacity 0.5s ease'
                }}
            />

            {/* Circular mask for the canvas */}
            <div
                className="absolute inset-0 w-full h-full rounded-full border-2 border-gray-800/50"
                style={{
                    background: 'transparent',
                    boxShadow: 'inset 0 0 30px rgba(0,0,0,0.8)'
                }}
            />

            {/* Light / Revealed Layer - Real Photo with Spotlight */}
            <div
                className="absolute inset-0 w-full h-full rounded-full overflow-hidden border-2 border-white/10"
                style={{
                    maskImage: `radial-gradient(circle 90px at ${mousePos.x}px ${mousePos.y}px, black 10%, transparent 80%)`,
                    WebkitMaskImage: `radial-gradient(circle 90px at ${mousePos.x}px ${mousePos.y}px, black 10%, transparent 80%)`,
                    filter: "grayscale(100%) contrast(1.2) brightness(1.1)",
                    opacity: isHovered ? 1 : 0,
                    transition: "opacity 0.3s ease"
                }}
            >
                <img
                    src="/profile.jpeg"
                    alt="David Zapata"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Ambient Glow */}
            <div
                className="absolute -inset-4 rounded-full bg-white/5 blur-2xl -z-10"
                style={{
                    opacity: isHovered ? 0.4 : 0.15,
                    transition: "opacity 0.5s ease"
                }}
            />

            {/* Subtle scanlines effect */}
            <div
                className="absolute inset-0 w-full h-full rounded-full pointer-events-none"
                style={{
                    background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 1px, transparent 1px, transparent 3px)',
                    opacity: 0.3
                }}
            />
        </div>
    );
}

export default function Home() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useClickParticles();

    useEffect(() => {
        // Initial loading animation
        const timer = setTimeout(() => {
            setIsLoaded(true);
            const loadingEl = document.querySelector(".loading") as HTMLElement;
            if (loadingEl) {
                gsap.to(loadingEl, {
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.inOut",
                    onComplete: () => loadingEl.remove(),
                });
            }
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            // Profile animation
            gsap.from(".hero-profile", {
                scale: 0.8,
                opacity: 0,
                duration: 1.5,
                ease: "power2.out",
            });

            // Hero animation
            gsap.from(".hero-name", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                delay: 0.3,
                ease: "power3.out",
            });

            gsap.from(".hero-subtitle", {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 0.6,
                ease: "power3.out",
            });
        }
    }, [isLoaded]);

    useGSAP(() => {
        if (!isLoaded) return;

        // Section titles
        gsap.utils.toArray<HTMLElement>(".section-title").forEach((el) => {
            gsap.fromTo(el,
                { opacity: 0, y: 30 },
                {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                }
            );
        });

        // Timeline items stagger
        gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item, i) => {
            gsap.fromTo(item,
                { opacity: 0, x: -30 },
                {
                    scrollTrigger: {
                        trigger: item,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    delay: i * 0.03,
                    ease: "power3.out",
                }
            );
        });

        // Education items stagger (for new design)
        gsap.utils.toArray<HTMLElement>(".education-item").forEach((item, i) => {
            gsap.fromTo(item,
                { opacity: 0, y: 20 },
                {
                    scrollTrigger: {
                        trigger: item,
                        start: "top 95%",
                        toggleActions: "play none none none",
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    delay: i * 0.05,
                    ease: "power3.out",
                }
            );
        });

        // Project cards stagger
        gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, i) => {
            gsap.fromTo(card,
                { opacity: 0, y: 40 },
                {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play none none none",
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: i * 0.05,
                    ease: "power3.out",
                }
            );
        });

        // Skill tags
        gsap.utils.toArray<HTMLElement>(".skill-tag").forEach((tag, i) => {
            gsap.fromTo(tag,
                { opacity: 0, scale: 0.8 },
                {
                    scrollTrigger: {
                        trigger: tag,
                        start: "top 95%",
                        toggleActions: "play none none none",
                    },
                    opacity: 1,
                    scale: 1,
                    duration: 0.4,
                    delay: i * 0.05,
                    ease: "back.out(1.5)",
                }
            );
        });

        // Mission badges
        gsap.utils.toArray<HTMLElement>(".mission-badge").forEach((badge, i) => {
            gsap.fromTo(badge,
                { opacity: 0, y: 20 },
                {
                    scrollTrigger: {
                        trigger: badge,
                        start: "top 95%",
                        toggleActions: "play none none none",
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    delay: i * 0.04,
                    ease: "power3.out",
                }
            );
        });

        // Stats
        gsap.utils.toArray<HTMLElement>(".stat-item").forEach((stat, i) => {
            gsap.fromTo(stat,
                { opacity: 0, y: 30 },
                {
                    scrollTrigger: {
                        trigger: stat,
                        start: "top 95%",
                        toggleActions: "play none none none",
                    },
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: i * 0.08,
                    ease: "power3.out",
                }
            );
        });

        // Contact links
        gsap.utils.toArray<HTMLElement>(".contact-link").forEach((link, i) => {
            gsap.fromTo(link,
                { opacity: 0, x: -20 },
                {
                    scrollTrigger: {
                        trigger: link,
                        start: "top 95%",
                        toggleActions: "play none none none",
                    },
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: "power3.out",
                }
            );
        });

    }, { scope: containerRef, dependencies: [isLoaded] });

    // Setup cursor on load
    useEffect(() => {
        if (isLoaded && typeof window !== 'undefined') {
            const cursor = document.createElement("div");
            cursor.className = "cursor";
            const dot = document.createElement("div");
            dot.className = "cursor-dot";
            document.body.appendChild(cursor);
            document.body.appendChild(dot);

            let mouseX = 0, mouseY = 0;
            let cursorX = 0, cursorY = 0;

            const handleMove = (e: MouseEvent) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                dot.style.left = `${mouseX - 2}px`;
                dot.style.top = `${mouseY - 2}px`;
            };

            const animate = () => {
                cursorX += (mouseX - cursorX) * 0.15;
                cursorY += (mouseY - cursorY) * 0.15;
                cursor.style.left = `${cursorX - 10}px`;
                cursor.style.top = `${cursorY - 10}px`;
                requestAnimationFrame(animate);
            };

            window.addEventListener("mousemove", handleMove);
            animate();

            return () => {
                window.removeEventListener("mousemove", handleMove);
                cursor.remove();
                dot.remove();
            };
        }
    }, [isLoaded]);

    return (
        <>
            {/* Loading Screen */}
            <div className="loading">
                <span className="loading-text">Loading</span>
            </div>

            {/* Background Effects */}
            <div className="grain" />
            <div className="vignette" />
            <div className="fog-layer fog-layer-1" />
            <div className="fog-layer fog-layer-2" />

            {/* Fireflies */}
            {[...Array(15)].map((_, i) => (
                <Firefly key={i} id={i} />
            ))}

            <div ref={containerRef}>
                {/* Navigation */}
                <nav className="fixed top-0 left-0 right-0 z-50 p-6 md:p-8">
                    <div className="container flex justify-between items-center">
                        <span className="text-display text-sm tracking-widest font-medium">DZ</span>
                        <div className="hidden md:flex gap-8">
                            <a href="#about" className="nav-link">About</a>
                            <a href="#experience" className="nav-link">Experience</a>
                            <a href="#projects" className="nav-link">Projects</a>
                            <a href="#contact" className="nav-link">Contact</a>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section id="about" className="min-h-screen flex items-center justify-center py-20">
                    <div className="container flex flex-col items-center text-center px-4">
                        <div className="hero-profile">
                            <InteractiveProfile />
                        </div>
                        <h1 className="hero-name text-display mb-8">
                            BLOCKCHAIN<br />DEVELOPER
                        </h1>
                        <p className="hero-subtitle text-center max-w-2xl">
                            I am a Blockchain Developer with over 3 years of experience,
                            specializing in the creation of Smart Contracts using Solidity.
                            Currently focused on developing privacy dApps with Zero Knowledge.
                        </p>
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="py-12 md:py-20">
                    <div className="container px-4 md:px-8">
                        <h2 className="section-title">Experience</h2>
                        <div className="timeline">
                            {experience.map((item, i) => (
                                <div key={i} className="timeline-item">
                                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                                        <span className="text-sm text-gray-500 font-mono min-w-[120px]">{item.year}</span>
                                        <div className="flex-1">
                                            <h3 className="text-lg text-white">{item.title}</h3>
                                            <span className="text-sm text-gray-500">{item.place}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Education Section (Formación) - New Design */}
                <section className="py-12 md:py-20">
                    <div className="container px-4 md:px-8">
                        <h2 className="section-title">Education</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {education.map((item, i) => (
                                <div key={i} className="education-item border border-gray-900 p-6 hover:border-gray-700 transition-colors bg-black/30 backdrop-blur-sm">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-0.5 rounded">{item.year}</span>
                                        <span className="text-xs text-gray-600 uppercase tracking-wider">{item.place}</span>
                                    </div>
                                    <h3 className="text-md font-medium text-gray-200">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section id="projects" className="py-12 md:py-20">
                    <div className="container px-4 md:px-8">
                        <h2 className="section-title">Projects</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {projects.map((project, i) => (
                                <div key={i} className="project-card">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl text-white">{project.name}</h3>
                                        <div className="flex gap-2 items-center">
                                            {project.zk && (
                                                <span className="text-xs border border-gray-700 px-2 py-1 text-gray-400">ZK</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm text-gray-500">
                                            <span>{project.year}</span>
                                            <span className="mx-2">•</span>
                                            <span>{project.solo ? "Solo" : "Team"}</span>
                                        </div>
                                        <div className="flex gap-3">
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-500 hover:text-white transition-colors"
                                                    title="GitHub"
                                                >
                                                    <GitHubIcon />
                                                </a>
                                            )}
                                            {project.web && (
                                                <a
                                                    href={project.web}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-500 hover:text-white transition-colors"
                                                    title="Live Demo"
                                                >
                                                    <ExternalLinkIcon />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Skills - Now with Icons */}
                <section className="py-12 md:py-20">
                    <div className="container px-4 md:px-8">
                        <h2 className="section-title">Skills</h2>
                        <div className="flex flex-wrap gap-4">
                            {skills.map((skill, i) => (
                                <div key={i} className="skill-tag flex items-center gap-3 px-4 py-3 bg-gray-900/30">
                                    <span className="text-xl text-white">{skill.icon}</span>
                                    <span className="text-sm tracking-wide">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="py-12 md:py-20">
                    <div className="container px-4 md:px-8">
                        <h2 className="section-title">Stats</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                            {stats.map((stat, i) => (
                                <div key={i} className="stat-item text-center">
                                    <div className="stat-number">
                                        <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                                    </div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Missions */}
                <section className="py-12 md:py-20">
                    <div className="container px-4 md:px-8">
                        <h2 className="section-title">Goals</h2>
                        <div className="flex flex-wrap gap-3">
                            {missions.map((mission, i) => (
                                <div key={i} className="mission-badge">
                                    <span className="text-white">{mission.name}</span>
                                    <span className="badge-type">{mission.type}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className="py-12 md:py-20">
                    <div className="container px-4 md:px-8 max-w-2xl">
                        <h2 className="section-title">Contact</h2>
                        <div>
                            {contacts.map((contact, i) => (
                                <a key={i} href={contact.href} className="contact-link" target="_blank" rel="noopener noreferrer">
                                    <span>{contact.label}</span>
                                    <span className="text-lg text-white">{contact.value}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-12 text-center text-gray-600 text-sm">
                    <div className="container">
                        <p>© 2025 — Built with passion in the darkness</p>
                    </div>
                </footer>
            </div>
        </>
    );
}
