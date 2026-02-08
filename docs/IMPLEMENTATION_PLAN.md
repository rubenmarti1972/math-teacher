# Plataforma Educativa — Arquitectura e implementación

## 1) Estructura recomendada de Angular (implementada)

```text
src/app/
├── core/
│   ├── models/
│   │   └── platform.models.ts
│   └── services/
│       └── platform-data.service.ts
├── features/
│   ├── home/
│   │   └── home.component.*
│   ├── content/
│   │   └── content.component.*
│   ├── tutoring/
│   │   └── tutoring.component.*
│   └── auth/
│       └── auth.component.*
├── shared/
│   └── components/
│       ├── navbar/
│       └── footer/
├── app.config.ts
├── app.routes.ts
└── app.*
```

## 2) Esquema de colecciones Strapi

### `study-area`
- `title` (string, required)
- `slug` (uid, from title)
- `description` (richtext)
- `level` (enum: básico/intermedio/avanzado)
- Relación: `articles`, `videos`, `problems` (1:N)

### `article`
- `title` (string, required)
- `slug` (uid)
- `summary` (text)
- `content` (richtext)
- `cover` (media)
- `publishedAt` (datetime)
- Relación: `studyArea` (N:1), `author` (N:1 -> plugin users)

### `video`
- `title` (string)
- `provider` (enum: youtube/vimeo)
- `videoUrl` (string)
- `duration` (string)
- Relación: `studyArea` (N:1)

### `problem`
- `statement` (richtext)
- `difficulty` (enum: básica/media/alta)
- `isSolved` (boolean)
- `solution` (richtext)
- Relación: `studyArea` (N:1)

### `available-slot`
- `weekday` (enum: monday-sunday)
- `startTime` (time)
- `endTime` (time)
- `isActive` (boolean)
- Relación: `teacher` (N:1 -> plugin users)

### `tutoring-session`
- `date` (date)
- `status` (enum: pending/confirmed/completed/cancelled)
- `topic` (string)
- `notes` (text)
- Relación: `student` (N:1 users), `teacher` (N:1 users), `slot` (N:1 available-slot)

### `teacher-profile`
- `displayName` (string)
- `bio` (richtext)
- `specialties` (json/string[])
- `socialLinks` (component repeatable: label + url + icon)
- Relación: `user` (1:1 users)

## 3) Flujo de datos (Angular ⇄ Strapi)

1. Usuario entra al frontend Angular.
2. Angular Auth llama `POST /api/auth/local`.
3. Strapi responde JWT + perfil de usuario.
4. Angular guarda JWT (`environment.jwtKey`) y envía token en headers.
5. Módulo contenido consume endpoints (`/study-areas`, `/articles`, `/videos`, `/problems`).
6. Módulo tutorías consume (`/available-slots`, `/tutoring-sessions`).
7. Docente actualiza contenido/slots; estudiante reserva sesión.
8. Strapi persiste y devuelve estado actualizado para render reactivo.

## 4) Configuración inicial Angular-Strapi

- Archivo `src/environments/environment.ts` con `apiUrl` y `jwtKey`.
- `provideHttpClient()` en `app.config.ts`.
- `PlatformDataService` preparado para:
  - datos mock para demo,
  - y método real `getStudyAreasFromStrapi()` con `HttpClient`.

## 5) Dependencias NPM esenciales

### Frontend (Angular)
- `@angular/common`, `@angular/core`, `@angular/forms`, `@angular/router`
- `rxjs`, `zone.js`, `tslib`

### Backend (Strapi)
- `@strapi/strapi`
- `pg` (PostgreSQL recomendado en prod)
- `sqlite3` (opción local dev)
- `strapi-plugin-users-permissions`
- (futuro) SDK pagos: `stripe`

## 6) Escalabilidad planeada

1. **Pagos**: agregar `payment-intent` y webhook seguro (Stripe) desacoplado del flujo de tutoría.
2. **Cursos completos**: nuevo módulo `course`, `module`, `lesson`, `enrollment`.
3. **Certificaciones**: `assessment`, `attempt`, `certificate` con generación PDF.
4. **Comunidad/Q&A**: `question`, `answer`, moderación por roles.
5. **Live classes**: integración Zoom/Meet/YouTube Live con almacenamiento de grabaciones.
6. **Observabilidad**: auditoría de reservas, métricas de conversión y retención.
