import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

import { graphqlIoTCoreTelemetry } from './functions/graphqlIoTCoreTelemetry/resource';
import { graphqlIoTCoreStatus } from './functions/graphqlIoTCoreStatus/resource';

const backend = defineBackend({
  auth,
  data,
  graphqlIoTCoreTelemetry,
  graphqlIoTCoreStatus,
});