import React from 'react'

const t = {
  ar: {
    badge: '🚀 نُحدث ثورة في علامتك التجارية',
    title: 'حلول مبتكرة مدعومة\nبالذكاء الاصطناعي',
    subtitle: 'نُمكّن الشركات والمنظمات في الشرق الأوسط من تحقيق نمو مستدام من خلال استراتيجيات التسويق الرقمي والأتمتة الذكية.',
    cta1: 'استكشف أعمالنا', cta2: 'حدد موعد استشارة',
    stat1: '+50', label1: 'عميل راضٍ',
    stat2: '+3', label2: 'سنوات خبرة',
    stat3: '100%', label3: 'نتائج ملموسة'
  },
  en: {
    badge: '🚀 Revolutionizing Your Brand with AI',
    title: 'Innovative Solutions\nPowered by AI',
    subtitle: 'Empowering businesses and NGOs across the Middle East with sustainable growth through digital marketing and smart automation.',
    cta1: 'Explore Our Work', cta2: 'Schedule a Consultation',
    stat1: '50+', label1: 'Happy Clients',
    stat2: '3+', label2: 'Years Experience',
    stat3: '100%', label3: 'Measurable Results'
  }
}

export default function Hero({ lang }) {
  const T = t[lang]
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '80px' }}>
      {/* Background gradient */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 60% 50%, rgba(108,99,255,0.15) 0%, transparent 70%), radial-gradient(ellipse at 20% 80%, rgba(0,212,255,0.1) 0%, transparent 60%)' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '80px 24px' }}>
        <div style={{ display: 'inline-block', background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.3)', borderRadius: '30px', padding: '8px 20px', marginBottom: '32px', fontSize: '14px', color: '#a09cf7' }}>
          {T.badge}
        </div>

        <h1 style={{ fontSize: 'clamp(40px, 7vw, 80px)', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', whiteSpace: 'pre-line' }}>
          <span style={{ background: 'linear-gradient(135deg, #ffffff 0%, #a09cf7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {T.title}
          </span>
        </h1>

        <p style={{ fontSize: '18px', color: '#888', maxWidth: '600px', margin: '0 auto 48px', lineHeight: 1.8 }}>
          {T.subtitle}
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '80px' }}>
          <a href="#portfolio" style={{ background: 'linear-gradient(135deg, #6C63FF, #00D4FF)', color: '#fff', padding: '16px 36px', borderRadius: '30px', textDecoration: 'none', fontWeight: 700, fontSize: '16px' }}>
            {T.cta1}
          </a>
          <a href="#contact" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', padding: '16px 36px', borderRadius: '30px', textDecoration: 'none', fontWeight: 600, fontSize: '16px' }}>
            {T.cta2}
          </a>
        </div>

        <div style={{ display: 'flex', gap: '60px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { val: T.stat1, label: T.label1 },
            { val: T.stat2, label: T.label2 },
            { val: T.stat3, label: T.label3 }
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', fontWeight: 900, background: 'linear-gradient(135deg, #6C63FF, #00D4FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{s.val}</div>
              <div style={{ color: '#888', fontSize: '14px', marginTop: '4px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
