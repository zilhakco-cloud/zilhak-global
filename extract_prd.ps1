$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Open("C:\Users\miche\Downloads\Zilhak-DigiNext-PRD-v2.docx")
$outPath = Join-Path $PSScriptRoot "prd_text.txt"
$doc.Content.Text | Out-File -FilePath $outPath -Encoding UTF8
$doc.Close()
$word.Quit()
Write-Host "Done: $outPath"
