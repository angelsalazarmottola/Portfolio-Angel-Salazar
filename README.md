# Portfolio-Angel-Salazar 🚀
### Solutions Architect & Cloud Security Portfolio

Este repositorio contiene mi portafolio profesional, desarrollado con un enfoque en escalabilidad, contenedores y mejores prácticas de arquitectura en la nube (AWS).

## 🛠️ Stack Tecnológico
- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express
- **Base de Datos**: PostgreSQL
- **Infraestructura**: Docker, AWS ECR, AWS App Runner, Route 53

## 📈 Bitácora de Desarrollo (Progress Logs)

> **Fase 1: Configuración de Entorno y Seguridad de Credenciales**
> * **Gestión de Secretos**: Implementación de `.gitignore` para la exclusión del archivo `.env`. Esta es una práctica crítica de seguridad para evitar la fuga de credenciales en repositorios públicos.
> * **Estandarización**: Configuración de Git Global y nombrado del repositorio siguiendo convenciones de despliegue profesional.
> * **Control de Versiones**: Inicialización de la rama `main` y vinculación con el origen remoto en GitHub.

> **Fase 2: Contenedores y Portabilidad con Docker**
> * **Arquitectura Multi-stage**: Implementación de un Dockerfile con etapas de Build y Production. Esto reduce drásticamente el tamaño de la imagen final y mejora la seguridad al no incluir el código fuente original ni herramientas de desarrollo en el entorno de ejecución profesional.
> * **Optimización de Imagen Base**: Selección estratégica de node:20-slim para minimizar la superficie de ataque y asegurar que el almacenamiento en AWS ECR se mantenga dentro de los límites de la capa gratuita (500 MB).
> * **Aislamiento de Artefactos**: Configuración de .dockerignore para garantizar que archivos sensibles (.env), carpetas de dependencias locales (node_modules) y metadatos de Git no se transfieran al contexto de construcción, optimizando la velocidad del pipeline.