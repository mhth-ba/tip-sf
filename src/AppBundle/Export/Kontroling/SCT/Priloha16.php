<?php

namespace AppBundle\Export\Kontroling\SCT;

class Priloha16
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
 xmlns:dt="uuid:C2F41010-65B3-11d1-A29F-00AA00C14882"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:html="http://www.w3.org/TR/REC-html40">
 <DocumentProperties xmlns="urn:schemas-microsoft-com:office:office">
  <Author>Microsoft Corporation</Author>
  <Created>1997-01-24T11:07:25Z</Created>
  <Company>Microsoft Corporation</Company>
  <Version>16.00</Version>
 </DocumentProperties>
 <CustomDocumentProperties xmlns="urn:schemas-microsoft-com:office:office">
  <ContentTypeId dt:dt="string">0x0101009CE3EB755520F5478FC9C9D4B416F101</ContentTypeId>
 </CustomDocumentProperties>
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
  <Style ss:ID="s16" ss:Name="Mena">
   <NumberFormat
    ss:Format="_-* #,##0.00\ &quot;Kč&quot;_-;\-* #,##0.00\ &quot;Kč&quot;_-;_-* &quot;-&quot;??\ &quot;Kč&quot;_-;_-@_-"/>
  </Style>
  <Style ss:ID="m1969907293448">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m1969907293488">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m1969907285700">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m1969907285740">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m1969907285780">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="m1969907290720" ss:Parent="s16">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
  </Style>
  <Style ss:ID="m1969907290740">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
  </Style>
  <Style ss:ID="m1969907290760">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
  </Style>
  <Style ss:ID="m1969907290780">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
  </Style>
  <Style ss:ID="m1969907290800">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="2"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
  </Style>
  <Style ss:ID="m1969907290820">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
  </Style>
  <Style ss:ID="m1969907290840">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="2"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
  </Style>
  <Style ss:ID="m1969907290860">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
  </Style>
  <Style ss:ID="m1969907290880">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
  </Style>
  <Style ss:ID="m1969907290900">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="9"/>
   <Interior/>
  </Style>
  <Style ss:ID="m1969907293744">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
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
  <Style ss:ID="m1969907293764">
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
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="m1969907293844">
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
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="m1969907293864">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
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
  <Style ss:ID="m1969907293904" ss:Parent="s16">
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
  <Style ss:ID="m1969907278980">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="m1969907279000">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="m1969907279020">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="m1969907279040">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="2"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="2"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="m1969907289040">
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
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="m1969907289060">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
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
  <Style ss:ID="m1969907289120">
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
  <Style ss:ID="s17">
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s18">
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss"/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s19">
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss"/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s20">
   <Alignment ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss"/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s21">
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss"/>
   <NumberFormat ss:Format="@"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s22">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <NumberFormat ss:Format="@"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s23">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s24">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection/>
  </Style>
  <Style ss:ID="s25">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s26">
   <Alignment ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <NumberFormat ss:Format="@"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s27">
   <Alignment ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection/>
  </Style>
  <Style ss:ID="s28">
   <Alignment ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"
    ss:Bold="1"/>
   <NumberFormat ss:Format="0.0"/>
   <Protection/>
  </Style>
  <Style ss:ID="s29">
   <Alignment ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <NumberFormat ss:Format="@"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s30">
   <Alignment ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="12"
    ss:Bold="1"/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s31">
   <Alignment ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238"/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s32">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s33">
   <Alignment ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s35">
   <Alignment ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s36">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s37">
   <Alignment ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="12"
    ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s38">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s39">
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s40">
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s41">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s42">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s43">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="2"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s44">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="2"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s45">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s46">
   <Alignment ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s47">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s48">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection/>
  </Style>
  <Style ss:ID="s49">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="0.000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s50">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s51">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s52">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="0.0000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s53">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="0.0000"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s54">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="2"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="Fixed"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s55">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s56">
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
   <NumberFormat ss:Format="@"/>
   <Protection/>
  </Style>
  <Style ss:ID="s57">
   <Alignment ss:Horizontal="Right" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="#,##0.0"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s58">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Bold="1"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s119">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s122">
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
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s126">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s146">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
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
  <Style ss:ID="s147">
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
   <NumberFormat ss:Format="@"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s148">
   <Alignment ss:Horizontal="Center" ss:Vertical="Bottom"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
  </Style>
  <Style ss:ID="s151" ss:Parent="s16">
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
  </Style>
  <Style ss:ID="s155" ss:Parent="s16">
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
  </Style>
  <Style ss:ID="s170">
   <Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="@"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s173">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <Interior/>
   <NumberFormat ss:Format="Standard"/>
   <Protection ss:Protected="0"/>
  </Style>
  <Style ss:ID="s174">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Arial CE" x:CharSet="238" x:Family="Swiss" ss:Size="8"/>
   <NumberFormat ss:Format="Standard"/>
   <Protection ss:Protected="0"/>
  </Style>
 </Styles>
 <Worksheet ss:Name="Príloha č. 16">
  <Table ss:ExpandedColumnCount="18" ss:ExpandedRowCount="37" x:FullColumns="1"
   x:FullRows="1">
   <Column ss:AutoFitWidth="0" ss:Width="30"/>
   <Column ss:AutoFitWidth="0" ss:Width="58.5"/>
   <Column ss:AutoFitWidth="0" ss:Width="113.25"/>
   <Column ss:Index="13" ss:AutoFitWidth="0" ss:Width="29.25"/>
   <Column ss:AutoFitWidth="0" ss:Width="24"/>
   <Row ss:AutoFitHeight="0" ss:Height="18">
    <Cell ss:StyleID="s58"><Data ss:Type="String">OBCHODNÉ TAJOMSTVO</Data></Cell>
    <Cell ss:StyleID="s32"/>
    <Cell ss:StyleID="s32"/>
    <Cell ss:StyleID="s32"/>
    <Cell ss:StyleID="s32"/>
    <Cell ss:StyleID="s32"/>
    <Cell ss:StyleID="s32"/>
    <Cell ss:StyleID="s32"/>
    <Cell ss:StyleID="s32"/>
    <Cell ss:StyleID="s33"><Data ss:Type="String">Príloha č. 16 k vyhláške č. 248/2016 Z. z.</Data></Cell>
    <Cell ss:StyleID="s33"/>
    <Cell ss:StyleID="s33"/>
    <Cell ss:StyleID="s33"/>
    <Cell ss:StyleID="s33"/>
    <Cell ss:StyleID="s31"/>
    <Cell ss:StyleID="s17"/>
    <Cell ss:StyleID="s17"/>
    <Cell ss:StyleID="s17"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="15">
    <Cell ss:StyleID="s32"/>
    <Cell ss:StyleID="s32"/>
    <Cell ss:StyleID="s32"/>
    <Cell ss:StyleID="s32"/>
    <Cell ss:StyleID="s32"/>
    <Cell ss:StyleID="s32"/>
    <Cell ss:StyleID="s32"/>
    <Cell ss:StyleID="s32"/>
    <Cell ss:StyleID="s32"/>
    <Cell ss:StyleID="s35"/>
    <Cell ss:StyleID="s35"/>
    <Cell ss:StyleID="s36"/>
    <Cell ss:StyleID="s36"/>
    <Cell ss:StyleID="s36"/>
    <Cell ss:StyleID="s17"/>
    <Cell ss:StyleID="s17"/>
    <Cell ss:StyleID="s17"/>
    <Cell ss:StyleID="s17"/>
   </Row>
   <Row ss:Height="15.75">
    <Cell ss:StyleID="s37"><Data ss:Type="String">            Údaje o odberných miestach </Data></Cell>
    <Cell ss:StyleID="s37"/>
    <Cell ss:StyleID="s37"/>
    <Cell ss:StyleID="s37"/>
    <Cell ss:StyleID="s37"/>
    <Cell ss:StyleID="s37"/>
    <Cell ss:StyleID="s37"/>
    <Cell ss:StyleID="s37"/>
    <Cell ss:StyleID="s37"/>
    <Cell ss:StyleID="s37"/>
    <Cell ss:StyleID="s37"/>
    <Cell ss:StyleID="s37"/>
    <Cell ss:StyleID="s37"/>
    <Cell ss:StyleID="s37"/>
    <Cell ss:StyleID="s30"/>
    <Cell ss:StyleID="s30"/>
    <Cell ss:StyleID="s30"/>
    <Cell ss:StyleID="s30"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s38"/>
    <Cell ss:StyleID="s38"/>
    <Cell ss:StyleID="s38"/>
    <Cell ss:StyleID="s38"/>
    <Cell ss:StyleID="s38"/>
    <Cell ss:StyleID="s38"/>
    <Cell ss:StyleID="s38"/>
    <Cell ss:StyleID="s38"/>
    <Cell ss:StyleID="s38"/>
    <Cell ss:StyleID="s38"/>
    <Cell ss:StyleID="s38"/>
    <Cell ss:StyleID="s38"/>
    <Cell ss:StyleID="s38"/>
    <Cell ss:StyleID="s39"/>
    <Cell ss:StyleID="s18"/>
    <Cell ss:StyleID="s18"/>
    <Cell ss:StyleID="s18"/>
    <Cell ss:StyleID="s18"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:MergeAcross="1" ss:StyleID="m1969907289040"><Data ss:Type="String">Regulovaný subjekt: </Data></Cell>
    <Cell ss:MergeAcross="11" ss:StyleID="m1969907289060"><Data ss:Type="String">Bratislavská teplárenská, a.s.</Data></Cell>
    <Cell ss:StyleID="s18"/>
    <Cell ss:StyleID="s18"/>
    <Cell ss:StyleID="s18"/>
    <Cell ss:StyleID="s18"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:MergeAcross="1" ss:StyleID="s122"><Data ss:Type="String">Sídlo / adresa trvalého pobytu:</Data></Cell>
    <Cell ss:MergeAcross="7" ss:StyleID="s119"><Data ss:Type="String">Turbínová 3, 829 05 Bratislava - mestská časť Nové Mesto</Data></Cell>
    <Cell ss:StyleID="s56"><Data ss:Type="String">IČO:</Data></Cell>
    <Cell ss:MergeAcross="2" ss:StyleID="m1969907289120"><Data ss:Type="Number">35823542</Data></Cell>
    <Cell ss:StyleID="s18"/>
    <Cell ss:StyleID="s18"/>
    <Cell ss:StyleID="s18"/>
    <Cell ss:StyleID="s18"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:MergeAcross="1" ss:StyleID="m1969907293844"><Data ss:Type="String">Číslo povolenia:</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m1969907293864"><Data ss:Type="String">2005T 0040</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s151"><Data ss:Type="String">Meno a priezvisko kontaktnej osoby:</Data></Cell>
    <Cell ss:MergeAcross="3" ss:StyleID="m1969907293904"><Data ss:Type="String">Ing. Martin Bíreš</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s155"><Data ss:Type="String">Telefónne číslo:</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="m1969907293744"><Data ss:Type="String">02/57 372 336</Data></Cell>
    <Cell ss:StyleID="s18"/>
    <Cell ss:StyleID="s18"/>
    <Cell ss:StyleID="s18"/>
    <Cell ss:StyleID="s18"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:MergeAcross="1" ss:StyleID="m1969907293764"><Data ss:Type="String">Regulačný rok:</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s146"><Data ss:Type="String">'
            . $this->getRok() .
    '</Data></Cell>
    <Cell ss:MergeAcross="9" ss:StyleID="s147"/>
    <Cell ss:StyleID="s18"/>
    <Cell ss:StyleID="s18"/>
    <Cell ss:StyleID="s18"/>
    <Cell ss:StyleID="s18"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s40"/>
    <Cell ss:MergeAcross="12" ss:StyleID="s148"/>
    <Cell ss:StyleID="s18"/>
    <Cell ss:StyleID="s18"/>
    <Cell ss:StyleID="s18"/>
    <Cell ss:StyleID="s18"/>
   </Row>
   <Row ss:AutoFitHeight="0">
    <Cell ss:MergeDown="3" ss:StyleID="s126"><Data ss:Type="String">Por. číslo</Data></Cell>
    <Cell ss:MergeAcross="1" ss:MergeDown="3" ss:StyleID="m1969907278980"><Data
      ss:Type="String">Adresa odberného miesta, názov odberateľa </Data></Cell>
    <Cell ss:MergeDown="3" ss:StyleID="m1969907279000"><Data ss:Type="String">Počet bytov </Data></Cell>
    <Cell ss:MergeAcross="2" ss:MergeDown="1" ss:StyleID="m1969907279020"><Data
      ss:Type="String">Spotreba tepla (GWh)</Data></Cell>
    <Cell ss:MergeAcross="2" ss:MergeDown="1" ss:StyleID="m1969907279040"><Data
      ss:Type="String">Regulačný príkon (kW)</Data></Cell>
    <Cell ss:MergeAcross="3" ss:MergeDown="1" ss:StyleID="m1969907290720"><Data
      ss:Type="String">Celkové náklady (eur)</Data></Cell>
    <Cell ss:StyleID="s18"/>
    <Cell ss:StyleID="s18"/>
    <Cell ss:StyleID="s18"/>
    <Cell ss:StyleID="s18"/>
   </Row>
   <Row>
    <Cell ss:Index="15" ss:StyleID="s19"/>
    <Cell ss:StyleID="s18"/>
    <Cell ss:StyleID="s18"/>
    <Cell ss:StyleID="s18"/>
   </Row>
   <Row ss:AutoFitHeight="0" ss:Height="22.5">
    <Cell ss:Index="5" ss:MergeDown="1" ss:StyleID="m1969907290740"><Data
      ss:Type="Number">2016</Data></Cell>
    <Cell ss:MergeDown="1" ss:StyleID="m1969907290760"><Data ss:Type="Number">2017</Data></Cell>
    <Cell ss:MergeDown="1" ss:StyleID="m1969907290780"><Data ss:Type="Number">2018</Data></Cell>
    <Cell ss:MergeDown="1" ss:StyleID="m1969907290800"><Data ss:Type="Number">2016</Data></Cell>
    <Cell ss:MergeDown="1" ss:StyleID="m1969907290820"><Data ss:Type="Number">2017</Data></Cell>
    <Cell ss:MergeDown="1" ss:StyleID="m1969907290840"><Data ss:Type="Number">2018</Data></Cell>
    <Cell ss:MergeDown="1" ss:StyleID="m1969907290860"><Data ss:Type="Number">2016</Data></Cell>
    <Cell ss:MergeDown="1" ss:StyleID="m1969907290880"><Data ss:Type="Number">2017</Data></Cell>
    <Cell ss:MergeAcross="1" ss:MergeDown="1" ss:StyleID="m1969907290900"><Data
      ss:Type="Number">2018</Data></Cell>
    <Cell ss:StyleID="s20"/>
    <Cell ss:StyleID="s18"/>
    <Cell ss:StyleID="s18"/>
    <Cell ss:StyleID="s18"/>
   </Row>
   <Row>
    <Cell ss:Index="15" ss:StyleID="s20"/>
    <Cell ss:StyleID="s18"/>
    <Cell ss:StyleID="s18"/>
    <Cell ss:StyleID="s18"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s41"><Data ss:Type="String">1</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s170"/>
    <Cell ss:StyleID="s51"/>
    <Cell ss:StyleID="s52"/>
    <Cell ss:StyleID="s52"/>
    <Cell ss:StyleID="s53"/>
    <Cell ss:StyleID="s43"/>
    <Cell ss:StyleID="s42"/>
    <Cell ss:StyleID="s54"/>
    <Cell ss:StyleID="s57"/>
    <Cell ss:StyleID="s55"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m1969907285700"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s41"><Data ss:Type="String">2</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s170"/>
    <Cell ss:StyleID="s51"/>
    <Cell ss:StyleID="s52"/>
    <Cell ss:StyleID="s52"/>
    <Cell ss:StyleID="s53"/>
    <Cell ss:StyleID="s43"/>
    <Cell ss:StyleID="s42"/>
    <Cell ss:StyleID="s44"/>
    <Cell ss:StyleID="s57"/>
    <Cell ss:StyleID="s55"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m1969907285740"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s41"><Data ss:Type="String">3</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s170"/>
    <Cell ss:StyleID="s51"/>
    <Cell ss:StyleID="s52"/>
    <Cell ss:StyleID="s52"/>
    <Cell ss:StyleID="s53"/>
    <Cell ss:StyleID="s43"/>
    <Cell ss:StyleID="s42"/>
    <Cell ss:StyleID="s44"/>
    <Cell ss:StyleID="s57"/>
    <Cell ss:StyleID="s55"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m1969907285780"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s41"><Data ss:Type="String">4</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s170"/>
    <Cell ss:StyleID="s51"/>
    <Cell ss:StyleID="s52"/>
    <Cell ss:StyleID="s52"/>
    <Cell ss:StyleID="s53"/>
    <Cell ss:StyleID="s43"/>
    <Cell ss:StyleID="s42"/>
    <Cell ss:StyleID="s44"/>
    <Cell ss:StyleID="s57"/>
    <Cell ss:StyleID="s55"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m1969907293448"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s41"><Data ss:Type="String">5</Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="s170"/>
    <Cell ss:StyleID="s51"/>
    <Cell ss:StyleID="s52"/>
    <Cell ss:StyleID="s52"/>
    <Cell ss:StyleID="s53"/>
    <Cell ss:StyleID="s43"/>
    <Cell ss:StyleID="s42"/>
    <Cell ss:StyleID="s44"/>
    <Cell ss:StyleID="s57"/>
    <Cell ss:StyleID="s55"/>
    <Cell ss:MergeAcross="1" ss:StyleID="m1969907293488"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s45"/>
    <Cell ss:StyleID="s46"/>
    <Cell ss:StyleID="s46"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s49"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:MergeAcross="1" ss:StyleID="s173"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s45"/>
    <Cell ss:StyleID="s46"/>
    <Cell ss:StyleID="s46"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s49"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:MergeAcross="1" ss:StyleID="s173"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s50"><Data ss:Type="String">Vysvetlivky:</Data></Cell>
    <Cell ss:StyleID="s46"/>
    <Cell ss:StyleID="s46"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s49"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:MergeAcross="1" ss:StyleID="s173"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s45"/>
    <Cell ss:StyleID="s46"><Data ss:Type="String">- V riadkoch 1 až 5 sa uvedú údaje o piatich odberných miestach rovnakých počas celého regulačného obdobia podľa výberu dodávateľa tepla. </Data></Cell>
    <Cell ss:StyleID="s46"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s49"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:MergeAcross="1" ss:StyleID="s173"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s45"/>
    <Cell ss:StyleID="s46"><Data ss:Type="String">- Celkove naklady za odberne miesto sú vrátane dane z pridanej hodnoty.</Data></Cell>
    <Cell ss:StyleID="s46"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s49"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:MergeAcross="1" ss:StyleID="s173"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s45"/>
    <Cell ss:StyleID="s46"/>
    <Cell ss:StyleID="s46"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s49"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:MergeAcross="1" ss:StyleID="s173"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s45"/>
    <Cell ss:StyleID="s46"/>
    <Cell ss:StyleID="s46"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s49"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:MergeAcross="1" ss:StyleID="s173"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s45"/>
    <Cell ss:StyleID="s46"/>
    <Cell ss:StyleID="s46"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s49"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:MergeAcross="1" ss:StyleID="s173"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s45"/>
    <Cell ss:StyleID="s46"/>
    <Cell ss:StyleID="s46"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s49"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:MergeAcross="1" ss:StyleID="s173"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s45"/>
    <Cell ss:StyleID="s46"/>
    <Cell ss:StyleID="s46"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s49"/>
    <Cell ss:StyleID="s48"/>
    <Cell ss:StyleID="s47"/>
    <Cell ss:MergeAcross="1" ss:StyleID="s173"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s22"/>
    <Cell ss:StyleID="s29"/>
    <Cell ss:StyleID="s29"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s24"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s24"/>
    <Cell ss:StyleID="s25"/>
    <Cell ss:StyleID="s24"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:MergeAcross="1" ss:StyleID="s174"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s22"/>
    <Cell ss:StyleID="s29"/>
    <Cell ss:StyleID="s29"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s24"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s24"/>
    <Cell ss:StyleID="s25"/>
    <Cell ss:StyleID="s24"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:MergeAcross="1" ss:StyleID="s174"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s22"/>
    <Cell ss:StyleID="s29"/>
    <Cell ss:StyleID="s29"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s24"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s24"/>
    <Cell ss:StyleID="s25"/>
    <Cell ss:StyleID="s24"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:MergeAcross="1" ss:StyleID="s174"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s22"/>
    <Cell ss:StyleID="s29"/>
    <Cell ss:StyleID="s29"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s24"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s24"/>
    <Cell ss:StyleID="s25"/>
    <Cell ss:StyleID="s24"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:MergeAcross="1" ss:StyleID="s174"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s22"/>
    <Cell ss:StyleID="s29"/>
    <Cell ss:StyleID="s29"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s24"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s24"/>
    <Cell ss:StyleID="s25"/>
    <Cell ss:StyleID="s24"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:MergeAcross="1" ss:StyleID="s174"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s22"/>
    <Cell ss:StyleID="s29"/>
    <Cell ss:StyleID="s29"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s24"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s24"/>
    <Cell ss:StyleID="s25"/>
    <Cell ss:StyleID="s24"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:MergeAcross="1" ss:StyleID="s174"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s22"/>
    <Cell ss:StyleID="s29"/>
    <Cell ss:StyleID="s29"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s24"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:StyleID="s24"/>
    <Cell ss:StyleID="s25"/>
    <Cell ss:StyleID="s24"/>
    <Cell ss:StyleID="s23"/>
    <Cell ss:MergeAcross="1" ss:StyleID="s174"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s26"/>
    <Cell ss:StyleID="s26"/>
    <Cell ss:StyleID="s26"/>
    <Cell ss:StyleID="s27"/>
    <Cell ss:StyleID="s27"/>
    <Cell ss:StyleID="s28"/>
    <Cell ss:StyleID="s27"/>
    <Cell ss:StyleID="s27"/>
    <Cell ss:StyleID="s27"/>
    <Cell ss:StyleID="s28"/>
    <Cell ss:StyleID="s27"/>
    <Cell ss:StyleID="s27"/>
    <Cell ss:StyleID="s27"/>
    <Cell ss:StyleID="s27"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
   </Row>
   <Row>
    <Cell ss:StyleID="s26"/>
    <Cell ss:StyleID="s26"/>
    <Cell ss:StyleID="s26"/>
    <Cell ss:StyleID="s27"/>
    <Cell ss:StyleID="s27"/>
    <Cell ss:StyleID="s28"/>
    <Cell ss:StyleID="s27"/>
    <Cell ss:StyleID="s27"/>
    <Cell ss:StyleID="s27"/>
    <Cell ss:StyleID="s28"/>
    <Cell ss:StyleID="s27"/>
    <Cell ss:StyleID="s27"/>
    <Cell ss:StyleID="s27"/>
    <Cell ss:StyleID="s27"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
    <Cell ss:StyleID="s21"/>
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