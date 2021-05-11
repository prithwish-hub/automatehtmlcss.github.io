function GenerateCSS() {
    document.getElementById("resultCard").classList.remove("invisible");
    let result = "";
    if (document.getElementById("background-color").value != "")
        result += "background-color: " + document.getElementById("background-color").value + ";<br>";
    if (document.getElementById("background-image").value != "")
        result += "background-image: " + document.getElementById("background-image").value + ";<br>";
    if (document.getElementById("background-repeat").value != "")
        result += "background-repeat: " + document.getElementById("background-repeat").value + ";<br>";
    if (document.getElementById("background-attachment").value != "")
        result += "background-attachment: " + document.getElementById("background-attachment").value + ";<br>";
    if (document.getElementById("background").value != "")
        result += "background: " + document.getElementById("background").value + ";<br>";

    if (document.getElementById("margin-top").value != "")
        result += "margin-top: " + document.getElementById("margin-top").value + ";<br>";
    if (document.getElementById("margin-bottom").value != "")
        result += "margin-bottom: " + document.getElementById("margin-bottom").value + ";<br>";
    if (document.getElementById("margin-left").value != "")
        result += "margin-left: " + document.getElementById("margin-left").value + ";<br>";
    if (document.getElementById("margin-right").value != "")
        result += "margin-right: " + document.getElementById("margin-right").value + ";<br>";
    if (document.getElementById("margin").value != "")
        result += "margin: " + document.getElementById("margin").value + ";<br>";

    if (document.getElementById("padding-top").value != "")
        result += "padding-top: " + document.getElementById("padding-top").value + ";<br>";
    if (document.getElementById("padding-bottom").value != "")
        result += "padding-bottom: " + document.getElementById("padding-bottom").value + ";<br>";
    if (document.getElementById("padding-left").value != "")
        result += "padding-left: " + document.getElementById("padding-left").value + ";<br>";
    if (document.getElementById("padding-right").value != "")
        result += "padding-right: " + document.getElementById("padding-right").value + ";<br>";
    if (document.getElementById("padding").value != "")
        result += "padding: " + document.getElementById("padding").value + ";<br>";

    if (document.getElementById("border-top").value != "")
        result += "border-top: " + document.getElementById("border-top").value + ";<br>";
    if (document.getElementById("border-left").value != "")
        result += "border-left: " + document.getElementById("border-left").value + ";<br>";
    if (document.getElementById("border-right").value != "")
        result += "border-right : " + document.getElementById("border-right ").value + ";<br>";
    if (document.getElementById("border-bottom").value != "")
        result += "border-bottom: " + document.getElementById("border-bottom").value + ";<br>";
    if (document.getElementById("border-width").value != "")
        result += "border-width: " + document.getElementById("border-width").value + ";<br>";
    if (document.getElementById("border-style").value != "")
        result += "border-style: " + document.getElementById("border-style").value + ";<br>";
    if (document.getElementById("border-radius").value != "")
        result += "border-radius: " + document.getElementById("border-radius").value + ";<br>";
    if (document.getElementById("border-color").value != "")
        result += "border-color: " + document.getElementById("border-color").value + ";<br>";

    if (document.getElementById("height").value != "")
        result += "height: " + document.getElementById("height").value + ";<br>";
    if (document.getElementById("width").value != "")
        result += "width: " + document.getElementById("width").value + ";<br>";

    if (document.getElementById("display").value != "")
        result += "display: " + document.getElementById("display").value + ";<br>";
    if (document.getElementById("text-indent").value != "")
        result += "text-indent: " + document.getElementById("text-indent").value + ";<br>";
    if (document.getElementById("word-spacing").value != "")
        result += "word-spacing: " + document.getElementById("word-spacing").value + ";<br>";
    if (document.getElementById("column-count").value != "")
        result += "column-count: " + document.getElementById("column-count").value + ";<br>";
    if (document.getElementById("list-style-type").value != "")
        result += "list-style-type: " + document.getElementById("list-style-type").value + ";<br>";

    if (document.getElementById("color").value != "")
        result += "color: " + document.getElementById("color").value + ";<br>";
    if (document.getElementById("text-align").value != "")
        result += "text-align: " + document.getElementById("text-align").value + ";<br>";
    if (document.getElementById("text-decoration").value != "")
        result += "text-decoration: " + document.getElementById("text-decoration").value + ";<br>";
    if (document.getElementById("text-transform").value != "")
        result += "text-transform: " + document.getElementById("text-transform").value + ";<br>";
    if (document.getElementById("font-family").value != "")
        result += "font-family: " + document.getElementById("font-family").value + ";<br>";
    if (document.getElementById("font-style").value != "")
        result += "font-style: " + document.getElementById("font-style").value + ";<br>";
    if (document.getElementById("font-weight").value != "")
        result += "font-weight: " + document.getElementById("font-weight").value + ";<br>";
    if (document.getElementById("font-size").value != "")
        result += "font-size: " + document.getElementById("font-size").value + ";<br>";

    document.getElementById("result").innerHTML = result;
    return false;
}