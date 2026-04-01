import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [cartCount, setCartCount] = useState(0)
  const [toast, setToast] = useState({ show: false, text: '' })
  const toastTimer = useRef(null)

  const handleBuy = (name) => {
    setCartCount((prev) => prev + 1)
    setToast({ show: true, text: `Agregado — ${name}` })
    if (toastTimer.current) {
      clearTimeout(toastTimer.current)
    }
    toastTimer.current = setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }))
    }, 2500)
  }

  const handleStory = () => {
    document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('in'), index * 55)
          }
        })
      },
      { threshold: 0.08 },
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
      if (toastTimer.current) {
        clearTimeout(toastTimer.current)
      }
    }
  }, [])

  return (
    <>
      <nav>
        <a href="#" className="nav-logo">
          Haus
        </a>
        <div className="nav-right">
          <a href="#productos" className="nav-link">
            Productos
          </a>
          <a href="#beneficios" className="nav-link">
            Nosotros
          </a>
          <a href="#contacto" className="nav-link">
            Contacto
          </a>
          <span className="nav-cart" id="cart-label">
            Carrito ({cartCount})
          </span>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <p className="hero-tag">Coleccion 2025 — Herramientas de precision</p>
          <h1>
            Herramientas
            <br />
            <em>sin</em>
            <br />
            complicaciones
          </h1>
          <p className="hero-sub">
            Seleccion experta de herramientas para quienes toman su oficio en
            serio. Duraderas, precisas, garantizadas.
          </p>
          <div className="hero-cta">
            <a href="#productos" className="btn-dark">
              Ver catalogo
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path
                  d="M2 5.5h7M6 2.5l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <button className="btn-link" type="button" onClick={handleStory}>
              Nuestra historia
            </button>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-img">
            <svg
              width="180"
              height="220"
              viewBox="0 0 180 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="28" y="98" width="96" height="24" rx="4" fill="#2a2a26" />
              <rect x="106" y="80" width="38" height="54" rx="5" fill="#1a1a18" />
              <rect x="112" y="87" width="26" height="40" rx="3" fill="#3a3a36" />
              <circle cx="124" cy="107" r="8" fill="#2a2a26" />
              <circle cx="124" cy="107" r="3" fill="#111" />
              <rect x="20" y="102" width="14" height="12" rx="2" fill="#4a4a44" />
              <rect x="12" y="106" width="10" height="4" rx="2" fill="#2a2a26" />
              <rect x="28" y="102" width="5" height="10" fill="#7a7a72" />
              <line x1="112" y1="95" x2="112" y2="119" stroke="#111" strokeWidth="1" />
              <line x1="116" y1="95" x2="116" y2="119" stroke="#111" strokeWidth="1" />
              <text
                x="90"
                y="156"
                fill="#c0c0b6"
                fontSize="7.5"
                textAnchor="middle"
                letterSpacing="5"
                fontFamily="system-ui,sans-serif"
              >
                HAUS PRO
              </text>
              <line x1="52" y1="162" x2="128" y2="162" stroke="#e0e0d8" strokeWidth="0.5" />
            </svg>
            <div className="hero-label">
              <span>Inalambrico</span>
              <span>$1,890 MXN</span>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-track">
          <span className="ticker-item">
            Envio 24h<span className="t-dot"></span>
          </span>
          <span className="ticker-item">
            Garantia 2 anos<span className="t-dot"></span>
          </span>
          <span className="ticker-item">
            Pago seguro<span className="t-dot"></span>
          </span>
          <span className="ticker-item">
            Devolucion gratuita<span className="t-dot"></span>
          </span>
          <span className="ticker-item">
            +5,000 clientes<span className="t-dot"></span>
          </span>
          <span className="ticker-item">
            Soporte 24/7<span className="t-dot"></span>
          </span>
          <span className="ticker-item">
            Envio 24h<span className="t-dot"></span>
          </span>
          <span className="ticker-item">
            Garantia 2 anos<span className="t-dot"></span>
          </span>
          <span className="ticker-item">
            Pago seguro<span className="t-dot"></span>
          </span>
          <span className="ticker-item">
            Devolucion gratuita<span className="t-dot"></span>
          </span>
          <span className="ticker-item">
            +5,000 clientes<span className="t-dot"></span>
          </span>
          <span className="ticker-item">
            Soporte 24/7<span className="t-dot"></span>
          </span>
        </div>
      </div>

      <section id="productos">
        <div className="products-head">
          <h2>Catalogo</h2>
          <span className="products-count">06 productos</span>
        </div>
        <div className="grid">
          <div className="card reveal">
            <div className="card-img">
              <svg width="92" height="92" viewBox="0 0 92 92" fill="none">
                <rect x="10" y="40" width="54" height="15" rx="4" fill="#2a2a26" />
                <rect x="54" y="30" width="22" height="32" rx="5" fill="#1a1a18" />
                <rect x="59" y="35" width="13" height="22" rx="3" fill="#3a3a36" />
                <circle cx="67" cy="46" r="5" fill="#2a2a26" />
                <circle cx="67" cy="46" r="2" fill="#111" />
                <rect x="4" y="43" width="11" height="8" rx="2" fill="#6a6a62" />
                <rect x="2" y="46" width="7" height="2" rx="1" fill="#2a2a26" />
              </svg>
            </div>
            <div className="card-body">
              <p className="card-cat">Electrico</p>
              <h3 className="card-name">Taladro Inalambrico</h3>
              <p className="card-desc">
                20V, 2 velocidades, mandril 13mm. Bateria incluida.
              </p>
              <div className="card-foot">
                <span className="card-price">
                  $1,890<sup>MXN</sup>
                </span>
                <button
                  className="add-btn"
                  type="button"
                  onClick={() => handleBuy('Taladro Inalambrico')}
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>

          <div className="card reveal">
            <div className="card-img">
              <svg width="92" height="92" viewBox="0 0 92 92" fill="none">
                <rect x="10" y="33" width="38" height="17" rx="3" fill="#2a2a26" />
                <rect x="10" y="33" width="20" height="17" rx="3" fill="#1a1a18" />
                <rect
                  x="41"
                  y="41"
                  width="42"
                  height="5.5"
                  rx="2.5"
                  fill="#8a8a80"
                  transform="rotate(24 41 43)"
                />
              </svg>
            </div>
            <div className="card-body">
              <p className="card-cat">Manual</p>
              <h3 className="card-name">Martillo Profesional</h3>
              <p className="card-desc">
                450g acero forjado, mango fibra de vidrio antideslizante.
              </p>
              <div className="card-foot">
                <span className="card-price">
                  $420<sup>MXN</sup>
                </span>
                <button
                  className="add-btn"
                  type="button"
                  onClick={() => handleBuy('Martillo Profesional')}
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>

          <div className="card reveal">
            <div className="card-img">
              <svg width="92" height="92" viewBox="0 0 92 92" fill="none">
                <g transform="rotate(-10 46 46)">
                  <rect x="42" y="16" width="8" height="30" rx="4" fill="#2a2a26" />
                  <rect x="44" y="46" width="4" height="22" rx="1" fill="#8a8a80" />
                  <rect x="45" y="66" width="2" height="5" fill="#1a1a18" />
                </g>
                <g transform="rotate(-3 46 46)">
                  <rect x="42" y="16" width="8" height="30" rx="4" fill="#1a1a18" />
                  <rect x="44" y="46" width="4" height="22" rx="1" fill="#8a8a80" />
                  <rect x="45" y="66" width="2" height="5" fill="#2a2a26" />
                </g>
                <g transform="rotate(4 46 46)">
                  <rect x="42" y="16" width="8" height="30" rx="4" fill="#3a3a36" />
                  <rect x="44" y="46" width="4" height="22" rx="1" fill="#8a8a80" />
                  <rect x="45" y="66" width="2" height="5" fill="#1a1a18" />
                </g>
                <g transform="rotate(11 46 46)">
                  <rect x="42" y="16" width="8" height="30" rx="4" fill="#1a1a18" />
                  <rect x="44" y="46" width="4" height="22" rx="1" fill="#8a8a80" />
                  <rect x="45" y="66" width="2" height="5" fill="#3a3a36" />
                </g>
              </svg>
            </div>
            <div className="card-body">
              <p className="card-cat">Juego</p>
              <h3 className="card-name">Set de Desarmadores</h3>
              <p className="card-desc">
                6 piezas, puntas magneticas cromo-vanadio. Mangos bicomponente.
              </p>
              <div className="card-foot">
                <span className="card-price">
                  $580<sup>MXN</sup>
                </span>
                <button
                  className="add-btn"
                  type="button"
                  onClick={() => handleBuy('Set de Desarmadores')}
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>

          <div className="card reveal">
            <div className="card-img">
              <svg width="92" height="92" viewBox="0 0 92 92" fill="none">
                <rect x="7" y="36" width="48" height="14" rx="3" fill="#3a3a36" />
                <rect x="46" y="26" width="24" height="32" rx="4" fill="#1a1a18" />
                <rect x="51" y="31" width="14" height="22" rx="3" fill="#2a2a26" />
                <rect x="2" y="48" width="46" height="3" fill="#1a1a18" />
                <path
                  d="M2 51 L5 56 L8 51 L11 56 L14 51 L17 56 L20 51 L23 56 L26 51 L29 56 L32 51 L35 56 L38 51 L41 56 L44 51 L47 56"
                  stroke="#6a6a62"
                  strokeWidth="1"
                  fill="none"
                />
                <circle cx="62" cy="42" r="5" fill="#6a6a62" />
                <circle cx="62" cy="42" r="2" fill="#2a2a26" />
              </svg>
            </div>
            <div className="card-body">
              <p className="card-cat">Electrico</p>
              <h3 className="card-name">Sierra Circular</h3>
              <p className="card-desc">
                1400W, disco 185mm, profundidad 65mm. Guia laser.
              </p>
              <div className="card-foot">
                <span className="card-price">
                  $2,350<sup>MXN</sup>
                </span>
                <button
                  className="add-btn"
                  type="button"
                  onClick={() => handleBuy('Sierra Circular')}
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>

          <div className="card reveal">
            <div className="card-img">
              <svg width="92" height="92" viewBox="0 0 92 92" fill="none">
                <rect
                  x="13"
                  y="42"
                  width="56"
                  height="7"
                  rx="3"
                  fill="#8a8a80"
                  transform="rotate(-18 41 45)"
                />
                <ellipse
                  cx="20"
                  cy="52"
                  rx="9"
                  ry="7"
                  fill="none"
                  stroke="#1a1a18"
                  strokeWidth="3"
                  transform="rotate(-18 20 52)"
                />
                <ellipse
                  cx="20"
                  cy="52"
                  rx="4.5"
                  ry="3.5"
                  fill="none"
                  stroke="#3a3a36"
                  strokeWidth="1.8"
                  transform="rotate(-18 20 52)"
                />
                <rect
                  x="62"
                  y="35"
                  width="11"
                  height="6"
                  rx="2"
                  fill="#1a1a18"
                  transform="rotate(-18 67 38)"
                />
              </svg>
            </div>
            <div className="card-body">
              <p className="card-cat">Manual</p>
              <h3 className="card-name">Llave Ajustable</h3>
              <p className="card-desc">
                Apertura max. 32mm, acero cromado. Cabeza 180°, anti-corrosion.
              </p>
              <div className="card-foot">
                <span className="card-price">
                  $340<sup>MXN</sup>
                </span>
                <button
                  className="add-btn"
                  type="button"
                  onClick={() => handleBuy('Llave Ajustable')}
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>

          <div className="card reveal">
            <div className="card-img">
              <svg width="92" height="92" viewBox="0 0 92 92" fill="none">
                <rect x="12" y="42" width="68" height="28" rx="3" fill="#3a3a36" />
                <rect x="12" y="42" width="68" height="9" rx="3" fill="#1a1a18" />
                <rect x="12" y="27" width="68" height="16" rx="3" fill="#8a8a80" />
                <rect x="35" y="21" width="22" height="7" rx="3.5" fill="#1a1a18" />
                <rect x="37" y="23" width="18" height="3" rx="1.5" fill="#3a3a36" />
                <rect x="40" y="50" width="12" height="4" rx="2" fill="#8a8a80" />
                <line x1="12" y1="60" x2="80" y2="60" stroke="#1a1a18" strokeWidth="0.8" />
              </svg>
            </div>
            <div className="card-body">
              <p className="card-cat">Organizacion</p>
              <h3 className="card-name">Caja de Herramientas</h3>
              <p className="card-desc">
                3 compartimentos, cierre metalico. Policarbonato reforzado.
              </p>
              <div className="card-foot">
                <span className="card-price">
                  $780<sup>MXN</sup>
                </span>
                <button
                  className="add-btn"
                  type="button"
                  onClick={() => handleBuy('Caja de Herramientas')}
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="beneficios">
        <div className="ben reveal">
          <div className="ben-n">01</div>
          <h3 className="ben-t">Envio rapido</h3>
          <p className="ben-p">
            Entrega en 24 horas en toda la republica. Embalaje seguro y rastreo
            en tiempo real.
          </p>
        </div>
        <div className="ben reveal">
          <div className="ben-n">02</div>
          <h3 className="ben-t">Calidad garantizada</h3>
          <p className="ben-p">
            Garantia de 2 anos en todos nuestros productos. Devolucion sin
            preguntas.
          </p>
        </div>
        <div className="ben reveal">
          <div className="ben-n">03</div>
          <h3 className="ben-t">Pago seguro</h3>
          <p className="ben-p">
            Transacciones cifradas SSL. Tarjetas, transferencia, efectivo y
            cuotas sin interes.
          </p>
        </div>
      </section>

      <footer id="contacto">
        <div className="foot-grid">
          <div className="foot-brand-col">
            <p className="foot-brand">Haus</p>
            <p className="foot-desc">
              Herramientas de precision para quienes toman su trabajo en serio.
              Seleccionadas por expertos, respaldadas por garantia.
            </p>
            <a
              className="wa-link"
              href="https://wa.me/526561234567"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ flexShrink: 0 }}
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribir por WhatsApp
            </a>
          </div>
          <div className="foot-col">
            <p className="foot-col-label">Navegacion</p>
            <ul>
              <li>
                <a href="#productos">Productos</a>
              </li>
              <li>
                <a href="#beneficios">Nosotros</a>
              </li>
              <li>
                <a href="#">Garantias</a>
              </li>
              <li>
                <a href="#">Envios</a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <p className="foot-col-label">Contacto</p>
            <ul>
              <li>
                <a href="mailto:hola@haus.mx">hola@haus.mx</a>
              </li>
              <li>
                <a href="tel:+526561234567">+52 656 123 4567</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span className="foot-copy">© 2025 HAUS — Todos los derechos reservados</span>
          <span className="foot-loc">Ciudad Juarez, Chihuahua — Mexico</span>
        </div>
      </footer>

      <div className={`toast ${toast.show ? 'show' : ''}`} id="toast">
        {toast.text}
      </div>
    </>
  )
}

export default App
