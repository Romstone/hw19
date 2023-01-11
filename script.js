(() => {
    //elements
    const width = document.getElementById('input_width');
    const height = document.getElementById('input_height');
    const radius = document.getElementById('input_radius');
    const color = document.getElementById('input_color');
    const count = document.getElementById('input_count');
    const divOutput = document.getElementById('playground');

    //show_button
    document.getElementById('btn_show').addEventListener('click', () => {
        divOutput.innerHTML= ''; //clearing div
        for (let i = 0; i < count.value; i++) {
            const divNew = document.createElement('div');
            divNew.style.width = width.value + 'px';
            divNew.style.height = height.value + 'px';
            divNew.style.borderRadius = radius.value + 'px';
            divNew.style.backgroundColor = color.value;
            divNew.style.margin = '5px auto';
            console.log(divOutput);
            divOutput.appendChild(divNew);
        }
        width.value = '';
        height.value = '';
        radius.value = '';
        count.value = '';
    });
})();