import MapboxDirectionsFactory from "@mapbox/mapbox-sdk/services/directions";

import config from "./utils/config";

const clientOptions = { accessToken: config.get("token") };
const directionsClient = MapboxDirectionsFactory(clientOptions);

export { directionsClient };
