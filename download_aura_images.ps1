$imagesDir = "c:\Users\MAYANK KUMAR\Desktop\dentist\clinic 4\images"

$images = @{
    "aura-hero.jpg" = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" # Clean, modern office lobby, sunlight, wood
    "aura-philosophy.jpg" = "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1000&auto=format&fit=crop" # Clean interior/wellness
}

foreach ($key in $images.Keys) {
    $url = $images[$key]
    $dest = Join-Path $imagesDir $key
    Write-Host "Downloading $key..."
    try {
        Invoke-WebRequest -Uri $url -OutFile $dest -ErrorAction Stop
    } catch {
        Write-Host "Failed to download $key - $_"
    }
}
Write-Host "Aura Image download process completed."
