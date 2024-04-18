import { BsBootstrapFill, BsGithub, BsTags } from 'react-icons/bs/index.js'
import { FiMoon, FiSun } from 'react-icons/fi/index.js'
import pkg from '../../package.json'
import style from '../style.css.txt'
import script from '../script.js.txt'

function UseBootstrapSelectIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"></path><path d="m12 12 4 10 1.7-4.3L22 16Z"></path></svg>
  )
}

function UseBootstrapToasterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>
  )
}

export default function () {
  const items = [
    {
      icon: <UseBootstrapSelectIcon />,
      name: 'use-bootstrap-select',
      desc: 'Create a select element using the native Bootstrap 5 dropdown UI',
      link: 'https://use-bootstrap-select.js.org',
    },
    {
      icon: <BsTags />,
      name: 'use-bootstrap-tag',
      desc: 'Tag input for Bootstrap 5',
      link: 'https://use-bootstrap-tag.js.org',
    },
    {
      icon: <UseBootstrapToasterIcon />,
      name: 'use-bootstrap-toaster',
      desc: 'Bootstrap toast generator',
      link: 'https://use-bootstrap-toaster.js.org',
    },
  ]
  return (
    <html lang="en" data-bs-theme="light">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={pkg.description} />
        <meta name="keywords" content={pkg.keywords.join(', ')} />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="stylesheet" href="/bootstrap.min.css" />
        <link rel="stylesheet" href="https://fonts.upset.dev/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap" />
        <title>{`${pkg.name} | ${pkg.description}`}</title>
        <style dangerouslySetInnerHTML={{ __html: style }}></style>
      </head>
      <body className="bg-body-tertiary">
        <nav className="navbar navbar-expand-lg py-3">
          <div className="container justify-content-start">
            <a className="navbar-brand d-flex align-items-end gap-3" href="/">
              <BsBootstrapFill size={47} />
              <div className="d-flex flex-column">
                <span className="fs-3 lh-1 fw-bold">{pkg.name}</span>
                <span className="fs-6">{pkg.description}</span>
              </div>
            </a>
            <div className="ms-auto d-flex align-items-center gap-3">
              <a className="fs-5 link-body-emphasis" href={pkg.repository} target="_blank">
                <BsGithub />
              </a>
              <div>
                <input type="checkbox" className="btn-check" id="bs-theme" autoComplete="off" />
                <label className="btn p-0 border-0 fs-5" htmlFor="bs-theme" id="bs-theme-dark" title="Toggle dark mode"><FiMoon /></label>
                <label className="btn p-0 border-0 fs-5" htmlFor="bs-theme" id="bs-theme-light" title="Toggle light mode"><FiSun /></label>
              </div>
            </div>
          </div>
        </nav>
        <div className="container py-3">
          <div className="row g-4">
            {items.map(item => (
              <div key={item.name} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100">
                  <div className="card-body">
                    <a href={item.link} className="fw-semibold fs-5 card-title stretched-link link-body-emphasis text-decoration-none" target="_blank">
                      {item.icon}
                      <span className="ms-2">{item.name}</span>
                    </a>
                    <p className="mb-0 mt-2 text-body-secondary">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <script dangerouslySetInnerHTML={{ __html: script }}></script>
      </body>
    </html>
  )
}
