<?php

namespace AppBundle\Export\Kontroling\SCT;

class Priloha15
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
  <Style ss:ID="s38" ss:Name="Mena">
   <NumberFormat
    ss:Format="_-* #,##0.00\ &quot;Kč&quot;_-;\-* #,##0.00\ &quot;Kč&quot;_-;_-* &quot;-&quot;??\ &quot;Kč&quot;_-;_-@_-"/>
  </Style>
  <Style ss:ID="m2132832547920">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2132832547940">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2132832547960">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2132832547980">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2132832548000">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2132832548020">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2132832548040">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2132832548060">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2132832550308">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection/>
  </Style>
  <Style ss:ID="m2132832545840">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="m2132832545860">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="m2132832545880">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="m2132832545900">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="m2132832545920">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="m2132832545980">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="m2132832546484">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2132832546504">
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
   <NumberFormat ss:Format="@"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2132832546524">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2132832546604">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="m2132832546624">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="m2132832546644">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="m2132832543780">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2132832543800">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2132832543820" ss:Parent="s38">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
  </Style>
  <Style ss:ID="m2132832543840" ss:Parent="s38">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior/>
  </Style>
  <Style ss:ID="m2132832543860" ss:Parent="s38">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
  </Style>
  <Style ss:ID="m2132832549228">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2132832549248">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m2132832549268">
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
  <Style ss:ID="s62">
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s63">
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss"/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s64">
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss"/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s65">
   <Alignment ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss"/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s66">
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss"/>
   <NumberFormat ss:Format="@"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s67">
   <Alignment ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="11"/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s68">
   <Alignment ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="12"
    ss:Bold="1"/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s69">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="@"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s70">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s71">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="@"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s72">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="@"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s73">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s75">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s76">
   <Alignment ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="11"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s77">
   <Alignment ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s78">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s79">
   <Alignment ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="12"
    ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s80">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s81">
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s82">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="Standard"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s83">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection/>
  </Style>
  <Style ss:ID="s84">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="@"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s85">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s123">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s124">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s125">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s133">
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
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s145">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s146">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s147">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s155">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="@"/>
   <Protection ss:Protected="0"/>
  </Style>
 </Styles>
 <Worksheet ss:Name="Príloha č. 15">
  <Table ss:ExpandedColumnCount="14" ss:ExpandedRowCount="36" x:FullColumns="1"
   x:FullRows="1">
   <Column ss:AutoFitWidth="0" ss:Width="30"/>
   <Column ss:AutoFitWidth="0" ss:Width="66.75" ss:Span="1"/>
   <Column ss:Index="4" ss:AutoFitWidth="0" ss:Width="129.75"/>
   <Column ss:AutoFitWidth="0" ss:Width="51" ss:Span="4"/>
   <Column ss:Index="10" ss:AutoFitWidth="0" ss:Width="66" ss:Span="3"/>
   <Row ss:AutoFitHeight="0" ss:Height="18">
    <Cell ss:StyleID="s85"><Data ss:Type="String">OBCHODNÉ TAJOMSTVO</Data></Cell>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s75"><Data ss:Type="String">Príloha č. 15 k vyhláške č. 248/2016 Z. z.</Data></Cell>
    <Cell ss:StyleID="s76"/>
    <Cell ss:StyleID="s76"/>
    <Cell ss:StyleID="s67"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="15">
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
    <Cell ss:StyleID="s77"/>
    <Cell ss:StyleID="s77"/>
    <Cell ss:StyleID="s78"/>
    <Cell ss:StyleID="s62"/>
   </Row>
   <Row ss:Height="15.75">
    <Cell ss:StyleID="s79"><Data ss:Type="String">            Zoznam odberateľov tepla a skutočná dodávka tepla </Data></Cell>
    <Cell ss:StyleID="s79"/>
    <Cell ss:StyleID="s79"/>
    <Cell ss:StyleID="s79"/>
    <Cell ss:StyleID="s79"/>
    <Cell ss:StyleID="s79"/>
    <Cell ss:StyleID="s79"/>
    <Cell ss:StyleID="s79"/>
    <Cell ss:StyleID="s79"/>
    <Cell ss:StyleID="s79"/>
    <Cell ss:StyleID="s79"/>
    <Cell ss:StyleID="s79"/>
    <Cell ss:StyleID="s79"/>
    <Cell ss:StyleID="s68"/>
   </Row>
   <Row>
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
    <Cell ss:StyleID="s80"/>
    <Cell ss:StyleID="s63"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:MergeAcross="1" ss:StyleID="s123"><Data ss:Type="String">Regulovaný subjekt: </Data></Cell>
    <Cell ss:MergeAcross="10" ss:StyleID="s124"><Data ss:Type="String">Bratislavská teplárenská, a.s.</Data></Cell>
    <Cell ss:StyleID="s63"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:MergeAcross="1" ss:StyleID="s125"><Data ss:Type="String">Sídlo / adresa trvalého pobytu:</Data></Cell>
    <Cell ss:MergeAcross="6" ss:StyleID="m2132832549228"><Data ss:Type="String">Turbínová 3, 829 05 Bratislava - mestská časť Nové Mesto</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2132832549248"><Data ss:Type="String"> IČO:</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2132832549268"><Data ss:Type="Number">35823542</Data></Cell>
    <Cell ss:StyleID="s63"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:MergeAcross="1" ss:StyleID="s133"><Data ss:Type="String">Číslo povolenia:</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2132832543780"><Data ss:Type="String">2005T 0040</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2132832543800"><Data ss:Type="String">Meno a priezvisko          kontaktnej osoby:</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2132832543820"><Data ss:Type="String">Ing. Martin Bíreš</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2132832543840"><Data ss:Type="String">Telefónne číslo:</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2132832543860"><Data ss:Type="String">02/57 372 336</Data></Cell>
    <Cell ss:StyleID="s63"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:MergeAcross="1" ss:StyleID="s123"><Data ss:Type="String">Regulačný rok:</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2132832546484"><Data ss:Type="String">'
            . $this->getRok() .
    '</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m2132832546504"><Data ss:Type="String">Mesto:</Data></Cell>
    <Cell ss:MergeAcross="6" ss:StyleID="m2132832546524"><Data ss:Type="String">Bratislava</Data></Cell>
    <Cell ss:StyleID="s63"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s81"/>
    <Cell ss:MergeAcross="11" ss:StyleID="s145"/>
    <Cell ss:StyleID="s63"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="30">
    <Cell ss:MergeDown="2" ss:StyleID="s146"><Data ss:Type="String">Por. číslo</Data></Cell>
    <Cell ss:MergeAcross="1" ss:MergeDown="2" ss:StyleID="s147"><Data
      ss:Type="String">Názov odberateľa</Data></Cell>
    <Cell ss:MergeDown="2" ss:StyleID="m2132832546604"><Data ss:Type="String">Adresa odberného miesta</Data></Cell>
    <Cell ss:MergeDown="2" ss:StyleID="m2132832546624"><Data ss:Type="String">Regulačný príkon         (kW)</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m2132832546644"><Data ss:Type="String">Bytové objekty</Data></Cell>
    <Cell ss:MergeDown="2" ss:StyleID="m2132832545840"><Data ss:Type="String">Nebytové objekty  (MWh)</Data></Cell>
    <Cell ss:MergeDown="2" ss:StyleID="m2132832545860"><Data ss:Type="String">Technologická spotreba   (MWh)</Data></Cell>
    <Cell ss:MergeDown="2" ss:StyleID="m2132832545880"><Data ss:Type="String">Predaj dodávateľovi (MWh)</Data></Cell>
    <Cell ss:MergeDown="2" ss:StyleID="m2132832545900"><Data ss:Type="String">Vlastná spotreba (MWh)</Data></Cell>
    <Cell ss:MergeDown="2" ss:StyleID="m2132832545920"><Data ss:Type="String"> Spolu        (MWh)</Data></Cell>
    <Cell ss:StyleID="s64"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:Index="6" ss:MergeDown="1" ss:StyleID="s146"><Data ss:Type="String">ÚK      (MWh)</Data></Cell>
    <Cell ss:MergeDown="1" ss:StyleID="s146"><Data ss:Type="String">TÚV (MWh)</Data></Cell>
    <Cell ss:MergeDown="1" ss:StyleID="m2132832545980"><Data ss:Type="String">Spolu           (MWh)</Data></Cell>
    <Cell ss:Index="14" ss:StyleID="s65"/>
   </Row>
   <Row ss:AutoFitHeight="0">
    <Cell ss:Index="14" ss:StyleID="s65"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String">1</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s84"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=RC[-2]+RC[-1]"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=SUM(RC[-5]:RC[-1])"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s66"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String">2</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s84"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=RC[-2]+RC[-1]"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=SUM(RC[-5]:RC[-1])"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s66"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String">3</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s84"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=RC[-2]+RC[-1]"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=SUM(RC[-5]:RC[-1])"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s66"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String">4</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s84"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=RC[-2]+RC[-1]"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=SUM(RC[-5]:RC[-1])"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s66"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String">5</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s84"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=RC[-2]+RC[-1]"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=SUM(RC[-5]:RC[-1])"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s66"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String">6</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s84"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=RC[-2]+RC[-1]"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=SUM(RC[-5]:RC[-1])"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s66"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String">7</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s84"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=RC[-2]+RC[-1]"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=SUM(RC[-5]:RC[-1])"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s66"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String">8</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s84"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=RC[-2]+RC[-1]"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=SUM(RC[-5]:RC[-1])"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s66"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String">9</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s84"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=RC[-2]+RC[-1]"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=SUM(RC[-5]:RC[-1])"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s66"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String">10</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s84"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=RC[-2]+RC[-1]"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=SUM(RC[-5]:RC[-1])"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s66"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String">11</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s84"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=RC[-2]+RC[-1]"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=SUM(RC[-5]:RC[-1])"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s66"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String">12</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s84"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=RC[-2]+RC[-1]"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=SUM(RC[-5]:RC[-1])"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s66"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String">13</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s84"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=RC[-2]+RC[-1]"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=SUM(RC[-5]:RC[-1])"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s66"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String">14</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s84"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=RC[-2]+RC[-1]"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=SUM(RC[-5]:RC[-1])"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s66"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String">15</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s84"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=RC[-2]+RC[-1]"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=SUM(RC[-5]:RC[-1])"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s66"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String">16</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s84"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=RC[-2]+RC[-1]"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=SUM(RC[-5]:RC[-1])"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s66"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String">17</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s84"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=RC[-2]+RC[-1]"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=SUM(RC[-5]:RC[-1])"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s66"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String">18</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s84"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=RC[-2]+RC[-1]"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=SUM(RC[-5]:RC[-1])"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s66"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String">19</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s84"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=RC[-2]+RC[-1]"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=SUM(RC[-5]:RC[-1])"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s66"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String">20</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s84"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=RC[-2]+RC[-1]"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=SUM(RC[-5]:RC[-1])"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s66"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String">21</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s84"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=RC[-2]+RC[-1]"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=SUM(RC[-5]:RC[-1])"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s66"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s69"><Data ss:Type="String">22</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s84"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s82"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=RC[-2]+RC[-1]"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s83" ss:Formula="=SUM(RC[-5]:RC[-1])"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s66"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="2" ss:MergeDown="1" ss:StyleID="s155"><Data
      ss:Type="String">SPOLU</Data></Cell>
    <Cell ss:StyleID="s71"/>
    <Cell ss:MergeDown="1" ss:StyleID="m2132832550308"
     ss:Formula="=SUM(R[-22]C:R[-1]C)"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:MergeDown="1" ss:StyleID="m2132832547960"
     ss:Formula="=SUM(R[-22]C:R[-1]C)"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:MergeDown="1" ss:StyleID="m2132832547980"
     ss:Formula="=SUM(R[-22]C:R[-1]C)"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:MergeDown="1" ss:StyleID="m2132832548000"
     ss:Formula="=SUM(R[-22]C:R[-1]C)"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:MergeDown="1" ss:StyleID="m2132832548020"
     ss:Formula="=SUM(R[-22]C:R[-1]C)"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:MergeDown="1" ss:StyleID="m2132832548040"
     ss:Formula="=SUM(R[-22]C:R[-1]C)"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:MergeDown="1" ss:StyleID="m2132832548060"
     ss:Formula="=SUM(R[-22]C:R[-1]C)"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:MergeDown="1" ss:StyleID="m2132832547920"
     ss:Formula="=SUM(R[-22]C:R[-1]C)"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:MergeDown="1" ss:StyleID="m2132832547940"
     ss:Formula="=SUM(R[-22]C:R[-1]C)"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s66"/>
   </Row>
   <Row>
    <Cell ss:Index="4" ss:StyleID="s72"/>
    <Cell ss:Index="14" ss:StyleID="s66"/>
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