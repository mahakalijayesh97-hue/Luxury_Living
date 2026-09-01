import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { PROJECT, HIGHLIGHTS, WHY_CHOOSE, PRICING, AMENITIES, setHeroImage, setPiramalImage, setConstructionImage1, setConstructionImage2, setConstructionImage3, LOCATION_ADVANTAGES, PIRAMAL_STATS, TRUST, WHY_INVEST_THANE, BANKS, CONSTRUCTION_STEPS, TESTIMONIALS, FAQS, GALLERY_IMAGES, FLOOR_PLANS, MASTER_PLAN, LIFESTYLE, FINAL_CTA_DATA, NAV_LINKS, SOCIAL, FOOTER_LINKS, CONFIGS } from './lib/content.ts';

const root = createRoot(document.getElementById('root')!);

// Set isLive to true for production (Render), false for local development
const isLive = true;
const API_BASE_URL = isLive ? 'https://luxury-living-backend.onrender.com' : '';

// Initial render for instant First Contentful Paint (LCP < 0.2s)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

async function initApp() {
  try {
    // 1. Fetch CRITICAL data first (Hero section & Layout)
    const [projectRes, filesRes, navLinksRes, configsRes] = await Promise.all([
      fetch(`${API_BASE_URL}/api/projects`),
      fetch(`${API_BASE_URL}/api/upload/files`),
      fetch(`${API_BASE_URL}/api/nav-links`),
      fetch(`${API_BASE_URL}/api/configs`),
    ]);

    if (projectRes.ok) {
      const json = await projectRes.json();
      if (json.data && json.data.length > 0) {
        Object.assign(PROJECT, json.data[0]);
      }
    }

    if (navLinksRes && navLinksRes.ok) {
      const json = await navLinksRes.json();
      if (json.data && Array.isArray(json.data) && json.data.length > 0) {
        const processedLinks = json.data.map((item: any) => ({
          label: item.label,
          href: item.href
        }));
        NAV_LINKS.splice(0, NAV_LINKS.length, ...processedLinks);
      }
    }

    if (configsRes && configsRes.ok) {
      const json = await configsRes.json();
      if (json.data && Array.isArray(json.data) && json.data.length > 0) {
        const configString = json.data[0].CONFIGS || "";
        const processedConfigs = configString.split(',').map((c: string) => c.trim()).filter(Boolean);
        if (processedConfigs.length > 0) {
          CONFIGS.splice(0, CONFIGS.length, ...processedConfigs);
        }
      }
    }

    if (filesRes && filesRes.ok) {
      const files = await filesRes.json();
      if (Array.isArray(files) && files.length > 0) {
        const heroFile = files.find((f: any) => f.name.includes('HERO_IMAGE')) || files[0];
        if (heroFile && heroFile.url) {
          if (heroFile.url.includes('pexels_photo_14998334_6cb2a89c10')) {
            setHeroImage('/hero.avif');
          } else {
            setHeroImage(heroFile.url.startsWith('http') ? heroFile.url : `${API_BASE_URL}${heroFile.url}`);
          }
        }
        const piramalFile = files.find((f: any) => f.name.includes('Trust.avif'));
        if (piramalFile && piramalFile.url) {
          setPiramalImage(piramalFile.url.startsWith('http') ? piramalFile.url : `${API_BASE_URL}${piramalFile.url}`);
        }
        const c1File = files.find((f: any) => f.name.includes('CONSTRUCTION_1') || f.name.includes('construction-1'));
        if (c1File && c1File.url) {
          setConstructionImage1(c1File.url.startsWith('http') ? c1File.url : `${API_BASE_URL}${c1File.url}`);
        }
        const c2File = files.find((f: any) => f.name.includes('CONSTRUCTION_2') || f.name.includes('construction-2'));
        if (c2File && c2File.url) {
          setConstructionImage2(c2File.url.startsWith('http') ? c2File.url : `${API_BASE_URL}${c2File.url}`);
        }
        const c3File = files.find((f: any) => f.name.includes('CONSTRUCTION_3') || f.name.includes('construction-3'));
        if (c3File && c3File.url) {
          setConstructionImage3(c3File.url.startsWith('http') ? c3File.url : `${API_BASE_URL}${c3File.url}`);
        }
      }
    }

    // Re-render the app with the freshly loaded CRITICAL API data
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );

    // Remove the initial loader if it exists
    setTimeout(() => {
      document.getElementById('initial-loader')?.remove();
    }, 100);

    // 2. Fetch DEFERRED data in the background (Non-blocking)
    setTimeout(async () => {
      try {
        const [highlightsRes, whyChooseRes, pricingsRes, amenitiesRes, locationAdvantagesRes, piramalStatsRes, trustsRes, whyInvestThaneRes, banksRes, constructionStepsRes, testimonialsRes, faqsRes, galleryImagesRes, floorPlansRes, masterPlansRes, lifestylesRes, finalCtaRes, socialsRes, footerLinksRes] = await Promise.all([
          fetch(`${API_BASE_URL}/api/highlights`),
          fetch(`${API_BASE_URL}/api/why-chooses`),
          fetch(`${API_BASE_URL}/api/pricings`),
          fetch(`${API_BASE_URL}/api/amenities`),
          fetch(`${API_BASE_URL}/api/location-advantages`),
          fetch(`${API_BASE_URL}/api/piramal-stats`),
          fetch(`${API_BASE_URL}/api/trusts`),
          fetch(`${API_BASE_URL}/api/why-invest-thanes`),
          fetch(`${API_BASE_URL}/api/banks`),
          fetch(`${API_BASE_URL}/api/construction-steps`),
          fetch(`${API_BASE_URL}/api/testimonials`),
          fetch(`${API_BASE_URL}/api/faqs`),
          fetch(`${API_BASE_URL}/api/gallery-images?populate=*`),
          fetch(`${API_BASE_URL}/api/floor-plans?populate=*`),
          fetch(`${API_BASE_URL}/api/master-plans?populate=*`),
          fetch(`${API_BASE_URL}/api/lifestyles?populate=*`),
          fetch(`${API_BASE_URL}/api/final-cta-datas?populate=*`),
          fetch(`${API_BASE_URL}/api/socials`),
          fetch(`${API_BASE_URL}/api/footer-links`),
        ]);

        if (highlightsRes.ok) {
          const json = await highlightsRes.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) {
            HIGHLIGHTS.splice(0, HIGHLIGHTS.length, ...json.data);
          }
        }
    
        if (whyChooseRes.ok) {
          const json = await whyChooseRes.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) {
            WHY_CHOOSE.splice(0, WHY_CHOOSE.length, ...json.data);
          }
        }
    
        if (pricingsRes && pricingsRes.ok) {
          const json = await pricingsRes.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) {
            const processedData = json.data.map((item: any) => ({
              ...item,
              features: typeof item.features === 'string'
                ? item.features.split(',').map((f: string) => f.replace(/['"]/g, '').trim())
                : item.features
            }));
            PRICING.splice(0, PRICING.length, ...processedData);
          }
        }
    
        if (amenitiesRes && amenitiesRes.ok) {
          const json = await amenitiesRes.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) {
            AMENITIES.splice(0, AMENITIES.length, ...json.data);
          }
        }
    
        if (locationAdvantagesRes && locationAdvantagesRes.ok) {
          const json = await locationAdvantagesRes.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) {
            LOCATION_ADVANTAGES.splice(0, LOCATION_ADVANTAGES.length, ...json.data);
          }
        }
    
        if (piramalStatsRes && piramalStatsRes.ok) {
          const json = await piramalStatsRes.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) {
            PIRAMAL_STATS.splice(0, PIRAMAL_STATS.length, ...json.data);
          }
        }
    
        if (trustsRes && trustsRes.ok) {
          const json = await trustsRes.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) {
            TRUST.splice(0, TRUST.length, ...json.data);
          }
        }
    
        if (whyInvestThaneRes && whyInvestThaneRes.ok) {
          const json = await whyInvestThaneRes.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) {
            WHY_INVEST_THANE.splice(0, WHY_INVEST_THANE.length, ...json.data);
          }
        }
    
        if (banksRes && banksRes.ok) {
          const json = await banksRes.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) {
            BANKS.splice(0, BANKS.length, ...json.data);
          }
        }
    
        if (constructionStepsRes && constructionStepsRes.ok) {
          const json = await constructionStepsRes.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) {
            CONSTRUCTION_STEPS.splice(0, CONSTRUCTION_STEPS.length, ...json.data);
          }
        }
    
        if (testimonialsRes && testimonialsRes.ok) {
          const json = await testimonialsRes.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) {
            TESTIMONIALS.splice(0, TESTIMONIALS.length, ...json.data);
          }
        }
    
        if (faqsRes && faqsRes.ok) {
          const json = await faqsRes.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) {
            FAQS.splice(0, FAQS.length, ...json.data);
          }
        }
    
        if (galleryImagesRes && galleryImagesRes.ok) {
          const json = await galleryImagesRes.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) {
            const spans = ['tall', 'wide', 'normal', 'normal', 'wide', 'tall', 'normal', 'normal', 'wide'];
            const newGalleryImages = json.data.map((item: any, index: number) => {
              const imgUrl = item.GALLERY_IMAGES?.url || item.url || '';
              return {
                url: imgUrl ? (imgUrl.startsWith('http') ? imgUrl : `${API_BASE_URL}${imgUrl}`) : '',
                alt: item.alt || item.GALLERY_IMAGES?.alternativeText || 'Gallery Image',
                span: item.span || spans[index % spans.length]
              };
            });
            GALLERY_IMAGES.splice(0, GALLERY_IMAGES.length, ...newGalleryImages);
          }
        }
    
        if (floorPlansRes && floorPlansRes.ok) {
          const json = await floorPlansRes.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) {
            const processedPlans = json.data.map((item: any) => {
              const imgUrl = item.image?.url || '';
              return {
                config: item.config || '',
                area: item.area || '',
                details: typeof item.details === 'string' ? item.details.split(',').map((d: string) => d.trim()) : (item.details || []),
                image: imgUrl ? (imgUrl.startsWith('http') ? imgUrl : `${API_BASE_URL}${imgUrl}`) : ''
              };
            });
            processedPlans.sort((a: any, b: any) => a.config.localeCompare(b.config));
            FLOOR_PLANS.splice(0, FLOOR_PLANS.length, ...processedPlans);
          }
        }
    
        if (masterPlansRes && masterPlansRes.ok) {
          const json = await masterPlansRes.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) {
            const item = json.data[0];
            const imgUrl = item.MASTER_PLAN_IMAGE?.url || '';
            Object.assign(MASTER_PLAN, {
              subtitle: item.subtitle || MASTER_PLAN.subtitle,
              image: imgUrl ? (imgUrl.startsWith('http') ? imgUrl : `${API_BASE_URL}${imgUrl}`) : MASTER_PLAN.image
            });
          }
        }
    
        if (lifestylesRes && lifestylesRes.ok) {
          const json = await lifestylesRes.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) {
            const newLifestyle = json.data.map((item: any) => {
              let mappedItem: any = {};
              if (item.icon && item.text) {
                mappedItem.icon = item.icon;
                mappedItem.text = item.text;
              } else if (item.desc) {
                mappedItem.desc = item.desc;
              } else if (item.FloatingCardPr && item.FloatingCardText) {
                mappedItem.FloatingCardPr = item.FloatingCardPr;
                mappedItem.FloatingCardText = item.FloatingCardText;
              } else if (item.ABOUT_IMAGE) {
                const imgUrl = item.ABOUT_IMAGE.url;
                mappedItem.ABOUT_IMAGE = imgUrl ? (imgUrl.startsWith('http') ? imgUrl : `${API_BASE_URL}${imgUrl}`) : '';
              }
              return mappedItem;
            });
            LIFESTYLE.splice(0, LIFESTYLE.length, ...newLifestyle);
          }
        }
    
        if (finalCtaRes && finalCtaRes.ok) {
          const json = await finalCtaRes.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) {
            const titleItem = json.data.find((item: any) => item.title);
            if (titleItem) {
              FINAL_CTA_DATA.title = titleItem.title;
              FINAL_CTA_DATA.description = titleItem.description || FINAL_CTA_DATA.description;
            }
            const icons = json.data.filter((item: any) => item.icons).map((item: any) => ({
              icon: item.icons.icon,
              text: item.icons.text,
              sub: item.icons.sub === 'PROJECT.rera' ? PROJECT.rera : item.icons.sub
            }));
            if (icons.length > 0) {
              FINAL_CTA_DATA.icons.splice(0, FINAL_CTA_DATA.icons.length, ...icons);
            }
          }
        }
    
        if (socialsRes && socialsRes.ok) {
          const json = await socialsRes.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) {
            const processedSocials = json.data.map((item: any) => ({
              icon: item.icon,
              label: item.label,
              href: item.href
            }));
            SOCIAL.splice(0, SOCIAL.length, ...processedSocials);
          }
        }
    
        if (footerLinksRes && footerLinksRes.ok) {
          const json = await footerLinksRes.json();
          if (json.data && Array.isArray(json.data) && json.data.length > 0) {
            const processedFooterLinks: any[] = [];
            json.data.forEach((item: any) => {
              if (item.desc) {
                processedFooterLinks.push({ desc: item.desc });
              }
              if (item.BottomLeft || item.BottomRight) {
                processedFooterLinks.push({ BottomLeft: item.BottomLeft || '' });
                processedFooterLinks.push({ BottomRight: item.BottomRight || '' });
              }
            });
            if (processedFooterLinks.length > 0) {
              FOOTER_LINKS.splice(0, FOOTER_LINKS.length, ...processedFooterLinks);
            }
          }
        }
        
        // Final Re-render with all data
        root.render(
          <StrictMode>
            <App />
          </StrictMode>
        );

      } catch (error) {
        console.error('Failed to fetch deferred data:', error);
      }
    }, 500); // Wait 500ms before fetching below-the-fold content

  } catch (error) {
    console.error('Failed to fetch data from API:', error);
  }
}

initApp();
