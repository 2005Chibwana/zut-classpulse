// SCH-11: A simple "digital twin" of campus. Tap a building to see today's verified changes,
// then press "Take me there" to draw a walking route from the main gate.
// Buildings and their status live in src/data/campus.js.
import { useState } from 'react';
import { buildings, gate, avenueY } from '../data/campus.js';
import Icon from './Icon.jsx';
import './CampusMap.css';

const toneLabel = {
  change: 'Verified change',
  clash: 'Clash warning',
  ok: 'All clear',
  info: 'Good to know',
};

// Route from the gate: up the main road, along the avenue, then to the building's door.
function routeFor(building) {
  const cx = building.x + building.w / 2;
  const doorY = building.side === 'north' ? building.y + building.h + 2 : building.y - 2;
  return `M${gate.x} ${gate.y} V${avenueY} H${cx} V${doorY}`;
}

function directionsFor(building) {
  const side = building.side === 'north' ? 'left' : 'right';
  return `From the main gate, walk up the main road and turn right onto the avenue. ${building.name} is on your ${side}.`;
}

const trees = Array.from({ length: 11 }, (_, i) => 160 + i * 58);

export default function CampusMap() {
  const [selectedId, setSelectedId] = useState('block-c');
  const [route, setRoute] = useState({ id: null, run: 0 });
  const selected = buildings.find((b) => b.id === selectedId);

  const select = (id) => {
    setSelectedId(id);
    if (route.id && route.id !== id) setRoute({ id: null, run: route.run });
  };

  const takeMeThere = () => setRoute({ id: selectedId, run: route.run + 1 });
  const routeBuilding = buildings.find((b) => b.id === route.id);

  const onBuildingKey = (event, id) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      select(id);
    }
  };

  return (
    <section id="campus" className="section" aria-labelledby="campus-title">
      <div className="container">
        <header className="section-header" data-reveal>
          <p className="eyebrow">Campus digital twin · Phase 2 preview</p>
          <h2 id="campus-title">See every change on a live map of campus</h2>
          <p className="lead">
            Tap a building to see today&apos;s verified changes, then press “Take me there” for
            walking directions from the main gate.
          </p>
        </header>

        <div className="campus" data-reveal>
          <div className="campus__map-wrap">
            <svg
              className="campus__map"
              viewBox="0 0 800 540"
              role="group"
              aria-label="Simplified map of campus. Use the building buttons to explore."
            >
              <defs>
                <pattern id="hedge" width="16" height="16" patternUnits="userSpaceOnUse">
                  <rect width="16" height="16" fill="#cfe8c4" />
                  <circle cx="8" cy="8" r="5" fill="#a9d494" />
                </pattern>
              </defs>

              {/* Grounds and fence */}
              <rect x="6" y="6" width="788" height="528" rx="26" className="campus__ground" />
              <rect x="22" y="22" width="756" height="496" rx="18" className="campus__fence" />

              {/* Roads */}
              <path d={`M${gate.x} 530 V${avenueY} H770`} className="campus__road" />
              <path d={`M${gate.x} 530 V${avenueY} H770`} className="campus__road-line" />
              <text x="470" y={avenueY + 6} className="campus__road-label">
                JACARANDA AVENUE
              </text>

              {/* Courtyard gardens (not selectable) */}
              <rect x="400" y="330" width="130" height="130" rx="14" fill="url(#hedge)" className="campus__garden" />
              <text x="465" y="400" className="campus__garden-label">
                Gardens
              </text>

              {/* Jacaranda trees along the avenue */}
              {trees.map((x, i) => (
                <g key={x} className="campus__tree">
                  <circle cx={x} cy={avenueY - 30} r="11" />
                  <circle cx={x + 29} cy={avenueY + 30} r="11" />
                  {i % 3 === 0 && <circle cx={x + 4} cy={avenueY - 33} r="4" className="campus__blossom" />}
                  {i % 3 === 1 && <circle cx={x + 25} cy={avenueY + 27} r="4" className="campus__blossom" />}
                </g>
              ))}

              {/* Buildings */}
              {buildings.map((b) => {
                const isSelected = b.id === selectedId;
                const alert = b.status.tone === 'change' || b.status.tone === 'clash';
                return (
                  <g
                    key={b.id}
                    className={`campus__building campus__building--${b.kind}${isSelected ? ' is-selected' : ''}`}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isSelected}
                    aria-label={`${b.name}. ${toneLabel[b.status.tone]}: ${b.status.text}`}
                    onClick={() => select(b.id)}
                    onKeyDown={(event) => onBuildingKey(event, b.id)}
                  >
                    <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="12" />
                    <text x={b.x + b.w / 2} y={b.y + b.h / 2 + 8}>
                      {b.label}
                    </text>
                    {alert && (
                      <g className={`campus__pulse campus__pulse--${b.status.tone}`}>
                        <circle cx={b.x + b.w - 14} cy={b.y + 14} r="14" className="campus__pulse-ring" />
                        <circle cx={b.x + b.w - 14} cy={b.y + 14} r="8" />
                      </g>
                    )}
                  </g>
                );
              })}

              {/* Walking route */}
              {routeBuilding && (
                <path key={route.run} d={routeFor(routeBuilding)} pathLength="1" className="campus__route" />
              )}

              {/* Gate and "You are here" */}
              <g className="campus__gate">
                <rect x={gate.x - 34} y="512" width="68" height="20" rx="6" />
                <circle cx={gate.x} cy={gate.y - 24} r="13" className="campus__you" />
                <circle cx={gate.x} cy={gate.y - 24} r="5" fill="#fff" />
              </g>
              <text x={gate.x + 26} y={gate.y - 18} className="campus__you-label">
                You are here
              </text>

              {/* Compass */}
              <g className="campus__compass" transform="translate(740 60)">
                <circle r="22" />
                <path d="M0 -14 L6 4 L0 0 L-6 4 Z" />
                <text y="-26">N</text>
              </g>
            </svg>
            <p className="campus__note">Simplified concept map: building positions are illustrative and not to scale.</p>
          </div>

          <div className="campus__side">
            <div className="campus__chips" role="group" aria-label="Choose a building">
              {buildings.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  className={`campus__chip campus__chip--${b.status.tone}`}
                  aria-pressed={b.id === selectedId}
                  onClick={() => select(b.id)}
                >
                  <span className="campus__chip-dot" aria-hidden="true" />
                  {b.name}
                </button>
              ))}
            </div>

            <div className="campus__panel" aria-live="polite">
              {selected.photo && (
                <img className="campus__photo" src={selected.photo} alt={`Photo of ${selected.name}`} loading="lazy" />
              )}
              <div className="campus__panel-body">
                <h3>{selected.name}</h3>
                <p className="campus__about">{selected.about}</p>
                <p className={`campus__status campus__status--${selected.status.tone}`}>
                  <strong>{toneLabel[selected.status.tone]}</strong>
                  <span>{selected.status.text}</span>
                </p>
                <button type="button" className="btn btn--primary campus__go" onClick={takeMeThere}>
                  <Icon name="navigation" />
                  Take me there
                </button>
                {route.id === selected.id && (
                  <p className="campus__directions">{directionsFor(selected)}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
