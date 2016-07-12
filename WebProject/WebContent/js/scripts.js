var tmplCurrent = '<table>'+
					'<thead><tr><td colspan="2">Aktuálne počasie {{name}}</td></tr></thead>'+
					'<tbody>'+
					'<tr> <td>Teplota</td> <td>{{main.temp}} °C</td> </tr>'+
					'<tr> <td>Tlak</td> <td>{{main.pressure}} hPa</td> </tr>'+
					'<tr> <td>Vlhkost</td> <td>{{main.humidity}} %</td> </tr>'+
					'<tr> <td>Oblačnosť</td> <td>{{clouds.all}} %</td> </tr>'+
					'</tbody>'+
					'<tfoot><tr><td colspan="2"><p class = "tFoot">Powered by: http://openweathermap.org/</p></td></tr></tfoot>'+
			'</table>';

$.getJSON( "http://api.openweathermap.org/data/2.5/weather",
        {id:"724111",units:'metric',APPID:"8641355d0bdfa52a49f4e9a42560adf0"}, spracuj);

function spracuj(udaje){
	 $("#pocasie").html(Mustache.render(tmplCurrent,udaje));
	}


var tmplForecast = '<table>'+
'<thead><tr><td colspan="2">Predpoveď počasia {{city.name}}</td></tr></thead>'+
'<tbody>'+
'<tr> <td>Kedy</td> {{#list}}<td>{{dt_txt}}</td>{{/list}} </tr>'+
'<tr> <td>Teplota</td> {{#list}}<td>{{main.temp}}°C</td>{{/list}} </tr>'+
'<tr> <td>Oblačnosť</td> {{#list}}<td>{{clouds.all}}%</td>{{/list}} </tr>'+
'<tr> <td>Vlhkosť</td> {{#list}}<td>{{main.humidity}}%</td>{{/list}} </tr>'+
'<tr> <td>Rýchlosť vetra</td> {{#list}}<td>{{wind.speed}}m/s</td>{{/list}} </tr>'+
'<tr> <td>Atm. tlak</td> {{#list}}<td>{{main.pressure}}hPa</td>{{/list}} </tr>'+
'</tbody>'+
'<tfoot><tr><td colspan="2"><p class = "tFoot">Powered by: http://openweathermap.org/</p></td></tr></tfoot>'+
'</table>';

$.getJSON( "http://api.openweathermap.org/data/2.5/forecast", 
{id:"724111",units:'metric',APPID:"8641355d0bdfa52a49f4e9a42560adf0", cnt:"5"}, spracujForecast);

function spracujForecast(udaje){
$("#predpoved").html(Mustache.render(tmplForecast,udaje));
}