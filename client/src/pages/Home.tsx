import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { APP_LOGO } from "@/const";
import { Coffee, MapPin, Phone, Clock, UtensilsCrossed, Menu, X, ArrowUp, Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuOverlayRef = useRef<HTMLDivElement>(null);
  const scrollTopRef = useRef<HTMLButtonElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const specialtiesRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Sophie L.",
      rating: 5,
      text: "Un vrai petit coin d'Italie à Bruxelles ! Le latte pistache est absolument délicieux et les arancini sont parfaits. L'ambiance est chaleureuse et le service impeccable.",
      date: "Il y a 2 semaines"
    },
    {
      name: "Marc D.",
      rating: 5,
      text: "Meilleur café italien du quartier ! Les pâtisseries sont fraîches et authentiques. Je recommande vivement le cannoli à la pistache. Un régal !",
      date: "Il y a 1 mois"
    },
    {
      name: "Isabelle M.",
      rating: 5,
      text: "Accueil chaleureux et produits de qualité. La focaccia est divine et le tiramisu maison est à tomber. Je viens régulièrement et je ne suis jamais déçue.",
      date: "Il y a 3 semaines"
    },
    {
      name: "Thomas B.",
      rating: 5,
      text: "Excellente adresse pour un café ou un déjeuner rapide. Les paninis sont généreux et délicieux. L'ambiance italienne authentique fait toute la différence !",
      date: "Il y a 1 semaine"
    }
  ];

  // Scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top animation
  useEffect(() => {
    if (scrollTopRef.current) {
      if (showScrollTop) {
        gsap.to(scrollTopRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "back.out(1.7)"
        });
      } else {
        gsap.to(scrollTopRef.current, {
          opacity: 0,
          scale: 0,
          duration: 0.3,
          ease: "back.in(1.7)"
        });
      }
    }
  }, [showScrollTop]);

  // Testimonials carousel auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Testimonials animation
  useEffect(() => {
    if (testimonialsRef.current) {
      const testimonialCards = testimonialsRef.current.querySelectorAll('.testimonial-card');
      gsap.fromTo(
        testimonialCards[currentTestimonial],
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [currentTestimonial]);

  // Mobile menu animation
  useEffect(() => {
    if (mobileMenuRef.current && mobileMenuOverlayRef.current) {
      if (isMobileMenuOpen) {
        gsap.to(mobileMenuOverlayRef.current, {
          opacity: 1,
          duration: 0.3,
          display: 'block'
        });
        gsap.to(mobileMenuRef.current, {
          x: 0,
          duration: 0.4,
          ease: "power3.out"
        });
        gsap.from(mobileMenuRef.current.querySelectorAll('.mobile-menu-item'), {
          opacity: 0,
          x: -50,
          duration: 0.3,
          stagger: 0.1,
          delay: 0.2
        });
      } else {
        gsap.to(mobileMenuRef.current, {
          x: '-100%',
          duration: 0.4,
          ease: "power3.in"
        });
        gsap.to(mobileMenuOverlayRef.current, {
          opacity: 0,
          duration: 0.3,
          display: 'none',
          delay: 0.1
        });
      }
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    // Hero parallax effect
    if (heroRef.current) {
      const heroImage = heroRef.current.querySelector('.hero-image');
      gsap.to(heroImage, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.from(heroRef.current.querySelectorAll('.hero-content > *'), {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }

    // About section animations
    if (aboutRef.current) {
      gsap.from(aboutRef.current.querySelector('.about-text'), {
        opacity: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1
        }
      });

      gsap.from(aboutRef.current.querySelector('.about-image'), {
        opacity: 0,
        x: 100,
        duration: 1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1
        }
      });
    }

    // Specialties cards stagger animation
    if (specialtiesRef.current) {
      gsap.from(specialtiesRef.current.querySelectorAll('.specialty-card'), {
        opacity: 0,
        y: 100,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: specialtiesRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });
    }

    // Menu cards animation
    if (menuRef.current) {
      gsap.from(menuRef.current.querySelectorAll('.menu-card'), {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: menuRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });
    }

    // Testimonials section animation
    if (testimonialsRef.current) {
      gsap.from(testimonialsRef.current.querySelector('.testimonials-content'), {
        opacity: 0,
        y: 50,
        duration: 0.8,
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });
    }

    // Gallery images reveal
    if (galleryRef.current) {
      gsap.from(galleryRef.current.querySelectorAll('.gallery-item'), {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });
    }

    // Contact section fade in
    if (contactRef.current) {
      gsap.from(contactRef.current.querySelectorAll('.contact-content'), {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    gsap.to(window, {
      scrollTo: { y: 0 },
      duration: 1,
      ease: "power2.inOut"
    });
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
      {/* Scroll to Top Button */}
      <button
        ref={scrollTopRef}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 bg-primary text-primary-foreground p-4 rounded-full shadow-2xl hover:bg-primary/90 transition-colors opacity-0 scale-0"
        aria-label="Retour en haut"
      >
        <ArrowUp className="h-6 w-6" />
      </button>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuOverlayRef}
        className="fixed inset-0 bg-black/50 z-40 hidden"
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-card border-r border-border z-50 -translate-x-full shadow-2xl"
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <img src={APP_LOGO} alt="Dal Nonno" className="h-12 w-auto" />
          <Button
            variant="ghost"
            size="icon"
            onClick={closeMobileMenu}
            className="hover:bg-accent"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="flex flex-col p-6 space-y-4">
          <a
            href="#accueil"
            className="mobile-menu-item text-lg font-medium hover:text-primary transition-colors py-2"
            onClick={closeMobileMenu}
          >
            Accueil
          </a>
          <a
            href="#a-propos"
            className="mobile-menu-item text-lg font-medium hover:text-primary transition-colors py-2"
            onClick={closeMobileMenu}
          >
            À propos
          </a>
          <a
            href="#specialites"
            className="mobile-menu-item text-lg font-medium hover:text-primary transition-colors py-2"
            onClick={closeMobileMenu}
          >
            Nos spécialités
          </a>
          <a
            href="#menu"
            className="mobile-menu-item text-lg font-medium hover:text-primary transition-colors py-2"
            onClick={closeMobileMenu}
          >
            Menu & Prix
          </a>
          <a
            href="#avis"
            className="mobile-menu-item text-lg font-medium hover:text-primary transition-colors py-2"
            onClick={closeMobileMenu}
          >
            Avis clients
          </a>
          <a
            href="#galerie"
            className="mobile-menu-item text-lg font-medium hover:text-primary transition-colors py-2"
            onClick={closeMobileMenu}
          >
            Galerie
          </a>
          <a
            href="#contact"
            className="mobile-menu-item text-lg font-medium hover:text-primary transition-colors py-2"
            onClick={closeMobileMenu}
          >
            Contact
          </a>
          <div className="pt-4 border-t border-border">
            <Button asChild className="w-full">
              <a href="tel:+32496769721">Appelez-nous</a>
            </Button>
          </div>
        </nav>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <img src={APP_LOGO} alt="Dal Nonno" className="h-12 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#accueil" className="text-sm font-medium hover:text-primary transition-colors">Accueil</a>
            <a href="#a-propos" className="text-sm font-medium hover:text-primary transition-colors">À propos</a>
            <a href="#specialites" className="text-sm font-medium hover:text-primary transition-colors">Nos spécialités</a>
            <a href="#menu" className="text-sm font-medium hover:text-primary transition-colors">Menu & Prix</a>
            <a href="#avis" className="text-sm font-medium hover:text-primary transition-colors">Avis clients</a>
            <a href="#galerie" className="text-sm font-medium hover:text-primary transition-colors">Galerie</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </div>
          <Button asChild className="hidden md:inline-flex">
            <a href="tel:+32496769721">Appelez-nous</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="hero-image absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{ 
            backgroundImage: 'url(/dal-nonno-vitrine.jpeg)',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="hero-content relative z-10 container text-center text-white">
          <img src={APP_LOGO} alt="Dal Nonno" className="h-32 w-auto mx-auto mb-8 drop-shadow-2xl" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">Dal Nonno</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            L'authenticité italienne au cœur de Woluwe-Saint-Lambert
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <a href="#menu">Découvrir notre menu</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
              <a href="#contact">Nous trouver</a>
            </Button>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section ref={aboutRef} id="a-propos" className="py-20 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="about-text">
              <h2 className="text-4xl font-bold mb-6 text-primary">Bienvenue chez Dal Nonno</h2>
              <p className="text-lg mb-4 text-foreground">
                Dal Nonno est bien plus qu'un simple café. C'est un petit coin d'Italie niché dans le passage Linthout à Woluwe-Saint-Lambert, où l'authenticité et la convivialité se rencontrent.
              </p>
              <p className="text-lg mb-4 text-foreground">
                Notre établissement vous accueille dans une ambiance chaleureuse, avec des tons dorés et boisés qui rappellent les trattorias traditionnelles italiennes. Chaque jour, nous préparons avec soin nos spécialités maison : arancini croustillants, focaccia moelleuse, paninis généreux et pâtisseries artisanales.
              </p>
              <p className="text-lg text-foreground">
                Notre café italien de qualité supérieure et notre service souriant font de Dal Nonno une adresse incontournable pour tous les amateurs de la dolce vita.
              </p>
            </div>
            <div className="about-image relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/dal-nonno-interieur.jpeg" 
                alt="Ambiance Dal Nonno" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos Spécialités */}
      <section ref={specialtiesRef} id="specialites" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Nos Spécialités</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos délices italiens préparés avec passion et savoir-faire
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="specialty-card overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/dal-nonno-latte-pistache.jpeg" 
                  alt="Café italien" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Coffee className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold text-card-foreground">Café Italien</h3>
                </div>
                <p className="text-muted-foreground">
                  Espresso, cappuccino, latte avec art latte à la pistache. Notre café est torréfié selon la tradition italienne pour un goût authentique et raffiné.
                </p>
              </CardContent>
            </Card>

            <Card className="specialty-card overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/dal-nonno-vitrine.jpeg" 
                  alt="Pâtisseries italiennes" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Arancini & Focaccia</h3>
                <p className="text-muted-foreground">
                  Nos arancini dorés et croustillants, notre focaccia moelleuse garnie de tomates et romarin. Chaque bouchée vous transporte en Sicile.
                </p>
              </CardContent>
            </Card>

            <Card className="specialty-card overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/dal-nonno-affogato.jpeg" 
                  alt="Cannoli et pâtisseries" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Pâtisseries Maison</h3>
                <p className="text-muted-foreground">
                  Cannoli siciliens à la crème de pistache, affogato maison et autres douceurs italiennes préparées quotidiennement avec des ingrédients de qualité.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu & Prix */}
      <section ref={menuRef} id="menu" className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <UtensilsCrossed className="h-10 w-10 text-primary" />
              <h2 className="text-4xl font-bold text-primary">Notre Menu</h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Des saveurs authentiques à prix doux
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Boissons Chaudes */}
            <Card className="menu-card p-6">
              <h3 className="text-2xl font-bold mb-6 text-primary border-b-2 border-primary pb-2">☕ Boissons Chaudes</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-card-foreground">Espresso</p>
                    <p className="text-sm text-muted-foreground">Café italien traditionnel</p>
                  </div>
                  <span className="text-primary font-bold">2,50€</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-card-foreground">Cappuccino</p>
                    <p className="text-sm text-muted-foreground">Espresso, lait mousseux</p>
                  </div>
                  <span className="text-primary font-bold">3,50€</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-card-foreground">Latte Macchiato</p>
                    <p className="text-sm text-muted-foreground">Lait, espresso, mousse</p>
                  </div>
                  <span className="text-primary font-bold">4,00€</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-card-foreground">Latte Pistache</p>
                    <p className="text-sm text-muted-foreground">Notre spécialité maison</p>
                  </div>
                  <span className="text-primary font-bold">4,50€</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-card-foreground">Affogato</p>
                    <p className="text-sm text-muted-foreground">Glace vanille, espresso chaud</p>
                  </div>
                  <span className="text-primary font-bold">5,00€</span>
                </div>
              </div>
            </Card>

            {/* Snacks Salés */}
            <Card className="menu-card p-6">
              <h3 className="text-2xl font-bold mb-6 text-primary border-b-2 border-primary pb-2">🍕 Snacks Salés</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-card-foreground">Arancini</p>
                    <p className="text-sm text-muted-foreground">Boulettes de riz frites (2 pcs)</p>
                  </div>
                  <span className="text-primary font-bold">5,50€</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-card-foreground">Focaccia Nature</p>
                    <p className="text-sm text-muted-foreground">Pain italien moelleux</p>
                  </div>
                  <span className="text-primary font-bold">4,00€</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-card-foreground">Focaccia Garnie</p>
                    <p className="text-sm text-muted-foreground">Tomates, romarin, huile d'olive</p>
                  </div>
                  <span className="text-primary font-bold">5,50€</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-card-foreground">Panini</p>
                    <p className="text-sm text-muted-foreground">Garniture au choix</p>
                  </div>
                  <span className="text-primary font-bold">6,50€</span>
                </div>
              </div>
            </Card>

            {/* Pâtisseries */}
            <Card className="menu-card p-6">
              <h3 className="text-2xl font-bold mb-6 text-primary border-b-2 border-primary pb-2">🍰 Pâtisseries</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-card-foreground">Cannoli Sicilien</p>
                    <p className="text-sm text-muted-foreground">Crème de pistache maison</p>
                  </div>
                  <span className="text-primary font-bold">4,50€</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-card-foreground">Tiramisu</p>
                    <p className="text-sm text-muted-foreground">Recette traditionnelle</p>
                  </div>
                  <span className="text-primary font-bold">5,00€</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-card-foreground">Panna Cotta</p>
                    <p className="text-sm text-muted-foreground">Coulis de fruits rouges</p>
                  </div>
                  <span className="text-primary font-bold">4,50€</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-card-foreground">Biscotti</p>
                    <p className="text-sm text-muted-foreground">Assortiment (3 pcs)</p>
                  </div>
                  <span className="text-primary font-bold">3,50€</span>
                </div>
              </div>
            </Card>

            {/* Boissons Fraîches */}
            <Card className="menu-card p-6">
              <h3 className="text-2xl font-bold mb-6 text-primary border-b-2 border-primary pb-2">🥤 Boissons Fraîches</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-card-foreground">Jus d'Orange Frais</p>
                    <p className="text-sm text-muted-foreground">Pressé minute</p>
                  </div>
                  <span className="text-primary font-bold">4,00€</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-card-foreground">Limonade Maison</p>
                    <p className="text-sm text-muted-foreground">Citron frais, menthe</p>
                  </div>
                  <span className="text-primary font-bold">3,50€</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-card-foreground">Thé Glacé</p>
                    <p className="text-sm text-muted-foreground">Pêche ou citron</p>
                  </div>
                  <span className="text-primary font-bold">3,00€</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-card-foreground">Eau Minérale</p>
                    <p className="text-sm text-muted-foreground">Plate ou pétillante</p>
                  </div>
                  <span className="text-primary font-bold">2,50€</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground italic">
              💰 Prix moyens : €1-10 par personne • Sur place ou à emporter
            </p>
          </div>
        </div>
      </section>

      {/* Avis Clients */}
      <section ref={testimonialsRef} id="avis" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="h-10 w-10 text-primary fill-primary" />
              <h2 className="text-4xl font-bold text-primary">Avis Clients</h2>
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-primary fill-primary" />
                ))}
              </div>
              <span className="text-2xl font-bold text-primary">4.9/5</span>
            </div>
            <p className="text-lg text-muted-foreground">
              Ce que nos clients disent de nous
            </p>
          </div>

          <div className="testimonials-content max-w-4xl mx-auto">
            <div className="relative">
              <Card className="p-8 bg-card shadow-xl">
                <Quote className="h-12 w-12 text-primary/20 mb-4" />
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`testimonial-card ${index === currentTestimonial ? 'block' : 'hidden'}`}
                  >
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                      ))}
                    </div>
                    <p className="text-lg text-foreground mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-card-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Card>

              {/* Navigation buttons */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </Button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentTestimonial
                          ? 'bg-primary w-8'
                          : 'bg-muted-foreground/30'
                      }`}
                      aria-label={`Aller au témoignage ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </Button>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Basé sur plus de 150 avis Google Maps
              </p>
              <Button asChild variant="outline">
                <a 
                  href="https://www.google.com/maps/place/Dal+Nonno/@50.8406774,4.4014406,17z/data=!4m8!3m7!1s0x47c3c589f9eff1d7:0x428aed1a17ea5a99!8m2!3d50.8406774!4d4.4014406!9m1!1b1!16s%2Fg%2F11k9bt2mlz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir tous les avis
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section ref={galleryRef} id="galerie" className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Notre Galerie</h2>
            <p className="text-lg text-muted-foreground">
              Plongez dans l'ambiance chaleureuse de Dal Nonno
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="gallery-item relative h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img src="/dal-nonno-vitrine.jpeg" alt="Vitrine Dal Nonno" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="gallery-item relative h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img src="/dal-nonno-latte-pistache.jpeg" alt="Latte pistache" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="gallery-item relative h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img src="/dal-nonno-affogato.jpeg" alt="Affogato" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="gallery-item relative h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img src="/dal-nonno-logo-cups.jpeg" alt="Logo et gobelets" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="gallery-item relative h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img src="/dal-nonno-interieur.jpeg" alt="Intérieur" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="gallery-item relative h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img src="/dal-nonno-vitrine.jpeg" alt="Produits" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Localisation */}
      <section ref={contactRef} id="contact" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Nous Trouver</h2>
            <p className="text-lg text-muted-foreground">
              Venez nous rendre visite au cœur de Woluwe-Saint-Lambert
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="contact-content">
              <Card className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-card-foreground">Adresse</h3>
                      <p className="text-muted-foreground">
                        Rue Bâtonnier Braffort 2<br />
                        Shopping Linthout, Passage Linthout<br />
                        1200 Woluwe-Saint-Lambert<br />
                        Belgique
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-card-foreground">Téléphone</h3>
                      <a href="tel:+32496769721" className="text-primary hover:underline">
                        +32 496 76 97 21
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-card-foreground">Horaires</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p>Lundi - Vendredi : 7h00 - 19h00</p>
                        <p>Samedi : 8h00 - 19h00</p>
                        <p>Dimanche : 9h00 - 18h00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="contact-content h-96 md:h-auto rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.0843799999997!2d4.399251!3d50.840677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c589f9eff1d7%3A0x428aed1a17ea5a99!2sDal%20Nonno!5e0!3m2!1sfr!2sbe!4v1699999999999!5m2!1sfr!2sbe"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Dal Nonno"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src={APP_LOGO} alt="Dal Nonno" className="h-16 w-auto mb-4" />
              <p className="text-muted-foreground">
                L'authenticité italienne au cœur de Woluwe-Saint-Lambert
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4 text-card-foreground">Navigation</h3>
              <div className="space-y-2">
                <a href="#accueil" className="block text-muted-foreground hover:text-primary transition-colors">Accueil</a>
                <a href="#a-propos" className="block text-muted-foreground hover:text-primary transition-colors">À propos</a>
                <a href="#specialites" className="block text-muted-foreground hover:text-primary transition-colors">Nos spécialités</a>
                <a href="#menu" className="block text-muted-foreground hover:text-primary transition-colors">Menu & Prix</a>
                <a href="#avis" className="block text-muted-foreground hover:text-primary transition-colors">Avis clients</a>
                <a href="#galerie" className="block text-muted-foreground hover:text-primary transition-colors">Galerie</a>
                <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4 text-card-foreground">Contact</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Rue Bâtonnier Braffort 2</p>
                <p>1200 Woluwe-Saint-Lambert</p>
                <p className="pt-2">
                  <a href="tel:+32496769721" className="text-primary hover:underline">
                    +32 496 76 97 21
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Dal Nonno. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
