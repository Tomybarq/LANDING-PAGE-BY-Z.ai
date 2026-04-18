import React, { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

// Backend function URL
const API_URL = 'https://tomy-barq-d247eff3.base44.app/functions/contactFormHandler'

export default function Contact({ lang }) {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const { ref, visible } = useReveal()

  const T = {
    ar: {
      title: 'تواصل معنا', sub: 'أرسل لنا رسالة وابدأ تحولك الرقمي.',
      name: 'الاسم الكامل', email: 'البريد الإلكتروني', service: 'الخدمة المطلوبة', msg: 'رسالتك',
      send: 'أرسل الرسالة', sending: '⏳ جاري الإرسال...',
      success: '✅ تم الإرسال! سنتواصل معك قريباً.',
      error: '❌ حدث خطأ. تواصل معنا عبر واتساب.',
      wa: 'تواصل عبر واتساب', info_email: 'info@ghazara.net',
      phone: '+967 783 334 002', location: 'الشرق الأوسط',
      emailLabel: 'البريد الإلكتروني', phoneLabel: 'الهاتف', locationLabel: 'الموقع',
      retry: 'إرسال رسالة أخرى'
    },
    en: {
      title: 'Get in Touch', sub: 'Send us a message and start your digital transformation.',
      name: 'Full Name', email: 'Email Address', service: 'Service Interest', msg: 'Your Message',
      send: 'Send Message', sending: '⏳ Sending...',
      success: '✅ Sent! We will contact you soon.',
      error: '❌ Something went wrong. Contact us on WhatsApp.',
      wa: 'Chat on WhatsApp', info_email: 'info@ghazara.net',
      phone: '+967 783 334 002', location: 'Middle East',
      emailLabel: 'Email', phoneLabel: 'Phone', locationLabel: 'Location',
      retry: 'Send another message'
    }
  }[lang]

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          lang,
          source: 'Ghazara Landing Page'
        })
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', service: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px', padding: '16px', color: '#fff',
    fontSize: '15px', outline: 'none', width: '100%',
    fontFamily: 'inherit', transition: 'border-color 0.3s ease'
  }

  return (
    <section id="contact" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="orb" style={{ width: 400, height: 400, background: 'rgba(108,99,255,0.08)', top: '50%', right: '-100px' }} />

      <div className="container">
        <div ref={ref} style={{ textAlign: 'center', marginBottom: '64px', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.7s ease' }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, marginBottom: '16px' }}>{T.title}</h2>
          <p style={{ color: '#888', fontSize: '18px' }}>{T.sub}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>

          {/* Info Side */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(-30px)', transition: 'all 0.7s ease 0.2s' }}>
            <a href="https://wa.me/967783334002" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'linear-gradient(135deg, #25D366, #128C7E)', color: '#fff', padding: '16px 28px', borderRadius: '16px', textDecoration: 'none', fontWeight: 700, fontSize: '16px', marginBottom: '32px', transition: 'transform 0.2s ease' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              💬 {T.wa}
            </a>

            {[
              { icon: '📧', label: T.emailLabel, val: T.info_email },
              { icon: '📱', label: T.phoneLabel, val: T.phone },
              { icon: '📍', label: T.locationLabel, val: T.location }
            ].map((item, i) => (
              <div key={i} className="card-hover" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px', display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '24px' }}>{item.icon}</span>
                <div>
                  <div style={{ color: '#888', fontSize: '13px', marginBottom: '4px' }}>{item.label}</div>
                  <div style={{ fontWeight: 600 }}>{item.val}</div>
                </div>
              </div>
            ))}

            {/* Trust badge */}
            <div style={{ marginTop: '24px', background: 'rgba(108,99,255,0.08)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '24px' }}>⚡</span>
              <div style={{ fontSize: '14px', color: '#a09cf7', lineHeight: 1.6 }}>
                {lang === 'ar' ? 'نرد على رسائلك خلال 24 ساعة — رسالتك تصلنا مباشرة على info@ghazara.net' : 'We reply within 24 hours — your message goes directly to info@ghazara.net'}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(30px)', transition: 'all 0.7s ease 0.3s' }}>
            {status === 'success' ? (
              <div className="animate-fadeInUp" style={{ background: 'rgba(108,99,255,0.1)', border: '1px solid #6C63FF', borderRadius: '20px', padding: '48px 32px', textAlign: 'center' }}>
                <div style={{ fontSize: '56px', marginBottom: '16px' }}>🎉</div>
                <div style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>{T.success}</div>
                <div style={{ color: '#888', fontSize: '14px', marginBottom: '24px' }}>
                  {lang === 'ar' ? 'وصلت رسالتك إلى info@ghazara.net' : 'Your message reached info@ghazara.net'}
                </div>
                <button onClick={() => setStatus('idle')} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#888', padding: '10px 24px', borderRadius: '20px', cursor: 'pointer', fontSize: '14px' }}>
                  {T.retry}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { key: 'name', label: T.name, type: 'text', required: true },
                  { key: 'email', label: T.email, type: 'email', required: true },
                  { key: 'service', label: T.service, type: 'text', required: false }
                ].map(f => (
                  <input key={f.key} type={f.type} placeholder={f.label} value={form[f.key]} required={f.required}
                    onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                    onFocus={e => e.target.style.borderColor = 'rgba(108,99,255,0.6)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    style={inputStyle} />
                ))}
                <textarea placeholder={T.msg} value={form.message} rows={5} required
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  onFocus={e => e.target.style.borderColor = 'rgba(108,99,255,0.6)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  style={{ ...inputStyle, resize: 'vertical' }} />

                {status === 'error' && (
                  <div style={{ background: 'rgba(255,107,107,0.1)', border: '1px solid rgba(255,107,107,0.3)', borderRadius: '10px', padding: '12px 16px', color: '#ff6b6b', fontSize: '14px' }}>
                    {T.error}
                  </div>
                )}

                <button type="submit" disabled={status === 'sending'} className="btn-primary"
                  style={{ padding: '18px', borderRadius: '12px', fontSize: '16px', fontWeight: 700, opacity: status === 'sending' ? 0.7 : 1 }}>
                  {status === 'sending' ? T.sending : T.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
