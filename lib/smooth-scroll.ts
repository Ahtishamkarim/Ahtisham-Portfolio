const DEFAULT_SCROLL_OFFSET = 96;

export function getSectionIdFromHref(href: string) {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return null;
  return href.slice(hashIndex + 1) || null;
}

export function smoothScrollToSection(
  sectionId: string,
  offset = DEFAULT_SCROLL_OFFSET,
) {
  const element = document.getElementById(sectionId);
  if (!element) return false;

  const top =
    element.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top, behavior: "smooth" });
  window.history.pushState(null, "", `#${sectionId}`);
  return true;
}

export function smoothScrollToHref(
  href: string,
  offset = DEFAULT_SCROLL_OFFSET,
) {
  const sectionId = getSectionIdFromHref(href);

  if (!sectionId) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "/");
    return true;
  }

  return smoothScrollToSection(sectionId, offset);
}

export function handleSmoothSectionNavClick(
  event: { preventDefault: () => void },
  href: string,
  pathname: string,
) {
  const sectionId = getSectionIdFromHref(href);

  if (pathname !== "/" || !sectionId) {
    return;
  }

  event.preventDefault();
  smoothScrollToSection(sectionId);
}
