import React, { useEffect, useState } from 'react'

const t = {
  ar: {
    badge: '🚀 نُحدث ثورة في علامتك التجارية',
    title1: 'حلول مبتكرة مدعومة',
    title2: 'بالذكاء الاصطناعي',
    subtitle: 'نُمكّن الشركات والمنظمات في الشرق الأوسط من تحقيق نمو مستدام من خلال استراتيجيات التسويق الرقمي والأتمتة الذكية.',
    cta1: 'استكشف أعمالنا', cta2: 'حدد موعد استشارة',
    stat1: '+50', label1: 'عميل راضٍ',
    stat2: '+3', label2: 'سنوات خبرة',
    stat3: '100%', label3: 'نتائج ملموسة'
  },
  en: {
    badge: '🚀 Revolutionizing Your Brand with AI',
    title1: 'Innovative Solutions',
    title2: 'Powered by AI',
    subtitle: 'Empowering businesses and NGOs across the Middle East with sustainable growth through digital marketing and smart automation.',
    cta1: 'Explore Our Work', cta2: 'Schedule a Consultation',
    stat1: '50+', label1: 'Happy Clients',
    stat2: '3+', label2: 'Years Experience',
    stat3: '100%', label3: 'Measurable Results'
  }
}

export default function Hero({ lang }) {
  const T = t[lang]
  const [loaded, setLoaded] = useState(false)
  useEffect(() => { setTimeout(() => setLoaded(true), 100) }, [])

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '80px' }}>
      {/* Animated orbs */}
      <div className="orb" style={{ width: 600, height: 600, background: 'rgba(108,99,255,0.12)', top: '-100px', right: '-100px', animationDelay: '0s' }} />
      <div className="orb" style={{ width: 400, height: 400, background: 'rgba(0,212,255,0.08)', bottom: '0', left: '-50px', animationDelay: '2s' }} />
      <div className="orb" style={{ width: 300, height: 300, background: 'rgba(255,107,107,0.06)', top: '40%', left: '40%', animationDelay: '4s' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '80px 24px' }}>

        <div className={loaded ? 'animate-fadeInUp' : ''} style={{ opacity: loaded ? 1 : 0 }}>
          <div style={{ display: 'inline-block', background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.3)', borderRadius: '30px', padding: '8px 20px', marginBottom: '32px', fontSize: '14px', color: '#a09cf7' }}>
            {T.badge}
          </div>
        </div>

        <div className={loaded ? 'animate-fadeInUp delay-200' : ''} style={{ opacity: loaded ? 1 : 0 }}>
          <h1 style={{ fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px' }}>
            <span style={{ color: '#fff', display: 'block' }}>{T.title1}</span>
            <span className="gradient-text" style={{ display: 'block' }}>{T.title2}</span>
          </h1>
        </div>

        <div className={loaded ? 'animate-fadeInUp delay-300' : ''} style={{ opacity: loaded ? 1 : 0 }}>
          <p style={{ fontSize: '18px', color: '#888', maxWidth: '600px', margin: '0 auto 48px', lineHeight: 1.8 }}>
            {T.subtitle}
          </p>
        </div>

        <div className={loaded ? 'animate-fadeInUp delay-400' : ''} style={{ opacity: loaded ? 1 : 0, display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '80px' }}>
          <a href="#portfolio" className="btn-primary" style={{ padding: '16px 36px', borderRadius: '30px', textDecoration: 'none', fontWeight: 700, fontSize: '16px', display: 'inline-block' }}>
            {T.cta1}
          </a>
          <a href="#contact" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '16px 36px', borderRadius: '30px', textDecoration: 'none', fontWeight: 600, fontSize: '16px', transition: 'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}>
            {T.cta2}
          </a>
        </div>

        <div style={{ display: 'flex', gap: '60px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { val: T.stat1, label: T.label1, delay: 'delay-400' },
            { val: T.stat2, label: T.label2, delay: 'delay-500' },
            { val: T.stat3, label: T.label3, delay: 'delay-600' }
          ].map((s, i) => (
            <div key={i} className={loaded ? `animate-counter ${s.delay}` : ''} style={{ textAlign: 'center', opacity: loaded ? 1 : 0 }}>
              <div className="animate-pulse-glow" style={{ fontSize: '48px', fontWeight: 900, background: 'linear-gradient(135deg, #6C63FF, #00D4FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', borderRadius: '8px' }}>{s.val}</div>
              <div style={{ color: '#888', fontSize: '14px', marginTop: '4px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
