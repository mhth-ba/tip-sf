<?php

namespace AppBundle\Export\Kontroling\SCT;

class Priloha14
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
  <Author>Riaditel</Author>
  <Created>2002-09-04T11:33:03Z</Created>
  <Company>MPBH</Company>
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
  <Style ss:ID="m1566880460644">
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
  <Style ss:ID="m1566880460664">
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
  <Style ss:ID="m1566880460684">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m1566880460704">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m1566880460724">
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
  <Style ss:ID="m1566880460744">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="m1566880460764">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m1566880460784">
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
  <Style ss:ID="m1566880451264">
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
  <Style ss:ID="m1566880451304">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"
    ss:Italic="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="m1566880451324">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m1566880451344">
   <Alignment ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="m1566880451364">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m1566880456672">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"
    ss:Italic="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="m1566880456692">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="m1566880456712">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m1566880456732">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="m1566880456752">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m1566880456772">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"
    ss:Italic="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="m1566880453364">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="m1566880453384">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m1566880453404">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="m1566880453424">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="m1566880453444">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m1566880453464">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="m1566880453484">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m1566880453504">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="m1566880453524">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s62">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
  </Style>
  <Style ss:ID="s63">
   <Alignment ss:Vertical="Bottom"/>
   <Borders/>
  </Style>
  <Style ss:ID="s64">
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s65">
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s66">
   <Alignment ss:Vertical="Center"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s67">
   <Alignment ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s68">
   <Alignment ss:Vertical="Center"/>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s69">
   <Alignment ss:Vertical="Center" ss:WrapText="1"/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s70">
   <Alignment ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"
    ss:Italic="1"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="s71">
   <Alignment ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"
    ss:Italic="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="s72">
   <Alignment ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"
    ss:Italic="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="s73">
   <Alignment ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"
    ss:Italic="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="s74">
   <Alignment ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"
    ss:Italic="1"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="s75">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="s76">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="s77">
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="s78">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders/>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="s79">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="s80">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="s81">
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s82">
   <Interior/>
  </Style>
  <Style ss:ID="s83">
   <Alignment ss:Vertical="Bottom"/>
   <Font ss:FontName="Arial" x:Family="Swiss"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s84">
   <Alignment ss:Vertical="Bottom"/>
   <Font ss:FontName="Arial" x:Family="Swiss" ss:Size="11"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s85">
   <Alignment ss:Vertical="Bottom"/>
   <Font ss:FontName="Times New Roman" x:Family="Roman" ss:Size="12"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s86">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s87">
   <Font ss:FontName="Arial" x:Family="Swiss" ss:Size="12" ss:Bold="1"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s88">
   <Font ss:FontName="Times New Roman" x:Family="Roman" ss:Size="12"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s89">
   <Alignment ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s90">
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
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s91">
   <Alignment ss:Vertical="Bottom" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s92">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s93">
   <Alignment ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s94">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="s95">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="s96">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s97">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s98">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s99">
   <Borders/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s100">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s101">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s102">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Arial" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s103">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="s104">
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"
    ss:Italic="1"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="s105">
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="s106">
   <Borders/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="s107">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="s108">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="s109">
   <Interior/>
   <NumberFormat ss:Format="0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="s110">
   <Borders/>
   <Interior/>
   <NumberFormat ss:Format="0.000"/>
   <Protection/>
  </Style>
  <Style ss:ID="s111">
   <Font ss:FontName="Arial CE" x:CharSet="238" ss:Bold="1"/>
   <Interior/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s151">
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
  <Style ss:ID="s158">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"
    ss:Italic="1"/>
   <Interior ss:Color="#FFFF99" ss:Pattern="Solid"/>
   <Protection/>
  </Style>
  <Style ss:ID="s182">
   <Alignment ss:Horizontal="Left" ss:Vertical="Bottom" ss:WrapText="1"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Interior/>
   <Protection/>
  </Style>
  <Style ss:ID="s189">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <Interior/>
   <Protection/>
  </Style>
 </Styles>
 <Worksheet ss:Name="Príloha č. 14">
  <Table ss:ExpandedColumnCount="16" ss:ExpandedRowCount="38" x:FullColumns="1"
   x:FullRows="1">
   <Column ss:Index="3" ss:AutoFitWidth="0" ss:Width="70.5"/>
   <Column ss:Index="5" ss:AutoFitWidth="0" ss:Width="54"/>
   <Column ss:AutoFitWidth="0" ss:Width="64.5"/>
   <Column ss:Index="10" ss:AutoFitWidth="0" ss:Width="18"/>
   <Column ss:Hidden="1" ss:AutoFitWidth="0" ss:Width="0.75" ss:Span="1"/>
   <Column ss:Index="13" ss:Hidden="1" ss:AutoFitWidth="0"/>
   <Row ss:Height="14.25">
    <Cell ss:StyleID="s111"><Data ss:Type="String">OBCHODNÉ TAJOMSTVO</Data></Cell>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s82"><Data ss:Type="String">Príloha č. 14 k vyhláške č. 248/2016 Z. z.</Data></Cell>
    <Cell ss:StyleID="s83"/>
    <Cell ss:StyleID="s84"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
   </Row>
   <Row ss:Height="15.75">
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s85"/>
    <Cell ss:StyleID="s86"/>
    <Cell ss:StyleID="s81"/>
   </Row>
   <Row ss:Height="15.75">
    <Cell ss:StyleID="s87"><Data ss:Type="String">Skutočné náklady regulovanej zložky fixných nákladov v roku t</Data></Cell>
    <Cell ss:StyleID="s87"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
   </Row>
   <Row ss:Height="15.75">
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s88"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:MergeAcross="2" ss:StyleID="s189"><Data ss:Type="String">Regulovaný subjekt: </Data></Cell>
    <Cell ss:MergeAcross="6" ss:StyleID="m1566880460644"><Data ss:Type="String">Bratislavská teplárenská, a.s.</Data></Cell>
    <Cell ss:StyleID="s89"/>
    <Cell ss:StyleID="s62"/>
    <Cell ss:StyleID="s62"/>
    <Cell ss:StyleID="s63"/>
    <Cell ss:StyleID="s63"/>
    <Cell ss:StyleID="s63"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:MergeAcross="2" ss:StyleID="m1566880460664"><Data ss:Type="String">Sídlo / adresa trvalého pobytu:</Data></Cell>
    <Cell ss:MergeAcross="3" ss:StyleID="m1566880460684"><Data ss:Type="String">Turbínová 3, 829 05 Bratislava - mestská časť Nové Mesto</Data></Cell>
    <Cell ss:StyleID="s90"><Data ss:Type="String">IČO:</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m1566880460704"><Data ss:Type="Number">35823542</Data></Cell>
    <Cell ss:StyleID="s91"/>
    <Cell ss:StyleID="s62"/>
    <Cell ss:StyleID="s62"/>
    <Cell ss:StyleID="s63"/>
    <Cell ss:StyleID="s63"/>
    <Cell ss:StyleID="s63"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:MergeAcross="1" ss:StyleID="m1566880460724"><Data ss:Type="String">Číslo povolenia :</Data></Cell>
    <Cell ss:StyleID="s151"><Data ss:Type="String">2005T 0040</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m1566880460744"><Data ss:Type="String">Meno a priezvisko kontaktnej osoby :</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m1566880460764"><Data ss:Type="String">Ing. Martin Bíreš</Data></Cell>
    <Cell ss:StyleID="s92"><Data ss:Type="String">Telefónne číslo:</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m1566880460784"><Data ss:Type="String">02/57 372 336</Data></Cell>
    <Cell ss:StyleID="s93"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:StyleID="s94"><Data ss:Type="String">Regulačný rok:</Data></Cell>
    <Cell ss:StyleID="s95"/>
    <Cell ss:MergeAcross="7" ss:StyleID="m1566880451264"><Data ss:Type="Number">'
            . $this->getRok() .
    '</Data></Cell>
    <Cell ss:StyleID="s96"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s97"/>
    <Cell ss:StyleID="s97"/>
    <Cell ss:StyleID="s98"/>
    <Cell ss:StyleID="s99"/>
    <Cell ss:StyleID="s100"/>
    <Cell ss:StyleID="s100"/>
    <Cell ss:StyleID="s101"/>
    <Cell ss:StyleID="s101"/>
    <Cell ss:StyleID="s101"/>
    <Cell ss:StyleID="s102"/>
    <Cell ss:StyleID="s102"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="26.25">
    <Cell ss:MergeAcross="10" ss:StyleID="s182"><Data ss:Type="String">Skutočné náklady regulovanej zložky fixných nákladov v roku t zahrňujú tieto náklady:</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="2" ss:StyleID="m1566880451304"><Data ss:Type="String">1. Osobné náklady</Data></Cell>
    <Cell ss:StyleID="s70"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m1566880451324"><Data ss:Type="String">v tisícoch eur</Data></Cell>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s64"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s103"/>
    <Cell ss:MergeAcross="2" ss:StyleID="m1566880451344"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m1566880451364"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s64"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s104"/>
    <Cell ss:StyleID="s104"/>
    <Cell ss:StyleID="s105"/>
    <Cell ss:StyleID="s105"/>
    <Cell ss:StyleID="s109"/>
    <Cell ss:StyleID="s110"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s64"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="2" ss:StyleID="m1566880456672"><Data ss:Type="String">2. Spotrebované nákupy</Data></Cell>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s109"/>
    <Cell ss:StyleID="s110"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s64"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s76"/>
    <Cell ss:MergeAcross="2" ss:StyleID="m1566880456692"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m1566880456712"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"><Data ss:Type="String"> </Data></Cell>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s64"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s78"/>
    <Cell ss:StyleID="s107"/>
    <Cell ss:StyleID="s106"/>
    <Cell ss:StyleID="s106"/>
    <Cell ss:StyleID="s110"/>
    <Cell ss:StyleID="s110"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s64"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s71"><Data ss:Type="String">3. Služby</Data></Cell>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s74"/>
    <Cell ss:StyleID="s109"/>
    <Cell ss:StyleID="s110"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s64"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s76"/>
    <Cell ss:MergeAcross="2" ss:StyleID="m1566880456732"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m1566880456752"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s64"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s77"/>
    <Cell ss:StyleID="s105"/>
    <Cell ss:StyleID="s105"/>
    <Cell ss:StyleID="s105"/>
    <Cell ss:StyleID="s109"/>
    <Cell ss:StyleID="s110"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s64"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="2" ss:StyleID="m1566880456772"><Data ss:Type="String">4. Dane a poplatky</Data></Cell>
    <Cell ss:StyleID="s70"/>
    <Cell ss:StyleID="s109"/>
    <Cell ss:StyleID="s110"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s64"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s103"/>
    <Cell ss:MergeAcross="2" ss:StyleID="m1566880453424"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m1566880453444"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s64"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s107"/>
    <Cell ss:StyleID="s107"/>
    <Cell ss:StyleID="s106"/>
    <Cell ss:StyleID="s106"/>
    <Cell ss:StyleID="s110"/>
    <Cell ss:StyleID="s110"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s64"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s71"><Data ss:Type="String">5. Iné prevádzkové náklady</Data></Cell>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s73"/>
    <Cell ss:StyleID="s74"/>
    <Cell ss:StyleID="s109"/>
    <Cell ss:StyleID="s110"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s64"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="18">
    <Cell ss:StyleID="s108"/>
    <Cell ss:MergeAcross="2" ss:StyleID="m1566880453464"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m1566880453484"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s64"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s105"/>
    <Cell ss:StyleID="s105"/>
    <Cell ss:StyleID="s105"/>
    <Cell ss:StyleID="s105"/>
    <Cell ss:StyleID="s109"/>
    <Cell ss:StyleID="s110"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s64"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s71"><Data ss:Type="String">6. Odpisy</Data></Cell>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s72"/>
    <Cell ss:StyleID="s74"/>
    <Cell ss:StyleID="s109"/>
    <Cell ss:StyleID="s110"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s64"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="36.75">
    <Cell ss:StyleID="s79"/>
    <Cell ss:MergeAcross="2" ss:StyleID="m1566880453504"><Data ss:Type="String">Odpisy nehmotného a hmotného majetku (hmotný majetok a nehmotný majetok, ktorý súvisí nepriamo s výrobou a rozvodom tepla) </Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m1566880453524"/>
    <Cell ss:StyleID="s81"><Data ss:Type="String"> </Data></Cell>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s64"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s77"/>
    <Cell ss:StyleID="s77"/>
    <Cell ss:StyleID="s77"/>
    <Cell ss:StyleID="s105"/>
    <Cell ss:StyleID="s109"/>
    <Cell ss:StyleID="s110"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s64"/>
   </Row>
   <Row>
    <Cell ss:MergeAcross="2" ss:StyleID="s158"><Data ss:Type="String">7. Finančné náklady</Data></Cell>
    <Cell ss:StyleID="s74"/>
    <Cell ss:StyleID="s109"/>
    <Cell ss:StyleID="s110"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s64"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s80"/>
    <Cell ss:MergeAcross="2" ss:StyleID="m1566880453364"><Data ss:Type="String">Ostatné finančné náklady</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m1566880453384"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s64"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s105"/>
    <Cell ss:StyleID="s105"/>
    <Cell ss:StyleID="s105"/>
    <Cell ss:StyleID="s77"/>
    <Cell ss:StyleID="s77"/>
    <Cell ss:StyleID="s77"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s64"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s105"/>
    <Cell ss:StyleID="s105"/>
    <Cell ss:StyleID="s105"/>
    <Cell ss:StyleID="s75"><ss:Data ss:Type="String"
      xmlns="http://www.w3.org/TR/REC-html40"><B>Spolu</B><Font> </Font></ss:Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m1566880453404"
     ss:Formula="=R[-20]C+R[-17]C+R[-14]C+R[-11]C+R[-8]C+R[-5]C+R[-2]C"><Data
      ss:Type="Number">0</Data></Cell>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s64"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s64"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s65"/>
    <Cell ss:StyleID="s65"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s64"/>
    <Cell ss:StyleID="s66"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
    <Cell ss:StyleID="s81"/>
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
   </Row>
   <Row>
    <Cell ss:StyleID="s67"/>
    <Cell ss:StyleID="s67"/>
    <Cell ss:StyleID="s67"/>
    <Cell ss:StyleID="s68"/>
    <Cell ss:StyleID="s69"/>
    <Cell ss:StyleID="s69"/>
    <Cell ss:StyleID="s69"/>
    <Cell ss:StyleID="s69"/>
    <Cell ss:StyleID="s69"/>
    <Cell ss:StyleID="s69"/>
    <Cell ss:StyleID="s64"/>
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