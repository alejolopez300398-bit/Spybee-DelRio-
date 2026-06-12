# Dashboard ejecutivo - Constructora del Río S.A.S.

Dashboard ejecutivo de Spybee para analizar el valor construido, la adopción de usuarios, el
uso por proyecto y las oportunidades de expansión de la cuenta de Constructora del Río S.A.S.

## Ver el dashboard

El despliegue público está disponible en:

**https://spybee-del-rio.vercel.app/**

## Abrir el proyecto localmente

El proyecto está construido con HTML, CSS y JavaScript, por lo que no requiere instalación de
dependencias.

### Opción 1: abrir el archivo

Abrir `index.html` en un navegador moderno.

### Opción 2: usar un servidor local

Desde la carpeta del proyecto, ejecutar:

```powershell
python -m http.server 8000
```

Después, abrir:

**http://localhost:8000**

Chart.js se carga desde CDN, por lo que los gráficos requieren conexión a internet.

## Fuente real de los datos

Los indicadores del dashboard fueron construidos con datos reales del archivo:

**`bbdd_unif.xlsx`**

La fuente entregada es un libro de Excel (`.xlsx`), no un archivo CSV. Los datos utilizados por
la interfaz están consolidados en el objeto `dashboardData` de `app.js`; el navegador no procesa
el Excel directamente durante la ejecución.

## Estructura real del archivo de datos

El libro `bbdd_unif.xlsx` contiene cinco hojas:

### `sbc_users`

Resumen de actividad agrupado por cargo o rol. Contiene 76 categorías y una fila de total
general.

Columnas:

- `Etiquetas de fila`
- `Suma de Logins`
- `Cuenta de Role`
- `Suma de Project views`
- `Suma de Total events`

### `sbc_project`

Detalle de los 18 proyectos de la cuenta y una fila final de totales.

Columnas:

- `Project`
- `Project ID`
- `Status`
- `City`
- `Address`
- `Latitude`
- `Longitude`
- `Created`
- `Last visit`
- `Project views`
- `Distinct viewers`
- `Visits`
- `Photos on map`
- `360 tours`
- `Map layers`
- `Photogrammetries`
- `Documents/files`
- `Video walkthroughs`
- `Incidents`
- `Point clouds`
- `Total registros`

### `sbc_monthly`

Actividad mensual de acceso y consulta. Contiene cinco periodos, desde diciembre de 2025 hasta
abril de 2026.

Columnas:

- `Month`
- `Logins`
- `Federated logins (SSO)`
- `Total logins`
- `Active users`
- `Project views`

### `sbc_dormant`

Detalle de 85 usuarios provisionados sin actividad de inicio de sesión.

Columnas:

- `Name`
- `Email`
- `Job title`
- `Role`
- `Account active`
- `Provisioned`

### `sbc_content_time`

Evolución mensual del contenido registrado. Contiene 29 periodos, desde diciembre de 2023 hasta
abril de 2026.

Columnas:

- `Month`
- `Visits`
- `Photos on map`
- `360 tours`
- `Map layers`
- `Photogrammetries`
- `Documents/files`
- `Video walkthroughs`
- `Incidents`
- `Point clouds`
- `Total`

## Estructura del proyecto

- `index.html`: estructura y contenido semántico del dashboard.
- `styles.css`: sistema visual, diseño responsive y estilos.
- `app.js`: consolidación de los datos reales, renderizado y configuración de gráficos.
- `bbdd_unif.xlsx`: fuente original de datos.
- `Plan de cuenta.docx`: documento de apoyo para la estrategia de cuenta.
- `README.md`: instrucciones y documentación del proyecto.

## Secciones del dashboard

1. **Resumen ejecutivo:** contexto general de la cuenta e indicadores principales.
2. **Valor construido:** evolución mensual y acumulada de los activos registrados.
3. **Adopción:** distribución del uso y roles con mayor número de eventos.
4. **Uso por proyecto:** consulta, registro y aprovechamiento de los 18 proyectos.
5. **Oportunidad:** proyectos eficientes, referente integral y proyectos prioritarios.
6. **Plan de expansión:** acciones recomendadas para dirección, operación y gerencia.

La narrativa sigue la secuencia:

`valor entregado -> riesgo actual -> oportunidad -> plan de expansión`

## Responsive

El dashboard se adapta a escritorio, tablet y móvil. En pantallas pequeñas, los indicadores y
paneles se reorganizan para conservar la legibilidad.
