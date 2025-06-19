# 🚀 Deployment Guide - Rastas Málaga Lions

## 🇯🇲 Cómo subir tu web rastafari a GitHub Pages

### 📋 Pasos para el deployment:

#### 1. **Preparar el repositorio**

```bash
# Si no tienes git inicializado
git init

# Añadir todos los archivos
git add .

# Primer commit
git commit -m "🇯🇲 Initial commit - Rastas Málaga Lions blessed website"
```

#### 2. **Crear repositorio en GitHub**

1. Ve a [GitHub.com](https://github.com)
2. Click en "New repository"
3. Nombre del repositorio: **exactamente** `Rastas-M-laga-Lion`
4. ✅ **Importante**: Debe ser público (Public)
5. No añadas README, .gitignore ni licencia (ya los tienes)
6. Click "Create repository"

#### 3. **Conectar con GitHub**

```bash
# Añadir remote (sustituye 'kazuma275' por tu usuario de GitHub)
git remote add origin https://github.com/kazuma275/Rastas-M-laga-Lion.git

# Subir a GitHub
git branch -M main
git push -u origin main
```

#### 4. **Configurar GitHub Pages**

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. Scroll down hasta **Pages** en el menú lateral
4. En **Source**, selecciona **GitHub Actions**
5. ✅ ¡Listo! El workflow ya está configurado

#### 5. **¡Tu web estará disponible en:**

```
https://kazuma275.github.io/Rastas-M-laga-Lion/
```

### 🔄 Para actualizar la web:

Cada vez que hagas cambios:

```bash
# Añadir cambios
git add .

# Commit con mensaje descriptivo
git commit -m "🎨 Updated rastafari animations and improved UX"

# Subir cambios
git push

# ¡Automáticamente se desplegará en 2-3 minutos!
```

### ✅ Verificación del deployment:

1. Ve a tu repositorio en GitHub
2. Click en **Actions**
3. Deberías ver el workflow "🇯🇲 Deploy Rastas Málaga Lions to GitHub Pages"
4. Si está en verde ✅ = deployment exitoso
5. Si está en rojo ❌ = click para ver los errores

### 🛠️ Troubleshooting:

#### Si la página no carga:

1. Verifica que el repositorio sea **público**
2. Verifica que GitHub Pages esté habilitado
3. Espera 5-10 minutos (puede tardar en propagarse)

#### Si las rutas no funcionan:

- Las rutas están configuradas para GitHub Pages
- La app usa React Router con basename `/Rastas-M-laga-Lion/`

#### Si falta algún archivo:

```bash
# Verificar que todos los archivos estén committeados
git status

# Si falta algo:
git add archivo-faltante.tsx
git commit -m "Added missing file"
git push
```

### 📁 Archivos importantes para deployment:

- ✅ `vite.config.ts` - Configurado con base path correcto
- ✅ `.github/workflows/deploy.yml` - Workflow automático
- ✅ `package.json` - Scripts de build
- ✅ Todas las páginas y componentes

### 🎉 ¡Tu web rastafari está lista!

Una vez deployada, tendrás:

- 🌐 Web accesible 24/7
- 🔄 Auto-deployment en cada push
- 📱 Responsive en todos los dispositivos
- 🇯🇲 Temática rastafari completa
- 🛒 Tienda funcional
- 📅 Sistema de reservas
- ✨ Animaciones espectaculares

**¡Jah Bless! One Love! ❤️💛💚**
