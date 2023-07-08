Sub ViewSource()
  Dim chromePath As String
  chromePath = """C:\Program Files\Google\Chrome\Application\chrome.exe"""

  Shell (chromePath & "view-source:http://search.yahoo.com/search;_ylt=A0oGdXgbd8FQJXoAuj6l87UF?p=cars%20parts&fr=sfp&pqstr=car%20parts")
End Sub