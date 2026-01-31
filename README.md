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

> **Fase 3: Persistencia Cloud y Networking de Contenedores**
> * **Infraestructura de Datos Serverless**: Migración de la base de datos local a **Neon PostgreSQL (v17)** en la región `us-east-1` (Virginia). Esta elección minimiza la latencia de cara al despliegue en AWS App Runner.
> * **Resolución de Networking Docker**: Configuración del host de escucha en `0.0.0.0` y mapeo de puertos `8080:8080`. Se resolvió el error de "Empty Response" asegurando que el tráfico del host local pueda cruzar el aislamiento del contenedor.
> * **Estrategia de Migración (Dump & Restore)**: Implementación de un proceso de extracción de datos mediante `pg_dump` y re-formateo a comandos `INSERT` para garantizar compatibilidad con motores gestionados.
> * **Integridad de Secuencias**: Sincronización manual de contadores de ID (`setval`) tras la inyección de datos, asegurando que las nuevas inserciones (mensajes de contacto) no generen conflictos de clave primaria.

> **Fase 4: Gobernanza de Identidad y Configuración de AWS CLI**
> * **Gestión de Accesos (IAM)**: Creación del usuario programático portfolio-deployer bajo el principio de privilegio mínimo. Se asignaron políticas específicas para Amazon ECR (gestión de imágenes) y AWS App Runner (orquestación del servicio), garantizando un entorno de despliegue seguro y controlado.
> * **Políticas de Seguridad**: Generación de llaves de acceso (Access Keys) para la interfaz de línea de comandos, permitiendo una comunicación cifrada entre el entorno de desarrollo local y el plano de control de AWS.
> * **Configuración del CLI**: Vinculación de la terminal local con el proveedor de nube mediante aws configure. Se estandarizó la región us-east-1 (N. Virginia) para mantener la consistencia geográfica con la base de datos Neon y minimizar la latencia de red en la arquitectura final.
> * **Validación STS**: Verificación de la conexión segura con AWS STS (Security Token Service) para confirmar la identidad del "deployer" antes del push de imágenes.