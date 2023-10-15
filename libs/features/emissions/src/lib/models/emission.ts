import { EmmisionTimeSeries } from './emission-time-series';

export interface Emission {
  id: number;
  timeSeries: EmmisionTimeSeries[];
}
