import { useEffect } from 'react';
import { siteConfig } from '../data/siteData';

export function useMeta({ title, description }) {
  useEffect(() => {
    const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
    document.title = pageTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description || siteConfig.description);
    }
  }, [title, description]);
}
