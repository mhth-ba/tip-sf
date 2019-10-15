<?php

namespace AppBundle\Export\Kontroling\SCT;

class Priloha20
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
  <Author>Microsoft Corporation</Author>
  <Created>1997-01-24T11:07:25Z</Created>
  <Company>Microsoft Corporation</Company>
  <Version>16.00</Version>
 </DocumentProperties>
 <OfficeDocumentSettings xmlns="urn:schemas-microsoft-com:office:office">
  <AllowPNG/>
 </OfficeDocumentSettings>
 <ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel">
  <WindowHeight>14730</WindowHeight>
  <WindowWidth>22800</WindowWidth>
  <WindowTopX>32767</WindowTopX>
  <WindowTopY>32767</WindowTopY>
  <ProtectStructure>False</ProtectStructure>
  <ProtectWindows>False</ProtectWindows>
  <DisplayInkNotes>False</DisplayInkNotes>
 </ExcelWorkbook>
 <Styles>
  <Style ss:ID="Default" ss:Name="Normal">
   <Alignment ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238"/>
   <Interior/>
   <NumberFormat/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495738628">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495738648">
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
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495738668">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495738688">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495738708">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" ss:Size="9" ss:Bold="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495738728">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495738400">
   <Alignment ss:Vertical="Bottom" ss:ShrinkToFit="1" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495738420">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495738440">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495738460">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495738480">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495738500">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495738192">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495738212">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495738232">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495738252">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495738272">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495738292">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495737776">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495737796">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495737816">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495737836">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495737856">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495737876">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495736944">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495736964">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495736984">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495737004">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495737024">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495737044">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495737064">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495737568">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495737588">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495737608">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <NumberFormat ss:Format="0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495737628">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495737648">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495737668">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495737688">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" ss:Size="9" ss:Italic="1"/>
   <NumberFormat ss:Format="Standard"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495737708">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495737728">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495737748">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495735488">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495735528">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495735548">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495735568">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495735588">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495736736">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495736756">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495736776">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495736796">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495736816">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495736836">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495736528">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495736548">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495736568">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495736588">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495736608">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495736628">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495738816">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495738836">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495738856">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495738876">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495738896">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495738916">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495737360">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495737380">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495737400">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495737420">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495737440">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495737460">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495736320">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495736340">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495736360">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495736380">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495736400">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495736420">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495736440">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495738004">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495738024">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495738044">
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
   <Protection/>
  </Style>
  <Style ss:ID="m2258495738064">
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
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495738084">
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
  <Style ss:ID="m2258495738104">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495738124">
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
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495738144">
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
   <NumberFormat ss:Format="#,##0"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495738164">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495736112">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="m2258495736212">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" ss:Size="9"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495739144">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" ss:Size="9"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2258495739164">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" ss:Size="9"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s64">
   <Alignment ss:Vertical="Center" ss:WrapText="1"/>
  </Style>
  <Style ss:ID="s65">
   <Alignment ss:Vertical="Center"/>
  </Style>
  <Style ss:ID="s66">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s67">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s68">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="Short Date"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s69">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s70">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s71">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s72">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s73">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="s74">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="s75">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <NumberFormat ss:Format="d/mmm"/>
   <Protection/>
  </Style>
  <Style ss:ID="s76">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <NumberFormat ss:Format="d/mmm"/>
   <Protection/>
  </Style>
  <Style ss:ID="s77">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="s78">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="s79">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="s80">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" ss:Size="9" ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="s81">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s82">
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s83">
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s84">
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s85">
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s86">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" ss:Size="9" ss:Bold="1"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="s87">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" ss:Size="9"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s88">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s89">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s90">
   <Borders/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s91">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Font ss:FontName="Arial CE" x:CharSet="238" ss:Size="8" ss:Bold="1"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s235">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s236">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="12"
    ss:Bold="1"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s237">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Arial" x:Family="Swiss" ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s238">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="s248">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="s249">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s250">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s251">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s315">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="s363">
   <Alignment ss:Vertical="Center" ss:WrapText="1"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:VerticalAlign="Superscript"/>
   <Protection/>
  </Style>
 </Styles>
 <Worksheet ss:Name="Príloha č. 20">
  <Table ss:ExpandedColumnCount="14" ss:ExpandedRowCount="57" x:FullColumns="1"
   x:FullRows="1">
   <Column ss:Index="3" ss:AutoFitWidth="0" ss:Width="60.75"/>
   <Column ss:AutoFitWidth="0" ss:Width="57.75"/>
   <Column ss:Index="8" ss:AutoFitWidth="0" ss:Width="38.25"/>
   <Column ss:Index="10" ss:AutoFitWidth="0" ss:Width="58.5" ss:Span="1"/>
   <Row>
    <Cell ss:StyleID="s91"><Data ss:Type="String">OBCHODNÉ TAJOMSTVO</Data></Cell>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s83"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s85"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s85"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s85"/>
    <Cell ss:StyleID="s84"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s83"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s85"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:MergeAcross="3" ss:StyleID="s235"><Data ss:Type="String">Príloha č. 20 k vyhláške č. 248/2016 Z. z.</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s83"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s85"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s85"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s85"/>
    <Cell ss:StyleID="s84"/>
   </Row>
   <Row ss:Height="15.75">
    <Cell ss:MergeAcross="11" ss:StyleID="s236"><Data ss:Type="String">Skutočné náklady na výrobu tepla zo zdrojov tepla bez kombinovanej výroby</Data></Cell>
   </Row>
   <Row>
    <Cell ss:MergeAcross="11" ss:StyleID="s237"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:MergeAcross="1" ss:StyleID="s238"><Data ss:Type="String">Regulovaný subjekt: </Data></Cell>
    <Cell ss:MergeAcross="9" ss:StyleID="s87"><Data ss:Type="String">Bratislavská teplárenská, a.s.</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:MergeAcross="1" ss:StyleID="s238"><Data ss:Type="String">Sídlo / adresa trvalého pobytu:</Data></Cell>
    <Cell ss:MergeAcross="6" ss:StyleID="m2258495739144"><Data ss:Type="String">Turbínová 3, 829 05 Bratislava - mestská časť Nové Mesto</Data></Cell>
    <Cell ss:StyleID="s86"><Data ss:Type="String">IČO:</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495739164"><Data ss:Type="Number">35823542</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495736112"><Data ss:Type="String">Číslo povolenia:</Data></Cell>
    <Cell ss:StyleID="s87"><Data ss:Type="String">2005T 0040</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s248"><Data ss:Type="String">Meno a priezvisko kontaktnej osoby:</Data></Cell>
    <Cell ss:MergeAcross="3" ss:StyleID="s249"><Data ss:Type="String">Ing. Martin Bíreš</Data></Cell>
    <Cell ss:StyleID="s88"><Data ss:Type="String">Telefónne číslo:</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s250"><Data ss:Type="String">02/57 372 336</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:MergeAcross="1" ss:StyleID="s238"><Data ss:Type="String">Regulačný rok:</Data></Cell>
    <Cell ss:MergeAcross="9" ss:StyleID="m2258495736212"><Data ss:Type="Number">'
            . $this->getRok() .
    '</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="s89"/>
    <Cell ss:StyleID="s90"/>
    <Cell ss:StyleID="s90"/>
    <Cell ss:MergeAcross="8" ss:StyleID="s251"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="3" ss:MergeDown="1" ss:StyleID="m2258495738004"/>
    <Cell ss:MergeAcross="1" ss:MergeDown="1" ss:StyleID="m2258495738024"><Data
      ss:Type="String">Celkové náklady  </Data></Cell>
    <Cell ss:MergeAcross="5" ss:MergeDown="1" ss:StyleID="m2258495738044"/>
   </Row>
   <Row ss:Index="13">
    <Cell ss:MergeAcross="3" ss:StyleID="m2258495738064"><Data ss:Type="String">Množstvo vyrobeného tepla (GWh): </Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495738084"/>
    <Cell ss:MergeAcross="5" ss:MergeDown="20" ss:StyleID="m2258495738104"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="3" ss:StyleID="m2258495738124"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495738144"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s73"><Data ss:Type="String">Por.č.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495738164"><Data ss:Type="String">        VARIABILNÉ NÁKLADY</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495736320"><Data ss:Type="String">v tisícoch eur</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="24.75">
    <Cell ss:StyleID="s74"><Data ss:Type="String"> 1.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495736340"><Data ss:Type="String">Variabilné náklady na priamy materiál</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495736360"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s75"><Data ss:Type="String"> 1.1</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495736380"><Data ss:Type="String"> Zemný plyn</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495736400"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s75"><Data ss:Type="String"> 1.2</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495736420"><Data ss:Type="String"> Bioplyn</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495736440"/>
   </Row>
   <Row ss:AutoFitHeight="0">
    <Cell ss:StyleID="s75"><Data ss:Type="String"> 1.3</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495737360"><Data ss:Type="String"> Uhlie</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495737380"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="12">
    <Cell ss:StyleID="s76"><Data ss:Type="String"> 1.4</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495737400"><Data ss:Type="String"> Vykurovací olej </Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495737420"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s75"><Data ss:Type="String"> 1.5</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495737440"><Data ss:Type="String"> Dendromasa</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495737460"/>
   </Row>
   <Row ss:AutoFitHeight="0">
    <Cell ss:StyleID="s76"><Data ss:Type="String"> 1.6</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495738816"><Data ss:Type="String"> Poľnohospodárska biomasa</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495738836"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s75"><Data ss:Type="String"> 1.7</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495738856"><Data ss:Type="String"> Iný druh paliva</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495738876"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s75"><Data ss:Type="String"> 1.8</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495738896"><Data ss:Type="String"> Nakupované teplo (variabilná zložka)</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495738916"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="18.75">
    <Cell ss:StyleID="s77"><Data ss:Type="String"> 2.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495736528"><Data ss:Type="String">Ostatné variabilné náklady</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495736548"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s78"><Data ss:Type="String"> 2.1</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495736568"><Data ss:Type="String">Dopravné náklady</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495736588"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s80"><Data ss:Type="String"> 2.2</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495736608"><Data ss:Type="String">Elektrina</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495736628"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s78"><Data ss:Type="String"> 2.3</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495736736"><Data ss:Type="String">Voda</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495736756"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s79"><Data ss:Type="String"> 2.4</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495736776"><Data ss:Type="String">Technologické hmoty</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495736796"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s79"><Data ss:Type="String"> 2.5</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495736816"><Data ss:Type="String">Nákup emisných kvót</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495736836"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="5" ss:StyleID="m2258495735488"/>
   </Row>
   <Row>
    <Cell ss:MergeDown="1" ss:StyleID="s315"><Data ss:Type="String"> I.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495735528"><Data ss:Type="String">Variabilné náklady na priamy materiál</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495735548"
     ss:Formula="=SUM(R[-15]C:R[-9]C[1])"><Data ss:Type="Number">0</Data></Cell>
   </Row>
   <Row>
    <Cell ss:Index="2" ss:MergeAcross="2" ss:StyleID="m2258495735568"><Data
      ss:Type="String">Ostatné variabilné náklady</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495735588"
     ss:Formula="=SUM(R[-7]C:R[-3]C)"><Data ss:Type="Number">0</Data></Cell>
   </Row>
   <Row>
    <Cell ss:MergeAcross="3" ss:StyleID="m2258495737568"><Data ss:Type="String">Variabilné náklady </Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495737588"
     ss:Formula="=R[-2]C+R[-1]C"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:MergeAcross="5" ss:StyleID="m2258495737608"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="11" ss:StyleID="m2258495737628"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s66"><Data ss:Type="String">Por.č.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495737648"><Data ss:Type="String">        FIXNÉ NÁKLADY</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495737668"><Data ss:Type="String">v tisícoch eur</Data></Cell>
    <Cell ss:MergeAcross="5" ss:MergeDown="17" ss:StyleID="m2258495737688"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="18">
    <Cell ss:StyleID="s67"><Data ss:Type="String"> 3.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495737708"><Data ss:Type="String">Fixné náklady</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495737728"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s68"><Data ss:Type="String"> 3.1.1</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495737748"><Data ss:Type="String">Nakupované teplo (fixná zložka)</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495736944"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String"> 3.1.2</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495736964"><Data ss:Type="String">Poistenie majetku</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495736984"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String"> 3.1.3</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495737004"><Data ss:Type="String">Dane </Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495737024"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String"> 3.1.4</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495737044"><Data ss:Type="String">Nájomné</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495737064"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:StyleID="s70"><Data ss:Type="String"> 3.1.5</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495737776"><Data ss:Type="String">Revízie, zákonné prehliadky a zákonné poplatky</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495737796"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String"> 3.1.6</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495737816"><Data ss:Type="String">Poplatky za znečistenie</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495737836"/>
    <Cell ss:Index="14" ss:StyleID="s65"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="24">
    <Cell ss:StyleID="s70"><Data ss:Type="String"> 3.1.7</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495737856"><Data ss:Type="String">Náklady na overenie účtovnej závierky audítorom</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495737876"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="35.25">
    <Cell ss:StyleID="s70"><Data ss:Type="String"> 3.1.8</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495738192"><Data ss:Type="String">Odpisy hmotného a nehmotného majetku súvisiacieho s výrobou a rozvodom tepla</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495738212"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String"> 3.1.9</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495738232"><Data ss:Type="String">Opravy a udržiavanie spolu</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495738252"/>
   </Row>
   <Row ss:AutoFitHeight="0">
    <Cell ss:StyleID="s70"><Data ss:Type="String"> 3.1.10</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495738272"><Data ss:Type="String">Úroky z investičného úveru</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495738292"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="38.25">
    <Cell ss:StyleID="s71"><Data ss:Type="String"> 3.2</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495738400"><Data ss:Type="String">Odpisy a opravy spoločných zariadení súvisiacich s výrobou a rozvodom tepla </Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495738420"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String"> 3.3</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495738440"><Data ss:Type="String">Regulovaná zložka fixných nákladov</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495738460"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s72"/>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495738480"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495738500"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="5" ss:StyleID="m2258495738628"/>
   </Row>
   <Row>
    <Cell ss:MergeDown="1" ss:StyleID="m2258495738648"><Data ss:Type="String"> II.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2258495738668"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495738688"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="24.75">
    <Cell ss:Index="2" ss:MergeAcross="2" ss:StyleID="m2258495738708"><Data
      ss:Type="String">Fixné náklady </Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2258495738728"
     ss:Formula="=SUM(R[-14]C:R[-4]C)"><Data ss:Type="Number">0</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0">
    <Cell ss:MergeAcross="11" ss:MergeDown="1" ss:StyleID="s363"/>
   </Row>
   <Row ss:Index="56">
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
   </Row>
  </Table>
  <WorksheetOptions xmlns="urn:schemas-microsoft-com:office:excel">
   <PageSetup>
    <Header x:Margin="0.4921259845"/>
    <Footer x:Margin="0.4921259845"/>
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