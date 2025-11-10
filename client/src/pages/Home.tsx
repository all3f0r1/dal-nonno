import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { APP_LOGO } from "@/const";
import { Coffee, MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={APP_LOGO} alt="Dal Nonno" className="h-12 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#accueil" className="text-sm font-medium hover:text-primary transition-colors">Accueil</a>
            <a href="#a-propos" className="text-sm font-medium hover:text-primary transition-colors">À propos</a>
            <a href="#specialites" className="text-sm font-medium hover:text-primary transition-colors">Nos spécialités</a>
            <a href="#galerie" className="text-sm font-medium hover:text-primary transition-colors">Galerie</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </div>
          <Button asChild>
            <a href="tel:+32496769721">Appelez-nous</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/hero-bg.jpg)',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 container text-center text-white">
          <img src={APP_LOGO} alt="Dal Nonno" className="h-32 w-auto mx-auto mb-8 drop-shadow-2xl" />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">Dal Nonno</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            L'authenticité italienne au cœur de Woluwe-Saint-Lambert
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <a href="#specialites">Découvrir nos spécialités</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
              <a href="#contact">Nous trouver</a>
            </Button>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section id="a-propos" className="py-20 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
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
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/cafe-ambiance.jpg" 
                alt="Ambiance Dal Nonno" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos Spécialités */}
      <section id="specialites" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Nos Spécialités</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos délices italiens préparés avec passion et savoir-faire
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/coffee-specialty.jpg" 
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

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/pastries.jpg" 
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

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/pastries.jpg" 
                  alt="Cannoli et pâtisseries" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Pâtisseries Maison</h3>
                <p className="text-muted-foreground">
                  Cannoli siciliens à la crème de pistache, paninis garnis et autres douceurs italiennes préparées quotidiennement avec des ingrédients de qualité.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section id="galerie" className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Notre Galerie</h2>
            <p className="text-lg text-muted-foreground">
              Plongez dans l'ambiance chaleureuse de Dal Nonno
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img src="/hero-bg.jpg" alt="Intérieur Dal Nonno" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img src="/coffee-specialty.jpg" alt="Café pistache" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img src="/pastries.jpg" alt="Vitrine" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img src="/cafe-ambiance.jpg" alt="Ambiance" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img src="/hero-bg.jpg" alt="Comptoir" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img src="/coffee-specialty.jpg" alt="Spécialités" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Localisation */}
      <section id="contact" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Nous Trouver</h2>
            <p className="text-lg text-muted-foreground">
              Venez nous rendre visite au cœur de Woluwe-Saint-Lambert
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
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

                  <div className="pt-4 border-t border-border">
                    <h3 className="font-bold text-lg mb-3 text-card-foreground">Suivez-nous</h3>
                    <div className="flex gap-4">
                      <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                        <Instagram className="h-5 w-5" />
                      </Button>
                      <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                        <Facebook className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="h-96 md:h-auto rounded-lg overflow-hidden shadow-xl">
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
