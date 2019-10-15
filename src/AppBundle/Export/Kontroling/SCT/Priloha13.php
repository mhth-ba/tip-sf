<?php

namespace AppBundle\Export\Kontroling\SCT;

class Priloha13
{
    private $rok;

    public function __construct()
    {
        $this->rok = 2000; // default year if parameter is not passed
    }

    public function getContent(): string
    {
        return '<?xml version="1.0"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:html="http://www.w3.org/TR/REC-html40">
 <DocumentProperties xmlns="urn:schemas-microsoft-com:office:office">
  <Author>Stefan Mader</Author>
  <Created>2007-08-22T05:57:03Z</Created>
  <Version>16.00</Version>
 </DocumentProperties>
 <OfficeDocumentSettings xmlns="urn:schemas-microsoft-com:office:office">
  <AllowPNG/>
 </OfficeDocumentSettings>
 <ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel">
  <WindowHeight>11760</WindowHeight>
  <WindowWidth>25200</WindowWidth>
  <WindowTopX>32760</WindowTopX>
  <WindowTopY>32760</WindowTopY>
  <ProtectStructure>False</ProtectStructure>
  <ProtectWindows>False</ProtectWindows>
 </ExcelWorkbook>
 <Styles>
  <Style ss:ID="Default" ss:Name="Normal">
   <Alignment ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Arial" x:CharSet="238"/>
   <Interior/>
   <NumberFormat/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356669748">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="12"
    ss:Bold="1"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356669768">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356669788">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356669808">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356669828">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356669848">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.0000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356669868">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356663280">
   <Alignment ss:Vertical="Center" ss:ShrinkToFit="1" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356663300">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356663320">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356663340">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356663360">
   <Alignment ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356663380">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356665984">
   <Alignment ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356666004">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356666024">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356666044">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356666064">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356666084">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356667024">
   <Alignment ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356667044">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356667064">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356667084">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356667104">
   <Alignment ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356667124">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356667856">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356667876">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356667896">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356667916">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356667936">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356667956">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356661408">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356661428">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="7"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356661448">
   <Alignment ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356661468">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356661488">
   <Alignment ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356661508">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356665152">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356665172">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356665212">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.00000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356665232">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="7"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356665272">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356668916">
   <Alignment ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356668936">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356668956">
   <Alignment ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356668976">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356668996">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356669016">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356665568">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356665588">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356665608">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356665628">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356665648">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356665668">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356662032">
   <Alignment ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356662052">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="Standard"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356662072">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356662092">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356662112">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356662132">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356663904">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356663924">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356663944">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356663964">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356663984">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356664004">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356664024">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356666608">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356666628">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="7"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356666648">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356666668">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356666688">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356666708">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356668084">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356668104">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356668124">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356668144">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356668164">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356668184">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356663716">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="m2170356663736">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" ss:Size="8"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356663756">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356666916">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" ss:Size="8"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2170356666936">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s64">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection/>
  </Style>
  <Style ss:ID="s65">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s66">
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s67">
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s68">
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s69">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s70">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s71">
   <Alignment ss:Vertical="Bottom" ss:WrapText="1"/>
   <NumberFormat/>
  </Style>
  <Style ss:ID="s72">
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
  </Style>
  <Style ss:ID="s73">
   <Alignment ss:Vertical="Bottom"/>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss"/>
  </Style>
  <Style ss:ID="s74">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <NumberFormat ss:Format="0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s75">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="Standard"/>
   <Protection/>
  </Style>
  <Style ss:ID="s76">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s77">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s78">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="s79">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="d/mmm"/>
   <Protection/>
  </Style>
  <Style ss:ID="s80">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="s81">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="s82">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Protection/>
  </Style>
  <Style ss:ID="s83">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <NumberFormat ss:Format="Short Date"/>
   <Protection/>
  </Style>
  <Style ss:ID="s84">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Protection/>
  </Style>
  <Style ss:ID="s85">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection/>
  </Style>
  <Style ss:ID="s86">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s87">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="s88">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s89">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s90">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s91">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s92">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s93">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="s94">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s95">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection/>
  </Style>
  <Style ss:ID="s96">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s97">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection/>
  </Style>
  <Style ss:ID="s98">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s99">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="12"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="s100">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="s102">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="7"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s103">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="7"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s104">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="s105">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="7"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s106">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="7"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s107">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="s108">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s109">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection/>
  </Style>
  <Style ss:ID="s110">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s111">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="Standard"/>
   <Protection/>
  </Style>
  <Style ss:ID="s112">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="s113">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="s115">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="s116">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="s117">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s118">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s119">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s120">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s121">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="s122">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s123">
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s124">
   <Font ss:FontName="Arial" x:CharSet="238"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s125">
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s126">
   <Font ss:FontName="Arial" x:CharSet="238"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s127">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Font ss:FontName="Arial" x:CharSet="238"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s129">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="s130">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="s131">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s132">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:ShrinkToFit="1"
    ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s133">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s134">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:ShrinkToFit="1"
    ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s135">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s136">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s137">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s138">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s139">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s140">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s141">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s142">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s143">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <NumberFormat ss:Format="0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s144">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s145">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="s146">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="s147">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="s148">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s149">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s150">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="s151">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="s152">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="s153">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="s154">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="s155">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s156">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="7"
    ss:Italic="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s157">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="7"
    ss:Italic="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s158">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s159">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s160">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s161">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s162">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s163">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s164">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s165">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s166">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="s167">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="s168">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="s169">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="s170">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s171">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s172">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s173">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s174">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Font ss:FontName="Arial CE" x:CharSet="238" ss:Size="8" ss:Bold="1"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s293">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" ss:Size="8"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s302">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s303">
   <Alignment ss:Horizontal="Right" ss:Vertical="Bottom"/>
   <Font ss:FontName="Arial" x:CharSet="238"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s304">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="12"
    ss:Bold="1"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s317">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s318">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s362">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="12"
    ss:Bold="1"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="s382">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="s389">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="s417">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss"/>
  </Style>
 </Styles>
 <Worksheet ss:Name="Príloha č. 13">
  <Table ss:ExpandedColumnCount="12" ss:ExpandedRowCount="70" x:FullColumns="1"
   x:FullRows="1">
   <Column ss:AutoFitWidth="0" ss:Width="36.75"/>
   <Column ss:AutoFitWidth="0" ss:Width="67.5"/>
   <Column ss:AutoFitWidth="0" ss:Width="74.25"/>
   <Column ss:AutoFitWidth="0" ss:Width="37.5"/>
   <Column ss:AutoFitWidth="0" ss:Width="33" ss:Span="1"/>
   <Column ss:Index="7" ss:AutoFitWidth="0" ss:Width="61.5" ss:Span="3"/>
   <Row>
    <Cell ss:StyleID="s174"><Data ss:Type="String">OBCHODNÉ TAJOMSTVO</Data></Cell>
    <Cell ss:StyleID="s123"/>
    <Cell ss:StyleID="s123"/>
    <Cell ss:StyleID="s123"/>
    <Cell ss:StyleID="s124"/>
    <Cell ss:StyleID="s125"/>
    <Cell ss:MergeAcross="3" ss:StyleID="s303"><Data ss:Type="String">Príloha č. 13 k vyhláške č. 248/2016 Z. z.</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="s122"/>
    <Cell ss:StyleID="s123"/>
    <Cell ss:StyleID="s123"/>
    <Cell ss:StyleID="s123"/>
    <Cell ss:StyleID="s124"/>
    <Cell ss:StyleID="s125"/>
    <Cell ss:StyleID="s126"/>
    <Cell ss:StyleID="s125"/>
    <Cell ss:StyleID="s127"/>
    <Cell ss:StyleID="s127"/>
   </Row>
   <Row ss:Height="15.75">
    <Cell ss:MergeAcross="9" ss:StyleID="s304"><Data ss:Type="String">SKUTOČNÉ NÁKLADY NA VÝROBU A DODÁVKU TEPLA</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:MergeAcross="1" ss:StyleID="s129"><Data ss:Type="String">Regulovaný subjekt: </Data></Cell>
    <Cell ss:MergeAcross="7" ss:StyleID="s293"><Data ss:Type="String">Bratislavská teplárenská, a.s.</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:MergeAcross="1" ss:StyleID="s129"><Data ss:Type="String">Sídlo / adresa trvalého pobytu:</Data></Cell>
    <Cell ss:MergeAcross="4" ss:StyleID="m2170356666916"><Data ss:Type="String">Turbínová 3, 829 05 Bratislava - mestská časť Nové Mesto</Data></Cell>
    <Cell ss:StyleID="s130"><Data ss:Type="String">IČO:</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356666936"><Data ss:Type="Number">35823542</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:MergeAcross="1" ss:StyleID="s129"><Data ss:Type="String">Číslo povolenia:</Data></Cell>
    <Cell ss:StyleID="s293"><Data ss:Type="String">2005T 0040</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356663716"><Data ss:Type="String">Meno a priezvisko kontaktnej osoby:</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356663736"><Data ss:Type="String">Ing. Martin Bíreš</Data></Cell>
    <Cell ss:StyleID="s129"><Data ss:Type="String">Telefónne číslo:</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356663756"><Data ss:Type="String">02/57 372 336</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:MergeAcross="1" ss:StyleID="s129"><Data ss:Type="String">Regulačný rok:</Data></Cell>
    <Cell ss:StyleID="s293"><Data ss:Type="Number">'
            . $this->getRok() .
    '</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s317"><Data ss:Type="String">Počet zdrojov:</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s293"><Data ss:Type="Number">9</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s317"><Data ss:Type="String">Počet OST/KOST:</Data></Cell>
    <Cell ss:StyleID="s302"/>
    <Cell ss:MergeAcross="1" ss:StyleID="s318"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="3" ss:MergeDown="1" ss:StyleID="m2170356668084"/>
    <Cell ss:MergeAcross="1" ss:MergeDown="1" ss:StyleID="m2170356668104"><Data
      ss:Type="String">výroba</Data></Cell>
    <Cell ss:MergeAcross="3" ss:StyleID="m2170356668124"><Data ss:Type="String">distribúcia </Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="35.25">
    <Cell ss:Index="7" ss:StyleID="s131"><Data ss:Type="String">Primárny rozvod</Data></Cell>
    <Cell ss:StyleID="s132"><Data ss:Type="String">Odovz. stanica tepla</Data></Cell>
    <Cell ss:StyleID="s133"><Data ss:Type="String">Sekundárny rozvod</Data></Cell>
    <Cell ss:StyleID="s134"><Data ss:Type="String">Odovz. stanica tepla</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="s93"><Data ss:Type="String">Objednané množstvo tepla (GWh):</Data></Cell>
    <Cell ss:StyleID="s69"/>
    <Cell ss:StyleID="s69"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356668144"/>
    <Cell ss:StyleID="s137"/>
    <Cell ss:StyleID="s138"/>
    <Cell ss:StyleID="s139"/>
    <Cell ss:StyleID="s140"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="3" ss:StyleID="m2170356668164"><Data ss:Type="String">Skutočne dodané množstvo tepla (GWh):</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356668184"/>
    <Cell ss:StyleID="s135"/>
    <Cell ss:StyleID="s141"/>
    <Cell ss:StyleID="s142"/>
    <Cell ss:StyleID="s136"/>
   </Row>
   <Row ss:Height="13.5">
    <Cell ss:StyleID="s104"><Data ss:Type="String">Por.č.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2170356666608"><Data ss:Type="String">        VARIABILNÉ NÁKLADY</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356666628"><Data ss:Type="String">v tisícoch eur</Data></Cell>
    <Cell ss:StyleID="s105"><Data ss:Type="String">v tisícoch eur</Data></Cell>
    <Cell ss:StyleID="s105"><Data ss:Type="String">v tisícoch eur</Data></Cell>
    <Cell ss:StyleID="s105"><Data ss:Type="String">v tisícoch eur</Data></Cell>
    <Cell ss:StyleID="s106"><Data ss:Type="String">v tisícoch eur</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0">
    <Cell ss:StyleID="s107"><Data ss:Type="String"> 1.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2170356666648"><Data ss:Type="String">Variabilné náklady na priamy materiál</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356666668"/>
    <Cell ss:StyleID="s108"/>
    <Cell ss:StyleID="s109"/>
    <Cell ss:StyleID="s110"/>
    <Cell ss:StyleID="s111"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s79"><Data ss:Type="String"> 1.1</Data></Cell>
    <Cell ss:StyleID="s112"><Data ss:Type="String">Zemný plyn          </Data></Cell>
    <Cell ss:StyleID="s113"><Data ss:Type="String">cena v eurách/kWh</Data></Cell>
    <Cell ss:StyleID="s157"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356666688"/>
    <Cell ss:StyleID="s74"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s86"/>
    <Cell ss:StyleID="s75"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s79"><Data ss:Type="String"> 1.2</Data></Cell>
    <Cell ss:StyleID="s112"><Data ss:Type="String">Bioplyn                </Data></Cell>
    <Cell ss:StyleID="s115"><Data ss:Type="String">cena v eurách/kWh</Data></Cell>
    <Cell ss:StyleID="s157"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356666708"/>
    <Cell ss:StyleID="s74"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s86"/>
    <Cell ss:StyleID="s76"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s79"><Data ss:Type="String"> 1.3</Data></Cell>
    <Cell ss:StyleID="s112"><Data ss:Type="String">Uhlie                     </Data></Cell>
    <Cell ss:StyleID="s116"><Data ss:Type="String">cena v eurách/t</Data></Cell>
    <Cell ss:StyleID="s156"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356663904"/>
    <Cell ss:StyleID="s74"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s86"/>
    <Cell ss:StyleID="s76"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s79"><Data ss:Type="String"> 1.4</Data></Cell>
    <Cell ss:StyleID="s112"><Data ss:Type="String">Vykurovací olej  </Data></Cell>
    <Cell ss:StyleID="s116"><Data ss:Type="String">cena v eurách/t</Data></Cell>
    <Cell ss:StyleID="s156"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356663924"/>
    <Cell ss:StyleID="s74"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s86"/>
    <Cell ss:StyleID="s76"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s79"><Data ss:Type="String"> 1.5</Data></Cell>
    <Cell ss:StyleID="s112"><Data ss:Type="String">Dendromasa      </Data></Cell>
    <Cell ss:StyleID="s116"><Data ss:Type="String">cena v eurách/t</Data></Cell>
    <Cell ss:StyleID="s156"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356663944"/>
    <Cell ss:StyleID="s74"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s86"/>
    <Cell ss:StyleID="s76"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s79"><Data ss:Type="String"> 1.6</Data></Cell>
    <Cell ss:StyleID="s112"><Data ss:Type="String">Poľno. biomasa   </Data></Cell>
    <Cell ss:StyleID="s116"><Data ss:Type="String">cena v eurách/t</Data></Cell>
    <Cell ss:StyleID="s156"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356663964"/>
    <Cell ss:StyleID="s74"><Data ss:Type="String"> </Data></Cell>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s86"/>
    <Cell ss:StyleID="s76"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s79"><Data ss:Type="String"> 1.7</Data></Cell>
    <Cell ss:StyleID="s112"><Data ss:Type="String">Iný druh paliva    </Data></Cell>
    <Cell ss:StyleID="s116"><Data ss:Type="String">cena v eurách/t</Data></Cell>
    <Cell ss:StyleID="s156"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356663984"/>
    <Cell ss:StyleID="s74"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s86"/>
    <Cell ss:StyleID="s76"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s79"><Data ss:Type="String"> 1.8</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2170356664004"><Data ss:Type="String">Nakupované teplo (variabilná zložka)</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356664024"/>
    <Cell ss:StyleID="s98"/>
    <Cell ss:StyleID="s90"/>
    <Cell ss:StyleID="s91"/>
    <Cell ss:StyleID="s92"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s80"><Data ss:Type="String"> 2.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2170356662032"><Data ss:Type="String">Ostatné variabilné náklady</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356662052"/>
    <Cell ss:StyleID="s143"/>
    <Cell ss:StyleID="s85"/>
    <Cell ss:StyleID="s144"/>
    <Cell ss:StyleID="s77"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s81"><Data ss:Type="String"> 2.1</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2170356662072"><Data ss:Type="String">Dopravné náklady</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356662092"/>
    <Cell ss:StyleID="s158"/>
    <Cell ss:StyleID="s159"/>
    <Cell ss:StyleID="s160"/>
    <Cell ss:StyleID="s161"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s81"><Data ss:Type="String"> 2.2</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2170356662112"><Data ss:Type="String">Elektrina</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356662132"/>
    <Cell ss:StyleID="s155"/>
    <Cell ss:StyleID="s159"/>
    <Cell ss:StyleID="s160"/>
    <Cell ss:StyleID="s161"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s81"><Data ss:Type="String"> 2.3</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2170356665568"><Data ss:Type="String">Voda</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356665588"/>
    <Cell ss:StyleID="s158"/>
    <Cell ss:StyleID="s159"/>
    <Cell ss:StyleID="s160"/>
    <Cell ss:StyleID="s161"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s81"><Data ss:Type="String"> 2.4</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2170356665608"><Data ss:Type="String">Technologické hmoty</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356665628"/>
    <Cell ss:StyleID="s162"/>
    <Cell ss:StyleID="s163"/>
    <Cell ss:StyleID="s164"/>
    <Cell ss:StyleID="s165"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s100"><Data ss:Type="String"> 2.5</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2170356665648"><Data ss:Type="String">Nákup emisných kvót a poplatky za znečistenie</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356665668"/>
    <Cell ss:StyleID="s166"/>
    <Cell ss:StyleID="s167"/>
    <Cell ss:StyleID="s168"/>
    <Cell ss:StyleID="s169"/>
   </Row>
   <Row>
    <Cell ss:MergeDown="1" ss:StyleID="s362"><Data ss:Type="String"> I.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2170356668916"><Data ss:Type="String">Variabilné náklady na priamy materiál</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356668936"
     ss:Formula="=SUM(R[-14]C:R[-7]C)"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s94"/>
    <Cell ss:StyleID="s95"/>
    <Cell ss:StyleID="s96"/>
    <Cell ss:StyleID="s97"/>
   </Row>
   <Row>
    <Cell ss:Index="2" ss:MergeAcross="2" ss:StyleID="m2170356668956"><Data
      ss:Type="String">Ostatné variabilné náklady</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356668976"
     ss:Formula="=SUM(R[-6]C:R[-2]C)"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s145" ss:Formula="=SUM(R[-6]C:R[-2]C)"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s146" ss:Formula="=SUM(R[-6]C:R[-2]C)"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s146" ss:Formula="=SUM(R[-6]C:R[-2]C)"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s147" ss:Formula="=SUM(R[-6]C:R[-2]C)"><Data ss:Type="Number">0</Data></Cell>
   </Row>
   <Row>
    <Cell ss:MergeAcross="3" ss:StyleID="m2170356668996"><Data ss:Type="String">VARIABILNÉ NÁKLADY</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356669016"
     ss:Formula="=SUM(R[-2]C:R[-1]C[1])"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s152" ss:Formula="=R[-1]C"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s153" ss:Formula="=R[-1]C"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s153" ss:Formula="=R[-1]C"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s154" ss:Formula="=R[-1]C"><Data ss:Type="Number">0</Data></Cell>
   </Row>
   <Row>
    <Cell ss:MergeAcross="3" ss:StyleID="m2170356665152"/>
    <Cell ss:MergeAcross="5" ss:StyleID="m2170356665172"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="3" ss:StyleID="s382"><Data ss:Type="String">Skutočná cena variabilnej zložky v eurách/kWh</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356665212"/>
    <Cell ss:StyleID="s117"/>
    <Cell ss:StyleID="s117"/>
    <Cell ss:StyleID="s117"/>
    <Cell ss:StyleID="s118"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="9" ss:StyleID="m2170356665232"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="3" ss:StyleID="s389"><Data ss:Type="String">Fakturovaný regulačný príkon (kW):</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356665272"/>
    <Cell ss:StyleID="s119"/>
    <Cell ss:StyleID="s119"/>
    <Cell ss:StyleID="s119"/>
    <Cell ss:StyleID="s120"/>
   </Row>
   <Row ss:Height="13.5">
    <Cell ss:StyleID="s87"><Data ss:Type="String">Por.č.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2170356661408"><Data ss:Type="String">        FIXNÉ NÁKLADY</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356661428"><Data ss:Type="String">v tisícoch eur</Data></Cell>
    <Cell ss:StyleID="s102"><Data ss:Type="String">v tisícoch eur</Data></Cell>
    <Cell ss:StyleID="s102"><Data ss:Type="String">v tisícoch eur</Data></Cell>
    <Cell ss:StyleID="s102"><Data ss:Type="String">v tisícoch eur</Data></Cell>
    <Cell ss:StyleID="s103"><Data ss:Type="String">v tisícoch eur</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="s78"><Data ss:Type="String"> 3.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2170356661448"><Data ss:Type="String">Fixné náklady</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356661468"/>
    <Cell ss:StyleID="s148"/>
    <Cell ss:StyleID="s88"/>
    <Cell ss:StyleID="s149"/>
    <Cell ss:StyleID="s89"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s83"><Data ss:Type="String"> 3.1.1</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2170356661488"><Data ss:Type="String">Nakupované teplo (fixná zložka)</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356661508"/>
    <Cell ss:StyleID="s170"/>
    <Cell ss:StyleID="s171"/>
    <Cell ss:StyleID="s172"/>
    <Cell ss:StyleID="s173"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s82"><Data ss:Type="String"> 3.1.2</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2170356667856"><Data ss:Type="String">Poistenie majetku</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356667876"/>
    <Cell ss:StyleID="s158"/>
    <Cell ss:StyleID="s159"/>
    <Cell ss:StyleID="s160"/>
    <Cell ss:StyleID="s161"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s82"><Data ss:Type="String"> 3.1.3</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2170356667896"><Data ss:Type="String">Dane </Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356667916"/>
    <Cell ss:StyleID="s158"/>
    <Cell ss:StyleID="s159"><Data ss:Type="String">  </Data></Cell>
    <Cell ss:StyleID="s160"/>
    <Cell ss:StyleID="s161"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s82"><Data ss:Type="String"> 3.1.4</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2170356667936"><Data ss:Type="String">Nájomné</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356667956"/>
    <Cell ss:StyleID="s158"/>
    <Cell ss:StyleID="s159"/>
    <Cell ss:StyleID="s160"/>
    <Cell ss:StyleID="s161"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="21">
    <Cell ss:StyleID="s82"><Data ss:Type="String"> 3.1.5</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2170356667024"><Data ss:Type="String">Revízie, zákonné prehliadky a zákonné poplatky</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356667044"/>
    <Cell ss:StyleID="s158"/>
    <Cell ss:StyleID="s159"/>
    <Cell ss:StyleID="s160"/>
    <Cell ss:StyleID="s161"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s82"><Data ss:Type="String"> 3.1.6</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2170356667064"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356667084"/>
    <Cell ss:StyleID="s158"/>
    <Cell ss:StyleID="s159"/>
    <Cell ss:StyleID="s160"/>
    <Cell ss:StyleID="s161"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="21">
    <Cell ss:StyleID="s82"><Data ss:Type="String"> 3.1.7</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2170356667104"><Data ss:Type="String">Náklady na overenie učtovnej závierky audítorom</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356667124"/>
    <Cell ss:StyleID="s158"/>
    <Cell ss:StyleID="s159"/>
    <Cell ss:StyleID="s160"/>
    <Cell ss:StyleID="s161"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="21">
    <Cell ss:StyleID="s84"><Data ss:Type="String"> 3.1.8</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2170356665984"><Data ss:Type="String">Odpisy hmotného a nehmotného majetku súvisiacieho s výrobou a rozvodom tepla</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356666004"/>
    <Cell ss:StyleID="s158"/>
    <Cell ss:StyleID="s159"/>
    <Cell ss:StyleID="s160"/>
    <Cell ss:StyleID="s161"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s82"><Data ss:Type="String"> 3.1.9</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2170356666024"><Data ss:Type="String">Opravy a udržiavanie spolu</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356666044"/>
    <Cell ss:StyleID="s158"/>
    <Cell ss:StyleID="s159"/>
    <Cell ss:StyleID="s160"/>
    <Cell ss:StyleID="s161"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s82"><Data ss:Type="String"> 3.1.10</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2170356666064"><Data ss:Type="String">Úroky z investičného úveru</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356666084"/>
    <Cell ss:StyleID="s158"/>
    <Cell ss:StyleID="s159"/>
    <Cell ss:StyleID="s160"/>
    <Cell ss:StyleID="s161"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="24">
    <Cell ss:StyleID="s84"><Data ss:Type="String"> 3.2</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2170356663280"><Data ss:Type="String">Odpisy a opravy spoločných zariadení súvisiacich s výrobou a rozvodom tepla </Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356663300"/>
    <Cell ss:StyleID="s158"/>
    <Cell ss:StyleID="s159"/>
    <Cell ss:StyleID="s160"/>
    <Cell ss:StyleID="s161"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s82"><Data ss:Type="String"> 3.3</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2170356663320"><Data ss:Type="String">Regulovaná zložka fixných nákladov</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356663340"/>
    <Cell ss:StyleID="s158"/>
    <Cell ss:StyleID="s159"/>
    <Cell ss:StyleID="s160"/>
    <Cell ss:StyleID="s161"/>
   </Row>
   <Row ss:AutoFitHeight="0">
    <Cell ss:StyleID="s99"><Data ss:Type="String"> II.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2170356663360"><Data ss:Type="String">FIXNÉ NÁKLADY</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356663380"
     ss:Formula="=SUM(R[-12]C:R[-1]C)"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s121" ss:Formula="=SUM(R[-12]C:R[-1]C)"><Data
      ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s150" ss:Formula="=SUM(R[-12]C:R[-1]C)"><Data
      ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s150" ss:Formula="=SUM(R[-12]C:R[-1]C)"><Data
      ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s151" ss:Formula="=SUM(R[-12]C:R[-1]C)"><Data
      ss:Type="Number">0</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0">
    <Cell ss:MergeAcross="9" ss:StyleID="m2170356669748"/>
   </Row>
   <Row ss:AutoFitHeight="0">
    <Cell ss:MergeAcross="3" ss:StyleID="m2170356669768"><Data ss:Type="String">Skutočný zisk za rok t</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356669788"/>
    <Cell ss:MergeAcross="3" ss:StyleID="m2170356669808"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="11.25">
    <Cell ss:MergeAcross="3" ss:StyleID="m2170356669828"><Data ss:Type="String">Skutočná cena fixnej zložky v eurách/kW</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2170356669848"/>
    <Cell ss:MergeAcross="3" ss:StyleID="m2170356669868"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s65"/>
    <Cell ss:StyleID="s66"/>
    <Cell ss:StyleID="s66"/>
    <Cell ss:StyleID="s66"/>
    <Cell ss:StyleID="s67"/>
    <Cell ss:StyleID="s68"/>
    <Cell ss:StyleID="s68"/>
    <Cell ss:StyleID="s68"/>
    <Cell ss:StyleID="s68"/>
    <Cell ss:StyleID="s68"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s65"/>
    <Cell ss:StyleID="s66"/>
    <Cell ss:StyleID="s66"/>
    <Cell ss:StyleID="s66"/>
    <Cell ss:StyleID="s67"/>
    <Cell ss:StyleID="s68"/>
    <Cell ss:StyleID="s68"/>
    <Cell ss:StyleID="s68"/>
    <Cell ss:StyleID="s68"/>
    <Cell ss:StyleID="s68"/>
   </Row>
   <Row ss:AutoFitHeight="0">
    <Cell ss:MergeAcross="1" ss:StyleID="s417"/>
    <Cell ss:StyleID="s71"/>
    <Cell ss:StyleID="s71"/>
    <Cell ss:StyleID="s71"/>
    <Cell ss:StyleID="s71"/>
    <Cell ss:StyleID="s71"/>
    <Cell ss:StyleID="s71"/>
    <Cell ss:StyleID="s71"/>
    <Cell ss:StyleID="s71"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
   </Row>
  </Table>
  <WorksheetOptions xmlns="urn:schemas-microsoft-com:office:excel">
   <PageSetup>
    <Header x:Margin="0.3"/>
    <Footer x:Margin="0.3"/>
    <PageMargins x:Bottom="0.75" x:Left="0.7" x:Right="0.7" x:Top="0.75"/>
   </PageSetup>
   <Print>
    <ValidPrinterInfo/>
    <PaperSizeIndex>9</PaperSizeIndex>
    <HorizontalResolution>600</HorizontalResolution>
    <VerticalResolution>600</VerticalResolution>
   </Print>
   <Selected/>
   <ProtectObjects>False</ProtectObjects>
   <ProtectScenarios>False</ProtectScenarios>
  </WorksheetOptions>
 </Worksheet>
</Workbook>';
    }

    public function getRok(): int
    {
        return $this->rok;
    }

    public function setRok(int $rok)
    {
        $this->rok = $rok;
    }
}