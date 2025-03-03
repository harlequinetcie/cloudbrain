var datapoints 

nv.addGraph(function() {

  get_datapoints();

  var chart = nv.models.lineWithFocusChart();

  chart.xAxis
      .tickFormat(d3.format("d"));

  chart.yAxis
      .tickFormat(d3.format(',.5f'));

  chart.y2Axis
      .tickFormat(d3.format(',.5f'));

  d3.select('#chart svg')
      .datum(datapoints)
      .transition().duration(50)
      .call(chart);

  nv.utils.windowResize(chart.update);

  return chart;
});



/**************************************
 *  Cloudbrain data */
 



function get_datapoints(){

    $.ajax({
      url : '/data',
      dataType : 'JSON',
      async: false,
      success : function(data) {
         datapoints = data['results'];
      }
    })

  return datapoints;

}


