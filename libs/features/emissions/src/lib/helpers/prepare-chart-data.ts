import { Emission, EmmisionTimeSeries, Vessel } from "@vessels-workspace/api";

type EmmisionTimeSeriesKey = keyof Omit<EmmisionTimeSeries, 'report_from_utc' | 'report_to_utc'>;

export const prepareChartData = (vessel: Vessel, emission: Emission): Highcharts.Options => {
  return {
    title: {
      text: vessel.name
    },
    yAxis: {
      title: {
        text: 'Values'
      }
    },
    xAxis: {
      type: 'datetime',
    },
    series: [
      {
        name: 'CH4',
        data: emission.timeSeries.map(item => prepareSeriesData(item, 'ch4_emissions')),
        type: 'line'
      },
      {
        name: 'PM',
        data: emission.timeSeries.map(item => prepareSeriesData(item, 'pm_emissions')),
        type: 'line'
      },
      {
        name: 'NOX',
        data: emission.timeSeries.map(item => prepareSeriesData(item, 'nox_emissions')),
        type: 'line'
      },
    ]
  };
}

const prepareSeriesData = (item: EmmisionTimeSeries, key: EmmisionTimeSeriesKey): { x: number, y: number } => {
  return {
    x: new Date(item.report_from_utc).getTime(),
    y: item[key],
  }
}