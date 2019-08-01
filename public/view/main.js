

function getSelectValue() {
  const selectedValue = document.getElementById('list').value;
  fetch(`/${selectedValue}`).then(res => res.json()).then((data) => {
    const result = document.getElementById('result1');
    while (result.hasChildNodes()) {
      result.removeChild(result.firstChild);
    }


    for (let i = 0; i < data[sources].length; i++) {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');
      card.setAttribute('id', i);

      const label = document.createElement('label');
      label.innerHTML = data.sources[i].name;

      card.appendChild(label);
      const link = document.createElement('h');
      link.href = data.sources[i].url;
      link.innerHTML = "Check the channel's website";
      card.appendChild(link);

      result.appendChild(card);
    }
  });
}
