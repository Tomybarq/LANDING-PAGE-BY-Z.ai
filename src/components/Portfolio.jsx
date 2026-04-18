import React from 'react'
import { useReveal } from '../hooks/useReveal'

const projects = [
  { img: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80', cat_ar: 'تحليلات ذكاء اصطناعي', cat_en: 'AI Analytics', title_ar: 'لوحة تحكم ذكية', title_en: 'Smart Dashboard' },
  { img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80', cat_ar: 'هوية بصرية', cat_en: 'Brand Identity', title_ar: 'تصميم هوية متكاملة', title_en: 'Complete Brand Design' },
  { img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80', cat_ar: 'أتمتة ذكية', cat_en: 'Smart Automation', title_ar: 'نظام أتمتة تسويقية', title_en: 'Marketing Automation System' },
  { img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80', cat_ar: 'سوشيال ميديا', cat_en: 'Social Media', title_ar: 'إدارة محتوى رقمي', title_en: 'Digital Content Management' },
]

function ProjectCard({ p, lang, index }) {
  const { ref, visible } = useReveal()
  return (
    <div ref={ref} style={{
      borderRadius: '20px', overflow: 'hidden', position: 'relative', cursor: 'pointer',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.97)',
      transition: `all 0.6s ease ${index * 0.12}s`
    }}
      onMouseEnter={e => e.currentTarget.querySelector('.overlay').style.opacity = '1'}
      onMouseLeave={e => e.currentTarget.querySelector('.overlay').style.opacity = '0'}>
      <img src={p.img} alt={lang === 'ar' ? p.title_ar : p.title_en}
        style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
        onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.target.style.transform = 'scale(1)'} />
      <div className="overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(108,99,255,0.92), transparent)', opacity: 0, transition: 'opacity 0.3s ease', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '24px' }}>
        <div style={{ color: '#00D4FF', fontSize: '13px', marginBottom: '8px', fontWeight: 600 }}>{lang === 'ar' ? p.cat_ar : p.cat_en}</div>
        <div style={{ color: '#fff', fontSize: '18px', fontWeight: 700 }}>{lang === 'ar' ? p.title_ar : p.title_en}</div>
      </div>
    </div>
  )
}

export default function Portfolio({ lang }) {
  const { ref, visible } = useReveal()
  return (
    <section id="portfolio" style={{ padding: '100px 0' }}>
      <div className="container">
        <div ref={ref} style={{ textAlign: 'center', marginBottom: '64px', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, marginBottom: '16px' }}>
            {lang === 'ar' ? 'أعمالنا' : 'Our Portfolio'}
          </h2>
          <p style={{ color: '#888', fontSize: '18px' }}>
            {lang === 'ar' ? 'اكتشف كيف حوّلت حلول غزارة العلامات التجارية عبر القطاعات' : 'Discover how Ghazara solutions transformed brands across sectors'}
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {projects.map((p, i) => <ProjectCard key={i} p={p} lang={lang} index={i} />)}
        </div>
      </div>
    </section>
  )
}
