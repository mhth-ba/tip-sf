<?php

namespace AppBundle\Export\Kontroling\SCT;

class Priloha21
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
  <Author>Jasenak</Author>
  <Created>2010-10-19T05:08:46Z</Created>
  <Company>URSO</Company>
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
  <Style ss:ID="m1628272341984">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="m1628272342004">
   <Alignment ss:Horizontal="Right" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="m1628272342024">
   <Alignment ss:Horizontal="Right" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="m1628272342044">
   <Alignment ss:Horizontal="Right" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="m1628272342064">
   <Alignment ss:Horizontal="Right" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="m1628272342084">
   <Alignment ss:Horizontal="Right" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="m1628272350512">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="m1628272349532">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="m1628272349552">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="m1628272349572">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s62">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
  </Style>
  <Style ss:ID="s63">
   <Alignment ss:Vertical="Bottom"/>
  </Style>
  <Style ss:ID="s64">
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s65">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="s66">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"
    ss:Bold="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="s67">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s68">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s69">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s70">
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s71">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s72">
   <Borders/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s73">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s74">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s75">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s76">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s77">
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s78">
   <Borders>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s79">
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s80">
   <Borders>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s81">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s82">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s83">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="Standard"/>
  </Style>
  <Style ss:ID="s84">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.000"/>
  </Style>
  <Style ss:ID="s85">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s86">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s87">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s88">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s89">
   <Alignment ss:Horizontal="Right" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s90">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s91">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s92">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="Standard"/>
  </Style>
  <Style ss:ID="s93">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="Standard"/>
  </Style>
  <Style ss:ID="s94">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection/>
  </Style>
  <Style ss:ID="s95">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="s96">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="s97">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection/>
  </Style>
  <Style ss:ID="s98">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="s99">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Color="#FF0000"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="s100">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s101">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s102">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s103">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s104">
   <Alignment ss:Horizontal="Right" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="Standard"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s105">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s106">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s107">
   <Interior/>
  </Style>
  <Style ss:ID="s108">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Interior/>
  </Style>
  <Style ss:ID="s109">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="12"
    ss:Bold="1"/>
   <Interior/>
  </Style>
  <Style ss:ID="s110">
   <Alignment ss:Horizontal="Right" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s111">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="Standard"/>
   <Protection/>
  </Style>
  <Style ss:ID="s112">
   <Alignment ss:Horizontal="Right" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="Standard"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s113">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s114">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection/>
  </Style>
  <Style ss:ID="s115">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s116">
   <Alignment ss:Horizontal="Right" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s117">
   <Alignment ss:Horizontal="Right" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s118">
   <Alignment ss:Horizontal="Right" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s119">
   <Alignment ss:Horizontal="Right" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s120">
   <Alignment ss:Horizontal="Right" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s121">
   <Alignment ss:Horizontal="Right" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s122">
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Interior/>
  </Style>
  <Style ss:ID="s138">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s142">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="s143">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" ss:Size="9"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s144">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="s145">
   <Alignment ss:Horizontal="Right" ss:Vertical="Bottom"/>
   <Interior/>
  </Style>
 </Styles>
 <Worksheet ss:Name="Príloha č. 21">
  <Table ss:ExpandedColumnCount="7" ss:ExpandedRowCount="42" x:FullColumns="1"
   x:FullRows="1">
   <Column ss:AutoFitWidth="0" ss:Width="90.75"/>
   <Column ss:AutoFitWidth="0" ss:Width="88.5"/>
   <Column ss:AutoFitWidth="0" ss:Width="82.5"/>
   <Column ss:AutoFitWidth="0" ss:Width="66"/>
   <Column ss:AutoFitWidth="0" ss:Width="63.75"/>
   <Column ss:AutoFitWidth="0" ss:Width="57.75"/>
   <Row>
    <Cell ss:StyleID="s122"><Data ss:Type="String">OBCHODNÉ TAJOMSTVO</Data></Cell>
    <Cell ss:StyleID="s107"/>
    <Cell ss:StyleID="s107"/>
    <Cell ss:StyleID="s107"/>
    <Cell ss:StyleID="s107"/>
    <Cell ss:StyleID="s107"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s107"/>
    <Cell ss:StyleID="s107"/>
    <Cell ss:MergeAcross="3" ss:StyleID="s145"><Data ss:Type="String">               Príloha č. 21 k vyhláške č. 248/2016 Z. z. </Data></Cell>
    <Cell ss:StyleID="s63"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s107"/>
    <Cell ss:StyleID="s107"/>
    <Cell ss:StyleID="s107"/>
    <Cell ss:StyleID="s108"/>
    <Cell ss:StyleID="s108"/>
    <Cell ss:StyleID="s108"/>
    <Cell ss:StyleID="s62"/>
   </Row>
   <Row ss:Height="15.75">
    <Cell ss:MergeAcross="5" ss:StyleID="s109"><Data ss:Type="String">Skutočné doplňujúce údaje o kombinovanej výrobe elektriny a tepla  </Data></Cell>
   </Row>
   <Row ss:Height="15.75">
    <Cell ss:StyleID="s109"/>
    <Cell ss:StyleID="s109"/>
    <Cell ss:StyleID="s109"/>
    <Cell ss:StyleID="s109"/>
    <Cell ss:StyleID="s109"/>
    <Cell ss:StyleID="s109"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:StyleID="s65"><Data ss:Type="String">Regulovaný subjekt: </Data></Cell>
    <Cell ss:MergeAcross="4" ss:StyleID="s138"><Data ss:Type="String">Bratislavská teplárenská, a.s.</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:StyleID="s65"><Data ss:Type="String">Sídlo / adresa trvalého pobytu:</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m1628272349532"><Data ss:Type="String">Turbínová 3, 829 05 Bratislava - mestská časť Nové Mesto</Data></Cell>
    <Cell ss:StyleID="s65"><Data ss:Type="String">IČO:</Data></Cell>
    <Cell ss:StyleID="s143"><Data ss:Type="Number">35823542</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:StyleID="s65"><Data ss:Type="String">Číslo povolenia:</Data></Cell>
    <Cell ss:StyleID="s138"><Data ss:Type="String">2005T 0040</Data></Cell>
    <Cell ss:StyleID="s65"><Data ss:Type="String">Meno a priezvisko kontaktnej osoby:</Data></Cell>
    <Cell ss:StyleID="s142"><Data ss:Type="String">Ing. Martin Bíreš</Data></Cell>
    <Cell ss:StyleID="s65"><Data ss:Type="String">Telefónne číslo:</Data></Cell>
    <Cell ss:StyleID="s144"><Data ss:Type="String">02/57 372 336</Data></Cell>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:StyleID="s66"><Data ss:Type="String">Regulačný rok:</Data></Cell>
    <Cell ss:MergeAcross="4" ss:StyleID="m1628272349552"><Data ss:Type="Number">'
            . $this->getRok() .
    '</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
   </Row>
   <Row ss:Height="14.25">
    <Cell ss:StyleID="s67"><Data ss:Type="String">Množstvo palivo:</Data></Cell>
    <Cell ss:StyleID="s68"/>
    <Cell ss:StyleID="s69"><Data ss:Type="String">Uhlie (t)</Data></Cell>
    <Cell ss:StyleID="s69"><Data ss:Type="String">Biomasa (t)</Data></Cell>
    <Cell ss:StyleID="s69"><ss:Data ss:Type="String"
      xmlns="http://www.w3.org/TR/REC-html40">Plyn (m<Sup>3)</Sup></ss:Data></Cell>
    <Cell ss:StyleID="s69"><Data ss:Type="String">Iné </Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s68"><Data ss:Type="String">na výrobu tepla </Data></Cell>
    <Cell ss:StyleID="s100"/>
    <Cell ss:StyleID="s100"/>
    <Cell ss:StyleID="s100"/>
    <Cell ss:StyleID="s100"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s71"/>
    <Cell ss:StyleID="s68"><Data ss:Type="String">na výrobu elektriny</Data></Cell>
    <Cell ss:StyleID="s101"/>
    <Cell ss:StyleID="s101"/>
    <Cell ss:StyleID="s101"/>
    <Cell ss:StyleID="s101"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s73"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s68"><Data ss:Type="String">Náklady za palivo:</Data></Cell>
    <Cell ss:StyleID="s74"/>
    <Cell ss:StyleID="s75"><Data ss:Type="String">v tisícoch eur</Data></Cell>
    <Cell ss:StyleID="s75"><Data ss:Type="String">v tisícoch eur</Data></Cell>
    <Cell ss:StyleID="s75"><Data ss:Type="String">v tisícoch eur</Data></Cell>
    <Cell ss:StyleID="s75"><Data ss:Type="String">v tisícoch eur</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s71"><Data ss:Type="String">na výrobu tepla </Data></Cell>
    <Cell ss:StyleID="s102"/>
    <Cell ss:StyleID="s102"/>
    <Cell ss:StyleID="s102"/>
    <Cell ss:StyleID="s103"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s71"/>
    <Cell ss:StyleID="s68"><Data ss:Type="String">na výrobu elektriny</Data></Cell>
    <Cell ss:StyleID="s103"/>
    <Cell ss:StyleID="s103"/>
    <Cell ss:StyleID="s103"/>
    <Cell ss:StyleID="s103"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s73"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"><Data ss:Type="String">Výroba elektriny kombinovanou výrobou:</Data></Cell>
    <Cell ss:StyleID="s76"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s76"/>
    <Cell ss:StyleID="s76"/>
    <Cell ss:StyleID="s73"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"/>
    <Cell ss:StyleID="s121"><Data ss:Type="String">na straty</Data></Cell>
    <Cell ss:StyleID="s110"/>
    <Cell ss:StyleID="s68"><Data ss:Type="String">MWh</Data></Cell>
    <Cell ss:StyleID="s77"/>
    <Cell ss:StyleID="s78"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"/>
    <Cell ss:StyleID="s121"><Data ss:Type="String">na trh</Data></Cell>
    <Cell ss:StyleID="s110"/>
    <Cell ss:StyleID="s68"><Data ss:Type="String">MWh</Data></Cell>
    <Cell ss:StyleID="s79"/>
    <Cell ss:StyleID="s80"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"/>
    <Cell ss:StyleID="s121"><Data ss:Type="String">regulačná elektrina</Data></Cell>
    <Cell ss:StyleID="s110"/>
    <Cell ss:StyleID="s68"><Data ss:Type="String">MWh</Data></Cell>
    <Cell ss:StyleID="s79"/>
    <Cell ss:StyleID="s80"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"/>
    <Cell ss:StyleID="s121"><Data ss:Type="String">na vlastné využitie</Data></Cell>
    <Cell ss:StyleID="s110"/>
    <Cell ss:StyleID="s68"><Data ss:Type="String">MWh</Data></Cell>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s82"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"/>
    <Cell ss:StyleID="s118"/>
    <Cell ss:StyleID="s105"/>
    <Cell ss:StyleID="s76"/>
    <Cell ss:StyleID="s76"/>
    <Cell ss:StyleID="s73"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"/>
    <Cell ss:StyleID="s121"><Data ss:Type="String">celkom</Data></Cell>
    <Cell ss:StyleID="s111" ss:Formula="=SUM(R[-5]C:R[-2]C)"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s68"><Data ss:Type="String">MWh</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m1628272349572"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="5" ss:StyleID="m1628272350512"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"><Data ss:Type="String">Výnosy z elektriny vyrobenej kombinovanou výrobou:</Data></Cell>
    <Cell ss:StyleID="s76"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s83"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s73"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="1" ss:StyleID="s117"><Data ss:Type="String">za dodávku na straty</Data></Cell>
    <Cell ss:StyleID="s104"/>
    <Cell ss:StyleID="s68"><Data ss:Type="String">tisíc eur</Data></Cell>
    <Cell ss:StyleID="s77"/>
    <Cell ss:StyleID="s78"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="1" ss:StyleID="s117"><Data ss:Type="String">za dodávku na trhu</Data></Cell>
    <Cell ss:StyleID="s104"/>
    <Cell ss:StyleID="s68"><Data ss:Type="String">tisíc eur</Data></Cell>
    <Cell ss:StyleID="s79"/>
    <Cell ss:StyleID="s80"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="1" ss:StyleID="s117"><Data ss:Type="String">doplatok za kombinovanú výrobu</Data></Cell>
    <Cell ss:StyleID="s104"/>
    <Cell ss:StyleID="s68"><Data ss:Type="String">tisíc eur</Data></Cell>
    <Cell ss:StyleID="s79"/>
    <Cell ss:StyleID="s80"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="1" ss:StyleID="s117"><Data ss:Type="String">regulačná elektrina</Data></Cell>
    <Cell ss:StyleID="s104"/>
    <Cell ss:StyleID="s68"><Data ss:Type="String">tisíc eur</Data></Cell>
    <Cell ss:StyleID="s79"/>
    <Cell ss:StyleID="s80"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="1" ss:StyleID="s119"><Data ss:Type="String">podporné služby</Data></Cell>
    <Cell ss:StyleID="s112"/>
    <Cell ss:StyleID="s68"><Data ss:Type="String">tisíc eur</Data></Cell>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s82"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s119"/>
    <Cell ss:StyleID="s120"/>
    <Cell ss:StyleID="s106"/>
    <Cell ss:StyleID="s76"/>
    <Cell ss:StyleID="s85"/>
    <Cell ss:StyleID="s82"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s67"/>
    <Cell ss:StyleID="s121"><Data ss:Type="String">celkom</Data></Cell>
    <Cell ss:StyleID="s111" ss:Formula="=SUM(R[-6]C:R[-2]C)"><Data ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s68"><Data ss:Type="String">tisíc eur</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m1628272341984"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s86"/>
    <Cell ss:StyleID="s76"/>
    <Cell ss:StyleID="s105"/>
    <Cell ss:StyleID="s76"/>
    <Cell ss:StyleID="s76"/>
    <Cell ss:StyleID="s73"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="1" ss:StyleID="m1628272342004"><Data ss:Type="String">Teplo spotrebované na výrobu elektriny: </Data></Cell>
    <Cell ss:StyleID="s113"/>
    <Cell ss:StyleID="s87"><Data ss:Type="String">MWh</Data></Cell>
    <Cell ss:StyleID="s88"><Data ss:Type="String">parná turbína</Data></Cell>
    <Cell ss:StyleID="s73"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s116"/>
    <Cell ss:StyleID="s89"/>
    <Cell ss:StyleID="s114"/>
    <Cell ss:StyleID="s90"/>
    <Cell ss:StyleID="s90"/>
    <Cell ss:StyleID="s73"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="1" ss:StyleID="m1628272342024"><Data ss:Type="String">Využiteľné teplo na dodávku:</Data></Cell>
    <Cell ss:StyleID="s115"/>
    <Cell ss:StyleID="s87"><Data ss:Type="String">MWh</Data></Cell>
    <Cell ss:StyleID="s90"><Data ss:Type="String">parná turbína</Data></Cell>
    <Cell ss:StyleID="s73"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="1" ss:StyleID="m1628272342044"><Data ss:Type="String">Výroba tepla:</Data></Cell>
    <Cell ss:StyleID="s115"/>
    <Cell ss:StyleID="s87"><Data ss:Type="String">MWh</Data></Cell>
    <Cell ss:StyleID="s90"><Data ss:Type="String">plynová turbína, motor</Data></Cell>
    <Cell ss:StyleID="s73"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s117"/>
    <Cell ss:StyleID="s118"/>
    <Cell ss:StyleID="s91"/>
    <Cell ss:StyleID="s90"/>
    <Cell ss:StyleID="s92"/>
    <Cell ss:StyleID="s93"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="1" ss:StyleID="m1628272342064"><Data ss:Type="String">Spoločné náklady na teplo:</Data></Cell>
    <Cell ss:StyleID="s94" ss:Formula="=100*R[-2]C/(R[-16]C+R[-2]C)"><Data
      ss:Type="Error">#DIV/0!</Data></Cell>
    <Cell ss:StyleID="s95"><Data ss:Type="String">%</Data></Cell>
    <Cell ss:StyleID="s64"><Data ss:Type="String">plynová turbína, motor</Data></Cell>
    <Cell ss:StyleID="s96"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="1" ss:StyleID="m1628272342084"><Data ss:Type="String">Spoločné náklady na teplo:</Data></Cell>
    <Cell ss:StyleID="s97" ss:Formula="=100*R[-4]C/(R[-4]C+R[-6]C)"><Data
      ss:Type="Error">#DIV/0!</Data></Cell>
    <Cell ss:StyleID="s95"><Data ss:Type="String">%</Data></Cell>
    <Cell ss:StyleID="s98"><Data ss:Type="String">parná turbína</Data></Cell>
    <Cell ss:StyleID="s99"/>
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