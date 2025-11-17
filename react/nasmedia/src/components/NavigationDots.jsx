import React from "react";

export default function NavigationDots({ sections, activeIndex, onSelect }) {
  return (
    <nav className="dot-header" aria-label="섹션 네비게이션">
      <ul className="cf">
        {sections.map((section, index) => (
          <li key={section.id} className={index === activeIndex ? "on" : ""}>
            {/* dark/light 모드에 따라 로고가 달라짐(이미지 2개 중 1개 block시킴) */}
            <button
              type="button"
              onClick={() => onSelect(index)}
              aria-current={index === activeIndex ? "true" : undefined}
              aria-label={section.label}
            >
              <span>{section.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
