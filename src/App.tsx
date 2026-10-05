import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, ChevronRight, CheckCircle, Award, AlertCircle, Star, ArrowRight, Sparkles, Shield, Clock } from 'lucide-react';
import { siteConfig } from './config/siteConfig';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const phoneHref = 'tel:' + siteConfig.contact.phone.replace(/\s/g, '');
  const whatsappHref = 'https://wa.me/33628787937';

  const services = [
    {
      title: 'Nettoyage Extérieur',
      icon: '💧',
      price: 'À partir de 40€',
      color: 'border-blue-500/30 hover:border-blue-500',
      items: [
        'Lavage extérieur complet',
        'Dégoudronnage',
        'Entrées de portes, contour de coffre',
        'Compartiment moteur',
        'Séchage avec cire de finition',
      ],
    },
    {
      title: 'Nettoyage Intérieur & Extérieur',
      icon: '✨',
      price: 'À partir de 120€',
      color: 'border-red-500/30 hover:border-red-500',
      badge: 'Populaire',
      items: [
        'Désinfection de l\'habitacle',
        'Nettoyage des vitres',
        'Shampouinage des sièges et tapis',
        'Entretien des plastiques',
        'Lavage extérieur complet',
        'Dégoudronnage',
        'Séchage avec cire de finition',
      ],
    },
    {
      title: 'Rénovation Phares',
      icon: '💡',
      price: '60€ la paire',
      color: 'border-yellow-500/30 hover:border-yellow-500',
      items: [
        'Passage contrôle technique',
        'Visibilité retrouvée',
        'Esthétique comme neuf',
        'Solution économique',
      ],
    },
    {
      title: 'Polissage / Lustrage',
      icon: '🔆',
      price: 'À partir de 200€',
      color: 'border-pink-500/30 hover:border-pink-500',
      items: [
        'Suppression des micro-rayures',
        'Supprime le voile terne',
        'Corrige et fait briller',
        'Protection longue durée',
      ],
    },
    {
      title: 'Décontamination Carrosserie',
      icon: '🧪',
      price: 'Sur devis',
      color: 'border-green-500/30 hover:border-green-500',
      items: [
        'Élimination des contaminants',
        'Argile décontaminante',
        'Préparation au polissage',
        'Protection de la peinture',
      ],
    },
    {
      title: 'Protection Céramique',
      icon: '🛡️',
      price: 'Sur devis',
      color: 'border-purple-500/30 hover:border-purple-500',
      items: [
        'Protection ultra-durable',
        'Brillance longue durée',
        'Résistance aux UV',
        'Facilité d\'entretien',
      ],
    },
  ];

  const realisations = [
    {
      avant: '/vw-avant.jpg',
      apres: '/vw-apres.jpg',
      titre: 'Volkswagen Passat',
      soustitre: 'Nettoyage intérieur complet',
      description: 'Habitacle transformé : tapis et moquettes shampouinés, tableau de bord nettoyé, désinfection complète. Un intérieur comme sorti de concession.',
      color: 'border-blue-500/20 hover:border-blue-500/50',
      accent: 'text-blue-400',
    },
    {
      avant: '/peugeot-rouge-avant.jpg',
      apres: '/peugeot-rouge-apres.jpg',
      titre: 'Peugeot 207',
      soustitre: 'Correction de peinture — Polissage',
      description: 'Carrosserie oxydée et peinture terne remises en état : correction du voile terne, restauration du brillant. Résultat impressionnant sur cette rouge.',
      color: 'border-red-500/20 hover:border-red-500/50',
      accent: 'text-red-400',
    },
    {
      avant: '/carrosserie-avant-apres.jpg',
      apres: null,
      titre: 'Nettoyage extérieur',
      soustitre: 'Carrosserie & Jantes',
      description: 'Nettoyage complet de la carrosserie et des jantes encrassées. Résultat miroir sur cette berline noire — la couleur la plus exigeante.',
      color: 'border-gray-500/20 hover:border-gray-500/50',
      accent: 'text-gray-400',
      single: true,
    },
    {
      avant: '/peugeot208-avant-apres.jpg',
      apres: null,
      titre: 'Peugeot 208',
      soustitre: 'Nettoyage extérieur complet',
      description: 'Carrosserie décontaminée, lavage manuel soigné, jantes nettoyées. Le noir révèle chaque détail — et le résultat est saisissant.',
      color: 'border-gray-500/20 hover:border-gray-500/50',
      accent: 'text-gray-400',
      single: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/98 backdrop-blur-md shadow-2xl border-b border-red-500/10' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full overflow-hidden shadow-xl shadow-red-500/20 bg-black border-2 border-red-500/30">
                <img src="/logo-brillance.jpg" alt="Brillance Auto 22 Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-xl font-black text-white tracking-tight">Brillance Auto 22</h1>
                <p className="text-xs text-red-400 font-semibold">Trévé — Côtes-d'Armor</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-300 hover:text-red-400 transition-colors font-semibold text-sm">Accueil</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-red-400 transition-colors font-semibold text-sm">Services</button>
              <button onClick={() => scrollToSection('realisations')} className="text-gray-300 hover:text-red-400 transition-colors font-semibold text-sm">Réalisations</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-red-400 transition-colors font-semibold text-sm">Contact</button>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all shadow-lg shadow-red-500/30 font-bold text-sm">
                Devis gratuit
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-gray-950 shadow-2xl py-4 border-t border-red-500/20">
              {['accueil', 'services', 'realisations', 'contact'].map(section => (
                <button key={section} onClick={() => scrollToSection(section)} className="block w-full text-left px-6 py-4 text-gray-300 hover:bg-gray-900 hover:text-red-400 capitalize font-semibold">
                  {section}
                </button>
              ))}
              <div className="px-6 pt-2">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="block text-center bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-bold">
                  Devis gratuit
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero-brillance.jpg" alt="Brillance Auto 22 - Atelier detailing Treve" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 bg-red-600/90 backdrop-blur-sm px-5 py-2 rounded-full mb-6 shadow-lg">
              <Sparkles className="text-white" size={16} />
              <span className="text-white font-bold text-sm tracking-wider">DETAILING PROFESSIONNEL — TREVE (22)</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="text-white drop-shadow-2xl">Votre voiture</span>
              <br />
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                retrouve son éclat
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-4 leading-relaxed max-w-xl">
              Nettoyage intérieur & extérieur, polissage, décontamination, protection céramique.
              Particuliers et professionnels, tous véhicules.
            </p>

            <p className="text-base text-red-400 font-bold mb-10">
              ✨ Brillance Auto 22 — Trévé, Côtes-d'Armor
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 rounded-full font-black text-lg text-white shadow-2xl shadow-red-500/40 hover:shadow-red-500/70 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>Demander un devis</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={22} />
              </a>

              <button
                onClick={() => scrollToSection('realisations')}
                className="px-10 py-5 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full font-bold text-lg text-white border border-white/30 hover:border-white/60 transition-all flex items-center justify-center gap-3"
              >
                <span>Voir les réalisations</span>
              </button>
            </div>

          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="text-white/60 rotate-90" size={28} />
        </div>
      </section>

      {/* Bandeau valeurs */}
      <section className="py-8 px-4 bg-gray-900 border-y border-red-500/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              { icon: '⭐', text: 'Qualité professionnelle' },
              { icon: '✨', text: 'Finitions impeccables' },
              { icon: '🧴', text: 'Produits premium' },
              { icon: '👔', text: 'Particuliers & Pros' },
              { icon: '❤️', text: 'Passion du détail' },
              { icon: '😊', text: 'Satisfaction garantie' },
            ].map((value, index) => (
              <div key={index} className="bg-gray-800/50 px-5 py-2 rounded-full flex items-center gap-2 border border-gray-700 hover:border-red-500/50 transition-all">
                <span className="text-lg">{value.icon}</span>
                <span className="font-semibold text-gray-300 text-sm">{value.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A propos */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-red-400 font-bold text-sm uppercase tracking-wider mb-4 block">Qui sommes-nous</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                L'excellence du <span className="text-red-400">detailing auto</span> à Trévé
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Brillance Auto 22 est votre spécialiste du nettoyage et du detailing automobile dans les Côtes-d'Armor.
                Installé à Trévé, nous mettons notre expertise et notre passion au service de votre véhicule.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Du simple nettoyage extérieur au polissage professionnel avec protection céramique,
                chaque prestation est réalisée avec les meilleurs produits et une attention extrême aux détails.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: <Sparkles size={24} />, label: 'Finitions premium' },
                  { icon: <Shield size={24} />, label: 'Protection longue durée' },
                  { icon: <Clock size={24} />, label: 'Sur rendez-vous' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-800/50 rounded-2xl p-4 text-center border border-gray-700">
                    <div className="text-red-400 flex justify-center mb-2">{item.icon}</div>
                    <p className="text-xs font-semibold text-gray-300">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-red-500/20">
                <img src="/action-decontamination.jpg" alt="Décontamination carrosserie Brillance Auto 22" className="w-full h-[500px] object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-red-600 rounded-2xl px-6 py-4 shadow-2xl shadow-red-500/40">
                <p className="text-white font-black text-2xl">100%</p>
                <p className="text-red-200 text-sm font-semibold">Satisfaction client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services avec prix */}
      <section id="services" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-red-400 font-bold text-sm uppercase tracking-wider mb-4 block">Ce que nous faisons</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Nos prestations</h2>
            <p className="text-xl text-gray-400">Une gamme complète pour l'entretien esthétique de votre véhicule</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className={`bg-gray-800/50 rounded-3xl p-8 shadow-2xl transition-all border-2 ${service.color} group relative`}>
                {service.badge && (
                  <div className="absolute -top-3 left-8">
                    <span className="bg-red-600 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-lg">{service.badge}</span>
                  </div>
                )}
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-red-400 transition-colors">{service.title}</h3>
                <p className="text-red-400 font-black text-2xl mb-5">{service.price}</p>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="text-red-500 flex-shrink-0 mt-0.5" size={15} />
                      <span className="text-sm text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block text-center py-3 rounded-xl border border-red-500/30 hover:border-red-500 hover:bg-red-500/10 text-red-400 font-semibold text-sm transition-all"
                >
                  Demander un devis →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVANT / APRES */}
      <section id="realisations" className="py-20 px-4 bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-red-400 font-bold text-sm uppercase tracking-wider mb-4 block">Nos travaux</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Avant / Après</h2>
            <p className="text-xl text-gray-400">Les résultats parlent d'eux-mêmes</p>
          </div>

          <div className="space-y-8">

            {/* VW Passat interieur */}
            <div className={`bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border-2 ${realisations[0].color} transition-all`}>
              <div className="grid md:grid-cols-2">
                <div className="relative bg-black flex items-center justify-center p-4">
                  <img src="/vw-avant.jpg" alt="VW Passat interieur avant nettoyage" className="w-full object-contain max-h-[420px]" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg">AVANT</span>
                  </div>
                </div>
                <div className="relative bg-black flex items-center justify-center p-4">
                  <img src="/vw-apres.jpg" alt="VW Passat interieur apres nettoyage" className="w-full object-contain max-h-[420px]" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-green-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg">APRES</span>
                  </div>
                </div>
              </div>
              <div className="p-8 border-t border-gray-800">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div>
                    <span className={`font-bold text-sm uppercase tracking-wider ${realisations[0].accent}`}>Nettoyage intérieur complet</span>
                    <h3 className="text-2xl font-black text-white mt-1">Volkswagen Passat</h3>
                  </div>
                  <p className="text-gray-400 md:ml-8 leading-relaxed">{realisations[0].description}</p>
                </div>
              </div>
            </div>

            {/* Peugeot rouge polissage */}
            <div className={`bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border-2 ${realisations[1].color} transition-all`}>
              <div className="grid md:grid-cols-2">
                <div className="relative bg-black flex items-center justify-center p-4">
                  <img src="/peugeot-rouge-avant.jpg" alt="Peugeot 207 carrosserie oxydee avant polissage" className="w-full object-contain max-h-[420px]" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg">AVANT</span>
                  </div>
                </div>
                <div className="relative bg-black flex items-center justify-center p-4">
                  <img src="/peugeot-rouge-apres.jpg" alt="Peugeot 207 carrosserie apres polissage" className="w-full object-contain max-h-[420px]" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-green-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg">APRES</span>
                  </div>
                </div>
              </div>
              <div className="p-8 border-t border-gray-800">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div>
                    <span className={`font-bold text-sm uppercase tracking-wider ${realisations[1].accent}`}>Correction de peinture</span>
                    <h3 className="text-2xl font-black text-white mt-1">Peugeot 207 — Polissage</h3>
                  </div>
                  <p className="text-gray-400 md:ml-8 leading-relaxed">{realisations[1].description}</p>
                </div>
              </div>
            </div>

            {/* Carrosserie noire avant/apres */}
            <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-700/30 hover:border-gray-500/50 transition-all">
              <div className="relative bg-black flex items-center justify-center p-4">
                <img src="/carrosserie-avant-apres.jpg" alt="Carrosserie et jantes avant apres nettoyage" className="w-full object-contain max-h-[420px]" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg">AVANT</span>
                  <ArrowRight className="text-orange-400" size={16} />
                  <span className="bg-green-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg">APRES</span>
                </div>
              </div>
              <div className="p-8 border-t border-gray-800">
                <span className="text-gray-400 font-bold text-sm uppercase tracking-wider">Nettoyage extérieur</span>
                <h3 className="text-2xl font-black text-white mt-1 mb-2">Carrosserie & Jantes</h3>
                <p className="text-gray-400 leading-relaxed">{realisations[2].description}</p>
              </div>
            </div>

            {/* Peugeot 208 avant/apres */}
            <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-700/30 hover:border-gray-500/50 transition-all">
              <div className="relative bg-black flex items-center justify-center p-4">
                <img src="/peugeot208-avant-apres.jpg" alt="Peugeot 208 noire avant apres nettoyage" className="w-full object-contain max-h-[420px]" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg">AVANT</span>
                  <ArrowRight className="text-orange-400" size={16} />
                  <span className="bg-green-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg">APRES</span>
                </div>
              </div>
              <div className="p-8 border-t border-gray-800">
                <span className="text-gray-400 font-bold text-sm uppercase tracking-wider">Nettoyage extérieur complet</span>
                <h3 className="text-2xl font-black text-white mt-1 mb-2">Peugeot 208</h3>
                <p className="text-gray-400 leading-relaxed">{realisations[3].description}</p>
              </div>
            </div>

            {/* Suzuki GSX-R showcase */}
            <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border-2 border-red-500/20 hover:border-red-500/50 transition-all">
              <div className="grid md:grid-cols-2">
                <div className="relative">
                  <img src="/suzuki-gsx.jpg" alt="Suzuki GSX-R apres detailing Brillance Auto 22" className="w-full h-80 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-red-400 font-bold text-sm uppercase tracking-wider mb-2">Detailing moto</span>
                  <h3 className="text-3xl font-black text-white mb-3">Suzuki GSX-R</h3>
                  <p className="text-red-400 font-bold mb-4">Nettoyage & mise en valeur</p>
                  <p className="text-gray-300 leading-relaxed">
                    Brillance Auto 22 s'occupe aussi des deux-roues. Nettoyage complet, traitement des plastiques,
                    brillance des carénages. Cette GSX-R noire est un vrai miroir après passage en atelier.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Pourquoi Brillance Auto 22 ?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '⭐', title: 'Qualité pro', desc: 'Produits et techniques de niveau professionnel' },
              { icon: '🧴', title: 'Produits premium', desc: 'Uniquement des produits haut de gamme' },
              { icon: '🏢', title: 'Particuliers & Pros', desc: 'Flottes, véhicules de société, particuliers' },
              { icon: '💎', title: 'Finitions parfaites', desc: 'Attention aux détails sur chaque prestation' },
            ].map((item, index) => (
              <div key={index} className="bg-gray-800/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-red-500/10 transition-all hover:-translate-y-2 border border-gray-700 hover:border-red-500/30 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-black text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-16 px-4 bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Zone d'intervention</h2>
            <p className="text-gray-400">Trévé (22600) et environs</p>
          </div>
          <div className="bg-gray-900 rounded-3xl p-8 border border-red-500/10">
            <div className="flex flex-wrap justify-center gap-3">
              {siteConfig.zone.mainCities.map((city, index) => (
                <span key={index} className="bg-gray-800 px-4 py-2 rounded-full text-sm font-semibold text-gray-300 border border-gray-700 hover:border-red-500/40 transition-all">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Comment ça marche ?</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {siteConfig.process.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-800/50 rounded-3xl p-5 shadow-xl text-center border border-gray-700 hover:border-red-500/30 transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-black text-xl shadow-lg shadow-red-500/20">
                    {step.number}
                  </div>
                  <h3 className="font-black text-white mb-1 text-sm">{step.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
                </div>
                {index < siteConfig.process.steps.length - 1 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-red-500/40" size={20} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Questions fréquentes</h2>
          </div>
          <div className="space-y-4">
            {siteConfig.faq.map((item, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-red-500/30 transition-all">
                <h3 className="font-black text-white mb-3 flex items-start gap-3">
                  <span className="text-red-500 flex-shrink-0">Q:</span>
                  {item.question}
                </h3>
                <p className="text-gray-400 leading-relaxed pl-8">
                  <span className="text-red-400 font-bold">R:</span> {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-red-400 font-bold text-sm uppercase tracking-wider mb-4 block">Nous contacter</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">{siteConfig.contact.title}</h2>
            <p className="text-gray-400">Contactez-nous par message pour un devis personnalisé</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-5">
              <div className="bg-gray-800/50 rounded-3xl p-7 border border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-500/20">
                    <MapPin className="text-white" size={22} />
                  </div>
                  <div>
                    <h3 className="font-black text-white mb-1">Adresse</h3>
                    <p className="text-gray-300 font-bold">51 Le Cosquer — Trévé (22600)</p>
                    <p className="text-gray-400 text-sm mt-1">Côtes-d'Armor, Bretagne</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-7 shadow-2xl shadow-red-500/20 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={22} />
                  </div>
                  <div>
                    <h3 className="font-black mb-1">Téléphone</h3>
                    <a href={phoneHref} className="text-2xl font-black hover:text-red-200 transition-colors block mb-1">
                      {siteConfig.contact.phone}
                    </a>
                    <p className="text-red-200 text-sm">Du lundi au vendredi 9h-17h30</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-3xl p-7 border border-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-500/20">
                    <Mail className="text-white" size={22} />
                  </div>
                  <div>
                    <h3 className="font-black text-white mb-1">Email</h3>
                    <p className="text-gray-300 text-sm">{siteConfig.contact.email}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-3xl p-7 border border-gray-700">
                <h3 className="font-black text-white mb-4">Horaires</h3>
                <div className="space-y-2">
                  {siteConfig.contact.schedule.hours.map((h, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span className="text-gray-400">{h.day}</span>
                      <span className={h.hours === 'Fermé' ? 'text-red-400' : 'text-gray-300 font-semibold'}>{h.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="text-red-400 text-sm font-bold mt-4">📞 Sur rendez-vous uniquement</p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-[350px] border-2 border-red-500/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.8!2d-2.8333!3d48.1667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDEwJzAwLjEiTiAywrA1MCcwMC4wIlc!5e0!3m2!1sfr!2sfr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Brillance Auto 22 - Trévé"
                ></iframe>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-7 border-2 border-red-500/20">
                <h3 className="text-xl font-black text-white mb-5 flex items-center gap-3">
                  <AlertCircle className="text-red-400" size={24} />
                  Demandez votre devis
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Contactez-nous par message privé en précisant votre véhicule et les prestations souhaitées.
                  Nous vous répondons rapidement avec un devis personnalisé.
                </p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-green-500 hover:bg-green-600 rounded-2xl font-black text-white text-lg transition-all shadow-lg shadow-green-500/20 hover:scale-105"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Écrire sur WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bouton WhatsApp flottant */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:scale-110 transition-all duration-300"
        title="Contacter sur WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 border-t border-red-500/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-900 border border-red-500/20">
                  <img src="/logo-brillance.jpg" alt="Brillance Auto 22" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-red-400">Brillance Auto 22</h3>
                  <p className="text-gray-500 text-xs">Detailing automobile professionnel</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">51 Le Cosquer — Trévé (22600)</p>
              <p className="text-gray-400 text-sm">Côtes-d'Armor, Bretagne</p>
            </div>
            <div>
              <h3 className="text-base font-black mb-4 text-red-400">Navigation</h3>
              <div className="space-y-2">
                {['accueil', 'services', 'realisations', 'contact'].map(section => (
                  <button key={section} onClick={() => scrollToSection(section)} className="block text-gray-400 hover:text-red-400 transition-colors capitalize font-semibold text-sm">
                    {section}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base font-black mb-4 text-red-400">Contact</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <p className="font-black text-lg text-white">{siteConfig.contact.phone}</p>
                <p>{siteConfig.contact.email}</p>
                <p className="mt-3">Lun–Ven : 9h00–17h30</p>
                <p className="text-red-400 font-semibold">Sur rendez-vous uniquement</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-gray-600 text-xs text-center md:text-left">
              © 2026 Brillance Auto 22 — Tous droits réservés — Trévé (22600)
            </p>
            <p className="text-gray-700 text-xs">
              Site créé par{' '}
              <a
                href="https://www.avalon-stratege.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 transition-colors font-semibold"
              >
                Avalon Stratège
              </a>
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}