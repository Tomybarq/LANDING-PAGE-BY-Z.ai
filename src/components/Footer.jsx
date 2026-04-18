import React from 'react'

export default function Footer({ lang }) {
  return (
    <footer style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '60px 0 30px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '60px', marginBottom: '48px' }}>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 800, background: 'linear-gradient(135deg, #6C63FF, #00D4FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '16px' }}>
              Ghazara | غزارة
            </div>
            <p style={{ color: '#888', lineHeight: 1.8, maxWidth: '300px' }}>
              {lang === 'ar' ? 'حلول رقمية مبتكرة مدعومة بالذكاء الاصطناعي لنمو مستدام.' : 'Innovative AI-powered digital solutions for sustainable growth.'}
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              <a href="https://www.instagram.com/ghazaragroup/" target="_blank" rel="noopener noreferrer"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '10px 16px', color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>
                Instagram
              </a>
              <a href={`https://wa.me/967783334002`} target="_blank" rel="noopener noreferrer"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '10px 16px', color: '#ccc', textDecoration: 'none', fontSize: '14px' }}>
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '20px', color: '#fff' }}>{lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}</h4>
            {(lang === 'ar' ? ['الرئيسية','خدماتنا','أعمالنا','تعرف علينا','تواصل معنا'] : ['Home','Services','Portfolio','About','Contact']).map((l, i) => (
              <a key={i} href={`#${['home','services','portfolio','about','contact'][i]}`}
                style={{ display: 'block', color: '#888', textDecoration: 'none', marginBottom: '10px', fontSize: '15px' }}
                onMouseEnter={e => e.target.style.color = '#6C63FF'}
                onMouseLeave={e => e.target.style.color = '#888'}>
                {l}
              </a>
            ))}
          </div>

          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '20px', color: '#fff' }}>{lang === 'ar' ? 'تواصل معنا' : 'Contact'}</h4>
            <p style={{ color: '#888', fontSize: '15px', marginBottom: '8px' }}>info@ghazara.net</p>
            <p style={{ color: '#888', fontSize: '15px', marginBottom: '8px' }}>+967 783 334 002</p>
            <p style={{ color: '#888', fontSize: '15px' }}>{lang === 'ar' ? 'الشرق الأوسط' : 'Middle East'}</p>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px', textAlign: 'center', color: '#555', fontSize: '14px' }}>
          © 2025 Ghazara | غزارة. {lang === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'} | {lang === 'ar' ? 'مدعوم بالذكاء الاصطناعي 🚀' : 'Powered by AI 🚀'}
        </div>
      </div>
    </footer>
  )
}
