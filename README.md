                 
# :cookie: Galletas Toddy (PtC)

PoC desarrollada en base a investigación de [Varonis](https://www.varonis.com/blog/cookie-bite) sobre Cookie-Bite (Pass-the-Cookie), que roba las cookies/tokens de una sesión activa de cuentas Microsoft a través una extensión maliciosa, con el objetivo de bypassear la autenticación MFA.

Por el momento, solo he realizado pruebas en navegador Chrome, pero no descarto otras alternativas como Edge, Firefox, etc.

## Instrucciones
1. Añadir extensión "Cookie editor" al navegador.
2. Editar el archivo "Toddy.js" con los ID's correspondientes a su formulario generado con Google Forms.
3. Ejecutar script de powershell.
 ```
 PS C:\> .\agregarExtensionChrome.ps1
 ```

> [!CAUTION]
Esta herramienta fue diseñada para fines de pentesting, por lo que el mal uso de este no está bajo mi responsabilidad.







