# Plataforma Educativa (Angular + Strapi)

Aplicación web para docentes y estudiantes con enfoque en:

- Portafolio profesional del docente
- Publicación de recursos educativos
- Gestión de tutorías y horarios disponibles
- Base escalable para pagos, cursos y servicios adicionales

## Stack

- Angular CLI 20.3.12 (compatible Node 20.19.5)
- Strapi 5 (backend CMS/API)
- SCSS + diseño profesional (paleta azul marino, gris grafito, blanco humo y dorado)

## Correr frontend

```bash
npm install
npm start
```

Ir a `http://localhost:4200`.

## Documentación funcional y arquitectura

Ver `docs/IMPLEMENTATION_PLAN.md`.

## Estado actual del repo

- Frontend Angular modular con rutas:
  - `/` home
  - `/contenido`
  - `/tutorias`
  - `/acceso`
- Servicios y modelos para integración con Strapi
- Tema visual profesional con contenido de ejemplo
