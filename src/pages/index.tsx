import { BsBootstrapFill, BsGithub, BsTags } from 'react-icons/bs/index.js'
import { FiMoon, FiSun } from 'react-icons/fi/index.js'
import { AiOutlineSelect } from 'react-icons/ai/index.js'
import pkg from '../../package.json'
import style from '../style.css.txt'
import script from '../script.js.txt'

export default function () {
  const items = [
    {
      icon: <AiOutlineSelect />,
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
