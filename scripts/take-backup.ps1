param(
  [Parameter(Mandatory = $true)]
  [string]$Title,

  [Parameter(Mandatory = $false)]
  [switch]$DryRun,

  [Parameter(Mandatory = $false)]
  [string]$SourceRoot = "",

  [Parameter(Mandatory = $false)]
  [string]$BackupRoot = "D:\Rudra\MSPL-044\BACKUPS\wan-buffer-website-backup"
)

$ErrorActionPreference = "Stop"

function Get-ScriptDirectory {
  if (![string]::IsNullOrWhiteSpace($PSScriptRoot)) {
    return $PSScriptRoot
  }

  if ($MyInvocation.MyCommand.Path) {
    return Split-Path -Parent $MyInvocation.MyCommand.Path
  }

  throw "Unable to resolve script directory. Provide -SourceRoot explicitly."
}

function Get-BackupDateString {
  return (Get-Date).ToString("dd-MM-yyyy")
}

function Get-SafeSlug {
  param([Parameter(Mandatory = $true)][string]$Value)

  $slug = $Value.Trim()
  $slug = $slug -replace "[^\w\- ]", ""
  $slug = $slug -replace "\s+", "-"
  $slug = $slug -replace "-{2,}", "-"
  return $slug.Trim("-")
}

function Ensure-Directory {
  param([Parameter(Mandatory = $true)][string]$Path)
  if (!(Test-Path -LiteralPath $Path)) {
    New-Item -ItemType Directory -Path $Path | Out-Null
  }
}

$resolvedSourceRoot = $SourceRoot
if ([string]::IsNullOrWhiteSpace($resolvedSourceRoot)) {
  $scriptDir = Get-ScriptDirectory
  $resolvedSourceRoot = (Resolve-Path (Join-Path $scriptDir "..")).Path
} else {
  $resolvedSourceRoot = (Resolve-Path $resolvedSourceRoot).Path
}

$dateStr = Get-BackupDateString
$safeTitle = Get-SafeSlug -Value $Title
if ([string]::IsNullOrWhiteSpace($safeTitle)) {
  throw "Title becomes empty after sanitization. Provide a more descriptive title."
}

Ensure-Directory -Path $BackupRoot

$destFolderName = "$dateStr-backup-$safeTitle"
$destPath = Join-Path $BackupRoot $destFolderName
Ensure-Directory -Path $destPath

$excludeDirNames = @(
  "node_modules",
  ".next",
  "dist",
  "build",
  "out",
  ".turbo",
  ".vercel",
  ".cache",
  "coverage"
)

$xdArgs = @()
foreach ($dirName in $excludeDirNames) {
  # Exclude by name (catches nested dirs like web\node_modules)
  $xdArgs += @("/XD", $dirName)
}

Write-Host "Backing up project..."
Write-Host "Source: $resolvedSourceRoot"
Write-Host "Dest:   $destPath"
Write-Host "Exclude (by name): $($excludeDirNames -join ', ')"

# /MIR mirrors directory tree; safe because destination folder is new.
# /R:2 /W:1 keep retries low for locked files.
# /NFL /NDL reduce noise; /NP hides progress percent.
$roboArgs = @($resolvedSourceRoot, $destPath, "/MIR", "/R:2", "/W:1", "/NFL", "/NDL", "/NP") + $xdArgs
if ($DryRun) {
  $roboArgs += "/L"
  Write-Host "Dry run enabled (/L): no files will be copied."
}

robocopy @roboArgs | Out-Host

if ($LASTEXITCODE -ge 8) {
  throw "Robocopy failed with exit code $LASTEXITCODE"
}

Write-Host "Backup complete: $destPath"

