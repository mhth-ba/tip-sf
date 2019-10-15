<?php

namespace AppBundle\Export\Kontroling\SCT;

class Priloha18
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
  <Style ss:ID="m2264263375120">
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
  <Style ss:ID="m2264263375140">
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
  <Style ss:ID="m2264263375160">
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
  <Style ss:ID="m2264263375180">
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
  <Style ss:ID="m2264263375200">
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
  <Style ss:ID="m2264263375220">
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
  <Style ss:ID="m2264263365552">
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
  <Style ss:ID="m2264263365572">
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
  <Style ss:ID="m2264263365592">
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
  <Style ss:ID="m2264263365612">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
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
  <Style ss:ID="m2264263365632">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2264263365652">
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
  <Style ss:ID="m2264263370128">
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
  <Style ss:ID="m2264263370148">
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
  <Style ss:ID="m2264263370168">
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
  <Style ss:ID="m2264263370188">
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
  <Style ss:ID="m2264263370208">
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
  <Style ss:ID="m2264263370228">
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
  <Style ss:ID="m2264263371376">
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
  <Style ss:ID="m2264263371396">
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
  <Style ss:ID="m2264263371416">
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
  <Style ss:ID="m2264263371436">
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
  <Style ss:ID="m2264263371456">
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
  <Style ss:ID="m2264263371476">
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
  <Style ss:ID="m2264263369504">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
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
  <Style ss:ID="m2264263369524">
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
  <Style ss:ID="m2264263369544">
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
  <Style ss:ID="m2264263369564">
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
  <Style ss:ID="m2264263369584">
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
  <Style ss:ID="m2264263369604">
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
  <Style ss:ID="m2264263369624">
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
  <Style ss:ID="m2264263369920">
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
  <Style ss:ID="m2264263369940">
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
  <Style ss:ID="m2264263369960">
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
  <Style ss:ID="m2264263369980">
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
  <Style ss:ID="m2264263370000">
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
  <Style ss:ID="m2264263370020">
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
  <Style ss:ID="m2264263370040">
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
  <Style ss:ID="m2264263370060">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2264263370080">
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
  <Style ss:ID="m2264263370100">
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
  <Style ss:ID="m2264263367424">
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
  <Style ss:ID="m2264263367464">
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
  <Style ss:ID="m2264263367484">
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
  <Style ss:ID="m2264263367504">
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
  <Style ss:ID="m2264263367524">
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
  <Style ss:ID="m2264263369296">
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
  <Style ss:ID="m2264263369316">
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
  <Style ss:ID="m2264263369336">
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
  <Style ss:ID="m2264263369356">
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
  <Style ss:ID="m2264263369376">
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
  <Style ss:ID="m2264263369396">
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
  <Style ss:ID="m2264263367008">
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
  <Style ss:ID="m2264263367028">
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
  <Style ss:ID="m2264263367048">
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
  <Style ss:ID="m2264263367068">
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
  <Style ss:ID="m2264263367088">
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
  <Style ss:ID="m2264263367108">
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
  <Style ss:ID="m2264263369712">
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
  <Style ss:ID="m2264263369732">
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
  <Style ss:ID="m2264263369752">
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
  <Style ss:ID="m2264263369772">
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
  <Style ss:ID="m2264263369792">
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
  <Style ss:ID="m2264263369812">
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
  <Style ss:ID="m2264263375952">
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
  <Style ss:ID="m2264263375972">
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
  <Style ss:ID="m2264263375992">
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
  <Style ss:ID="m2264263376012">
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
  <Style ss:ID="m2264263376032">
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
  <Style ss:ID="m2264263376052">
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
  <Style ss:ID="m2264263365136">
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
  <Style ss:ID="m2264263365156">
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
  <Style ss:ID="m2264263365176">
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
  <Style ss:ID="m2264263365196">
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
  <Style ss:ID="m2264263365216">
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
  <Style ss:ID="m2264263365236">
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
  <Style ss:ID="m2264263365256">
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
  <Style ss:ID="m2264263370356">
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
  <Style ss:ID="m2264263370376">
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
  <Style ss:ID="m2264263370396">
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
  <Style ss:ID="m2264263370416">
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
  <Style ss:ID="m2264263370436">
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
  <Style ss:ID="m2264263370456">
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
  <Style ss:ID="m2264263370476">
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
  <Style ss:ID="m2264263370496">
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
  <Style ss:ID="m2264263370516">
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
  <Style ss:ID="m2264262762864">
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
  <Style ss:ID="m2264262762964">
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
  <Style ss:ID="m2264262760904">
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
  <Style ss:ID="m2264262760924">
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
  <Style ss:ID="s75">
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
  <Style ss:ID="s76">
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
  <Style ss:ID="s77">
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
  <Style ss:ID="s78">
   <Alignment ss:Vertical="Center" ss:WrapText="1"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:VerticalAlign="Superscript"/>
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
   <Font ss:FontName="Arial CE" x:CharSet="238" ss:Size="9" ss:Italic="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="s80">
   <Alignment ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:VerticalAlign="Superscript"/>
   <Protection/>
  </Style>
  <Style ss:ID="s81">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Font ss:FontName="Arial CE" x:CharSet="238" ss:Size="8"/>
  </Style>
  <Style ss:ID="s82">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s83">
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s84">
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s85">
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s86">
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s87">
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
  <Style ss:ID="s88">
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
  <Style ss:ID="s89">
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
  <Style ss:ID="s90">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s91">
   <Borders/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s92">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Font ss:FontName="Arial CE" x:CharSet="238" ss:Size="8" ss:Bold="1"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s231">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s232">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="12"
    ss:Bold="1"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s233">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Arial" x:Family="Swiss" ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s234">
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
  <Style ss:ID="s244">
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
  <Style ss:ID="s245">
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
  <Style ss:ID="s246">
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
  <Style ss:ID="s247">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s312">
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
 </Styles>
 <Worksheet ss:Name="Príloha č. 18">
  <Table ss:ExpandedColumnCount="14" ss:ExpandedRowCount="57" x:FullColumns="1"
   x:FullRows="1">
   <Column ss:Index="3" ss:AutoFitWidth="0" ss:Width="60.75"/>
   <Column ss:AutoFitWidth="0" ss:Width="57.75"/>
   <Column ss:Index="8" ss:AutoFitWidth="0" ss:Width="38.25"/>
   <Column ss:Index="10" ss:AutoFitWidth="0" ss:Width="58.5" ss:Span="1"/>
   <Row>
    <Cell ss:StyleID="s92"><Data ss:Type="String">OBCHODNÉ TAJOMSTVO</Data></Cell>
    <Cell ss:StyleID="s83"/>
    <Cell ss:StyleID="s83"/>
    <Cell ss:StyleID="s83"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s85"/>
    <Cell ss:StyleID="s86"/>
    <Cell ss:StyleID="s85"/>
    <Cell ss:StyleID="s86"/>
    <Cell ss:StyleID="s85"/>
    <Cell ss:StyleID="s86"/>
    <Cell ss:StyleID="s85"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s83"/>
    <Cell ss:StyleID="s83"/>
    <Cell ss:StyleID="s83"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s85"/>
    <Cell ss:StyleID="s86"/>
    <Cell ss:StyleID="s85"/>
    <Cell ss:MergeAcross="3" ss:StyleID="s231"><Data ss:Type="String">Príloha č. 18 k vyhláške č. 248/2016 Z. z.</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s83"/>
    <Cell ss:StyleID="s83"/>
    <Cell ss:StyleID="s83"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s85"/>
    <Cell ss:StyleID="s86"/>
    <Cell ss:StyleID="s85"/>
    <Cell ss:StyleID="s86"/>
    <Cell ss:StyleID="s85"/>
    <Cell ss:StyleID="s86"/>
    <Cell ss:StyleID="s85"/>
   </Row>
   <Row ss:Height="15.75">
    <Cell ss:MergeAcross="11" ss:StyleID="s232"><Data ss:Type="String">Skutočné vypočítané náklady na výrobu tepla zo spoločných nákladov kombinovanej výroby</Data></Cell>
   </Row>
   <Row>
    <Cell ss:MergeAcross="11" ss:StyleID="s233"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5" ss:StyleID="s81">
    <Cell ss:MergeAcross="1" ss:StyleID="s234"><Data ss:Type="String">Regulovaný subjekt: </Data></Cell>
    <Cell ss:MergeAcross="9" ss:StyleID="s88"><Data ss:Type="String">Bratislavská teplárenská, a.s.</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5" ss:StyleID="s81">
    <Cell ss:MergeAcross="1" ss:StyleID="s234"><Data ss:Type="String">Sídlo / adresa trvalého pobytu:</Data></Cell>
    <Cell ss:MergeAcross="6" ss:StyleID="m2264262760904"><Data ss:Type="String">Turbínová 3, 829 05 Bratislava - mestská časť Nové Mesto</Data></Cell>
    <Cell ss:StyleID="s87"><Data ss:Type="String">IČO:</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264262760924"><Data ss:Type="Number">35823542</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5" ss:StyleID="s81">
    <Cell ss:MergeAcross="1" ss:StyleID="m2264262762864"><Data ss:Type="String">Číslo povolenia:</Data></Cell>
    <Cell ss:StyleID="s88"><Data ss:Type="String">2005T 0040</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s244"><Data ss:Type="String">Meno a priezvisko kontaktnej osoby:</Data></Cell>
    <Cell ss:MergeAcross="3" ss:StyleID="s245"><Data ss:Type="String">Ing. Martin Bíreš</Data></Cell>
    <Cell ss:StyleID="s89"><Data ss:Type="String">Telefónne číslo:</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s246"><Data ss:Type="String">02/57 372 336</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5" ss:StyleID="s81">
    <Cell ss:MergeAcross="1" ss:StyleID="s234"><Data ss:Type="String">Regulačný rok:</Data></Cell>
    <Cell ss:MergeAcross="9" ss:StyleID="m2264262762964"><Data ss:Type="Number">'
            . $this->getRok() .
    '</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="s90"/>
    <Cell ss:StyleID="s91"/>
    <Cell ss:StyleID="s91"/>
    <Cell ss:MergeAcross="8" ss:StyleID="s247"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="3" ss:MergeDown="1" ss:StyleID="m2264263370356"/>
    <Cell ss:MergeAcross="1" ss:MergeDown="1" ss:StyleID="m2264263370376"><Data
      ss:Type="String">Celkové náklady  </Data></Cell>
    <Cell ss:MergeAcross="5" ss:MergeDown="1" ss:StyleID="m2264263370396"/>
   </Row>
   <Row ss:Index="13">
    <Cell ss:MergeAcross="3" ss:StyleID="m2264263370416"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263370436"/>
    <Cell ss:MergeAcross="5" ss:MergeDown="20" ss:StyleID="m2264263370456"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="3" ss:StyleID="m2264263370476"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263370496"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s71"><Data ss:Type="String">Por.č.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263370516"><Data ss:Type="String">        VARIABILNÉ NÁKLADY</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263365136"><Data ss:Type="String">v tisícoch eur</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="24.75">
    <Cell ss:StyleID="s72"><Data ss:Type="String"> 1.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263365156"><Data ss:Type="String">Variabilné náklady na priamy materiál</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263365176"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s73"><Data ss:Type="String"> 1.1</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263365196"><Data ss:Type="String"> Zemný plyn</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263365216"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s73"><Data ss:Type="String"> 1.2</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263365236"><Data ss:Type="String"> Bioplyn</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263365256"/>
   </Row>
   <Row ss:AutoFitHeight="0">
    <Cell ss:StyleID="s73"><Data ss:Type="String"> 1.3</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263375952"><Data ss:Type="String"> Uhlie</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263375972"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="12">
    <Cell ss:StyleID="s74"><Data ss:Type="String"> 1.4</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263375992"><Data ss:Type="String"> Vykurovací olej </Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263376012"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s73"><Data ss:Type="String"> 1.5</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263376032"><Data ss:Type="String"> Dendromasa</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263376052"/>
   </Row>
   <Row ss:AutoFitHeight="0">
    <Cell ss:StyleID="s74"><Data ss:Type="String"> 1.6</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263369712"><Data ss:Type="String"> Poľnohospodárska biomasa</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263369732"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s73"><Data ss:Type="String"> 1.7</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263369752"><Data ss:Type="String"> Iný druh paliva</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263369772"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s73"><Data ss:Type="String"> 1.8</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263369792"><Data ss:Type="String"> Nakupované teplo (variabilná zložka)</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263369812"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="18.75">
    <Cell ss:StyleID="s75"><Data ss:Type="String"> 2.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263367008"><Data ss:Type="String">Ostatné variabilné náklady</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263367028"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s76"><Data ss:Type="String"> 2.1</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263367048"><Data ss:Type="String">Dopravné náklady</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263367068"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s79"><Data ss:Type="String"> 2.2</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263367088"><Data ss:Type="String">Elektrina</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263367108"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s76"><Data ss:Type="String"> 2.3</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263369296"><Data ss:Type="String">Voda</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263369316"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s77"><Data ss:Type="String"> 2.4</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263369336"><Data ss:Type="String">Technologické hmoty</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263369356"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s77"><Data ss:Type="String"> 2.5</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263369376"><Data ss:Type="String">Nákup emisných kvót</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263369396"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="5" ss:StyleID="m2264263367424"/>
   </Row>
   <Row>
    <Cell ss:MergeDown="1" ss:StyleID="s312"><Data ss:Type="String"> I.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263367464"><Data ss:Type="String">Variabilné náklady na priamy materiál</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263367484"
     ss:Formula="=SUM(R[-15]C:R[-9]C[1])"><Data ss:Type="Number">0</Data></Cell>
   </Row>
   <Row>
    <Cell ss:Index="2" ss:MergeAcross="2" ss:StyleID="m2264263367504"><Data
      ss:Type="String">Ostatné variabilné náklady</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263367524"
     ss:Formula="=SUM(R[-7]C:R[-3]C[1])"><Data ss:Type="Number">0</Data></Cell>
   </Row>
   <Row>
    <Cell ss:MergeAcross="3" ss:StyleID="m2264263369920"><Data ss:Type="String">Variabilné náklady </Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263369940"
     ss:Formula="=R[-2]C+R[-1]C"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:MergeAcross="5" ss:StyleID="m2264263369960"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="11" ss:StyleID="m2264263369980"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s64"><Data ss:Type="String">Por.č.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263370000"><Data ss:Type="String">        FIXNÉ NÁKLADY</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263370020"><Data ss:Type="String">v tisícoch eur</Data></Cell>
    <Cell ss:MergeAcross="5" ss:MergeDown="17" ss:StyleID="m2264263370040"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="18">
    <Cell ss:StyleID="s65"><Data ss:Type="String"> 3.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263370060"><Data ss:Type="String">Fixné náklady</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263370080"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s66"><Data ss:Type="String"> 3.1.1</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263370100"><Data ss:Type="String">Nakupované teplo (fixná zložka)</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263369504"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"><Data ss:Type="String"> 3.1.2</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263369524"><Data ss:Type="String">Poistenie majetku</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263369544"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"><Data ss:Type="String"> 3.1.3</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263369564"><Data ss:Type="String">Dane </Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263369584"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"><Data ss:Type="String"> 3.1.4</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263369604"><Data ss:Type="String">Nájomné</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263369624"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="24.75">
    <Cell ss:StyleID="s68"><Data ss:Type="String"> 3.1.5</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263371376"><Data ss:Type="String">Revízie, zákonné prehliadky a zákonné poplatky</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263371396"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"><Data ss:Type="String"> 3.1.6</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263371416"><Data ss:Type="String">Poplatky za znečistenie</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263371436"/>
    <Cell ss:Index="14" ss:StyleID="s63"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="24">
    <Cell ss:StyleID="s68"><Data ss:Type="String"> 3.1.7</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263371456"><Data ss:Type="String">Náklady na overenie účtovnej závierky audítorom</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263371476"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="35.25">
    <Cell ss:StyleID="s68"><Data ss:Type="String"> 3.1.8</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263370128"><Data ss:Type="String">Odpisy hmotného a nehmotného majetku súvisiacieho s výrobou a rozvodom tepla</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263370148"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"><Data ss:Type="String"> 3.1.9</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263370168"><Data ss:Type="String">Opravy a udržiavanie spolu</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263370188"/>
   </Row>
   <Row ss:AutoFitHeight="0">
    <Cell ss:StyleID="s68"><Data ss:Type="String"> 3.1.10</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263370208"><Data ss:Type="String">Úroky z investičného úveru</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263370228"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="38.25">
    <Cell ss:StyleID="s69"><Data ss:Type="String"> 3.2</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263365552"><Data ss:Type="String">Odpisy a opravy spoločných zariadení súvisiacich s výrobou a rozvodom tepla </Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263365572"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"><Data ss:Type="String"> 3.3</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263365592"><Data ss:Type="String">Regulovaná zložka fixných nákladov</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263365612"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s70"/>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263365632"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263365652"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="5" ss:StyleID="m2264263375120"/>
   </Row>
   <Row>
    <Cell ss:MergeDown="1" ss:StyleID="m2264263375140"><Data ss:Type="String"> II.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2264263375160"><Data ss:Type="String">Fixné náklady </Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263375180"
     ss:Formula="=SUM(R[-13]C:R[-3]C)"><Data ss:Type="Number">0</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="24.75">
    <Cell ss:Index="2" ss:MergeAcross="2" ss:StyleID="m2264263375200"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2264263375220"/>
   </Row>
   <Row ss:AutoFitHeight="0">
    <Cell ss:StyleID="s80"/>
    <Cell ss:StyleID="s80"/>
    <Cell ss:StyleID="s80"/>
    <Cell ss:StyleID="s80"/>
    <Cell ss:StyleID="s80"/>
    <Cell ss:StyleID="s80"/>
    <Cell ss:StyleID="s80"/>
    <Cell ss:StyleID="s80"/>
    <Cell ss:StyleID="s80"/>
    <Cell ss:StyleID="s80"/>
    <Cell ss:StyleID="s80"/>
    <Cell ss:StyleID="s80"/>
   </Row>
   <Row ss:AutoFitHeight="0">
    <Cell ss:StyleID="s78"/>
    <Cell ss:StyleID="s78"/>
    <Cell ss:StyleID="s78"/>
    <Cell ss:StyleID="s78"/>
    <Cell ss:StyleID="s78"/>
    <Cell ss:StyleID="s78"/>
    <Cell ss:StyleID="s78"/>
    <Cell ss:StyleID="s78"/>
    <Cell ss:StyleID="s78"/>
    <Cell ss:StyleID="s78"/>
    <Cell ss:StyleID="s78"/>
    <Cell ss:StyleID="s78"/>
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