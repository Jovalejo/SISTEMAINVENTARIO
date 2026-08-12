# Comercializadora Inversiones El Esfuerzo — Inventario y Ventas

Sistema web para gestionar el catálogo de productos, los vendedores, registrar ventas (con entrega en **moto** o **camioneta**) y generar **reportes en PDF**.

- Construido con **Next.js 14** + **TypeScript** + **Tailwind CSS**.
- No necesita base de datos: los datos se guardan en el navegador (localStorage), así que puedes usarlo de inmediato al desplegarlo, sin configurar nada adicional.
- Los precios se omiten a propósito: la app gestiona inventario y ventas, no tarifas.

> **Importante sobre los datos:** como se guardan en el navegador de cada dispositivo, si registras ventas desde el celular y desde la computadora, cada uno tendrá su propia información. Si más adelante quieres que todos los vendedores compartan los mismos datos en tiempo real desde cualquier dispositivo, se necesitaría conectar una base de datos (por ejemplo Vercel Postgres o Supabase); puedo ayudarte a hacer ese cambio cuando lo necesites.

## ¿Qué incluye?

- **Panel**: resumen del día (ventas, unidades, entregas por moto/camioneta).
- **Inventario**: catálogo precargado con los productos de tu lista de precios (sin precios), organizado por categoría. Puedes agregar, editar, desactivar o eliminar productos.
- **Vendedores**: alta de vendedores, con conteo de ventas por cada uno.
- **Registrar venta**: eliges vendedor, medio de transporte (moto/camioneta), productos y cantidades.
- **Reportes**: filtra por fecha, vendedor y medio de entrega, y descarga un PDF con resumen y detalle.

## Cómo correrlo en tu computadora (opcional, para probar antes de subirlo)

Necesitas tener instalado [Node.js](https://nodejs.org) versión 18 o superior.

```bash
npm install
npm run dev
```

Abre `http://localhost:3000` en tu navegador.

## Cómo subirlo a GitHub

1. Crea un repositorio nuevo y vacío en GitHub (sin README, sin .gitignore).
2. Dentro de esta carpeta, ejecuta:

```bash
git init
git add .
git commit -m "Sistema de inventario y ventas"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
git push -u origin main
```

## Cómo subirlo a Vercel

1. Entra a [vercel.com](https://vercel.com) e inicia sesión (puedes usar tu cuenta de GitHub).
2. Haz clic en **"Add New" → "Project"**.
3. Selecciona el repositorio que acabas de subir a GitHub.
4. Vercel detecta automáticamente que es un proyecto Next.js — no necesitas cambiar ninguna configuración.
5. Haz clic en **"Deploy"** y espera unos minutos.
6. Al terminar, obtendrás un enlace (por ejemplo `tu-proyecto.vercel.app`) que puedes compartir con tu equipo.

Cada vez que subas cambios nuevos a la rama `main` de GitHub, Vercel actualizará el sitio automáticamente.

## Estructura del proyecto

```
app/
  page.tsx           → Panel principal
  productos/         → Inventario
  vendedores/         → Vendedores
  ventas/             → Registrar venta
  reportes/           → Reportes y descarga de PDF
components/           → Componentes de interfaz reutilizables
lib/
  types.ts           → Tipos de datos
  storage.ts         → Guardado de datos en el navegador
  seed-productos.ts  → Catálogo inicial de productos
  pdf-report.ts      → Generación del reporte en PDF
public/logo.png      → Logo de la comercializadora
```
