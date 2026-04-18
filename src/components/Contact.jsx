import React, { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Contact({ lang }) {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const { ref, visible } = useReveal()

  const T = {
    ar: { title: 'تواصل معنا', sub: 'أرسل لنا رسالة وابدأ تحولك الرقمي.', name: 'الاسم الكامل', email: 'البريد الإلكتروني', service: 'الخدمة المطلوبة', msg: 'رسالتك', send: 'أرسل الرسالة', sending: '⏳ جاري الإرسال...', success: '✅ تم الإرسال! سنتواصل معك قريباً.', error: '❌ حدث خطأ. حاول مجدداً.', wa: 'تواصل عبر واتساب', info_email: 'info@ghazara.net', phone: '+967 783 334 002', location: 'الشرق الأوسط', emailLabel: 'البريد الإلكتروني', phoneLabel: 'الهاتف', locationLabel: 'الموقع' },
    en: { title: 'Get in Touch', sub: 'Send us a message and start your digital transformation.', name: 'Full Name', email: 'Email Address', service: 'Service Interest', msg: 'Your Message', send: 'Send Message', sending: '⏳ Sending...', success: '✅ Sent! We will contact you soon.', error: '❌ Something went wrong. Please try again.', wa: 'Chat on WhatsApp', info_email: 'info@ghazara.net', phone: '+967 783 334 002', location: 'Middle East', emailLabel: 'Email', phoneLabel: 'Phone', locationLabel: 'Location' }
  }[lang]

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')

    try {
      // Send to our backend which forwards to Gmail & creates lead
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          source: 'Ghazara Landing Page',
          lang
        })
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', service: '', message: '' })
      } else {
        // Fallback: open mailto
        window.location.href = `mailto:info@ghazara.net?subject=Inquiry from ${form.name}&body=${encodeURIComponent(form.message)}`
        setStatus('success')
      }
    } catch {
      // Fallback to mailto
      window.location.href = `mailto:info@ghazara.net?subject=Inquiry from ${form.name}&body=${encodeURIComponent(form.message)}`
      setStatus('success')
    }
  }

  const inputStyle = {
    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px', padding: '16px', color: '#fff', fontSize: '15px',
    outline: 'none', width: '100%', fontFamily: 'inherit',
    transition: 'border-color 0.3s ease'
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
          </div>

          {/* Form Side */}
          <div style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateX(0)' : 'translateX(30px)', transition: 'all 0.7s ease 0.3s' }}>
            {status === 'success' ? (
              <div className="animate-fadeInUp" style={{ background: 'rgba(108,99,255,0.1)', border: '1px solid #6C63FF', borderRadius: '20px', padding: '48px 32px', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
                <div style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>{T.success}</div>
                <button onClick={() => setStatus('idle')} style={{ marginTop: '16px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#888', padding: '10px 24px', borderRadius: '20px', cursor: 'pointer', fontSize: '14px' }}>
                  {lang === 'ar' ? 'إرسال رسالة أخرى' : 'Send another message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { key: 'name', label: T.name, type: 'text' },
                  { key: 'email', label: T.email, type: 'email' },
                  { key: 'service', label: T.service, type: 'text' }
                ].map(f => (
                  <input key={f.key} type={f.type} placeholder={f.label} value={form[f.key]} required={f.key !== 'service'}
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
