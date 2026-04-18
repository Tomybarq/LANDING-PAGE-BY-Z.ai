import React, { useState, useEffect } from 'react'

const t = {
  ar: { home: 'الرئيسية', services: 'خدماتنا', portfolio: 'أعمالنا', about: 'تعرف علينا', contact: 'تواصل معنا', cta: 'ابدأ الآن' },
  en: { home: 'Home', services: 'Services', portfolio: 'Portfolio', about: 'About', contact: 'Contact', cta: 'Get Started' }
}

export default function Navbar({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const T = t[lang]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
      transition: 'all 0.3s ease', padding: '16px 0'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: '24px', fontWeight: 800, background: 'linear-gradient(135deg, #6C63FF, #00D4FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Ghazara | غزارة
        </div>

        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {['home','services','portfolio','about','contact'].map(key => (
            <a key={key} href={`#${key}`} style={{ color: '#ccc', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#6C63FF'}
              onMouseLeave={e => e.target.style.color = '#ccc'}>
              {T[key]}
            </a>
          ))}
          <button onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            style={{ background: 'rgba(108,99,255,0.15)', border: '1px solid #6C63FF', color: '#6C63FF', padding: '6px 14px', borderRadius: '20px', cursor: 'pointer', fontSize: '13px' }}>
            {lang === 'ar' ? 'EN' : 'ع'}
          </button>
          <a href="#contact" style={{ background: 'linear-gradient(135deg, #6C63FF, #00D4FF)', color: '#fff', padding: '10px 24px', borderRadius: '25px', textDecoration: 'none', fontWeight: 600, fontSize: '14px' }}>
            {T.cta}
          </a>
        </div>
      </div>
    </nav>
  )
}
