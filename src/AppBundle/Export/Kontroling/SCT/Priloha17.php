<?php

namespace AppBundle\Export\Kontroling\SCT;

class Priloha17
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
  <Style ss:ID="m2708945169428">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2708945169448">
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
  <Style ss:ID="m2708945169468">
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
  <Style ss:ID="m2708945169488">
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
  <Style ss:ID="m2708945169508">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2708945169528">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2708945168160">
   <Alignment ss:Vertical="Bottom" ss:ShrinkToFit="1" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2708945168180">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
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
  <Style ss:ID="m2708945168200">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
  </Style>
  <Style ss:ID="m2708945168220">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2708945168240">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
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
  <Style ss:ID="m2708945168280">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
  </Style>
  <Style ss:ID="m2708945168300">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2708945168320">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2708945167952">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2708945167972">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
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
  <Style ss:ID="m2708945167992">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2708945168012">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
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
  <Style ss:ID="m2708945168032">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2708945168052">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
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
  <Style ss:ID="m2708945173984">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2708945174004">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
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
  <Style ss:ID="m2708945174024">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2708945174044">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
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
  <Style ss:ID="m2708945174064">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2708945174084">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
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
  <Style ss:ID="m2708945172944">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2708945172964">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
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
  <Style ss:ID="m2708945172984">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2708945173004">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
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
  <Style ss:ID="m2708945173024">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2708945173044">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
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
  <Style ss:ID="m2708945165040">
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
  <Style ss:ID="m2708945165060">
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
  <Style ss:ID="m2708945165080">
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
  <Style ss:ID="m2708945165100">
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
  <Style ss:ID="m2708945165120">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2708945165140">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <NumberFormat ss:Format="Standard"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2708945165160">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2708945165180">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2708945165200">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2708945165220">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
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
  <Style ss:ID="m2708945164832">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2708945164852">
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
  <Style ss:ID="m2708945164872">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2708945164892">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2708945164912">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2708945164952">
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
  <Style ss:ID="m2708945164972">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2708945164992">
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
  <Style ss:ID="m2708945165012">
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
  <Style ss:ID="m2708945166704">
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
  <Style ss:ID="m2708945166724">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
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
  <Style ss:ID="m2708945166744">
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
  <Style ss:ID="m2708945166764">
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
  <Style ss:ID="m2708945166784">
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
  <Style ss:ID="m2708945166804">
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
  <Style ss:ID="m2708945166824">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2708945166844">
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
  <Style ss:ID="m2708945166864">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2708945166884">
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
  <Style ss:ID="m2708945170448">
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
  <Style ss:ID="m2708945170468">
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
  <Style ss:ID="m2708945170508">
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
  <Style ss:ID="m2708945170528">
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
  <Style ss:ID="m2708945170656">
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
  <Style ss:ID="m2708945170676">
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
  <Style ss:ID="m2708945170716">
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
  <Style ss:ID="m2708945170736">
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
  <Style ss:ID="m2708945153204">
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
  <Style ss:ID="m2708945153224">
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
  <Style ss:ID="m2708945153264">
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
  <Style ss:ID="m2708945153284">
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
  <Style ss:ID="m2708945152976">
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
  <Style ss:ID="m2708945152996">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2708945153016">
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
  <Style ss:ID="m2708945153036">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2708945153056">
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
  <Style ss:ID="m2708945153076">
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
  <Style ss:ID="m2708945152580">
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
  <Style ss:ID="m2708945152600">
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
  <Style ss:ID="m2708945152620">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2708945152640">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2708945152660">
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
  <Style ss:ID="m2708945152680">
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
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2708945152700">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2708945152720">
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
  <Style ss:ID="m2708945152740">
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
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2708945152352">
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
  <Style ss:ID="m2708945152452">
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
  <Style ss:ID="s62">
   <Alignment ss:Vertical="Center" ss:WrapText="1"/>
  </Style>
  <Style ss:ID="s63">
   <Alignment ss:Vertical="Center"/>
  </Style>
  <Style ss:ID="s64">
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
  <Style ss:ID="s65">
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
  <Style ss:ID="s66">
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
  <Style ss:ID="s67">
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
  <Style ss:ID="s68">
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
  <Style ss:ID="s69">
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
  <Style ss:ID="s70">
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
  <Style ss:ID="s71">
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
  <Style ss:ID="s72">
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
  <Style ss:ID="s73">
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
  <Style ss:ID="s74">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s75">
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
  <Style ss:ID="s76">
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
  <Style ss:ID="s77">
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
  <Style ss:ID="s78">
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
  <Style ss:ID="s79">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="s81">
   <Alignment ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s82">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
  </Style>
  <Style ss:ID="s83">
   <Alignment ss:Horizontal="Right" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s84">
   <Borders>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection/>
  </Style>
  <Style ss:ID="s85">
   <Alignment ss:Horizontal="Right" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s86">
   <Borders>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection/>
  </Style>
  <Style ss:ID="s87">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s88">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection/>
  </Style>
  <Style ss:ID="s89">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s90">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Italic="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection/>
  </Style>
  <Style ss:ID="s91">
   <Alignment ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s92">
   <Alignment ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
  </Style>
  <Style ss:ID="s93">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s94">
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s95">
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s96">
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s97">
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s98">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s99">
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
  <Style ss:ID="s100">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s101">
   <Borders/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s102">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Font ss:FontName="Arial CE" x:CharSet="238" ss:Size="8" ss:Bold="1"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s103">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
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
  <Style ss:ID="s271">
   <Alignment ss:Horizontal="Right" ss:Vertical="Bottom"/>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s272">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="12"
    ss:Bold="1"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s273">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Arial" x:Family="Swiss" ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s274">
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
  <Style ss:ID="s275">
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
  <Style ss:ID="s277">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s279">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s282">
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
  <Style ss:ID="s283">
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
  <Style ss:ID="s284">
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
  <Style ss:ID="s289">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s332">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
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
  <Style ss:ID="s338">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
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
  <Style ss:ID="s365">
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
  <Style ss:ID="s414">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
  </Style>
  <Style ss:ID="s421">
   <Alignment ss:Vertical="Center" ss:WrapText="1"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:VerticalAlign="Superscript"/>
   <Protection/>
  </Style>
 </Styles>
 <Worksheet ss:Name="Príloha č. 17">
  <Table ss:ExpandedColumnCount="14" ss:ExpandedRowCount="55" x:FullColumns="1"
   x:FullRows="1">
   <Column ss:Index="3" ss:AutoFitWidth="0" ss:Width="60.75"/>
   <Column ss:AutoFitWidth="0" ss:Width="57.75"/>
   <Column ss:Index="10" ss:AutoFitWidth="0" ss:Width="58.5" ss:Span="1"/>
   <Row>
    <Cell ss:StyleID="s102"><Data ss:Type="String">OBCHODNÉ TAJOMSTVO</Data></Cell>
    <Cell ss:StyleID="s94"/>
    <Cell ss:StyleID="s94"/>
    <Cell ss:StyleID="s94"/>
    <Cell ss:StyleID="s95"/>
    <Cell ss:StyleID="s96"/>
    <Cell ss:StyleID="s97"/>
    <Cell ss:StyleID="s96"/>
    <Cell ss:MergeAcross="3" ss:StyleID="s271"><Data ss:Type="String">Príloha č. 17 k vyhláške č. 248/2016 Z. z.</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="s93"/>
    <Cell ss:StyleID="s94"/>
    <Cell ss:StyleID="s94"/>
    <Cell ss:StyleID="s94"/>
    <Cell ss:StyleID="s95"/>
    <Cell ss:StyleID="s96"/>
    <Cell ss:StyleID="s97"/>
    <Cell ss:StyleID="s96"/>
    <Cell ss:StyleID="s97"/>
    <Cell ss:StyleID="s96"/>
    <Cell ss:StyleID="s97"/>
    <Cell ss:StyleID="s96"/>
   </Row>
   <Row ss:Height="15.75">
    <Cell ss:MergeAcross="11" ss:StyleID="s272"><Data ss:Type="String">Skutočné spoločné náklady na výrobu elektriny a tepla zariadením na kombinovanú výrobu</Data></Cell>
   </Row>
   <Row>
    <Cell ss:MergeAcross="11" ss:StyleID="s273"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5" ss:StyleID="s82">
    <Cell ss:MergeAcross="1" ss:StyleID="s274"><Data ss:Type="String">Regulovaný subjekt: </Data></Cell>
    <Cell ss:MergeAcross="9" ss:StyleID="s275"><Data ss:Type="String">Bratislavská teplárenská, a.s.</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5" ss:StyleID="s82">
    <Cell ss:MergeAcross="1" ss:StyleID="s274"><Data ss:Type="String">Sídlo / adresa trvalého pobytu:</Data></Cell>
    <Cell ss:MergeAcross="6" ss:StyleID="s277"><Data ss:Type="String">Turbínová 3, 829 05 Bratislava - mestská časť Nové Mesto</Data></Cell>
    <Cell ss:StyleID="s98"><Data ss:Type="String">IČO:</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s279"><Data ss:Type="Number">35823542</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5" ss:StyleID="s82">
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945152352"><Data ss:Type="String">Číslo povolenia:</Data></Cell>
    <Cell ss:StyleID="s103"><Data ss:Type="String">2005T 0040</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s282"><Data ss:Type="String">Meno a priezvisko kontaktnej osoby:</Data></Cell>
    <Cell ss:MergeAcross="3" ss:StyleID="s283"><Data ss:Type="String">Ing. Martin Bíreš</Data></Cell>
    <Cell ss:StyleID="s99"><Data ss:Type="String">Telefónne číslo:</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s284"><Data ss:Type="String">02/57 372 336</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5" ss:StyleID="s82">
    <Cell ss:MergeAcross="1" ss:StyleID="s274"><Data ss:Type="String">Regulačný rok:</Data></Cell>
    <Cell ss:MergeAcross="9" ss:StyleID="m2708945152452"><Data ss:Type="Number">'
            . $this->getRok() .
    '</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="s100"/>
    <Cell ss:StyleID="s101"/>
    <Cell ss:StyleID="s101"/>
    <Cell ss:MergeAcross="8" ss:StyleID="s289"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="3" ss:MergeDown="1" ss:StyleID="m2708945152580"/>
    <Cell ss:MergeAcross="1" ss:MergeDown="1" ss:StyleID="m2708945152600"><Data
      ss:Type="String">Celkové náklady  </Data></Cell>
    <Cell ss:MergeAcross="5" ss:StyleID="m2708945152620"><Data ss:Type="String">Údaje o výrobe a dodávke elektriny</Data></Cell>
   </Row>
   <Row>
    <Cell ss:Index="7" ss:MergeAcross="5" ss:StyleID="m2708945152640"><Data
      ss:Type="String">vyrobenej kombinovanou výrobou </Data></Cell>
   </Row>
   <Row>
    <Cell ss:MergeAcross="3" ss:StyleID="m2708945152660"><Data ss:Type="String">Množstvo vyrobeného tepla (GWh):</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945152680"/>
    <Cell ss:MergeAcross="5" ss:MergeDown="3" ss:StyleID="m2708945152700"><Data
      ss:Type="String">skutočnosť za rok t </Data></Cell>
   </Row>
   <Row>
    <Cell ss:MergeAcross="3" ss:StyleID="m2708945152720"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945152740"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s71"><Data ss:Type="String">Por.č.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945152976"><Data ss:Type="String">        VARIABILNÉ NÁKLADY</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945152996"><Data ss:Type="String">v tisícoch eur</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="24.75">
    <Cell ss:StyleID="s72"><Data ss:Type="String"> 1.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945153016"><Data ss:Type="String">Variabilné náklady na priamy materiál</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945153036"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s73"><Data ss:Type="String"> 1.1</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945153056"><Data ss:Type="String"> Zemný plyn</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945153076"/>
    <Cell ss:MergeAcross="3" ss:StyleID="s332"><Data ss:Type="String">celková výroba elektriny na svorkách generátorov </Data></Cell>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s74"><Data ss:Type="String">GWh</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="s73"><Data ss:Type="String"> 1.2</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945153204"><Data ss:Type="String"> Bioplyn</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945153224"/>
    <Cell ss:MergeAcross="3" ss:StyleID="s332"><Data ss:Type="String">výroba elektriny kombinovanou výrobou </Data></Cell>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s74"><Data ss:Type="String">GWh</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0">
    <Cell ss:StyleID="s73"><Data ss:Type="String"> 1.3</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945153264"><Data ss:Type="String"> Uhlie</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945153284"/>
    <Cell ss:MergeAcross="3" ss:StyleID="s332"><Data ss:Type="String">technologická spotreba pri výrobe elektriny</Data></Cell>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s74"><Data ss:Type="String">GWh</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="23.25">
    <Cell ss:StyleID="s75"><Data ss:Type="String"> 1.4</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945170656"><Data ss:Type="String"> Vykurovací olej </Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945170676"/>
    <Cell ss:MergeAcross="3" ss:StyleID="s338"><Data ss:Type="String">merná spotreba tepla na výrobu elektriny kombinovanou výrobou</Data></Cell>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s74"><Data ss:Type="String">GJ/MWh</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="s73"><Data ss:Type="String"> 1.5</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945170716"><Data ss:Type="String"> Dendromasa</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945170736"/>
    <Cell ss:MergeAcross="3" ss:StyleID="s332"><Data ss:Type="String">dodávka elektriny z kombinovanej výroby </Data></Cell>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s74"><Data ss:Type="String">GWh</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0">
    <Cell ss:StyleID="s75"><Data ss:Type="String"> 1.6</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945170448"><Data ss:Type="String"> Poľnohospodárska biomasa</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945170468"/>
    <Cell ss:MergeAcross="3" ss:StyleID="s338"><Data ss:Type="String">množstvo elektriny na vlastné využitie</Data></Cell>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s74"><Data ss:Type="String">GWh</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="s73"><Data ss:Type="String"> 1.7</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945170508"><Data ss:Type="String"> Iný druh paliva</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945170528"/>
    <Cell ss:MergeAcross="3" ss:StyleID="s332"><Data ss:Type="String">priemerná cena elektriny pri dodávke</Data></Cell>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s74"><Data ss:Type="String">eur/kWh</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="s73"><Data ss:Type="String"> 1.8</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945166704"><Data ss:Type="String"> Nakupované teplo (variabilná zložka)</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945166724"/>
    <Cell ss:MergeAcross="5" ss:MergeDown="9" ss:StyleID="m2708945166744"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s76"><Data ss:Type="String"> 2.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945166764"><Data ss:Type="String">Ostatné variabilné náklady</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945166784"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s77"><Data ss:Type="String"> 2.1</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945166804"><Data ss:Type="String">Dopravné náklady</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945166824"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s77"><Data ss:Type="String"> 2.2</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945166844"><Data ss:Type="String">Elektrina</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945166864"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s77"><Data ss:Type="String"> 2.3</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945166884"><Data ss:Type="String">Voda</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945164832"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s78"><Data ss:Type="String"> 2.4</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945164852"><Data ss:Type="String">Technologické hmoty</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945164872"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s79"><Data ss:Type="String"> 2.5</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945164892"><Data ss:Type="String">Nákup emisných kvót</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945164912"/>
   </Row>
   <Row>
    <Cell ss:MergeDown="1" ss:StyleID="s365"><Data ss:Type="String"> I.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945164952"><Data ss:Type="String">Variabilné náklady na priamy materiál</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945164972"
     ss:Formula="=SUM(R[-14]C:R[-7]C[1])"><Data ss:Type="Number">0</Data></Cell>
   </Row>
   <Row>
    <Cell ss:Index="2" ss:MergeAcross="2" ss:StyleID="m2708945164992"><Data
      ss:Type="String">Ostatné variabilné náklady</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945165012"
     ss:Formula="=SUM(R[-6]C:R[-2]C[1])"><Data ss:Type="Number">0</Data></Cell>
   </Row>
   <Row>
    <Cell ss:MergeAcross="3" ss:StyleID="m2708945165040"><Data ss:Type="String">Variabilné náklady </Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945165060"
     ss:Formula="=R[-2]C+R[-1]C"><Data ss:Type="Number">0</Data></Cell>
   </Row>
   <Row>
    <Cell ss:MergeAcross="11" ss:StyleID="m2708945165080"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s64"><Data ss:Type="String">Por.č.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945165100"><Data ss:Type="String">        FIXNÉ NÁKLADY</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945165120"><Data ss:Type="String">v tisícoch eur</Data></Cell>
    <Cell ss:MergeAcross="5" ss:MergeDown="11" ss:StyleID="m2708945165140"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s65"><Data ss:Type="String"> 3.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945165160"><Data ss:Type="String">Fixné náklady</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945165180"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s66"><Data ss:Type="String"> 3.1.1</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945165200"><Data ss:Type="String">Nakupované teplo (fixná zložka)</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945165220"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"><Data ss:Type="String"> 3.1.2</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945172944"><Data ss:Type="String">Poistenie majetku</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945172964"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"><Data ss:Type="String"> 3.1.3</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945172984"><Data ss:Type="String">Dane </Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945173004"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"><Data ss:Type="String"> 3.1.4</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945173024"><Data ss:Type="String">Nájomné</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945173044"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:StyleID="s68"><Data ss:Type="String"> 3.1.5</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945173984"><Data ss:Type="String">Revízie, zákonné prehliadky a zákonné poplatky</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945174004"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"><Data ss:Type="String"> 3.1.6</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945174024"><Data ss:Type="String">Poplatky za znečistenie</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945174044"/>
    <Cell ss:Index="14" ss:StyleID="s63"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="24">
    <Cell ss:StyleID="s68"><Data ss:Type="String"> 3.1.7</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945174064"><Data ss:Type="String">Náklady na overenie účtovnej závierky         audítorom</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945174084"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="38.25">
    <Cell ss:StyleID="s68"><Data ss:Type="String"> 3.1.8</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945167952"><Data ss:Type="String">Odpisy hmotného a nehmotného majetku súvisiacieho s výrobou a rozvodom tepla</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945167972"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"><Data ss:Type="String"> 3.1.9</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945167992"><Data ss:Type="String">Opravy a udržiavanie spolu</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945168012"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="24">
    <Cell ss:StyleID="s68"><Data ss:Type="String"> 3.1.10</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945168032"><Data ss:Type="String">Úroky z investičného úveru</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945168052"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="23.25">
    <Cell ss:StyleID="s69"><Data ss:Type="String"> 3.2</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945168160"><Data ss:Type="String">Odpisy a opravy spoločných zariadení súvisiacich s výrobou a rozvodom tepla </Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945168180"/>
    <Cell ss:MergeAcross="5" ss:StyleID="m2708945168200"><Data ss:Type="String">Delenie spoločných nákladov kombinovanej výroby:</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"><Data ss:Type="String"> 3.3</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945168220"><Data ss:Type="String">Regulovaná zložka fixných nákladov</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945168240"/>
    <Cell ss:MergeAcross="2" ss:StyleID="s414"><Data ss:Type="String">náklady na výrobu tepla</Data></Cell>
    <Cell ss:StyleID="s91"/>
    <Cell ss:StyleID="s92"><Data ss:Type="String">%</Data></Cell>
    <Cell ss:MergeDown="1" ss:StyleID="m2708945168280"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s70"><Data ss:Type="String"> 4.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945168300"><Data ss:Type="String">Primeraný zisk</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945168320"/>
    <Cell ss:MergeAcross="2" ss:StyleID="s414"><Data ss:Type="String">náklady na výrobu elektriny</Data></Cell>
    <Cell ss:StyleID="s91"/>
    <Cell ss:StyleID="s92"><Data ss:Type="String">%</Data></Cell>
   </Row>
   <Row>
    <Cell ss:MergeAcross="11" ss:StyleID="m2708945169428"/>
   </Row>
   <Row>
    <Cell ss:MergeDown="1" ss:StyleID="m2708945169448"><Data ss:Type="String"> II.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2708945169468"><Data ss:Type="String">Fixné náklady</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945169488"
     ss:Formula="=SUM(R[-13]C:R[-3]C)"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s83"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s85"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s85"/>
    <Cell ss:StyleID="s86"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="24.75">
    <Cell ss:Index="2" ss:MergeAcross="2" ss:StyleID="m2708945169508"><Data
      ss:Type="String">Fixné náklady vrátane primeraného zisku</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2708945169528"
     ss:Formula="=R[-1]C+R[-3]C"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s87"/>
    <Cell ss:StyleID="s88"/>
    <Cell ss:StyleID="s89"/>
    <Cell ss:StyleID="s88"/>
    <Cell ss:StyleID="s89"/>
    <Cell ss:StyleID="s90"/>
   </Row>
   <Row ss:AutoFitHeight="0">
    <Cell ss:MergeAcross="11" ss:MergeDown="1" ss:StyleID="s421"/>
   </Row>
   <Row ss:Index="54">
    <Cell ss:StyleID="s62"/>
    <Cell ss:StyleID="s62"/>
    <Cell ss:StyleID="s62"/>
    <Cell ss:StyleID="s62"/>
    <Cell ss:StyleID="s62"/>
    <Cell ss:StyleID="s62"/>
    <Cell ss:StyleID="s62"/>
    <Cell ss:StyleID="s62"/>
    <Cell ss:StyleID="s62"/>
    <Cell ss:StyleID="s62"/>
    <Cell ss:StyleID="s62"/>
    <Cell ss:StyleID="s62"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s62"/>
    <Cell ss:StyleID="s62"/>
    <Cell ss:StyleID="s62"/>
    <Cell ss:StyleID="s62"/>
    <Cell ss:StyleID="s62"/>
    <Cell ss:StyleID="s62"/>
    <Cell ss:StyleID="s62"/>
    <Cell ss:StyleID="s62"/>
    <Cell ss:StyleID="s62"/>
    <Cell ss:StyleID="s62"/>
    <Cell ss:StyleID="s62"/>
    <Cell ss:StyleID="s62"/>
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