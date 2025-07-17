import React, { useState, useEffect, useRef } from 'react';

// --- Helper Components ---

// Icon component for cleaner JSX
const Icon = ({ path, className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
);

// --- Page Components ---

const HomePage = ({ onNavigate }) => (
    <div className="animate-fade-in">
        {/* Hero Section */}
        <header className="bg-gray-900 text-white text-center py-24 md:py-40 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Beyond Achievement: The Path to Lasting Fulfillment</h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">A confidential, transformative journey for leaders ready to align external success with inner satisfaction.</p>
                <button onClick={() => onNavigate('contact')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
                    Schedule a Discovery Call
                </button>
            </div>
        </header>

        {/* Intro Section */}
        <section className="py-20 px-6 bg-white">
            <div className="container mx-auto text-center max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Is This You?</h2>
                <p className="text-lg text-gray-600">You've achieved success, but feel like something is missing. The constant pressure has left you disconnected from your purpose and well-being. It’s time to redefine success on your own terms.</p>
            </div>
        </section>

        {/* Methodology Overview Section */}
        <section id="methodology" className="py-20 px-6 bg-gray-50">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Evidence-Informed Methodology</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">A three-step framework to guide you from burnout to integrated purpose.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
                        <div className="bg-blue-100 text-blue-600 rounded-full h-16 w-16 flex items-center justify-center font-bold text-2xl mx-auto mb-4">1</div>
                        <h3 className="text-2xl font-bold mb-3">Discover</h3>
                        <p className="text-gray-600 mb-4">Uncover your unconscious patterns, motivations, and fears to reveal your greatest strengths.</p>
                        <button onClick={() => onNavigate('discover')} className="text-blue-600 font-semibold hover:underline">Learn More &rarr;</button>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
                        <div className="bg-green-100 text-green-600 rounded-full h-16 w-16 flex items-center justify-center font-bold text-2xl mx-auto mb-4">2</div>
                        <h3 className="text-2xl font-bold mb-3">Integrate</h3>
                        <p className="text-gray-600 mb-4">Release deep-seated habits that create stress through mindfulness and somatic practices.</p>
                        <button onClick={() => onNavigate('integrate')} className="text-green-600 font-semibold hover:underline">Learn More &rarr;</button>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
                        <div className="bg-purple-100 text-purple-600 rounded-full h-16 w-16 flex items-center justify-center font-bold text-2xl mx-auto mb-4">3</div>
                        <h3 className="text-2xl font-bold mb-3">Actualize</h3>
                        <p className="text-gray-600 mb-4">Amplify your journey in a supportive group setting to accelerate healing and problem-solving.</p>
                        <button onClick={() => onNavigate('actualize')} className="text-purple-600 font-semibold hover:underline">Learn More &rarr;</button>
                    </div>
                </div>
            </div>
        </section>

        {/* Transformation Section */}
        <section className="py-20 px-6 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Your Transformation</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Tangible results for your life and career.</p>
                </div>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-6">
                    {[
                        "Navigate pressure with unshakable calm",
                        "Sharpen intuition for better decision-making",
                        "Master your emotions and deepen self-connection",
                        "Release past limitations and thrive through transitions",
                        "Increase connections with staff & leadership",
                        "Cultivate well-being that fuels your success",
                        "Self-regulate stress and develop inner awareness",
                        "Accelerate career progression & development",
                    ].map(item => (
                        <div key={item} className="flex items-start">
                            <Icon path="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
                            <p className="text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
);

const MethodologyPage = ({ onNavigate, title, subtitle, color, content }) => (
    <div className="animate-fade-in">
        <header className={`bg-${color}-600 text-white py-20 px-6`}>
            <div className="container mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
                <p className="text-lg md:text-xl mt-2 opacity-90">{subtitle}</p>
            </div>
        </header>
        <main className="py-20 px-6 bg-gray-50">
            <div className="container mx-auto max-w-4xl">
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
                    {content}
                </div>
                <div className="mt-12 text-center">
                    <button onClick={() => onNavigate('home')} className="text-gray-600 hover:text-gray-900 font-semibold">&larr; Back to Home</button>
                </div>
            </div>
        </main>
    </div>
);

const DiscoverPage = ({ onNavigate }) => (
    <MethodologyPage
        onNavigate={onNavigate}
        title="Step 1: Discover Your Blueprint"
        subtitle="Mapping your internal operating system."
        color="blue"
        content={
            <>
                <p className="text-lg text-gray-700 mb-4">We first uncover your unconscious patterns, motivations, and fears. This foundational step is about building radical self-awareness. By understanding *why* you do what you do, you gain the power to change it.</p>
                <p className="text-lg text-gray-700 mb-6">Using proven frameworks like the Enneagram, we map your internal operating system to reveal your greatest strengths, core motivations, and hidden roadblocks that may be sabotaging your success and fulfillment.</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Activities:</h3>
                <ul className="space-y-3 text-gray-700 list-disc list-inside">
                    <li>In-depth Enneagram assessment and debrief.</li>
                    <li>Exploration of core fears and desires.</li>
                    <li>Identifying limiting beliefs and narratives.</li>
                    <li>Mapping your typical stress and growth responses.</li>
                </ul>
            </>
        }
    />
);

const IntegratePage = ({ onNavigate }) => (
    <MethodologyPage
        onNavigate={onNavigate}
        title="Step 2: Integrate & Reshape"
        subtitle="Building resilience and healing what holds you back."
        color="green"
        content={
            <>
                <p className="text-lg text-gray-700 mb-4">Awareness is the first step, but integration is where transformation happens. In this phase, you'll release the deep-seated habits that create stress and burnout.</p>
                <p className="text-lg text-gray-700 mb-6">Through mindfulness techniques like Vipassana meditation, yoga, and other somatic (body-based) practices, you will build resilience, reshape your response to pressure, and heal what’s been holding you back. This is about rewiring your nervous system for calm, clarity, and focus.</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Practices:</h3>
                <ul className="space-y-3 text-gray-700 list-disc list-inside">
                    <li>Guided mindfulness and meditation exercises.</li>
                    <li>Somatic practices to release stored tension.</li>
                    <li>Techniques for emotional regulation and stress reduction.</li>
                    <li>Trauma-informed coaching to safely process past experiences.</li>
                </ul>
            </>
        }
    />
);

const ActualizePage = ({ onNavigate }) => (
    <MethodologyPage
        onNavigate={onNavigate}
        title="Step 3: Actualize in Community"
        subtitle="Aligning with your authentic purpose."
        color="purple"
        content={
            <>
                <p className="text-lg text-gray-700 mb-4">Your journey is amplified in a supportive, small group setting. This "collective coherence" creates a powerful field of resonance that accelerates healing, enhances problem-solving, and provides shared validation for your authentic purpose.</p>
                <p className="text-lg text-gray-700 mb-6">Here, you align your career and life with your authentic self, learning to lead with clarity, impact, and a direct connection to your intuition. The group acts as a mirror and a support system, reflecting your growth and holding you accountable to your highest potential.</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Benefits:</h3>
                <ul className="space-y-3 text-gray-700 list-disc list-inside">
                    <li>Accelerated healing through shared experience.</li>
                    <li>Enhanced problem-solving via a "collective mind."</li>
                    <li>Validation and support from a trusted peer group.</li>
                    <li>Making decisions with greater speed and confidence.</li>
                </ul>
            </>
        }
    />
);

const AboutPage = ({ onNavigate }) => (
    <div className="animate-fade-in">
        <header className="bg-gray-100 py-20 px-6">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Meet Your Guides</h1>
                <p className="text-lg text-gray-600 mt-2">Experienced coaches dedicated to your transformation.</p>
            </div>
        </header>
        <main className="py-20 px-6 bg-white">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    <div className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200">
                        <h2 className="text-3xl font-bold mb-2">Shalini Verma</h2>
                        <p className="text-blue-600 font-semibold mb-4">Life Coach & Guide, Human Potentialist, Organizational Whisperer</p>
                        <p className="text-gray-700 space-y-4">
                            <span>Trained as an Enneagram Guide, Trauma Informed Coach, and Somatic Healer, Shalini is a MIT and Harvard Business School graduate named to Crain's Top 50 Technology Talent. With experience at Ford, Sun, Oracle, and Google, she inspires leaders to transform themselves and their organizations.</span>
                            <span>Her passion is to discover and develop tools to uncover individual and collective intelligence to solve increasingly complex problems.</span>
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200">
                        <h2 className="text-3xl font-bold mb-2">Jatin Alla</h2>
                        <p className="text-blue-600 font-semibold mb-4">Life Coach, AI Researcher, Community Builder</p>
                        <p className="text-gray-700 space-y-4">
                            <span>A former researcher at Google Research and DeepMind, Jatin specializes in the intersection of AI and Human-Computer Interaction. With a background in cognitive science, he helps clients recognize and transform deeply ingrained behavioral patterns for lasting personal growth.</span>
                            <span>He bridges the gap between technology and human development, generating insights that drive strategic decision-making and ethical AI implementation.</span>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    </div>
);

const ContactPage = ({ onNavigate }) => (
    <div className="animate-fade-in">
        <header className="bg-gray-100 py-20 px-6">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Get Started</h1>
                <p className="text-lg text-gray-600 mt-2">Take the first step towards a more fulfilling life and career.</p>
            </div>
        </header>

        <main className="py-20 px-6 bg-white">
            <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-200">
                    <h2 className="text-3xl font-bold mb-6">Schedule a Discovery Call</h2>
                    <p className="text-gray-700 mb-6">Schedule a complimentary discovery call to learn more and see if the Kairos Coaching Program is right for you. Reach out to either of us to begin.</p>
                    <div className="space-y-4">
                        <a href="mailto:jatinalla2000@gmail.com" className="flex items-center text-lg text-blue-600 hover:underline">
                            <Icon path="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" className="w-6 h-6 mr-3" />
                            Email Jatin
                        </a>
                        <a href="mailto:shalini.verm@gmail.com" className="flex items-center text-lg text-blue-600 hover:underline">
                            <Icon path="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" className="w-6 h-6 mr-3" />
                            Email Shalini
                        </a>
                    </div>
                </div>

                {/* Pricing */}
                <div className="bg-blue-50 p-8 rounded-xl shadow-lg border border-blue-200">
                    <h3 className="text-3xl font-bold text-center mb-6">Investment</h3>
                    <p className="text-center text-gray-600 mb-6">Special pricing for our beta pilot program.</p>
                    <div className="bg-white p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-center mb-4">10 Session Package</h4>
                        <ul className="space-y-4 text-lg text-gray-700">
                            <li className="flex justify-between items-center"><span>Pay Per Session:</span> <span className="font-bold text-blue-800">$350</span></li>
                            <li className="flex justify-between items-center border-t pt-4 mt-4"><span>Two Installments:</span> <span className="font-bold text-blue-800">$1600 x 2</span></li>
                            <li className="flex justify-between items-center border-t pt-4 mt-4"><span>Paid Upfront:</span> <span className="font-bold text-green-600">$3000</span></li>
                        </ul>
                    </div>
                    <p className="text-center mt-6 text-gray-600 text-sm">Pricing expected to increase 3-5x with full production release.</p>
                    <div className="mt-6 text-center text-sm text-gray-700">
                        <p className="font-semibold mb-2">Payable through:</p>
                        <p>PayPal: @jatinalla</p>
                        <p>Zelle: jatinalla2000@gmail.com (415-960-5333)</p>
                    </div>
                </div>
            </div>
        </main>
    </div>
);

// --- Main App Component ---

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // --- Navigation Handler ---
    const handleNavigate = (page) => {
        setCurrentPage(page);
        setIsMenuOpen(false); // Close mobile menu on navigation
        setIsDropdownOpen(false); // Close dropdown on navigation
        window.scrollTo(0, 0); // Scroll to top on page change
    };

    // --- Effect to handle clicks outside the dropdown ---
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Close dropdown if clicked outside of the dropdown area
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        // Add event listener when component mounts
        document.addEventListener("mousedown", handleClickOutside);
        // Remove event listener on cleanup
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);


    // --- Page Renderer ---
    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage onNavigate={handleNavigate} />;
            case 'discover':
                return <DiscoverPage onNavigate={handleNavigate} />;
            case 'integrate':
                return <IntegratePage onNavigate={handleNavigate} />;
            case 'actualize':
                return <ActualizePage onNavigate={handleNavigate} />;
            case 'about':
                return <AboutPage onNavigate={handleNavigate} />;
            case 'contact':
                return <ContactPage onNavigate={handleNavigate} />;
            default:
                return <HomePage onNavigate={handleNavigate} />;
        }
    };

    // --- Navbar Component ---
    const Navbar = () => (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold text-gray-800 cursor-pointer" onClick={() => handleNavigate('home')}>
                        Kairos AI
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('home') }} className="text-gray-600 hover:text-blue-600">Home</a>
                        {/* Methodology Dropdown - now click-based */}
                        <div className="relative" ref={dropdownRef}>
                            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="text-gray-600 hover:text-blue-600 flex items-center">
                                Methodology <Icon path="M19.5 8.25l-7.5 7.5-7.5-7.5" className="w-4 h-4 ml-1" />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute mt-2 w-48 bg-white rounded-md shadow-xl py-2 z-50">
                                    <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('discover') }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Discover</a>
                                    <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('integrate') }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">Integrate</a>
                                    <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('actualize') }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Actualize</a>
                                </div>
                            )}
                        </div>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('about') }} className="text-gray-600 hover:text-blue-600">About Us</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('contact') }} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                            Contact
                        </a>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <Icon path={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white py-4 px-6">
                    <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('home') }} className="block py-2 text-gray-600 hover:text-blue-600">Home</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('discover') }} className="block py-2 text-gray-600 hover:text-blue-600">Discover</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('integrate') }} className="block py-2 text-gray-600 hover:text-blue-600">Integrate</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('actualize') }} className="block py-2 text-gray-600 hover:text-blue-600">Actualize</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('about') }} className="block py-2 text-gray-600 hover:text-blue-600">About Us</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleNavigate('contact') }} className="block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 text-center">
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );

    return (
        <div className="bg-white text-gray-800 font-sans">
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
            `}</style>
            <Navbar />
            <main>{renderPage()}</main>
            <footer className="bg-gray-800 text-white">
                <div className="container mx-auto px-6 py-8 text-center">
                    <p>&copy; {new Date().getFullYear()} Kairos AI Coaching. All Rights Reserved.</p>
                    <p className="mt-2 text-sm text-gray-400">Contact: jatinalla2000@gmail.com | shalini.verm@gmail.com</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
