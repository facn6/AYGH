

function getSelectValue()
{
    var selectedValue = document.getElementById("list").value;
    fetch(`/${selectedValue}`).then((res)=>{
        return res.json();
    }).then((data)=>{
        var result = document.getElementById('result1');
        while (result.hasChildNodes()) {
            result.removeChild(result.firstChild);
        }


        for(let i=0;i<data[sources].length;i++){
        var card=document.createElement('div');
        card.setAttribute('class','card');
        card.setAttribute('id',i);


        var label = document.createElement('label');
        label.innerHTML = data.sources[i].name;

        card.appendChild(label);
        var link = document.createElement('h');
        link.href = data.sources[i].url;
        link.innerHTML ="Check the channel's website";
        card.appendChild(link);

        result.appendChild(card);
    }
});

}
