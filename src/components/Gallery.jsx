// SCH-11: Campus photo gallery. Tap a photo to open it full size; use the arrows or swipe-friendly
// buttons to move between photos. Photos are listed in src/data/campus.js.
import { useEffect, useRef, useState } from 'react';
import { gallery } from '../data/campus.js';
import Icon from './Icon.jsx';
import './Gallery.css';

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState(null);
  const dialogRef = useRef(null);
  const touchStart = useRef(null);

  // Open the viewer whenever a photo is picked.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (openIndex !== null && dialog && !dialog.open) dialog.showModal();
  }, [openIndex]);

  const close = () => dialogRef.current?.close();
  const step = (delta) =>
    setOpenIndex((index) => (index === null ? index : (index + delta + gallery.length) % gallery.length));

  const onKeyDown = (event) => {
    if (event.key === 'ArrowRight') step(1);
    if (event.key === 'ArrowLeft') step(-1);
  };

  // Simple swipe support on phones.
  const onTouchStart = (event) => {
    touchStart.current = event.touches[0].clientX;
  };
  const onTouchEnd = (event) => {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) > 50) step(distance < 0 ? 1 : -1);
    touchStart.current = null;
  };

  const current = openIndex !== null ? gallery[openIndex] : null;

  return (
    <section id="gallery" className="section section--alt" aria-labelledby="gallery-title">
      <div className="container">
        <header className="section-header" data-reveal>
          <p className="eyebrow">Our campus</p>
          <h2 id="gallery-title">Built for the paths ZUT students walk every day</h2>
          <p className="lead">
            Long avenues, red-brick blocks and new buildings: plenty of ground to cover when a room
            changes at the last minute.
          </p>
        </header>

        <ul className="gallery" role="list" data-reveal>
          {gallery.map((photo, index) => (
            <li key={photo.caption} className="gallery__item">
              <button type="button" className="gallery__button" onClick={() => setOpenIndex(index)}>
                <img src={photo.src} alt={photo.alt} loading="lazy" width="1000" height="750" />
                <span className="gallery__caption">
                  {photo.caption}
                  <Icon name="expand" size={16} />
                </span>
                <span className="visually-hidden">, open full size</span>
              </button>
            </li>
          ))}
        </ul>
        <p className="gallery__hint" aria-hidden="true">
          Swipe to see more photos →
        </p>
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Campus photo viewer"
        onClose={() => setOpenIndex(null)}
        onKeyDown={onKeyDown}
        onClick={(event) => event.target === event.currentTarget && close()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {current && (
          <figure className="lightbox__figure">
            <img src={current.src} alt={current.alt} />
            <figcaption>
              <span>{current.caption}</span>
              <span className="lightbox__count">
                {openIndex + 1} / {gallery.length}
              </span>
            </figcaption>
            <button type="button" className="lightbox__btn lightbox__close" onClick={close}>
              <Icon name="x" />
              <span className="visually-hidden">Close</span>
            </button>
            <button type="button" className="lightbox__btn lightbox__prev" onClick={() => step(-1)}>
              <Icon name="chevron-left" />
              <span className="visually-hidden">Previous photo</span>
            </button>
            <button type="button" className="lightbox__btn lightbox__next" onClick={() => step(1)}>
              <Icon name="chevron-right" />
              <span className="visually-hidden">Next photo</span>
            </button>
          </figure>
        )}
      </dialog>
    </section>
  );
}
