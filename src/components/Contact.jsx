import React, { useState } from 'react'

export default function Contact({ lang }) {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const T = {
    ar: { title: 'تواصل معنا', sub: 'أرسل لنا رسالة وابدأ تحولك.', name: 'الاسم', email: 'البريد الإلكتروني', service: 'الخدمة المطلوبة', msg: 'رسالتك', send: 'أرسل الرسالة', sent: '✅ تم الإرسال! سنتواصل معك قريباً.', wa: 'تواصل عبر واتساب', phone: '967783334002+', info_email: 'info@ghazara.net' },
    en: { title: 'Get in Touch', sub: 'Send us a message and start your transformation.', name: 'Name', email: 'Email Address', service: 'Service Interest', msg: 'Your Message', send: 'Send Message', sent: '✅ Sent! We will contact you soon.', wa: 'Chat on WhatsApp', phone: '+967783334002', info_email: 'info@ghazara.net' }
  }[lang]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" style={{ padding: '100px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, marginBottom: '16px' }}>{T.title}</h2>
          <p style={{ color: '#888', fontSize: '18px' }}>{T.sub}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
          {/* Contact Info */}
          <div>
            <div style={{ marginBottom: '32px' }}>
              <a href={`https://wa.me/${T.phone.replace('+','')}`} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'linear-gradient(135deg, #25D366, #128C7E)', color: '#fff', padding: '16px 28px', borderRadius: '16px', textDecoration: 'none', fontWeight: 700, fontSize: '16px' }}>
                💬 {T.wa}
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                <span style={{ fontSize: '24px' }}>📧</span>
                <div>
                  <div style={{ color: '#888', fontSize: '13px', marginBottom: '4px' }}>{lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}</div>
                  <div style={{ fontWeight: 600 }}>{T.info_email}</div>
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                <span style={{ fontSize: '24px' }}>📱</span>
                <div>
                  <div style={{ color: '#888', fontSize: '13px', marginBottom: '4px' }}>{lang === 'ar' ? 'الهاتف' : 'Phone'}</div>
                  <div style={{ fontWeight: 600 }}>{T.phone}</div>
                </div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                <span style={{ fontSize: '24px' }}>📍</span>
                <div>
                  <div style={{ color: '#888', fontSize: '13px', marginBottom: '4px' }}>{lang === 'ar' ? 'الموقع' : 'Location'}</div>
                  <div style={{ fontWeight: 600 }}>{lang === 'ar' ? 'الشرق الأوسط' : 'Middle East'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {sent ? (
              <div style={{ background: 'rgba(108,99,255,0.1)', border: '1px solid #6C63FF', borderRadius: '16px', padding: '32px', textAlign: 'center', fontSize: '18px', fontWeight: 600 }}>{T.sent}</div>
            ) : (
              <>
                {[{k:'name',l:T.name},{k:'email',l:T.email},{k:'service',l:T.service}].map(f => (
                  <input key={f.k} type="text" placeholder={f.l} value={form[f.k]}
                    onChange={e => setForm({...form, [f.k]: e.target.value})}
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '16px', color: '#fff', fontSize: '15px', outline: 'none' }} />
                ))}
                <textarea placeholder={T.msg} value={form.message} rows={5}
                  onChange={e => setForm({...form, message: e.target.value})}
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '16px', color: '#fff', fontSize: '15px', outline: 'none', resize: 'vertical' }} />
                <button type="submit" style={{ background: 'linear-gradient(135deg, #6C63FF, #00D4FF)', color: '#fff', border: 'none', padding: '18px', borderRadius: '12px', fontSize: '16px', fontWeight: 700, cursor: 'pointer' }}>
                  {T.send}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
