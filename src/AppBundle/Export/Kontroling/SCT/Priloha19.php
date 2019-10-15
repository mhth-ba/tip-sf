<?php

namespace AppBundle\Export\Kontroling\SCT;

class Priloha19
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
  <Style ss:ID="m2288447228324">
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
  <Style ss:ID="m2288447228344">
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
  <Style ss:ID="m2288447228364">
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
  <Style ss:ID="m2288447228384">
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
  <Style ss:ID="m2288447228404">
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
  <Style ss:ID="m2288447228424">
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
  <Style ss:ID="m2288447220192">
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
  <Style ss:ID="m2288447220212">
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
  <Style ss:ID="m2288447220232">
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
  <Style ss:ID="m2288447220252">
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
  <Style ss:ID="m2288447220272">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2288447220292">
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
  <Style ss:ID="m2288447225184">
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
  <Style ss:ID="m2288447225204">
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
  <Style ss:ID="m2288447225224">
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
  <Style ss:ID="m2288447225244">
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
  <Style ss:ID="m2288447225264">
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
  <Style ss:ID="m2288447225284">
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
  <Style ss:ID="m2288447221232">
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
  <Style ss:ID="m2288447221252">
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
  <Style ss:ID="m2288447221272">
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
  <Style ss:ID="m2288447221292">
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
  <Style ss:ID="m2288447221312">
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
  <Style ss:ID="m2288447221332">
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
  <Style ss:ID="m2288447228928">
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
  <Style ss:ID="m2288447228948">
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
  <Style ss:ID="m2288447228968">
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
  <Style ss:ID="m2288447228988">
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
  <Style ss:ID="m2288447229008">
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
  <Style ss:ID="m2288447229028">
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
  <Style ss:ID="m2288447229048">
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
  <Style ss:ID="m2288447217488">
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
  <Style ss:ID="m2288447217508">
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
  <Style ss:ID="m2288447217528">
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
  <Style ss:ID="m2288447217548">
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
  <Style ss:ID="m2288447217568">
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
  <Style ss:ID="m2288447217588">
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
  <Style ss:ID="m2288447217608">
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
  <Style ss:ID="m2288447217628">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2288447217648">
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
  <Style ss:ID="m2288447217668">
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
  <Style ss:ID="m2288447228096">
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
  <Style ss:ID="m2288447228116">
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
  <Style ss:ID="m2288447228136">
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
  <Style ss:ID="m2288447228156">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
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
  <Style ss:ID="m2288447228176">
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
  <Style ss:ID="m2288447228216">
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
  <Style ss:ID="m2288447228236">
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
  <Style ss:ID="m2288447228256">
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
  <Style ss:ID="m2288447228276">
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
  <Style ss:ID="m2288447225392">
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
  <Style ss:ID="m2288447225412">
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
  <Style ss:ID="m2288447225432">
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
  <Style ss:ID="m2288447225452">
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
  <Style ss:ID="m2288447225472">
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
  <Style ss:ID="m2288447225492">
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
  <Style ss:ID="m2288447222064">
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
  <Style ss:ID="m2288447222084">
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
  <Style ss:ID="m2288447222104">
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
  <Style ss:ID="m2288447222124">
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
  <Style ss:ID="m2288447222144">
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
  <Style ss:ID="m2288447222164">
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
  <Style ss:ID="m2288447223936">
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
  <Style ss:ID="m2288447223956">
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
  <Style ss:ID="m2288447223976">
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
  <Style ss:ID="m2288447223996">
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
  <Style ss:ID="m2288447224016">
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
  <Style ss:ID="m2288447224036">
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
  <Style ss:ID="m2288447217280">
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
  <Style ss:ID="m2288447217300">
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
  <Style ss:ID="m2288447217320">
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
  <Style ss:ID="m2288447217340">
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
  <Style ss:ID="m2288447217360">
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
  <Style ss:ID="m2288447217380">
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
  <Style ss:ID="m2288447217400">
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
  <Style ss:ID="m2288447221044">
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
  <Style ss:ID="m2288447221064">
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
  <Style ss:ID="m2288447221084">
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
  <Style ss:ID="m2288447221104">
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
  <Style ss:ID="m2288447221124">
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
  <Style ss:ID="m2288447221144">
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
  <Style ss:ID="m2288447221164">
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
  <Style ss:ID="m2288447221184">
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
  <Style ss:ID="m2288447221204">
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
  <Style ss:ID="m2288447224768">
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
  <Style ss:ID="m2288447224868">
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
  <Style ss:ID="m2288447218232">
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
  <Style ss:ID="m2288447218252">
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
    <Border ss:Position="Bottom" ss:LineStyle="Continuous"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
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
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Font ss:FontName="Arial CE" x:CharSet="238" ss:Size="8"/>
  </Style>
  <Style ss:ID="s80">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s81">
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s82">
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s83">
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s84">
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s85">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" ss:Size="9" ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection/>
  </Style>
  <Style ss:ID="s86">
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
  <Style ss:ID="s87">
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
  <Style ss:ID="s88">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s89">
   <Borders/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s90">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Font ss:FontName="Arial CE" x:CharSet="238" ss:Size="8" ss:Bold="1"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s230">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s231">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="12"
    ss:Bold="1"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s232">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Arial" x:Family="Swiss" ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s233">
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
  <Style ss:ID="s243">
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
  <Style ss:ID="s244">
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
  <Style ss:ID="s245">
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
  <Style ss:ID="s246">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s304">
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
  <Style ss:ID="s356">
   <Alignment ss:Vertical="Center" ss:WrapText="1"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:VerticalAlign="Superscript"/>
   <Protection/>
  </Style>
 </Styles>
 <Worksheet ss:Name="Príloha č. 19">
  <Table ss:ExpandedColumnCount="14" ss:ExpandedRowCount="56" x:FullColumns="1"
   x:FullRows="1">
   <Column ss:Index="3" ss:AutoFitWidth="0" ss:Width="60.75"/>
   <Column ss:AutoFitWidth="0" ss:Width="57.75"/>
   <Column ss:Index="8" ss:AutoFitWidth="0" ss:Width="38.25"/>
   <Column ss:Index="10" ss:AutoFitWidth="0" ss:Width="58.5" ss:Span="1"/>
   <Row>
    <Cell ss:StyleID="s90"><Data ss:Type="String">OBCHODNÉ TAJOMSTVO</Data></Cell>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s83"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s83"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s83"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s83"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s80"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s83"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s83"/>
    <Cell ss:MergeAcross="3" ss:StyleID="s230"><Data ss:Type="String">Príloha č.  19 k vyhláške č. 248/2016 Z. z.</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="s80"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s83"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s83"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s83"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s83"/>
   </Row>
   <Row ss:Height="15.75">
    <Cell ss:MergeAcross="11" ss:StyleID="s231"><Data ss:Type="String">Skutočné osobitné náklady na výrobu tepla zariadením na kombinovanú výrobu</Data></Cell>
   </Row>
   <Row>
    <Cell ss:MergeAcross="11" ss:StyleID="s232"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5" ss:StyleID="s79">
    <Cell ss:MergeAcross="1" ss:StyleID="s233"><Data ss:Type="String">Regulovaný subjekt: </Data></Cell>
    <Cell ss:MergeAcross="9" ss:StyleID="s86"><Data ss:Type="String">Bratislavská teplárenská, a.s.</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5" ss:StyleID="s79">
    <Cell ss:MergeAcross="1" ss:StyleID="s233"><Data ss:Type="String">Sídlo / adresa trvalého pobytu:</Data></Cell>
    <Cell ss:MergeAcross="6" ss:StyleID="m2288447218232"><Data ss:Type="String">Turbínová 3, 829 05 Bratislava - mestská časť Nové Mesto</Data></Cell>
    <Cell ss:StyleID="s85"><Data ss:Type="String">IČO:</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447218252"><Data ss:Type="Number">35823542</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5" ss:StyleID="s79">
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447224768"><Data ss:Type="String">Číslo povolenia:</Data></Cell>
    <Cell ss:StyleID="s86"><Data ss:Type="String">2005T 0040</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s243"><Data ss:Type="String">Meno a priezvisko kontaktnej osoby:</Data></Cell>
    <Cell ss:MergeAcross="3" ss:StyleID="s244"><Data ss:Type="String">Ing. Martin Bíreš</Data></Cell>
    <Cell ss:StyleID="s87"><Data ss:Type="String">Telefónne číslo:</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s245"><Data ss:Type="String">02/57 372 336</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5" ss:StyleID="s79">
    <Cell ss:MergeAcross="1" ss:StyleID="s233"><Data ss:Type="String">Regulačný rok:</Data></Cell>
    <Cell ss:MergeAcross="9" ss:StyleID="m2288447224868"><Data ss:Type="Number">'
            . $this->getRok() .
    '</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="s88"/>
    <Cell ss:StyleID="s89"/>
    <Cell ss:StyleID="s89"/>
    <Cell ss:MergeAcross="8" ss:StyleID="s246"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="3" ss:MergeDown="1" ss:StyleID="m2288447221044"/>
    <Cell ss:MergeAcross="1" ss:MergeDown="1" ss:StyleID="m2288447221064"><Data
      ss:Type="String">Celkové náklady  </Data></Cell>
    <Cell ss:MergeAcross="5" ss:MergeDown="1" ss:StyleID="m2288447221084"/>
   </Row>
   <Row ss:Index="13">
    <Cell ss:MergeAcross="3" ss:StyleID="m2288447221104"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447221124"/>
    <Cell ss:MergeAcross="5" ss:MergeDown="19" ss:StyleID="m2288447221144"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="3" ss:StyleID="m2288447221164"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447221184"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s71"><Data ss:Type="String">Por.č.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447221204"><Data ss:Type="String">        VARIABILNÉ NÁKLADY</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447217280"><Data ss:Type="String">v tisícoch eur</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="24.75">
    <Cell ss:StyleID="s72"><Data ss:Type="String"> 1.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447217300"><Data ss:Type="String">Variabilné náklady na priamy materiál</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447217320"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s73"/>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447217340"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447217360"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s73"/>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447217380"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447217400"/>
   </Row>
   <Row ss:AutoFitHeight="0">
    <Cell ss:StyleID="s73"/>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447223936"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447223956"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="23.25">
    <Cell ss:StyleID="s74"/>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447223976"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447223996"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s73"/>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447224016"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447224036"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:StyleID="s74"/>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447222064"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447222084"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s73"/>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447222104"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447222124"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s73"/>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447222144"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447222164"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="17.25">
    <Cell ss:StyleID="s75"><Data ss:Type="String"> 2.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447225392"><Data ss:Type="String">Ostatné variabilné náklady</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447225412"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s76"/>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447225432"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447225452"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s77"/>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447225472"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447225492"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s76"/>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447228096"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447228116"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s78"/>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447228136"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447228156"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="5" ss:StyleID="m2288447228176"/>
   </Row>
   <Row>
    <Cell ss:MergeDown="1" ss:StyleID="s304"><Data ss:Type="String"> I.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447228216"><Data ss:Type="String">Variabilné náklady na priamy materiál</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447228236"/>
   </Row>
   <Row>
    <Cell ss:Index="2" ss:MergeAcross="2" ss:StyleID="m2288447228256"><Data
      ss:Type="String">Ostatné variabilné náklady</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447228276"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="3" ss:StyleID="m2288447217488"><Data ss:Type="String">Variabilné náklady </Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447217508"/>
    <Cell ss:MergeAcross="5" ss:StyleID="m2288447217528"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="11" ss:StyleID="m2288447217548"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s64"><Data ss:Type="String">Por.č.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447217568"><Data ss:Type="String">        FIXNÉ NÁKLADY</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447217588"><Data ss:Type="String">v tisícoch eur</Data></Cell>
    <Cell ss:MergeAcross="5" ss:MergeDown="17" ss:StyleID="m2288447217608"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="20.25">
    <Cell ss:StyleID="s65"><Data ss:Type="String"> 3.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447217628"><Data ss:Type="String">Fixné náklady</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447217648"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s66"><Data ss:Type="String"> 3.1.1</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447217668"><Data ss:Type="String">Nakupované teplo (fixná zložka)</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447228928"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"><Data ss:Type="String"> 3.1.2</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447228948"><Data ss:Type="String">Poistenie majetku</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447228968"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"><Data ss:Type="String"> 3.1.3</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447228988"><Data ss:Type="String">Dane </Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447229008"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"><Data ss:Type="String"> 3.1.4</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447229028"><Data ss:Type="String">Nájomné</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447229048"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:StyleID="s68"><Data ss:Type="String"> 3.1.5</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447221232"><Data ss:Type="String">Revízie, zákonné prehliadky a zákonné poplatky</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447221252"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"><Data ss:Type="String"> 3.1.6</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447221272"><Data ss:Type="String">Poplatky za znečistenie</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447221292"/>
    <Cell ss:Index="14" ss:StyleID="s63"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="24">
    <Cell ss:StyleID="s68"><Data ss:Type="String"> 3.1.7</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447221312"><Data ss:Type="String">Náklady na overenieúčtovnej závierky audítorom</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447221332"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="38.25">
    <Cell ss:StyleID="s68"><Data ss:Type="String"> 3.1.8</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447225184"><Data ss:Type="String">Odpisy hmotného a nehmotného majetku súvisiacieho s výrobou a rozvodom tepla</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447225204"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"><Data ss:Type="String"> 3.1.9</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447225224"><Data ss:Type="String">Opravy a udržiavanie spolu</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447225244"/>
   </Row>
   <Row ss:AutoFitHeight="0">
    <Cell ss:StyleID="s68"><Data ss:Type="String"> 3.1.10</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447225264"><Data ss:Type="String">Úroky z investičného úveru</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447225284"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="36">
    <Cell ss:StyleID="s69"><Data ss:Type="String"> 3.2</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447220192"><Data ss:Type="String">Odpisy a opravy spoločných zariadení súvisiacich s výrobou a rozvodom tepla </Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447220212"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"><Data ss:Type="String"> 3.3</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447220232"><Data ss:Type="String">Regulovaná zložka fixných nákladov</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447220252"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s70"/>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447220272"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447220292"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="5" ss:StyleID="m2288447228324"/>
   </Row>
   <Row>
    <Cell ss:MergeDown="1" ss:StyleID="m2288447228344"><Data ss:Type="String"> II.</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2288447228364"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447228384"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="24.75">
    <Cell ss:Index="2" ss:MergeAcross="2" ss:StyleID="m2288447228404"><Data
      ss:Type="String">Fixné náklady </Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2288447228424"
     ss:Formula="=SUM(R[-14]C:R[-4]C[1])"><Data ss:Type="Number">0</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0">
    <Cell ss:MergeAcross="11" ss:MergeDown="1" ss:StyleID="s356"/>
   </Row>
   <Row ss:Index="55">
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