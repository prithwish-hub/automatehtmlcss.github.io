function GenerateHtmlforInput(){
    document.getElementById("resultCard").classList.remove("invisible");
    let typeValue=document.getElementById("typeValue").value;
    let className=document.getElementById("className").value;
    let idName=document.getElementById("idName").value;
    let nameName=document.getElementById("nameName").value;
    let placeholderName=document.getElementById("placeholderName").value;
    let patternName=document.getElementById("patternName").value;
    let valueName=document.getElementById("valueName").value;
    let maxValue=document.getElementById("maxValue").value;
    let minValue=document.getElementById("minValue").value;
    let autocompleteCheckbox=document.getElementById("autocompleteCheckbox").checked;
    let autofocusCheckbox=document.getElementById("autofocusCheckbox").checked;
    let checkedCheckbox=document.getElementById("checkedCheckbox").checked;
    let requiredCheckbox=document.getElementById("requiredCheckbox").checked;
    let readonlyCheckbox=document.getElementById("readonlyCheckbox").checked;
    let disabledCheckbox=document.getElementById("disabledCheckbox").checked;
    let result='&lt;input type="'+typeValue+'" ';
    if(className!="")
        result+='class="'+className+'" ';
    if(idName!="")
        result+='id="'+idName+'" ';
    if(nameName!="")
        result+='name="'+nameName+'" ';
    if(placeholderName!="")
        result+='placeholder="'+placeholderName+'" ';
    if(patternName!="")
        result+='pattern="'+patternName+'" ';
    if(valueName!="")
        result+='value="'+valueName+'" ';
    if(maxValue!="")
        result+='max="'+maxValue+'" ';
    if(minValue!="")
        result+='min="'+minValue+'" ';
    if(autocompleteCheckbox)
        result+='autocomplete ';
    if(autofocusCheckbox)
        result+='autofocus ';
    if(checkedCheckbox)
        result+='checked ';
    if(requiredCheckbox)
        result+='required ';
    if(readonlyCheckbox)
        result+='readonly ';
    if(disabledCheckbox)
        result+='disabled ';
    result+=' &gt;';
    document.getElementById("result").innerHTML=result;
    return false;
}

function GenerateHtmlforButton(){
    document.getElementById("resultCard").classList.remove("invisible");
    let typeValue=document.getElementById("typeValue").value;
    let className=document.getElementById("className").value;
    let idName=document.getElementById("idName").value;
    let nameName=document.getElementById("nameName").value;
    let valueName=document.getElementById("valueName").value;
    let autofocusCheckbox=document.getElementById("autofocusCheckbox").checked;
    let disabledCheckbox=document.getElementById("disabledCheckbox").checked;
    let result='&lt;button ';
    if(typeValue!="Open this select menu")
        result+='type="'+typeValue+'" ';
    if(className!="")
        result+='class="'+className+'" ';
    if(idName!="")
        result+='id="'+idName+'" ';
    if(nameName!="")
        result+='name="'+nameName+'" ';
    if(valueName!="")
        result+='value="'+valueName+'" ';
    if(autofocusCheckbox)
        result+='autofocus ';
    if(disabledCheckbox)
        result+='disabled ';
    result+=' &gt;&lt;/button&gt;';
    document.getElementById("result").innerHTML=result;
    return false;
}

function GenerateHtmlforTextarea(){
    document.getElementById("resultCard").classList.remove("invisible");
    let className=document.getElementById("className").value;
    let idName=document.getElementById("idName").value;
    let nameName=document.getElementById("nameName").value;
    let placeholderName=document.getElementById("placeholderName").value;
    let maxlengthValue=document.getElementById("maxlengthValue").value;
    let colsValue=document.getElementById("colsValue").value;
    let rowsValue=document.getElementById("rowsValue").value;
    let autofocusCheckbox=document.getElementById("autofocusCheckbox").checked;
    let requiredCheckbox=document.getElementById("requiredCheckbox").checked;
    let readonlyCheckbox=document.getElementById("readonlyCheckbox").checked;
    let disabledCheckbox=document.getElementById("disabledCheckbox").checked;
    let result='&lt;textarea ';
    if(className!="")
        result+='class="'+className+'" ';
    if(idName!="")
        result+='id="'+idName+'" ';
    if(nameName!="")
        result+='name="'+nameName+'" ';
    if(placeholderName!="")
        result+='placeholder="'+placeholderName+'" ';
    if(colsValue!="")
        result+='cols="'+colsValue+'" ';
    if(rowsValue!="")
        result+='rows="'+rowsValue+'" ';
    if(maxlengthValue!="")
        result+='maxlength="'+maxlengthValue+'" '
    if(autofocusCheckbox)
        result+='autofocus ';
    if(requiredCheckbox)
        result+='required ';
    if(readonlyCheckbox)
        result+='readonly ';
    if(disabledCheckbox)
        result+='disabled ';
    result+='&gt;&lt;textarea&gt;';
    document.getElementById("result").innerHTML=result;
    return false;
}

function GenerateHtmlforSelect(){
    document.getElementById("resultCard").classList.remove("invisible");
    let className=document.getElementById("className").value;
    let idName=document.getElementById("idName").value;
    let nameName=document.getElementById("nameName").value;
    let autofocusCheckbox=document.getElementById("autofocusCheckbox").checked;
    let requiredCheckbox=document.getElementById("requiredCheckbox").checked;
    let disabledCheckbox=document.getElementById("disabledCheckbox").checked;
    let result='&lt;select ';
    if(className!="")
        result+='class="'+className+'" ';
    if(idName!="")
        result+='id="'+idName+'" ';
    if(nameName!="")
        result+='name="'+nameName+'" ';
    if(autofocusCheckbox)
        result+='autofocus ';
    if(requiredCheckbox)
        result+='required ';
    if(disabledCheckbox)
        result+='disabled ';
    result+=' &gt;&lt;select&gt;';
    document.getElementById("result").innerHTML=result;
    return false;
}

function GenerateHtmlforOption(){
    document.getElementById("resultCard").classList.remove("invisible");
    let valueName=document.getElementById("valueName").value;
    let labelName=document.getElementById("labelName").value;
    let selectedCheckbox=document.getElementById("selectedCheckbox").checked;
    let disabledCheckbox=document.getElementById("disabledCheckbox").checked;
    let result='&lt;option ';
    if(valueName!="")
        result+='value="'+valueName+'" ';
    if(labelName!="")
        result+='label="'+labelName+'" ';
    if(selectedCheckbox)
        result+='selected ';
    if(disabledCheckbox)
        result+='disabled ';
    result+=' &gt;'+valueName+'&lt;option&gt;';
    document.getElementById("result").innerHTML=result;
    return false;
}

function GenerateHtmlforLabel(){
    document.getElementById("resultCard").classList.remove("invisible");
    let forName=document.getElementById("forName").value;
    let result='&lt;label for="'+forName+'"';
    result+=' &gt;'+forName+'&lt;lable&gt;';
    document.getElementById("result").innerHTML=result;
    return false;
}

function GenerateHtmlforHeadings(){
    document.getElementById("resultCard").classList.remove("invisible");
    let hValue=document.getElementById("hValue").value;
    let className=document.getElementById("className").value;
    let idName=document.getElementById("idName").value;
    let content=document.getElementById("content").value;
    let result='&lt;h'+hValue+' ';
    if(className!="")
        result+='class="'+className+'" ';
    if(idName!="")
        result+='id="'+idName+'" ';
    if(content!="")
        result+="&gt;"+content+'&lt;/h'+hValue+'&gt;';
    else
        result+='&gt;&lt;/h'+hValue+'&gt;'
    document.getElementById("result").innerHTML=result;
    return false;
}

function GenerateHtmlforParagraph(){
    document.getElementById("resultCard").classList.remove("invisible");
    let className=document.getElementById("className").value;
    let idName=document.getElementById("idName").value;
    let content=document.getElementById("content").value;
    let result='&lt;p ';
    if(className!="")
        result+='class="'+className+'" ';
    if(idName!="")
        result+='id="'+idName+'" ';
    if(content!="")
        result+="&gt;"+content+'&lt;/p&gt;';
    else
        result+='&gt;&lt;/p&gt;'
    document.getElementById("result").innerHTML=result;
    return false;
}

function GenerateHtmlforAbbreviation(){
    document.getElementById("resultCard").classList.remove("invisible");
    let className=document.getElementById("className").value;
    let idName=document.getElementById("idName").value;
    let titleValue=document.getElementById("titleValue").value;
    let abbreviation=document.getElementById("abbreviation").value;
    let result='&lt;abbr ';
    if(className!="")
        result+='class="'+className+'" ';
    if(idName!="")
        result+='id="'+idName+'" ';
    result+='title="'+titleValue+'"&gt;'+abbreviation+'&lt;/abbr&gt';
    document.getElementById("result").innerHTML=result;
    return false;
}

function GenerateHtmlforImage(){
    document.getElementById("resultCard").classList.remove("invisible");
    let className=document.getElementById("className").value;
    let idName=document.getElementById("idName").value;
    let source=document.getElementById("source").value;
    let altValue=document.getElementById("altValue").value;
    let widthValue=document.getElementById("widthValue").value;
    let heightValue=document.getElementById("heightValue").value;
    result='&lt;img src="'+source+'" ';
    if(className!="")
        result+='class="'+className+'" ';
    if(idName!="")
        result+='id="'+idName+'" ';
    if(altValue!="")
        result+='alt="'+altValue+'" ';
    if(widthValue!="")
        result+='width="'+widthValue+'" ';
    if(heightValue!="")
        result+='height="'+heightValue+'" ';
    result+='&gt;';
    document.getElementById("result").innerHTML=result;
    return false;
}

function GenerateHtmlforAudio(){
    document.getElementById("resultCard").classList.remove("invisible");
    let className=document.getElementById("className").value;
    let idName=document.getElementById("idName").value;
    let source=document.getElementById("source").value;
    let preloadValue=document.getElementById("preloadValue").value;
    result='&lt;audio src="'+source+'" ';
    if(className!="")
        result+='class="'+className+'" ';
    if(idName!="")
        result+='id="'+idName+'" ';
    if(preloadValue!='none')
        result+='preload="'+preloadValue+'" ';
    if(document.getElementById("autoplayCheckbox").checked)
        result+='autoplay ';
    if(document.getElementById("controlsCheckbox").checked)
        result+='controls '
    if(document.getElementById("loopCheckbox").checked)
        result+='loop ';
    if(document.getElementById("mutedCheckbox").checked)
        result+='muted ';
    result+='&gt;';
    document.getElementById("result").innerHTML=result;
    return false;
}

function GenerateHtmlforVideo(){
    document.getElementById("resultCard").classList.remove("invisible");
    let className=document.getElementById("className").value;
    let idName=document.getElementById("idName").value;
    let source=document.getElementById("source").value;
    let preloadValue=document.getElementById("preloadValue").value;
    let widthValue=document.getElementById("widthValue").value;
    let heightValue=document.getElementById("heightValue").value;
    result='&lt;video src="'+source+'" ';
    if(className!="")
        result+='class="'+className+'" ';
    if(idName!="")
        result+='id="'+idName+'" ';
    if(preloadValue!='none')
        result+='preload="'+preloadValue+'" ';
    if(widthValue!="")
        result+='width="'+widthValue+'" ';
    if(heightValue!="")
        result+='height="'+heightValue+'" ';
    if(document.getElementById("autoplayCheckbox").checked)
        result+='autoplay ';
    if(document.getElementById("controlsCheckbox").checked)
        result+='controls '
    if(document.getElementById("loopCheckbox").checked)
        result+='loop ';
    if(document.getElementById("mutedCheckbox").checked)
        result+='muted ';
    result+='&gt;';
    document.getElementById("result").innerHTML=result;
    return false;
}

function GenerateHtmlforAnchor(){
    document.getElementById("resultCard").classList.remove("invisible");
    let className=document.getElementById("className").value;
    let idName=document.getElementById("idName").value;
    let href=document.getElementById("href").value;
    let targetValue=document.getElementById("targetValue").value;
    let typeValue=document.getElementById("typeValue").value;
    result='&lt;a href="'+href+'" ';
    if(className!="")
        result+='class="'+className+'" ';
    if(idName!="")
        result+='id="'+idName+'" ';
    if(targetValue!='none')
        result+='target="'+targetValue+'" ';
    if(typeValue!="none")
        result+='type="'+typeValue+'" ';
    result+='&gt;';
    document.getElementById("result").innerHTML=result;
    return false;
}