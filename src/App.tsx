/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Phone, 
  Instagram, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle,
  Shield,
  Clock,
  Award,
  Maximize,
  ArrowUpRight
} from 'lucide-react';
import { useState, useEffect } from 'react';

const WHATSAPP_LINK = "https://wa.me/5547988809159?text=Ol%C3%A1%20vim%20pelo%20site%20e%20quero%20um%20or%C3%A7amento";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Especialistas em fechamento de sacadas e projetos em vidro sob medida",
      subtitle: "Vidraçaria Carvalho & Souza",
      desc: "Mais de 25 anos trazendo qualidade, segurança e compromisso em vidraçaria para você e seu imóvel.",
      img: "https://i.postimg.cc/90bTqTk1/Chat-GPT-Image-3-de-mai-de-2026-12-26-38.png",
      showBranding: true,
      fit: "object-cover"
    },
    {
      title: "Box de Banheiro com design moderno e sofisticado",
      subtitle: "Elegância e Conforto",
      desc: "Modelos personalizados com vidro temperado e ferragens de alta qualidade em diversas cores.",
      img: "https://i.postimg.cc/C1HsC1PJ/Foto-de-box-de-banheiro.png",
      showBranding: false,
      fit: "object-cover"
    },
    {
      title: "Soluções completas para seu ambiente comercial ou residencial",
      subtitle: "Vidraçaria Carvalho & Souza",
      desc: "Atendimento profissional em Balneário Camboriú e região com garantia e suporte técnico.",
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200",
      showBranding: true,
      fit: "object-cover"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Aonde Atendemos', href: '#atendimento' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav 
        id="navbar"
        className={`relative w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white py-4 shadow-sm' : 'bg-white py-6 border-b border-gray-50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center text-sm font-medium tracking-tight">
          <div className="flex items-center gap-2">
            <img 
              src="https://i.postimg.cc/GpFCQ2hW/Logo.jpg" 
              alt="Logo Carvalho & Souza" 
              className="w-10 h-10 object-contain rounded-full"
            />
            <span className="text-xl font-serif font-bold text-black">
              Vidraçaria Carvalho & Souza
            </span>
          </div>

          <div className="hidden md:flex gap-8 group">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="transition-colors hover:text-gray-500 underline-offset-4 hover:underline text-black"
              >
                {link.name}
              </a>
            ))}
          </div>

          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full hover:shadow-[0_4px_12px_rgba(37,211,102,0.3)] transition-all active:scale-95 font-bold"
          >
            <MessageCircle size={18} />
            <span>Orçamento</span>
          </a>

          <button 
            className="md:hidden text-black focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu className="text-black" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-8 flex flex-col gap-6 md:hidden shadow-xl"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium border-b border-gray-50 pb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={WHATSAPP_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] text-white py-4 rounded-xl flex justify-center items-center gap-2 font-bold shadow-lg"
              >
                <MessageCircle size={20} />
                Solicitar Orçamento
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[85vh] w-full flex items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 z-0 text-center flex items-center justify-center bg-gray-900">
              <div className="absolute inset-0 z-0">
                <img 
                  src={heroSlides[currentSlide].img} 
                  alt={heroSlides[currentSlide].title} 
                  className={`w-full h-full transition-all duration-1000 ${
                    heroSlides[currentSlide].fit === 'object-contain' 
                      ? 'object-contain scale-100' 
                      : 'object-cover scale-105'
                  }`}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full h-full flex flex-col items-center justify-start pt-10 md:pt-14 text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="max-w-3xl text-white flex flex-col items-center"
              >
                {heroSlides[currentSlide].showBranding ? (
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6 text-sm tracking-wide">
                    <img 
                      src="https://i.postimg.cc/GpFCQ2hW/Logo.jpg" 
                      className="w-8 h-8 object-contain rounded-full" 
                      alt="" 
                    />
                    <span className="font-bold uppercase tracking-widest">{heroSlides[currentSlide].subtitle}</span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6 text-sm tracking-wide">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span>{heroSlides[currentSlide].subtitle}</span>
                  </div>
                )}
                
                <h1 className="text-3xl md:text-5xl font-serif font-bold leading-[1.1] mb-6">
                  {heroSlides[currentSlide].title}
                </h1>
                
                <p className="text-base text-gray-300 font-light mb-10 max-w-lg leading-relaxed mx-auto">
                  {heroSlides[currentSlide].desc}
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-5 bg-[#25D366] text-white rounded-full flex items-center justify-center gap-3 text-lg font-bold hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all group"
                  >
                    <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
                    Orçamento no WhatsApp
                  </motion.a>
                  
                  <div className="text-sm font-medium tracking-wider text-gray-400">
                    Atendimento em Balneário Camboriú e região
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-10 right-12 z-20 flex gap-4">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 transition-all rounded-full ${currentSlide === i ? 'w-12 bg-white' : 'w-4 bg-white/30'}`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce cursor-pointer flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent"></div>
        </motion.div>
      </header>

      {/* About Us Section */}
      <section id="sobre" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-black"></div>
              <span className="text-xs uppercase tracking-widest font-bold">A Vidraçaria</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              Excelência e Tradição na Arte de Transformar Ambientes
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              A Vidraçaria Carvalho e Souza atua há mais de 25 anos oferecendo soluções em vidro com qualidade, segurança e acabamento impecável. Nosso foco é a instalação e manutenção de sacadas, garantindo conforto, proteção e valorização do seu imóvel.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-serif font-bold italic text-black">25+</span>
                <span className="text-xs uppercase tracking-wider text-gray-500 font-bold">Anos de Mercado</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-serif font-bold italic text-black">1k+</span>
                <span className="text-xs uppercase tracking-wider text-gray-500 font-bold">Projetos Entregues</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {[
                "Especialistas em instalação e manutenção de sacadas",
                "Compromisso com qualidade, segurança e prazo",
                "Atendimento profissional e personalizado",
                "Equipe técnica altamente qualificada"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-black shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://i.postimg.cc/mk3Mf5fS/Foto-de-espelho-sob-medida.png" 
                alt="Instalação real Carvalho & Souza" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-black text-white p-10 rounded-2xl shadow-2xl hidden lg:block">
              <p className="text-2xl font-serif italic mb-4">"Garantimos a melhor experiência do início ao fim."</p>
              <div className="flex items-center gap-3 opacity-60">
                <img 
                  src="https://i.postimg.cc/GpFCQ2hW/Logo.jpg" 
                  className="w-8 h-8 object-contain rounded-full" 
                  alt="" 
                />
                <p className="text-xs uppercase tracking-widest font-bold">Equipe Vidraçaria Carvalho & Souza</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="section-padding overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-20 text-center">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 mb-4">O que fazemos</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Nossos Serviços Especializados</h2>
            <div className="w-20 h-1 bg-black"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fechamento de Sacadas",
                highlight: "Sistema Stanley e Trona",
                desc: "Tecnologia de ponta para total vedação e acústica. O destaque principal da nossa empresa.",
                img: "https://i.postimg.cc/90bTqTk1/Chat-GPT-Image-3-de-mai-de-2026-12-26-38.png",
                isMain: true,
                fit: "object-cover"
              },
              {
                title: "Box de Banheiro",
                desc: "Modelos modernos com vidro temperado e ferragens em diversas cores para seu conforto.",
                img: "https://i.postimg.cc/sgxBwXxr/Foto-box-horizontal.png",
                fit: "object-cover",
                position: "object-center"
              },
              {
                title: "Manutenção de Sacadas",
                desc: "Revisão geral, troca de roldanas e vedações para garantir o funcionamento perfeito.",
                img: "https://i.postimg.cc/xT5BfptC/Foto-manutencao-de-sacada.png",
                fit: "object-cover"
              },
              {
                title: "Guarda-corpo em Vidro",
                desc: "Segurança e elegância para escadas, mezaninos e terraços com design minimalista.",
                img: "https://i.postimg.cc/X7Ky1mnJ/Foto-de-guarda-corpo.png",
                fit: "object-cover"
              },
              {
                title: "Esquadrias de Alumínio",
                desc: "Portas e janelas sob medida com alta durabilidade e isolamento termoacústico.",
                img: "https://i.postimg.cc/9QTgkWrW/Foto-de-esquadria-de-aluminio.png",
                fit: "object-cover"
              },
              {
                title: "Espelhos sob medida",
                desc: "Acabamento impecável com lapidação ou bisotê para ampliar e iluminar seu ambiente.",
                img: "https://i.postimg.cc/mk3Mf5fS/Foto-de-espelho-sob-medida.png",
                fit: "object-cover"
              }
            ].map((service, i) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl ${service.isMain ? 'ring-2 ring-black ring-offset-4' : 'border border-gray-100'}`}
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img 
                    src={service.img} 
                    alt={service.title}
                    className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${service.fit || 'object-cover'} ${service.position || 'object-center'}`}
                  />
                </div>
                <div className="p-8 bg-white">
                  {service.isMain && (
                    <span className="inline-block px-3 py-1 bg-black text-white text-[10px] uppercase font-bold tracking-widest rounded-full mb-4">
                      Destaque Principal
                    </span>
                  )}
                  <h3 className="text-2xl font-serif font-bold mb-3">{service.title}</h3>
                  {service.highlight && <p className="text-black font-semibold text-sm mb-2">{service.highlight}</p>}
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-bold hover:shadow-[0_4px_12px_rgba(37,211,102,0.3)] transition-all hover:-translate-y-0.5"
                  >
                    Solicitar Orçamento <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Portfolio */}
      <section id="portfolio" className="bg-black text-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 mb-4 block">Portfólio</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold">Projetos Realizados</h2>
            </div>
            <p className="max-w-md text-gray-400 text-lg">
              Veja alguns dos nossos trabalhos mais recentes. Focamos em detalhes que fazem a diferença no acabamento final.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "https://i.postimg.cc/5yH48HpP/Foto-sacada-1.png",
              "https://i.postimg.cc/4d07CR0g/Foto-box-2.png",
              "https://i.postimg.cc/YC8QXZtp/Foto-janela-3.png",
              "https://i.postimg.cc/DwY84T2T/Foto-espelho-4.png",
              "https://i.postimg.cc/nLBpVbr1/Foto-guarda-corpo-5.png",
              "https://i.postimg.cc/C1rvWd0r/Foto-esquadria-6.jpg",
              "https://i.postimg.cc/XqM2VmZk/Foto-de-porta-de-vidro-7.jpg",
              "https://i.postimg.cc/zBTCkBBQ/Foto-de-sacada-Stanley.jpg"
            ].map((url, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square relative group overflow-hidden rounded-lg"
              >
                <img src={url} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Projeto Vidraçaria" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize className="text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="section-padding flex items-center justify-center bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { icon: Shield, title: "Qualidade Garantida", desc: "Materiais certificados e equipe experiente." },
              { icon: Clock, title: "Prazo Imbatível", desc: "Entrega conforme o acordado, sem atrasos." },
              { icon: Award, title: "25 Anos de Tradição", desc: "Referência em Balneário e Região." },
              { icon: Phone, title: "Atendimento Rápido", desc: "Suporte e retorno ágil em todas as etapas." }
            ].map((diff, i) => (
              <motion.div 
                key={diff.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-gray-100 rounded-2xl hover:border-black transition-colors"
              >
                <diff.icon size={32} className="mb-4 stroke-1" />
                <h3 className="text-xl font-bold mb-2">{diff.title}</h3>
                <p className="text-gray-500 text-sm">{diff.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-gray-50 p-12 rounded-3xl">
            <h2 className="text-4xl font-serif font-bold mb-6 italic">Por que escolher a Vidraçaria Carvalho & Souza?</h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Nossa abordagem combina o artesanato tradicional da vidraçaria com as tecnologias mais modernas de fechamento e vedação. Cada projeto é tratado como único.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold">Solicitação de Orçamento</h4>
                  <p className="text-sm text-gray-500">Mande uma foto ou medidas pelo WhatsApp.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold">Visita Técnica</h4>
                  <p className="text-sm text-gray-500">Confirmamos as medidas para um orçamento preciso.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold">Execução Rápida</h4>
                  <p className="text-sm text-gray-500">Instalação limpa e profissional no seu prazo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 mb-4">Feedback</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">O que dizem nossos clientes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Luciana Silva", text: "Serviço impecável e dentro do prazo. Recomendo muito! O fechamento da minha sacada ficou perfeito." },
              { name: "Roberto Menezes", text: "Minha sacada ficou perfeita, equipe muito profissional. Melhor custo-benefício de Itapema." },
              { name: "Cláudia Pereira", text: "Atendimento rápido e excelente qualidade no acabamento. O box do banheiro ficou muito elegante." }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between"
              >
                <div className="mb-6">
                  <div className="flex gap-1 text-black mb-4">
                    {[1, 2, 3, 4, 5].map((s) => <CheckCircle2 key={s} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-lg italic text-gray-700 leading-relaxed font-serif">"{testimonial.text}"</p>
                </div>
                <div>
                  <p className="font-bold text-black">{testimonial.name}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Cliente Verificado</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section id="atendimento" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto border border-black px-8 py-3 md:px-14 md:py-4 rounded-3xl overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Atendimento Profissional em Toda a Região</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Levamos nossa experiência até você. Atendemos com prontidão nas principais cidades do litoral catarinense.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {["Balneário Camboriú", "Camboriú", "Itapema", "Porto Bello", "Itajaí", "Navegantes", "Penha", "Barra Velha", "Balneário Piçarras"].map(city => (
                  <div key={city} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                    <span className="font-bold uppercase text-xs tracking-widest">{city}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-square bg-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800 p-2 sm:p-4 flex items-center justify-center translate-y-2">
              <img 
                src="https://i.postimg.cc/g03jSB9D/mapa-de-atendimento.png" 
                alt="Mapa de Atendimento Carvalho & Souza" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section / Footer */}
      <section id="contato" className="section-padding bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
            <div>
              <h2 className="text-5xl md:text-7xl font-serif font-bold mb-12">Vamos iniciar seu projeto?</h2>
              
              <div className="space-y-10">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center transition-all group-hover:scale-110">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase text-[10px] tracking-[0.2em] mb-1">Telefone / WhatsApp</p>
                    <a href={WHATSAPP_LINK} className="text-2xl font-bold hover:text-gray-300 transition-colors">(47) 98880-9159</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center transition-all group-hover:scale-110">
                    <Instagram size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase text-[10px] tracking-[0.2em] mb-1">Instagram</p>
                    <a href="https://instagram.com/carvalhosouza997" target="_blank" className="text-2xl font-bold hover:text-gray-300 transition-colors">@carvalhosouza997</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-[#EA4335] flex items-center justify-center transition-all group-hover:scale-110">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase text-[10px] tracking-[0.2em] mb-1">E-mail</p>
                    <a href="mailto:carvalhosouza997@gmail.com" className="text-2xl font-bold hover:text-gray-300 transition-colors">carvalhosouza997@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm">
              <h3 className="text-2xl font-serif font-bold mb-8">Solicite seu Orçamento Gratuito</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Nome Completo</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 pb-4 focus:outline-none focus:border-white transition-colors" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Telefone / Celular</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 pb-4 focus:outline-none focus:border-white transition-colors" placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">Sua Mensagem / Local da Obra</label>
                  <textarea rows={3} className="w-full bg-transparent border-b border-white/20 pb-4 focus:outline-none focus:border-white transition-colors resize-none" placeholder="Ex: Sacada em Balneário Camboriú..."></textarea>
                </div>
                <button className="w-full bg-white text-black py-5 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-3 active:scale-[0.98]">
                  Enviar Mensagem <ArrowUpRight size={20} />
                </button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-white/10 flex flex-col items-center gap-4">
                <p className="text-gray-400 text-sm">Ou se preferir, clique abaixo para falar agora:</p>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  className="w-full bg-[#25D366] text-white py-4 rounded-full flex justify-center items-center gap-3 font-bold text-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all"
                >
                  <MessageCircle size={24} />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 gap-6">
            <div className="flex items-center gap-3 group">
              <img 
                src="https://i.postimg.cc/GpFCQ2hW/Logo.jpg" 
                alt="Logo Carvalho & Souza" 
                className="w-12 h-12 object-contain rounded-full"
              />
              <span className="text-xl font-serif font-bold transition-colors group-hover:text-gray-300">Vidraçaria Carvalho & Souza</span>
            </div>
            
            <p className="text-gray-500 text-xs uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} Vidraçaria Carvalho e Souza. Todos os direitos reservados.
            </p>
            
            <div className="flex gap-8 text-[10px] uppercase font-bold tracking-widest text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Floating WhatsApp Button */}
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={WHATSAPP_LINK} 
        target="_blank" 
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#128C7E] transition-colors group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 bg-white text-black py-2 px-4 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">
          Falar com Especialista
        </span>
      </motion.a>
    </div>
  );
}
