                 
# :cookie: Galletas Toddy (PtC)

PoC desarrollada en base a investigación de [Varonis](https://www.varonis.com/blog/cookie-bite) sobre Cookie-Bite (Pass-the-Cookie), que roba las cookies/tokens de una sesión activa de cuentas Microsoft a través de extensiones, para bypassear la autenticación MFA.

Por el momento solo he realizado pruebas en navegador Chrome, pero no descarto otras alternativas como Edge, Firefox, etc.

## Instrucciones
1. Añadir extensión "Cookie editor" al navegador.
2. Editar el archivo "Toddy.js" con los ID del Google Forms correspondiente a su formulario.
3. Ejecutar script de powershell
 ```
 PS C:\> .\agregarExtensionChrome.ps1
 ```

### Notas adicionales
Esta herramienta fue diseñada para fines de pentesting, por lo que el mal uso de este no está bajo mi responsbilidad.







