# Skrypt automatycznego wrzucenia projektu na GitHub i publikacji
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

Write-Host "🦉 DuoLearn - Publikacja na GitHub" -ForegroundColor Green

# Sprawdzenie logowania
gh auth status 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Zaloguj się do swojego konta GitHub..." -ForegroundColor Yellow
    gh auth login --web -p https
}

Write-Host "Tworzenie publicznego repozytorium duo-learn..." -ForegroundColor Cyan
gh repo create duo-learn --public --source=. --remote=origin --push

Write-Host "Włączanie GitHub Pages..." -ForegroundColor Cyan
gh api --method POST -H "Accept: application/vnd.github+json" /repos/:owner/duo-learn/pages -f build_type="workflow" 2>$null

Write-Host "`n Gotowe! Twoje repozytorium jest dostępne na GitHubie, a GitHub Actions publikuje stronę na Pages!" -ForegroundColor Green
