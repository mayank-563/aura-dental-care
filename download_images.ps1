$imagesDir = "c:\Users\MAYANK KUMAR\Desktop\dentist\clinic 4\images"
New-Item -ItemType Directory -Force -Path $imagesDir

$images = @{
    # Hero & Aesthetic
    "hero-bg.jpg" = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" # Clean, modern office interior
    "portal-bg.jpg" = "https://images.unsplash.com/photo-1507207611509-ec012433ff52?q=80&w=1000&auto=format&fit=crop" # Abstract clean architecture
    
    # Technology Suite
    "tech-scanner.jpg" = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop" # Dental tools close up
    "tech-laser.jpg" = "https://images.unsplash.com/photo-1598256989814-ffb36ce90eb6?q=80&w=800&auto=format&fit=crop" # Medical tech abstract
    "tech-imaging.jpg" = "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=800&auto=format&fit=crop" # MRI/Imaging
    "tech-lab.jpg" = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" # Lab tech

    # Specialists (Professional, non-stocky)
    "dr-ortho.jpg" = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop"
    "dr-surgery.jpg" = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop"
    "dr-peds.jpg" = "https://images.unsplash.com/photo-1594824436998-df40ee197b1d?q=80&w=800&auto=format&fit=crop"
    "dr-perio.jpg" = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"

    # Blog / Hub
    "blog-1.jpg" = "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?q=80&w=600&auto=format&fit=crop" # Toothbrush/care
    "blog-2.jpg" = "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?q=80&w=600&auto=format&fit=crop" # Clean aesthetic lifestyle
    "blog-3.jpg" = "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=600&auto=format&fit=crop" # Technology concept
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
Write-Host "Image download process completed."
