# 📋 Checklist de SEO - Sapeco S.A.

## ✅ Implementado

### Meta Tags Básicos
- ✅ Title optimizado con palabras clave
- ✅ Meta description (160 caracteres)
- ✅ Meta keywords
- ✅ Meta robots (index, follow)
- ✅ Meta language
- ✅ Canonical URL
- ✅ Favicon e iconos

### Open Graph (Facebook, WhatsApp, LinkedIn)
- ✅ og:type
- ✅ og:url
- ✅ og:title
- ✅ og:description
- ✅ og:image (1200x630px recomendado)
- ✅ og:image:width y height
- ✅ og:site_name
- ✅ og:locale (es_AR)

### Twitter Cards
- ✅ twitter:card
- ✅ twitter:url
- ✅ twitter:title
- ✅ twitter:description
- ✅ twitter:image

### Datos Estructurados (Schema.org)
- ✅ Organization
- ✅ LocalBusiness
- ✅ WebSite
- ✅ Services
- ✅ GeoCoordinates
- ✅ PostalAddress

### Archivos SEO
- ✅ robots.txt
- ✅ sitemap.xml
- ✅ .htaccess (compresión, cache, seguridad)

---

## 🔧 Tareas Pendientes

### 1. Imagen para Redes Sociales
**IMPORTANTE**: Necesitas crear una imagen especial para compartir en redes sociales:
- **Dimensiones**: 1200x630 píxeles
- **Formato**: JPG o PNG
- **Nombre sugerido**: `og-image.jpg` o `social-share.jpg`
- **Ubicación**: Guardar en carpeta `images/`
- **Contenido sugerido**: Logo de Sapeco + texto "30 años construyendo confianza" + imagen de obra

Luego actualizar en index.html línea 26:
```html
<meta property="og:image" content="https://www.sapecosa.com/images/og-image.jpg" />
```

### 2. Actualizar URL del Sitio
Cuando tengas el dominio real, reemplazar `https://www.sapecosa.com/` en:
- index.html (todas las meta tags og:url, canonical, etc.)
- sitemap.xml
- Datos estructurados (JSON-LD)

### 3. Google Search Console
1. Ir a: https://search.google.com/search-console
2. Agregar propiedad (tu dominio)
3. Verificar propiedad
4. Enviar sitemap.xml: `https://tudominio.com/sitemap.xml`

### 4. Google Business Profile (ex Google My Business)
1. Ir a: https://business.google.com
2. Crear perfil de negocio
3. Agregar:
   - Dirección: Vucetich 968, Wilde, Buenos Aires
   - Teléfono: +54 11 52284318
   - Email: sapecosa@gmail.com
   - Horarios: Lun-Vie 9:00-18:00
   - Fotos de obras realizadas
   - Descripción del negocio
4. Verificar ubicación

### 5. Facebook Business Page
Si tienes página de Facebook, agregar la URL en index.html línea 104:
```html
"sameAs": [
    "https://www.facebook.com/sapecosa",
    "https://www.instagram.com/sapecosa"
]
```

### 6. Pruebas de SEO y Redes Sociales

**Herramientas para probar cómo se ve al compartir:**

- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
  - Pegar tu URL y click en "Debug"
  - Ver preview de cómo se verá en Facebook/WhatsApp
  - Click en "Scrape Again" si hiciste cambios

- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
  - Pegar tu URL
  - Ver preview de Twitter Card

- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
  - Pegar tu URL
  - Ver cómo se verá en LinkedIn

- **Google Rich Results Test**: https://search.google.com/test/rich-results
  - Pegar tu URL
  - Verificar que los datos estructurados sean válidos

### 7. Optimización de Imágenes
- Comprimir todas las imágenes en `images/` (usar TinyPNG o similar)
- Agregar atributo `alt` descriptivo a todas las imágenes
- Considerar usar formato WebP para mejor rendimiento

### 8. Google Analytics (Opcional pero Recomendado)
1. Crear cuenta en: https://analytics.google.com
2. Obtener código de seguimiento
3. Agregar antes de `</head>` en index.html:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=TU-CODIGO"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU-CODIGO');
</script>
```

### 9. SSL/HTTPS
- Asegurar que el sitio use HTTPS
- Obtener certificado SSL (Let's Encrypt es gratis)
- Descomentar las líneas en .htaccess para forzar HTTPS

### 10. Velocidad del Sitio
Probar en:
- Google PageSpeed Insights: https://pagespeed.web.dev/
- GTmetrix: https://gtmetrix.com/

Optimizaciones recomendadas:
- Minificar CSS/JS
- Lazy loading para imágenes
- Comprimir recursos

---

## 📱 Cómo Probar WhatsApp

1. Publica el sitio en tu servidor
2. Abre WhatsApp Web o la app
3. Envía el link de tu página a un contacto
4. WhatsApp mostrará:
   - Imagen (og:image)
   - Título (og:title)
   - Descripción (og:description)
   - URL

Si no aparece correctamente:
1. Verificar que las meta tags estén bien
2. Usar Facebook Debugger y hacer "Scrape Again"
3. WhatsApp usa el mismo sistema de Facebook

---

## 🎯 Palabras Clave Principales

Ya incluidas en el SEO:
- obras públicas
- montajes industriales
- redes de agua
- redes cloacales
- gas natural
- obras civiles
- infraestructura
- Berazategui
- Hudson
- Buenos Aires
- zona sur

---

## 📊 Métricas a Monitorear

Después de lanzar:
1. Posición en Google para palabras clave
2. Tráfico orgánico (Google Analytics)
3. Clics desde redes sociales
4. Conversiones (formulario de contacto)
5. Tiempo en página
6. Tasa de rebote

---

## ✉️ Contacto y Soporte

Si necesitas ayuda con algún paso, consulta:
- Google Search Console Help: https://support.google.com/webmasters
- Schema.org Documentation: https://schema.org/
- Meta for Developers: https://developers.facebook.com/docs/sharing/webmasters
