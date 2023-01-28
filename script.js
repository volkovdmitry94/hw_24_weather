(() => {
    const $card = $('#card');
    const $cityInput = $('#city_input');

    const renderData = (data) => {
        const temp = Math.round(data.main.temp);
        const tempMax = Math.round(data.main.temp_max);
        const tempMin = Math.round(data.main.temp_min);
        const iconSrcLink = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';

        $card.html(`
    <div class="column">
            <h1>${temp}°C</h1>
            <h3 class="italic">${data.name}, ${data.sys.country}</h3>
            <h2>Max: ${tempMax} // Min: ${tempMin}</h2>
            <h3 class="italic">humidity: ${data.main.humidity}%</h3>
    </div>
    <div class="column column2">
        <div>
            <img src="${iconSrcLink}" alt="icon" class="icon">
        </div>
        <h2 class="italic">${data.weather[0].main}</h2>
    </div>`);
    };

    $('#send_btn').on('click', () => {
        const url = 'https://api.openweathermap.org/data/2.5/weather?&appid=8e2394541a5182d2c1aa64972ba1ff15&units=metric&q='
            + $cityInput.val()
        $.ajax(
            url,
            {
                success: (data) => {
                    console.log(data);
                    renderData(data);
                }, error: (error) => {
                    alert(JSON.stringify(error));
                }
            }
        )
        $cityInput.val('');
    });
})();