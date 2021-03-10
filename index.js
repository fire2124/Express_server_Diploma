const express = require('express');
const app = express();
const bodyParser = require('body-parser')
require('events').EventEmitter.prototype._maxListeners = 100;
//dynamic
const MhdBusses = require('./routes/vehicles/bus');
const SadBusses = require('./routes/vehicles/sad');
const Trains = require('./routes/vehicles/train');
const traffic = require('./routes/vehicles/traffic');
//delay dynamic
const Delay_mhd = require('./routes/queries/delay/delay_mhd');
const Change_of_Delay_mhd = require('./routes/queries/delay/change_of_delay_mhd');
const Delay_sad = require('./routes/queries/delay/delay_sad');
const Change_of_Delay_sad = require('./routes/queries/delay/change_of_delay_sad');
const Delay_train = require('./routes/queries/delay/delay_train');
const Change_of_Delay_train = require('./routes/queries/delay/change_of_delay_train');
const trafficQueries = require('./routes/queries/traffic/traffic');
//getTimeOnStop 
const getTimeOnCurrentStop = require('./routes/queries/waitStop/timeOnCurrentStop');
const getTimeOnStopsByCurrentBus = require('./routes/queries/waitStop/timeOnStopsByCurrentBus');
const getPredictionQuery = require('./routes/queries/predictionsIsOnStop/predictionQuery');
//static
const Street  = require('./routes/static/street')
const MhdStops  = require('./routes/static/stopsMhd')
const SadStops  = require('./routes/static/stopsSAD')
const TrainStops= require('./routes/static/stopsTrains')


app.use(express.json());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
//static
app.use("/api/v1/PresovStreets",Street)
app.use("/api/v1/MhdStops",MhdStops)
app.use("/api/v1/SadStops",SadStops)
app.use("/api/v1/TrainStops",TrainStops)
//dynamic
app.use('/api/v1/currentMhdPoBusses', MhdBusses);
app.use('/api/v1/currentSadPoBusses', SadBusses);
app.use('/api/v1/currentTrains', Trains);
app.use('/api/v1/currentTraffic', traffic);
//delays
app.use('/api/v1/delay_mhd', Delay_mhd);
app.use('/api/v1/change_of_delay_mhd', Change_of_Delay_mhd);
app.use('/api/v1/delay_sad', Delay_sad);
app.use('/api/v1/change_of_delay_sad', Change_of_Delay_sad);
app.use('/api/v1/delay_train', Delay_train);
app.use('/api/v1/change_of_delay_train', Change_of_Delay_train);
//traffic
app.use('/api/v1/traffic_queries', trafficQueries);
//getTimeOnStop 
app.use('/api/v1/timeOnCurrentStop', getTimeOnCurrentStop);
app.use('/api/v1/timeOnStopsByCurrentBus', getTimeOnStopsByCurrentBus);
//predictionQuery
app.use('/api/v1/predictionQuery', getPredictionQuery);


const port = 9600;
app.listen(port, () => console.log(`Listening on port ${port}...`));